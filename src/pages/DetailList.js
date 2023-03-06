import Logo from "../components/logo/Logo.js"
import { useParams, useLocation } from "react-router-dom";
import PokeDetails from "../components/pokeDetails/PokeDetails.js";

const DetailList = () => {
    let { state } = useLocation();

    const params = useParams();
    console.log(state);
    const pokemons = state.pokemons
    console.log(pokemons);
    return ( 
        <div>
            <Logo/>
            {pokemons && pokemons.map((pokemon) => {
                    return (<PokeDetails pokemon={pokemon.pokemon}/>)
                })}
        </div>
    );
}

export default DetailList;