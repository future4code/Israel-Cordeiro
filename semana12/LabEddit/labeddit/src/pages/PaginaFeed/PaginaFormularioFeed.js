import React from 'react';
import useForm from '../../hooks/useForm';
import { creatPost } from '../../services/posts';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {ContainerFormularioFeed} from './styles'


const PaginaFormularioFeed = () =>{
    const [form, onChange, clear] = useForm({ title: '', body: ''})

    const onSubmitFormFeed = (event) =>{
        event.preventDefault()
        creatPost(form, clear)
        console.log(creatPost)

    }

    return(
        <ContainerFormularioFeed>
            <form onSubmit={onSubmitFormFeed}>
                <TextField 
                name={'title'}
                value={form.title}
                onChange={onChange}
                label={'Titulo do Post'}
                variant={'outlined'}
                margin={'normal'}
                type={'title'}
                />
                <TextField 
                name={'body'}
                value={form.body}
                onChange={onChange}
                label={'Escrever post'}
                variant={'outlined'}
                margin={'normal'}
                type={'body'}
                />
                <Button
                  variant={'contained'}
                  color={'primary'}
                  type={'submit'}
                  >  
                  postar
                </Button>

        </form>
        </ContainerFormularioFeed>
    )

}

export default PaginaFormularioFeed;