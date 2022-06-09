import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const HeaderStyles = styled.header`
  width: 100vw;
  background: var(--blue);
  padding: 15px 0;
  box-shadow: var(--bs), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  color: white;
  .grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 180px;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container grid">
        <img
          src="https://rhinoukbootlinersltd.co.uk/ekmps/shops/rhinouk/resources/Design/tinywebsitelogo.png"
          alt="Rhino Uk"
        />
        <h2>{format(new Date(), 'eeee Mo MMMM yyyy')}</h2>
      </div>
    </HeaderStyles>
  );
}
