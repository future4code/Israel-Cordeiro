import React from 'react';
import axios from 'axios'


export default class ListaPlaylist extends React.Component {
    state ={
        playlist: []
        // result:{},
        // list: ""
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios.get(url, {
            headers: {
                Authorization: "israel-cordeiro-lovelace"
            }
        })
        .then((resp) => {
            this.setState({ playlist: resp.data.result.list})
            console.log(resp.data)
        })
        .catch((err) => {
            alert ("Ocorreu um erro, tente novamente")
        })
    }

    deletarPlaylist = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
           headers: {
            Authorization: "israel-cordeiro-lovelace"
           } 
        })
        .then((resp) =>{
            alert ("Playlist deletada com sucesso!!")
            this.pegarPlaylist()
            console.log(resp)
        })
        .catch((err) => {
            alert ("Ocorreu um erro tente novamente")
        })
    }
        

    render(){
         const ListaPlaylist = this.state.playlist && this.state.playlist.map((playL) => {
             return (
             <li key={playL.id}>{playL.name}
                  <button onClick={() => this.deletarPlaylist(playL.id)}>delete</button> 
             </li>
             )
         })
        
        return(
            <div>
                <button onClick={this.props.irParaListaPlaylist}> Ir para Criar Playlist</button>
                <h2>Lista Playlist</h2>
                {ListaPlaylist}
            </div>

        )
    }



}