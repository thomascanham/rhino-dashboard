import React from 'react';
import styled from 'styled-components';
import Linkpill from './Linkpill';
import links from '../data/links';

const LinksStyled = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
  }
`;

export default function Links() {
  console.log(links);
  return (
    <LinksStyled>
      <div className="container grid">
        {links.map((link) => (
          <Linkpill
            key={link.id}
            name={link.name}
            url={link.url}
            Icon={link.Icon}
          />
        ))}
      </div>
    </LinksStyled>
  );
}
