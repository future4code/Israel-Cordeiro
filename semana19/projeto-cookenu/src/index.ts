import { getRecipesById } from './endpoints/recipe/getRecipesById';
import app from './app';
import { getInformations } from './endpoints/user/getInformations';
import { login } from './endpoints/user/login';
import { signup } from './endpoints/user/signup';
import {getInformationFromOtherProfiles} from './endpoints/user/getInformationFromOtherProfiles';
import { recipeCreation } from './endpoints/recipe/recipeCreation';


app.post('/signup', signup );
app.post('/login', login );
app.get('/user/profile', getInformations);
app.get('/user/:id', getInformationFromOtherProfiles);
app.post('/recipe', recipeCreation);
app.get('/recipe/:id', getRecipesById);