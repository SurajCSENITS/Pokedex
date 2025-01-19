import Pokemon from "../Pokemon/Pokemon";
import styles from "./PokemonList.module.css";
import usePokemonListStates from "../../hooks/usePokemonListStates.js";

const PokemonList = () => {
    const { pokemonList, setPokedexUrl, prev, next }= usePokemonListStates();

    return (
        <>
            <div className={styles.pokeList}>
                { pokemonList.map((pokemon) => <Pokemon key={pokemon.id} name={pokemon.name} imageUrl={pokemon.imageUrl} id={pokemon.id} />) }
            </div>
            <div className={styles.btnContainer}>
                <button disabled={prev===null} onClick={() => setPokedexUrl(prev)}>Prev</button>
                <button disabled={next===null} onClick={() => setPokedexUrl(next)}>Next</button>
            </div>
        </>
    )
}

export default PokemonList;