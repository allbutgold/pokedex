import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnType from "../components/buttonsAll/btnTypes/BtnType.js"

import xButton from"../image/theX.png";


const Menu = () => {
    const [types, setTypes] = useState(null)
    const [selectedTypes, setSelectedTypes] = useState([])
    const [pokemons, setPokemons] = useState([])
    let navigate = useNavigate();

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

    function searchTypesHandler() {
        if (selectedTypes.length === 0) return
        let fetchArr = selectedTypes.map(type => {
            return fetch(type.url)
        })
        Promise.all(fetchArr)
        .then(results => Promise.all(results.map(r => r.json())) )
        .then(results => { 
            results.forEach((result, index) => {
                pokemons.push(...result.pokemon)
                setPokemons(pokemons)
                if (index === results.length - 1) navigate("/Detaillist/",{ state: {pokemons: pokemons}});
            })
        })

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
            <button onClick={searchTypesHandler}>
                search
            </button>

        </section>
        


    );
}

export default Menu;