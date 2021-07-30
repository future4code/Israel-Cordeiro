import React from 'react';
import axios from 'axios'

export default class CriarPlaylist extends React.Component {
    state ={
        nome:""
    }
    
    handleNome = (event) =>{
        this.setState({nome: event.target.value})
    }

   

    criarUmaPlaylist = () =>{
        console.log(this.criarUmaPlaylist)
       const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
       const body = {
           name: this.state.nome
           
       }

       axios.post(url, body, {
           headers :{
            Authorization: "israel-cordeiro-lovelace"
           }
       })
       .then((res) => {
           console.log(res)
           alert ("Playlist cadastrada com Sucesso!!!")
           this.setState({nome: ""})
       })
       .catch((err) => {
           alert (err.response.data)
       })
    }
 
    render(){
        return (
            <div>
              <button onClick={this.props.irParaListaPlaylist}>Ir para lista de Playlist</button>
              <h2>Criar uma Playlist</h2>
              <input 
              placeholder={"Nome"}
              value={this.state.nome}
              onChange={this.handleNome}
              />
              <button onClick={this.criarUmaPlaylist}>Criar Playlist</button>
            </div>
        )
    }


}
