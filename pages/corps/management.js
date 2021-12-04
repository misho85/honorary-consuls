import { getClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import styles from '../../styles/home.module.scss';
import { useRouter } from 'next/router';
// *[_type in ["consuls", "post"]] | [[title.en, name] match 'new*']
export default function News({ locale, consuls }) {
  const sortedConsuls = consuls.sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));

  const router = useRouter();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsContent}>
        <h3 className={returnClassName(styles.pageTitle)}>Consuls</h3>
        <ul
          style={
            locale === 'he'
              ? { paddingRight: '0rem', textAlign: 'right', listStyleType: 'none' }
              : { paddingLeft: '0rem', textAlign: 'left', listStyleType: 'none' }
          }>
          {sortedConsuls.map(cons => {
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
                <h3 style={{ marginBottom: '0rem' }}>{cons.displayTitle}</h3>
                <p style={{ marginTop: '0rem', textTransform: 'capitalize' }}>
                  Country: {cons.country}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const queryConsuls = groq`
*[_type == "consuls" && management == true] | order(_createdAt desc)
`;
  const consuls = await getClient(false).fetch(queryConsuls);
  return {
    props: {
      consuls,
      locale
    },
    revalidate: 10
  };
};
