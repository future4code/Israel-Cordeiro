import {useHistory} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import {vaiParaFeed} from '../routes/coordinator';

const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            vaiParaFeed(history)
        }
    }, [history])
}

export default useUnprotectedPage;