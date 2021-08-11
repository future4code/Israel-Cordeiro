import styled from 'styled-components'
import React,{useState, useEffect} from 'react'
import axios from 'axios'


const ContainerList = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin-left: 350px;

` 
const HeaderContainer = styled.div`
   border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;

`


const TelaMatchs = (props) => {
    const [matchs, setMatchs] = useState([])
    const [limparTela, setLimparTela] = useState('')

    const listaMatchs = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')
        .then( response =>{
            setMatchs(response.data.results)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const limparMatchs = () =>{
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear')
        .then( response => {
            setLimparTela(response.data.results)
        })
        .catch(err =>{
            console.log(err)
        })

    }

    // useEffect(() => {
    //     listaMatchs(props.pessoa);
    //    }, [props.pessoa])


    return(
        <ContainerList>
            <HeaderContainer>
                <div>
                    <h1>AstroMatch</h1>
                </div>
                <div>
                    <button onClick={() => props.trocaTela('inicial')}>Voltar Tela Inicial</button>
                </div>
            </HeaderContainer>
            <div>
            
            </div>
            <di>
                <button>delete</button>
            </di>
        </ContainerList>

    )
}

export default TelaMatchs;