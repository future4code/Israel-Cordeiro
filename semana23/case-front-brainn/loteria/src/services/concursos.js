import axios from 'axios';
import { BASE_URL } from '../constants/url';
import {useState, useEffect}  from "react";

export function GetConcursos() {
    const [concursos, setConcursos] = useState([])
    
    useEffect(() =>{
        axios.get(`${BASE_URL}/loterias-concursos`)

        .then((res) =>{
            setConcursos(res.data)
        })
        .catch((err) =>{
            console.log(err.data)
        })

    }, [])

    return concursos
}