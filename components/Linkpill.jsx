import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkPillStyles = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  border: 1px solid var(--blue);
  border-radius: 5px;
  padding: 30px 16px;
  cursor: pointer;
  color: var(--blue);
  transition: 0.15s ease-in-out;
  letter-spacing: 0.08px;
  &:hover {
    transform: scale(1.1);
    box-shadow: var(--bs);
    background: var(--blue);
    color: white;
  }
`;

export default function Linkpill({ name, url }) {
  return (
    <LinkPillStyles href={url} className="button--secondary" target="_blank">
      <span className="text">{name}</span>
      <span className="icon-arrow" />
    </LinkPillStyles>
  );
}

Linkpill.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
