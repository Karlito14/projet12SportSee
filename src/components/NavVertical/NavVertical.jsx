import style from './style.module.scss';
import { GiMeditation } from 'react-icons/gi';
import { BiSwim } from 'react-icons/bi';
import { MdDirectionsBike } from 'react-icons/md';
import { LuDumbbell } from 'react-icons/lu';

const SIZE_ICONS = 32;
const ICONS = [
  <GiMeditation key={1} size={SIZE_ICONS} />,
  <BiSwim key={2} size={SIZE_ICONS} />,
  <MdDirectionsBike key={3} size={SIZE_ICONS} />,
  <LuDumbbell key={4} size={SIZE_ICONS} />,
];

export const NavVertical = () => {
  return (
    <aside className={style.aside}>
      <div className={style.aside__content}>
        {ICONS.map((icon) => (
          <button key={icon.key}>{icon}</button>
        ))}
      </div>
      <small className={style.aside__copyright}>Copyright, SportSee 2020</small>
    </aside>
  );
};
