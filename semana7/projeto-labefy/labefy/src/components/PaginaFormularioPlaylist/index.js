import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { axiosConfig, baseURL } from '../../constantes';


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
          inputNameValue:""
      }

      changeInputNameValue = (e) =>{
          this.setState({inputNameValue: e.target.value})
      }

      creatPlaylist = (e) =>{
          e.preventDefault()
          const body ={
              name: this.state.inputNameValue
          }

          axios.post(baseURL, body, axiosConfig).then(response =>{
              console.log(response)
          }).catch(err =>{
              console.log(err)
          })
      }


       render(){
        return(
            <PLaylistCreatFormContainer>
                <h1>Cadastrar Nova Playlist</h1>
                <PlaylistCreatForm onSubmit={this.creatPlaylist}>
                 <label> Nova Playlist</label>
                 <input 
                     placeholder="Nome da Playlist"
                     type="text"
                     value={this.state.inputNameValue}
                     onChange={this.changeInputNameValue}
                 />
                 <button type="submit">Cadastrar</button>
                </PlaylistCreatForm>
            </PLaylistCreatFormContainer>
         
                  
        )

    } 
      
}


export default PaginaFormularioPlaylist


    

















































