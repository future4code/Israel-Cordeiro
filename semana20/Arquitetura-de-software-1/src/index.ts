import { app } from "./app"
import { TaskController } from "./controller/TaskController"
import { UserController } from "./controller/UserController"

const userController = new UserController()
const taskController = new TaskController()

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)

app.put('/task', taskController.createTask)
app.get('/task/:id', taskController.getTaskById)

