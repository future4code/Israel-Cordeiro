import React from "react";
import Buttom from "../../Components/Buttom";
import { GetConcursosId } from "../../services/concursoId";
import { ContainerGeneral, ContainerGreen, ContainerGray, ContainerNumber } from "./styles";


function MegaSena() {
    const concursosId = GetConcursosId()
    
    return(
        <ContainerGeneral>
            <ContainerGreen>
              <Buttom />
                <p>{concursosId.loteria}</p>
                <p>{concursosId.data}</p>
            </ContainerGreen>
            <ContainerGray>
                <ContainerNumber>
                    <p>{concursosId.numeros[0]}</p>
                    {/* <p>{concursosId.numeros[1]}</p>
                    <p>{concursosId.numeros[2]}</p>
                    <p>{concursosId.numeros[3]}</p>
                    <p>{concursosId.numeros[4]}</p>
                    <p>{concursosId.numeros[5]}</p>     */}
                </ContainerNumber>
            </ContainerGray>
        </ContainerGeneral>
   
    )
    

}
export default MegaSena;