import axios from 'axios';
import { BASE_URL } from '../constants/url';

export const getConcursosID = (id) =>{
    axios.get(`${BASE_URL}/concursos/${id}`)

    .then((res) =>{
        console.log(res.data)
    })
    .catch((err) =>{
        alert(err.data.message)
    })
}