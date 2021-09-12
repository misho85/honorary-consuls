import { getClient } from '../lib/sanity';
import { groq } from 'next-sanity';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from '../Components/Home/Carousel';
export default function Home({ carouselGallery, locale }) {
  return (
    <>
      <Carousel carouselGallery={carouselGallery} locale={locale} />
    </>
  );
}

const queryCarouselGallery = groq`
*[_type == "gallery"] | order(_createdAt asc)
`;

export const getStaticProps = async ({ locale }) => {
  const carouselGallery = await getClient(false).fetch(queryCarouselGallery);
  return {
    props: {
      carouselGallery,
      locale
    },
    revalidate: 10
  };
};
