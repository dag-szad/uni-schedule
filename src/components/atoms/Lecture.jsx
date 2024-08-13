import React, { useState, useEffect } from 'react';
import {
  Title,
  Lecturer,
  Container,
  ContainerLayout,
} from '../styles/ExercisesLectures.styled.jsx';

import firstTermLectureData from '#data/firstTerm/lectureData.json';
import secondTermLectureData from '#data/secondTerm/lectureData.json';
import thirdTermLectureData from '#data/thirdTerm/lectureData.json';
import fourthTermLectureData from '#data/fourthTerm/lectureData.json';
import fifthTermLectureData from '#data/fifthTerm/lectureData.json';
import sixthTermLectureData from '#data/sixthTerm/lectureData.json';

const Lecture = ({ date, time, active, selectedTerm }) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const loadLectures = () => {
      const termMap = {
        1: firstTermLectureData,
        2: secondTermLectureData,
        3: thirdTermLectureData,
        4: fourthTermLectureData,
        5: fifthTermLectureData,
        6: sixthTermLectureData,
      };

      const data = termMap[selectedTerm];
      if (data) {
        setLectures(data);
      }
    };

    loadLectures();
  }, [selectedTerm]);

  const lessonsForDate = lectures.filter((lesson) =>
    lesson.dates.includes(date)
  );
  const finalLesson = lessonsForDate.filter((lesson) =>
    lesson.timeBlock.includes(time)
  );

  return (
    <Container $active={active === 'saturday'}>
      {finalLesson.length > 0 ? (
        finalLesson.map((lesson, index) => (
          <ContainerLayout key={index}>
            <Title>{lesson.subject}</Title>
            <Lecturer>{lesson.lecturer}</Lecturer>
          </ContainerLayout>
        ))
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export { Lecture };
