import { MenuButton } from '../../Atoms/MenuButton/MenuButton.jsx';
import { CurrentDate } from '../../Atoms/CurrentDate/CurrentDate.jsx';

const Menu = ({ selectedDate }) => {
  return (
    <div>
      <MenuButton selectedType="terms" />
      <CurrentDate selectedDate={selectedDate} />
      <MenuButton selectedType="profile" />
    </div>
  );
};

export { Menu };
