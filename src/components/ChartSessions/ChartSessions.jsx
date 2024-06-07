import style from './style.module.scss';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export const ChartSessions = ({ data }) => {
  const dataUpdated = data.sessions.map((item, index) => {
    return {
      day: DAYS[index],
      sessionLength: item.sessionLength,
    };
  });

  const renderLegend = () => {
    return (
      <h3 className={style.title}>Durée moyenne des sessions</h3>
    )
  }

  return (
    <ResponsiveContainer width="30%" height={230} className={style.container}>
      <LineChart width={400} height={100} data={dataUpdated}>
        <XAxis
          dataKey={'day'}
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
        />
        <Tooltip cursor={false} />
        <Legend content={renderLegend} align='left' verticalAlign='top' />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false} 
          activeDot={{ stroke: 'white', strokeWidth: 5}}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
