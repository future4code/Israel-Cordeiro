import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import { baseURL } from '../constantes';
import useForm from '../hooks/useForm';


const ContainerLogin = styled.div`
    margin-top: 250px;
    margin-left: 400px;

` 

export const  LoginPage = () => {
    const history = useHistory()
    const { form, onChange, limpaFiltros } = useForm ({ email:'', password:''})
    
    const voltarPaginaHome = () =>{
        history.push('/')
    }

    const entrarPaginaAdmin = () =>{
        history.push('/admin/trips/list')
    }

    const submeterLogin = (event) =>{
        event.preventDefault()

        console.log(form)
       
        axios.post(`${baseURL}/login`,form, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then((response) =>{
            console.log('deu certo:',response.data.token)
            localStorage.setItem('token', response.data.token)
        })
        .catch((err) =>{
            console.log('deu errado: ',err.response)
        })

        limpaFiltros()
    }

    return(
        <ContainerLogin>
           <h1>Login</h1> 
           <form onSubmit={submeterLogin}>
               <div>
               <input 
               name='email'
               placeholder='email' 
               type='email'
               value={form.email}
               onChange={onChange}
               required
               />
               </div>
               <div>
               <input 
               name='password'
                placeholder='senha'
                // type='password'
                value={form.password}
                onChange={onChange}
                required
                pattern={'^.{6,}'}
                title={'sua senha deve ter no mínimo 6 caracteres'}
               />
               </div>
                <div>
               <button onClick={voltarPaginaHome}>
                    voltar
               </button>
               <button>
                    enviar loggin
               </button>
               <button onClick={entrarPaginaAdmin}>
                    entrar pagina ADM
               </button>
                </div>
           </form>
        </ContainerLogin>

    )
}

