import React, { useState, useEffect } from 'react';

const Groups = ({ onGroupChange, selectedGroup }) => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const storedGroup = localStorage.getItem('group');
    if (storedGroup) {
      setActiveButton(Number(storedGroup));
    } else {
      setActiveButton(1);
    }
  }, []);

  const handleGroupClick = (group) => {
    onGroupChange(group);
    console.log('Wybrana grupa:', group);

    setActiveButton(group);
  };

  return (
    <div>
      <h2>Grupa</h2>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((group) => (
          <li key={group}>
            <button
              // className={`${css.buttons__button} ${
              //   activeButton === group ? css.active : ''
              // } ${selectedGroup === group ? css.activeGroup : ''}`}
              onClick={() => handleGroupClick(group)}
            >
              {group}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Groups };
