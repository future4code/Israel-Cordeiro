import { getAllUsers } from '../../endpoints/users/getAllUsers';
import { User } from './../../entities/User';
import { BaseDataBase } from "../BaseDataBase";

export class userDataBase extends BaseDataBase{

    private static tableName = "labecommerce_user"
    
    // tratar os resultados vindos do Db
    private toUser = (input : User) => new User(
        input.id,
        input.name,
        input.email,
        input.age
    )

     createUser = (user: User) => BaseDataBase
     .connection(userDataBase.tableName)
     .insert(User)

     // método de verificação 
     getUserByEmail = async (email:string) =>{
         const [result] = await BaseDataBase
         .connection(userDataBase.tableName)
         .where({email})
         
        //  console.log(result)
        //  return result

        if (result) return this.toUser(result)
     }

     getAllUsers = async () =>{
         const result = await BaseDataBase
         .connection(userDataBase.tableName)

        return result.map(this.toUser)
     }
}