import { getClient } from '../lib/sanity';
import { groq } from 'next-sanity';

import NewsBlock from 'Components/Home/NewsBlock';
import React, { useEffect } from 'react';

// *[_type in ["consuls", "post"]] | [[title.en, name] match 'new*']
export default function Home({ locale, news }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo({ top: 350, behavior: 'smooth' });
  //   }
  // }, []);
  return (
    <>
      <NewsBlock news={news} locale={locale} />
    </>
  );
}

const queryNews = groq`
*[_type == "post"][0..5] | order(_createdAt desc)
`;
export const getServerSideProps = async ({ locale }) => {
  const news = await getClient(false).fetch(queryNews);
  return {
    props: {
      news,
      locale
    }
  };
};
