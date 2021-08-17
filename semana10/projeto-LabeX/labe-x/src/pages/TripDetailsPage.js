import React from 'react';
import { useHistory } from 'react-router-dom';

 export const  TripDetailsPage = () => {
     const history = useHistory()

     const voltarPainelAdmin = () =>{
         history.push('/admin/trips/list')
     }

    return(
        <div>
            <h1>Detalhes Viagens</h1>
            <div>
                <button onClick={voltarPainelAdmin}>
                    voltar
                </button>
            </div>
        </div>

    )
}

