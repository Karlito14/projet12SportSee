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
} from 'recharts';

export const ChartActivity = ({ data }) => {
  const dataUpdated = data.sessions.map((item, index) => {
    return {
      ...item,
      day: index + 1,
    };
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={style.custom}>
          <p className={style.custom__label}>{`${payload[0].value}kg`}</p>
          <p className={style.custom__label}>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer className={style.container} height={250}>
      <BarChart
        width={500}
        height={300}
        data={dataUpdated}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 15,
        }}
        barGap={10}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          yAxisId="kg"
          dataKey={'day'}
          tickMargin={10}
          tickSize="0"
          padding={{ left: -32, right: -33 }}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={['dataMin - 2', 'dataMax + 1']}
          allowDecimals={false}
          tickMargin={30}
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickCount={3}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          hide={true}
          orientation="left"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} animationEasing="ease-out" />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          fill="#282D30"
          activeBar={<Rectangle />}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          fill="#E60000"
          activeBar={<Rectangle />}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
