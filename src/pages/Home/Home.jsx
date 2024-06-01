import { useEffect, useState } from 'react';
import style from './style.module.scss';
import { USER_MAIN_DATA } from '../../__mock__/data';
import { Profil } from '../../components/Profil/Profil.jsx';

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(USER_MAIN_DATA);
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.container__title}>Sélectionnez votre sportif</h2>
      <ul className={style.container__list}>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <Profil user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};
