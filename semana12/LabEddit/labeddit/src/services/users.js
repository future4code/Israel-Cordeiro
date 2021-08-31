import axios from 'axios';
import {BASE_URL, headers} from '../constants/urlsAndAutorizations';
import { vaiParaFeed, vaiParaLogin } from '../routes/coordinator';

 export const login = (body, clear, history) =>{
    axios.post(`${BASE_URL}/users/login`,body, headers)
    .then((res) =>{
        localStorage.setItem('token', res.data.token)
        clear()
        vaiParaFeed(history)
    })
    .catch((err) => alert('Erro no Login'))
}

export const registration = (body,clear, history) =>{
    axios.post(`${BASE_URL}/users/signup`, body,headers)
    .then((res) =>{
        localStorage.setItem('token', res.data.token)
        clear()
        vaiParaLogin(history)
    })
    .catch((err) =>('Erro no Cadastro'))
}