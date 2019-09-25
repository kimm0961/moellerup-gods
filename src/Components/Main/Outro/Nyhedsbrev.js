import React, {useState} from 'react';
import "./Nyhedsbrev.css";


const Nyhedsbrev = () => {
     // State Nyhedsbrev
const [nyhedsbrev, setNyhedsbrev] = useState(
    {email: '', FirstName: '', LastName: '' },
);

// Email
const handleEmail = (e) => {
    setNyhedsbrev({...nyhedsbrev, email: e.target.value})
}

// FirstName
const handleFirstName = (e) => {
    setNyhedsbrev({...nyhedsbrev, FirstName: e.target.value})
}
// LastName
const handleLastName = (e) => {
    setNyhedsbrev({...nyhedsbrev, LastName: e.target.value})
}


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nyhedsbrev);
    setNyhedsbrev({
        email: '',
        FirstName: '',
        LastName: ''
    });
}

    return ( 
        <div className="Nyhedsbrev bg-white">
            
            <form className="px-2 py-4" onSubmit={handleSubmit}>
            <h2>Tilmeld nyhedsbrev</h2>
            <p className="text-left"><small><span className="text-danger">*</span> skal udfyldes</small></p>
            
              <label htmlFor="name">Email Adress <span className="text-danger">*</span></label>
              <br/>
              <input className="rounded border border-secondary" type="text" id="email" value={nyhedsbrev.email} onChange={handleEmail}/>
              <br/>
              <label htmlFor="name">First Name</label>
              <br/>
              <input className="rounded border border-secondary" type="text" id="FirstName" value={nyhedsbrev.FirstName} onChange={handleFirstName}/>
              <br/>
              <label htmlFor="name">Efternavn</label>
              <br/>
              <input className="rounded border border-secondary" type="text" id="LastName" value={nyhedsbrev.LastName} onChange={handleLastName}/>
              <br/>
              <p className="m-0"><strong>Vælg nyhedsbrev</strong></p>
              <ul className="list-group">
                  <li><input type="checkbox" id="alle"/><label>Møllerup - alle</label></li>
                  <li><input type="checkbox" id="verdensballetten"/><label>Verdensballetten</label></li>
                  <li><input type="checkbox" id="hamp"/><label>Møllerup Hamp</label></li>
              </ul>
                
              <button type="submit" className="btn btn-secondary py-0 mt-2">Tilmeld</button>
          </form>
          
        </div>
     );
}
 
export default Nyhedsbrev;