import Logo from "../components/logo/Logo.js"
import { useParams, useLocation } from "react-router-dom";
import PokeDetails from "../components/pokeDetails/PokeDetails.js";
import { useState } from "react";
import Searchbar from "../components/searchbar/Searchbar.js";

const DetailList = () => {
    let { state } = useLocation();

    const params = useParams();
    console.log(state);
    const pokemons = state.pokemons
    const[filteredPokemons, setFilteredPokemons]= useState(pokemons)
    console.log(pokemons);
    return ( 
        <div>
            <Logo/>
            <Searchbar pokemons={pokemons} setFilteredPokemons={setFilteredPokemons}/>
            {filteredPokemons && filteredPokemons.map((pokemon) => {
                    return (<PokeDetails pokemon={pokemon.pokemon}/>)
                })}
        </div>
    );
}

export default DetailList;