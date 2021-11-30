import { getClient } from '../../lib/sanity';
import { PortableText, imageBuilder } from '../../lib/sanity';
import ScrollContainer from 'react-indiana-drag-scroll';
import { groq } from 'next-sanity';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/home.module.scss';
import router from 'next/router';

export default function SingleNews({ locale, consul }) {
  console.log(consul);
  const { bio, country, displayTitle, image, socialMedia } = consul[0];

  const { t } = useTranslation();
  const returnClassName = classname => {
    if (locale === 'he') {
      return `${classname} ${styles.he}`;
    }
    return `${classname}`;
  };
  return (
    <div className={styles.consul}>
      <div className={styles.consulContainer}>
        <div className={styles.consulInfo}>
          <div className={styles.country}>
            <img src="../assets/serbiaFlag.png" alt="Country" />
            <h3>{displayTitle}</h3>
          </div>
          <img src={imageBuilder(image)} alt="consul profile image" />
        </div>
        <div className={returnClassName(styles.consulBio)}>
          <PortableText renderContainerOnSingleChild blocks={bio[locale]} />
          <div className={returnClassName(styles.consulSocial)}>
            <p style={locale === 'he' ? { textAlign: 'right' } : null}>
              E-mail: <a href="mailto: test123@gmail.com">test123@gmail.com</a>
            </p>

            <div className={styles.socialBtns}>
              {socialMedia?.length
                ? socialMedia.map((media, index) => {
                    const mediaType = media._type.replace('Link', '');
                    return (
                      <img
                        key={media._key}
                        style={index !== socialMedia.length - 1 ? { marginRight: '0.8rem' } : null}
                        src={`../assets/${media._type}.png`}
                        alt="social media"
                        onClick={() => router.push(media[mediaType])}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const queryConsuls = groq`
  *[_type == "consuls"] {
      slug
  }`;
  const consulsPaths = await getClient(false).fetch(queryConsuls);
  const paths = consulsPaths.map(cons => ({
    params: { id: cons.slug.current }
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ locale, params }) => {
  const id = params.id;

  const queryConsulsId = groq`
  *[_type == "consuls" && slug.current == "${id}"]`;

  const consul = await getClient(false).fetch(queryConsulsId);
  return {
    props: {
      consul,
      locale
    },
    revalidate: 100
  };
};