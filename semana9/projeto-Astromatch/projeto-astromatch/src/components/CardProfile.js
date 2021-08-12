import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constants';
import Coracao from '../Image/heart.png'
import Excluir from '../Image/excluir.png'

const ContainerCard = styled.div`

` 

const ContainerButton = styled.div`
    display:flex;
    justify-content: space-between;
    background: none;
    

` 


function CardProfile  () {
    const [pessoa,setPessoa] = useState({})

    const pegaPerfil = () =>{
        axios
        .get(`${baseURL}/person`)
        .then((response) =>{
            console.log(response.data)
            setPessoa(response.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() =>{
        pegaPerfil()
    }, [])

    
    const escolhePessoa = (choice) =>{
        const body = {
            id:pessoa.id,
            choice:choice, 
        }

        axios
        .post(`${baseURL}/choose-person`, body)
        .then((response) =>{
            pegaPerfil()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const likePerson = () =>{
        escolhePessoa(true)
    }

    const deslikePerson = () =>{
        escolhePessoa(false)
    }


    return(
        <ContainerCard>
            <div>
                <img width='70px' src={pessoa.photo} alt='Imagem Usuario' />
            </div>
            <div>
                {pessoa.name}
                {pessoa.age}
            </div>
            <div>
                {pessoa.bio}
            </div>
            <ContainerButton>
                <button onClick={likePerson}><img src ={Coracao} /></button>
                <button onClick={deslikePerson}><img src ={Excluir} /></button>
            </ContainerButton>
        </ContainerCard>
    )
    
    
}
  export default CardProfile