import React from 'react';
import { BASE_URL } from '../../constants/urlsAndAutorizations';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { Title, PostContainer, ContainerFormularioFeed} from './styles';
import Typography from '@material-ui/core/Typography';
import { vaiParaPost } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import PaginaFormularioFeed from './PaginaFormularioFeed';


const  PaginaFeed = () => {
    useProtectedPage()
    const history = useHistory()
     const posts = useRequestData([], `${BASE_URL}/posts`)
     console.log(posts)
   

     const onClickPost = (id) =>{
         vaiParaPost(history, id)
     }
    
    const postsCards = posts.map((post) =>{
        return (
                <PostContainer 
                    key={post.id}
                    onClick={() => onClickPost(post.post_id)}
                    >
                 <Typography color={'primary'} variant={'h4'} align={'center'}>{post.username}</Typography>
                      {post.title}-
                      {post.body}
                 </PostContainer>
        )
    })
    
    return(
        <div>
           <Title>Pagina Feed</Title>
            <PaginaFormularioFeed />
            {postsCards}
        </div>
    )
}

export default PaginaFeed;