import { Request, Response } from 'express';
import { userDataBase } from '../../data/users/UserDataBase';


export const getAllUsers = async (req:Request, res:Response) => {
    
    try{
        const database = new userDataBase()

        const users = await database.getAllUsers()

        res.status(200).send(users)

    }catch(err: any){
        res.status(500).send({message: err.message})

    }

}

