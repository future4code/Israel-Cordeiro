import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constants';

const ContainerCard = styled.div`

` 


const ContainerImage = styled.img`
    

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
                <img className={ContainerImage} width='70px' src={pessoa.photo} alt='Imagem Usuario' />
            </div>
            <div>
                {pessoa.name}
                {pessoa.age}
            </div>
            <div>
                {pessoa.bio}
            </div>
            <div>
                <button onClick={likePerson}>s2</button>
                <button onClick={deslikePerson}>X</button>
            </div>
        </ContainerCard>
    )
    
    
}
  export default CardProfile