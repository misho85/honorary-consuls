import React from 'react';
import { getClient } from 'lib/sanity';
import { groq } from 'next-sanity';
import useTranslation from 'next-translate/useTranslation';
import InfoBlock from '../Components/Common/InfoBlock';

import styles from '../styles/home.module.scss';
const Links = ({ locale, links }) => {
  console.log(links);
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
        <div className={styles.linksContent}>
          <h3 className={returnClassName(styles.pageTitle)}>Links</h3>
          {links?.map(link => {
            return (
              <InfoBlock className={returnClassName(styles.linkBlock)} key={link?._id}>
                <h3>{link?.name?.[locale]}</h3>
                <p>{link?.description?.[locale]}</p>
                <a href={link?.url}>{t('common:visit_link')}</a>
              </InfoBlock>
            );
          })}
        </div>
      </div>
    </>
  );
};
const queryLinks = groq`
*[_type == "links"] | order(_createdAt desc)
`;
export const getServerSideProps = async ({ locale }) => {
  const links = await getClient(false).fetch(queryLinks);
  return {
    props: {
      links,
      locale
    }
  };
};

export default Links;
