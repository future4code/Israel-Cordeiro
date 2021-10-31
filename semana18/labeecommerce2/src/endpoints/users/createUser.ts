import { Request, Response } from 'express';
import { BaseDataBase } from '../../data/BaseDataBase';
import { UserDataBase } from '../../data/users/UserDataBase';
import { User } from '../../entities/User';
import { IdGenerator } from '../../services/IdGenerator';


export const createUser = async (req: Request, res:Response) =>{
    try{
        const {name, email, age} = req.body
        const id = new IdGenerator().execute()
        const database = new UserDataBase()

        const newUser = new User(
            id,
            name,
            email,
            age
        )

        const findEmail = await database.getUserByEmail(email)
        if (findEmail) throw new Error ("Email already exist")

        await database.createUser(newUser)

        res.status(201).send({newUser})

    } catch(err: any){
        res.status(500).send({message: err.message})
    }

}