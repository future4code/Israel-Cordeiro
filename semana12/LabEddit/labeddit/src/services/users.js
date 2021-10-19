import axios from 'axios';
import {BASE_URL, headers} from '../constants/urlsAndAutorizations';
import { vaiParaFeed, vaiParaLogin } from '../routes/coordinator';

 export const login = (body, clear, history, setRightButtonText) =>{
    axios.post(`${BASE_URL}/users/login`,body, headers)
    .then((res) =>{
        localStorage.setItem('token', res.data.token)
        clear()
        vaiParaFeed(history)
        setRightButtonText('Logout')
    })
    .catch((err) => alert(err.response.data.errors))
}

export const registration = (body,clear, history,setRightButtonText) =>{
    axios.post(`${BASE_URL}/users/signup`, body,headers)
    .then((res) =>{
        localStorage.setItem('token', res.data.token)
        clear()
        vaiParaLogin(history)
        setRightButtonText('Logout')
    })
    .catch((err) =>(err.response.data.errors))
}