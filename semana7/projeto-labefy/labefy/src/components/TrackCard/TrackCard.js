import React from 'react';
import styled from 'styled-components'


const TrackCardContainer = styled.div`
    margin: 20px;
    margin-bottom: 40px;
    display:flex;
    align-items: center;
    flex-direction: column;

    div{
    display:flex;
    align-items: center;

    }


` 

const ArtistContainer = styled.p`
    margin-right: 10px;


` 
const TrackContainer = styled.h4`
    margin:10px;

` 
const DeleteButton = styled.p`
    color: red;

`  

  const TrackCard = (props) =>{
       return(
           <TrackCardContainer>
            <div>
               <TrackContainer>{props.musicaNome} - </TrackContainer>
               <ArtistContainer>{props.artista}</ArtistContainer>
                <DeleteButton>X</DeleteButton>
            </div>
            <audio controls="controls"/>
                <source src={props.url} type="audio/ogg" />

            </TrackCardContainer>
       )
   }


export default TrackCard