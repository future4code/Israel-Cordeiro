// import { IdGenerator } from './services/IdGenerator';
import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
// import { sign, verify } from "jsonwebtoken"

app.post('/users/signup', createUser)
app.post("/users/login", login)
app.put('/users', editUser)

//verificando o id
// console.log( new IdGenerator().generateId())

// //verificação da assinatura do token
// const token = sign(
//     { id: "id do usuario"},
//     "string longa e aleatoria (por seguranca) para gerar a assinatura dos tokens",
//     {expiresIn: "10min"}
// )
// console.log(token)

//verificação do token
// const tokenData = verify(
//     token,
//     "string longa e aleatoria (por seguranca) para gerar a assinatura dos tokens"
// )

// console.log(tokenData)