import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { axiosConfig, baseURL } from '../../constantes';


const PLaylistCreatFormContainer  = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    border: 2px solid black;
    width: 500px;
    margin-left:350px;
    background-image: linear-gradient(to right, #E6E6FA, #F0FFFF, #FFDAB9); 

    button{
        cursor:pointer;
        border-radius:5px;
        background-color: #EEE5DE;
        color:#A0522D;

    }

    input{
        border-radius:5px;
    }

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

          axios.post(baseURL, body, axiosConfig).then(() =>{
              alert("Playlist cadastrada com sucesso")
          }).catch(err =>{
              console.log(err)
          })
          this.setState({inputNameValue: ""})
      }


       render(){
        return(
            <PLaylistCreatFormContainer>
                <h1>Nova Playlist</h1>
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


    

















































