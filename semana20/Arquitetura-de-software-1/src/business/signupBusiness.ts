import { insertUser } from "../data/user/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async (input: any) => {
   const { name, nickname, email, password, role } = input

   if (
      !name ||
      !nickname ||
      !email ||
      !password ||
      !role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const id: string = generateId()

   const cypherPassword = await hash(password);

   await insertUser({
      id,
      name,
      nickname,
      email,
      password: cypherPassword,
      role
   })

   const token: string = generateToken({
      id,
      role: role
   })

   return token
}