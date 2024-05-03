import React, { useState } from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const ControlsButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  &:hover {
    background-color: #eee;
  }
`;

interface ControlsProps {
  totalPhases: number;
  currentPhase: number;
  setCurrentPhase: React.Dispatch<React.SetStateAction<number>>;
}

const Controls: React.FC<ControlsProps> = ({ totalPhases, currentPhase, setCurrentPhase }) => {
  const handlePrevious = () => {
    setCurrentPhase((prevPhase) => Math.max(prevPhase - 1, 0));
  };

  const handleNext = () => {
    setCurrentPhase((prevPhase) => Math.min(prevPhase + 1, totalPhases - 1));
  };

  return (
    <ControlsContainer>
      <ControlsButton onClick={handlePrevious}>Önceki</ControlsButton>
      <ControlsButton onClick={handleNext}>Sonraki</ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;