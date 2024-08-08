import React, { useState } from 'react';
import styled from 'styled-components';
import { SecondHeader } from '#components/styles/Header.styled.jsx';
import { ButtonBg, ButtonStyled } from '#components/styles/Button.styled.jsx';

const Dates = ({ onDateChange, selectedDate }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleDateClick = (date) => {
    onDateChange(date);
    console.log('Wybrana data:', date);

    setActiveButton(date);
  };

  return (
    <LocalContainer>
      <SecondHeader>Zjazd</SecondHeader>
      <LocalList>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((date) => (
          <li key={date}>
            <ButtonBg $isActive={activeButton === date}>
              <ButtonStyled
                $isActive={activeButton === date}
                onClick={() => handleDateClick(date)}
              >
                {date}
              </ButtonStyled>
            </ButtonBg>
          </li>
        ))}
      </LocalList>
    </LocalContainer>
  );
};

const LocalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
`;

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export { Dates };
