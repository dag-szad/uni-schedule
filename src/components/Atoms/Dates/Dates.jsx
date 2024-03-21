import React, { useState } from 'react';
import css from './Dates.module.scss';

const Dates = ({ onDateChange, selectedDate }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleDateClick = (date) => {
    onDateChange(date);
    console.log('Wybrana data:', date);

    setActiveButton(date);
  };

  return (
    <div className={css.dates}>
      <h2 className={css.dates__title}>Zjazd</h2>
      <ul className={css.buttons}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((date) => (
          <li key={date}>
            <button
              className={`${css.buttons__button} ${activeButton === date ? css.active : ''} ${
                selectedDate === date ? css.activeDate : ''
              }`}
              onClick={() => handleDateClick(date)}
            >
              {date}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Dates };
