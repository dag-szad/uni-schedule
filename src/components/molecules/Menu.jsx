import { MenuButton } from '#components/atoms/MenuButton.jsx';
import { CurrentDate } from '#components/atoms/CurrentDate.jsx';

import styled from 'styled-components';

const Menu = ({
  selectedDate,
  selectedTerm,
  onLeftButtonClick,
  onRightButtonClick,
  classesDates,
}) => {
  return (
    <LocalContainer>
      <MenuButton selectedType="terms" onButtonClick={onLeftButtonClick} />
      <CurrentDate
        selectedDate={selectedDate}
        selectedTerm={selectedTerm}
        classesDates={classesDates}
      />
      <MenuButton selectedType="profile" onButtonClick={onRightButtonClick} />
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Menu };
