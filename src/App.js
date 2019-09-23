import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ImageSlider from './Components/Main/Intro/ImageSlider';
import Nyheder from './Components/Main/Nyheder/Nyheder';
import Aktiviteter from './Components/Main/Aktiviteter/Aktiviteter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <ImageSlider />
        <Nyheder />
        <Aktiviteter />
        <Footer />
    </div>
  );
}

export default App;
