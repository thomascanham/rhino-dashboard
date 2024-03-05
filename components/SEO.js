import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ title }) {
  let env = '';

  if (
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev' ||
    !process.env.NEXT_PUBLIC_ENVIRONMENT
  ) {
    env = 'DEV:';
  } else {
    env = '';
  }

  return (
    <Head>
      <title>{`${env}RUBL - ${title}`}</title>
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};
