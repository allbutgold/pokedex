import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnType from "../components/buttonsAll/btnTypes/BtnType.js"

import xButton from"../image/theX.png";


const Menu = () => {
    const [types, setTypes] = useState(null)
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type")
        .then(res => res.json())
        .then(data => {
            setTypes(data.results)
        })
    },[])
    return ( 
        <section>
            <Link to={"/"}><img src={xButton} alt="" /></Link>
            <h1>Menu</h1>
            {types && types.map(type => {
                return (
                    <BtnType type={type}/>
                )
            })}
        </section>
        


    );
}

export default Menu;