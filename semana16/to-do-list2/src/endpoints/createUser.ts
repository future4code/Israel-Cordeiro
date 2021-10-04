import { Request, Response } from 'express';
import insertUser from '../data/insertUser';



export default async function createUser(
    req:Request,
    res:Response
){
    try {
        // validar da requisição

        if( 
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email

        ){ res.status(400)
            .send('Preencha os campos "name","nickname" e "email"')

            return
        }

        // consultar o banco de dados 

        const id: string = Date.now() + Math.random().toString()

        await insertUser(

            id,
            req.body.name,
            req.body.nickname, 
            req.body.email

        )

        // validar saidas do banco : não houve saída nessa requisição, mas havendo tem sempre que validar.


        //responder a requisição 
        res
        .status(200)
        .send('Usuário criado com Sucesso!!')


    }catch (error:any){
         res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
    
