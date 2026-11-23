
/* ==========================================
   EXERCÍCIO 01 - EXPLORAR A BIBLIOTECA
========================================== */

// Executar na consola do navegador:

$0.children;
$0.children[0].textContent;
$0.firstElementChild.textContent;

document.title = "Biblioteca - teste";


/* ==========================================
   EXERCÍCIO 02 - DESENHAR A ÁRVORE
========================================== */

// Estrutura HTML:
// main
// ├── h2
// ├── article
// │   ├── h3
// │   └── p
// │       ├── texto
// │       └── strong
// └── article

// Pai de strong: p
// Filhos de main: h2 e dois article
// Irmãos de h2: os dois article


/* ==========================================
   EXERCÍCIO 03 - SELECIONAR NA BIBLIOTECA
========================================== */

{
  const titulo = document.querySelector("h1");

  const livros = document.querySelectorAll("#catalogo .livro");

  console.log(livros.length);

  const evento = document.querySelector(".evento");

  const emprestados = document.querySelectorAll(
    '[data-estado="emprestado"]'
  );

  const campo = document.querySelector('input[name="q"]');
}


/* ==========================================
   EXERCÍCIO 04 - PREVER O RESULTADO
========================================== */

{
  console.log(document.querySelector("#menu li").textContent);

  console.log(document.querySelectorAll("#menu a").length);

  console.log(
    document.querySelector(".ativo a").getAttribute("href")
  );

  console.log(document.querySelector("#menu .inativo"));

  console.log(
    document.querySelectorAll("li")[2].textContent
  );
}


/* ==========================================
   EXERCÍCIO 05 - O LIVRO EM DESTAQUE
========================================== */

{
  const destaque = document.querySelector("#destaque");

  destaque.querySelector("h3").textContent = "Mensagem";

  const capa = destaque.querySelector(".capa");

  capa.src = "img/mensagem.jpg";

  capa.alt = "Capa de Mensagem, de Fernando Pessoa";

  destaque.querySelector(".mais").href =
    "/catalogo?autor=pessoa";

  const estado = destaque.dataset.estado;

  destaque.querySelector(".estado").textContent =
    `Estado: ${estado}`;

  destaque.querySelector(".reservar").disabled =
    estado === "emprestado";
}


/* ==========================================
   EXERCÍCIO 06 - A FICHA DO LIVRO
========================================== */

{
  const livro = document.querySelector(".livro");

  const botao = livro.querySelector(".reservar");

  console.log(livro.dataset.id);

  console.log(livro.dataset.estado);

  livro.querySelector(".capa").alt = "Capa de Mensagem";

  if (livro.dataset.estado === "emprestado") {

    const [ano, mes, dia] =
      livro.dataset.devolucao.split("-");

    botao.textContent = `Disponível a ${dia}/${mes}`;

    botao.disabled = true;
  }
}


/* ==========================================
   EXERCÍCIO 07 - OS PRIMEIROS EVENTOS
========================================== */

{
  const botao = document.querySelector("#reservar");
  const pesquisa = document.querySelector("#pesquisa");
  const eco = document.querySelector("#eco");
  const sugestao = document.querySelector("#sugestao");
  const contador = document.querySelector("#contador");

  botao.addEventListener("click", () => {
    botao.textContent = "Reservado";
    botao.disabled = true;
  });

  pesquisa.addEventListener("input", () => {
    eco.textContent = `A procurar: ${pesquisa.value}`;
  });

  sugestao.addEventListener("input", () => {

    const n = sugestao.value.length;

    contador.textContent = `${n}/200`;

    contador.style.color =
      n > 180 ? "#B91C1C" : "";
  });

  pesquisa.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
      pesquisa.value = "";
    }
  });
}


/* ==========================================
   EXERCÍCIO 08 - CORRIGIR OS EVENTOS
========================================== */

{
  const botao = document.querySelector("#reservar");

  function reservar() {
    console.log("Livro reservado!");
  }

  botao.addEventListener("click", reservar);

  const campo = document.querySelector("#pesquisa");
  const resultado = document.querySelector("#resultado");

  campo.addEventListener("input", (e) => {
    resultado.textContent = e.target.value;
  });

  const link = document.querySelector("#mais");

  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    abrirDetalhes();
  });
}


/* ==========================================
   EXERCÍCIO 09 - MENU E MODO ESCURO
========================================== */

{
  const botaoMenu = document.querySelector("#botao-menu");
  const menu = document.querySelector("#menu");
  const botaoTema = document.querySelector("#botao-tema");

  botaoMenu.addEventListener("click", () => {

    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);
  });

  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
  });
}


/* ==========================================
   EXERCÍCIO 10 - PROGRESSO DE LEITURA
========================================== */

