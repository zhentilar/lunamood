import React from 'react';
import styled from 'styled-components';

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

const MoonCalendar: React.FC = () => {
  const moonPhases = [
    {
        name: 'Yeni Ay',
    },
    {
        name: 'Dolunay',
    },
    {
        name: 'İlk Dördün',
    },
    {
        name: 'Son Dördün',
    },
    {
        name: 'Azalan Yarım Ay',
    },
    {
        name: 'Artan Yarım Ay',
    }
  ];

  return (
    <CalendarContainer>
      <h2>Ay Takvimi</h2>
      <CalendarTable>
        <CalendarThead>
          <CalendarTr>
            <CalendarTh>Ay Fazı</CalendarTh>
          </CalendarTr>
        </CalendarThead>
        <CalendarTd>
          {moonPhases.map((phase, index) => (
            <CalendarTr key={index}>
              <CalendarTd>{phase.name}</CalendarTd>
            </CalendarTr>
          ))}
        </CalendarTd>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default MoonCalendar;