// EXERCÍCIO 01

function inverteArray (array) {
  const arrayInvertido = []

  for (let i = array.length -1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}



// EXERCÍCIO 02

function retornaNumerosParesElevadosADois(array) {
  const numeroPar = array.filter ((num) => num %2 === 0)
  const numeroParElevadoAoQuadrado = numeroPar.map ((num) => num **2)
  return numeroParElevadoAoQuadrado

}
 
  
// EXERCÍCIO 03
function retornaNumerosPares(array) {
   arrayPares = []
  for (num of array)
    if (num % 2 === 0){
      arrayPares.push(num)
      console.log (arrayPares)
    }
    return arrayPares
}


// EXERCÍCIO 04
function retornaMaiorNumero(array) {
 return Math.max(...array)
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false,false,true,true,true]
  return respostas

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const pares = []

  for(let i=0; i < n *2; i++){
    if (i % 2 === 0){
      pares.push(i)
    }
  }
return pares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a === b && a ===c && b === c){
    return 'Equilátero'
    }else if (a !== b && c !== a){
      return 'Escaleno'
    } else {
      return 'Isósceles'
    }
}
//console. log (checaTriangulo(4,2,4))


// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  let maiorNumero 
  let menorNumero 

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
} else {
  maiorNumero = num2
  menorNumero = num1
}
const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
const diferenca = maiorNumero - menorNumero

return {
  maiorNumero: maiorNumero,
  maiorDivisivelPorMenor: maiorDivisivelPorMenor,
  diferenca: diferenca
}

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  /*let len = array.length
  let = trocado

  do{
    trocado = false

    for(let i=0; i < len; i++){
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1]= temp
        trocado = true
      }
    }
  } while (trocado)

  const segundoMaiorNumero = array[array.length -2]
  const segundoMenorNumero = array[1]

  return [segundoMaiorNumero, segundoMenorNumero]*/
}
console.log (segundoMaiorEMenor)
// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
