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
  const dataUpdated = data.sessions.map((item, index) => {
    return {
      ...item,
      day: index + 1,
    };
  });

  return (
    <ResponsiveContainer className={style.container} height={300}>
      <BarChart
        width={500}
        height={300}
        data={dataUpdated}
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
        <XAxis dataKey={'day'} tickMargin={10} tickSize="0" />
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
