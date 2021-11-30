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
            5, Tuval Street, Tel Aviv 67897, Israel; Phone: (03) 623 5073
          </p>
          <a href="mailto:consuls123@gmail.com">E-mail: consuls123@gmail.com</a>
        </div>

        <form className={returnClassName(styles.contactForm)}>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input type="text" name="firstName" />
            </div>
            <div>
              <label htmlFor="firstName">Last name:</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" name="phone" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className={styles.subjectRow}>
            <div>
              <label htmlFor="phone">Subject:</label>
              <input type="text" name="subject" />
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="phone">Body:</label>
            <textarea name="body" cols="30" rows="10" />
          </div>
          <div className={returnClassName(styles.submitRow)}>
            <div>
              <input type="checkbox" name="robot" /> <label htmlFor="robot">I am not a robot</label>
            </div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContacTMain;
