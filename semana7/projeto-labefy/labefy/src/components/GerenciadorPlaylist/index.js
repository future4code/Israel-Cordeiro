import React from 'react';
import styled from 'styled-components'
import DetalhePlaylist from '../DetalhePlaylist';
import Playlists from '../Playlists'


const PlaylistManagerPageContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    border: 2px solid black;
    width: 500px;
    margin-left:350px;
    background-image: linear-gradient(to right, #E6E6FA, #F0FFFF, #FFDAB9); 
    overflow:auto;


` 



  class GerenciadorPlaylist extends React.Component{
      state={
          paginaAtual: "playlists",
          playlistId:""

      }

      mudaPagina = (paginaAtual, playlistId) => {
        this.setState({
            paginaAtual: paginaAtual,
            playlistId: playlistId
        
        })
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
                    playlistId={this.state.playlistId}
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


    


