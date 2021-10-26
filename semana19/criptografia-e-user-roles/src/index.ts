import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
// import { HashManager } from "./services/HashManager"

app.post('/users/signup', createUser)
app.post("/users/login", login)
app.put('/users', editUser)



// const now = Date.now()
// const hash = new HashManager().generateHash("bananinha")
// console.log(Date.now() - now)
// console.log(
//   new HashManager().compareHash(
//     "bananinha",
//     "$2a$12$.xw8Xd/6qkmfnqZ36AAJyuYunUnCkjBdrDFib6KfI8yqC1U/UOGUa")
// )

// $2a$12$.xw8Xd/6qkmfnqZ36AAJyuYunUnCkjBdrDFib6KfI8yqC1U/UOGUa
// $2a$12$Ke4Zg5e0l6wTdQxXW6cDZ.X0zptQt8pv88tnLlkqqaF2UApq5Qpt6

