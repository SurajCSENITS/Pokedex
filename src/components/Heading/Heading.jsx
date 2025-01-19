import { Link } from "react-router-dom";
import styles from "./Heading.module.css";

const Heading = ({ handleClick }) => {
    return (
        <Link onClick={() => handleClick("")} to="/" className={styles.heading} >Pokedex</Link>
    )
}

export default Heading;