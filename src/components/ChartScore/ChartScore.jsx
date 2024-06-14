import style from './style.module.scss';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const ChartScore = ({ data }) => {
  console.log(data);
  const dataUpdated = [
    {
      name: 'score',
      value: data * 100,
    },
  ];

  return (
    <ResponsiveContainer width="30%" height={230} className={style.container}>
      <PieChart width={200} height={230}>
        <Pie
          data={dataUpdated}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          cornerRadius={10}
        >
          {dataUpdated.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#FF0000" />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
