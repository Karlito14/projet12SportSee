import style from './style.module.scss';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export const ChartActivity = ({ data }) => {
  console.log(data);
  return (
    <div className={style.container}>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Activité quotidienne</h2>
        <ul>
            <li><span className={style.span_grey}></span>Poids (kg)</li>
            <li><span className={style.span_red}></span>Calories brûlées (kCal)</li>
        </ul>
      </div>
      <BarChart
        className={style.container__wrapper}
        width={500}
        height={300}
        data={data.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="day" />
        <YAxis dataKey="calories" />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#282D30" activeBar={<Rectangle />} />
        <Bar dataKey="calories" fill="#E60000" activeBar={<Rectangle />} />
      </BarChart>
    </div>
  );
};
