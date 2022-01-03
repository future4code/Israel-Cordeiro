import axios from 'axios';
import { BASE_URL } from '../constants/url';
import {useState, useEffect}  from "react";
import { useParams } from 'react-router';

export const GetConcursosId = (id) => {
    const [concursoId, setConcursoId] = useState([])

    useEffect(() =>{
        axios.get(`${BASE_URL}/concursos/2359`)

        .then((res) =>{
            setConcursoId(res.data)
        })
        .catch((err) =>{
            console.log(err.data)
        })

    }, [])

    return concursoId
  
}