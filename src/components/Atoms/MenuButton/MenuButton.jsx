import termsButton from '../../../images/menu.svg';
import profileButton from '../../../images/person.svg';

const MenuButton = ({ selectedType }) => {
  return (
    <div>
      {selectedType === 'terms' ? (
        <img src={termsButton} />
      ) : (
        <img src={profileButton} />
      )}
    </div>
  );
};

export { MenuButton };
