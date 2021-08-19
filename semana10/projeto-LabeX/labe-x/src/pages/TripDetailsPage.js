import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../constantes';


 export const  TripDetailsPage = () => {
     const history = useHistory()
     const params = useParams()
     const idTrips = params.id

     const [trips, setTrips] = useState([]) 

     const voltarPainelAdmin = () =>{
         history.push('/admin/trips/list')
     }

     useEffect(() =>{
        const token = localStorage.getItem('token')

        if(token === null){
            console.log('não está logado!!!')
            history.push('/login')
        }

     }, [])

         const detalhes = (id) => {
         const token = localStorage.getItem('token')
         axios.get(`${baseURL}/trip/${id}`, {
             headers: {
                 auth: token
             }
         })
            
         .then((response) =>{
             setTrips(response.data.trip)
             console.log(response.data.trip)
         })
         .catch((err) =>{
             console.log('deu erro:', err.response)
         })

        }

        useEffect(() =>{
             detalhes(idTrips)
        }, [])

            console.log(trips.candidates)

        const renderizaDetalhes = () =>{
            return(
                <div>
                    <p>{trips.name}</p>
                    <p>{trips.description}</p>
                    <p>{trips.planet}</p>
                    <p>{trips.durationInDays}</p>
                    <p>{trips.date}</p>
                    <div>
                        <button onClick={voltarPainelAdmin}>
                            voltar
                        </button>
                    </div>
                    <h1>Candidatos pendentes</h1>
                </div>
                )
            }  
        
        

        

    return(
        <div>
            <h1>Detalhes Viagens</h1>
            {renderizaDetalhes()}

{/* 
            {trips.candidates.map((item) =>{
                            return(
                                <div>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                
                               </div> 
                            )
                        })} */}
        </div>
    )
}

