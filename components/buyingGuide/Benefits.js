import styled from 'styled-components';

export default function BuyingGuideBenefits() {
  return (
    <BenefitsStyles className="container" id="benefits">
      <h2>Benefits of a Boot Liner</h2>
      <p>
        Using a boot liner from Rhino UK provides a multitude of benefits. It
        shields your vehicle's boot or cargo area from dirt, spills, and wear,
        preserving its resale value. Maintenance becomes a breeze, and the
        liners are tailored for a perfect fit. Protect your investment while
        enhancing your vehicle's functionality with a Rhino UK boot liner
      </p>
      <p>
        Moreover, maintaining your boot liner is effortless, thanks to its
        tailored fit. These liners are designed to match your vehicle precisely.
        So, not only do you safeguard your investment, but you also enhance your
        vehicle's functionality with a Rhino UK boot liner. It's a win-win for
        protection and style.
      </p>
    </BenefitsStyles>
  );
}

const BenefitsStyles = styled.div`
  padding: 60px 0 30px 0;
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin: 30px 0;
  }
`;
