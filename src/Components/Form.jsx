import React, { useState } from "react";
import "../App.css";

function Form() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombreCompleto.length > 0 &&
      email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      ({ nombreCompleto, email });
      setNombreCompleto("");
      const successMessage = `Gracias ${nombreCompleto}, te contactaremos a través de tu correo electrónico.`;
      setMensaje(successMessage);
    } else {
      const errorMessage = "Por favor, verifica tu información nuevamente.";
      setMensaje(errorMessage);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <ul>
          <label>Nombre Completo</label>
          <li>
            <input
              type="text"
              placeholder="Ingrese su nombre completo"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
            />
          </li>
          <label>Email</label>
          <li>
            <input
              type="email"
              placeholder="Ingrese el email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>

          <button className="buton-for" type="submit">Enviar</button>
        </ul>
        <h4>{mensaje}</h4>
      </form>
    </div>
  );
}

export default Form;
