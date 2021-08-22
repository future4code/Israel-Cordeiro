import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../constantes';
import styled from 'styled-components';

const ContainerDetails = styled.div`
    text-align: center;

    button{
        border-radius: 5px;
        width: 80px;
        cursor: pointer;

    }

` 

const ContainerCardCandidates = styled.div`
    border: 1px solid black;
    width: 500px;
    margin-left: 370px;
    border-radius: 5px;

    button{
        margin-left: 15px;
        border-radius: 5px;
        width: 80px;
        cursor: pointer;
    }

` 

const ContainerTitle = styled.div`
    text-align: center;
` 


 export const  TripDetailsPage = () => {
     const history = useHistory()
     const params = useParams()
     const idTrips = params.id
     const idCandidates = params.id

     const [trips, setTrips] = useState({candidates:[], approved:[]}) 

     const voltarPainelAdmin = () =>{
         history.push('/admin/trips/list')
     }

    

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

            const aprovar = (idTrips, idCandidates, decision, setTrips) =>{
            const token = localStorage.getItem('token')
            const body = {
                    approve: decision
            }
            axios.put(`${baseURL}/trips/${idTrips}/candidates/${idCandidates}/decide`,body, {
                headers: {
                    auth: token
                }
            })
            .then((response) =>{
                setTrips()
                console.log(response.data.trip)
            })
            .catch((err) =>{
                console.log('deu erro:', err.response)
            })
        }

        useEffect(() =>{
            aprovar(idCandidates)
        }, [trips])

        const renderizaDetalhes = () =>{
            return(
                <ContainerDetails>
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
                    {trips.candidates.map((item) =>{
                            return(
                                <ContainerCardCandidates>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                <p>{item.country}</p>
                                <p>{item.applicationText}</p>
                                <p>{item.profession}</p>
                                <div>
                                    <button onClick={() => aprovar(trips.id,item.id,true, trips)}>
                                        aprovar
                                    </button>
                                    <button onClick={() => aprovar(trips.id,item.id,false, trips)}>
                                        reprovar 
                                    </button>
                                </div>
                               </ContainerCardCandidates> 
                            )
                        })}
                        <h1>Aprovados</h1>
                          {trips.approved.map((item) =>{
                             return(
                                 <div>
                                     <p>{item.name}</p>
                                 </div>

                             )
                         })}  
                </ContainerDetails>
                )
            }  
  

    return(
        <ContainerTitle>
            <h1>Detalhes Viagens</h1>
            {renderizaDetalhes()}
        </ContainerTitle>
    )
}

