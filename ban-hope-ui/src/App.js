import logo from './logo.svg';
import './App.css';
import pool from './data/pokemon';
import { useState } from 'react';

const imageSource = "/images/pokemon/";

function getRandom() {
  return Math.floor(Math.random() * pool.length);
};

function App() {
  const [pokemon, setPokemon] = useState(getRandom());

  const getNewPokemon = () => {
    setPokemon(getRandom());
  }

  return (
    <div>
      {pool.map(pkmn => (
        <div>
          <img src={`${imageSource}${pkmn.image}`} width="150px"/>
          <h3>{pkmn.name}</h3>
          {pkmn.types.map(type => (
            <div class={`rec-type type-${type.toLocaleLowerCase()}`}>{type}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
