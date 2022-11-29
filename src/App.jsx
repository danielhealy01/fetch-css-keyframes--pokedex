import { useState } from "react";
import "./App.css";
import { useDispatch } from 'react-redux' 

function App() {
  const [pokedexVis, setPokedexVis] = useState(true);
  const [pokemonName, setPokemonName] = useState('')


  // const handleClick = () => {
  //   const pokedexImg = document.querySelector('.pokedex')
  //   pokedexImg.classList.add("pokedexHidden")
  //   setTimeout(() => {
  //     pokedexImg.classList.remove("pokedexHidden")
  //     pokedexImg.classList.add("pokedexGone")
  //     setPokedexVis(false);
  //   }, 1200);
    
  // }

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

  };

  return (
    <div className="container">
     
        {pokedexVis ?  
          
      <div className="pokedexContainer">
        <div className="pokedex" onClick={handleClick}>
        </div>
      </div>
        
        : 
          <div className="formContainer">
            <form onSubmit={(e) => e.preventDefault()}>
              <input placeholder="enter a pokemon name" onChange={(e) => setPokemonName(e.target.value)}></input>
            <button>Go! {pokemonName}</button>
            </form>
          </div>
        }
      
    </div>
  );
}

export default App;
