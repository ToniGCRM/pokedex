import React from 'react';
import { Table } from 'semantic-ui-react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemons, releasePokemon, updatePokemon }) => (
  <>
    <Table celled padded>
    <Table.Header color="red">
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Level</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        pokemons.map( p => <Pokemon 
          key={p.id} 
          {...p} 
          releasePokemon={releasePokemon}
          updatePokemon={updatePokemon} 
          /> )
      }
    </Table.Body>
    </Table>
  </>
)

export default Pokedex;