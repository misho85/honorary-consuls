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
            <p>{t('common:about_text_1')}</p>
            <p>{t('common:about_text_2')}</p>
            <p>{t('common:about_text_3')}</p>
            <p>{t('common:about_text_4')}</p>
            <p>{t('common:about_text_5')}</p>
            <p>{t('common:about_text_6')}</p>
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
