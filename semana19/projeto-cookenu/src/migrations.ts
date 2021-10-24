import { connection } from "./connection";
import {userTableName} from "./data/UserDatabase";
import {recipeTableName} from "./data/RecipeDatabase";


     connection.raw(`

      CREATE TABLE IF NOT EXISTS ${userTableName}(
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS ${recipeTableName}(
          id VARCHAR(255) PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(15000) NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          authorId VARCHAR(255),
          FOREING KEY (author_id) REFERENCES ${userTableName} (id)
        );


     `).then(() => {
        console.log("Sucessfully Created!!!");
     }).catch(error => {
        console.log(error.sqlMessage || error.message);
     }).finally(()=>{
      connection.destroy()
   })
