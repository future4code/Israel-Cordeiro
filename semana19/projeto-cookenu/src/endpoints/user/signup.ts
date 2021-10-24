import { UserDatabase } from '../../data/UserDatabase';
import { IdGenerator } from '../../services/IdGenerator';
import {Request, Response} from 'express';
import { HashManager } from '../../services/HashManager';
import { User } from '../../entities/User';
import { Authenticator } from '../../services/Authenticator';

export async function signup(
    req:Request,
    res:Response

){
    try{
        const {name,email,password} = req.body

        if( !name || !email || !password ){
            res.status(422)
            .send(
                'Insira corretamente as informações "name", "email" e "password".'
                )
        }

        if (password.length < 6){
            res.status(422)
            throw new Error('Password precisa ter no minimo 6 caracteres')
        }
        
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (user){
            res.status(409).send('Esse email já encontra-se cadastrado!')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id,name,email,hashPassword)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id })

        res.status(200).send({message:'Usuário Criado com Sucesso!!', token})

    }catch(err:any){
        res.status(400).send({message: err.message})
    }

}