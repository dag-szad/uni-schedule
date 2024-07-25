import secondTermLectures from '#data/secondTermLectures.json';
import {
  Title,
  Lecturer,
  Container,
  ContainerLayout,
} from '../styles/ExercisesLectures.styled.jsx';

const Lecture = ({ date, time, active }) => {
  const lessonsForDate = secondTermLectures.filter((lesson) =>
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
