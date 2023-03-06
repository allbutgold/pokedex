import { Link } from "react-router-dom";
import PokemonLogo from "../../image/Pokemon.png"

const Logo = () => {


    return ( 
        <Link to="/"><img className="logo"  src={PokemonLogo}></img></Link>
    );
}

export default Logo;