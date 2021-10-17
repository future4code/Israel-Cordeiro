import { Request, Response } from 'express';
import { ProductDataBase } from '../../data/products/ProductDataBase';
import { Product } from '../../entities/Product';
import { Ticket } from '../../entities/Ticket';
import { IdGenerator } from '../../services/IdGenerator';

export const createProduct = async (req: Request, res:Response ) =>{

  try{
    const {name, description, price, origin, destination}= req.body
    const id = new IdGenerator().execute()
    const database = new ProductDataBase()

    //duas opções de entrada produto ou ticket
    const newProduct = origin && destination 
    ? new Ticket(id, name, description, price, origin, destination)
    : new Product(id, name, description, price)

    await database.createProduct(newProduct)

    res.status(201).send({product: newProduct})

  }catch(err:any){
      res.status(500).send({message: err.message})

  }

}