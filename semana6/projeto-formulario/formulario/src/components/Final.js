
import React from 'react';
import styled from 'styled-components'

const ContainerLista = styled.div`
text-align: center;
margin-top: 100px;
font-size: 35px;

` 



class Final extends React.Component {
    render(){
        return (
            <ContainerLista>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
             </ContainerLista>
        );
    }
}

export default Final;
