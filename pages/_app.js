import '../styles/globals.css';
import Head from 'next/head';
import { CarouselProvider } from '../context/CarouselContext';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/common.module.scss';
import Carousel from '../Components/Home/Carousel';
import Footer from '../Components/Common/Footer';
function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('common:consular_corps_of_israel')}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="../favi/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="../favi/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="../favi/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="../favi/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="../favi/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="../favi/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="../favi/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="../favi/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../favi/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favi/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="../favi/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favi/favicon-16x16.png" />
        <link rel="manifest" href="../favi/manifest.json" />
      </Head>

      <CarouselProvider>
        <div className={styles.container}>
          <Carousel locale={pageProps?.locale || 'en'} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </CarouselProvider>
    </>
  );
}

export default MyApp;
