import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../../constantes';

function ListTripsPage () {
    const [lista, setLista] = useState([])

    useEffect(() =>{
        axios.get(`${baseURL}/trips`)
        .then((response) =>{
            setLista(response.data)
            console.log(lista)
        })
    })

    

    return(
        <div>
            
        </div>

    )
}

export default ListTripsPage;