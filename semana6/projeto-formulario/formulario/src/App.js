//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'

 export default class App extends React.Component {
   state = {
     etapa: 1,
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


   render() {
    return (
      <div>  
        <button> Próxima Etapa</button>
      </div>
    )
 }
 }

