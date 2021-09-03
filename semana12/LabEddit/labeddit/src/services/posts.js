import axios from 'axios';
import {BASE_URL, headers} from '../constants/urlsAndAutorizations';



export const creatPost = (body, clear) =>{
 axios.post(`${BASE_URL}/posts`, body, headers)
 .then((res) =>{
    console.log(res.data.token)
    clear()
})
.catch((err) =>(err.response.data.errors))
   
}

   


