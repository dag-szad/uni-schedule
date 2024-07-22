import secondTermLectures from '#data/secondTermLectures.json';

const Lecture = ({ date, time, active }) => {
  const lessonsForDate = secondTermLectures.filter((lesson) =>
    lesson.dates.includes(date)
  );
  const finalLesson = lessonsForDate.filter((lesson) =>
    lesson.timeBlock.includes(time)
  );

  return (
    <div
    // className={`${active === 'saturday' ? css.activeDay : css.inactiveDay}`}
    >
      {finalLesson.length > 0 ? (
        finalLesson.map((lesson, index) => (
          <div key={index}>
            <h2>{lesson.subject}</h2>
            <p>{lesson.lecturer}</p>
          </div>
        ))
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export { Lecture };
