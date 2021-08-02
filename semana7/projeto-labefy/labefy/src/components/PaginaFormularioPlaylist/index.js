import React from 'react';
import styled from 'styled-components'


const PLaylistCreatFormContainer  = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;


` 
const PlaylistCreatForm = styled.form`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

` 

  class PaginaFormularioPlaylist extends React.Component {
      state ={

      }
       render(){
        return(
            <PLaylistCreatFormContainer>
                <h1>Cadastrar Nova Playlist</h1>
                <PlaylistCreatForm>
                 <label> Nova Playlist</label>
                 <input 
                     placeholder="Nome da Playlist"
                 />
                 <button type="submit">Cadastrar</button>
                </PlaylistCreatForm>
            </PLaylistCreatFormContainer>
         
                  
        )

    } 
      
}


export default PaginaFormularioPlaylist


    

















































