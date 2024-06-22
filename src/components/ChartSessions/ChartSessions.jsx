import style from './style.module.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
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

  const CustomCursor = (props) => {
    const { points, width } = props;
    const { x } = points[0];
    return (
      <Rectangle
        fill="#000000"
        stroke="#000000"
        opacity={0.1}
        x={x}
        y={0}
        width={width}
        height={230}
      />
    );
  };

  const dataUpdated = data.sessions.map((item, index) => {
    return {
      day: DAYS[index],
      sessionLength: item.sessionLength,
    };
  });

  const renderLegend = () => {
    return (
      <h3 className={style.title}>
        Durée moyenne des
        <br />
        sessions
      </h3>
    );
  };

  return (
    <ResponsiveContainer width="30%" height={230} className={style.container}>
      <LineChart
        data={dataUpdated}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 10,
        }}
      >
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
        <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
        <Legend content={renderLegend} align="left" verticalAlign="top" />
        <Line
          type="bump"
          dataKey="sessionLength"
          stroke="url(#colorGradiant)"
          strokeWidth={3}
          dot={false}
          activeDot={{
            stroke: 'white',
            strokeWidth: 10,
            strokeOpacity: 0.4,
            fill: 'white',
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
