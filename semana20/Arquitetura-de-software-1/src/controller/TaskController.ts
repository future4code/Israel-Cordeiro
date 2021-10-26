import { Request, Response } from "express"
import { createTaskBusiness } from "../business/createTaskBusiness"
import { getTaskByIdBusiness } from "../business/getTaskByIdBusiness"

export interface BaseController {
    response: () => Promise<any>
}

export class TaskController implements BaseController {
    response = async () => {
        // extrai para uma response base (não precisa ficar colocando try/catch e res)
        try {
            
        } catch (error) {
            
        }
    }

    createTask = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { title, description, deadline, authorId } = req.body
        
            await createTaskBusiness({ title, description, deadline, authorId })
        
            res.status(201).end()
        
        } catch (error: any) {
            res.statusMessage = error.message
            res.status(500).end()
        }
    }

    getTaskById = async (
        req: Request,
        res: Response
    ) => {
        try {
        
            const { id } = req.params
        
            const taskWithUserInfo = await getTaskByIdBusiness({ id })
        
            res.status(200).send(taskWithUserInfo)
        
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}