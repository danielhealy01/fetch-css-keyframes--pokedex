import { useState } from "react";
import "./App.css";


function App() {
  const [pokedexVis, setPokedexVis] = useState(true);
  const [name, setName] = useState('')
  const [pokeData, setPokeData] = useState(null)
  const [pokeDesc, setPokeDesc] = useState(null)

  const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      setPokeData(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const getPokemonDesc = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      const desc = await response.json();
      setPokeDesc(desc);
    } catch (err) {
      console.log(err);
    }
  };  


  const handleClick = () => {
    const pokedexImg = document.querySelector(".pokedex");
    pokedexImg.classList.add("pokedexBig");
    console.log('click')
    setTimeout(() => {

      const container = document.querySelector('.container')
      container.classList.add('newContainer')
      container.classList.remove('container')
      setPokedexVis(false);

      /* conditional render based onstate the pokedex aftertzoom in */

    }, 1300)

    // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    //   (response) => response.json()
    // );

  };

  return (
    <div className="container">
      {pokedexVis ? (
        <div className="pokedexContainer">
          <div className="pokedex" onClick={handleClick}></div>
        </div>
      ) : (
        <div className="formContainer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getPokemon();
              getPokemonDesc();
            }}
          >
            <input
              placeholder="enter a pokemon name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button>Go! {name}</button>
          </form>
          <img src={pokeData?.sprites.front_default} alt="" />
          <span>{pokeDesc?.flavor_text_entries[0].flavor_text}</span>
        </div>
      )}
    </div>
  );
}

export default App;
