//import './App.css';
import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta'


const ContainerLista = styled.div`
text-align: center;
margin-top: 100px;
font-size: 35px;

` 



class Etapa1 extends React.Component {
    render(){
        return (
            <ContainerLista> 
                <h2>ETAPA 1- DADOS GERAIS</h2>
                <div>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
                </div>
                <div>
                  <p>4. Qual sua escolaridade?</p>
                  <select>
                        <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                        <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                        <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                        <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                  </select>
                </div>
            </ContainerLista>
        );
    }
}

export default Etapa1;
