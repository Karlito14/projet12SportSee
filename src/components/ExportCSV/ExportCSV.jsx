import style from './style.module.scss';
// import { CSVLink } from 'react-csv';
import { utils, writeFile} from 'xlsx';

// export const ExportCSV = ({ data }) => {
//   console.log(data);
//   const headers = [
//     { label: 'Jour', key: 'day' },
//     { label: 'Calories dépensées', key: 'calories' },
//     { label: 'Poids (kg)', key: 'kilogram' },
//     { label: 'Session (min)', key: 'sessionLength' },
//   ];

//   return (
//     <CSVLink data={data} headers={headers} filename='données' target='_blank' className={style.button}>
//       Exporter
//     </CSVLink>
//   );
// };

export const ExportCSV = ({ data }) => {
  const handleExport = () => {
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(data)

    utils.book_append_sheet(workbook, worksheet, 'données')
    writeFile(workbook, 'données.xlsx')
  };

  return (
    <button onClick={handleExport} className={style.button}>
      Exporter
    </button>
  );
};
