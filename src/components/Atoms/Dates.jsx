import React, { useState } from 'react';

const Dates = ({ onDateChange, selectedDate }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleDateClick = (date) => {
    onDateChange(date);
    console.log('Wybrana data:', date);

    setActiveButton(date);
  };

  return (
    <div>
      <h2>Zjazd</h2>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((date) => (
          <li key={date}>
            <button
              // className={`${css.buttons__button} ${
              //   activeButton === date ? css.active : ''
              // } ${selectedDate === date ? css.activeDate : ''}`}
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
