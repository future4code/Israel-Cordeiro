import { UserDatabase } from './../data/UserDatabase';
import {Request, Response} from 'express';
import { Authenticator } from '../services/Authenticator';


export async function getInformations(
    req: Request,
    res:Response
){
    try{
       
        const token = req.headers.authorization
        if(!token){
            res.status(400).send('Este token não esta autorizado!')
        }

        const authenticator = new Authenticator
        const tokenData = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase
        const users = await userDatabase.getInformationUsers(tokenData.id)

    
        res.status(200).send(users)

    }catch(err:any){
        res.status(400).send({message: err.message})
    }
}
