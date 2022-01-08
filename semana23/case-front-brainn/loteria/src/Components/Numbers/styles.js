import styled from "styled-components";

export const List = styled.li`
  background-color: #fff;
  border-radius: 50%;
  padding: 0.7em;
  margin: 20px;
  font-size: 1.7rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px){
        /* display:flex; */
        display: grid;
        /* flex-direction: row; */
        /* grid-auto-flow: column; */
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 2vw;
       height: 2vh;
       /* align-items: center; */
       align-items: center;
       font-size: 0.9rem;
       /* justify-content: center; */
       /* margin-left: 2%;
       margin-right: 0.5%; */
       /* margin-bottom: 0%; */
       border-radius: 80%;

       

        
    }
 
`