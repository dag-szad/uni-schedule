import secondTermExercises from '#data/secondTermExcercises.json';
import {
  Title,
  SubTitle,
  Lecturer,
  Container,
  ContainerLayout
} from '../styles/ExercisesLectures.styled.jsx';
import styled from 'styled-components';

const Exercise = ({ date, group, time, active }) => {
  const specificGroupId = `${group}Group`;

  const exercisesForGroupAndDate = secondTermExercises.filter((exercise) =>
    exercise.groups.some(
      (group) =>
        group.id === specificGroupId &&
        group.timeblocks.some((timeblock) => timeblock.dates.includes(date))
    )
  );

  const exercisesForTime = exercisesForGroupAndDate.filter((exercise) =>
    exercise.groups.some(
      (group) =>
        group.id === specificGroupId &&
        group.timeblocks.some(
          (timeblock) =>
            timeblock.time === time && timeblock.dates.includes(date)
        )
    )
  );

  return (
    // <div className={`${active === 'sunday' ? css.activeDay : css.inactiveDay}`}>
    <div>
      {exercisesForTime.length > 0 ? (
        exercisesForTime.map((exercise, index) => (
          <div key={index}>
            <Title>{exercise.subject}</Title>
            {exercise.groups.map(
              (group) =>
                group.id === specificGroupId &&
                group.timeblocks.map(
                  (block) =>
                    block.time === time &&
                    block.dates.includes(date) && (
                      <ContainerLayout key={`${group.id}-${index}`}>
                        <Lecturer>{group.lecturer}</Lecturer>
                        <SubTitle>{block.room}</SubTitle>
                      </ContainerLayout>
                    )
                )
            )}
          </div>
        ))
      ) : (
        <div> </div>
      )}
    </div>
    // </div>
  );
};

export { Exercise };
