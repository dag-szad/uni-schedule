import { useEffect } from 'react';

import {
  MainHeader,
  CurrentDateHeader,
} from '#components/styles/Header.styled';
import styled from 'styled-components';

import firstTermClassesDates from '#data/firstTerm/classesDates.json';
import secondTermClassesDates from '#data/secondTerm/classesDates.json';
import thirdTermClassesDates from '#data/thirdTerm/classesDates.json';
import fourthTermClassesDates from '#data/fourthTerm/classesDates.json';
import fifthTermClassesDates from '#data/fifthTerm/classesDates.json';
import sixthTermClassesDates from '#data/sixthTerm/classesDates.json';

const CurrentDate = ({ selectedDate, selectedTerm, classesDates }) => {
  useEffect(() => {
    const loadClassesDates = () => {
      const termMap = {
        1: firstTermClassesDates,
        2: secondTermClassesDates,
        3: thirdTermClassesDates,
        4: fourthTermClassesDates,
        5: fifthTermClassesDates,
        6: sixthTermClassesDates,
      };

      const data = termMap[selectedTerm];

      if (data) {
        setClassesDates(data);
      }
    };

    loadClassesDates();
  }, [selectedTerm]);

  const dateObject = classesDates.find(
    (dateObj) => dateObj.id === selectedDate
  );

  if (!dateObject) {
    return (
      <LocalContainer>
        <MainHeader>Daty brak!</MainHeader>
        <CurrentDateHeader>Do uzupełnienia</CurrentDateHeader>
      </LocalContainer>
    );
  }

  return (
    <LocalContainer>
      <MainHeader>{`${dateObject.id} zjazd`}</MainHeader>
      <CurrentDateHeader>{dateObject.title}</CurrentDateHeader>
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export { CurrentDate };
