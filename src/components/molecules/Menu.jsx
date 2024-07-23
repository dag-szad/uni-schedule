import { MenuButton } from '../atoms/MenuButton.jsx';
import { CurrentDate } from '../atoms/CurrentDate.jsx';

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
