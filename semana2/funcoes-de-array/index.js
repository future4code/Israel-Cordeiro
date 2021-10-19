// EXERCÍCIO DE CÓDIGO 1-
//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens 
//abaixo utilizando as funções de array map e filter:
//const pets = [
 //   { nome: "Lupin", raca: "Salsicha"},
  //  { nome: "Polly", raca: "Lhasa Apso"},
   // { nome: "Madame", raca: "Poodle"},
    //{ nome: "Quentinho", raca: "Salsicha"},
   // { nome: "Fluffy", raca: "Poodle"},
   // { nome: "Caramelo", raca: "Vira-lata"},
 //]
 //a) Crie um novo array que contém apenas o nome dos doguinhos
 //b) Crie um novo array apenas com os cachorros salsicha
 //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 // A mensagem deve ser: "`Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.raca.nome}`"

 /*const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]*/

  /*a-  const apenasNomesDogs = pets.map((dog) =>{
        return dog.nome 
    })
    console.log (apenasNomesDogs)*/

   /* b- const apenasSalsicha = pets.filter((dog) =>{
        return dog.raca === 'Salsicha'
    })
    console.log(apenasSalsicha)*/

   /*c- const clientesPoodle = pets.filter((dog) => {
         return dog.raca === 'Poodle'    
     })
     const mensagemPoodle = clientesPoodle.map ((pet) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)

     console.log (mensagemPoodle)*/

     //EXERCÍCIO 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
     //utilizando as funções de array map e filter:
     /*const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]*/
     //a) Crie um novo array que contenha apenas o nome de cada item
     //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
     //aplicando 5% de desconto em todos eles
     //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
     //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
    // dica da d)Para te ajudar, você pode usar o método de strings chamado includes() 
    //que verifica se os caracteres escolhidos fazem parte da sua string
    //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter 
    //frases apenas dos itens cujo nome contenha a palavra "Ypê"
    // dica da e)você pode encadear o uso do map e do filter

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

    /* a- 
     const nomeDosItens = produtos.map ((compras)=>{
         return compras.nome
     })
     console.log(nomeDosItens)*/

     /*b- const produtoEdesconto = produtos.map((produto) => ({
         nome: produto.nome,
         desconto: produto.preco -(produto.preco *0.05)
     }))
     console.log(produtoEdesconto)*/

     /*c-const apenasBebidas = produtos.filter ((refri)=>{
         return refri.categoria === 'Bebidas'
     })
     console.log(apenasBebidas)*/

     /*d- const nomeYpe = produtos.filter ((objeto)=>{
         return objeto.nome.includes('Ypê')
     })
     console.log (nomeYpe)*/

       /*e- const nomeYpe = produtos.filter ((objeto)=>{
         return objeto.nome.includes('Ypê')
        })
        const frase = nomeYpe.map ((produto)=> `Compre ${produto.nome} por ${produto.preco}`)

        console.log (frase)*/