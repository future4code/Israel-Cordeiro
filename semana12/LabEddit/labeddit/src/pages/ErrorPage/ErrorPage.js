import React from 'react';
import error from '../../img/error.png';
import Typography from '@material-ui/core/Typography';
import {ErrorImage, ErrorPageContainer} from './styles'


const ErrorPage = () => {
    return(
        <ErrorPageContainer>
          <ErrorImage src={error}/>
          <Typography color={'primary'} variant={'h4'} align={'center'}></Typography>
       </ErrorPageContainer>
    )
}

export default ErrorPage;