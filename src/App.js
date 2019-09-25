import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ImageSlider from './Components/Main/Intro/ImageSlider';
import Nyheder from './Components/Main/Nyheder/Nyheder';
import Aktiviteter from './Components/Main/Aktiviteter/Aktiviteter';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Outro from './Components/Main/Outro/Outro';



function App() {
 // State kontakt
 const [ContactInformationer] = useState([
  {title: '', contactData: 'Møllerup Gods', id: 1},
  {title: 'Adresse:', contactData: 'Møllerupvej 26', id: 2},
  {title: 'By:', contactData: '8410 Rønde', id: 3},
  {title: 'Telefon:', contactData: '87 58 69 00', id: 4},
  {title: 'Email:', contactData: 'info@moellerup.dk', id: 5}
]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />

          <Switch>
          <Route exact path='/' render={ () =>{"Velkommen"}} />
          <Route path='/verdensballetten' render={ () =>{"Verdensballetten"}} />
          <Route path='/events' render={ () =>{"Events og mødefaciliteter"}} />
          <Route path='/gæster' render={ () =>{"Hvad siger vores gæster"}} />
          <Route path='/om' render={ () =>{"Om Møllerup Gods"}} />
          <Route path='/kontakt' render={ () =>{"Kontakt os"}} />
          <Route path='/webshop' render={ () =>{"Webshop"}} />
          </Switch>

          <ImageSlider />
          <Nyheder />
          <hr></hr>
          <Aktiviteter />
          <Outro />
          </div>
          <Footer alleContactInformationerProp={ContactInformationer}/>
          
      </div>
      </BrowserRouter>
    
  );
}

export default App;
