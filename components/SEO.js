import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ title }) {
  return (
    <Head>
      <title>{`RUBL - ${title}`}</title>
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};
