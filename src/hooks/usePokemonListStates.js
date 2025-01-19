import axios from "axios";
import { useEffect, useState } from "react";

const usePokemonListStates = () => {
    const [pokemonList, setPokemonList]= useState([]);
    const [pokedexUrl, setPokedexUrl]= useState("https://pokeapi.co/api/v2/pokemon");
    const [prev, setPrev]= useState(null);
    const [next, setNext]= useState(null);

    const downloadPokemons = async () => {
        const response= await axios.get(pokedexUrl);
        const pokemonResult= response.data.results;

        setPrev(response.data.previous);
        setNext(response.data.next);

        // #NOTE In case of Arr.map() : The returned array contains the results of applying the callback to each element.
        const pokemonResultPromise= pokemonResult.map((pokemon) => axios.get(pokemon.url));
        const pokemonData= await axios.all(pokemonResultPromise);

        setPokemonList(pokemonData.map((pokemonResponse) => {
            const name= pokemonResponse.data.name;
            const id= pokemonResponse.data.id;
            const imageUrl= pokemonResponse.data.sprites.front_default;
            return {name: name, imageUrl: imageUrl, id: id};
        }));
    }

    useEffect(() => {
        downloadPokemons();
    }, [pokedexUrl]);

    return {
        pokemonList,
        setPokedexUrl,
        prev,
        next,
    }
}

export default usePokemonListStates