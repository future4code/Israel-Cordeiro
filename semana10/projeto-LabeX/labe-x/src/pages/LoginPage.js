import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios';
import { baseURL } from '../constantes';
import useForm from '../hooks/useForm';


const ContainerLogin = styled.div`
    margin-top: 250px;
    margin-left: 400px;

    input{
       width: 250px;
       border-radius: 5px;
       margin-top: 5px;
    }

    button{
       width: 70px;
       margin-left: 40px;
       margin-top: 10px;
       border-radius:5px;
       cursor: pointer;
    }

` 

export const  LoginPage = () => {
    const history = useHistory()
    const { form, onChange, limpaFiltros } = useForm ({ email:'', password:''})

    useEffect(() =>{
        const token = localStorage.getItem('token')

        if(token === null){
            alert ('não está logado!!!')
            history.push('/login')
        }

     }, [])
    
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
               <button onClick={entrarPaginaAdmin}>
                    entrar
               </button>
                </div>
           </form>
        </ContainerLogin>

    )
}

