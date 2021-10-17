// import { getAllProducts } from './../../endpoints/products/getAllProducts';
// import { createProduct } from './../../endpoints/products/createProduct';
import { BaseDataBase } from "../BaseDataBase";
import { Product } from '../../entities/Product';
import { Ticket } from '../../entities/Ticket';

export class ProductDataBase extends BaseDataBase {

    private static tableName = "labecommerce_products"

    //tratar dados vindos do DB

    private toProduct = (input: any): Product =>{
        return input.origin && input.destination
        ? new Ticket(input.id, input.name, input.description, input.price, input.origin, input.destination)
        : new Product(input.id, input.name, input.description, input.price)
    }

    createProduct = async (product : Product) => {
        await BaseDataBase
        .connection(ProductDataBase.tableName)
        .insert(product)
    }

    getAllProducts = async () =>{
        const result = await BaseDataBase
        .connection(ProductDataBase.tableName)

        return result.map(this.toProduct)
    }
}