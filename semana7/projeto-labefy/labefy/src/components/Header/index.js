import React from 'react';
import styled from 'styled-components'


const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
border: 2px solid black;
width: 500px;
height: 100px;
border-radius: 20px;
margin-left:350px;
margin-top:20px;
background-image: linear-gradient(to right, #FFDAB9, #E6E6FA, #F0FFFF); 

` 

const ButtonsContainer = styled.div`
    width: 300px;
    display:flex;
    justify-content: space-around;

    button{
        cursor:pointer;
        border-radius:5px;
        background-color: #EEE5DE;
        color:#A0522D;
    }

` 

  const Header = (props) =>{
       return(
           <HeaderContainer>
                <h1>Labefy</h1>
                <ButtonsContainer>
                    <button onClick={() => props.mudaPagina('paginaformularioPlaylist')}>Cadastrar Playlist</button>
                    <button onClick={() => props.mudaPagina('gerenciadorPlaylist')}>Gerenciar Playlist</button>
                </ButtonsContainer>
            </HeaderContainer>
       )
   }


export default Header


    
































