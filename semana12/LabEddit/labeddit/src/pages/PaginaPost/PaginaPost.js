import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';



const PaginaPost = () => {
    useProtectedPage()
    return(
        <div>
          <h1>Pagina Post</h1>
       </div>
    )
}

export default PaginaPost;