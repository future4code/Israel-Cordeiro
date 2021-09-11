import axios from 'axios';
import {BASE_URL, headers} from '../constants/urlsAndAutorizations';
import { useParams } from "react-router";



// export const creatComments = (body, id) =>{
//     axios.post(`${BASE_URL}/posts/${params.id}/comments`,body, headers)
//     .then((res) =>{
//         console.log(res.data)
//     })
//     .catch((err) => alert(err.response.data.errors))
// }