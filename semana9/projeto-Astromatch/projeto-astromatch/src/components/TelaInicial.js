import styled from 'styled-components'
import React,{useState, useEffect} from 'react'


const ContainerCard = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin-left: 350px;
    background-color: lightsalmon;

` 

const ContainerHeader = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
   
  
` 

const TelaInicial = (props) =>{


    return(
            <ContainerCard>
                <ContainerHeader>
                    <div>
                        <h1>AstroMatch</h1>
                    </div>
                    <div>
                        <button onClick={() => props.trocaTela('matchs')}>Ir para Matchs</button>
                    </div>
                </ContainerHeader>
                <div>
                    {/* {dados()} */}
                </div>
                <div>
                    <button>s2</button>
                    <button>X</button>
                </div>
            </ContainerCard>
    )
}

export default TelaInicial;