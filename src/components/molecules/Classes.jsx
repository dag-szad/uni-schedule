import { Lecture } from '#components/atoms/Lecture.jsx';
import { Exercise } from '#components/atoms/Exercise.jsx';

import styled from 'styled-components';

const Classes = ({ date, group, active }) => {
  const classesTime = [
    '8:00 - 9:30',
    '9:45 - 11:15',
    '11:30 - 13:00',
    '13:30 - 15:00',
    '15:15 - 16:45',
    '17:00 - 18:30',
    '18:45 - 20:15',
  ];
  const classesTimeBlock = [1, 2, 3, 4, 5, 6, 7];

  return (
    <LocalList>
      {classesTimeBlock.map((time) => (
        <li key={time}>
          <LocalTime>{classesTime[time - 1]}</LocalTime>
          <div>
            <Lecture date={date} time={time} active={active} />
            <Exercise date={date} group={group} time={time} active={active} />
          </div>
        </li>
      ))}
    </LocalList>
  );
};

const LocalList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const LocalTime = styled.p`
  font-size: 0.875rem;
  color: #ffffff4d;
  margin: 0 auto 10px;
`;

export { Classes };
