import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/home.module.scss';
const ContacTMain = ({ news, locale }) => {
  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div className={styles.newsContainer}>
      <div className={styles.contactContent}>
        <div className={returnClassName(styles.contactHead)}>
          <h3 className={returnClassName(styles.pageTitle)} style={{ marginBottom: '1rem' }}>
            {t('common:contact')}
          </h3>
          <h4>{t('common:consular_corps_of_israel')}</h4>
          <p className={styles.address}>
            {t('common:office-address_1')} <br /> {t('common:office-address_2')}
          </p>
          <a href={t('common:office-mail')}>{t('common:office-mail')}</a>
        </div>

        <form className={returnClassName(styles.contactForm)}>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="firstName">{t('common:first-name')}</label>
              <input type="text" name="firstName" dir={locale === 'he' ? 'rtl' : 'ltf'} />
            </div>
            <div>
              <label htmlFor="firstName">{t('common:last-name')}</label>
              <input type="text" name="lastName" dir={locale === 'he' ? 'rtl' : 'ltf'} />
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="phone">{t('common:phone')}</label>
              <input type="tel" name="phone" dir={locale === 'he' ? 'rtl' : 'ltf'} />
            </div>
            <div>
              <label htmlFor="email">{t('common:email')}</label>
              <input type="email" name="email" dir={locale === 'he' ? 'rtl' : 'ltf'} />
            </div>
          </div>
          <div className={styles.subjectRow}>
            <div>
              <label htmlFor="phone">{t('common:subject')}</label>
              <input type="text" name="subject" dir={locale === 'he' ? 'rtl' : 'ltf'} />
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="phone">{t('common:body')}</label>
            <textarea name="body" cols="30" rows="10" dir={locale === 'he' ? 'rtl' : 'ltf'} />
          </div>
          <div className={returnClassName(styles.submitRow)}>
            <div>
              <input type="checkbox" name="robot" />{' '}
              <label htmlFor="robot">{t('common:not-a-robot')}</label>
            </div>
            <button style={{ textTransform: 'uppercase' }} type="submit">
              {t('common:submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContacTMain;
