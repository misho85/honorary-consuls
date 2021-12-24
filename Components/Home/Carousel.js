import { PortableText, imageBuilder } from '../../lib/sanity';
import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SearchDialog from './SearchDialog';
import MenuIcon from '@material-ui/icons/Menu';
import useTranslation from 'next-translate/useTranslation';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import { useCarouselContext } from '../../context/CarouselContext';
import styles from '../../styles/home.module.scss';

export default function Carousel({ locale }) {
  const { carouselGallery } = useCarouselContext();
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [faded, setFaded] = useState(false);
  const [dark, setDark] = useState(false);
  const settings = {
    draggable: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 0,
    autoplay: false,
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
    const distance = window.scrollY;
    if (carouselGallery) {
      if (distance > 100) {
        if (!dark) {
          setDark(true);
        }
      } else {
        if (dark) {
          setDark(false);
        }
      }
      if (distance > 200) {
        if (!faded) {
          setFaded(true);
        }
      } else {
        if (faded) {
          setFaded(false);
        }
      }
    }
  };
  const handleDarken = op => {
    if (op === '+') {
      return setDark(true);
    } else {
      return setDark(false);
    }
  };
  const returnBg = () => {
    if (carouselGallery) {
      if (carouselGallery?.[active]?.carouselImages?.image?.overlay) {
        return `url(${imageBuilder(
          carouselGallery[active].carouselImages.image
        )}), linear-gradient(180deg, rgba(0,0,0,1) 4%, rgba(84,113,182,1) 39%, rgba(255,255,255,1) 100%)`;
      } else {
        return `url(${imageBuilder(carouselGallery?.[active]?.carouselImages?.image)})`;
      }
    } else {
      return `linear-gradient(180deg, rgba(0,0,0,1) 4%, rgba(84,113,182,1) 39%, rgba(255,255,255,1) 100%)`;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div
      className={styles.carouselContainer}
      style={carouselGallery ? { height: '800px' } : { height: '200px' }}
      ref={carouselRef}>
      <SearchDialog
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
        locale={locale}
        setOpenMenu={setOpenMenu}
      />
      <div className={styles.carouselContent}>
        <div
          className={styles.title}
          style={{
            backgroundImage: returnBg(),
            background: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundBlendMode: 'multiply',
            backgroundAttachment: 'fixed'
          }}>
          <div className={returnClassName(styles.titleContent)}>
            <div>
              <h3>{t('common:header_title_he')}</h3>
              <h3>{t('common:header_title')}</h3>
            </div>
            <div className={returnClassName(styles.langSwticher)}>
              <Link href={router.asPath} locale="en" scroll={false}>
                <a>
                  <span
                    className={locale === 'en' ? styles.activeBtn : null}
                    style={locale === 'he' ? { marginLeft: '0rem' } : null}>
                    English
                  </span>
                </a>
              </Link>
              <Link href={router.asPath} locale="he" scroll={false}>
                <a>
                  <span className={locale === 'he' ? styles.activeBtn : null}>עִברִית</span>
                </a>
              </Link>
            </div>
            <div className={styles.hamBtn} onClick={() => setOpenMenu(true)}>
              <MenuIcon style={openMenu ? { visibility: 'hidden' } : null} />
            </div>
          </div>
          <div
            className={`${returnClassName(styles.navContent)} ${openMenu && styles.activeMenu}`}
            onMouseEnter={() => handleDarken('+')}
            onMouseLeave={() => handleDarken('-')}>
            <div
              className={`${returnClassName(styles.navContentOverlay)}`}
              onClick={() => setOpenMenu(false)}>
              <CloseIcon />
            </div>
            <div className={returnClassName(styles.links)}>
              <div
                className={returnClassName(styles.langSwtichervNav)}
                style={locale === 'he' ? { alignSelf: 'self-end' } : null}>
                <Link href={router.asPath} locale="en" scroll={false}>
                  <a>
                    <span
                      style={locale === 'he' ? { marginRight: '1.2rem' } : null}
                      className={locale === 'en' ? styles.activeBtn : null}>
                      English
                    </span>
                  </a>
                </Link>
                <Link href={router.asPath} locale="he" scroll={false}>
                  <a>
                    <span
                      style={locale === 'en' ? { marginLeft: '1.2rem' } : null}
                      className={locale === 'he' ? styles.activeBtn : null}>
                      עִברִית
                    </span>
                  </a>
                </Link>
              </div>
              <p
                style={locale === 'he' ? { marginRight: '0rem' } : null}
                className={`${returnClassName('')} ${
                  router.pathname === '/' ? styles.activeBtn : null
                }`}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: '/'
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                      setOpenMenu(false);
                    })
                }>
                {t('common:home')}
              </p>
              <div className={`${returnClassName(styles.linksContainer)}`}>
                <p
                  className={`${returnClassName('')} ${
                    router.pathname === '/about-us' ? styles.activeBtn : null
                  }`}>
                  {t('common:about_us')}
                  <ExpandMoreIcon />
                </p>
                <div
                  className={`${returnClassName(styles.dropDown)} ${
                    faded || !carouselGallery ? styles.blueBg : ''
                  }`}>
                  <p
                    onClick={() =>
                      router
                        .push(
                          {
                            pathname: '/about-us'
                          },
                          undefined,
                          { scroll: false }
                        )
                        .then(() => {
                          window.scrollTo({ top: 610, behavior: 'smooth' });
                          setOpenMenu(false);
                        })
                    }
                    className={`${returnClassName('')} ${
                      router.pathname === '/about-us' ? styles.activeBtn : null
                    }`}>
                    {t('common:about_link_one')}
                  </p>
                  <p
                    onClick={() =>
                      router
                        .push(
                          {
                            pathname: '/corps/dean'
                          },
                          undefined,
                          { scroll: false }
                        )
                        .then(() => {
                          window.scrollTo({ top: 610, behavior: 'smooth' });
                          setOpenMenu(false);
                        })
                    }
                    className={`${returnClassName('')} ${
                      router?.query?.id === 'dean' ? styles.activeBtn : null
                    }`}>
                    {t('common:about_link_two')}
                  </p>
                  <p
                    onClick={() =>
                      router
                        .push(
                          {
                            pathname: '/corps/deputy-dean'
                          },
                          undefined,
                          { scroll: false }
                        )
                        .then(() => {
                          window.scrollTo({ top: 610, behavior: 'smooth' });
                          setOpenMenu(false);
                        })
                    }
                    className={`${returnClassName('')} ${
                      router?.query?.id === 'deputy-dean' ? styles.activeBtn : null
                    }`}>
                    {t('common:about_link_three')}
                  </p>
                  <p
                    className={`${returnClassName('')} ${
                      router.pathname === '/corps/management' ? styles.activeBtn : null
                    }`}
                    onClick={() =>
                      router
                        .push(
                          {
                            pathname: '/corps/management'
                          },
                          undefined,
                          { scroll: false }
                        )
                        .then(() => {
                          window.scrollTo({ top: 610, behavior: 'smooth' });
                          setOpenMenu(false);
                        })
                    }>
                    {t('common:about_link_four')}
                  </p>
                  <p
                    className={`${returnClassName('')} ${
                      router.pathname === '/corps' ? styles.activeBtn : null
                    }`}
                    onClick={() =>
                      router
                        .push(
                          {
                            pathname: '/corps'
                          },
                          undefined,
                          { scroll: false }
                        )
                        .then(() => {
                          window.scrollTo({ top: 610, behavior: 'smooth' });
                          setOpenMenu(false);
                        })
                    }>
                    {t('common:about_link_five')}
                  </p>
                </div>
              </div>
              <p
                className={router.pathname === '/ficac' ? styles.activeBtn : null}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: '/ficac'
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                      setOpenMenu(false);
                    })
                }>
                {t('common:ficac')}
              </p>
              <p
                className={router.pathname === '/ministry' ? styles.activeBtn : null}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: '/ministry'
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                      setOpenMenu(false);
                    })
                }>
                {t('common:foreign_ministry')}
              </p>
              <div className={`${returnClassName(styles.linksContainer)}`}>
                <p>
                  {t('common:conventions')}
                  <ExpandMoreIcon />
                </p>
                <div
                  className={`${returnClassName(styles.dropDown)} ${
                    faded || !carouselGallery ? styles.blueBg : ''
                  }`}>
                  <p
                    onClick={() => {
                      return router.push('/docs/vienna.pdf');
                    }}>
                    {t('common:vienna_convention')}
                  </p>
                  <p
                    onClick={() => {
                      if (locale === 'he') {
                        return router.push('/docs/ethics_he.pdf');
                      }
                      return router.push('/docs/ethics_eng.pdf');
                    }}>
                    {t('common:ethic_convention')}
                  </p>
                </div>
              </div>

              <p
                className={router.pathname === '/news' ? styles.activeBtn : null}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: '/news'
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                      setOpenMenu(false);
                    })
                }>
                {t('common:news')}
              </p>
              <p
                className={router.pathname === '/links' ? styles.activeBtn : null}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: '/links'
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                      setOpenMenu(false);
                    })
                }>
                {t('common:links')}
              </p>
              <p
                className={router.pathname === '/contact' ? styles.activeBtn : null}
                onClick={() =>
                  router
                    .push(
                      {
                        pathname: '/contact'
                      },
                      undefined,
                      { scroll: false }
                    )
                    .then(() => {
                      window.scrollTo({ top: 610, behavior: 'smooth' });
                      setOpenMenu(false);
                    })
                }>
                {t('common:contact')}
              </p>
            </div>
            <p
              onClick={() => setIsSearchOpen(true)}
              className={`${returnClassName(styles.search)}`}>
              <SearchIcon />
            </p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          {carouselGallery && (
            <Slider
              {...settings}
              className={styles.carousel}
              dotsClass={styles.customDots}
              appendDots={dots => {
                return <div style={faded || dark ? { opacity: 0.1 } : null}>{dots}</div>;
              }}>
              {carouselGallery?.map(img => {
                return (
                  <div key={img._id} className={styles.carouselItem}>
                    <div
                      className={`${styles.itemContent}`}
                      style={{
                        backgroundImage: returnBg(),
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundBlendMode: 'multiply',
                        backgroundAttachment: 'fixed'
                      }}>
                      <div />
                      {img?.carouselImages?.imageText?.[locale] ? (
                        <PortableText
                          renderContainerOnSingleChild
                          blocks={img?.carouselImages?.imageText?.[locale]}
                          className={dark ? styles.darken : styles.nonDarken}
                        />
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}
