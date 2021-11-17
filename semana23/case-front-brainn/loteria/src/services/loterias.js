import axios from 'axios';
import { BASE_URL } from '../constants/url';

export const getLoterias = () =>{
    axios.get(`${BASE_URL}/loterias`)

    .then((res) =>{
        console.log(res.data)
    })
    .catch((err) =>{
        alert(err.data.message)
    })
}