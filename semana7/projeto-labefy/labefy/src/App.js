import React from 'react';
import CriarPlaylist from './components/CriarPlaylist.js';
import ListaPlaylist from './components/ListaPlaylist.js'




export default class App extends React.Component  {
  state = {
    telaAtual: "criarPlaylist"
  }

  mudancaDeTela = () => {
    switch (this.state.telaAtual){
      case "criarPlaylist":
        return <CriarPlaylist irParaListaPlaylist={this.irParaListaPlaylist} />
        case "listaPlaylist":
          return <ListaPlaylist irParaCriarPlaylist={this.irParaCriarPlaylist} />
          default:
            return <di>Erro! Página não encontrada :( </di>
    }
  }

  irParaCriarPlaylist = () =>{
    this.setState({telaAtual: "criarPlaylist"})

  }

  irParaListaPlaylist = () =>{
    this.setState({telaAtual: "listaPlaylist"})

  }


  render(){
      return (
        <div>
          {this.mudancaDeTela()}
        </div>
      )
   }
}

