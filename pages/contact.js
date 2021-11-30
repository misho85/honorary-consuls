import ContactMain from 'Components/Contact/ContactMain';

// *[_type in ["consuls", "post"]] | [[title.en, name] match 'new*']
export default function News({ locale, news }) {
  return (
    <>
      <ContactMain locale={locale} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  };
};
