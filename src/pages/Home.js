//import library 
import { useState, useEffect } from "react";
import { useParams, Link  } from "react-router-dom";
import uuid from 'react-uuid';


// component import
import Logo from "../components/logo/Logo.js";
import BtnDarkMode from "../components/buttonsAll/btnDarkMode/BtnDarkMode.js";
import Searchbar from "../components/searchbar/Searchbar.js";
import PokeCard from "../components/pokeCard/PokeCard.js";
import Burgermenu from "../image/Burgermenu.png"

const Home = () => {
    const [pokeList, setPokeList] = useState([]);

    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => {
            //pokeList.push(...data.results);
            setPokeList(data.results)
            //filteredPokemons.push(...data.results);
            setFilteredPokemons(data.results)
            console.log(data.results);
            console.log("pokeList:", pokeList, "filteredPokemons:", filteredPokemons);
        });
    },[])

    function handlePokeClick() {

    }

    return ( 

        <main className="home">
            <Logo />
                <div className="header"> 
                    <Link to="/Menu"> <img src={Burgermenu} ></img></Link>
                    <Searchbar pokemons={pokeList} setFilteredPokemons={setFilteredPokemons}/>
                    <BtnDarkMode />
                </div>
                <div className="body">
                { filteredPokemons.length > 0 &&
                    filteredPokemons.map(pokemon=> {
                    return  <Link key={uuid()} style={{ textDecoration: 'none' }} to={"/Detaillist/"} state={{ pokemons: [{pokemon: pokemon}] }}>

                                <PokeCard  key={pokemon.id} pokemonUrl={pokemon.url}/>
                            </Link>
                })
            }
                </div>
                

            
        </main>

    );
}

export default Home; 