import style from './style.module.scss';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const ChartSessions = ({ data }) => {
  console.log(data.sessions);
  return (
    <div className={style.container}>
      <ResponsiveContainer width="100%" height="200px">
        <LineChart width={300} height={100} data={data.sessions}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
