import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import { axiosConfig, baseURL } from '../../constantes';
import TrackCard from '../TrackCard/TrackCard';


const DetalhePlaylistContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow:auto;

    button{
        cursor:pointer;
        border-radius:5px;
        background-color: #EEE5DE;
        color:#A0522D;
        margin-top:90px;

    }


` 
const FormularioCriarMusica = styled.form`
    display:grid;
    width: 100vw;
    height: 100px;
    align-items: center;
    justify-content: space-around;
    margin-top:5px;
   

    button{
        cursor:pointer;
        border-radius:5px;
        background-color: #EEE5DE;
        color:#A0522D;
        margin-top:5px;

    }

    div{
        display: flex;
        flex-direction:column;
    }

    input{
        border-radius:5px;
        margin:5px;
    }


` 


  class DetalhePlaylist extends React.Component{
      state={
          tracks: [],
          trackName: '',
          artist: '',
          url: ''

      }

      componentDidMount = () =>{
          this.buscarFaixas()
      }

      buscarFaixas = () =>{
          axios.get(`${baseURL}/${this.props.playlistId}/tracks`, axiosConfig).then(response =>{
              this.setState({tracks: response.data.result.tracks})
          }).catch((err) =>{
              console.log(err)
          })
      }

      deletarFaixas = (trackId) =>{
          axios.delete(`${baseURL}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(response =>{
             this.buscarFaixas()
             alert('Musica deletada com sucesso!!')
          }).catch((err) =>{
              console.log(err)
          })
      }

      changeInputValues = (e) =>{
          this.setState({[e.target.name]: e.target.value})
      }

      adiconaMusicaNaPlaylist = (e) =>{
          e.preventDefault()

          const body = {
              name: this.state.trackName,
              artist: this.state.artist,
              url: this.state.url
          }

          axios.post(`${baseURL}/${this.props.playlistId}/tracks`, body, axiosConfig).then(() =>{
              this.buscarFaixas()
              this.setState({trackName:'', artist:'', url:''})
              alert('Musica Adicionada com sucesso!!')
          }).catch((err) =>{
              console.log(err)
          })

      }

      render(){
          const tracks = this.state.tracks.map(track => {
              return <TrackCard 
              key={track.id}
              musicaNome={track.name}
              artista={track.artist}
              url={track.url}
              trackId={track.id}
              deletarFaixas={this.deletarFaixas}
              />
          })

        return(
            <DetalhePlaylistContainer>
                <FormularioCriarMusica onSubmit={this.adiconaMusicaNaPlaylist}>
                    <div>
                        <label>Nome da m??sica:</label>
                        <input 
                        placeholder='Nome da Musica'
                        name='trackName'
                        value={this.state.trackName}
                        onChange={this.changeInputValues}
                        
                        />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input 
                        placeholder='Nome do Artista'
                        name='artist'
                        value={this.state.artist}
                        onChange={this.changeInputValues}

                        />
                    </div>
                    <div>
                        <label>URL da m??sica:</label>
                        <input 
                        placeholder='URL da Musica'
                        name='url'
                        value={this.state.url}
                        onChange={this.changeInputValues}
                        
                        />
                    </div>
                    <button type="submit">Adiconar m??sica</button>
                </FormularioCriarMusica>
                {tracks}
                <button onClick={() => this.props.mudaPagina('playlists', '')}>Voltar para Playlists</button>
             </DetalhePlaylistContainer>
        )
    }
  
}


export default DetalhePlaylist