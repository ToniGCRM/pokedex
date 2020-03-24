import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';
import Pokedex from './components/pokemon/Pokedex';
import PokeForm from './components/pokemon/PokeForm'

class App extends Component {
  state = { pokemons: [
    {id: 1, name: 'Pikachu', type: 'electric', level: 30},
    {id: 2, name: 'Jigglypuff', type: 'fairy', level: 15},
    {id: 3, name: 'Charmeleon', type: 'fire', level: 27},
    {id: 4, name: 'Bulbasaur', type: 'grass', level: 30},
    {id: 5, name: 'Dugtrio', type: 'ground', level: 42},
  ]}

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addPokemon = (incomingPokemon) => {
    let newPokemon = { id: this.getId(), ...incomingPokemon }
    this.setState ({ pokemons: [newPokemon, ...this.state.pokemons ]})
  }

  updatePokemon = (id, updatedPokemon) => {
    const pokemons = this.state.pokemons.map( p => {
      if(p.id === id) {
        return updatedPokemon
      }
      return p
    })
    this.setState({ pokemons })
  }

  releasePokemon =(id) => {
    const { pokemons } = this.state
    this.setState({ pokemons: pokemons.filter( p => p.id !== id ) })
  }

  render() {
    const { pokemons } = this.state
    return(
      <>
      <Header size="huge" color="red" textAlign="center" >
        Pokedex
      </Header>
      <PokeForm addPokemon={this.addPokemon } />
        <Pokedex pokemons={pokemons} 
        releasePokemon ={this.releasePokemon}
        updatePokemon ={this.updatePokemon}
        />
      </>
    )
  }
}
export default App;
