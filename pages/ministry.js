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
            <p>{t('common:minitrsy_text_1')}</p>
            <p>{t('common:minitrsy_text_2')}</p>
            <p
              style={
                locale === 'he'
                  ? { display: 'flex', flexDirection: 'column' }
                  : { display: 'flex', flexDirection: 'column' }
              }>
              {locale === 'he' ? (
                <>
                  <p style={{ marginBottom: '0rem' }}>{t('common:minitrsy_text_3')}</p>{' '}
                  <a
                    style={{ wordBreak: 'break-all' }}
                    href="https://www.gov.il/he/departments/ministry_of_foreign_affairs/govil-landing-page">
                    https://www.gov.il/he/departments/ministry_of_foreign_affairs/govil-landing-page
                  </a>{' '}
                </>
              ) : (
                <>
                  <p style={{ marginBottom: '0rem' }}>{t('common:minitrsy_text_3')}</p>{' '}
                  <a
                    style={{ wordBreak: 'break-all' }}
                    href="https://www.gov.il/en/departments/ministry_of_foreign_affairs/govil-landing-page">
                    https://www.gov.il/en/departments/ministry_of_foreign_affairs/govil-landing-page
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
