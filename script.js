
// Apresentação pessoal

const nome1 = "Juliana";
const idade1 = 22;
const cidade1 = "São Paulo";
const profissao1 = "Designer";

console.log(`Olá, meu nome é ${nome1}, tenho ${idade1} anos, moro em ${cidade1} e trabalho como ${profissao1}.`);


// Operações matemáticas

const numA = 10;
const numB = 5;

console.log(`Soma - ${numA + numB}`);
console.log(`Subtração - ${numA - numB}`);
console.log(`Multiplicação - ${numA * numB}`);
console.log(`Divisão - ${numA / numB}`);


// Conversor de idade

const idadeAnos = 20;
const idadeMeses = idadeAnos * 12;

console.log(`Uma pessoa de ${idadeAnos} anos viveu aproximadamente ${idadeMeses} meses.`);


// Média de notas

const notaA = 8.0;
const notaB = 7.5;
const notaC = 9.0;
const media4 = (notaA + notaB + notaC) / 3;

console.log(`A média das três notas é - ${media4.toFixed(2)}`);


// Maioridade

const idadeMaioridade = 18;

if (idadeMaioridade >= 18) {
  console.log("A pessoa é maior de idade.");
} else {
  console.log("A pessoa é menor de idade.");
}


//Número positivo, negativo ou zero

const numeroAnalise = -5;

if (numeroAnalise > 0) {
  console.log("O número é positivo.");
} else if (numeroAnalise < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é igual a zero.");
}


// Par ou ímpar

const numeroParImpar = 7;

if (numeroParImpar % 2 === 0) {
  console.log(`O número ${numeroParImpar} é par.`);
} else {
  console.log(`O número ${numeroParImpar} é ímpar.`);
}


// Situação do aluno

const n8_1 = 6.0;
const n8_2 = 5.5;
const media8 = (n8_1 + n8_2) / 2;

if (media8 >= 7.0) {
  console.log(`Média - ${media8} - Aprovado`);
} else if (media8 >= 5.0) {
  console.log(`Média - ${media8} - Em recuperação`);
} else {
  console.log(`Média - ${media8} - Reprovado`);
}

// Maior entre dois números

const valorA9 = 15;
const valorB9 = 20;

if (valorA9 > valorB9) {
  console.log(`O maior número é ${valorA9}.`);
} else if (valorB9 > valorA9) {
  console.log(`O maior número é ${valorB9}.`);
} else {
  console.log("Os números são iguais.");
}


//Maior entre três números

const n10_1 = 12;
const n10_2 = 25;
const n10_3 = 18;

const maior10 = Math.max(n10_1, n10_2, n10_3);
console.log(`O maior número entre ${n10_1}, ${n10_2} e ${n10_3} é ${maior10}.`);


//Cálculo de desconto

const precoOriginal = 120.00;
let precoFinal = precoOriginal;

if (precoOriginal > 100) {
  const desconto = precoOriginal * 0.10;
  precoFinal = precoOriginal - desconto;
}

console.log(`Valor original - R$ ${precoOriginal.toFixed(2)}`);
console.log(`Valor final - R$ ${precoFinal.toFixed(2)}`);


// Controle de acesso

const idadeAcesso = 20;
const estaAutorizado = true;

if (idadeAcesso >= 18 && estaAutorizado) {
  console.log("Acesso permitido.");
} else {
  console.log("Acesso negado.");
}


// Lista de nomes

const nomes = ["Zelia", "Jisung", "Liniker", "Juan", "Ofelia"];

console.log("Lista de nomes -");
nomes.forEach(nome => console.log(`- ${nome}`));


//Lista de compras

const compras = ["Macarrão", "Suco", "Matcha", "Café", "Bolacha"];

console.log(`Quantidade total de itens - ${compras.length}`);
console.log("Produtos cadastrados -");
compras.forEach(item => console.log(`- ${item}`));


//Cadastro de pessoa

const pessoa15 = {
  nome: "Marilia",
  idade: 30,
  cidade: "Manaus",
  profissao: "Engenheira de Software"
};

console.log("Cadastro da Pessoa -");
console.log(`Nome - ${pessoa15.nome}`);
console.log(`Idade - ${pessoa15.idade}`);
console.log(`Cidade - ${pessoa15.cidade}`);
console.log(`Profissão - ${pessoa15.profissao}`);


//Cadastro de produto

const produto16 = {
  nome: "MousePad Skzoo",
  preco: 250.00,
  categoria: "Periféricos",
  disponibilidade: true
}

const statusDisponibilidade = produto16.disponibilidade ? "disponível"  : "indisponível";
console.log(`O produto ${produto16.nome} da categoria ${produto16.categoria} custa R$ ${produto16.preco.toFixed(2)} e está ${statusDisponibilidade}.`);


