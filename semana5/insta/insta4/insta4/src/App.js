import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Imagem from "./imagem/flor.jpg"
import Perfil from "./imagem/perfil.jpg"
import Feed from "./imagem/leao.jpeg"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        
        <Post
          nomeUsuario={'paulinhaa'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Israel'}
          fotoUsuario={Perfil}
          fotoPost={Feed}
        />

        <Post
          nomeUsuario={'Thais'}
          fotoUsuario={Imagem}
          fotoPost={Imagem}
        />



      </MainContainer>
    );
  }
}

export default App;
