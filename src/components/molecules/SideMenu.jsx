import { Terms } from '#components/atoms/Terms.jsx';
import { Groups } from '#components/atoms/Groups.jsx';
import { SaveButton } from '#components/atoms/SaveButton.jsx';

import { Overlay, SideContainer } from '#components/styles/SideMenu.styled.jsx';

const SideMenu = ({
  menuType,
  isOpen,
  onGroupChange,
  selectedGroup,
  onTermChange,
  selectedTerm,
  saveHandler,
  onOverlayClick,
}) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay isOpen={isOpen} onClick={onOverlayClick}>
      <SideContainer onClick={handleContainerClick} $type={menuType}>
        {menuType === 'left' ? (
          <>
            <Terms onTermChange={onTermChange} selectedTerm={selectedTerm} />
            <SaveButton saveHandler={saveHandler} type={menuType} />
          </>
        ) : (
          <>
            <Groups
              onGroupChange={onGroupChange}
              selectedGroup={selectedGroup}
            />
            <SaveButton saveHandler={saveHandler} type={menuType} />
          </>
        )}
      </SideContainer>
    </Overlay>
  );
};

export { SideMenu };
