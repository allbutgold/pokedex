import { Link } from "react-router-dom";
import PokemonLogo from "../../image/Pokemon.png"

const Logo = () => {


    return ( 
        <Link to="/"><img src={PokemonLogo}></img></Link>
    );
}

export default Logo;