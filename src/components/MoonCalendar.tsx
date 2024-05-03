import React from 'react';
import styled from 'styled-components';

// Bileşen için stillendirilmiş bileşenler oluşturulur
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const CalendarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const CalendarThead = styled.thead`
  background-color: #ddd;
`;

const CalendarTr = styled.tr`
  &:nth-child(even) {
    background-color: #eee;
  }
`;

const CalendarTh = styled.th`
  padding: 8px 16px;
  font-size: 16px;
  text-align: left;
`;

const CalendarTd = styled.td`
  padding: 8px 16px;
  font-size: 16px;
  text-align: left;
`;

// Ay takvimi bileşeni
const MoonCalendar: React.FC = () => {
  // Ay fazları listesi
  const moonPhases = [
    {
        name: 'Yeni Ay',
    },
    // Diğer fazlar burada yer alır
  ];

  return (
    <CalendarContainer>
      <h2>Ay Takvimi</h2> {/* Başlık */}
      <CalendarTable>
        <CalendarThead>
          <CalendarTr>
            <CalendarTh>Ay Fazı</CalendarTh> {/* Başlık */}
          </CalendarTr>
        </CalendarThead>
        {/* Ay fazları listesi */}
        {moonPhases.map((phase, index) => (
          <CalendarTr key={index}>
            <CalendarTd>{phase.name}</CalendarTd> {/* Ay fazı */}
          </CalendarTr>
        ))}
      </CalendarTable>
    </CalendarContainer>
  );
};

export default MoonCalendar; // Ay takvimi bileşeni dışa aktarılır
