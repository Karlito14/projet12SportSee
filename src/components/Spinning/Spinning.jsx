import style from './style.module.scss';

export const Spinning = ({ height, width }) => {
  return (
    <div className={style.container} style={{ height: height, width: width }}>
        <div className={style.container__spinning}></div>
    </div>
  )
};
