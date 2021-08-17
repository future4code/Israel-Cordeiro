import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constantes/index';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const ContainerListTrips = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

const ContainerLista = styled.div`

` 

export const  ListTripsPage = (props) => {
    const [lista, setLista] = useState([])
    const history = useHistory()

    const voltarPgHome = () =>{
        history.push('/')
    }

    const inscreverForm = () =>{
        history.push('/trips/application')
    }

      const pegaLista = () => {
        axios.get(`${baseURL}/trips`)
        .then((response) =>{
            setLista(response.data)
            console.log('lista viagens', response.data)
        })
         .catch((err) =>{
             console.log(err)
         })
          
         console.log(lista)
    }

    useEffect(() =>{
        pegaLista()
    }, [])


    return(
        <ContainerListTrips>
            <div>
                <button onClick={voltarPgHome}>
                    voltar
                </button>
                <button onClick={inscreverForm}>
                    inscrever-se
                </button>
            </div>
            <div>
            <h1> Lista de Viagens </h1>
            </div>
             <div>
                {lista.name}
             </div>
        </ContainerListTrips>

    )
}

