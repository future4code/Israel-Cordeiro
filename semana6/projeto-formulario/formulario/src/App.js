//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final'
import styled from 'styled-components'

const ContainerButton = styled.div`
 margin-left: 900px; 
margin-top: 35px;


` 


let valor = 1;

 export default class App extends React.Component {
   state = {
     etapa: valor,
   }

   renderizarEtapa = () => {
     switch (this.state.etapa) {
       case 1:
         return <Etapa1 />;
       case 2:
         return <Etapa2 />;
       case 3:
         return <Etapa3 /> 
       default:
         return <Final />
     }
   }

   irParaProximaEtapa = () =>{
     this.setState({etapa: valor = valor + 1})
   }


   render() {
    return (
      <div> 
        {this.renderizarEtapa()} 
        <ContainerButton>
        {this.state.etapa !== 4 && (
        <button onClick={this.irParaProximaEtapa}> Próxima Etapa</button>
        )}
        </ContainerButton>
      </div>
    )
 }
 }

