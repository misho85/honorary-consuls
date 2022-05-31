import React from 'react';
import InfoBlock from 'Components/Common/InfoBlock';
import styles from '../../styles/home.module.scss';
import useTranslation from 'next-translate/useTranslation';
import NewsSingleBlock from 'Components/Home/NewsSingleBlock';
import { useRouter } from 'next/router';
const SortSearch = ({ searchRes, locale }) => {
  const router = useRouter();
  console.log(searchRes);
  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  const sortContent = () => {
    const news = [];
    const corps = [];
    searchRes.forEach(res => {
      if (res?._type === 'consuls') {
        corps.push(res);
      }
      if (res?._type === 'post') {
        news.push(res);
      }
    });
    return { news, corps };
  };
  const { news, corps } = sortContent();

  return (
    <div className={styles.infoContainer}>
      <div className={styles.linksContent}>
        {corps?.length ? (
          <>
            <h1
              style={
                locale === 'he'
                  ? { textAlign: 'right', color: '#4a59a7' }
                  : { textAlign: 'left', color: '#4a59a7' }
              }>
              {t('common:corps')}
            </h1>
            {corps.map(res => {
              let displayTitle2 = res?.displayTitle;

              if (displayTitle2.includes('?')) {
                displayTitle2 = displayTitle2.split('?')[0];
              }

              return (
                <InfoBlock
                  key={res?._id}
                  className={returnClassName(styles.linkBlock)}
                  onClick={() => {
                    return router
                      .push(
                        {
                          pathname: `/corps/${res.slug.current}`
                        },
                        undefined,
                        { scroll: false }
                      )
                      .then(() => {
                        window.scrollTo({ top: 610, behavior: 'smooth' });
                      });
                  }}>
                  <h3 style={locale === 'he' ? { textAlign: 'right' } : null}>{displayTitle2}</h3>
                </InfoBlock>
              );
            })}
          </>
        ) : null}
        {news?.length ? (
          <>
            <h1
              style={
                locale === 'he'
                  ? { textAlign: 'right', marginTop: '3rem', color: '#4a59a7' }
                  : { textAlign: 'left', marginTop: '3rem', color: '#4a59a7' }
              }>
              {t('common:news')}
            </h1>
            {news.map(res => {
              return <NewsSingleBlock key={res._id} {...res} locale={locale} search />;
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SortSearch;
