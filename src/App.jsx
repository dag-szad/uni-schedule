import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from '#components/molecules/Menu.jsx';
import { SideMenu } from '#components/molecules/SideMenu.jsx';
import { Buttons } from '#components/molecules/Buttons.jsx';
import { Classes } from '#components/molecules/Classes.jsx';

import { GlobalStyles } from '#components/styles/GlobalStyles.jsx';
import { Container } from '#components/styles/Container.styled.jsx';

import classesDates from '#data/classesDates.json';

function App() {
  const [selectedDate, setSelectedDate] = useState('1');
  const [selectedGroup, setSelectedGroup] = useState('1');
  const [selectedTerm, setSelectedTerm] = useState('2');
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

  const PageTitle = ({ selectedTerm }) => {
    useEffect(() => {
      document.title = `Plan zajęć | ${selectedTerm} semestr`;
    }, [selectedTerm]);

    return null;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const handleTermChange = (term) => {
    setSelectedTerm(term);
  };

  const handleActiveDayChange = (active) => {
    setActiveDay(active);
  };

  const saveHandler = () => {
    localStorage.setItem('term', selectedTerm.toString());
    localStorage.setItem('group', selectedGroup.toString());
  };

  const handleLeftMenuToggle = () => {
    setLeftMenuOpen(!isLeftMenuOpen);
  };

  const handleRightMenuToggle = () => {
    setRightMenuOpen(!isRightMenuOpen);
  };

  const handleOverlayClick = (menuType) => {
    if (menuType === 'left') {
      setLeftMenuOpen(false);
    } else if (menuType === 'right') {
      setRightMenuOpen(false);
    }
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
      <SideMenu
        menuType="left"
        isOpen={isLeftMenuOpen}
        onTermChange={handleTermChange}
        selectedTerm={selectedTerm}
        saveHandler={saveHandler}
        onOverlayClick={() => handleOverlayClick('left')}
      />
      <SideMenu
        menuType="right"
        isOpen={isRightMenuOpen}
        onGroupChange={handleGroupChange}
        selectedGroup={selectedGroup}
        saveHandler={saveHandler}
        onOverlayClick={() => handleOverlayClick('right')}
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
      <PageTitle selectedTerm={selectedTerm} />
    </div>
  );
}

export default App;
