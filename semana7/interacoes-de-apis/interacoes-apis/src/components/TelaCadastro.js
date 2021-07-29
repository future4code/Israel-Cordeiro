import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    border: 5px solid pink;
    padding: 10px;
    width: 400px;
    height:800px;
    display: grid;
    margin-left: 700px;
    margin-top: 50px ; 
    text-align: center;
    background-color: grey;

    > button {
        margin: 10px;
        border: 5px solid pink;
        &:hover {
            cursor: pointer;
        }
    }

    >h2 {
        color: pink;
        margin-top: 50px;
    }

    >input{
        margin: 10px;
        font-size: 15px;
        border: 5px solid pink;
    }
` 



export default class TelaCadastro extends React.Component {
    state ={
        nome:"",
        email:""
    }
    
    handleNome = (event) =>{
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    fazerCadastro = () =>{
       const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
           name: this.state.nome,
           email: this.state.email
       }

       axios.post(url, body, {
           headers :{
            Authorization: "israel-cordeiro"
           }
       })
       .then((res) => {
           alert ("Usuário(a) cadastrado(a) com Sucesso!!!")
           this.setState({nome: "", email: ""})
       })
       .catch((err) => {
           alert (err.response.data.message)
       })
    }
 
    render(){
        return (
            <Container>
              <button onClick={this.props.irParaListaUsuarios}>Ir para Lista de Usuários</button>
              <h2>Cadastro</h2>
              <input 
              placeholder={"Nome"}
              value={this.state.nome}
              onChange={this.handleNome}
              />
              <input 
              placeholder={"E-mail"} 
              value={this.state.email}
              onChange={this.handleEmail}
              />
              <button onClick={this.fazerCadastro}>Cadastrar</button>
            </Container>
        )
    }
}





