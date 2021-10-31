import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";


export const recipeTableName = "cookenu_recipe";

export class RecipeDatabase extends BaseDatabase{

    public async createRecipe(recipe: Recipe){

        try{
            await BaseDatabase.connection(`${recipeTableName}`).insert({
                 id: recipe.getId(),
                 title: recipe.getTitle(),
                 description: recipe.getDescription(),
                 createAt: recipe.getCreateAt(),
                 authorId: recipe.getAuthorId()
            })

        }catch(err:any){
          throw new Error(err.sqlMessage || err.message)
        }
    }

    public async getRecipe (id:any): Promise<Recipe[]>{
        try{
            const recipe = await BaseDatabase.connection(`${recipeTableName}`)
            .select('*')
            .where({id})
            return recipe

        }catch(err:any){
            throw new Error(err.sqlMessage || err.message)
        }
    }
}