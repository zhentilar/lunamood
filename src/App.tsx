import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
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
  // eslint-disable-next-line
  const [currentPhase, setCurrentPhase] = useState(0);
  const [focusElement, setFocusElement] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const info = [
    {
      name: 'Yeni Ay',
      description: "Ay'ın Dünya ve Güneş'in ortasında olduğu evredir. Ay'ın Dünya'ya bakan kısmı Güneş ışığını alamadığı için Dünya'dan bakıldığında Ay görülmez. Yaklaşık olarak her 29.5 günde bir, yeni bir ay döngüsü başlar."
    },
    {
      name: 'Hilal',
      description: "Yeni Ay ile İlk Dördün evresi arasında yer alır. Ay, ters ''C'' şeklinde görülür. Ay, Dünya etrafında ilerlemeye başlar ve Güneş'ten yeterince uzaklaştığında aydınlanmış yüzünün ince bir kısmı görünmeye başlar. Bu aydınlanmış kısma Hilal denir. Yeni Ay'dan yaklaşık 1-2 gün sonra meydana gelir."
    },
    {
      name: 'İlk Dördün',
      description: "Yeni Ay evresinden yaklaşık 7 gün sonra görülür. Ay, Güneş ve Dünya'ya göre 90 derece açı yaptığında, yarısı aydınlanır ve diğer yarısı karanlık kalır. Ay ''D'' şeklinde görülür."
    },
    {
      name: 'Şişkin Ay',
      description: "Ay'ın İlk Dördün evresi ile Dolunay evresi arasında görüldüğü ara evredir. Dolunay öncesi şişkin Ay ve Dolunay sonrası şişkin Ay olarak ikiye ayrılır. Ay'ın sağ tarafının yarısından fazlası aydınlanmış olarak görülür. Yaklaşık 7 gün sürer."
    },
    {
      name: 'Dolunay',
      description: "İlk Dördün evresinden 7 gün sonra Dünya, Güneş ile Ay arasında yer alır. Ay'ın Dünya'ya bakan kısmı tamamen aydınlandığından Ay parlak küre şeklinde görülür."
    },
    {
      name: 'Şişkin Ay',
      description: "Dolunay ve Son Dördün evreleri arasında görülen ara evredir. Ay'ın sol tarafının  yarısından fazlası aydınlanmış olarak görülür. Yaklaşık 7 gün sürer."
    },
    {
      name: 'Son Dördün',
      description: "Dolunay evresinden 7 gün sonra görülür. Ay'ın Dünya'dan görünen sol yarısı aydınlandığından Dünya'dan bakıldığında Ay ters ''D'' şeklinde görülür."
    },
    {
      name: 'Hilal',
      description: "Ay, Güneş'in doğusunda olduğu zaman gerçekleşir. Son Dördün ve Yeni Ay evreleri arasında Ay ''C'' şeklinde görülür."
    }
  ];
  // Ay fazları verisi tanımlanır
  const moonPhases = [
    { name: 'Yeni Ay', image: './assets/yeniay.png', description: "Ay'ın Dünya ve Güneş'in ortasında olduğu evredir. Ay'ın Dünya'ya bakan kısmı Güneş ışığını alamadığı için Dünya'dan bakıldığında Ay görülmez. Yaklaşık olarak her 29.5 günde bir, yeni bir ay döngüsü başlar." },
    { name: 'Hilal', image: './assets/hilal.png', description: "Ay, Güneş'in doğusunda olduğu zaman gerçekleşir. Son Dördün ve Yeni Ay evreleri arasında Ay ''C'' şeklinde görülür." },
    { name: 'İlk Dördün', image: './assets/ilkdordun.png', description: "Yeni Ay evresinden yaklaşık 7 gün sonra görülür. Ay, Güneş ve Dünya'ya göre 90 derece açı yaptığında, yarısı aydınlanır ve diğer yarısı karanlık kalır. Ay ''D'' şeklinde görülür." },
    { name: 'Şişkin Ay', image: './assets/siskinay.png', description: "Ay'ın İlk Dördün evresi ile Dolunay evresi arasında görüldüğü ara evredir. Dolunay öncesi şişkin Ay ve Dolunay sonrası şişkin Ay olarak ikiye ayrılır. Ay'ın sağ tarafının yarısından fazlası aydınlanmış olarak görülür. Yaklaşık 7 gün sürer." },
    { name: 'Dolunay', image: './assets/dolunay.png', description: "İlk Dördün evresinden 7 gün sonra Dünya, Güneş ile Ay arasında yer alır. Ay'ın Dünya'ya bakan kısmı tamamen aydınlandığından Ay parlak küre şeklinde görülür." },
    { name: 'Şişkin Ay', image: './assets/siskinay2.png', description: "Dolunay ve Son Dördün evreleri arasında görülen ara evredir. Ay'ın sol tarafının  yarısından fazlası aydınlanmış olarak görülür. Yaklaşık 7 gün sürer." },
    { name: 'Son Dördün', image: './assets/sondordun.png', description: "Dolunay evresinden 7 gün sonra görülür. Ay'ın Dünya'dan görünen sol yarısı aydınlandığından Dünya'dan bakıldığında Ay ters ''D'' şeklinde görülür." },
    { name: 'Hilal', image: './assets/hilal2.png', description: "Ay, Güneş'in doğusunda olduğu zaman gerçekleşir. Son Dördün ve Yeni Ay evreleri arasında Ay ''C'' şeklinde görülür." }
  ];
  

  // Toplam faz sayısı belirlenir
  const totalPhases = moonPhases.length;
  // eslint-disable-next-line
  const currentProgress = Math.min((currentPhase / (totalPhases - 1)) * 100, 100); // İlerleme yüzdesi 100'ü geçmez
  // eslint-disable-next-line
  const carouselProgress = Math.min((focusElement / (images.length - 1)) * 100, 100); // Carousel ilerlemesi 100'ü geçmez

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
                    <ProgressBar progress={(focusElement / (images.length - 1)) * 100} />
                    <H5PComponent /> {/* H5PComponent bileşenini ekledim */}
                  </div>
                    </>
              }
            />
            {/* Ay Takvimi bileşeni yolunu tanımlar */}
            <Route path="/calendar" element={<MoonCalendar />} />
          </Routes>
          {/* İlerleme çubuğu bileşeni mevcut ilerlemeyi gösterir */}
          
        </main>
      </div>
      
    </Router>
  );
};
export default App;