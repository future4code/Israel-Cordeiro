import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { ContainerCard, ContainerBackAndFrontCard } from './styles';


const Home = () =>{
  
    const [cards, setCards] = useState([])
    const  [virar, setVirar] = useState([])
    const [flipCard, setFlipCard] = useState(false)

    console.log(cards)
    
    const listaCartas = (() => {

        axios.get('tarot.json')

        .then((res) => {
            setCards(res.data.cards)
            setVirar({url: res.data.imagesUrl, cardsBack: res.data.imageBackCard})
        })
        .catch((err) => {
          console.log(err)
        }) 
    })

   
    const tarotCartas = cards && cards.map((itens) =>{
        return(
            <div key={itens.cards}>
                <h4>{itens.name}</h4>
                  <img src={`${virar.url}${itens.image}`} />
            </div>
        )
    })

    const renderCardsBack = cards && cards.map((itens) =>{
        return(
            <div key={itens.cards}>
                <h4>{itens.name}</h4>
                <img src={`${virar.cardsBack}`} />
            </div>
        )
    })

    useEffect(()=>{
        listaCartas()
    }, [])

    const turnCard = () =>{
        setFlipCard(true)
    }


    return(
        <div>
            <h1>Escolha uma Carta</h1>
            <button onClick={()=>turnCard()}>Click To Flip</button>
            <div>
            {flipCard ? tarotCartas: renderCardsBack}
            </div>
            
        </div>
    )
}

export default Home; 

  {/* <h4>{itens.name}</h4> */}


//   const [cartas, setCartas] = useState([])

//   console.log(cartas)
  
//   const listaCartas = (() => {

//       axios.get('tarot.json')

//       .then((res) => {
//           console.log(res.data)
//           setCartas(res.data.cards)
//       })
//       .catch((err) => {
//         setCartas(err.data)
//       }) 
//   })

//   useEffect(() =>{
//       listaCartas()
//   }, [])

//   const imagesUrl = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/"

//   const imageBackCard = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"

//   const tarotCartas = cartas && cartas.map((itens) =>{
//       return(
//           <ContainerCard key={itens.cards}>
//               <ContainerBackAndFrontCard>
//                 <img src={`${imagesUrl}${itens.image}`} />
//                  <img src={imageBackCard} />
//               </ContainerBackAndFrontCard>
//           </ContainerCard>
//       )
//   })
//   return(
//       <div>
//           <h1>Escolha uma Carta</h1>
//           {tarotCartas}
//       </div>
//   )
// }

