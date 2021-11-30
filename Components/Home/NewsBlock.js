import React from 'react';
import NewsSingleBlock from './NewsSingleBlock';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/home.module.scss';
const NewsBlock = ({ news, locale }) => {
  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsContent}>
        <h3 className={returnClassName(styles.pageTitle)} id="newsPoint">
          {t('common:news')}
        </h3>
        {news?.map(elem => {
          return <NewsSingleBlock key={elem._id} {...elem} locale={locale} />;
        })}
      </div>
    </div>
  );
};

export default NewsBlock;
