import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewLinkPill = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Montserrat', 'sans-serif';
  outline: none;
  border: 1px solid var(--blue);
  border-radius: 5px;
  padding: 30px 16px;
  cursor: pointer;
  color: var(--blue);
  transition: 0.15s ease-in-out;
  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: var(--bs);
    background: var(--blue);
    color: white;
  }
`;

const LinkpillStyles = styled.a`
  margin: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey);
  color: var(--blue);
  width: 160px;
  height: 44px;
  border-radius: 22px;
  padding: 0 0 0 21px;
  line-height: 44px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  /* &:first-child {
    margin-left: 0;
  } */
  &:before {
    content: '';
    position: absolute;
    left: 21px;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--blue);
    transform: scale(0);
    opacity: 0;
    transition: all 0.33s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .text {
    white-space: no-wrap;
    font-size: 14px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .icon-arrow {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 20px;
    border-radius: 50%;
    background-color: var(--blue);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:after {
      content: '';
      display: inline-block;
      background-color: var(--blue);
      position: absolute;
      left: 100%;
      width: 20px;
      height: 2px;
      top: 4px;
    }
  }
  &:hover {
    animation: icon-arrow-off 0.33s cubic-bezier(0, 0, 0.2, 1);
    &:before {
      transform: scale(1);
      opacity: 1;
    }
    .text {
      transform: translateX(21px);
    }
    .icon-arrow {
      transform: translate(30px) scale(0.8);
      opacity: 0;
    }
  }
  @keyframes icon-arrow-off {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default function Linkpill({ name, url }) {
  return (
    <NewLinkPill href={url} className="button--secondary" target="_blank">
      <span className="text">{name}</span>
      <span className="icon-arrow" />
    </NewLinkPill>
  );
}

Linkpill.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
