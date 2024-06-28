import style from './style.module.scss';
import { utils, writeFile } from 'xlsx';

export const ExportCSV = ({ data }) => {
  const dataUpdated = data.map((item) => {
    return {
      Jour: item.day,
      'Poids (kg)': item.kilogram,
      'Calories dépensées': item.calories,
      'Durée de la Session (min)': item.sessionLength,
    };
  });
  
  const handleExport = () => {
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(dataUpdated);

    utils.book_append_sheet(workbook, worksheet, 'données');
    writeFile(workbook, 'données.xlsx');
  };

  return (
    <button onClick={handleExport} className={style.button}>
      Exporter
    </button>
  );
};
