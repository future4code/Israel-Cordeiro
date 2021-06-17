
//EXERCÍCIO 1

 const nome = (prompt('Qual seu nome?'))
 const email= (prompt('Qual seu e-mail ?'))

 console.log (`o e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}`)

 
 //EXERCÍCIO2
 
 const comidasPreferidas = ['batata','caldos', 'ovo', 'massas', 'queijo' ]
 console.log ('Essas são minhas comidas Preferidas', comidasPreferidas )
 
 const comidaUsuarioPreferida = (prompt('Qual sua comida preferida ?'))
 comidasPreferidas.splice (1,1 , comidaUsuarioPreferida)

 console.log (comidaUsuarioPreferida)



 //EXERCÍCIO 3 

const listaDeTarefas = []
const tarefa1 = (prompt('Me diga sua tarefa número 1 ?'))
const tarefa2 = (prompt('Me diga sua tarefa número 2 ?'))
const tarefa3 = (prompt('Me dga sua tarefa número 3 ?'))

listaDeTarefas.push (tarefa1)
listaDeTarefas.push (tarefa2)
listaDeTarefas.push (tarefa3)

console.log (listaDeTarefas)

const tarefaRealizada = (prompt('Diga qual tarefa você já realizou: 0,1 ou 2? '))
console.log (tarefaRealizada)

listaDeTarefas.splice (listaDeTarefas,1)
console.log (listaDeTarefas)


 
