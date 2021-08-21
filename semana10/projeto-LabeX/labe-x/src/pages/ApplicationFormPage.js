import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constantes';
import useForm from '../hooks/useForm';


const ContainerForm = styled.div`
    margin-top: 250px;
    margin-left: 400px;
` 

export const  ApplicationFormPage = () => {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [id, setId] = useState('')


    const {form, onChange, limpaFiltros} = useForm({name:'', age:'', applicationText:'', profession:'', country:''})

    const countryList =
        ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", 
        "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
        "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", 
        "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", 
        "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", 
        "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", 
        "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", 
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", 
        "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", 
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", 
        "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", 
        "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", 
        "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", 
        "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", 
        "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", 
        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", 
        "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", 
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", 
        "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", 
        "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", 
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", 
        "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]
    

    const voltarListaViagem = () =>{
        history.push('/trips/list')
    }


    const pegaFormulario = (event) =>{
        event.preventDefault()
        axios.post(`${baseURL}/trips/${id}/apply`, form) 
        .then((response) =>{
            alert('Solicitação Enviada')
            console.log(response.data.trip)
        })
        .catch((err) =>{
            console.log(err.response)
        })

        limpaFiltros()
    }

    const pegaViagens = () =>{
        axios.get(`${baseURL}/trips`)
        .then((response) =>{
            setTrips(response.data.trips)
            console.log(response.data.trips)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }

    useEffect(() =>{
        pegaViagens()
    },[])

    const mudaViagem = (event) =>{
        setId(event.target.value)
    }

    const mostraViagens = trips && trips.map((trip) =>{
        return(
            <option key={trip.id} value={trip.id}>{trip.name}</option>
        )
    })
        
 

    return(
        <ContainerForm>
            <h1>Inscreva-se para uma Viagem</h1>
            <form onSubmit={pegaFormulario}>
            <div>
                < select 
                defaultValue={''}
                onChange={mudaViagem}
                >
                <option value={''} disabled>Escolha o Destino</option>
                {mostraViagens}
                </select>
            </div>
            <div>
                < input 
                name='name'
                 placeholder='nome' 
                 type='name'
                 value={form.name}
                 onChange={onChange}
                 required
                />
            </div>
            <div>
                <input 
                name='age'
                placeholder='idade' 
                type='age'
                value={form.age}
                onChange={onChange}
                 equired
                />
            </div>
            <div>
                <input 
                name='applicationText'
                 placeholder='texto de candidatura' 
                 type='applicationText'
                 value={form.applicationText}
                 onChange={onChange}
                 required
                />
            </div>
            <div>
                <input 
                name='profession'
                 placeholder='Profissão' 
                 type='profession'
                 value={form.profession}
                 onChange={onChange}
                 required
                />
            </div>
            <div>
                <select
                name='country'
                placeholder='Escolha um País' 
                type='country'
                value={form.country}
                onChange={onChange}
                required 
                >
                <option value={''} disabled>País de Origem</option>
                {countryList.map((country) =>{
                    return(
                        <option value={country} key={country}>{country}</option>
                    )
                })}
                </select>
            </div>
            <div>
                <button onClick={voltarListaViagem}>
                    voltar
                </button>
                <button>
                    enviar 
                </button>
            </div>
            </form>
        </ContainerForm>

    )
}

