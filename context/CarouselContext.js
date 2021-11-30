import React, { useState, useEffect, useContext, createContext } from 'react';
import { getClient } from '../lib/sanity';
import { groq } from 'next-sanity';

const queryCarouselGallery = groq`
*[_type == "gallery"] | order(_createdAt desc)
`;

export const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [carouselGallery, setCarouselGallery] = useState(null);
  useEffect(async () => {
    try {
      const carouselGallery = await getClient(false).fetch(queryCarouselGallery);
      setCarouselGallery(carouselGallery);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <CarouselContext.Provider value={{ carouselGallery }}>{children}</CarouselContext.Provider>
  );
};
export const useCarouselContext = () => {
  return useContext(CarouselContext);
};
