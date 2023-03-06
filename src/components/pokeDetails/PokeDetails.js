import { useState, useEffect} from "react";
import Logo from "../logo/Logo.js"

const PokeDetails = (props) => {
    const pokemon = props.pokemon;
    const [pokeDetails, setPokeDetails] = useState(null)
    useEffect(() => {
        fetch(pokemon.url)
        .then(res => res.json())
        .then(data => {
            setPokeDetails(data)
            console.log(data);
        })
    },[])
    return ( 
        <div>
            
            {
                pokeDetails &&
                <div>
                    <img src={pokeDetails.sprites.front_default}/>
                    <h1>{pokeDetails.name}</h1>
                    <p>{pokeDetails.id}</p>
                    {pokeDetails.types.map((element) => {return <p>{element.type.name}</p>})}
                </div>    
            }
            

        </div>

    );
}

export default PokeDetails;