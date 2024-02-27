import styled from 'styled-components';

export default function Introduction() {
  return (
    <IntroStyles className="container" id="introduction">
      <h2>Introduction</h2>
      <p>
        Welcome to Rhino UK's Boot Liner Buyer's Guide, your comprehensive
        resource for understanding the essential role of boot liners in
        maintaining your vehicle's cleanliness and value.
      </p>
      <p>
        Whether you're a seasoned car owner or a new driver, this guide will
        walk you through the benefits, options, and practical aspects of
        choosing the perfect boot liner for your vehicle. As a trusted name in
        automotive accessories, Rhino UK is committed to providing you with the
        information you need to make an informed decision.
      </p>

      <p>
        Let's dive in and explore how our boot liners can elevate your driving
        experience while keeping your vehicle's interior protected and stylish
      </p>
    </IntroStyles>
  );
}

const IntroStyles = styled.div`
  padding: 60px 0 30px 0;
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin: 45px 0;
  }
`;
