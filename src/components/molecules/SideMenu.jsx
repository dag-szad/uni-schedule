import { Groups } from '../atoms/Groups.jsx';
import { SaveButton } from '../atoms/SaveButton.jsx';
import { Overlay, SideContainer } from '../styles/SideMenu.styled.jsx';

const SideMenu = ({ menuType, onGroupChange, selectedGroup, saveHandler }) => {
  return (
    <div>
      {menuType === 'left' ? (
        <div id="overlayLeft">
          <div id="modalLeft">
            <h1>SEMESTRY</h1>
            <p>coś tam coś tam</p>
          </div>
        </div>
      ) : (
        <Overlay id="overlayRight">
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
