import { MenuButton } from '../atoms/MenuButton.jsx';
import { CurrentDate } from '../atoms/CurrentDate.jsx';

import styled from 'styled-components';

const Menu = ({ selectedDate }) => {
  return (
    <LocalContainer>
      <MenuButton selectedType="terms" />
      <CurrentDate selectedDate={selectedDate} />
      <MenuButton selectedType="profile" />
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Menu };
