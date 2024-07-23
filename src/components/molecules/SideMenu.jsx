import { Groups } from '../atoms/Groups.jsx';
import { SaveButton } from '../atoms/SaveButton.jsx';

const SideMenu = ({ menuType, onGroupChange, selectedGroup, saveHandler }) => {
  return (
    <div>
      {menuType === 'left' ? (
        <div id="overlayLeft" className="hidden">
          <div id="modalLeft" className="hidden">
            <h1>SEMESTRY</h1>
            <p>coś tam coś tam</p>
          </div>
        </div>
      ) : (
        <div id="overlayRight" className="hidden">
          <div id="modalRight" className="hidden">
            <Groups
              onGroupChange={onGroupChange}
              selectedGroup={selectedGroup}
            />
            <SaveButton saveHandler={saveHandler} />
          </div>
        </div>
      )}
    </div>
  );
};

export { SideMenu };
