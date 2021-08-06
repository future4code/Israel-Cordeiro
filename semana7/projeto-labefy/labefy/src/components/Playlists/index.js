import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import PlaylistCard from '../PlaylistCard';
import { axiosConfig, baseURL } from '../../constantes';


const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


` 

  class Playlists extends React.Component{
      state={
          playlists: []
      }

      componentDidMount= () =>{
          this.buscaPlaylists()
      }

      buscaPlaylists = () =>{
          axios.get(baseURL,axiosConfig).then(response =>{
              console.log(response)
              this.setState({playlists: response.data.result.list})
          }).catch(err =>{
              console.log(err)
          })
      }

      render(){
           const playlists= this.state.playlists.map(playlist =>{
               return<PlaylistCard 
               key={playlist.id}
               mudaPagina={this.props.mudaPagina}
               name={playlist.name}
               />
          })
        
        

        return(
            <PlaylistContainer>
                {playlists}
            </PlaylistContainer>
        )
    }
  
}


export default Playlists
