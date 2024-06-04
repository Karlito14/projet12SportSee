import style from './style.module.scss';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const ChartActivity = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer className={style.container} height={300} margin= {{top: 20, right: 20, left: 20, bottom:20}}>
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
        barGap={-30}
      >
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="kilogram" tickMargin={30} domain={[0, 'auto']}/>
        <Tooltip />
        <Legend verticalAlign="top" height={36} align='right' iconType='circle' />
        <Bar dataKey="kilogram" fill="#282D30" activeBar={<Rectangle />} radius={[20, 20, 0, 0]} maxBarSize={10} />
        <Bar dataKey="calories" fill="#E60000" activeBar={<Rectangle />} radius={[20, 20, 0, 0]} maxBarSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};
