import React,{useState, useEffect} from 'react'
import axios from 'axios'
import TelaMatchs from './components/TelaMatchs'
import TelaInicial from './components/TelaInicial'



const App = (props) => {
  const [tela, setTela] = useState('inicial')
  const [escolhePessoas,setEscolhePessoas] = useState(false)
  const [idEescolha, setIdEescolha] = useState([])

  const trocaTela = (tela) =>{
  setTela(tela)
}

  const escolhePessoa = () => {
    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person')
    .then(response => {
      setEscolhePessoas (response.data.results) 
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const dados = () =>{
    axios
    .get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
    .then (response =>{
      setIdEescolha(response.data.results)
    })
    .catch(err =>{
      console.log(err)
    })
  }

   const renderizarTela = () =>{
     switch (tela) {
      case 'inicial':
         return <TelaInicial escolhePessoas={escolhePessoas} trocaTela={trocaTela} idEescolha={idEescolha} />
      case 'matchs':
       return <TelaMatchs trocaTela={trocaTela}  />
    default:
         return null;
    }
   }

  useEffect(() =>{
    escolhePessoa();
  }, '')

  useEffect(() =>{
    dados();
  }, [])

  return (
    
    <div>
      {renderizarTela()}
    </div>
  );
}

export default App;
