import { ButtonBg, ButtonStyled, ButtonImg } from '../styles/Button.styled';
import termsButton from '../../images/menu.svg';
import profileButton from '../../images/person.svg';

const MenuButton = ({ selectedType }) => {
  const leftModalOpen = () => {
    const overlay = document.querySelector('#overlayLeft');
    overlay.classList.toggle('hidden');
    const modalLeft = document.querySelector('#modalLeft');
    modalLeft.classList.toggle('hidden');
  };

  const rightModalOpen = () => {
    const overlay = document.querySelector('#overlayRight');
    overlay.classList.toggle('hidden');
    const modalRight = document.querySelector('#modalRight');
    modalRight.classList.toggle('hidden');
  };

  return (
    <ButtonBg>
      {selectedType === 'terms' ? (
        <ButtonStyled type="button" onClick={leftModalOpen}>
          <ButtonImg src={termsButton} />
        </ButtonStyled>
      ) : (
        <ButtonStyled type="button" onClick={rightModalOpen}>
          <ButtonImg src={profileButton} />
        </ButtonStyled>
      )}
    </ButtonBg>
  );
};

export { MenuButton };
