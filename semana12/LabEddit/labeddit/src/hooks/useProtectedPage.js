import {useHistory} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import { vaiParaLogin} from '../routes/coordinator';

const useProtectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            vaiParaLogin(history)
        }
    }, [history])
}

export default useProtectedPage;