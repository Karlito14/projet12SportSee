import style from './style.module.scss';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export const ChartActivity = ({ data }) => {
  console.log(data.sessions)
  return (
    <ResponsiveContainer className={style.container} height={300}>
      {/* <div className={style.text}>
        <h2 className={style.container__title}>Activité quotidienne</h2>
        <ul className={style.container__list}>
          <li className={style.container__list__item}>
            <span className={style.circle_grey}></span>Poids (kg)
          </li>
          <li className={style.container__list__item}>
            <span className={style.circle_red}></span>Calories brûlées (kCal)
          </li>
        </ul>
      </div> */}

      <BarChart
        className={style.container__wrapper}
        width={500}
        height={300}
        data={data.sessions}
        margin={{
          top: 15,
          right: 15,
          left: 15,
          bottom: 15,
        }}
        barGap={-30}
        maxBarSize={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis ticks={[1, 2, 3, 4, 5, 6, 7]} tickMargin={10} tickSize="0" />
        <YAxis
          dataKey="kilogram"
          tickMargin={30}
          domain={['dataMin - 3', 'dataMax + 1']}
          orientation="right"
          tickSize="0"
        />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          activeBar={<Rectangle />}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          activeBar={<Rectangle />}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
