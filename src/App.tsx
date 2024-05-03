import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MoonPhase from './components/MoonPhase.tsx';
import Controls from './components/Controls.tsx';
import MoonInfo from './components/MoonInfo.tsx';
import MoonCalendar from './components/MoonCalendar.tsx';
import ProgressBar from './components/ProgressBar.tsx';

const App: React.FC = () => {
  // Mevcut fazı takip etmek için state tanımlanır
  const [currentPhase, setCurrentPhase] = useState(0);

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
          <h1>Lunamood</h1>
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
    </Router>
  );
};

export default App;
