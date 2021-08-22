import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constantes/index';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const ContainerListTrips = styled.div`
    margin-top: 80px;
    margin-left: 400px;


    button{
       border-radius:5px;
       cursor: pointer;
       margin-left: 15px;
       width: 120px;
    }
` 

const ContainerCardTrip = styled.div`
    border: 1px solid black;
    width: 600px;
    margin-top: 8px;
    border-radius:10px;

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
            {lista.map((item) =>{
        return(
            <ContainerCardTrip>
                <p key={item.id}><b>{item.name.toUpperCase()}</b></p>
                <p><b>Planeta: {item.planet}</b></p>
                <p><b> Descrição: {item.description}</b></p>
                <p><b> Data: {item.date}</b></p>
                <p><b>Duração:{item.durationInDays}</b></p>
            </ContainerCardTrip>
        )
    })}
          
        </ContainerListTrips>

    )
}

