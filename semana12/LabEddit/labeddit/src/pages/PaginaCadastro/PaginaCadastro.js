import React from 'react';
import {ScreenContainer, SignUpButtonContainer} from './styles';
import { Button } from '@material-ui/core';
import { vaiParaCadastro } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import PaginaFormularioCadastro from './PaginaFormularioCadastro'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';


const PaginaCadastro = () => {
    const history = useHistory()
    useUnprotectedPage()

    return(
        <ScreenContainer>
           <h1>Pagina Cadastro</h1>
           <PaginaFormularioCadastro />
            <SignUpButtonContainer>
                   <Button
                    onClick={() => vaiParaCadastro(history)}
                    fullWidth
                    variant={'text'}
                    color={'neutralColor'}
                    type={'submit'}
                    >
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default PaginaCadastro;