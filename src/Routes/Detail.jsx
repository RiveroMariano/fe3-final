import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/globalContext";

import { useParams } from "react-router-dom";
import "../App.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const [dentista, setDentista] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const res = await fetch(url);
      const dataDentista = await res.json();

      setDentista(dataDentista);
    };
    data();
  }, []);

  return (
    <div className="container">

      <div>
      <h1>DATOS DEL DENTISTA</h1>
      <div>
        <table>
          <tr>
            <th>
              <h3>Nombre</h3>
            </th>
            <th>
              <h3>Email</h3>
            </th>
            <th>
              <h3>Telefono</h3>
            </th>
            <th>
              <h3>Web</h3>
            </th>
          </tr>
          <tr>
            <th>
              <h3>{dentista.username}</h3>
            </th>
            <th>
              <h3>{dentista.email}</h3>
            </th>
            <th>
              <h3>{dentista.phone}</h3>
            </th>
            <th>
              <h3>{dentista.website}</h3>
            </th>
          </tr>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Detail;
