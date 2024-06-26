import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiUser } from '../../api/api-user.js';
import style from './style.module.scss';
import { NutritionalList } from '../../components/NutritionalList/NutritionalList.jsx';
import { ChartActivity } from '../../components/ChartActivity/ChartActivity.jsx';
import { ChartSessions } from '../../components/ChartSessions/ChartSessions.jsx';
import { ChartPerformance } from '../../components/ChartPerformance/ChartPerformance.jsx';
import { ChartScore } from '../../components/ChartScore/ChartScore.jsx';
import { Spinning } from '../../components/Spinning/Spinning.jsx';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay.jsx';
import { ExportCSV } from '../../components/ExportCSV/ExportCSV.jsx';

export const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  const { id } = useParams();

  const getData = async () => {
    try {
      const user = await ApiUser.getUser(id);
      setUser(user);
    } catch (error) {
      setUser(undefined);
      console.error(error.message);
    }

    try {
      const activity = await ApiUser.getActivity(id);
      setActivity(activity);
    } catch (error) {
      setActivity(undefined);
      console.error(error.message);
    }

    try {
      const sessions = await ApiUser.getSessions(id);
      setSessions(sessions);
    } catch (error) {
      setSessions(undefined);
      console.error(error.message);
    }

    try {
      const performance = await ApiUser.getPerformance(id);
      setPerformance(performance);
    } catch (error) {
      setPerformance(undefined);
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const table = activity?.sessions.map((day, index) => {
    return {
      ...day,
      sessionLength: sessions?.sessions[index].sessionLength,
    };
  });

  const displaySpinningOrError = (state, height, width) => {
    return state === undefined ? (
      <ErrorDisplay height={height} width={width} />
    ) : (
      <Spinning height={height} width={width} />
    );
  };

  return (
    <>
      <div className={style.header}>
        <div>
          <h2 className={style.title}>
            Bonjour{' '}
            <span className={style.title__name}>
              {user && user.userInfos.firstName}
            </span>
          </h2>
          {user && (
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          )}
        </div>
        {table && <ExportCSV data={table} />}
      </div>
      <div className={style.content}>
        <div className={style.content__recharts}>
          <div className={style.container}>
            <h2 className={style.container__title}>Activité quotidienne</h2>
            <ul>
              <li>
                <span className={style.spangrey}></span>Poids (kg)
              </li>
              <li>
                <span className={style.spanred}></span>Calories brûlées (kCal)
              </li>
            </ul>
          </div>

          {activity ? (
            <ChartActivity data={activity} />
          ) : (
            displaySpinningOrError(activity, '280px', '100%')
          )}

          <div className={style.content__recharts__bottom}>
            {sessions ? (
              <ChartSessions data={sessions} />
            ) : sessions === undefined ? (
              <ErrorDisplay height={'230px'} width={'30%'} />
            ) : (
              <Spinning height={'230px'} width={'30%'} />
            )}

            {performance ? (
              <ChartPerformance data={performance} />
            ) : (
              displaySpinningOrError(performance, '230px', '30%')
            )}

            {user ? (
              <ChartScore data={user.todayScore || user.score} />
            ) : (
              displaySpinningOrError(user, '230px', '30%')
            )}
          </div>
        </div>

        {user ? (
          <NutritionalList list={user.keyData} />
        ) : (
          displaySpinningOrError(user, '530px', '30%')
        )}
      </div>
    </>
  );
};
