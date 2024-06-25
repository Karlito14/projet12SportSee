import style from './style.module.scss';
import { Link } from 'react-router-dom';
import avatarBoy from '../../assets/avatar_boy.png';
import avatarGirl from '../../assets/avatar_girl.png';
import { useEffect, useState } from 'react';
import { ApiUser } from '../../api/api-user';

export const Profil = ({ user }) => {
  const [gender, setGender] = useState();

  useEffect(() => {
    const getGender = async () => {
      const gender = await ApiUser.getGender(user.userInfos.firstName);
      setGender(gender.gender)
    };
    getGender();
  }, []);

  return (
    <Link to={`/user/${user.id}`} className={style.link}>
      <figure className={style.content}>
        {gender && (
          <img
            src={gender === 'male' ? avatarBoy : avatarGirl}
            alt={user.userInfos.firstName}
            className={style.content__img}
          />
        )}
        <figcaption
          className={style.content__title}
        >{`${user.userInfos.firstName} ${user.userInfos.lastName}`}</figcaption>
      </figure>
    </Link>
  );
};
