import { useParams } from "react-router";
import React from 'react';
import useForm from '../../hooks/useForm';




const PaginaPostFormulario = () =>{
    const params = useParams()

    const [form, onChange] = useForm({body: ''})

    const onSubmitComment = (event) =>{
        event.preventDefault()
    }










}