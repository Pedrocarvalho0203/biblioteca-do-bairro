

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