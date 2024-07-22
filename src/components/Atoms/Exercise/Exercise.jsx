import secondTermExercises from '#data/secondTermExcercises.json';

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
            <h2>{exercise.subject}</h2>
            {exercise.groups.map(
              (group) =>
                group.id === specificGroupId &&
                group.timeblocks.map(
                  (block) =>
                    block.time === time &&
                    block.dates.includes(date) && (
                      <div key={`${group.id}-${index}`}>
                        <p>{group.lecturer}</p>
                        <p>{block.room}</p>
                      </div>
                    )
                )
            )}
          </div>
        ))
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export { Exercise };
