import style from './style.module.scss';

export const ErrorDisplay = ({ height, width }) => {
  return (
    <div className={style.container} style={{ height: height, width: width }}>
      <p className={style.container__error}>
        Impossible d&apos;afficher le composant pour le moment
      </p>
    </div>
  );
};
