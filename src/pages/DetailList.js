import Logo from "../components/logo/Logo.js"
import { useParams } from "react-router-dom";
import PokeDetails from "../components/pokeDetails/PokeDetails.js";

const DetailList = () => {
    const params = useParams();
    const pokemons = params.pokemons
    console.log("pokemons");
    return ( 
        <div>
            <Logo/>
            {pokemons && pokemons.map((pokemon) => {
                    return (<PokeDetails pokemon={pokemon}/>)
                })}
        </div>
    );
}

export default DetailList;