import React from "react";
import Buttom from "../../Components/Buttom";
import axios from "axios";
import {BASE_URL} from "../../constants/url";
import logo from "../../images/logo.svg";
import { useEffect, useState } from "react"
import { ContainerGeneral, ContainerGreen, ContainerGray,ContainerInfos, ContainerNumber, LogoLoterias, ContainerData, ContainerTitle, ContainerDescription, ContainerName } from "./styles";
import Numbers from "../../Components/Numbers/index"


function MegaSena() {
  
  const [loteria, setLoteria] = useState([])
  const [concursoId, setConcursoId] = useState("")
  const [concursos, setConcursos] = useState([])

  const getLoteria = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setLoteria(res.data[0])
        if (loteria) {
          setConcursoId(res.data[0].concursoId)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getConcursosById = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getLoteria()
  }, [])

  useEffect(() => {
    if (concursoId) getConcursosById(concursoId)
  }, [concursoId])

  const data = new Date(concursos?.data)
  const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })

    
    return(
        <ContainerGeneral>
            <ContainerGreen>
                <Buttom />
                <ContainerInfos>
                        <LogoLoterias src={logo} />
                    <ContainerName>
                      <p>MEGA-SENA</p>
                    </ContainerName>
                  </ContainerInfos>
                    <ContainerTitle>
                      <p>Concurso</p>
                    </ContainerTitle>
                        <ContainerData>
                            <p>{concursos.id} - {data && formatedDate}</p>
                        </ContainerData>
            </ContainerGreen>
                <ContainerGray>
                    <ContainerNumber>
                      <ul>
                        {concursos.numeros &&
                        concursos.numeros.map((item) => (
                        <Numbers numbers={item} key={item} />
                        ))}
                        </ul>
                    </ContainerNumber>
                    <ContainerDescription>
                    <p>Este sorteio é meramente ilustrativo e não possuí vinculo com a caixa</p>
                    </ContainerDescription>
                </ContainerGray>
        </ContainerGeneral>
   
    )
    

}
export default MegaSena;