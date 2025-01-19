import useDebounce from "../../hooks/useDebounce.js";
import styles from "./SearchBox.module.css";

const SearchBox = ({ handleChange }) => {
    const debouncedCallback= useDebounce((e) => handleChange(e.target.value))

    return (
        <div className={styles.searchContainer}>
            <input 
                id={styles.searchFeild}
                type="text" 
                placeholder="pokemon name..."
                onChange={debouncedCallback}
            />
        </div>
    )
}

export default SearchBox;