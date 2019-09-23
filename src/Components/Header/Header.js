import React from 'react';
import Navbar from './Navbar';
import Logo from '../../moellerupgods.png';



const Header = () => {
    return ( 
        <div>
            <img src={Logo} alt="Moellerup Gods Logo"/>
            <Navbar />
        </div>
     );
}
 
export default Header;