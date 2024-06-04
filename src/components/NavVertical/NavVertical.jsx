import style from './style.module.scss';
import { GiMeditation } from 'react-icons/gi';
import { BiSwim } from 'react-icons/bi';
import { MdDirectionsBike } from 'react-icons/md';
import { LuDumbbell } from 'react-icons/lu';

export const NavVertical = () => {
  const sizeIcons = 32;
  const ICONS = [<GiMeditation key={1} size={sizeIcons} />, <BiSwim key={2} size={sizeIcons} />, <MdDirectionsBike key={3} size={sizeIcons} />, <LuDumbbell key={4} size={sizeIcons} /> ]

  return (
    <aside className={style.aside}>
      <div className={style.aside__content}>
        {ICONS.map((icon,index) => <button key={index}>{icon}</button>)}
      </div>
      <small className={style.aside__copyright}>Copyright, SportSee 2020</small>
    </aside>
  );
};
