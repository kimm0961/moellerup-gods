import React from 'react';
import Navbar from './Navbar';
import Logo from '../../moellerupgods-logo.png';



const Header = () => {
    return ( 
        <div className="Header mb-5">
            <img src={Logo} alt="Moellerup Gods Logo" className="d-block mx-auto mb-4 img-fluid"/>
            <Navbar />
        </div>
     );
}

export default Header;