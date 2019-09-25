import React from 'react';
import DKClogo from '../../../DKC-logo.png';
import "./DKC.css";


const DKC = () => {
    return ( 
        <div className="DKC mb-5">
            <img src={DKClogo} alt="DKC-logo" className="img-fluid"/>
            <br/>
            <a href="https://dkbs.dk/">Møllerup Gods er autoriseret partner hos Danske Konferencecentre</a>
        </div>
     );
}
 
export default DKC;