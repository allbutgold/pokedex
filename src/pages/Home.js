//import library 
import { useState, useEffect } from "react";
import { useParams, Link  } from "react-router-dom";


// component import
import Logo from "../components/logo/Logo.js";
import BtnDarkMode from "../components/buttonsAll/btnDarkMode/BtnDarkMode.js";
import Searchbar from "../components/searchbar/Searchbar.js";
import PokeCard from "../components/pokeCard/PokeCard.js";
import Burgermenu from "../image/Burgermenu.png"

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

    function handlePokeClick() {

    }

    return ( 
        <main className="home">
            <Logo />
                <div className="header"> 
                    <Link to="/Menu"> <img src={Burgermenu} ></img></Link>
                    <Searchbar />
                    <BtnDarkMode />
                </div>
                <div className="body">
                { pokeList.length > 0 &&
                pokeList.map(pokemon=> {
                    return  <Link to={"/Detaillist/"} state={{ pokemons: [{pokemon: pokemon}] }}>
                                <PokeCard  key={pokemon.id} pokemonUrl={pokemon.url}/>
                            </Link>
                })
            }
                </div>

            
        </main>

    );
}

export default Home; 