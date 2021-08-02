import React from 'react';
import styled from 'styled-components'
import DetalhePlaylist from '../DetalhePlaylist';
import Playlists from '../Playlists'


const PlaylistManagerPageContainer = styled.div`


` 



  class GerenciadorPlaylist extends React.Component{
      state={
          paginaAtual: "playlists"

      }

      mudaPagina = (paginaAtual) => {
        this.setState({paginaAtual: paginaAtual })
      }

      render(){
          const paginaAtual = () => {
                if (this.state.paginaAtual === "playlists"){
                    return  <Playlists 
                    mudaPagina={this.mudaPagina}
                    />
                }else if(this.state.paginaAtual === "detalhePlaylist"){
                    return  <DetalhePlaylist 
                    mudaPagina={this.mudaPagina}
                    />
                } 
            }
            
            return(
                <PlaylistManagerPageContainer>
                    {paginaAtual()}
                </PlaylistManagerPageContainer>
            )
    }
  
}


export default GerenciadorPlaylist


    


