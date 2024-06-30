import styled from './Statistics.module.css'
export const StatisticsItem = ({ stat, icon }) => {
  return (
    <li className={styled.item}>
      {icon}
      <span className={styled.counter}>{stat.total}</span>
      <p className={styled.text}>{stat.title}</p>
    </li>
  );
};
