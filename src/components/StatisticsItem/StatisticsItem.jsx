import styled from './Statistics.module.css'
import { IconContext } from "react-icons";


export const StatisticsItem = ({ stat, icon }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{color: 'tomato', size: 28}}> {icon} </IconContext.Provider>
      <span className={styled.counter}>{stat.total}</span>
      <p className={styled.text}>{stat.title}</p>
    </li>
  );
};
