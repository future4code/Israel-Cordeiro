import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolBar} from './styles';
import { vaiParaFeed, vaiParaLogin} from '../../routes/coordinator';
import {useHistory} from 'react-router-dom';




const Header = ({rightButtonText, setRightButtonText}) => {
    const history = useHistory()
    const token = localStorage.getItem('token')

    const logout = () =>{
      localStorage.removeItem('token')
    }

    const rightButtonAction = () =>{
      if (token){
        logout()
        setRightButtonText('Login')
        vaiParaLogin(history)

      } else {
        vaiParaLogin(history)

      }
    }


  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => vaiParaFeed(history)} color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolBar>
      </AppBar>
  )
}

export default Header;