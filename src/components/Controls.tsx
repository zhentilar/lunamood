import React, { useState } from 'react';
import styled from 'styled-components';

// Bileşen için stillendirilmiş bileşenler oluşturulur
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

// Kontroller bileşeni için gerekli prop'ları tanımlar
interface ControlsProps {
  totalPhases: number;
  currentPhase: number;
  setCurrentPhase: React.Dispatch<React.SetStateAction<number>>;
}

// Kontroller bileşeni
const Controls: React.FC<ControlsProps> = ({ totalPhases, currentPhase, setCurrentPhase }) => {
  // Önceki aşamaya geçiş işlevi
  const handlePrevious = () => {
    setCurrentPhase((prevPhase) => Math.max(prevPhase - 1, 0));
  };

  // Sonraki aşamaya geçiş işlevi
  const handleNext = () => {
    setCurrentPhase((prevPhase) => Math.min(prevPhase + 1, totalPhases - 1));
  };

  return (
    <ControlsContainer>
      <ControlsButton onClick={handlePrevious}>Önceki</ControlsButton> {/* Önceki düğme */}
      <ControlsButton onClick={handleNext}>Sonraki</ControlsButton> {/* Sonraki düğme */}
    </ControlsContainer>
  );
};

export default Controls; // Kontroller bileşeni dışa aktarılır
