import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export const userTableName = "cookenu_user";


export class UserDatabase extends BaseDatabase{

    public async createUser(user: User){

        try{
            await BaseDatabase.connection(`${userTableName}`).insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })

        }catch(err:any){
          throw new Error(err.sqlMessage || err.message)
        }
    }

    public async findUserByEmail(email:string): Promise<User>{
        try{
            const user = await BaseDatabase.connection(`${userTableName}`)
            .select("*")
            .where({ email })
            return user[0] && User.toUserModel(user[0])

        }catch(err:any){
            throw new Error(err.sqlMessage || err.message)
        }
    }

    public async getInformationUsers(id:string): Promise<any>{
        try{
            const [information] = await BaseDatabase.connection(`${userTableName}`)
            .select('id','name','email')
            .where({ id})
            return information

        }catch(err:any){
            throw new Error(err.sqlMessage || err.message)
        } 
    }

    
}