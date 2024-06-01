import { NutritionalItem } from '../NutritionalItem/NutritionalItem';
import style from './style.module.scss';

export const NutritionalList = ({ list }) => {
    const objectKeys = Object.keys(list);

    return(
        <div className={style.container}>
            <ul className={style.container__list}>
                {objectKeys.map((item, index) => <li className={style.container__list__item} key={`nutrition-${index}`}><NutritionalItem objKey={item} value={list[item]} /></li>)}
            </ul>
        </div>
    )
};
