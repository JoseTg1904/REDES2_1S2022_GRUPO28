import React from "react";

const CardAdmin = ({ name, desc, puesto, url }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="image-flip">
        <div className="mainflip flip-0">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className="img-fluid img-card-admin"
                    src={url}
                    alt={name}
                  />
                </p>
                <h2 className="card-title">{name}</h2>
                <h5 className="card-text" style={{ color: "black" }}>
                  {puesto}
                </h5>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAdmin;
