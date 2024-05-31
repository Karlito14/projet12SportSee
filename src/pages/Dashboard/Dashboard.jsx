import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiUser } from '../../api/api-user.js';
import style from './style.module.scss';
import { USER_MAIN_DATA } from '../../__mock__/data.js';

export const Dashboard = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  console.log(user);

  const getUser = async () => {
    try {
      const user = (await ApiUser.fetchUser(id)) || USER_MAIN_DATA[0];
      setUser(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h2 className={style.title}>
        Bonjour{' '}
        <span className={style.title__name}>
          {user && user.userInfos.firstName}
        </span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
};
