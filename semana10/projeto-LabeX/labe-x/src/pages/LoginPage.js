import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {useState, UseEffect} from 'react'
import axios from 'axios';
import { baseURL } from '../constantes';


const ContainerLogin = styled.div`
    margin-top: 250px;
    margin-left: 400px;



` 

export const  LoginPage = () => {
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const voltarPaginaHome = () =>{
        history.push('/')
    }

    const entrarPaginaAdmin = () =>{
        history.push('/admin/trips/list')
    }

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) =>{
        setPassword(event.target.value)
    }

    const submeterLogin = () =>{
        console.log(email,password)
        const body ={
            email:email,
            password:password
        }
        axios.post(`${baseURL}/login`,body)
        .then((response) =>{
            console.log('deu certo:',response.data)
        })
        .catch((err) =>{
            console.log('deu errado: ',err.response)
        })
    }

    return(
        <ContainerLogin>
           <h1>Login</h1> 
           <div>
               <div>
               <input 
               placeholder='email' 
               type='email'
               value={email}
               onChange={onChangeEmail}
               />
               </div>
               <div>
               <input 
                placeholder='senha'
                type='senha'
                value={password}
                onChange={onChangeSenha}
               />
               </div>
           </div>
           <div>
               <button onClick={voltarPaginaHome}>
                    voltar
               </button>
               <button onClick= {submeterLogin}>
                    enviar loggin
               </button>
               <button onClick={entrarPaginaAdmin}>
                    entrar pagina ADM
               </button>
           </div>
        </ContainerLogin>

    )
}

