import React, { useState } from 'react';
import css from './Groups.module.scss';

const Groups = ({ onGroupChange, selectedGroup }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleGroupClick = (group) => {
    onGroupChange(group);
    console.log('Wybrana grupa:', group);

    setActiveButton(group);
  };

  return (
    <div className={css.groups}>
      <h2 className={css.groups__title}>Grupa</h2>
      <ul className={css.buttons}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((group) => (
          <li key={group}>
            <button
              className={`${css.buttons__button} ${activeButton === group ? css.active : ''} ${
                selectedGroup === group ? css.activeGroup : ''
              }`}
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
