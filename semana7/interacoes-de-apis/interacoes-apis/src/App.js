
import React from 'react';
import ListaUsuarios from './components/ListaUsuarios/index';
import TelaCadastros from './components/TelaCadastro/index'




export default class App extends React.Component {
  state = {
    tela: 'cadastro'
  }

  mudancaDeTela = () => {
    this.setState ({
      tela: this.state.tela === "cadastro" ? "usuario" : "cadastro",
    })
  }

  render() {
      return (
        <div>
            <button onClick ={this.mudancaDeTela}>
            Ir para a página de {""}
            {this.state.tela === "cadastro" ? "usuarios": "cadastro"}
          </button>
             {this.state.tela === "cadastro" ? <TelaCadastros /> : <ListaUsuarios />}
        </div>
      )
   }
}


