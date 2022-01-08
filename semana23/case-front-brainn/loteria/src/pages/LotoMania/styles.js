import styled from 'styled-components';


export const ContainerGeneral = styled.div`

    display: flex;


    h1{
        margin-left:10%;
        margin-top: 30%;
    }

    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
        display:flex;
       flex-direction: column;

    }

`
export const ContainerName = styled.div`

    display: flex;
    flex-direction: row;
   
    
    p{
        font-family: Montserrat;
        color: #fff;
        font-size: 1.7rem;
        font-weight: 600;
        padding: 0 0.8em;

    }
    @media screen and (min-device-width: 320px) and (max-device-width: 480px){



        p{
            font-size: 20px;
            margin-top:-150%;
           
        }

    }
   

`

export const ContainerOrange = styled.div`
    
    background-color: #FFAB64;
    width: 50vw;
    height: 100vh;

    
    h1{
        color: white;
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
        width: 100vw;
       height: 50vh;
       align-items: center;
 
    }

`

export const ContainerGray = styled.div`
background: lightgrey;
width: 50vw;
height: 100vh;

@media screen and (min-device-width: 320px) and (max-device-width: 480px){

width: 100vw;
height: 50vh;
flex: 0.6;
margin-right: 1.5em;

}

`

export const ContainerNumber = styled.div` 

display: flex;
flex-direction: row;
margin-top: 20%;




ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){

margin-top: 20%;
align-items: center;
   
    ul{
    display:flex;
    flex-direction: column;
    width: 10vw;
    height: 5vh;

    }
    
}

`

export const ContainerInfos = styled.div`

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    left: 6.0%;
    top: 35%;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
        flex-direction: column;
        top: unset;
        left: unset;
        width: 100%;
        justify-content: center;
        align-items: center;

    }
    
 

`

export const LogoLoterias = styled.img`
  color: #fff;
  width: 60px;
  height: 60px;
  background-color: #FFAB64;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px){
      width: 30px;
      margin-bottom:70%;
  }
`

export const ContainerData = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  bottom: 5%;
  color: #fff;
  font-size: 1.0rem;
  font-weight: 600;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px){
    display: flex;
    top:0%;
    font-size: 10px;
   margin-left: 30%;
}

`

export const ContainerDescription = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-top: 130px;
  color: #595959;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px){
      font-size: 7px;
      margin: 16%;
  }

`

export const ContainerTitle = styled.div`

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  bottom: 10%;

p{
    font-family: Montserrat;
    color: #fff;
    font-size: 1.0rem;
    font-weight: 600;
    padding: 0 0.8em;

}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
    top:0%;
    font-size: 10px;
    margin-left: 29%;
}

`