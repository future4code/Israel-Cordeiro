import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
    background-color: red;
    display: grid;
    width: 300px;
    height: 400px;
    text-align: center;
    margin-top: 50px;
    margin-left: 150px;

    >select{
      background-color: green;
    }

    >img{
      background-color: white;
      display: flex;
      justify-content: center;
    }

` 


export default class App extends React.Component{

  state ={
    pokemons:[],
    picture:""
  }

  componentDidMount() {
    this.getPokemons()
  }

  getPokemons = async () => {
    const response = await axios.get ('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    this.setState({pokemons: response.data.results})
  }


  getPokePicture = async (event) => {
    console.log (event.target.value)
    const url = event.target.value
    const response = await axios.get(`${url}`)
    this.setState({picture: response.data.sprites.front_default})

  }


    render(){
      const pokeList = this.state.pokemons.map((poke) => {
        return(
          <option key={poke.name} value={poke.url}>
            {poke.name}
          </option>
          
        )

      })
   
    return (
      <Container>
        <h1>Pokedex</h1>
        <select onChange ={this.getPokePicture}>
          <option>Selecione um Pokemon</option>
          {pokeList}
          </select>
        {this.state.picture &&
        <img src={this.state.picture} alt='foto do pokemon'></img>
        }
      </Container>
    );
  }
}

