

// ---------- Exercício 1 ----------
console.log("Bem-vindos à Biblioteca do Bairro!");
console.log("Anos desde a abertura:", 2026 - 1987); // 39


// ---------- Exercício 2 ----------
const nome = "Biblioteca do Bairro";
const morada = "Rua das Flores, 12";
let livrosDisponiveis = 1250;
livrosDisponiveis = livrosDisponiveis - 3; // três empréstimos
console.log(livrosDisponiveis); // 1247
console.log(`A ${nome} tem ${livrosDisponiveis} livros disponíveis.`);
console.log(typeof nome, typeof morada, typeof livrosDisponiveis);
console.log(nome.toUpperCase());

// ---------- Exercício 3 ----------
function aberta3(dia, hora) {
  if (dia === "domingo") return false;
  if (dia === "sábado") return hora >= 10 && hora < 13;
  return hora >= 9 && hora < 19;
}
for (const [d, h] of [["domingo", 11], ["sábado", 11], ["quarta", 19], ["sexta", 9]]) {
  console.log(d, h, aberta3(d, h) ? "Aberta" : "Fechada");
}

// ---------- Exercício 4 ----------
function calcularMulta(dias) {
  return dias > 15 ? (dias - 15) * 0.5 : 0;
}
function estaAberta(dia, hora) {
  return aberta3(dia, hora);
}
function formatarEuros(valor) {
  return valor.toFixed(2).replace(".", ",") + " €";
}
function mensagemMulta(dias) {
  const multa = calcularMulta(dias);
  if (multa === 0) return "Sem multa";
  return `Multa a pagar: ${formatarEuros(multa)}`;
}
console.log(calcularMulta(10), calcularMulta(22), calcularMulta(30)); // 0 3.5 7.5
console.log(estaAberta("domingo", 11), estaAberta("segunda", 9), estaAberta("sábado", 13));
console.log(formatarEuros(3.5), formatarEuros(0), formatarEuros(12.25));
console.log(mensagemMulta(10), "|", mensagemMulta(22), "|", mensagemMulta(30));

// ---------- Exercício 5 ----------
const leituras = ["Os Maias", "Mensagem", "A Sibila", "Os Lusíadas", "Aparição"];
leituras.push("Memorial do Convento", "Ensaio sobre a Cegueira");
console.log(leituras.length); // 7
leituras.forEach((titulo, i) => console.log(`${i + 1}. ${titulo}`));
const longos = leituras.filter(t => t.length > 10);
const maiusculas = leituras.map(t => t.toUpperCase());
console.log(longos);
console.log(maiusculas);
console.log(leituras.length); 

// ---------- Exercício 6 ----------
const catalogo = [
  { titulo: "Os Maias", autor: "Eça de Queirós", ano: 1888, disponivel: true },
  { titulo: "Mensagem", autor: "Fernando Pessoa", ano: 1934, disponivel: false },
  { titulo: "A Sibila", autor: "Agustina Bessa-Luís", ano: 1954, disponivel: true },
  { titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572, disponivel: true },
  { titulo: "Aparição", autor: "Vergílio Ferreira", ano: 1959, disponivel: true },
  { titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", ano: 1995, disponivel: false },
];
for (const l of catalogo) console.log(`${l.titulo} — ${l.autor} (${l.ano})`);
console.log("Disponíveis:", catalogo.filter(l => l.disponivel).length);
let antigo = catalogo[0];
for (const l of catalogo) if (l.ano < antigo.ano) antigo = l;
console.log("Mais antigo:", antigo.titulo);
function emprestar(titulo) {
  const livro = catalogo.find(l => l.titulo === titulo);
  if (!livro) return "Livro não encontrado.";
  if (!livro.disponivel) return "Já está emprestado.";
  livro.disponivel = false;
  return "Emprestado!";
}
console.log(emprestar("Os Maias"), emprestar("Os Maias"), emprestar("Dom Casmurro"));

const catalogo = [
  { titulo: "Os Maias", autor: "Eça de Queirós", ano: 1888, disponivel: true },
  { titulo: "Mensagem", autor: "Fernando Pessoa", ano: 1934, disponivel: false },
  { titulo: "A Sibila", autor: "Agustina Bessa-Luís", ano: 1954, disponivel: true },
  { titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572, disponivel: true },
  { titulo: "Aparição", autor: "Vergílio Ferreira", ano: 1959, disponivel: true },
  { titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", ano: 1995, disponivel: false },
];
//-----------Exercicio 7----------
const lista = document.querySelector("#lista-livros");
const resumo = document.querySelector("#resumo");

function mostrarLivros(livros) {
  lista.replaceChildren();
  for (const l of livros) {
    const item = document.createElement("li");
    const info = document.createElement("span");
    info.className = "info";
    info.textContent = `${l.titulo} — ${l.autor} (${l.ano})`;
    if (!l.disponivel) {
      item.classList.add("indisponivel");
      info.append(" · emprestado");
    }
    item.append(info);
    lista.append(item);
  }
  const n = livros.filter(l => l.disponivel).length;
  resumo.textContent = `${livros.length} livros, ${n} disponíveis`;
}

mostrarLivros(catalogo);

//-----------Exercicio 8----------
const catalogo = [
  { titulo: "Os Maias", autor: "Eça de Queirós", ano: 1888, disponivel: true },
  { titulo: "Mensagem", autor: "Fernando Pessoa", ano: 1934, disponivel: false },
  { titulo: "A Sibila", autor: "Agustina Bessa-Luís", ano: 1954, disponivel: true },
  { titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572, disponivel: true },
  { titulo: "Aparição", autor: "Vergílio Ferreira", ano: 1959, disponivel: true },
  { titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", ano: 1995, disponivel: false },
];

const lista = document.querySelector("#lista-livros");
const resumo = document.querySelector("#resumo");
const pesquisa = document.querySelector("#pesquisa");
const botao = document.querySelector("#so-disponiveis");
const form = document.querySelector("#inscricao");
const mensagem = document.querySelector("#mensagem");

let soDisponiveis = false;

function mostrarLivros(livros) {
  lista.replaceChildren();
  if (livros.length === 0) {
    const vazio = document.createElement("li");
    vazio.textContent = "Nenhum livro encontrado.";
    lista.append(vazio);
  }
  for (const l of livros) {
    const item = document.createElement("li");
    const info = document.createElement("span");
    info.className = "info";
    info.textContent = `${l.titulo} — ${l.autor} (${l.ano})`;
    if (!l.disponivel) {
      item.classList.add("indisponivel");
      info.append(" · emprestado");
    }
    item.append(info);
    lista.append(item);
  }
  const n = livros.filter(l => l.disponivel).length;
  resumo.textContent = `${livros.length} livros, ${n} disponíveis`;
}

// Pesquisa + filtro: os dois eventos chamam a mesma função
function atualizar() {
  const texto = pesquisa.value.trim().toLowerCase();
  let res = catalogo.filter(l => l.titulo.toLowerCase().includes(texto));
  if (soDisponiveis) res = res.filter(l => l.disponivel);
  mostrarLivros(res);
}

pesquisa.addEventListener("input", atualizar);
botao.addEventListener("click", () => {
  soDisponiveis = !soDisponiveis;
  botao.setAttribute("aria-pressed", String(soDisponiveis));
  atualizar();
});

// Formulário validado sem recarregar a página
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  form.nome.classList.toggle("invalido", nome === "");
  form.email.classList.toggle("invalido", !email.includes("@"));
  if (nome === "" || !email.includes("@")) {
    mensagem.className = "erro";
    mensagem.textContent = "Preencha o nome e um e-mail válido.";
    return;
  }
  mensagem.className = "sucesso";
  mensagem.textContent = `Obrigado, ${nome}! Inscrição feita.`;
  form.reset();
});

atualizar();

//-----------Exercicio 9----------
const lista = document.querySelector("#lista-livros");
const resumo = document.querySelector("#resumo");
const pesquisa = document.querySelector("#pesquisa");
const botao = document.querySelector("#so-disponiveis");
const botaoTema = document.querySelector("#tema");
const form = document.querySelector("#inscricao");
const mensagem = document.querySelector("#mensagem");

let catalogo = [];
let soDisponiveis = false;
let favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];

