import React from "react";

const NyhedCard = (props) => {
  let NyhedsListe = props.alleNyhederProp.map(nyhed => {
    return nyhed.id < 4 ? (
      <div className="NyhedCard col-md-4 mb-4" key={nyhed.id}>
        <div className="card bg-transparent border-0">
          <img
            src={"/Images/Nyheder/" + nyhed.img}
            className="card-img-top img-fluid"
            alt="Nyhed"
          />
          <div className="card-body p-0">
            <h5 className="card-title mt-3">{nyhed.overskrift}</h5>
            <p className="card-text mb-0">{nyhed.resume}</p>
            <a href="/" className="stretched-link text-muted">Læs mere</a>
          </div>
        </div>
      </div>
    ) : null
  });

  return (
    <div className="nyhed-liste">
      <div className="row">{NyhedsListe}</div>
    </div>
  );
};

export default NyhedCard;
