import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/globalContext";
import { useContext } from "react";
import "../App.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


function Home() {
  
  
  const { state} = useContext(ContextGlobal);


  return (
    <div className="home">
      <h1>LISTA DE DENTISTAS</h1>
    <div className="container">
      <div className="card-grid">
        {state.data.map((items) => (
          <Card
            key={items.id}
            name={items.name}
            username={items.username}
            id={items.id}
          />
        ))}

       
      </div>
    </div>
    </div>
  );
}

export default Home;
