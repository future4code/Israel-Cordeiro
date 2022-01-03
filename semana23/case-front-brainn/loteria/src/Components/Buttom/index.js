import React from 'react';
import { useHistory } from "react-router-dom";
import { ContainerButtom } from './styles';



export default function Buttom(){
    
    const history = useHistory();

    const OnChangeInput = (event) =>{
        history.push(event.target.value)

    }

    return(
        <ContainerButtom>
            <select onChange={OnChangeInput}>

                <option>Escolha um Jogo</option>
                
                <option value= {'/'}>Mega-Sena </option>

                <option value= {'/dia/de/sorte'}> Dia de Sorte </option>

                <option value= {'/loto/mania'}> Loto Mania </option>

                <option value = {'/loto/facil'}> Loto Facil </option>

                <option value = {'/time/mania'}> Time Mania </option>

                <option value = {'/quina'}> Quina</option>

            </select>
     </ContainerButtom>
    )
}