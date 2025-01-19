import Heading from "./components/Heading/Heading";
import SearchBox from "./components/SearchBox/SearchBox";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";


const App = () => {
  const [searchTerm, setSearchTerm]= useState("");

  return (
    <div className={styles.AppContainer}>
      <Heading handleClick={setSearchTerm} />
      <SearchBox handleChange={setSearchTerm} />
      { searchTerm.length>0 ? <PokemonDetails name={searchTerm} /> : <Outlet /> }
    </div>
  )
}

export default App;