import { Request, Response } from 'express';
import selectUserById from '../data/selectUserById';


export default async function getUserById(
    req:Request,
    res:Response
){
    try {
            //validar entradas da requisição (não necessario quado ID)
            //consultar o banco de dados 
            const user = await selectUserById(req.params.id)
            //validar saídas do banco 
            if (!user){
                res.status(404).send({
                    message: "Usuário não encontrado"
                })
            }
            //responder a requisição
            res.status(200).send({
                message: "Sucesso!!",
                id: user.id,
                nickname: user.nickname
            })

    }catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}