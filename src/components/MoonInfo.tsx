import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const InfoImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  margin-bottom:8px;
`;

const InfoDescription = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 16px;
`;

interface MoonInfoProps {
  phase: {
    name: string;
    image: string;
    description: string;
  };
}

const MoonInfo: React.FC<MoonInfoProps> = ({ phase }) => {
  return (
    <InfoContainer>
      <InfoImage src={phase.image} alt={phase.name} />
      <InfoTitle>{phase.name}</InfoTitle>
      <InfoDescription>{phase.description}</InfoDescription>
    </InfoContainer>
  );
};

export default MoonInfo;