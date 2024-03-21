import css from './Exercise.module.scss';
import secondTermExercises from '#data/secondTermExcercises.json';

const Exercise = ({ date, group, time, active }) => {
  const specificGroupId = `${group}Group`;

  const exercisesForGroupAndDate = secondTermExercises.filter((exercise) =>
    exercise.groups.some(
      (group) => group.id === specificGroupId && group.timeblocks.some((timeblock) => timeblock.dates.includes(date))
    )
  );

  const exercisesForTime = exercisesForGroupAndDate.filter((exercise) =>
    exercise.groups.some(
      (group) =>
        group.id === specificGroupId &&
        group.timeblocks.some((timeblock) => timeblock.time === time && timeblock.dates.includes(date))
    )
  );

  return (
    <div className={`${active === 'sunday' ? css.activeDay : css.inactiveDay}`}>
      {exercisesForTime.length > 0 ? (
        exercisesForTime.map((exercise, index) => (
          <div key={index} className={css.exercise}>
            <h2 className={css.exercise__name}>{exercise.subject}</h2>
            {exercise.groups.map(
              (group) =>
                group.id === specificGroupId &&
                group.timeblocks.map(
                  (block) =>
                    block.time === time &&
                    block.dates.includes(date) && (
                      <div key={`${group.id}-${index}`} className={css.exercise__info}>
                        <p className={css.exercise__lecturer}>{group.lecturer}</p>
                        <p className={css.exercise__room}>{block.room}</p>
                      </div>
                    )
                )
            )}
          </div>
        ))
      ) : (
        <div className={css.exercise__blank}> </div>
      )}
    </div>
  );
};

export { Exercise };
