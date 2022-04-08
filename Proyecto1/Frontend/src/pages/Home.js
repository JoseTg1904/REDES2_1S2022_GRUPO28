import React, { useState, useEffect } from "react";
import ImgCarrusel from "../components/ImgCarrusel";
import { helpHTTP } from "../helpers/helpHttp";

const imageDefault = {
  _id: "1233131231",
  url: "https://blog.corporacionbi.com/hs-fs/hubfs/La-Atitlan.jpg?width=1300&name=La-Atitlan.jpg",
  nombre: "Lago de Atitlan",
};

const Home = () => {
  const [images, setImages] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    helpHTTP()
      .getData("imagenes")
      .then((res) => {
        !res.err ? setImages(res) : setImages([imageDefault]);
      });
  }, []);

  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((el, i) => (
            <ImgCarrusel
              key={el._id}
              url={el.url}
              name={el.nombre}
              flagActive={i === 0 ? "active" : ""}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
