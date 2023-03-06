import { useState, useEffect} from "react";
import Logo from "../logo/Logo.js"

import styles from '../pokeDetails/pokeDetails.module.scss'

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
                <div className={styles.pokeDetails}>
                    <img src={pokeDetails.sprites.front_default}/>
                    <div className={styles.headline}>
                        <h1>{pokeDetails.name}</h1>
                        <p>{pokeDetails.id}</p>                    
                    </div>
                    <div className={styles.typeBox}>   
                    {pokeDetails.types.map((element) => {return <p className={styles.type}>{element.type.name}</p>})}
                    </div>
                    
                </div>    
            }
            

        </div>

    );
}

export default PokeDetails; 