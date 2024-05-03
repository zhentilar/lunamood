import React from 'react';
import styled from 'styled-components';

// Bileşen için stillendirilmiş bileşenler oluşturulur
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
  margin-bottom: 8px;
`;

const InfoDescription = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 16px;
`;

// Ay aşaması bilgisi bileşeni için gerekli prop'ları tanımlar
interface MoonInfoProps {
  phase: {
    name: string;
    image: string;
    description: string;
  };
}

// Ay aşaması bilgisi bileşeni
const MoonInfo: React.FC<MoonInfoProps> = ({ phase }) => {
  return (
    <InfoContainer>
      <InfoImage src={phase.image} alt={phase.name} /> {/* Aşama resmi */}
      <InfoTitle>{phase.name}</InfoTitle> {/* Aşama adı */}
      <InfoDescription>{phase.description}</InfoDescription> {/* Aşama açıklaması */}
    </InfoContainer>
  );
};

export default MoonInfo; // Ay aşaması bilgisi bileşeni dışa aktarılır
