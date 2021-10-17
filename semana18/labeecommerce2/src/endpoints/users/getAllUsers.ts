import { Request, Response } from 'express';
import { UserDataBase } from '../../data/users/UserDataBase';



export const getAllUsers = async (req:Request, res:Response) => {
    
    try{
        const database = new UserDataBase()

        const users = await database.getAllUsers()

        res.status(200).send(users)

    }catch(err: any){
        res.status(500).send({message: err.message})

    }

}

