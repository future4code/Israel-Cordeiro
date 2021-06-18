// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
  console.log (soma)
}
soma (1,2)

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
  
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura do retangulo')
  const largura = prompt('digite a largura do retangulo')
  const multiplicacao  = altura * largura
  console.log (multiplicacao)
}


// EXERCÍCIO 02

function imprimeIdade() {
  const anoAtual =      prompt ('Digite o ano atual')
  const anoNascimento = prompt ('Digite seu ano de Nascimento')
  const subtracao = anoAtual - anoNascimento
  console.log (subtracao)
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  return peso / (altura * altura)
  console.log (calculaIMC)
}
calculaIMC (85, 1.8)

// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  
  const nome = prompt ('Qual é seu nome?')
  const idade = prompt('Quantos anos você tem?')
  const email = prompt ('Qual é seu email?')
  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
  
  const cor1 = prompt ('Me diga sua primeira cor favorita')
  const cor2 = prompt ('Me diga sua segunda cor favorita')
  const cor3 = prompt ('Me diga sua terceira cor favorita')
  const cores = [cor1,cor2,cor3]
  console.log (cores)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  
}
string ('oi')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosNecessarios = custo / valorIngresso
  return ingressosNecessarios
  
}
custo (1.000)
valorIngresso (10)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const mesmoTamanho = (string1.length === string2.length)
  return mesmoTamanho
 
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array.pop()
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const trocaArray = array[0]
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}