
import React from 'react';
import ListaUsuarios from './components/ListaUsuarios.js';
import TelaCadastro from './components/TelaCadastro.js'



export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  mudancaDeTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaListaUsuarios={this.irParaListaUsuarios} />
        case "lista":
          return <ListaUsuarios irParaTelaCadastro={this.irParaTelaCadastro} />
          default:
            return <di>Erro! Página não encontrada :( </di>
    }
  }

  irParaTelaCadastro = () =>{
    this.setState({telaAtual: "cadastro"})

  }

  irParaListaUsuarios = () =>{
    this.setState({telaAtual: "lista"})

  }


  render(){
      return (
        <div>
          {this.mudancaDeTela()}
        </div>
      )
   }
}


