import { getClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import styles from '../../styles/home.module.scss';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
// *[_type in ["consuls", "post"]] | [[title.en, name] match 'new*']
export default function News({ locale, consuls }) {
  const sortedConsuls = consuls.sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));
  const { t } = useTranslation();
  const router = useRouter();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsContent} dir={locale === 'he' ? 'rtl' : 'ltf'}>
        <h3 className={returnClassName(styles.pageTitle)}>{t('common:about_link_four')}</h3>
        <ul
          style={
            locale === 'he'
              ? { paddingRight: '0rem', textAlign: 'right', listStyleType: 'none' }
              : { paddingLeft: '0rem', textAlign: 'left', listStyleType: 'none' }
          }>
          {sortedConsuls.map(cons => {
            let country2 = cons.country;

            let displayTitle2 = cons.displayTitle;

            if (displayTitle2.includes('?')) {
              const newData = displayTitle2.split('?');

              country2 = newData[1];
              displayTitle2 = newData[0];
            }

            return (
              <li
                key={cons._id}
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: `/corps/${cons.slug.current}`
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                    })
                }>
                <h3 style={{ marginBottom: '0rem' }}>{displayTitle2}</h3>
                <p style={{ marginTop: '0rem', textTransform: 'capitalize' }}>
                  {country2.replace(/-/g, ' ')}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const queryConsuls = groq`
*[_type == "consuls" && management == true] | order(_createdAt desc)
`;
  const consuls = await getClient(false).fetch(queryConsuls);
  return {
    props: {
      consuls,
      locale
    }
  };
};
