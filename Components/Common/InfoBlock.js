import React from 'react';
import styles from '../../styles/home.module.scss';
const InfoBlock = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick ? onClick : null}>
      {children}
    </div>
  );
};

export default InfoBlock;
