import DayTracker from '../components/DayTracker';
import Links from '../components/Links';

export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <DayTracker />
        </div>
      </section>
      <Links />
    </>
  );
}
