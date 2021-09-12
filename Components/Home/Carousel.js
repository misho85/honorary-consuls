import { PortableText, imageBuilder } from '../../lib/sanity';
import { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/home.module.scss';
import useTranslation from 'next-translate/useTranslation';
export default function Carousel({ carouselGallery, locale }) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const settings = {
    draggable: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActive(next);
    },
    customPaging: index => {
      return (
        <button style={index === active ? { background: 'rgba(222, 222, 222, 1)' } : null}>
          {index + 1}
        </button>
      );
    }
  };
  const handleScroll = () => {
    // console.log(carouselRef.current);
    if (window.scrollY > 200) {
      carouselRef.current.style.height = `250px`;
    } else {
      console.log('ovde2');
      carouselRef.current.style.height = '800px';
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className={styles.carouselContainer} ref={carouselRef}>
      <div className={styles.carouselContent}>
        <div className={styles.title}>
          <div className={styles.titleContent}>
            <div>
              <h3>{t('common:header_title')}</h3>
              <h3>{t('common:header_title_he')}</h3>
            </div>
            <div>
              <Link href={router.asPath} locale="en">
                <a>
                  <span className={locale === 'en' ? styles.activeBtn : null}>English</span>
                </a>
              </Link>
              <Link href={router.asPath} locale="he">
                <a>
                  <span className={locale === 'he' ? styles.activeBtn : null}>עִברִית</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.navContent}>
            <div className={styles.links}>
              <p className={router.pathname === '/' ? styles.activeBtn : null}>
                {t('common:home')}
              </p>
              <p>{t('common:about_us')}</p>
              <p>{t('common:ficac')}</p>
              <p>{t('common:conventions')}</p>
              <p>{t('common:foreign_ministry')}</p>
              <p>{t('common:news')}</p>
              <p>{t('common:links')}</p>
            </div>
            <p>search</p>
          </div>
        </div>
        <Slider
          {...settings}
          className={styles.carousel}
          dotsClass={styles.customDots}
          appendDots={dots => {
            return <div>{dots}</div>;
          }}>
          {carouselGallery.map(img => {
            return (
              <div key={img._id} className={styles.carouselItem}>
                <div
                  className={styles.itemContent}
                  style={{
                    backgroundImage: `url(${imageBuilder(
                      img.carouselImages.image
                    )}), linear-gradient(to bottom, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    backgroundBlendMode: 'multiply'
                  }}>
                  <div />
                  <PortableText blocks={img.carouselImages.imageText[locale]} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
