import React, { useState, useEffect } from "react";
import CardDeveloper from "../components/CardDeveloper";
import { helpHTTP } from "../helpers/helpHttp";
import "./Developers.css";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    helpHTTP()
      .getData("desarrolladores")
      .then((res) => {
        !res.err ? setDevelopers(res) : setDevelopers([]);
      });
  }, []);

  return (
    <div>
      <div className="container pt-3">
        <h5 className="section-title h1">Desarrolladores</h5>

        <div className="row text-center">
          {developers.map((el) => (
            <CardDeveloper
              key={el._id}
              name={el.nombre}
              puesto={el.puesto}
              carnet={el.carnet}
              url={el.imagen}
              curso={el.curso}
            />
          ))}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Developers;
