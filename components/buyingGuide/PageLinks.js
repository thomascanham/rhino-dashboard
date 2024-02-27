import styled from 'styled-components';

export default function PageLinks() {
  return (
    <div className="container">
      <h4>Content</h4>
      <LinksStyles>
        <li>
          <a href="#introduction">Introduction</a>
        </li>
        <li>
          <a href="#benefits">Benefits of a Boot Liner</a>
        </li>
      </LinksStyles>
    </div>
  );
}

const LinksStyles = styled.ul`
  li {
    display: block;
  }
`;
