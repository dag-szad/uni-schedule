import { Dates } from '#components/atoms/Dates.jsx';
import { TextButton } from '../styles/Button.styled';
import styled from 'styled-components';

const Buttons = ({ onDateChange, onActiveChange, selectedDate, activeDay }) => {
  return (
    <LocalContainer>
      <Dates onDateChange={onDateChange} selectedDate={selectedDate} />
      <DayContainer>
        <TextButton
          $isActive={'saturday' === activeDay}
          type="button"
          onClick={() => onActiveChange('saturday')}
        >
          Sobota
        </TextButton>
        <TextButton
          $isActive={'sunday' === activeDay}
          type="button"
          onClick={() => onActiveChange('sunday')}
        >
          Niedziela
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
