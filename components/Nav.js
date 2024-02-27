import styled from 'styled-components';
import Link from 'next/link';

export default function Nav() {
  return (
    <NavStyles>
      <div className="container">
        <NavStyles>
          <Link href="/">Dashboard</Link>
          <Link href="/pricelist">Price List</Link>
          <Link href="/grid">Buyers Guide</Link>
          <Link href="/tools/average">Average Calculator</Link>
        </NavStyles>
      </div>
    </NavStyles>
  );
}

const NavStyles = styled.nav`
  width: 100%;
  background: white;
  border-bottom: 1px solid #ecf0f1;
  transition: all ease-in-out 0.03s;
  a {
    padding: 16px 14px;
    display: inline-block;
    &:hover {
      background-color: #ecf0f1;
    }
  }
`;
