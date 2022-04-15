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
          <h3 className={returnClassName(styles.pageTitle)}>{t('common:ficac_title')}</h3>
          <InfoBlock className={returnClassName(styles.infoBlock)}>
            {locale === 'he' ? (
              <>
                <p dir="rtl">
                  FICAC, הנקראת גם הפדרציה העולמית של הקונסולים, נוסדה בקופנהגן ב-2 באוקטובר 1982 על
                  ידי קבוצה קטנה של אנשי חזון בראשות הקונסול הכללי Vagn Jespersen מדנמרק. המדינות
                  שנכחו בפגישה והחותמות הראשונות היו פינלנד, יוון, איסלנד, איטליה, נורבגיה, שבדיה
                  ודנמרק. גוף זה נתן לקונסולים של העולם פורום נחוץ לחלוק חוויות ולתאם מאמצים כדי
                  לשפר את מעמדם ויעילותם ולהפגיש אגודות קונסולריות מכל רחבי העולם.
                  <br />
                  <br />
                  הפדרציה העולמית של הקונסולים קיבלה את ההכרה של האו"ם כארגון לא ממשלתי עם סטטוס
                  ECOSOC. הוא מוכר כארגון לא ממשלתי גם על ידי ארגון מדינות אמריקה ועל ידי האיחוד
                  האירופי. ב-17 בספטמבר 2010, הפדרציה העולמית של הקונסולים חתמה על הסכם שותפות עם
                  קרן הנסיך אלברט השני של מונקו, קרן שנוצרה על ידי הוד מעלתו השלווה הנסיך אלברט השני
                  לעבודה בתחומי הסביבה ושינויי האקלים.
                  <br /> <br />
                  FICAC משמשת כארגון גג למעלה מ-87 ארגוני קונסולי כבוד בעולם. היא עורכת כנסים
                  תקופתיים כדי לחזק את הקשר בין הקונסולים ולתעל את הניסיון שלהם בתחומים מקצועיים.
                  לאחר הפגישה הראשונה של האבות המייסדים בקופנהגן ב-1982, הפדרציה קיימה שתי פגישות
                  נוספות בקופנהגן ב-26 באוקטובר 1984 וב-9-10 באוקטובר 1986 כדי לערוך חוקה פועלת,
                  הנקראת חוקי קופנהגן.
                  <br /> <br />
                  בראש FICAC עומד: Hon. Aykut Eken (Turkey), Honorary Consul General of Jamaica
                  וסגנו Hon. Kostas N. Lefkaritis (Cyprus), Honorary Consul of the Republic of
                  Zambia
                  <br /> <br />
                  לאתר FICAC לחץ כאן: כמלכ"ר.
                  <br /> <br />
                  קונסולי הכבוד רובם ככולם מבצעים את תפקידם בהתנדבות מלאה ללא שכר.
                </p>
                <a href="https://www.ficacworld.org/">https://www.ficacworld.org/</a>
              </>
            ) : (
              <>
                <p>
                  FICAC, also known as the World Consular Federation, was founded in Copenhagen on
                  October 2, 1982 by a small group of visionaries led by the Consul General Vagn
                  Jespersen of Denmark. The first countries to attend the meeting and the first
                  seals were Finland, Greece, Iceland, Italy, Norway, Sweden and Denmark. This body
                  has provided the Consuls of the World with a forum necessary to share experiences
                  and coordinate efforts to improve their status, efficiency and bring together
                  consular associations and troops from all over the world.
                  <br />
                  <br />
                  The World Consular Federation has been recognized by the UN as a non-governmental
                  organization (NGO) with ECOSOC status. It is also recognized as a non-governmental
                  organization by the Organization of American States and the European Union. On
                  September 17, 2010, the World Consular Federation signed a partnership agreement
                  with the Prince Albert II of Monaco Foundation, founded by H.S.H. Prince Albert II
                  and dedicated to protection of the environment and addressing climate change.
                  <br /> <br />
                  FICAC serves as the umbrella organization for 87 honorary consulate organizations
                  worldwide. It holds periodic conferences to strengthen the bond between consuls
                  and channel their experience in professional fields. After the first meeting of
                  the Founding Fathers in Copenhagen in 1982, the Federation held two more meetings
                  in Copenhagen on October 26, 1984 and October 9-10, 1986 to draft an active
                  constitution, known as the Copenhagen Laws.
                  <br /> <br />
                  FICAC is headed by: Hon. Aykut Eken (Turkey), Honorary Consul General of Jamaica
                  and his Deputy Hon. Kostas N. Lefkaritis (Cyprus), Honorary Consul of the Republic
                  of Zambia.
                  <br /> <br />
                  For the FICAC website click here:
                  <br /> <br />
                  The vast majority of the Honorary Consuls perform their duties on a voluntary,
                  unpaid basis.
                </p>
                <a href="https://www.ficacworld.org/">https://www.ficacworld.org/</a>
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
