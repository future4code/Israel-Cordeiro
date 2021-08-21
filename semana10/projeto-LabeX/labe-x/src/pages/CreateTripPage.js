import React, { useEffect, useState} from 'react'
import styled from 'styled-components';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../constantes';
import useForm from '../hooks/useForm';


const ContainerCreatTripPage = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

export const CreateTripPage = () => {
    const history = useHistory()
    const {form, onChange, limpaFiltros} = useForm({name:'', planet:'', date:'', description:'', durationInDays:''})
    const params = useParams()
    const idTrip = params.id

    const [ trip, setTrip] = useState({})


    const voltarPainelAdm = () =>{
        history.push('/admin/trips/list')
    }

    const criarViagem = (event) =>{
        event.preventDefault()
          console.log('formulario enviado:', form)

       
        axios.post(`${baseURL}/trips`,form, {
            headers: {
                'Content-Type' : 'application/json',
                'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVoOVdQWmpXU0JGZVVadkNQdEVOIiwiZW1haWwiOiJpc3JhZWxjb3JkZWlyb0Bob3RtYWlsLmNvbSIsImlhdCI6MTYyOTQ3NzU5NH0.Dp_m7dM_FRoE9kaRFQk8Prox75YqpdNZmxYPHksxxro'
            }
        })
        .then((response) =>{
            setTrip(response.data)
            console.log(response)
        })
        .catch((err) =>{
            console.log(err.response)
        }) 

        limpaFiltros()
    }


    return(
        <ContainerCreatTripPage>
            <h1>Criar Viagem</h1>
            <form onSubmit={criarViagem}>
                <div>
                <input
                 name='name'
                 placeholder='nome' 
                 type='name'
                 value={form.name}
                 onChange={onChange}
                 required
                />
                </div>
                <div>
                <select 
                 name='planet'
                 placeholder='planeta' 
                 type='planet'
                 value={form.planet}
                 onChange={onChange}
                 required
                >
                <option value disabled select >Escolha um planeta</option>
                <option value="Vênus">Vênus</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Terra">Terra</option>
                <option value="Marte">Marte</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
                <option value="Plutão">Plutão</option>
                </select>
                </div>
                <div>
                <input 
                 name='date'
                 placeholder='data' 
                 type='date'
                 value={form.date}
                 onChange={onChange}
                 required
                />
                </div>
                <div>
                <input 
                 name='description'
                 placeholder='descrição' 
                 type='description'
                 value={form.description}
                 onChange={onChange}
                 required
                />
                </div>
                <div>
                <input 
                 name='durationInDays'
                 placeholder='duração de dias' 
                 type='durationInDays'
                 value={form.durationInDays}
                 onChange={onChange}
                 required
                />
                </div>
                <div>
                    <button onClick={voltarPainelAdm}>
                        voltar
                    </button>
                    <button onClick={criarViagem}>
                        criar
                    </button>
                </div>
            </form>
        </ContainerCreatTripPage>

    )
}

