import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

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

interface MoonPhaseProps {
  phase: {
    name: string;
    image: string;
    description: string;
  };
  totalPhases: number;
  currentPhase: number;
}

const MoonPhase: React.FC<MoonPhaseProps> = ({ phase, totalPhases, currentPhase }) => {
  const progressPercentage = (currentPhase / totalPhases) * 100;

  return (
    <PhaseContainer>
      <PhaseImage src={phase.image} alt={phase.name} />
      <PhaseTitle>{phase.name}</PhaseTitle>
      <ProgressBar progress={progressPercentage} />
    </PhaseContainer>
  );
};

export default MoonPhase;