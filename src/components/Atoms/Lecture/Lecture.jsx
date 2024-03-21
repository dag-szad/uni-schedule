import css from './Lecture.module.scss';
import secondTermLectures from '#data/secondTermLectures.json';

const Lecture = ({ date, time, active }) => {
  const lessonsForDate = secondTermLectures.filter((lesson) => lesson.dates.includes(date));
  const finalLesson = lessonsForDate.filter((lesson) => lesson.timeBlock.includes(time));

  return (
    <div className={`${active === 'saturday' ? css.activeDay : css.inactiveDay}`}>
      {finalLesson.length > 0 ? (
        finalLesson.map((lesson, index) => (
          <div key={index} className={css.lecture}>
            <h2 className={css.lecture__name}>{lesson.subject}</h2>
            <p className={css.lecture__lecturer}>{lesson.lecturer}</p>
          </div>
        ))
      ) : (
        <div className={css.lecture__blank}> </div>
      )}
    </div>
  );
};

export { Lecture };
