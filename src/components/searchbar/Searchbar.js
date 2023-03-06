import styles from '../searchbar/searchbar.module.scss';
import { useState } from "react";


const Searchbar = (props) => {
    const [query, setQuery] = useState('');

    function filterHandler(e){
        console.log(props.pokemons)
        if(('slot' in props.pokemons[0])) return filterSepcialHandler(e)
        setQuery(e.target.value)
        console.log("first",props.pokemons)
        let filteredPokemons = props.pokemons.filter((pokemon)=>{return pokemon.name.toLowerCase().includes(query.toLowerCase())})
        console.log("filteredPokemons",filteredPokemons)
        props.setFilteredPokemons(filteredPokemons)
    }
    function filterSepcialHandler(e){
        setQuery(e.target.value)
        console.log("first",props.pokemons)
        let filteredPokemons = props.pokemons.filter((pokemon)=>{return pokemon.pokemon.name.toLowerCase().includes(query.toLowerCase())})
        console.log("filteredPokemons",filteredPokemons)
        props.setFilteredPokemons(filteredPokemons)
    }

    return ( 
        <form className={styles.searchbar}>
            <input type="text" value={query} placeholder='search' id="searchField" onChange={(e)=>{filterHandler(e)}}/>
        </form>

    );
}

export default Searchbar;