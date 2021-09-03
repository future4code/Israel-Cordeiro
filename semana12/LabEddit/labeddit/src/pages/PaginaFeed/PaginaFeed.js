import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { Title } from './styles';
import PaginaFormularioFeed from './PaginaFormularioFeed';
import Card from '../../components/Card/Card';



const  PaginaFeed = () => {
    useProtectedPage()
 
    return(
        <div>
           <Title>Pagina Feed</Title>
            <PaginaFormularioFeed />
            <Card />
        </div>
    )
}

export default PaginaFeed;