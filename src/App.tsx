import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MoonPhase from './components/MoonPhase.tsx';
import Controls from './components/Controls.tsx';
import MoonInfo from './components/MoonInfo.tsx';
import MoonCalendar from './components/MoonCalendar.tsx';
import ProgressBar from './components/ProgressBar.tsx';

// Uygulamanın ana bileşeni
const App: React.FC = () => {
  // Güncel aşamayı saklamak için state kullanılır
  const [currentPhase, setCurrentPhase] = useState(0);

  // Ayın farklı aşamaları ve bilgileri
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
    // Diğer aşamalar burada yer alır
  ];

  // Toplam aşama sayısı ve ilerleme çubuğu için hesaplama yapılır
  const totalPhases = moonPhases.length;
  const currentProgress = (currentPhase / (totalPhases - 1)) * 100;

  return (
    <Router>
      <div className="App">
        {/* Uygulamanın başlığı */}
        <header className="App-header">
          <h1>Lunamood</h1>
        </header>
        <main className="App-main">
          <Routes>
            {/* Ana sayfa rotası */}
            <Route
              path="/"
              element={
                <>
                  {/* Güncel ay aşamasını gösteren bileşen */}
                  <MoonPhase
                    phase={moonPhases[currentPhase]}
                    totalPhases={totalPhases}
                    currentPhase={currentPhase}
                  />
                  {/* Kontroller bileşeni */}
                  <Controls
                    totalPhases={totalPhases}
                    currentPhase={currentPhase}
                    setCurrentPhase={setCurrentPhase}
                  />
                  {/* Güncel ay aşamasının bilgilerini gösteren bileşen */}
                  <MoonInfo phase={moonPhases[currentPhase]} />
                </>
              }
            />
            {/* Takvim sayfası rotası */}
            <Route path="/calendar" element={<MoonCalendar />} />
          </Routes>
          {/* İlerleme çubuğu bileşeni */}
          <ProgressBar progress={currentProgress} />
        </main>
      </div>
    </Router>
  );
};

export default App;
