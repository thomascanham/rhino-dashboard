import styled from 'styled-components';

export default function Compare() {
  return (
    <CompareStyles className="container">
      <h2>Comparing the Liners</h2>
      <p>
        When it comes to our Boot Liners, we offer three distict types of liners
        that all have meet slightly different requirements that suit different
        needs
      </p>

      <div className="grid">
        <div className="card">
          <h3>Boot Area Liner</h3>
          <p>
            Perfect for covering your entire boot floor, this liner offers
            complete protection. It's the go-to choice if you're hauling
            anything from muddy boots to gardening supplies.
          </p>
        </div>

        <div className="card">
          <h3>Up To Front / Extended</h3>
          <p>
            If you're transporting goods that need full coverage up to the front
            seats, this liner is the answer. It's a versatile choice for those
            who want to shield the entire boot area.
          </p>
        </div>

        <div className="card">
          <h3>Two Part Extendable</h3>
          <p>
            For those who need flexibility, this liner has you covered. It's
            designed to accommodate various cargo loads, thanks to its
            extendable design.
          </p>
        </div>
      </div>

      <p>
        So, how do you pick the right one? It's all about your lifestyle and the
        kind of cargo you carry. Are you an outdoor enthusiast, a pet owner, or
        a tradesperson? Consider your specific needs, and you'll find the
        perfect Rhino UK boot liner to keep your vehicle in tip-top shape.
      </p>
    </CompareStyles>
  );
}

const CompareStyles = styled.div`
  padding: 60px 0 30px 0;
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin: 45px 0;
  }
  .grid {
    display: grid;
    padding: 60px 0;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  .card {
    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      margin: 0;
    }
  }
`;
