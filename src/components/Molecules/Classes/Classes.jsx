import { Lecture } from '#components/Atoms/Lecture/Lecture.jsx';
import { Exercise } from '#components/Atoms/Exercise/Exercise.jsx';

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
    <ul>
      {classesTimeBlock.map((time) => (
        <li key={time}>
          <p>{classesTime[time - 1]}</p>
          <div>
            <Lecture date={date} time={time} active={active} />
            <Exercise date={date} group={group} time={time} active={active} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export { Classes };
