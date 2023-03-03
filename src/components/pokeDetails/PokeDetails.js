import { useState, useEffect} from "react";
import Logo from "../logo/Logo.js"

const PokeDetails = (props) => {
    const pokemon = props.pokemon;
    const [pokeDetails, setPokeDetails] = useState(null)
 /*    useEffect(() => {

    },[]) */
    return ( 
        <div>
            <Logo/>
        </div>

    );
}

export default PokeDetails;