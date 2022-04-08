import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-2">
          <h3>{process.env.REACT_APP_SERVER}</h3>
        </div>

        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 - Grupo 28 - Redes 2:
        </div>
      </footer>
    </div>
  );
};

export default Footer;
