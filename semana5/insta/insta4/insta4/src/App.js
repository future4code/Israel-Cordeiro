import React from 'react';
//import styled from 'styled-components'
//import Post from './components/Post/Post';
/* import Imagem from "./imagem/flor.jpg"
import Perfil from "./imagem/perfil.jpg"
import Feed from "./imagem/leao.jpeg" */
import styled from 'styled-components'
import Post from "./components/Post/Post";


  const arrayPosts= [
        {
          nomeUsuario: 'Paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
        },
        {
          nomeUsuario: 'Israel',
          fotoUsuario: 'https://raw.githubusercontent.com/future4code/Israel-Cordeiro/master/semana3/portifolio/imagens/perfil%20atual.jpg',
          fotoPost: 'https://picsum.photos/200/151'
        },
        {
          nomeUsuario:'Thais',
          fotoUsuario: 'https://picsum.photos/50/52',
          fotoPost: 'https://picsum.photos/200/152'
        }
  ]

     
      const AppContainer = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    `;
    
    const FormContainer = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 180px;
      width: 240px;
      border: 1px solid gray;
      margin: 20px;
      padding: 30px;
    `;
    
    class App extends React.Component {
      state = {
        posts: arrayPosts,
        userName: "",
        userPhoto: "",
        postPhoto: ""
      };


    onChangeInputNome = (event) =>{
      this.setState ({inputNome: event.target.value})
    }

    onChangeInputFotoUsuario = (event) =>{
      this.setState ({inputFotoUsuario: event.target.value})
    }

    onChangeInputFotoPost = (event) =>{
      this.setState ({inputFotoPost: event.target.value})
    }

    addNewPost = () => {
      const newPost = {
        nomeUsuario: this.state.inputNome,
        fotoUsuario: this.state.inputFotoUsuario,
        fotoPost: this.state.inputFotoPost
      };
  
      this.setState({
        posts: [...this.state.posts, newPost],
        userName: "",
        userPhoto: "",
        postPhoto: ""
      });
    };

    render() {
      const componentesPost = this.state.posts.map((p) => {
        return (
          <Post
            nomeUsuario={p.nomeUsuario}
            fotoUsuario={p.fotoUsuario}
            fotoPost={p.fotoPost}
          />
        );
      });

      return (
        <AppContainer>
          <FormContainer>
            <input
              placeholder={"Nome do Usuário"}
              value={this.state.userName}
              onChange={this.changeUserName}
            />
            <input
              placeholder={"Foto do Usuário"}
              value={this.state.userPhoto}
              onChange={this.changeUserPhoto}
            />
            <input
              placeholder={"Foto do Post"}
              value={this.state.postPhoto}
              onChange={this.changePostPhoto}
            />
            <button onClick={this.addNewPost}>Criar Post</button>
          </FormContainer>
          {componentesPost}
        </AppContainer>
      );
    }
  }
   

  export default App;
