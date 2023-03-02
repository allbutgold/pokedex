//import library 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// component import
import Logo from "../components/logo/Logo.js";
import BtnDarkMode from "../components/buttonsAll/btnDarkMode/BtnDarkMode.js";
import Searchbar from "../components/searchbar/Searchbar.js";
import PokeCard from "../components/pokeCard/PokeCard.js";

const Home = () => {
    

    return ( 
        <main>
            <h1>Home</h1>
            <Logo/>
            <BtnDarkMode />
            <Searchbar />
            <PokeCard />
        </main>

    );
}

export default Home; 