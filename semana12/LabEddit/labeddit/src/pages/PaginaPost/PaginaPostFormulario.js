import React from 'react';
import useForm from '../../hooks/useForm';
import { creatComments } from "../../services/comments";
import { Button, TextField } from "@material-ui/core";
import {useParams} from 'react-router-dom';
import { BASE_URL, headers } from '../../constants/urlsAndAutorizations';
import axios from 'axios';


const PaginaPostFormulario = () =>{
    const params = useParams()

    const [form, onChange] = useForm({body: ''})

    const onSubmitComment = (event) => {
        const body ={
            body: form.body
        }

        axios.post(`${BASE_URL}/posts/${params.id}/comments`,body, headers)
            .then((res) =>{
                console.log(res.data)
             })
             .catch((err) => alert(err.response.data.errors))
        }
       
    

    return(
        <form onSubmit={onSubmitComment}>
            <TextField 
            name={'body'}
            value={form.body}
            onChange={onChange}
            type={'text'}
            label={'Comment'}
            variant='standard'
            multiline
            color={'secundary'}
            margin={'normal'}
            />
            <Button
            type={'submit'}
            variant='contained'
            color='primary'
            >
                Post
            </Button>
        </form>
    )
}

export default PaginaPostFormulario;