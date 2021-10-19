import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import israel from "./img/perfil.jpg"
import email from "./img/icone-email.png"
import pin from "./img/pin-de-localizacao.png"
import styled from "styled-components"

const Mae = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`
const Container = styled.div`
  width: 40vw;
  margin: 10px 0;

` 

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

` 



function App() {
  return (
      <Mae>
        <Container>
          <H2>Dados pessoais</H2>
          <CardGrande 
            imagem= {israel}
            nome="Israel" 
            descricao="Oi, eu sou o Israel. Sou estudante do Curso Web Full Stack na Labenu. Iniciei minha jornada em vendas no ramo do varejo e trabalhei em algumas empresas como Hering, Kipling e Sephora. Agora iciando no ramo da Programação."
          />
          
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        </Container>

        <Container>
          <CardPequeno
            endereco ="israelcordeiro@hotmail.com"
            imagem= {email}
            texto= "E-mail:"
          />
        </Container>

        <Container>
          <CardPequeno
            endereco ="Av João Gerosa nº 90 Centro- Serra Negra- SP"
            imagem= {pin}
            texto= "Endereço:"
          />
        </Container>

        <Container>
          <H2>Experiências profissionais</H2>
          <CardGrande 
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
            nome="Labenu" 
            descricao="Formando desenvolvedores para o mercado de trabalho!" 
          />
          
          <CardGrande 
            imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
            nome="NASA" 
            descricao="Apontando defeitos." 
          />
        </Container>

        <Container>
          <H2>Minhas redes sociais</H2>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />        

          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />        
        </Container>
      </Mae>
  );
}

export default App;
