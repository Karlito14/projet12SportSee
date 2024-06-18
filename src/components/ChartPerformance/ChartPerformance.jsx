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
  });

  return (
    <ResponsiveContainer width="30%" height={230} className={style.container}>
      <RadarChart data={dataUpdated}>
        <PolarGrid
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 10, 27, 49, 72, 95]}
        />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'white', fontSize: 14 }}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
