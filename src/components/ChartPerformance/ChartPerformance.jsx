import style from './style.module.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const KINDS = {
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
};

export const ChartPerformance = ({ data }) => {
  const dataUpdated = data.data.map((item, index) => {
    return {
      ...item,
      subject: KINDS[index + 1],
    };
  }).reverse();

  return (
    <ResponsiveContainer width="30%" height={230} className={style.container}>
      <RadarChart data={dataUpdated} innerRadius="5%" outerRadius={window.innerWidth < 1200 ? '60%' : '80%'}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'white', fontSize: 14 }}
          tickSize={10}
          dy={5}
        />
        <PolarRadiusAxis
          tick={false}
          axisLine={false}
          tickCount={6}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
