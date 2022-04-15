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
          <h3 className={returnClassName(styles.pageTitle)}>{t('common:about_us')}</h3>
          <InfoBlock className={returnClassName(styles.infoBlock)}>
            {locale === 'he' ? (
              <p dir="rtl">
                הסגל הקונסולרי בישראל פועל עוד מראשית שנות השישים והינו למעשה ארגון יציג לכ- 170
                קונסולי כבוד הפועלים בישראל מתוכם 49 קונסולי כבוד ללא שגרירות תושבת המהווים הנציגים
                היחידים של אותה מדינה בישראל. בראש הסגל עומד התעשיין גד פרופר (קונסול כבוד של ניו
                זילנד) וסגנו עו"ד עמיחי עורקבי (קונסול כבוד של הרפובליקה של קוריאה ושל מונגוליה).
                <br />
                <br />
                קונסולי הכבוד ממלאים מקום חשוב ומשלים לדיפלומטיה הישראלית ולוקחים חלק פעיל ומשמעותי
                בקידום יחסי מסחר, כלכלה, תרבות, אקדמיה, אמנות וספורט. במקרים בהם ישנה שגרירות תושבת
                בישראל ימונה קונסול כבוד למחוז או עיר שם ישלים הקונסול את עבודת השגרירות.
                <br /> <br />
                קונסולי הכבוד משמשים כגשר בין המדינות מכח היותם מינויים אישיים "במשרת אמון" של
                המדינה הממנה וכן אזרחים נאמנים של מדינת ישראל. הליך המינוי של קונסול כבוד הנו מוסדר
                ע"פ אמנת וינה, כאשר המדינה הממנה מגישה כתב הסכמה למינוי קונסול כבוד המדינה המארחת
                מבצעת תהליכי בדיקה ואישור בסיומו מעניקה כתב אמנה.
                <br /> <br />
                קונסולי כבוד הינם אזרחים בשירות דיפלומטי ומשתתפים בפעילות הסברה של ישראל בעיתות שלום
                ובמשבר חלקם אף הצליחו להשפיע באמצעות קשרים אישיים על אופן הצבעות באו”ם.
                <br /> <br />
                בשנת 2009 נרשם הסגל באופן פורמלי ברשם העמותות, משרד המשפטים כעמותה רשומה ולאחר מכן
                כמלכ"ר.
                <br /> <br />
                קונסולי הכבוד רובם ככולם מבצעים את תפקידם בהתנדבות מלאה ללא שכר.
              </p>
            ) : (
              <p>
                The Consular Corps in Israel has been active since the early 1960s and is in fact a
                representative organization serving about 170 honorary consuls operating in Israel,
                of which 49 are honorary consuls without a resident embassy, who are the only
                representatives of that country in Israel. The Consular Corps is headed by
                industrialist Gad Proper (Honorary Consul of New Zealand) and his deputy Adv.
                Amichai Orkaby (Honorary Consul of Mongolia and the Republic of Korea).
                <br />
                <br />
                Honorary consuls play an important and complementary role in the Israeli diplomacy,
                taking an active and significant part in promoting trade, economy, culture,
                academia, arts and sports. In cases where there is a resident embassy in Israel, an
                honorary consul will be appointed for the district or city, where the consul will
                complement the operations of the embassy.
                <br /> <br />
                Honorary consuls serve as a bridge between the states by virtue of being personal
                appointees "in a position of trust" of the appointing state as well as loyal
                citizens of the State of Israel. The procedure of appointing an honorary consul is
                regulated by the Vienna Convention, with the appointing state submitting a letter of
                consent (Patent Letter) for the appointment of the honorary consul in the host
                state, which in turn after the relevant evaluation and approval procedures, provides
                a letter of credence (Exequatur).
                <br /> <br />
                Honorary consuls are civilians on diplomatic service, participating in Israel's
                public diplomacy both during peacetime and in times of crisis, some of whom have
                even succeeded in influencing the manner of voting in the UN through personal
                connections.
                <br /> <br />
                In 2009, the Consular Corps was formally registered with the Registrar of
                Associations, the Ministry of Justice, as a registered association and then as a
                non-profit organization.
                <br /> <br />
                The vast majority of the Honorary Consuls perform their duties on a voluntary,
                unpaid basis.
              </p>
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
