import React from 'react';
//import styled from 'styled-components'
//import Post from './components/Post/Post';
import Imagem from "./imagem/flor.jpg"
import Perfil from "./imagem/perfil.jpg"
import Feed from "./imagem/leao.jpeg"



  class App extends React.Component {
    state = {
      posts: [
        {
          nomeUsuario: 'Paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
        },
        {
          nomeUsuario: 'Israel',
          fotoUsuario: {Perfil},
          fotoPost: {Feed}
        },
        {
          nomeUsuario:'Thais',
          fotoUsuario:{Imagem},
          fotoPost: {Imagem}
        }
      ],

      valorInputNome: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: ''

    }
    render() {

      const listaDePost = this.state.post.map ((post) => {
        return(
          <post
          {...post.nomeUsuario}
          {...post.fotoUsuario}
          {...post.fotoPost}
          />
        )
    })


    onChangeInputNome = (event) =>{
      this.setState ({valorInputNome: event.target.value})
    }

    onChangeInputFotoUsuario = (event) =>{
      this.setState ({valorInputFotoUsuario: event.target.value})
    }

    onChangeInputFotoPost = (event) =>{
      this.setState ({valorInputFotoPost: event.target.value})
    }

      return (
        <div>
           {listaDePost}
            
            <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder= 'nome'
            />

            <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder= 'Foto do Usuario'
            />

            <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder='Foto do Post'
            />
        </div>
          
      )
   }
}
  export default App;
