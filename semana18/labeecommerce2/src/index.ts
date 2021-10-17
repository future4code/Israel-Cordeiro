import {app} from './app';
import { createProduct } from './endpoints/products/createProduct';
import { getAllProducts } from './endpoints/products/getAllProducts';
import { createUser } from './endpoints/users/createUser';
import { getAllUsers } from './endpoints/users/getAllUsers';

app.post('/users', createUser)
app.get('/users', getAllUsers)
app.post('product', createProduct)
app.get('/product', getAllProducts)
