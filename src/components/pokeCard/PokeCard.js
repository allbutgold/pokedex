import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"




const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState(null);
    useEffect(()=>{
        fetch(props.pokemonUrl)
        .then(res => res.json())
        .then(data => {
            setPokemon(data);
        })
    },[])

    return ( 
        <>
            {
                pokemon &&   
                <article>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h1>{pokemon.name}</h1>
                    <p>{pokemon.id}</p>
                </article>
            }
        </>
        
        
                
    

        
    );
}

export default PokeCard;
