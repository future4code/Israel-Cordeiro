import React from 'react';
// import Button from '@material-ui/core/Button';
import {ScreenContainer, SignUpButtonContainer} from './styles';
import { Button } from '@material-ui/core';
import { vaiParaCadastro } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import PaginaFormularioLogin from './PaginaFormularioLogin';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';




const PaginaLogin = () => {
    const history = useHistory()
    useUnprotectedPage()

    return(
        <ScreenContainer>
           <h1>Pagina Login</h1>
           <PaginaFormularioLogin />
            <SignUpButtonContainer>
                   <Button
                    onClick={() => vaiParaCadastro(history)}
                    fullWidth
                    variant={'text'}
                    color={'neutralColor'}
                    type={'submit'}
                    >
                    Não possui conta ? Cadastre-se!!
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default PaginaLogin;


   {/* <Button variant='contained' color='primary'>
               primary
           </Button> método de chamar os botões pelo Material-ui */}