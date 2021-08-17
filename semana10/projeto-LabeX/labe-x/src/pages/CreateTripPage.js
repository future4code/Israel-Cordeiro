import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ContainerCreatTripPage = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

export const CreateTripPage = () => {
    const history = useHistory()


    const voltarPainelAdm = () =>{
        history.push('/admin/trips/list')
    }

    return(
        <ContainerCreatTripPage>
            <h1>Criar Viagem</h1>
            <div>
                <div>
                <input value='nome' />
                </div>
                <div>
                <input value='escolha um planeta' />
                </div>
                <div>
                <input value='data' />
                </div>
                <div>
                <input value='descrição' />
                </div>
                <div>
                <input value='duração de dias' />
                </div>
                <div>
                    <button onClick={voltarPainelAdm}>
                        voltar
                    </button>
                    <button>
                        criar
                    </button>
                </div>
            </div>
        </ContainerCreatTripPage>

    )
}

