import React from 'react';
import styles from 'styles/home.module.scss';
const Loader = ({ isOpen }) => {
  return (
    <div style={isOpen ? { display: 'flex' } : { display: 'none' }} className={styles.loaderDiv}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
