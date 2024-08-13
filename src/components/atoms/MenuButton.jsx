import termsButton from '../../images/menu.svg';
import profileButton from '../../images/person.svg';

import {
  ButtonBg,
  ButtonStyled,
  ButtonImg,
} from '#components/styles/Button.styled';

const MenuButton = ({ selectedType, onButtonClick }) => {
  return (
    <ButtonBg>
      <ButtonStyled type="button" onClick={onButtonClick}>
        <ButtonImg
          src={selectedType === 'terms' ? termsButton : profileButton}
        />
      </ButtonStyled>
    </ButtonBg>
  );
};

export { MenuButton };
