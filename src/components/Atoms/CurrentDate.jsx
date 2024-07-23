import { TimeHeader, DateHeader } from '../styles/Header.styled';
import styled from 'styled-components';

import classesDates from '#data/classesDates.json';

const CurrentDate = ({ selectedDate }) => {
  const dateObject = classesDates.find(
    (dateObj) => dateObj.id === selectedDate
  );

  if (!dateObject) {
    return <div>Date not found</div>;
  }

  return (
    <LocalContainer>
      <TimeHeader>{`${dateObject.id} zjazd`}</TimeHeader>
      <DateHeader>{dateObject.title}</DateHeader>
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
