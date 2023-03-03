import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnType from "../components/buttonsAll/btnTypes/BtnType.js"

import xButton from"../image/theX.png";


const Menu = () => {
    const [types, setTypes] = useState(null)
    const [selectedTypes, setSelectedTypes] = useState([])
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type")
        .then(res => res.json())
        .then(data => {
            setTypes(data.results)
        })
    },[])

    const selectedTypeHandler = (type) => {
        
        if (selectedTypes.includes(type)) {
            let index = selectedTypes.indexOf(type)
            selectedTypes.splice(index, 1)
            return console.log(selectedTypes)
        }
        selectedTypes.push(type)
        setSelectedTypes(selectedTypes)
        console.log(selectedTypes)
    }

    return ( 
        <section>
            <Link to={"/"}><img src={xButton} alt="" /></Link>
            <h1>Menu</h1>
            {types && types.map(type => {
                return (
                    <BtnType key={type.name} selectedTypeHandler={selectedTypeHandler} type={type}/>
                )
            })}
        </section>
        


    );
}

export default Menu;