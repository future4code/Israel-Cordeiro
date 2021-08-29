import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'


const ContainerHome = styled.div`
    margin-top: 250px;
    text-align: center;

`
const ContainerButton = styled.div`
  
      button{
        border-radius:5px;
       cursor: pointer;
       margin-left: 15px;
       width: 120px;


      } 

` 

 export const HomePage = () => {
    const history = useHistory()
    

    const vaiParaListTripsPage = () =>{
        history.push('/trips/list')
    }

    const vaiParaLogin = () =>{
        history.push('/login')
    }
    

    return(
        <ContainerHome>
            <h1>LabeX</h1>
            <ContainerButton>
                <button onClick={vaiParaListTripsPage}>
                    Ver Viagens 
                </button>
                <button onClick={vaiParaLogin}>
                    Área de Admin
                </button>
            </ContainerButton>
        </ContainerHome>

    )
}

