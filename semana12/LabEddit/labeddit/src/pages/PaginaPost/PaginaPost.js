import React from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../../constants/urlsAndAutorizations';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import baixo from '../../img/baixo.jpg';
import cima from '../../img/cima.jpg';
import PaginaPostFormulario from './PaginaPostFormulario';



const PaginaPost = () => {
    useProtectedPage()
    const params = useParams()
    const [comments, SetComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const showComments = comments.length > 0 ? comments.map((item) =>{
        return(
            <div key={item.id}>
                <p>{item.body}</p>
                <p>{item.username}</p>
                <div>
                    <img 
                     src={cima}
                     alt={'Seta para sima'}
                     onClick={''}
                    />
                    {item.userVote}
                    <img 
                     src={baixo}
                     alt={'Seta para baixo'}
                     onClick={''}
                    />
                </div>

            </div>
        )
    }) : <p>Não há comentários</p>
 

    return(
        <div>
          <h1>Pagina Post</h1>
          <p>{showComments}</p>
          <PaginaPostFormulario />
       </div>
    )
}

export default PaginaPost;