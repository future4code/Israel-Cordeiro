import { Request, Response } from 'express';
import { ProductDataBase } from '../../data/products/ProductDataBase';


export const getAllProducts = async (req:Request, res:Response) =>{

    try{
        const database = new ProductDataBase()

        const result = await database.getAllProducts()

        res.status(200).send(result)

    }catch (err:any){
        res.status(500).send({message: err.message})


    }
}