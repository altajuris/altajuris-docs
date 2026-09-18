"""Publica o manual como JSON, para o chatbot de ajuda indexar.

O chatbot precisa do **texto**, não do HTML. Raspar a página publicada
significaria arrancar menu, rodapé e navegação de cada uma — e quebrar a cada
mudança de tema do Docusaurus. Aqui a fonte sai como veio: markdown.

Só `manual/` e `guias/` entram. `api-reference`, `architecture`, `database` e
`contributing` são para quem desenvolve; uma advogada perguntando "como encerro
um caso?" não deve receber trecho de endpoint.

Cada página leva a **data do último commit que a tocou**. É o que permite a
resposta dizer de quando é a informação — manual desatualizado respondendo com
confiança é pior que manual ausente, e a data deixa isso visível em vez de
silencioso.
"""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PASTAS = ("manual", "guias")
SAIDA = RAIZ / "static" / "manual.json"

#: A URL pública de cada página, para a resposta poder apontar "veja em…".
BASE = "/altajuris-docs/docs"


def frontmatter(texto: str) -> tuple[dict, str]:
    """Separa o cabeçalho YAML do corpo. Sem biblioteca: são três campos."""
    if not texto.startswith("---"):
        return {}, texto
    fim = texto.find("\n---", 3)
    if fim == -1:
        return {}, texto
    cabecalho = {}
    for linha in texto[3:fim].strip().splitlines():
        if ":" in linha:
            chave, _, valor = linha.partition(":")
            cabecalho[chave.strip()] = valor.strip().strip('"\'')
    return cabecalho, texto[fim + 4:].lstrip("\n")


def atualizado_em(caminho: Path) -> str:
    """Data do último commit que tocou o arquivo, em ISO."""
    try:
        saida = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", str(caminho)],
            cwd=RAIZ, capture_output=True, text=True, timeout=20,
        )
        return saida.stdout.strip() or ""
    except (OSError, subprocess.SubprocessError):
        return ""


def limpar(corpo: str) -> str:
    """Tira o que não é prosa: blocos de código, imagens e diretivas.

    O código não ajuda quem pergunta como usar a tela, e ocupa espaço no
    contexto que o texto útil poderia ter. As diretivas `:::tip` viram só o
    conteúdo, sem a marcação.
    """
    corpo = re.sub(r"```.*?```", " ", corpo, flags=re.S)
    corpo = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", corpo)
    corpo = re.sub(r":::\w+(?:\s+[^\n]*)?\n", "", corpo)
    corpo = corpo.replace(":::", "")
    corpo = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", corpo)  # link vira o texto
    return re.sub(r"\n{3,}", "\n\n", corpo).strip()


def paginas() -> list[dict]:
    achadas = []
    for pasta in PASTAS:
        for caminho in sorted((RAIZ / "docs" / pasta).rglob("*.md")):
            bruto = caminho.read_text(encoding="utf-8")
            cabecalho, corpo = frontmatter(bruto)
            slug = caminho.stem
            achadas.append({
                "id": f"{pasta}/{slug}",
                "titulo": cabecalho.get("title") or slug,
                "descricao": cabecalho.get("description", ""),
                "secao": pasta,
                "url": f"{BASE}/{pasta}/{slug}",
                "atualizado_em": atualizado_em(caminho),
                "texto": limpar(corpo),
            })
    return achadas


def conferir(dados: list[dict]) -> list[str]:
    """O que torna um export inútil, dito antes de ele ser publicado.

    Este repositório não tem pytest — a lógica que merece teste de verdade mora
    em `shared/utils/manual_rag.py`, no api-core. Aqui a rede é esta: o CI roda
    o export e para se ele voltar vazio, sem título ou sem prosa. Export
    silenciosamente vazio viraria um chatbot que responde "não encontrei" para
    tudo, e ninguém ligaria uma coisa à outra.
    """
    problemas = []
    if len(dados) < 10:
        problemas.append(f"só {len(dados)} páginas — o manual tem mais que isso")
    for p in dados:
        if not p["titulo"]:
            problemas.append(f"{p['id']}: sem título")
        if len(p["texto"]) < 200:
            problemas.append(f"{p['id']}: {len(p['texto'])} chars de prosa — vazio?")
        if not p["atualizado_em"]:
            problemas.append(f"{p['id']}: sem data de atualização")
    return problemas


def main() -> None:
    import sys

    dados = paginas()
    problemas = conferir(dados)
    if problemas:
        print("EXPORT INVÁLIDO:")
        for x in problemas:
            print(f"  {x}")
        sys.exit(1)

    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    SAIDA.write_text(
        json.dumps({"paginas": dados}, ensure_ascii=False, indent=1),
        encoding="utf-8",
    )
    total = sum(len(p["texto"]) for p in dados)
    print(f"manual.json: {len(dados)} páginas, {total:,} caracteres de prosa")
    for p in dados:
        print(f"  {p['id']:<28} {len(p['texto']):>6} chars  {p['atualizado_em']}")


if __name__ == "__main__":
    main()