//Cadastro de alunos

const alunos17 = [
  { nome: "Eduardo", idade: 14 },
  { nome: "Diego", idade: 17 },
  { nome: "Michele", idade: 15 }
];

console.log("Lista de Alunos -");
alunos17.forEach(aluno => console.log(`Aluno - ${aluno.nome} | Idade - ${aluno.idade} anos`));


//Dobro de um número

function calcularDobro(numero) {
  return numero * 2;
}

console.log(`Dobro de 5 - ${calcularDobro(5)}`);
console.log(`Dobro de 12 - ${calcularDobro(12)}`);
console.log(`Dobro de 50 - ${calcularDobro(50)}`);


//Calculadora de soma

function somar(a, b) {
  return a + b;
}

console.log(`Soma 1 (10 + 20) - ${somar(10, 20)}`);
console.log(`Soma 2 (5 + 7) - ${somar(5, 7)}`);
console.log(`Soma 3 (100 + 450) - ${somar(100, 450)}`);


//Calculadora de média

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

console.log(`Média 1 (8.0 e 6.0) - ${calcularMedia(8.0, 6.0)}`);
console.log(`Média 2 (10.0 e 9.0) - ${calcularMedia(10.0, 9.0)}`);
console.log(`Média 3 (4.0 e 5.0) - ${calcularMedia(4.0, 5.0)}`);


// Saudação personalizada

function saudar(nome) {
  return `Seja bem-vindo(a), ${nome}! É um prazer ter você aqui.`;
}

console.log(saudar("Julia"));


//Tabuada

const numTabuada = 7;

console.log(`Tabuada do ${numTabuada} -`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}


//Contagem crescente

console.log("Contagem crescente de 1 a 20 -");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


//Contagem regressiva

console.log("Contagem regressiva -");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Fim!");


// Números pares

console.log("Números pares entre 1 e 50 -");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Soma de uma lista

const listaNumeros26 = [10, 20, 30, 40, 50];
const somaLista = listaNumeros26.reduce((acc, curr) => acc + curr, 0);

console.log(`A soma dos valores [${listaNumeros26.join(", ")}] é - ${somaLista}`);


// Média de uma lista

const listaNotas27 = [7.5, 8.0, 9.5, 6.0, 7.0];
const somaNotas27 = listaNotas27.reduce((acc, curr) => acc + curr, 0);
const mediaLista27 = somaNotas27 / listaNotas27.length;

console.log(`A média das notas [${listaNotas27.join(", ")}] é - ${mediaLista27.toFixed(2)}`);


// Verificação de disponibilidade

const produtoEstoque = {
  nome: "Monitor 24 polegadas",
  preco: 899.90,
  quantidadeEstoque: 12
};

if (produtoEstoque.quantidadeEstoque > 0) {
  console.log(`O produto "${produtoEstoque.nome}" está DISPONÍVEL (${produtoEstoque.quantidadeEstoque} unidades em estoque).`);
} else {
  console.log(`O produto "${produtoEstoque.nome}" está INDISPONÍVEL.`);
}


// Boletim completo

const alunoBoletim = {
  nome: "Antonio",
  nota1: 7.5,
  nota2: 8.5
};

const mediaBoletim = (alunoBoletim.nota1 + alunoBoletim.nota2) / 2;
let situacaoBoletim = "";

if (mediaBoletim >= 7.0) {
  situacaoBoletim = "Aprovado";
} else if (mediaBoletim >= 5.0) {
  situacaoBoletim = "Recuperação";
} else {
  situacaoBoletim = "Reprovado";
}

console.log(`--- BOLETIM ---`);
console.log(`Nome - ${alunoBoletim.nome}`);
console.log(`Média - ${mediaBoletim.toFixed(2)}`);
console.log(`Situação - ${situacaoBoletim}`);

// Desafio final: Sistema de alunos

const sistemaAlunos = [
  { nome: "Maria Julia", nota1: 8.5, nota2: 9.0 },
  { nome: "Henrique", nota1: 5.5, nota2: 6.0 },
  { nome: "Nathalia", nota1: 3.5, nota2: 4.0 }
];

console.log("SISTEMA DE ALUNOS");

sistemaAlunos.forEach(aluno => {
  const mediaFinal = (aluno.nota1 + aluno.nota2) / 2;
  let situacao = "";

  if (mediaFinal >= 7.0) {
    situacao = "Aprovado";
  } else if (mediaFinal >= 5.0) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  console.log(`Nome - ${aluno.nome}`);
  console.log(`Primeira nota - ${aluno.nota1}`);
  console.log(`Segunda nota - ${aluno.nota2}`);
  console.log(`Média final - ${mediaFinal.toFixed(2)}`);
  console.log(`Situação - ${situacao}`);
  console.log("----------------------------------");
});