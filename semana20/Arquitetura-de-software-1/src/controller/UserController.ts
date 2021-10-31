import { Request, Response } from "express"
import { loginBusiness } from "../business/loginBusiness"
import { signupBusiness } from "../business/signupBusiness"
import { BaseController } from "./TaskController"

export class UserController {
    login = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { email, password } = req.body
        
            const token = await loginBusiness({ email, password })
        
            res.send({
                message: "Usuário logado!",
                token
            })
        
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    signup = async (
        req: Request,
        res: Response
     ) => {
        try {
           const { name, nickname, email, password, role } = req.body
     
           const token = await signupBusiness({ name, nickname, email, password, role })
     
           res
              .status(201)
              .send({
                 message: "Usuário criado!",
                 token
              })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
     }
}