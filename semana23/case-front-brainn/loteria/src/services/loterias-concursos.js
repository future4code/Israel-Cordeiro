import axios from 'axios';
import { BASE_URL } from '../constants/url';

export const getConcursos = () =>{
    axios.get(`${BASE_URL}/loterias-concursos`)

    .then((res) =>{
        console.log(res.data)
    })
    .catch((err) =>{
        alert(err.data.message)
    })
}