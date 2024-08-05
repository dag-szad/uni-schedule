import { Groups } from '../atoms/Groups.jsx';
import { SaveButton } from '../atoms/SaveButton.jsx';
import { Overlay, SideContainer } from '../styles/SideMenu.styled.jsx';

const SideMenu = ({
  menuType,
  isOpen,
  onGroupChange,
  selectedGroup,
  saveHandler,
}) => {
  return (
    <div>
      {menuType === 'left' ? (
        <Overlay id="overlayLeft" isOpen={isOpen}>
          <SideContainer id="modalLeft" $type={'left'}>
            <h1>SEMESTRY</h1>
            <p>Wybór semestrów: do zrobienia</p>
          </SideContainer>
        </Overlay>
      ) : (
        <Overlay id="overlayRight" isOpen={isOpen}>
          <SideContainer id="modalRight" $type={'right'}>
            <Groups
              onGroupChange={onGroupChange}
              selectedGroup={selectedGroup}
            />
            <SaveButton saveHandler={saveHandler} />
          </SideContainer>
        </Overlay>
      )}
    </div>
  );
};

export { SideMenu };
