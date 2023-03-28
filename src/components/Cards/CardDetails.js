import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
      console.log(data);
    })();
  }, [api]);

  let { name, gender, image, location, origin, species, status, type } =
    fetchData;

  return (
    
    <div className="container d-flex justify-content-center">
      <div className="col-1"><Link to="/">Home</Link></div>
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={image} alt="personagem"></img>
        {(() => {
          if (status === "Dead") {
            return <div className={`badge bg-danger fs-5`}>{status}</div>;
          } else if (status === "Alive") {
            return <div className={`badge bg-success fs-5`}>{status}</div>;
          } else {
            return <div className={`badge bg-secondary fs-5`}>{status}</div>;
          }
        })()}
        <div className="Container">
          <div className="">
            <span className="fw-bold">Gênero:</span> {gender}
          </div>
          <div className="">
            <span className="fw-bold">Localização:</span> {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Espécie:</span> {species}
          </div>
          <div className="">
            <span className="fw-bold">Origem:</span> {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Tipo:</span> {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
