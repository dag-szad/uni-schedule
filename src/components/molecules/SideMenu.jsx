import { Groups } from '#components/Atoms/Groups.jsx';
import { SaveButton } from '#components/Atoms/SaveButton.jsx';
import { Overlay, SideContainer } from '#components/styles/SideMenu.styled.jsx';

const SideMenu = ({
  menuType,
  isOpen,
  onGroupChange,
  selectedGroup,
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
            <h1>SEMESTRY</h1>
            <p>Wybór semestrów: do zrobienia</p>
          </>
        ) : (
          <>
            <Groups
              onGroupChange={onGroupChange}
              selectedGroup={selectedGroup}
            />
            <SaveButton saveHandler={saveHandler} />
          </>
        )}
      </SideContainer>
    </Overlay>
  );
};

export { SideMenu };
