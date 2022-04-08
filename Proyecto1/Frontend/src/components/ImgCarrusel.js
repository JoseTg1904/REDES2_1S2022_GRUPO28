import React from "react";

const ImgCarrusel = ({ url, name, flagActive }) => {
  return (
    <div className={`carousel-item ${flagActive}`} data-bs-interval="5000">
      <img src={url} className="d-block w-100 img-carrusel" alt={name} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default ImgCarrusel;
