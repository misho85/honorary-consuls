import { getClient } from '../../lib/sanity';
import { groq } from 'next-sanity';

import NewsBlock from 'Components/Home/NewsBlock';

// *[_type in ["consuls", "post"]] | [[title.en, name] match 'new*']
export default function News({ locale, news }) {
  return (
    <>
      <NewsBlock news={news} locale={locale} />
    </>
  );
}

const queryNews = groq`
*[_type == "post"] | order(_createdAt desc)
`;
export const getStaticProps = async ({ locale }) => {
  const news = await getClient(false).fetch(queryNews);
  return {
    props: {
      news,
      locale
    },
    revalidate: 10
  };
};
