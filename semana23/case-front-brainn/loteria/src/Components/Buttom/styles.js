import styled from "styled-components";

export const ContainerButtom = styled.div`

margin: 10%;
   
select{
    background-color: white;
    width: 12vw;
    height: 5vh;
    border-radius: 10px;
    border:none;
    outline: none;
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
       
      select{
        display: flex;
        width: 40vw;
        height: 5vh;
        border-radius: 10px;
        flex-direction: center;
        margin-left: 25%;

      }

        
    }

`