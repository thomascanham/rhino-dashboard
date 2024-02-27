import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Link from 'next/link';

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
    cursor: pointer;
  }
`;

const logoLink =
  'https://files.ekmcdn.com/rhinouk/resources/design/tinywebsitelogo.png';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container grid">
        <Link href="/">
          <img src={logoLink} alt="Rhino Uk" />
        </Link>
        <h2>{format(new Date(), 'eeee do MMMM yyyy')}</h2>
      </div>
    </HeaderStyles>
  );
}
