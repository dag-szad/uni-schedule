import { ButtonBg, ButtonStyled, ButtonImg } from '../styles/Button.styled';
import termsButton from '../../images/menu.svg';
import profileButton from '../../images/person.svg';

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
