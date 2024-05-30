import style from './style.module.scss';
import { GiMeditation } from 'react-icons/gi';
import { BiSwim } from 'react-icons/bi';
import { MdDirectionsBike } from 'react-icons/md';
import { LuDumbbell } from 'react-icons/lu';

export const NavVertical = () => {
  const sizeIcons = 32;
  
  return (
    <aside className={style.aside}>
      <div className={style.aside__content}>
        <button>
          <GiMeditation size={sizeIcons} />
        </button>
        <button>
          <BiSwim size={sizeIcons} />
        </button>
        <button>
          <MdDirectionsBike size={sizeIcons} />
        </button>
        <button>
          <LuDumbbell size={sizeIcons} />
        </button>
      </div>
      <small className={style.aside__copyright}>Copyright, SportSee 2020</small>
    </aside>
  );
};
