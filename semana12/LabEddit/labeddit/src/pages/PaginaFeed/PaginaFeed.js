import React from 'react';
import { BASE_URL } from '../../constants/urlsAndAutorizations';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {PostContainer, Title, AddPostButton} from './styles';
import Typography from '@material-ui/core/Typography';
import {Add} from '@material-ui/icons';
import { vaiParaAddPost } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const  PaginaFeed = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)
    
    const postsCards = posts.map((post) =>{
        return (
                    <PostContainer key={post.id}>
                       <Typography color={'primary'} variant={'h4'} align={'center'}>{post.username}</Typography>
                      {post.title}-
                      {post.body}
                      {/* onClick={() => null} */}
                    </PostContainer>
        )
    })
    
    return(
        <div>
           <Title>Pagina Feed</Title>
           {postsCards}
           <AddPostButton 
            color={'primary'}
            onClick={() => vaiParaAddPost(history)}
         
           >
               <Add />
               {/* <p>escreva seu post</p> */}
           </AddPostButton>
        </div>
    )
}

export default PaginaFeed;