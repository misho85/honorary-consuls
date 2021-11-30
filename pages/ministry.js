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
              הסגל הקונסולרי בישראל פועל עוד מראשית שנות השישים והינו למעשה ארגון יציג לכ- 170
              קונסולי כבוד הפועלים בישראל מתוכם כ-49 קונסולי כבוד ללא שגרירות תושבת המהווים הנציגים
              היחידים של אותה מדינה בישראל. בראש הסגל עומד התעשיין גד פרופר (קונסול כבוד של ניו
              זילנד) וסגנו עו"ד עמיחי עורקבי (קונסול כבוד של קוריאה ושל מונגוליה). קונסולי הכבוד
              ממלאים מקום חשוב ומשלים לדיפלומטיה הישראלית ולוקחים חלק פעיל ומשמעותי בקידום יחסי
              מסחר, כלכלה, תרבות, אקדמיה, אומנות וספורט. במקרים בהם ישנה שגרירות תושבת בישראל ימונה
              קונסול כבוד למחוז או עיר שם ישלים הקונסול את עבודת השגרירות. קונסולי הכבוד משמשים כגשר
              בין המדינות מכח היותם מינויים אישיים "במשרת אמון" של המדינה הממנה וכן אזרחים נאמנים של
              מדינת ישראל. הליך המינוי של קונסול כבוד הנו מוסדר ע"פ אמנת וינה, כאשר המדינה הממנה
              מגישה כתב הסכמה למינוי קונסול כבוד המדינה המארחתמבצעת תהליכי בדיקה ואישור בסיומו
              מעניקה כתב אמנה. קונסולי כבוד הינם אזרחים בשירות דיפלומטי – ומשתתפים בפעילות הסברה של
              ישראל בעיתות שלום ובמשבר חלקם אף הצליחו להשפיע באמצעות קשרים אישיים על אופן הצבעות
              באו”ם. בשנת 2009 נרשם הסגל באופן פורמלי ברשם העמותות, משרד המשפטים כעמותה רשומה ולאחר
              מכן כמלכ"ר. קונסולי הכבוד רובם ככולם מבצעים את תפקידם בהתנדבות מלאה ללא שכר.
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
