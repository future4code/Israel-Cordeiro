import React from 'react';
import Typography from '@material-ui/core/Typography';
import { vaiParaPost } from '../../routes/coordinator';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urlsAndAutorizations';
import { PostContainer} from './styles';
import { useHistory } from 'react-router';


 

const Card = () =>{

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


   return postsCards;
}

export default Card;