import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiUser } from '../../api/api-user.js';
import style from './style.module.scss';
import { NutritionalList } from '../../components/NutritionalList/NutritionalList.jsx';
import { ChartActivity } from '../../components/ChartActivity/ChartActivity.jsx';

export const Dashboard = () => {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const { id } = useParams();

  const getUser = async () => {
    try {
      const user = await ApiUser.fetchUser(id);
      setUser(user);
      const activity = await ApiUser.getActivity(id);
      setActivity(activity)
    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className={style.content}>
        <div className={style.content__recharts}>
          {activity && <ChartActivity data={activity} />}
        </div>
        {user && <NutritionalList list={user.keyData} />}
      </div>
    </>
  );
};
