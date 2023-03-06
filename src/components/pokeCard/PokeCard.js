import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import styles from '../pokeCard/pokeCard.module.scss'




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
                <article className={styles.pokeCard}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div>
                    <p>{pokemon.id}</p>
                        <h1>{pokemon.name}</h1>
                        
                    </div>
                    
                </article>
            }
        </>      
    );
}

export default PokeCard;
