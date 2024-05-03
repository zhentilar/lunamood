import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar.tsx'; // İlerleme çubuğu bileşeni

// Bileşen için stillendirilmiş bileşenler oluşturulur
const PhaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const PhaseImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;
`;

const PhaseTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

// Ay aşaması bileşeni için gerekli prop'ları tanımlar
interface MoonPhaseProps {
  phase: {
    name: string;
    image: string;
    description: string;
  };
  totalPhases: number;
  currentPhase: number;
}

// Ay aşaması bileşeni
const MoonPhase: React.FC<MoonPhaseProps> = ({ phase, totalPhases, currentPhase }) => {
  // İlerleme yüzdesi hesaplanır
  const progressPercentage = Math.round((currentPhase / totalPhases) * 100);

  return (
    <PhaseContainer>
      <PhaseImage src={phase.image} alt={phase.name} /> {/* Aşama resmi */}
      <PhaseTitle>{phase.name}</PhaseTitle> {/* Aşama adı */}
      <ProgressBar progress={progressPercentage} /> {/* İlerleme çubuğu */}
    </PhaseContainer>
  );
};

export default MoonPhase; // Ay aşaması bileşeni dışa aktarılır
