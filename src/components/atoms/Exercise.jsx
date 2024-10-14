import { useState, useEffect } from 'react';

import {
  Title,
  SubTitle,
  Lecturer,
  Container,
  ContainerLayout,
} from '#components/styles/ExercisesLectures.styled.jsx';

import firstTermExerciseData from '#data/firstTerm/excerciseData.json';
import secondTermExerciseData from '#data/secondTerm/excerciseData.json';
import thirdTermExerciseData from '#data/thirdTerm/excerciseData.json';
import fourthTermExerciseData from '#data/fourthTerm/excerciseData.json';
import fifthTermExerciseData from '#data/fifthTerm/excerciseData.json';
import sixthTermExerciseData from '#data/sixthTerm/excerciseData.json';

const Exercise = ({ date, group, time, active, selectedTerm }) => {
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    const loadExerciseData = () => {
      const termMap = {
        1: firstTermExerciseData,
        2: secondTermExerciseData,
        3: thirdTermExerciseData,
        4: fourthTermExerciseData,
        5: fifthTermExerciseData,
        6: sixthTermExerciseData,
      };

      const data = termMap[selectedTerm];
      if (data) {
        setExerciseData(data);
      }
    };

    loadExerciseData();
  }, [selectedTerm]);

  const specificGroupId = `${group}Group`;

  const exercisesForGroupAndDate = exerciseData.filter((exercise) =>
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
    <Container $active={active === 'exercisesDay'}>
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
        <div></div>
      )}
    </Container>
  );
};

export { Exercise };
