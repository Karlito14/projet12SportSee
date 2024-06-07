import style from './style.module.scss';
import { VscFlame } from 'react-icons/vsc';
import { GiChickenLeg } from 'react-icons/gi';
import { FaAppleAlt } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const NutritionalItem = ({ objKey, value }) => {
  const [icon, setIcon] = useState();
  const [unity, setUnity] = useState('g');
  const [small, setSmall] = useState();
  const [colors, setColors] = useState();

  useEffect(() => {
    if (objKey === 'calorieCount') {
      setUnity('kCal');
      setIcon(<VscFlame />);
      setSmall('Calories');
      setColors({
        color: '#ff0101',
        backgroundColor: 'rgba(255, 1, 1, 0.06)',
      });
    }

    if (objKey === 'proteinCount') {
      setIcon(<GiChickenLeg />);
      setSmall('Protéines');
      setColors({
        color: '#4ab8ff',
        backgroundColor: 'rgba(74, 184, 255, 0.06)',
      });
    }

    if (objKey === 'carbohydrateCount') {
      setIcon(<FaAppleAlt />);
      setSmall('Glucides');
      setColors({
        color: '#fdcc0c',
        backgroundColor: 'rgba(253, 204, 12, 0.06)',
      });
    }

    if (objKey === 'lipidCount') {
      setIcon(<FaHamburger />);
      setSmall('Lipides');
      setColors({
        color: '#fd5181',
        backgroundColor: 'rgba(253, 81, 129, 0.06)',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.container}>
      <div className={style.container__icon} style={colors}>
        {icon}
      </div>
      <div className={style.container__values}>
        <p>
          {value}
          {unity}
        </p>
        <small>{small}</small>
      </div>
    </div>
  );
};
