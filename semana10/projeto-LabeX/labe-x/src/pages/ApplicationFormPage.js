import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const ContainerForm = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

export const  ApplicationFormPage = () => {
    const history = useHistory()

    const voltarListaViagem = () =>{
        history.push('/trips/list')
    }

    return(
        <ContainerForm>
            <h1>Inscreva-se para uma Viagem</h1>
            <div>
                < input value='escolher uma viagem' />
            </div>
            <div>
                < input value='nome' />
            </div>
            <div>
                <input value='idade' />
            </div>
            <div>
                <input value='texto de candidatura' />
            </div>
            <div>
                <input value='Profissão' />
            </div>
            <div>
                <input value='Escolha um País' />
            </div>
            <div>
                <button onClick={voltarListaViagem}>
                    voltar
                </button>
                <button>
                    enviar 
                </button>
            </div>
        </ContainerForm>

    )
}

