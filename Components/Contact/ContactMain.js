import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/home.module.scss';
import Loader from 'Components/Common/Loader';
const ContacTMain = ({ news, locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mail, setMail] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    body: '',
    notRobot: false
  });
  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  const onChange = e => {
    setMail(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!mail?.notRobot || !mail?.body || !mail?.firstName || !mail?.subject || !mail?.email) {
      return null;
    }
    setIsOpen(true);
    console.log('Sending');
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mail)
    })
      .then(res => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
        }
        setMail({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: '',
          body: '',
          notRobot: false
        });
        setIsOpen(false);
        alert('Thank you for contacting us!');
      })
      .catch(err => {
        alert('Something went wrong, please try again');
        console.log(err);
        setIsOpen(false);
      });
  };

  return (
    <div className={styles.newsContainer}>
      <Loader isOpen={isOpen} />

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
              <input
                onChange={onChange}
                type="text"
                name="firstName"
                dir={locale === 'he' ? 'rtl' : 'ltf'}
                value={mail?.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">{t('common:last-name')}</label>
              <input
                onChange={onChange}
                type="text"
                name="lastName"
                dir={locale === 'he' ? 'rtl' : 'ltf'}
                value={mail?.lastName}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="phone">{t('common:phone')}</label>
              <input
                onChange={onChange}
                type="tel"
                name="phone"
                dir={locale === 'he' ? 'rtl' : 'ltf'}
                value={mail?.phone}
              />
            </div>
            <div>
              <label htmlFor="email">{t('common:email')}</label>
              <input
                onChange={onChange}
                type="email"
                name="email"
                dir={locale === 'he' ? 'rtl' : 'ltf'}
                value={mail?.email}
              />
            </div>
          </div>
          <div className={styles.subjectRow}>
            <div>
              <label htmlFor="subject">{t('common:subject')}</label>
              <input
                onChange={onChange}
                type="text"
                name="subject"
                dir={locale === 'he' ? 'rtl' : 'ltf'}
                value={mail?.subject}
              />
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="phone">{t('common:body')}</label>
            <textarea
              onChange={onChange}
              name="body"
              cols="30"
              rows="10"
              dir={locale === 'he' ? 'rtl' : 'ltf'}
              value={mail?.body}
            />
          </div>
          <div className={returnClassName(styles.submitRow)}>
            <div>
              <input
                type="checkbox"
                name="robot"
                checked={mail?.notRobot}
                onChange={e => {
                  return setMail(prevState => {
                    return { ...prevState, notRobot: !prevState?.notRobot };
                  });
                }}
              />{' '}
              <label htmlFor="robot">{t('common:not-a-robot')}</label>
            </div>
            <button
              style={
                mail?.notRobot && mail?.body && mail?.firstName && mail?.subject && mail?.email
                  ? { textTransform: 'uppercase', background: '#223f9a' }
                  : { textTransform: 'uppercase', background: 'grey', opacity: 0.7 }
              }
              onClick={e => handleSubmit(e)}>
              {t('common:submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContacTMain;
