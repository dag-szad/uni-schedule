import React from 'react';
import classesDates from '#data/classesDates.json';

const CurrentDate = ({ selectedDate }) => {
  const dateObject = classesDates.find(
    (dateObj) => dateObj.id === selectedDate
  );

  if (!dateObject) {
    return <div>Date not found</div>;
  }

  return (
    <div>
      <h1>{`${dateObject.id} zjazd`}</h1>
      <h2>{dateObject.title}</h2>
    </div>
  );
};

export { CurrentDate };
