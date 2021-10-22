import app from './app';
import { getInformations } from './endpoints/getInformations';
import { login } from './endpoints/login';
import { signup } from './endpoints/signup';

app.post('/user', signup );
app.post('/user/login', login );
app.get('/user/profile', getInformations);
