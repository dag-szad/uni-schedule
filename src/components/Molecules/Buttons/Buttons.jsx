import { Dates } from '#components/Atoms/Dates/Dates.jsx';
import { Groups } from '#components/Atoms/Groups/Groups.jsx';

import css from './Buttons.module.scss';

const Buttons = ({ onDateChange, onGroupChange, onActiveChange, selectedDate, selectedGroup, activeDay }) => {
  return (
    <div className={css.buttons}>
      <div className={css.days}>
        <button
          type='button'
          className={`${css.days__button} ${activeDay === 'saturday' ? css.activeDay : ''}`}
          onClick={() => onActiveChange('saturday')}
        >
          Sobota
        </button>
        <button
          type='button'
          className={`${css.days__button} ${activeDay === 'sunday' ? css.activeDay : ''}`}
          onClick={() => onActiveChange('sunday')}
        >
          Niedziela
        </button>
      </div>
      <div className={css.selection}>
        <Dates onDateChange={onDateChange} selectedDate={selectedDate} />
        <Groups onGroupChange={onGroupChange} selectedGroup={selectedGroup} />
      </div>
    </div>
  );
};

export { Buttons };
