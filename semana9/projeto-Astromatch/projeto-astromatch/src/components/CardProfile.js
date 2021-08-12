import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constants';

const ContainerImage = styled.div`
    width: 70px;

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

    return(
        <div>
            <ContainerImage>
                <img src={pessoa.photo} alt='Imagem Usuario' />
            </ContainerImage>
            <div>
                {pessoa.name}
                {pessoa.age}
            </div>
            <div>
                {pessoa.bio}
            </div>
        </div>
    )
    
    
}
  export default CardProfile