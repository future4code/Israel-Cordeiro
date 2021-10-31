import { Request, Response } from "express";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { Authenticator } from "../../services/Authenticator";


export const getRecipesById = async (req: Request, res: Response) => {

    try{ 

        const token = req.headers.authorization 

        if (!token) {
            throw new Error ("Esse endpoint exige uma autorização a ser passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if (!tokenData.id) {
            res.status(401).send("Insira o token de usuário para acessar essa funcionalidade.")
        }

        const {id} = req.params
        if (!id) {
            res.status(422).send("Insira corretamente o id da receita a ser buscada.")
        }

        const getRecipe = new RecipeDatabase()
        const getRecipeId = await getRecipe.getRecipe(id)

        return res.status(200).send(getRecipeId)

    } catch (error: any) {
        res.status(400).send(error.message)
    }

}  