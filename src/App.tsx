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
const image1 = require('./assets/yeniay.png');
const image2 = require('./assets/hilal.png');  
const image3 = require('./assets/ilkdordun.png');
const image4 = require('./assets/siskinay.png');
const image5 = require('./assets/dolunay.png');
const image6 = require('./assets/siskinay2.png');
const image7 = require('./assets/sondordun.png');
const image8 = require('./assets/hilal2.png');

const App: React.FC = () => {
  // Mevcut fazı takip etmek için state tanımlanır
  const [currentPhase, setCurrentPhase] = useState(0);
  const [focusElement, setFocusElement] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const info = [
    {
      name: 'Yeni Ay',
      description: 'Yeni Ay, Ayın başlangıç evresidir ve gökyüzünde görünmez.'
    },
    {
      name: 'Hilal',
      description: 'Hilal evresi, Ay’ın ışığının solgun bir şekilde belirmeye başladığı evredir.'
    },
    {
      name: 'İlk Dördün',
      description: 'İlk Dördün, Ay’ın yarısının aydınlandığı ve yarısının karanlık olduğu evredir.'
    },
    {
      name: 'Şişkin Ay',
      description: 'Şişkin Ay evresi, Ay’ın tam olarak dolmadan hemen önceki evredir.'
    },
    {
      name: 'Dolunay',
      description: 'Dolunay, Ay’ın tamamen aydınlandığı ve parlak bir şekilde gökyüzünde görüldüğü evredir.'
    },
    {
      name: 'Şişkin Ay',
      description: 'Şişkin Ay, Ay’ın yavaşça küçülmeye başladığı evredir.'
    },
    {
      name: 'Son Dördün',
      description: 'Son Dördün, Ay’ın yarısının aydınlandığı ve diğer yarısının karanlık olduğu bir evredir.'
    },
    {
      name: 'Hilal',
      description: 'Hilal evresi, Ay’ın ışığının solgun bir şekilde belirmeye başladığı evredir.'
    }
  ];
  // Ay fazları verisi tanımlanır
  const moonPhases = [
    { name: 'Yeni Ay', image: 'https://placehold.it/300x300', description: 'Yeni Ay, Ayın başlangıç evresidir ve gökyüzünde görünmez.' },
    { name: 'Hilal', image: 'https://placehold.it/300x300', description: 'Hilal evresi, Ay’ın ışığının solgun bir şekilde belirmeye başladığı evredir.' },
    { name: 'İlk Dördün', image: 'https://placehold.it/300x300', description: 'İlk Dördün, Ay’ın yarısının aydınlandığı ve yarısının karanlık olduğu evredir.' },
    { name: 'Şişkin Ay', image: 'https://placehold.it/300x300', description: 'Şişkin Ay evresi, Ay’ın tam olarak dolmadan hemen önceki evredir.' },
    { name: 'Dolunay', image: 'https://placehold.it/300x300', description: 'Dolunay, Ay’ın tamamen aydınlandığı ve parlak bir şekilde gökyüzünde görüldüğü evredir.' },
    { name: 'Şişkin Ay', image: 'https://placehold.it/300x300', description: 'Şişkin Ay, Ay’ın yavaşça küçülmeye başladığı evredir.' },
    { name: 'Son Dördün', image: 'https://placehold.it/300x300', description: 'Son Dördün, Ay’ın yarısının aydınlandığı ve diğer yarısının karanlık olduğu bir evredir.' },
    { name: 'Hilal', image: 'https://placehold.it/300x300', description: 'Hilal evresi, Ay’ın ışığının solgun bir şekilde belirmeye başladığı evredir.' },
    { name: 'Yeni Ay', image: 'https://placehold.it/300x300', description: 'Yeni Ay, Ayın başlangıç evresidir ve gökyüzünde görünmez.' }
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
      <div className="container" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', justifyContent: 'center', alignItems: 'center'}}>
        <div className="carousel" style={{ display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '140vh' }}>
          <FancyCarousel 
          images={images} 
          setFocusElement={setFocusElement}
          offsetAngle={0}
          carouselRadius={300}
          peripheralImageRadius={100}
          centralImageRadius={150}
          focusElementStyling={{border: '2px solid #ba4949'}}
          border={true}
          borderWidth={2}
          borderHexColor={'1c364f'}
        />
          
          <div className="info-box-wrapper" style={{ padding: '20px', border: '2px solid #ccc', marginLeft: '100px', width: '400px'}}>
          <h2>{info[focusElement].name}</h2>
          <p>{info[focusElement].description}</p>
          </div>
        <div>
        </div>
        </div>
      </div>
    </Router>
  );
};
export default App;