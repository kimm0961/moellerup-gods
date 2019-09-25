import React from 'react'

const AktivitetCard = (props) => {
    let AktivitetsListe = props.alleAktiviteterProp.map(aktivitet => {
      return (
        <div className="NyhedCard col-md-4 mb-4" key={aktivitet.id}>
          <div className="card bg-transparent border-0">
            <img
              src={"/Images/Aktiviteter/" + aktivitet.img}
              className="card-img-top img-fluid"
              alt="Nyhed"
            />
            <div className="card-body p-0">
              <h5 className="card-title mt-3">{aktivitet.overskrift}</h5>
              <p className="card-text mb-0">{aktivitet.resume}</p>
              <a href="/" className="stretched-link text-muted">Læs mere</a>
            </div>
          </div>
        </div>
      );
    });
  
    return (
      <div className="aktivitet-liste">
          
        <div className="row">{AktivitetsListe}</div>
        
      </div>
    );
  };
 
export default AktivitetCard;