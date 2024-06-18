import style from './style.module.scss';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export const ChartScore = ({ data }) => {
  const dataUpdated = [
    {
      name: 'score',
      value: data * 100,
    },
  ];

  const RenderCustomizedLegend = () => {
    return (
      <div className={style.legendWrapper}>
        <p className={style.legendWrapper__score}>
          {data ? dataUpdated[0].value : 0}%
        </p>
        <p className={style.legendWrapper__description}>
          de votre <br />
          objectif
        </p>
      </div>
    );
  };

  return (
    <ResponsiveContainer className={style.container} width="30%" height={230}>
      <RadialBarChart
        width={700}
        height={230}
        data={dataUpdated}
        innerRadius="65%"
        outerRadius="75%"
        startAngle={90}
        endAngle={90 + data * 360}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 10]}
          angleAxisId={0}
          tick={false}
        />
        <text x={20} y={30} className={style.container__title}>
          Score
        </text>
        <Legend
          content={RenderCustomizedLegend}
          align="center"
          verticalAlign="middle"
        />
        <RadialBar dataKey="value" cornerRadius={20} fill="#FF0000" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
