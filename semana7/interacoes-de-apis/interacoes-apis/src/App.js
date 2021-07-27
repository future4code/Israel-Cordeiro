// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import axios from 'axios'
// import style from 'styled-components'

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "israel-cordeiro-lovelace"
  }
};


export default class App extends React.Component {
  state = {
    listaUsuarios: [],
    inputLista: "",
    inputEmail: ""
  }


  componentDidMount() {
    this.pegarlista()
  }

  mudaInputLista = (event) => {
    this.setState({ inputLista: event.target.value })
  }


  pegarlista = () => {
    axios
      .get(url, headers)
      .then((resposta) => {
        this.setState({ listaUsuarios: resposta })
      })
      .catch((erro) => {
        alert(erro)
      })
  }

  criarLista = () => {
    const body = {
      name: this.state.inputLista
    }

  axios 
      .post(url, body, headers)
      .then((resposta) => {
        alert("Usuário adicionado com sucesso")
        this.setState({ inputLista: "" })
        this.pegarlista()
      })
      .catch((erro) => {
        alert(erro)
      })
    }
  


  render() {
     const componentesLista = this.state.listaUsuarios.map((lista) => {
     return <li key={lista.id}>{lista.name}</li>
     })

      return (
        <div>
          <div>
            <button>Voltar</button>
          </div>
          <div>
              <label>name:</label>
              <input name="name" type="text" 
              value={this.inputLista}
              onChange={this.mudaInputLista}
              />
          </div>
            <div>
              <label>email:</label>
              <input email="email" type="text" 
              value={this.state.inputLista}
              onChange={this.mudaInputLista}
              />
            </div>
            <div>
              <button onClick={this.criarLista}>Salvar</button>
              {componentesLista}
            </div>
        </div>
      )
   }
}


