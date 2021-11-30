import React from 'react';
import styles from '../../styles/home.module.scss';
const InfoBlock = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default InfoBlock;
