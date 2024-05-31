import style from './style.module.scss';
import { Link } from 'react-router-dom';
import avatarBoy from '../../assets/avatar_boy.png';

export const Profil = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`} className={style.link}>
      <figure className={style.content}>
        <img src={avatarBoy} alt={user.userInfos.firstName} className={style.content__img} />
        <figcaption className={style.content__title}>{`${user.userInfos.firstName} ${user.userInfos.lastName}`}</figcaption>
      </figure>
    </Link>
  );
};