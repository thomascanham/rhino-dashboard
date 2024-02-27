import Head from 'next/head';
import DayTracker from '../components/DayTracker';
import Links from '../components/Links';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rhino UK Bootliners</title>
      </Head>
      <section>
        <div className="container">
          <DayTracker />
        </div>
      </section>
      <Links />
    </>
  );
}
