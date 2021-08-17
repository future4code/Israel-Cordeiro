import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ContainerPageAdm = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

 export const  AdminHomePage = () => {
     const history = useHistory()

     const voltarParaHomePage = () => {
         history.push('/')
     }

     const voltarTelaLogin = () =>{
         history.push('/login')
     }

     const irParaTelaCriarViagem = () =>{
         history.push ('/admin/trips/create')
     }

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
            </div>
        </ContainerPageAdm>

    )
}

