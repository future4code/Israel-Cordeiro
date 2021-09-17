import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { ContainerCard, CardContainer} from './styles';


const Home = () =>{
  
    const [cards, setCards] = useState([])
    const  [turn, setTurn] = useState([])
    const [flipCard, setFlipCard] = useState(false)
  

    console.log(cards)
    
    const listaCartas = (() => {

        axios.get('tarot.json')

        .then((res) => {
            setCards(res.data.cards)
            setTurn({url: res.data.imagesUrl, cardsBack: res.data.imageBackCard})
        })
        .catch((err) => {
          console.log(err)
        }) 
    })

   
    const tarotCards = cards && cards.map((itens) =>{
        return(
            <div key={itens.cards}>
                  <img src={`${turn.url}${itens.image}`} />
            </div>
        )
    })

    const renderCardsBack = cards && cards.map((itens) =>{
        return(
            <div key={itens.cards} onClick={() => willSelectACard(itens.name)}> 
                <img src={`${turn.cardsBack}`} />
            </div>
        )
    })

    useEffect(()=>{
        listaCartas()
    }, [])

     const array = cards;

    const turnCard = () =>{
        setFlipCard(!flipCard)
        array.sort((a,b) => 0.5 - Math.random())
    }

    const willSelectACard = (name) =>{
        setFlipCard(!name)
        alert(name)
    }
    
    
    return(
        <ContainerCard>
            <h1>Jogo de Tarot</h1>
            <button onClick={()=>turnCard()}>Iniciar Jogo</button>
            <CardContainer>
            {flipCard ? renderCardsBack: tarotCards}
            </CardContainer>  
        </ContainerCard>
    )
}

export default Home; 

