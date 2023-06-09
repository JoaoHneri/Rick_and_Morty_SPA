import React, { useState } from "react";
import { getFavorites, setFavorites } from "../../services/LocalStorageFuncs";
import styles from "../Cards/Cards.module.css";
import {AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Fav = ({page}) => {
  const [data, setData] = useState(getFavorites("barraFavs") || []);
  const removeItem = (obj) => {
    const arrFilter = data.filter((x) => x.id !== obj.id )
    setData(arrFilter)
    setFavorites('barraFavs', arrFilter)

  }

  let display;
  if (data) {
    display = data.map((x) => {
      let { id, name, image, species, location, status } = x;
      return (
        <div key={id} className={"col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"}>
        <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
          <Link to={`${id}`}> 
          <img src={image} alt="" className={`${styles.img} img-fluid`} />
          </Link>
            <div className={`${styles.cardy_body}`}>
              <div className="fs-4 fw-bold">{name}</div>
              <div className="fs-5 mb-4">{species}</div>
              <div className="mb-4">
                <div className="fs-6">Última localização:</div>
                <div className="fs-5">{location?.name}</div>
                {(() => {
                  if (status === "Dead") {
                    return (
                      <div className={`position-absolute badge bg-danger`}>
                        {status}
                      </div>
                    );
                  } else if (status === "Alive") {
                    return (
                      <div className={`position-absolute badge bg-success`}>
                        {status}
                      </div>
                    );
                  } else {
                    return (
                      <div className={`position-absolute badge bg-secondary`}>
                        {status}
                      </div>
                    );
                  }
                })()}
              </div>
              <div>
                <p className={`${styles.heart} position-absolute badge`} onClick={()=> removeItem(x)}><AiFillHeart/></p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "Não encontrado";
  }

  return <>{display}</>;
};

export default Fav;
