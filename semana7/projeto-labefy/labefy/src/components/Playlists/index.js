import React from 'react';
import styled from 'styled-components'
import PlaylistCard from '../PlaylistCard';


const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


` 



  class Playlists extends React.Component{
      state={
          playlists: [
            
                {
                    "id": "37adb2e1-0dde-4310-a8e6-60f98c890780",
                    "name": "modernas"
                },
                {
                    "id": "4a874cf5-9bcd-4200-9c2a-3ca94daac871",
                    "name": "rock"
                },
                {
                    "id": "6426c1eb-d7e4-4624-8eb6-2af7afd01508",
                    "name": "alternativa"
                },
                {
                    "id": "62bcbdc2-473d-4a03-ad56-0841f06baeaf",
                    "name": "gays"
                },
                {
                    "id": "f94bafe8-8513-4525-a4d1-f00919396637",
                    "name": "mpb"
                }
          ]
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
