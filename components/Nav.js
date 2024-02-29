import styled from 'styled-components';
import Link from 'next/link';
import { IoIosHome, IoIosCalculator } from 'react-icons/io';

export default function Nav() {
  return (
    <NavStyles>
      <div className="container">
        <NavStyles>
          <Link href="/">
            <span>
              <IoIosHome />
              Home
            </span>
          </Link>
          <Link href="/tools/average">
            <span>
              <IoIosCalculator />
              Average Calculator
            </span>
          </Link>
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
  svg {
    height: 14px;
    margin-right: 5px;
  }
  a,
  span {
    padding: 14px 16px;
    display: inline-block;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    &:hover {
      color: var(--blue);
    }
    &:first-of-type {
      padding-left: 0;
    }
  }
`;
