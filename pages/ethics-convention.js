import ConventionWrapper from 'Components/Common/ConventionWrapper';

// *[_type in ["consuls", "post"]] | [[title.en, name] match 'new*']
export default function Convention({ locale }) {
  return (
    <>
      <ConventionWrapper locale={locale}>
        <hi>Ethics Convention</hi>
              <h3>Honorary Consuls' Charter</h3>
              <h5></h5>
      </ConventionWrapper>
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
