import style from './style.module.scss';
import { CSVLink } from 'react-csv';

export const ExportCSV = ({ data }) => {
  console.log(data);
  const headers = [
    { label: 'Jour', key: 'day' },
    { label: 'Calories dépensées', key: 'calories' },
    { label: 'Poids (kg)', key: 'kilogram' },
    { label: 'Session (min)', key: 'sessionLength' },
  ];

  return (
    <CSVLink data={data} headers={headers} filename='données' target='_blank' className={style.button}>
      Exporter
    </CSVLink>
  );
};
