import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SecondHeader } from '#components/styles/Header.styled.jsx';
import { ButtonBg, ButtonStyled } from '#components/styles/Button.styled.jsx';

const Terms = ({ onTermChange }) => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const storedTerm = localStorage.getItem('term');
    if (storedTerm) {
      setActiveButton(Number(storedTerm));
    } else {
      setActiveButton(2);
    }
  }, []);

  const handleTermClick = (term) => {
    onTermChange(term);
    console.log('Wybrany semestr:', term);

    setActiveButton(term);
  };

  return (
    <LocalContainer>
      <SecondHeader>Semestr</SecondHeader>
      <LocalList>
        {[1, 2, 3, 4, 5, 6].map((term) => (
          <li key={term}>
            <ButtonBg $isActive={activeButton === term}>
              <ButtonStyled
                $isActive={activeButton === term}
                onClick={() => handleTermClick(term)}
              >
                {term}
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

  max-width: 100px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export { Terms };
