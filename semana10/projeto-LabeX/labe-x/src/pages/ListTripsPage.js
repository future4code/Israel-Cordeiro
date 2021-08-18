import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constantes/index';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const ContainerListTrips = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

const ContainerCardTrip = styled.div`
    border: 1px solid black;
    width: 500px;
` 

export const  ListTripsPage = () => {
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
            setLista(response.data.trips)
            // console.log('lista viagens', response.data.trips)
        })
         .catch((err) =>{
             console.log(err)
         })
          
    }

    console.log(lista)

    useEffect(() =>{
        pegaLista()
    }, [])

    const retornaLista = lista.map((item) =>{
        return(
            <ContainerCardTrip>
                <p key={item.id}><b>{item.name.toUpperCase()}</b></p>
                <p>Pra onde? <b>{item.planet}</b></p>
                <p>{item.description}</p>
                <p> Quando ? <b>{item.date}</b></p>
                <p>Duração: <b>{item.durationInDays}</b></p>
            </ContainerCardTrip>
        )
    })

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
            {retornaLista}
        </ContainerListTrips>

    )
}

