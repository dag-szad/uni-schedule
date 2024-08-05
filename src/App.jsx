import React, { useState, useEffect } from 'react';

import { Menu } from './components/molecules/Menu.jsx';
import { SideMenu } from './components/molecules/SideMenu.jsx';
import { Buttons } from '#components/molecules/Buttons.jsx';
import { Classes } from '#components/molecules/Classes.jsx';

import { GlobalStyles } from './components/styles/GlobalStyles.jsx';
import { Container } from './components/styles/Container.styled.jsx';

import classesDates from '#data/classesDates.json';

function App() {
  const [selectedDate, setSelectedDate] = useState('1');
  const [selectedGroup, setSelectedGroup] = useState('1');
  const [activeDay, setActiveDay] = useState('sunday');

  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setRightMenuOpen] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const nearestDate = findNearestDate(currentDate);
    setSelectedDate(nearestDate.id);
  }, []);

  const findNearestDate = (currentDate) => {
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const handleActiveDayChange = (active) => {
    setActiveDay(active);
  };

  const saveHandler = () => {
    localStorage.setItem('group', selectedGroup.toString());
  };

  const handleLeftMenuToggle = () => {
    setLeftMenuOpen(!isLeftMenuOpen);
  };

  const handleRightMenuToggle = () => {
    setRightMenuOpen(!isRightMenuOpen);
  };

  return (
    <div>
      <GlobalStyles />
      <Container>
        <Menu
          selectedDate={selectedDate}
          onLeftButtonClick={handleLeftMenuToggle}
          onRightButtonClick={handleRightMenuToggle}
        />
      </Container>
      <SideMenu menuType={'left'} isOpen={isLeftMenuOpen} />
      <SideMenu
        menuType={'right'}
        isOpen={isRightMenuOpen}
        onGroupChange={handleGroupChange}
        selectedGroup={selectedGroup}
        saveHandler={saveHandler}
      />
      <Container>
        <Buttons
          onDateChange={handleDateChange}
          onGroupChange={handleGroupChange}
          onActiveChange={handleActiveDayChange}
          selectedDate={selectedDate}
          selectedGroup={selectedGroup}
          activeDay={activeDay}
        />
      </Container>
      <Container>
        <Classes date={selectedDate} group={selectedGroup} active={activeDay} />
      </Container>
    </div>
  );
}

export default App;
