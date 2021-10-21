import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async createUser(user: User){
        try{
            await BaseDatabase.connection("cookenu_user").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })

        }catch(err:any){
          throw new Error(err.sqlMessage || err.message)
        }
    }


    public async findUserByEmail(email:string): Promise<User>{
        try{
            const user = await BaseDatabase.connection("cookenu_user")
            .select("*")
            .where({ email })
            return user[0] && User.toUserModel(user[0])

        }catch(err:any){
            throw new Error(err.sqlMessage || err.message)
        }
    }
}