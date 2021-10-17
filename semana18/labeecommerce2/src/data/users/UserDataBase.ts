import { User } from './../../entities/User';
import { BaseDataBase } from "../BaseDataBase";

export class UserDataBase extends BaseDataBase{

    private static tableName = "labecommerce_user"
    
    // tratar os resultados vindos do Db
    private toUser = (input : User) => new User(
        input.id,
        input.name,
        input.email,
        input.age
    )

     createUser = (user: User) => BaseDataBase
     .connection(UserDataBase.tableName)
     .insert(user)

     // método de verificação 
     getUserByEmail = async (email:string) =>{
         const [result] = await BaseDataBase
         .connection(UserDataBase.tableName)
         .where({ email })
     
        //  console.log(result)
        //  return result

        if (result) return this.toUser(result)
     }

     getAllUsers = async () => {
         const result = await BaseDataBase
         .connection(UserDataBase.tableName)

        return result.map(this.toUser)
     }
}