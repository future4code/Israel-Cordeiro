
//EXERCÍCIO 1- Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//a-Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b- Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses 
//nomes em um array
/* c- Por fim, imprima o array com os nomes dos bichinhos no console */


/*const quantidadeBichinhos = Number(prompt('Quantos bichos você tem?'))
 if (quantidadeBichinhos === 0){
     console.log ('Que pena!Você pode adotar um pet!')
 }else{
     let seusBichos =[]
     for (let i=0; i<quantidadeBichinhos; i++) {
        const nomeBichos = prompt ('Digite os nomes dos seus bichos, um por um!')
        seusBichos.push(nomeBichos)
     }
     console.log (seusBichos)
    }*/



    //EXERCÍCIO 2-Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de 
//números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a- Escreva um programa que imprime cada um dos valores do array original.
// b- Escreva um programa que imprime cada um dos valores do array original divididos por 10
// c- Escreva um programa que crie um novo array contendo, somente, os números pares do array original e 
//imprima esse novo array
// d- Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: 
//numero". Depois, imprima este novo array.
// e- Escreva um programa que imprima no console o maior e o menor números contidos no array original

const exercA = () =>{

    const arrayOriginal = [ 1,2,3,4,5,6]
    let numero = arrayOriginal.length

    for(let numero of arrayOriginal){
        console.log (numero)
    }
}
const exercB = () => {
    const arrayOriginal = [ 1,2,3,4,5,6]
    for (let numero of arrayOriginal ){
        console.log (numero/10)
    }
}

const exercC = () => {
    const numeroPar = []
    const arrayOriginal = [1,2,3,4,5,6]
     
    for (let numero of arrayOriginal) {
          if (numero % 2 === 0){
              numeroPar.push(numero)
          }  
     }
     console.log (numeroPar)
}
const exercD = () => {
    const arrayString = []
    const arrayOriginal = [1,2,3,4,5,6]

    for(let i=0; i<arrayOriginal[arrayOriginal.length-1]; i++){
        arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
    }
   console.log (arrayString) 
}

const exercE = () => {
    const arrayOriginal = [1,2,3,10,4,5,6]
    let maior = 0;
    let menor = Infinity
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] < menor) {
            menor = arrayOriginal[i];
        } 
        else if (arrayOriginal[i] > maior) {
            maior = arrayOriginal[i];
            
        }
    }   
   console.log(`O menor é ${menor} e o maior ${maior}`)
}

