import { Link } from 'react-router-dom';
import style from './style.module.scss';

export const Error = () => {
    return(
        <div className={style.container}>
            <p className={style.container__title}>404</p>
            <p className={style.container__subtitle}>La page que vous demandez n&apos;existe pas</p>
            <Link to={'/'} className={style.container__link}>Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}
