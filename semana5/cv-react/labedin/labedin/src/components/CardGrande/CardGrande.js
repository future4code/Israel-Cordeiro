import React from 'react';
import styled from "styled-components"

const Mae = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`

const Imagem = styled.img `
     width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`

const Nome = styled.h4 `
     margin-bottom: 15px;

`

const Filha = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

function CardGrande(props) {
    return (
        <Mae>
            <Imagem src={ props.imagem } />
            <Filha>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </Filha>
        </Mae>
    )
}

export default CardGrande;