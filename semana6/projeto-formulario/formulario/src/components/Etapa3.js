
import React from 'react';
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'

const ContainerLista = styled.div`
text-align: center;
margin-top: 100px;
font-size: 35px;

` 



class Etapa3 extends React.Component {
    render(){
        return (
            <ContainerLista>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <div>
                <PerguntaAberta
                pergunta={"5. Por que você não terminou um curso de graduação?"}/>
                </div>
                <div>
                    <p> 6. Você fez algum curso complementar? </p>
                    <select>
                        <option value='Nenhum'> Nenhum</option>
                        <option value='Curso Técnico'>Curso Técnico</option>
                        <option value='Curso de Inglês'>Curso de Inglês</option>
                    </select>
                </div>    
            </ContainerLista>
        );
    }
}

export default Etapa3;
