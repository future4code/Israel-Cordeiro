import React from 'react';
import styled from 'styled-components'
import TrackCard from '../TrackCard/TrackCard';


const DetalhePlaylistContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;


` 
const FormularioCriarMusica = styled.form`
    display:flex;
    width: 100vw;
    height: 100px;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction:column;
    }


` 


  class DetalhePlaylist extends React.Component{
      state={
          tracks: [
            {
                "id": "182a8f24-28ba-47dc-9e96-0c9066021695",
                "name": "baby one more time",
                "artist": "Brtiney Spears",
                "url": "https://www.youtube.com/watch?v=C-u5WLJ9Yk4"
            }
          ]

      }

      render(){
          const tracks = this.state.tracks.map(track => {
              return <TrackCard 
              key={track.id}
              musicaNome={track.name}
              artista={track.artist}
              url={track.url}
              />
          })

        return(
            <DetalhePlaylistContainer>
                <FormularioCriarMusica>
                    <div>
                        <label>Nome da música:</label>
                        <input />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <input />
                    </div>
                    <button type="submit">Adiconar música</button>
                </FormularioCriarMusica>
                {tracks}
                <button onClick={() => this.props.mudaPagina('playlists')}>Voltar para Playlists</button>
             </DetalhePlaylistContainer>
        )
    }
  
}


export default DetalhePlaylist