import  Fab  from '@material-ui/core/Fab';
import styled from 'styled-components';


export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border:10px;
    border: 1px solid black;
    height: 120px;
    width: 300px;
    margin-top:10px;
    margin-left: 450px;
    text-align: center;
` 
export const Title = styled.div`
    text-align: center;
    
` 
export const AddPostButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom:20px;
    z-index: 3;

   ` 

