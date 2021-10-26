import React from 'react';
import Header from './components/Header/index.js';
import styled from 'styled-components'
import GerenciadorPlaylist from './components/GerenciadorPlaylist/index.js';
import PaginaFormularioPlaylist from './components/PaginaFormularioPlaylist/index.js';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
 

` 




export default class App extends React.Component  {
  state = {
    paginaAtual: "paginaformularioPlaylist"
  }

  mudaPagina = (paginaAtual) => {
    this.setState({paginaAtual: paginaAtual })
  }


  render(){
    const paginaAtual = () =>{
      if (this.state.paginaAtual === "paginaformularioPlaylist"){
        return <PaginaFormularioPlaylist />
      }else if (this.state.paginaAtual === "gerenciadorPlaylist"){
        return <GerenciadorPlaylist />
      }

    }

    return(
      <AppContainer>
        <Header 
          mudaPagina={this.mudaPagina}
        />
        {paginaAtual()}
      </AppContainer>


    )
  }

}
  



































