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
            <p dir={locale === 'he' ? "rtl" : 'ltr'}>{t('common:ficac_text_1')}</p>
            <p dir={locale === 'he' ? "rtl" : 'ltr'}>{t('common:ficac_text_2')}</p>
            <p dir={locale === 'he' ? "rtl" : 'ltr'}>{t('common:ficac_text_3')}</p>
            <p dir={locale === 'he' ? "rtl" : 'ltr'}>{t('common:ficac_text_4')}</p>
            <p
             dir={locale === 'he' ? "rtl" : 'ltr'}
              style={
                locale === 'he'
                  ? { display: 'flex', flexDirection: 'column' }
                  : { display: 'flex', flexDirection: 'column' }
              }>
              {locale === 'he' ? (
                <>
                  <p  dir={locale === 'he' ? "rtl" : 'ltr'} style={{ marginBottom: '0rem' }}>{t('common:ficac_text_5')}</p>{' '}
                  <a  dir={locale === 'he' ? "rtl" : 'ltr'} style={{ wordBreak: 'break-all' }} href="https://www.ficacworld.org/">
                    https://www.ficacworld.org/
                  </a>{' '}
                </>
              ) : (
                <>
                  <p  dir={locale === 'he' ? "rtl" : 'ltr'} style={{ marginBottom: '0rem' }}>{t('common:ficac_text_5')}</p>{' '}
                  <a  dir={locale === 'he' ? "rtl" : 'ltr'} style={{ wordBreak: 'break-all' }} href="https://www.ficacworld.org/">
                    https://www.ficacworld.org/
                  </a>{' '}
                </>
              )}
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
