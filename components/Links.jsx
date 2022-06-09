import React from 'react';
import styled from 'styled-components';
import Linkpill from './Linkpill';
import links from '../data/links';

const LinksStyled = styled.section`
  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default function Links() {
  return (
    <LinksStyled>
      <div className="container grid">
        {links.map((link) => (
          <Linkpill key={link.id} name={link.name} url={link.url} />
        ))}
      </div>
    </LinksStyled>
  );
}
