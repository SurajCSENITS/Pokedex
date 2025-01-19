import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";

const PokemonDetails = ({ name= "" }) => {
    const { id }= useParams();
    const [pokemon, setPokemon]= useState({});
    const [sameTypePokemons, setSameTypePokemons]= useState([]);

    const downloadPokemonDetails = async () => {
        let response= undefined;
        try{
            if(name.length>0) response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            else response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        } catch(err){
            console.log("Invalid response data", err.message);
            setPokemon({});
            return;
        } 
    
        setPokemon({
            id: response.data.id,
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            image: response.data.sprites.front_default,
            types: response.data.types.map((t) => t.type.name),
        });     
    }

    const downloadSameTypePokemons = async (type) => {
        const response= await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const pokemonsOfSameType= response.data.pokemon.map((p) => p.pokemon.name);
        setSameTypePokemons(pokemonsOfSameType.slice(0, 8));
    }

    useEffect(() => {
        downloadPokemonDetails();
    }, [id, name]);

    useEffect(() => { // as setPokemon() is an asynchronous function
        pokemon.types && pokemon.types.length>0 && downloadSameTypePokemons(pokemon.types[0]);
    }, [pokemon]);

    return (
        Object.keys(pokemon).length>0 && 
        <div className={styles.pokemonDetailsWrapper}>
            <div>id: {pokemon.id}</div>
            <div>name: {pokemon.name}</div>
            <div>height: {pokemon.height}</div>
            <div>weight: {pokemon.weight}</div>
            <div>types: {pokemon.types && pokemon.types.map((t) => <li>{t}</li>)}</div>
            <div id={styles.pokeImg}><img src={pokemon.image} alt={pokemon.name} /></div>
            {
                pokemon.types && (
                <div className={styles.more}>
                    <div>More {pokemon.types[0]} type pokemons:</div>
                    {sameTypePokemons.map((pokemon) => <div>{pokemon}</div>)} 
                </div>
                )
            }
        </div>
    )
}

export default PokemonDetails;