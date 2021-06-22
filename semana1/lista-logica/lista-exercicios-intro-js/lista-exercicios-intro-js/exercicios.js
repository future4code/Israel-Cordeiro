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
  const primeiraPosicao = array[0]
  const ultimaPosicao = array[array.length-1]
  array[0] = ultimaPosicao
  array[array.length-1]= primeiraPosicao
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
   string1 = string1.toUpperCase()
   string2 = string2.toUpperCase()

   return string1 === string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number (prompt('Em que ano estamos?'))
  const anoNascimento = Number (prompt('Qual seu ano de Nascimento?'))
  const anoCateiraIdentida = Number (prompt('Qual ano da sua carteira de identidade?'))
  const idade = anoAtual - anoNascimento
  const emissaoRg = anoAtual - anoCateiraIdentida
  const primeiraCondicao = (idade <= 20 && emissaoRg >=5)
  const segundaCondicao = (idade > 20 && idade <= 50 && emissaoRg >= 10)
  const terceiraCondicao = (idade > 50 && emissaoRg >= 15)
  const resultado = (primeiraCondicao || segundaCondicao || terceiraCondicao)

  console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  const primeiraCondicao = ano % 400 === 0
  const segundaCondicao = ano % 4 === 0
  const terceiraCondicao = ano % 100 === 0
  const resultado = primeiraCondicao || segundaCondicao && !terceiraCondicao
  return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt ('Você tem mais de 18 anos? responda Sim ou Nao')
  const ensinoMedio = prompt ('Você possui ensino médio completo? resonda Sim ou Nao')
  const disponibilidadeDoCurso = prompt ('Você possui disponibilidade exclusiva durante os horários do curso? responda Sim ou Nao')
  const resultado = idade === 'sim' && ensinoMedio === 'sim' && disponibilidadeDoCurso === 'sim'
  console.log (resultado)

}