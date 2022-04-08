import React from "react";

const CardDeveloper = ({ name, puesto, carnet, url, curso }) => {
  return (
    <div className="col-xl-4 col-sm-6 mb-3">
      <div className="bg-white rounded shadow-sm py-3 px-2">
        <img
          src={url}
          alt={name}
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
        />
        <h4 className="mb-0">{name}</h4>
        <br />
        <h5 style={{ color: "black" }}>{puesto}</h5>
        <br />
        <span className="small text-uppercase text-muted">{carnet}</span>
        <br />
        <span className="small text-uppercase text-muted">{curso}</span>
      </div>
    </div>
  );
};

export default CardDeveloper;
