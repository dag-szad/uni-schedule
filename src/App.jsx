import { useState, useEffect } from 'react';

import { Menu } from '#components/molecules/Menu.jsx';
import { SideMenu } from '#components/molecules/SideMenu.jsx';
import { Buttons } from '#components/molecules/Buttons.jsx';
import { Classes } from '#components/molecules/Classes.jsx';
import { PageTitle } from '#components/atoms/PageTitle.jsx';

import { GlobalStyles } from '#components/styles/GlobalStyles.jsx';
import { Container } from '#components/styles/Container.styled.jsx';

import firstTermClassesDates from '#data/firstTerm/classesDates.json';
import secondTermClassesDates from '#data/secondTerm/classesDates.json';
import thirdTermClassesDates from '#data/thirdTerm/classesDates.json';
import fourthTermClassesDates from '#data/fourthTerm/classesDates.json';
import fifthTermClassesDates from '#data/fifthTerm/classesDates.json';
import sixthTermClassesDates from '#data/sixthTerm/classesDates.json';

function App() {
  const [selectedDate, setSelectedDate] = useState('1');
  const [selectedGroup, setSelectedGroup] = useState('1');
  const [selectedTerm, setSelectedTerm] = useState(3);
  const [activeDay, setActiveDay] = useState('exercisesDay');
  const [classesDates, setClassesDates] = useState([]);

  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setRightMenuOpen] = useState(false);

  
  useEffect(() => {
    if (classesDates.length > 0) {
      const currentDate = new Date();
      const nearestDate = findNearestDate(currentDate);
      setSelectedDate(nearestDate.id);
    }
  }, [classesDates]);

  useEffect(() => {
    const loadClassesDates = () => {
      const termMap = {
        1: firstTermClassesDates,
        2: secondTermClassesDates,
        3: thirdTermClassesDates,
        4: fourthTermClassesDates,
        5: fifthTermClassesDates,
        6: sixthTermClassesDates,
      };

      const data = termMap[selectedTerm];
      if (data) {
        setClassesDates(data);
      }
    };

    loadClassesDates();
  }, [selectedTerm]);

  const findNearestDate = (currentDate) => {
    if (classesDates.length === 0) {
      return null;
    }

    let nearestDate = classesDates[0];
    let nearestDiff = Math.abs(new Date(nearestDate.date) - currentDate);

    classesDates.forEach((dateObj) => {
      const diff = Math.abs(new Date(dateObj.date) - currentDate);
      if (diff < nearestDiff) {
        nearestDate = dateObj;
        nearestDiff = diff;
      }
    });
    return nearestDate;
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        if (isLeftMenuOpen) {
          setLeftMenuOpen(false);
        } else if (isRightMenuOpen) {
          setRightMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isLeftMenuOpen, isRightMenuOpen]);

  const handlers = {
    dateChange: (date) => setSelectedDate(date),
    groupChange: (group) => setSelectedGroup(group),
    termChange: (term) => setSelectedTerm(term),
    activeDayChange: (active) => setActiveDay(active),
    save: () => {
      localStorage.setItem('term', selectedTerm.toString());
      localStorage.setItem('group', selectedGroup.toString());
    },
    leftMenuToggle: () => setLeftMenuOpen((prev) => !prev),
    rightMenuToggle: () => setRightMenuOpen((prev) => !prev),
    overlayClick: (menuType) => {
      if (menuType === 'left') {
        setLeftMenuOpen(false);
      } else if (menuType === 'right') {
        setRightMenuOpen(false);
      }
    },
  };

  return (
    <div>
      <GlobalStyles />
      <Container>
        <Menu
          selectedDate={selectedDate}
          onLeftButtonClick={handlers.leftMenuToggle}
          onRightButtonClick={handlers.rightMenuToggle}
          classesDates={classesDates}
        />
      </Container>
      <SideMenu
        menuType="left"
        isOpen={isLeftMenuOpen}
        onTermChange={handlers.termChange}
        selectedTerm={selectedTerm}
        saveHandler={handlers.save}
        onOverlayClick={() => handlers.overlayClick('left')}
      />
      <SideMenu
        menuType="right"
        isOpen={isRightMenuOpen}
        onGroupChange={handlers.groupChange}
        selectedGroup={selectedGroup}
        saveHandler={handlers.save}
        onOverlayClick={() => handlers.overlayClick('right')}
      />
      <Container>
        <Buttons
          onDateChange={handlers.dateChange}
          onGroupChange={handlers.groupChange}
          onActiveChange={handlers.activeDayChange}
          selectedDate={selectedDate}
          selectedGroup={selectedGroup}
          activeDay={activeDay}
        />
      </Container>
      <Container>
        <Classes
          date={selectedDate}
          selectedTerm={selectedTerm}
          group={selectedGroup}
          active={activeDay}
        />
      </Container>
      <PageTitle selectedTerm={selectedTerm} />
    </div>
  );
}

export default App;
