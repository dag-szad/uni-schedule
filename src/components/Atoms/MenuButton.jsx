import termsButton from '../../../images/menu.svg';
import profileButton from '../../../images/person.svg';

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
    <div>
      {selectedType === 'terms' ? (
        <button type="button" onClick={leftModalOpen}>
          <img src={termsButton} />
        </button>
      ) : (
        <button type="button" onClick={rightModalOpen}>
          <img src={profileButton} />
        </button>
      )}
    </div>
  );
};

export { MenuButton };
