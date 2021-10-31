import { insertTask } from "../data/task/insertTask"
import { generateId } from "../services/idGenerator"

export const createTaskBusiness = async (input: any) => {
   const { title, description, deadline, authorId } = input

   if (
      !title ||
      !description ||
      !deadline ||
      !authorId
   ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   await insertTask({
      id,
      title,
      description,
      deadline,
      authorId,
   })
}