// ---------- Favoritos ----------
function alternarFavorito(titulo) {
  favoritos = favoritos.includes(titulo)
    ? favoritos.filter(t => t !== titulo)
    : [...favoritos, titulo];
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  atualizar();
}

// ---------- Mostrar o catálogo ----------
function mostrarLivros(livros) {
  lista.replaceChildren();
  if (livros.length === 0) {
    const vazio = document.createElement("li");
    vazio.textContent = "Nenhum livro encontrado.";
    lista.append(vazio);
  }
  for (const l of livros) {
    const item = document.createElement("li");
    const info = document.createElement("span");
    info.className = "info";
    info.textContent = `${l.titulo} — ${l.autor} (${l.ano})`;
    if (!l.disponivel) {
      item.classList.add("indisponivel");
      info.append(" · emprestado");
    }

    const guardar = document.createElement("button");
    guardar.type = "button";
    const guardado = favoritos.includes(l.titulo);
    guardar.textContent = guardado ? "Guardado" : "Guardar";
    guardar.setAttribute("aria-pressed", String(guardado));
    guardar.addEventListener("click", () => alternarFavorito(l.titulo));

    item.append(info, guardar);
    lista.append(item);
  }
  const n = livros.filter(l => l.disponivel).length;
  resumo.textContent = `${livros.length} livros, ${n} disponíveis`;
}

// ---------- Pesquisa e filtro ----------
function atualizar() {
  const texto = pesquisa.value.trim().toLowerCase();
  let res = catalogo.filter(l => l.titulo.toLowerCase().includes(texto));
  if (soDisponiveis) res = res.filter(l => l.disponivel);
  mostrarLivros(res);
}

pesquisa.addEventListener("input", atualizar);
botao.addEventListener("click", () => {
  soDisponiveis = !soDisponiveis;
  botao.setAttribute("aria-pressed", String(soDisponiveis));
  atualizar();
});

// ---------- Formulário ----------
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  form.nome.classList.toggle("invalido", nome === "");
  form.email.classList.toggle("invalido", !email.includes("@"));
  if (nome === "" || !email.includes("@")) {
    mensagem.className = "erro";
    mensagem.textContent = "Preencha o nome e um e-mail válido.";
    return;
  }
  mensagem.className = "sucesso";
  mensagem.textContent = `Obrigado, ${nome}! Inscrição feita.`;
  form.reset();
});

// ---------- Carregar o catálogo com fetch ----------
async function carregarLivros() {
  try {
    const resposta = await fetch("livros.json");
    if (!resposta.ok) throw new Error(resposta.status);
    catalogo = await resposta.json();
    atualizar();
  } catch {
    lista.textContent = "Não foi possível carregar o catálogo.";
    resumo.textContent = "";
  }
}
carregarLivros();

// ---------- Tema lembrado ----------
document.body.classList.toggle("escuro", localStorage.getItem("tema") === "escuro");
botaoTema.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("escuro");
  localStorage.setItem("tema", escuro ? "escuro" : "claro");
});