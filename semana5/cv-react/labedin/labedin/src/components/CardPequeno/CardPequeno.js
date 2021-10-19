import React from 'react';

import styled, { css } from "styled-components"

const Div = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 75px;
`

const Imagem = styled.img `
    width: 38px;
    margin-right: 10px;
    border-radius: 50%;

`

const Texto = styled.p `
    font-weight: bold;
    margin-right: 3px;
`


function CardPequeno(props) {
    return (
        <Div >
        <Imagem  src= {props.imagem} />
        <Texto> {props.texto}</Texto>
        <p>{props.endereco} </p>
        </Div>

    )
}

export default CardPequeno;