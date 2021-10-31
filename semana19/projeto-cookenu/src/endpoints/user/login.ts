import { UserDatabase } from '../../data/UserDatabase';
import {Request, Response} from 'express';
import { HashManager } from '../../services/HashManager';
import { Authenticator } from '../../services/Authenticator';

export async function login(
    req:Request,
    res:Response

){
    try{
        const { email, password } = req.body

        if(!email || !password){
            res.status(422)
            .send(
                'Insira corretamente as informações  "email"e "password".'
                )
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user){
            res.status(409).send(' Usuário não Cadastrado!')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())
        
        if(!passwordIsCorrect){
            res.status(401).send('Email ou senha incorretos!!')
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send({message:'Usuário Logado com Sucesso!!', token})

    }catch(err:any){
        res.status(400).send({message: err.message})
    }

}