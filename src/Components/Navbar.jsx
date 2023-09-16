import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/globalContext";
import "../App.css";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    
    const newTheme = state.theme === "light" ? "dark" : "light";
    
   
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  
  const themeClass = state.theme === "dark" ? "dark" : "light";

console.log("", themeClass)
  return (
<div >
  

    <div className={themeClass}>
      <nav>
        
        <Link to="/">Home</Link>
        <Link to="favs">Favoritos</Link>
        <Link to="contact">Contacto</Link>

        <button onClick={toggleTheme}>Cambiar color</button>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
