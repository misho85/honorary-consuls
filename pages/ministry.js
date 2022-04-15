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
            {locale === 'he' ? (
              <>
                <p dir="rtl">
                  משרד החוץ בישראל, כבמדינות אחרות בעולם, עוסק בגיבוש מדיניות החוץ של הממשלה,
                  בביצועה ובהסברתה - המשרד מטפל בניהול יחסיה הבינלאומיים של המדינה. המשרד מייצג את
                  המדינה בפני ממשלות זרות וארגונים בינלאומיים; שוקד על קידום קשרי הכלכלה, התרבות
                  והמדע, ומקדם את שיתוף הפעולה עם ארצות מתפתחות.
                  <br />
                  <br />
                  משרד החוץ לרבות באמצעות חטיבת הטקס אמון על הקשר בין השגרירויות הזרות הפועלות
                  בישראל וכן על קונסולי כבוד הפועלים בישראל. חטיבת הטקס מארגנת סמינרים תקופתיים לסגל
                  של קונסולי כבוד.
                  <br /> <br />
                  לעוד מידע על פעילות משרד החוץ נא ללחוץ על הקישור.
                  <br /> <br />
                </p>
                <a href="https://www.gov.il/he/departments/ministry_of_foreign_affairs/govil-landing-page">
                  https://www.gov.il/he/departments/ministry_of_foreign_affairs/govil-landing-page
                </a>
              </>
            ) : (
              <>
                <p>
                  The Ministry of Foreign Affairs of the State of Israel, as in other countries in
                  the world, is entrusted with formulation of the government's foreign policy, its
                  implementation and communication. The ministry is in charge of the management of
                  the country's international relations. The Ministry represents the country before
                  foreign governments and international organizations, striving to facilitate
                  economic, cultural and scientific relations, and promoting cooperation with
                  developing countries.
                  <br />
                  <br />
                  The Ministry of Foreign Affairs, including through its Protocol Department, is
                  entrusted with the connection between the foreign embassies and the honorary
                  consuls operating in Israel. The Protocol Department organizes periodic seminars
                  for the Honorary Consuls Corps.
                  <br /> <br />
                  For more information on the Foreign Ministry's activities, please follow the link:
                  <br /> <br />
                </p>
                <a href="https://www.gov.il/en/departments/ministry_of_foreign_affairs/govil-landing-page">
                  https://www.gov.il/en/departments/ministry_of_foreign_affairs/govil-landing-page
                </a>
              </>
            )}
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
