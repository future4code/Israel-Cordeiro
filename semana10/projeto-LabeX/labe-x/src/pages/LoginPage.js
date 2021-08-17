import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const ContainerLogin = styled.div`
    margin-top: 250px;
    margin-left: 400px;



` 

export const  LoginPage = () => {
    const history = useHistory()

    const voltarPaginaHome = () =>{
        history.push('/')
    }

    const entrarPaginaAdmin = () =>{
        history.push('/admin/trips/list')
    }

    return(
        <ContainerLogin>
           <h1>Login</h1> 
           <div>
               <div>
               <input value='email' />
               </div>
               <div>
               <input value='senha' />
               </div>
           </div>
           <div>
               <button onClick={voltarPaginaHome}>
                    voltar
               </button>
               <button onClick={entrarPaginaAdmin}>
                    entrar 
               </button>
           </div>
        </ContainerLogin>

    )
}

