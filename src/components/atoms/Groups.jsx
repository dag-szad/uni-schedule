import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SecondHeader } from '#components/styles/Header.styled.jsx';
import { ButtonBg, ButtonStyled } from '#components/styles/Button.styled.jsx';

const Groups = ({ onGroupChange }) => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const storedGroup = localStorage.getItem('group');
    if (storedGroup) {
      setActiveButton(Number(storedGroup));
    } else {
      setActiveButton(1);
    }
  }, []);

  const handleGroupClick = (group) => {
    onGroupChange(group);
    console.log('Wybrana grupa:', group);

    setActiveButton(group);
  };

  return (
    <LocalContainer>
      <SecondHeader>Grupa</SecondHeader>
      <LocalList>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((group) => (
          <li key={group}>
            <ButtonBg $isActive={activeButton === group}>
              <ButtonStyled
                $isActive={activeButton === group}
                onClick={() => handleGroupClick(group)}
              >
                {group}
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

export { Groups };
