import React from 'react'
import axios from 'axios'

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "israel-cordeiro-lovelace"
  }
}

export default class telaCadastros extends React.Component {
        state = {
        inputNome: "",
        inputEmail: ""
        }


        mudaInputCadastro = (event) => {
            this.setState ({inputNome: event.target.value})
        }

        mudaInpuEmail = (event) => {
            this.setState ({inputEmail: event.target.value})
        }

    

    criarCadastro = (event) => {
        event.preventDefault ()
        
          const body = {
          name: this.state.inputNome,
          email: this.state.inputEmail
        }

        axios 
            .post(url, body, headers)
            .then(() => {
            alert("Usuário adicionado com sucesso")
            this.setState({ inputNome: "", inputEmail: ""})
            })
            .catch((error) => {
            alert(error.response.data.message)
            })

    }

    render() {
        return (
            <form onSubmit = {this.criarCadastro}>
                <label> Nome:</label>
                <input value={this.state.inputNome} onChange={this.mudaInputCadastro} />
                <label>E-Mail:</label>
                <input value={this.state.inputEmail} onChange={this.mudaInpuEmail} />
                <button>Salvar</button>
            </form>
        )
    }
}





