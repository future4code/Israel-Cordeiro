import React from 'react';
//import Button from '@material-ui/core/Button'
import {ScreenContainer, InputsContainer} from './styles';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';



const PaginaLogin = () => {
    const [form, onChange, clear] = useForm({email, password})
    
    const onSubmitForm = () =>{

    }

    return(
        <ScreenContainer>
           <h1>Pagina Login</h1>
           <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={'email'}
                        value={}
                        onChange={}
                    />

                </form>
           
           </InputsContainer>
        </ScreenContainer>
    )
}

export default PaginaLogin;


   {/* <Button variant='contained' color='primary'>
               primary
           </Button> método de chamar os botões pelo Material-ui */}