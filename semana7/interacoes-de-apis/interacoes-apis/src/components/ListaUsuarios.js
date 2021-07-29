import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const CardUsuario = styled.div`
    border: 3px solid pink;
    color: black;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 350px;
    margin-top: 40px;
    background-color: lightgray;
    padding: 1em 3px 30px 5px;
  
  

` 

   const CardBotao = styled.div`
    border: 5px solid pink;
    text-align: center;
    width: 400px;
    height: 800px;
    margin-top: 30px;
    margin-left: 700px ;
    background-color: grey;
    padding: 1em 3px 30px 5px;
    overflow:auto;


    >button{
        height: 70px;
        width: 200px;
        margin: 10px;
        border: 5px solid pink;
        &:hover {
            cursor: pointer;
        }
   }
   
   >h2{
        color: pink;
        margin-top: 50px;
   }
   ` 

export default class ListaUsuarios extends React.Component {
    state ={
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        axios.get(url, {
            headers: {
                Authorization: "israel-cordeiro"
            }
        })
        .then((resp) => {
            this.setState({usuarios: resp.data})
        })
        .catch((err) => {
            alert ("Ocorreu um erro, tente novamente")
        })
    }

    deletarUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
           headers: {
            Authorization: "israel-cordeiro"
           } 
        })
        .then((resp) =>{
            alert ("Usuário(a) deletado(a) com sucesso!!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert ("Ocorreu um erro tente novamente")
        })
    }
        

    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>delete</button> 
            </CardUsuario>)
        })
        
        return(
            <CardBotao>
                <button onClick={this.props.irParaTelaCadastro}> Ir para Cadastro</button>
                <h2>Lista Usuários</h2>
                {listaUsuarios}
            </CardBotao>

        )
    }
}
    
    
       