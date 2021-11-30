import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/home.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';
const NewsSingleBlock = ({ author, excerpt, title, _createdAt, locale, slug }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div className={returnClassName(styles.newsSingleBlock)}>
      <h3
        className={returnClassName('newsTitle')}
        onClick={() =>
          router
            .push(
              {
                pathname: `/news/${slug.current}`
              },
              undefined,
              { scroll: false }
            )
            .then(() => {
              window.scrollTo({ top: 610, behavior: 'smooth' });
            })
        }>
        {title?.[locale]}
      </h3>
      <p className={returnClassName(styles.by)}>
        <span style={locale === 'he' ? { marginRight: '0rem' } : { marginLeft: '0rem' }}>
          {t('common:by')}
        </span>
        <span className={styles.blue}>{author}</span>
        <span>{t('common:on')}</span>
        <span className={styles.blue}>{moment(_createdAt).format('MMMM DD, YYYY')}</span>
      </p>
      <p className={returnClassName(styles.excerpt)}>{excerpt?.[locale]}</p>
    </div>
  );
};

export default NewsSingleBlock;
