import React, { useState, useEffect } from "react";
import CardAdmin from "../components/CardAdmin";
import { helpHTTP } from "../helpers/helpHttp";
import "./Administrators.css";

const Administrators = () => {
  const [admins, setAdmins] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    helpHTTP()
      .getData("administradores")
      .then((res) => {
        !res.err ? setAdmins(res) : setAdmins([]);
      });
  }, []);

  return (
    <div>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Administradores</h5>
          <div className="row">
            {admins.map((el) => (
              <CardAdmin
                key={el._id}
                name={el.nombre}
                desc={el.descripcion}
                puesto={el.puesto}
                url={el.imagen}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Administrators;
