import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MoonPhase from './components/MoonPhase.tsx';
import Controls from './components/Controls.tsx';
import MoonInfo from './components/MoonInfo.tsx';
import MoonCalendar from './components/MoonCalendar.tsx';
import ProgressBar from './components/ProgressBar.tsx';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import H5PComponent from './components/H5PComponent.tsx';
const image1 = require('./assets/image1.png');
const image2 = require('./assets/image2.png');  
const image3 = require('./assets/image3.png');
const image4 = require('./assets/image4.png');
const image5 = require('./assets/image5.png');
const image6 = require('./assets/image6.png');
const image7 = require('./assets/image7.png');
const image8 = require('./assets/image8.png');

const App: React.FC = () => {
  // Mevcut fazı takip etmek için state tanımlanır
  const [currentPhase, setCurrentPhase] = useState(0);
  const [focusElement, setFocusElement] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const info = ['Yeni Ay', 'Hilal', 'İlk Dördün', 'Şişkin Ay', 'Dolunay', 'Şişkin Ay', 'Son Dördün', 'Hilal', 'Yeni Ay'];
  // Ay fazları verisi tanımlanır
  const moonPhases = [
    {
      name: 'Yeni Ay',
      image: 'https://placehold.it/300x300',
      description: 'Yeni Ay resmi',
    },
    {
      name: 'Hilal',
      image: 'https://placehold.it/300x300',
      description: 'Hilal resmi',
    },
    {
      name: 'İlk Dördün',
      image: 'https://placehold.it/300x300',
      description: 'İlk Dördün resmi',
    },
    {
      name: 'Şişkin Ay',
      image: 'https://placehold.it/300x300',
      description: 'Şişkin Ay resmi',
    },
    {
      name: 'Dolunay',
      image: 'https://placehold.it/300x300',
      description: 'Dolunay resmi',
    },
    {
      name: 'Şişkin Ay',
      image: 'https://placehold.it/300x300',
      description: 'Şişkin Ay resmi',
    },
    {
      name: 'Son Dördün',
      image: 'https://placehold.it/300x300',
      description: 'Son Dördün resmi',
    },
    {
      name: 'Hilal',
      image: 'https://placehold.it/300x300',
      description: 'Hilal resmi',
    },
    {
      name: 'Yeni Ay',
      image: 'https://placehold.it/300x300',
      description: 'Yeni Ay resmi',
    }
  ];

  // Toplam faz sayısı belirlenir
  const totalPhases = moonPhases.length;
  
  // Mevcut ilerlemeyi hesaplar
  const currentProgress = (currentPhase / (totalPhases - 1)) * 100;

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>🌙 Lunamood</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* MoonPhase bileşeni mevcut fazı görüntüler */}
                  <MoonPhase
                    phase={moonPhases[currentPhase]}
                    totalPhases={totalPhases}
                    currentPhase={currentPhase}
                  />
                  <img src={'https://placehold.it/100x100'} alt="Player" />
                  {/* Kontroller bileşeni mevcut fazı işaretler */}
                  <Controls
                    totalPhases={totalPhases}
                    currentPhase={currentPhase}
                    setCurrentPhase={setCurrentPhase}
                  />
                  {/* MoonInfo bileşeni mevcut faz hakkında bilgi sağlar */}
                  <MoonInfo phase={moonPhases[currentPhase]} />
                  <H5PComponent /> {/* H5PComponent bileşenini ekledim */}
                  
                </>
              }
            />
            {/* Ay Takvimi bileşeni yolunu tanımlar */}
            <Route path="/calendar" element={<MoonCalendar />} />
          </Routes>
          {/* İlerleme çubuğu bileşeni mevcut ilerlemeyi gösterir */}
          <ProgressBar progress={currentProgress} />
        </main>
      </div>

      <div className="carousel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140vh' }}>
      <FancyCarousel 
      images={images} 
      setFocusElement={setFocusElement}
      offsetAngle={0}
      carouselRadius={400}
      peripheralImageRadius={100}
      centralImageRadius={150}
      focusElementStyling={{border: '2px solid #ba4949'}}
      border={true}
      borderWidth={2}
      borderHexColor={'1c364f'}/>
      
      <div className="info-box-wrapper">
        <p> {info[focusElement]} </p>
      </div>
    <div>
      </div>
      </div>
    </Router>
  );
};
export default App;