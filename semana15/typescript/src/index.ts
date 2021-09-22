// EXERCICIO 1
// A-Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a 
// esta variável. O que acontece?

// reposta:  
//const minhaString : string= 5 a variavel reclama quando passado um valor que não corresponde a ela, 
// e não aceita.

// B-Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como podemos fazer para que essa variável também aceite strings?
// let meuNumero: number= 5

//resposta:
// type meuNumero= {
//     plavras: string,
//     numero: number
// }

// const juncao: meuNumero ={
//     plavras: 'lalala',
//     numero: 5

// }

// console.log(juncao)

//C- Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

//D- Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
// Utilize um enum para isso.

//resposta:
// enum CoresDoArcoIris{

//     VERMELHO = 'vermelho',
//     LARANJA  = 'laranja',
//     AMARELO  = 'amarelo',
//     VERDE    = 'verde',
//     AZUL     = 'azul',
//     ANIL     = 'anil',
//     VIOLETA  = 'violeta'

// }


// type Pessoa= {
//     nome: string,
//     idade: number,
//     corFavorita: CoresDoArcoIris
    
// }

// let primeiraPessoa: Pessoa ={
//     nome: 'Israel',
//     idade:28,
//     corFavorita: CoresDoArcoIris.VERMELHO
// }

// let segundaPessoa: Pessoa={
//     nome:'Camila',
//     idade:30,
//     corFavorita: CoresDoArcoIris.ANIL
// }

// let terceitaPessoa: Pessoa={
//     nome:'Mileidy',
//     idade: 29,
//     corFavorita: CoresDoArcoIris.AZUL
// }

// console.log(primeiraPessoa, segundaPessoa, terceitaPessoa)

// 2-Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//2-A-  Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//B- Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// function obterEstatisticas (numeros : number[]) : {maior: number, menor:number, media:number } {

//resposta:
//     const numerosOrdenados : number[] = numeros.sort(
//         (a,b) => a - b
//     )
//         let soma= 0

//         for (let num of numeros){
//             soma += num
//         }

//         const estatisticas : {maior: number, menor:number, media:number} = {
//                 maior: numerosOrdenados[numeros.length - 1],
//                 menor: numerosOrdenados[0],
//                 media: soma / numeros.length
//         }

//         return estatisticas
// }

//C-Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. 
//Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
// const amostraDeIdades = {
//     numeros: [21, 18, 65, 44, 15, 18],
//     obterEstatisticas: (numeros) => {...}
// }
//Ao posicionar o cursor sobre o nome da variável ou função, 
//a IDE normalmente exibe a tipagem que está sendo implicitamente atribuída a ela.

//resposta:
// type amostraDeDados = {
//     numeros: number[],
//     obterEstatisticas: (numeros: number[]) => { maior: number, menor: number, media: number }
// }

//EXERCICIO 3-A- Copie o código acima para um arquivo .ts.
// Depois, crie um type para representar um post e utilize-o para fazer a tipagem do array posts.

//rersposta:
// type post = {
//     autor: string,
//     texto: string
// }

// const posts: post[] = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]
//  B-Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
// function buscarPostsPorAutor(posts, autorInformado) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//respota:
// function buscarPostsPorAutor(posts: post[], autorInformado: string): post[] {
//     return posts.filter(
//         (post) => {
//             return post.autor === autorInformado
//         }
//     )
// }

//EXERCICIO 4- 
//A- USARIA O COMANDO TSC
//B- SE NÃO TIVESSE SIDO ADICIONADO AO TSCONFIG.JSON, 
//TERIA QUE ENTRAR NA PASTA SRC PELO TERMINAL E PARA ENTÃO DAR O TSC + O NOME DO ARQUIVO .

