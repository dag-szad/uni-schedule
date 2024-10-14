import { Dates } from '#components/atoms/Dates.jsx';

import { TextButton } from '#components/styles/Button.styled';
import styled from 'styled-components';

const Buttons = ({ onDateChange, onActiveChange, selectedDate, activeDay }) => {
  return (
    <LocalContainer>
      <Dates onDateChange={onDateChange} selectedDate={selectedDate} />
      <DayContainer>
        <TextButton
          $isActive={'lecturesDay' === activeDay}
          type="button"
          onClick={() => onActiveChange('lecturesDay')}
        >
          Wykłady
        </TextButton>
        <TextButton
          $isActive={'exercisesDay' === activeDay}
          type="button"
          onClick={() => onActiveChange('exercisesDay')}
        >
          Ćwiczenia
        </TextButton>
      </DayContainer>
    </LocalContainer>
  );
};

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

export { Buttons };
