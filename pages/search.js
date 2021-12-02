import { getClient } from '../lib/sanity';
import { groq } from 'next-sanity';
import SortSearch from 'Components/Common/SortSearch';
import NewsBlock from 'Components/Home/NewsBlock';
import React, { useEffect } from 'react';

export default function Home({ locale, news, searchRes, searchKey }) {
  console.log(searchKey, 'KEy');
  return (
    <>
      <div style={{ minHeight: '700px' }}>
        {searchRes?.length ? (
          <SortSearch locale={locale} searchRes={searchRes} />
        ) : (
          <h3
            style={{
              textAlign: 'center',
              margin: '2rem auto',
              marginTop: '7rem'
            }}>
            Sorry, there are no search results for "
            <span style={{ color: '#4a59a7' }}>{searchKey}</span>", try different keyword.
          </h3>
        )}
      </div>
    </>
  );
}

const queryNews = groq`
*[_type == "post"][0..5] | order(_createdAt desc)
`;
export const getServerSideProps = async ctx => {
  const { locale, query } = ctx;
  const searchKey = query?.key;
  if (!searchKey) {
    return {
      props: {
        key: ' ',
        searchRes: [],
        locale
      }
    };
  }
  const searchQuery = groq`
*[_type in ["consuls", "post"]] | [[title.en, name, country, author] match '${searchKey}*']
`;
  const searchRes = await getClient(false).fetch(searchQuery);

  return {
    props: {
      searchKey,
      searchRes,
      locale
    }
  };
};
