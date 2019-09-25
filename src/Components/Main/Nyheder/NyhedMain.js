import React from 'react';
import './NyhedMain.css';


const NyhedMain = (props) => {
    let NyhedMain = props.alleNyhederProp.map(nyhed => {
        return nyhed.id > 3 ? (
            <div className="NyhedMain mb-4" key={nyhed.id}>
            <img src={"/Images/Nyheder/" + nyhed.img} alt="Nyhed" className="img-fluid mb-3 w-100"/>
            <h2>{nyhed.overskrift}</h2>
            <p>{nyhed.resume}</p>
            <a href="/">Læs mere her</a>
        </div>
      ) : null
      });
    
    return ( 
        <div>
            {NyhedMain}
        </div>
     );
}
 
export default NyhedMain;