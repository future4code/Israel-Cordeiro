import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';



const PaginaAddPost= () => {
    useProtectedPage()
    return(
        <div>
          <h1>Criação de Post</h1>
       </div>
    )
}

export default PaginaAddPost;