import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { baseURL } from '../constantes/index';


const ContainerPageAdm = styled.div`
    margin-top: 80px;
    margin-left: 400px;
 
` 

const ContainerCardAdm = styled.div` 
    border: 1px solid black;
    width: 400px;
    margin-top: 20px;
    border-radius: 5px;

    button{
        border-radius: 5px;
        cursor: pointer;
        transition-duration: 0.4s;
        margin-bottom: 10px;
    }


    button:hover {
        background-color: #FF0000; /* red*/
        color: white;
}

`


const ContainerButton = styled.div`
  
  button{
      margin-left: 20px;
      width: 100px;
      border-radius: 5px;
      cursor: pointer;
  }


` 

 export const  AdminHomePage = () => {
     const history = useHistory()
     const [lista, setLista] = useState([{id: []}])
     const params = useParams()
     const idTrips = params.id

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
             console.log('lista viagens', response.data.trips)
        })
         .catch((err) =>{
             console.log(err)
         })
          
    }

    const deletar = (idTrips, setLista) =>{
        const token = localStorage.getItem('token')
        axios.delete(`${baseURL}/trips/${idTrips}`, {
            headers:{
                auth:token
            }
        })
        .then((response) =>{
            setLista(response)
            alert('Viagem deletada com sucesso!!')
        })
        .catch((err) =>{
            console.log(err)
        })
    }

     const renderizaLista = lista.map((item) => {
        return (
            <ContainerCardAdm>
                <p onClick={() => irParaTelaDetalhesViagem(item.id)} key={item.id}><b>{item.name}</b></p>
                <button onClick={() => deletar(item.id, setLista)}>deletar</button>
            </ContainerCardAdm>
        )
    })


    useEffect(() =>{
        pegaLista()
    }, [])

    return(
        <ContainerPageAdm>
            <h1>Painel Administrativo</h1>
            <div>
                <ContainerButton>
                <button onClick={voltarParaHomePage}>
                    voltar
                </button>
                <button onClick={irParaTelaCriarViagem}>
                    criar viagem 
                </button>
                <button onClick={voltarTelaLogin}>
                    logout
                </button>
                </ContainerButton>
                {renderizaLista}
                {/* {lista.map((item) => {
                    return (
                        <ContainerCardAdm>
                            <p onClick={() => irParaTelaDetalhesViagem(item.id)} key={item.id}><b>{item.name}</b></p>
                            <button onClick={() => deletar(item.id, setLista)}>deletar</button>
                        </ContainerCardAdm>
                    )
                })} */}
            </div>
        </ContainerPageAdm>

    )
}

