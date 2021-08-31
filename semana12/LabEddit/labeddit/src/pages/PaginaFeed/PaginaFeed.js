import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';



const  PaginaFeed = () => {
    useProtectedPage()

    
    return(
        <div>
           <h1>Pagina Feed</h1>
        </div>
    )
}

export default PaginaFeed;