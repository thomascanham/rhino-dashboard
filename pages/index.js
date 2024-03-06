import DayTracker from '../components/DayTracker';
import Links from '../components/Links';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Dashboard" />
      <section>
        <div className="container">
          <DayTracker />
        </div>
      </section>
      <Links />
    </>
  );
}
