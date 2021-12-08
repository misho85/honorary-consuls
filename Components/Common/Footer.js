import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styles from '../../styles/common.module.scss';
const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const handleScroll = () => {
    const distance = window.scrollY;
    if (distance > 400) {
      if (!showScrollBtn) {
        setShowScrollBtn(true);
      }
    } else {
      if (showScrollBtn) {
        setShowScrollBtn(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  const scrollToTop = () => {
    if (window !== 'undefined') {
      return window.scrollTo(0, 0);
    }
    return null;
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Copyright &copy; 2021 | All rights reserved to the Consular Corps in Israel | Design by DC
          Hub | Developed by Magna Media
        </p>
        <div className={styles.social} style={{visibility: "hidden"}}>
          <img src="../assets/facebok.png" alt="Facebook" />
          <img src="../assets/instagram.png" alt="Instagram" />
          <img src="../assets/linkedin.png" alt="Linkedin" />
          <img src="../assets/twitter.png" alt="Twitter" />
        </div>
      </div>
      <div
        className={styles.scrollUp}
        onClick={scrollToTop}
        style={showScrollBtn ? { display: 'flex' } : { display: 'none' }}>
        <ExpandLessIcon />
      </div>
    </footer>
  );
};

export default Footer;
