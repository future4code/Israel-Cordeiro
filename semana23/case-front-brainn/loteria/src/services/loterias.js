import axios from 'axios';
import { BASE_URL } from '../constants/url';
import {useState, useEffect}  from "react";


     export function GetLoterias  () {
        const [loteria, setLoteria] = useState([])

        useEffect(() => {
            axios.get(`${BASE_URL}/loterias`)

            .then((res) =>{
               setLoteria(res.data)
            })
            .catch((err) =>{
                console.log(err.data)
            })
        }, [])

        return loteria
    }

 