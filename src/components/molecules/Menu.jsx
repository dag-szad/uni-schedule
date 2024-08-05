import { MenuButton } from '../atoms/MenuButton.jsx';
import { CurrentDate } from '../atoms/CurrentDate.jsx';

import styled from 'styled-components';

const Menu = ({ selectedDate, onLeftButtonClick, onRightButtonClick }) => {
  return (
    <LocalContainer>
      <MenuButton selectedType="terms" onButtonClick={onLeftButtonClick} />
      <CurrentDate selectedDate={selectedDate} />
      <MenuButton selectedType="profile" onButtonClick={onRightButtonClick} />
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Menu };
