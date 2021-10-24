import {Request, Response} from 'express';
import { RecipeDatabase } from '../../data/RecipeDatabase';
import { Recipe } from '../../entities/Recipe';
import { Authenticator } from '../../services/Authenticator';
import { IdGenerator } from '../../services/IdGenerator';


export async function recipeCreation(
    req: Request,
    res:Response

){
    try{
        const token = req.headers.authorization

        if (!token) {
            throw new Error ("É necessário passar uma autorização nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if (! tokenData.id) {
            res.status(401).send("Insira um token de usário válido");
        }

        const recipesBaseDatabase = new RecipeDatabase()

        const {title, description, createAt, authorId} = req.body

        if (!title || !description || !createAt || !authorId ) {
            res.status(422).send('Inseria corretamente "title","description", "createAt" e "authorId".')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const newRecipes = new Recipe(id, title, description, createAt, authorId)
        await recipesBaseDatabase.createRecipe(newRecipes)

        res.status(200).send({message:"Receita criada com sucesso",id, title, description})
    }catch(err:any){
        res.status(400).send({message: err.message})
    }
}