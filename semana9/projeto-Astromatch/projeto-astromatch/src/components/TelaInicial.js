import styled from 'styled-components';
import CardProfile from './CardProfile';



const ContainerCard = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin-left: 350px;
    background-color: lightgrey;

` 

const ContainerHeader = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
   
  
` 


function TelaInicial(props) {



    return(
            <ContainerCard>
                <ContainerHeader>
                    <div>
                        <h1>AstroMatch</h1>
                    </div>
                    <div>
                        <button onClick={() => props.trocaTela('matchs')}>Ir para Matchs</button>
                    </div>
                </ContainerHeader>
              <CardProfile />
            </ContainerCard>
          
    )
}

export default TelaInicial;