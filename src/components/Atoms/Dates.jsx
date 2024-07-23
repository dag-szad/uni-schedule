import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectHeader } from '../styles/Header.styled.jsx';
import { ButtonBg, ButtonStyled } from '../styles/Button.styled.jsx';

const Dates = ({ onDateChange, selectedDate }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleDateClick = (date) => {
    onDateChange(date);
    console.log('Wybrana data:', date);

    setActiveButton(date);
  };

  return (
    <div>
      <TimeSelectHeader>Zjazd</TimeSelectHeader>
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
    </div>
  );
};

const LocalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-around;
`;

export { Dates };
