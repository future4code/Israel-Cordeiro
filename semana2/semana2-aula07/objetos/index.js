// EXERCÍCIO 1
//a-

/*const pessoa = {
    nome : 'Amanda',
    apelidos : ['Amandinha', 'Mandinha', 'Mandi'],
 }
    const mudandoApelidos = (objetoPessoa) => {
    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]}`)
    }
    mudandoApelidos(pessoa)

 // b- 
 
        const novosApelidos = {
        ...pessoa,
        apelido : ['Mandioca', 'Mandona', 'Amandica']
    }
     
    
    const mudancaApelidos= (objetoPessoa) => {
     console.log (`Eu sou ${novosApelidos.nome}, mas pode me chamar de:${novosApelidos.apelido[0]},${novosApelidos.apelido[1]} ou ${novosApelidos.apelido[2]}`)
     
    }
    mudancaApelidos (novosApelidos)*/

     //EXERCÍCIO 2 
       //a-
     /*const pessoa1 = {
         nome : 'Bruno',
         idade : 23,
         profissão : 'Instrutor'}

     const pessoa2 = {
        nome : 'Israel',
        idade : 27,
        profissão : 'Estudante'}    
   
        //b-

         function retornaArray(objetos) {
            return [objetos.nome, objetos.nome.length, objetos.idade, objetos.profissão, objetos.profissão.length]
         }
        console.log (retornaArray(pessoa1))
        console.log (retornaArray(pessoa2))*/

    //EXERCÍCIO 3
      //a-
    const carrinho = []
     
    //b-
    const fruta1 = {
        nome: 'Abacaxi',
         disponibilidade: true,
    }

    const fruta2 = {
        nome:  'morango', 
        disponibilidade: true,
    }
    
    const fruta3 = {
     nome: 'Pessego',
     disponibilidade: true 
    }
   
    //c-

    function adicionaFruta(objeto) {
        return carrinho.push(objeto)
    }

    adicionaFruta (fruta1),
    adicionaFruta (fruta2),
    adicionaFruta (fruta3)

    console.log (carrinho)



       
        


