import React from 'react';

import useTranslation from 'next-translate/useTranslation';
import InfoBlock from '../Components/Common/InfoBlock';
import Footer from '../Components/Common/Footer';

import styles from '../styles/home.module.scss';
const Ministry = ({ locale }) => {
  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.infoContent}>
          <h3 className={returnClassName(styles.pageTitle)}>{t('common:foreign_ministry')}</h3>
          <InfoBlock className={returnClassName(styles.infoBlock)}>
            <p>
              משרד החוץ בישראל, כבמדינות אחרות בעולם, עוסק בגיבוש מדיניות החוץ של הממשלה, בביצועה
              ובהסברתה - המשרד מטפל בניהול יחסיה הבינלאומיים של המדינה. המשרד מייצג את המדינה בפני
              ממשלות זרות וארגונים בינלאומיים; שוקד על קידום קשרי הכלכלה, התרבות והמדע, ומקדם את
              שיתוף הפעולה עם ארצות מתפתחות. משרד החוץ לרבות באמצעות חטיבת הטקס אמון על הקשר בין
              השגרירויות הזרות הפועלות בישראל וכן על קונסולי כבוד הפועלים בישראל. חטיבת הטקס מארגנת
              סמינרים תקופתיים לסגל של קונסולי כבוד. לעוד מידע על פעילות משרד החוץ נא ללחוץ על
              הקישור _____
            </p>
          </InfoBlock>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  };
};

export default Ministry;
