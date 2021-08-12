import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constants';


const ContainerList = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin-left: 350px;
    background-color: lightpink

` 
const HeaderContainer = styled.div`
   border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;

`
function TelaMatchs (props){
    const [lista, setLista] = useState([])

    const pegaLista = () =>{
        axios
        .get(`${baseURL}/matches`)
        .then((response) =>{
             console.log(response.data.matches) 
            setLista(response.data.matches)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    useEffect(() =>{
        pegaLista()
    }, [])
    

    const apagaPerfil = () =>{
        axios
        .put(`${baseURL}/clear`)
        .then((response) => { 
            pegaLista()
            alert ('Usuarios deletados com Sucesso!!')
        })
        .catch((err) =>{
            console.log(err)
        })
    }

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
            {lista.map((item) => {
                return (
                    <div>
                        <img width='70px' src={item.photo} />
                        {item.name}
                    </div>
                )
            })}
            <div>
                <button onClick={apagaPerfil}>delete</button>
            </div>
        </ContainerList>

    )
}

export default TelaMatchs;