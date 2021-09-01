import axios from 'axios';
import {BASE_URL, headers} from '../constants/urlsAndAutorizations';

// export const comments = (id) =>{
//     axios.post(`${BASE_URL}/posts/${id}/comments`)
//     .then((res) =>{
//         localStorage.setItem('token', res.data.token)
//     })
//     .catch((err) => alert(err.response.data.errors))
// }

// export const creatComments = (body, id) =>{
//     axios.post(`${BASE_URL}/posts/${id}/comments`,body, headers)
//     .then((res) =>{
//         localStorage.setItem('token', res.data.token)
//     })
//     .catch((err) => alert(err.response.data.errors))
// }