{
  const range = document.querySelector("#lido");
  const barra = document.querySelector(".progresso");
  const texto = document.querySelector("#percentagem");

  range.addEventListener("input", () => {

    const valor = Number(range.value);

    barra.style.width = `${valor}%`;

    texto.textContent = `${valor}% lido`;

    barra.classList.toggle("completo", valor === 100);
  });
}


/* ==========================================
   EXERCÍCIO 11 - CATÁLOGO A PARTIR DE DADOS
========================================== */

{
  const tpl = document.querySelector("#tpl-livro");
  const lista = document.querySelector("#catalogo");

  for (const livro of livros) {

    const item = tpl.content.cloneNode(true);

    item.querySelector(".titulo").textContent =
      livro.titulo;

    item.querySelector(".autor").textContent =
      `${livro.autor}, ${livro.ano}`;

    if (livro.emprestado) {

      item.querySelector(".livro")
        .classList.add("emprestado");

      item.querySelector(".badge").hidden = false;
    }

    lista.append(item);
  }

  document.querySelector("#total").textContent =
    `${livros.length} livros`;
}


/* ==========================================
   EXERCÍCIO 12 - LISTA DE LEITURA
========================================== */

{
  const campo = document.querySelector("#livro");
  const adicionar = document.querySelector("#adicionar");
  const lista = document.querySelector("#leitura");
  const contador = document.querySelector("#contador");

  function contar() {
    contador.textContent =
      `${lista.children.length} livros`;
  }

  adicionar.addEventListener("click", () => {

    const titulo = campo.value.trim();

    if (!titulo) return;

    const li = document.createElement("li");

    const remover = document.createElement("button");

    li.textContent = `${titulo} `;

    remover.textContent = "Remover";

    remover.addEventListener("click", () => {
      li.remove();
      contar();
    });

    li.append(remover);

    lista.append(li);

    campo.value = "";

    contar();
  });
}


/* ==========================================
   EXERCÍCIO 13 - LISTA DE LEITURA 2.0
========================================== */

{
  const lista = document.querySelector("#leitura");

  function contar() {
    console.log(`${lista.children.length} livros`);
  }

  lista.addEventListener("click", (evento) => {

    const li = evento.target.closest("li");

    if (!li) return;

    const botao = evento.target.closest("button");

    if (!botao) {
      li.classList.toggle("lido");
      return;
    }

    const acao = botao.dataset.acao;

    if (acao === "remover") {
      li.remove();
    }

    if (acao === "subir") {
      li.previousElementSibling?.before(li);
    }

    if (acao === "descer") {
      li.nextElementSibling?.after(li);
    }

    contar();
  });
}


/* ==========================================
   EXERCÍCIO 14 - INSCRIÇÃO NO CLUBE
========================================== */

{
  const form = document.querySelector("#form-clube");
  const resumo = document.querySelector("#resumo");

  form.elements.nome.addEventListener("input", (evento) => {

    const partes = evento.target.value.trim().split(/\s+/);

    const msg =
      partes.length < 2
        ? "Escreve nome e apelido."
        : "";

    evento.target.setCustomValidity(msg);
  });

  form.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const dados = new FormData(form);

    const primeiro =
      dados.get("nome").trim().split(/\s+/)[0];

    const clube = dados.get("clube");

    resumo.textContent =
      `Obrigado, ${primeiro}! Inscrição no clube ${clube}.`;

    form.reset();

    form.elements.nome.focus();
  });
}


/* ==========================================
   EXERCÍCIO 15 - PESQUISA EM DIRETO
========================================== */

{
  const pesquisa = document.querySelector("#pesquisa");

  const livros = [
    ...document.querySelectorAll("#catalogo li")
  ];

  const estado = document.querySelector("#estado");

  pesquisa.addEventListener("input", () => {

    const termo = pesquisa.value.trim().toLowerCase();

    let visiveis = 0;

    for (const li of livros) {

      const corresponde =
        li.textContent.toLowerCase().includes(termo);

      li.hidden = !corresponde;

      if (corresponde) {
        visiveis++;
      }
    }

    estado.textContent =
      `${visiveis} livros encontrados`;
  });

  pesquisa.addEventListener("keydown", (evento) => {

    if (evento.key !== "Escape") return;

    pesquisa.value = "";

    pesquisa.dispatchEvent(new Event("input"));
  });
}


/* ==========================================
   EXERCÍCIO 16 - ENCONTRAR OS ERROS
========================================== */

{
  const lista = document.querySelector("#catalogo");

  lista.addEventListener("click", (evento) => {

    const botao = evento.target.closest(".remover");

    if (botao) {
      botao.closest("li").remove();
    }
  });

  const titulo = document.querySelector("h1");

  titulo.textContent = prompt("Nome do clube?") ?? "";

  titulo.classList.add("destaque");
}
