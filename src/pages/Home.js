//import library 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// component import
import Logo from "../components/logo/Logo.js";
import BtnDarkMode from "../components/buttonsAll/btnDarkMode/BtnDarkMode.js";
import Searchbar from "../components/searchbar/Searchbar.js";
import PokeCard from "../components/pokeCard/PokeCard.js";

const Home = () => {
    const [pokeList, setPokeList] = useState([]);
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => {
            setPokeList(data.results)
            console.log(data.results);
            console.log("pokeList:", pokeList);
        });
    },[])

    return ( 
        <main>
            <h1>Home</h1>
            <Logo/>
            <BtnDarkMode />
            <Searchbar />
            {   pokeList.length > 0 &&
                pokeList.map(pokemon=> {
                    return <PokeCard key={pokemon.id} pokemonUrl={pokemon.url}/>
                })
            }
        </main>

    );
}

export default Home; 