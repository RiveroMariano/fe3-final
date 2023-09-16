import { useEffect, useState } from "react";
import React from "react";
import Card from "../Components/Card";
import "../App.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    const recuperado = JSON.parse(localStorage.getItem("dentistFav"));
    setDentist(recuperado);
  }, []);

  return (
    <div>
      <h1>DENTISTAS FAVORITOS</h1>

      <div className="container">
        {dentist && dentist.map((destis) => (
        <div className="card-fav">
          
            <div key={destis.id}>
              <img className="img-car" src="./images/doctor.jpg" alt="" />
            <h4>{destis.name}</h4>
            <h4>{destis.username}</h4>
            </div>
          </div>
        ))}

       
      </div>

      
    </div>
  );
};
export default Favs;
