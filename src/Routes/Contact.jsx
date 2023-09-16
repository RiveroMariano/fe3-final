import React from "react";
import Form from "../Components/Form";

import { useParams } from "react-router-dom";
import '../App.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const id = useParams();

  return (
    <div>



      <h1>FORMULARIO DE CONTACTO</h1>

    <div className="containet">
    <div className="contact">
      <div className="formul" >
       
        <h2>QUIERES SABER MÁS?</h2>
        
        <p>Completa el formulario y nos pondremos en contacto</p>
     
        <div>

        </div>
      </div >
          <Form />

      <div></div>
    </div>


    </div>
    </div>
  );
};


export default Contact;
