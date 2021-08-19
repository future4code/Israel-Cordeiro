import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { baseURL } from '../constantes/index';

const ContainerCardAdm = styled.div` 
    border: 1px solid black;
    width: 500px;

`

const ContainerPageAdm = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

 export const  AdminHomePage = () => {
     const history = useHistory()
     const [lista, setLista] = useState([])

     const voltarParaHomePage = () => {
         history.push('/')
     }

     const voltarTelaLogin = () =>{
         history.push('/login')
     }

     const irParaTelaCriarViagem = () =>{
         history.push ('/admin/trips/create')
     }

     const irParaTelaDetalhesViagem = (id) =>{
         history.push(`/admin/trips/${id}`)
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
            <ContainerCardAdm>
                <p onClick={() => irParaTelaDetalhesViagem(item.id)} key={item.id}><b>{item.name}</b></p>
            </ContainerCardAdm>
        )
    })

    return(
        <ContainerPageAdm>
            <h1>Painel Administrativo</h1>
            <div>
                <button onClick={voltarParaHomePage}>
                    voltar
                </button>
                <button onClick={irParaTelaCriarViagem}>
                    criar viagem 
                </button>
                <button onClick={voltarTelaLogin}>
                    logout
                </button>
                {retornaLista} 
            </div>
        </ContainerPageAdm>

    )
}

