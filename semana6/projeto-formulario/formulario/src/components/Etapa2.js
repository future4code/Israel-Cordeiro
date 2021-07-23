//import './App.css';
import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'


const ContainerLista = styled.div`
text-align: center;
margin-top: 100px;
font-size: 35px;

` 



class Etapa2 extends React.Component {
    render(){
        return (
            <ContainerLista>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                <PerguntaAberta pergunta={"5. Qual curso?"} />
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />               
                </div>  
                    
            </ContainerLista>
        );
    }
}

export default Etapa2;
