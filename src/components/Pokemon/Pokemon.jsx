import { Link } from "react-router-dom";
import styles from "./Pokemon.module.css";

const Pokemon = ({ name, imageUrl, id }) => {
    return (
        // If you use a relative path (e.g., /pokemon/${id}), React Router appends it to the current domain.
        <Link to={`/pokemon/${id}`} className={styles.pokemon}> 
            <div>{name}</div>
            <img src={imageUrl} alt={name} id={styles.pokemonImg} />
        </Link>
    )
}

export default Pokemon;