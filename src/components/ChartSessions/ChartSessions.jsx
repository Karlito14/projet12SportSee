import style from './style.module.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceArea,
} from 'recharts';

const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export const ChartSessions = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={style.lineChart}>
          <p className={style.lineChart__label}>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const dataUpdated = data.sessions.map((item, index) => {
    return {
      day: DAYS[index],
      sessionLength: item.sessionLength,
    };
  });

  const renderLegend = () => {
    return <h3 className={style.title}>Durée moyenne des sessions</h3>;
  };

  return (
    <ResponsiveContainer width="30%" height={230} className={style.container}>
      <LineChart width={400} height={100} data={dataUpdated}>
        <defs>
          <linearGradient id="colorGradiant" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff80" />
            <stop offset="50%" stopColor="#ffffffbf" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={'day'}
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} position={{ y: 10 }} />
        <Legend content={renderLegend} align="left" verticalAlign="top" />
        <Line
          type="bump"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={3}
          dot={false}
          activeDot={{ stroke: 'white', strokeWidth: 5 }}
        />
        <ReferenceArea
          x1={150}
          x2={180}
          y1={200}
          y2={300}
          stroke="red"
          strokeOpacity={0.3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
