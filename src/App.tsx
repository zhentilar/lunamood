import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MoonPhase from './components/MoonPhase.tsx';
import Controls from './components/Controls.tsx';
import MoonInfo from './components/MoonInfo.tsx';
import MoonCalendar from './components/MoonCalendar.tsx';
import ProgressBar from './components/ProgressBar.tsx';

const App: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const moonPhases = [
    {
      name: 'Yeni Ay',
      image: 'https://placehold.it/300x300',
      description: 'Yeni Ay resmi',
    },
    {
      name: 'Dolunay',
      image: 'https://placehold.it/300x300',
      description: 'Dolunay resmi',
    },
    {
      name: 'Boğaz Ayı',
      image: 'https://placehold.it/300x300',
      description: 'Boğaz Ayı resmi',
    },
    {
      name: 'Geçer Ayı',
      image: 'https://placehold.it/300x300',
      description: 'Geçer Ayı resmi',
    },
    {
      name: 'Büyük Boğaz Ayı',
      image: 'https://placehold.it/300x300',
      description: 'Büyük Boğaz Ayı resmi',
    },
    {
      name: 'Büyük Ay',
      image: 'https://placehold.it/300x300',
      description: 'Büyük Ay resmi',
    },
  ];

  const totalPhases = moonPhases.length;
  const currentProgress = (currentPhase / totalPhases) * 100;

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
                  <MoonPhase
                    phase={moonPhases[currentPhase]}
                    totalPhases={totalPhases}
                    currentPhase={currentPhase}
                  />
                  <Controls
                    totalPhases={totalPhases}
                    currentPhase={currentPhase}
                    setCurrentPhase={setCurrentPhase}
                  />
                  <MoonInfo phase={moonPhases[currentPhase]} />
                </>
              }
            />
            <Route path="/calendar" element={<MoonCalendar />} />
          </Routes>
          <ProgressBar progress={currentProgress} />
        </main>
      </div>
    </Router>
  );
};

export default App;