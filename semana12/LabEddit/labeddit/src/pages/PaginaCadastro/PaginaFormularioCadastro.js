import React from 'react';
import { InputsContainer} from './styles';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { Button } from '@material-ui/core';
import { registration } from '../../services/users';
import { useHistory } from 'react-router';




const PaginaFormularioCadastro = () => {
    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})
    const history = useHistory()
    
    const onSubmitForm = (event) =>{
        event.preventDefault()
        registration(form,clear,history)

    }

    return(
           <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                     name={'username'}
                     value={form.username}
                     onChange={onChange}
                     label={'Nome'}
                     variant={'outlined'}
                     fullWidth
                     margin={'normal'}
                     required
                     type={'username'}
                    
                    />

                    <TextField 
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                    />
                     <TextField 
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'senha'}
                    />

                    <Button
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    type={'submit'}
                    >
                        Cadastrar
                    </Button>
                    
                </form>
           </InputsContainer>
    )
}

export default PaginaFormularioCadastro;