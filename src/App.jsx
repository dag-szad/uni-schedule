import React, { useState, useEffect } from 'react';

import { Buttons } from '#components/Molecules/Buttons/Buttons.jsx';
import { Classes } from '#components/Molecules/Classes/Classes.jsx';
import { Menu } from './components/Molecules/Menu/Menu.jsx';
import { SaveButton } from './components/Atoms/SaveButton/SaveButton.jsx';

import classesDates from '#data/classesDates.json';
import { SideMenu } from './components/Molecules/SideMenu/SideMenu.jsx';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [activeDay, setActiveDay] = useState('sunday');

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

  return (
    <div>
      <Menu selectedDate={selectedDate} />
      <SideMenu menuType={'left'} />
      <SideMenu
        menuType={'right'}
        onGroupChange={handleGroupChange}
        selectedGroup={selectedGroup}
        saveHandler={saveHandler}
      />
      <Buttons
        onDateChange={handleDateChange}
        onGroupChange={handleGroupChange}
        onActiveChange={handleActiveDayChange}
        selectedDate={selectedDate}
        selectedGroup={selectedGroup}
        activeDay={activeDay}
      />
      <Classes date={selectedDate} group={selectedGroup} active={activeDay} />
    </div>
  );
}

export default App;
