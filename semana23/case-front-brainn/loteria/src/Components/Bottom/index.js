import React from 'react';
import { useHistory } from "react-router-dom";


export default function Bottom(){
    
    const history = useHistory();

    const OnChangeInput = (event) =>{
        history.push(event.target.value)

    }

    return(
        <select onChange={OnChangeInput}>

            <option value= {'/'}>Mega-Cena </option>

            <option value= {'/dia/de/sorte'}> Dia de Sorte </option>

            <option value= {'/loto/mania'}> Loto Mania </option>

            <option value = {'/loto/facil'}> Loto Facil </option>

            <option value = {'/time/mania'}> Time Mania </option>

            <option value = {'/quina'}> Quina</option>

        </select>
    )
}