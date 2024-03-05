/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// TO DO:
// Save the current weights into local storage so you can come off the page and back
// If we do that we need a clear button that can clear it

import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import generateRandomId from '../../lib/generateRandomId';
import AverageResults from '../../components/tools/AverageResults';
import formatNumber from '../../lib/formatNumber';
import SEO from '../../components/SEO';

const Wrapper = styled.div`
  padding-top: 30px;
  color: #2b2b2b;
  h1 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 30px;
  }
  .more-info {
    font-size: 12px;
    color: #2b2b2b;
    opacity: 75%;
    padding-top: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  .clear-inputs-button {
    padding: 8px 16px;
    margin: 15px 15px 0 0;
    font-size: 14px;
    outline: 1px solid var(--blue);
    border-radius: 5px;
    color: #2b2b2b;
    transition: 0.1s ease-in-out;
    &:hover {
      background-color: var(--blue);
      color: white;
    }
  }
  li {
    max-width: 50px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &::marker {
      transition: 0.2s;
    }
    &:hover {
      padding-left: 6px;
    }
  }
  li:hover::marker {
    color: red;
    content: 'X';
    font-weight: 700;
    font-size: 14px;
  }
`;

const Form = styled.form`
  font-family: 'Montserrat', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 15px;
  input {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin-top: 15px;
    padding: 8px 10px;
    color: #2b2b2b;
  }
  input::placeholder {
    opacity: 30%;
  }
  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: var(--blue);
    color: white;
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default function AveragePage() {
  const [inputs, setInputs] = useState([]);

  async function addInputToInputs(userInput) {
    const userInputParsed = parseInt(userInput);
    const newId = generateRandomId();

    const newWeight = {
      weight: userInputParsed,
      id: newId,
    };
    const tempState = [...inputs];
    tempState.push(newWeight);
    await setInputs(tempState);

    localStorage.setItem('weights', JSON.stringify(tempState));
  }

  async function removeInputFromInputs(event) {
    const id = event.currentTarget.dataset.key;
    const newArr = inputs.filter((item) => item.id !== id);
    await setInputs(newArr);

    localStorage.setItem('weights', JSON.stringify(newArr));
  }

  function clearInputs() {
    setInputs([]);
    localStorage.removeItem('weights');
  }

  function getAverageFromInputs() {
    function add(accumulator, currentValue) {
      return accumulator + currentValue.weight;
    }
    const sum = inputs.reduce(add, 0);
    const average = sum / inputs.length;
    return average;
  }

  function getSumFromInputs() {
    return inputs.reduce((acc, current) => acc + current.weight, 0);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await addInputToInputs(event.currentTarget.weight.value);
    event.target.reset();
  }

  useEffect(() => {
    // check for saved stat
    const savedData = JSON.parse(localStorage.getItem('weights'));

    if (savedData) {
      setInputs(savedData);
    }
  }, []);

  const averageOfInputs = getAverageFromInputs() || 0;
  const sumofInputs = getSumFromInputs();

  return (
    <Wrapper className="container">
      <SEO title="Average Calculator" />
      <Grid>
        <div>
          {inputs.length ? (
            inputs.map((item) => (
              <li
                onClick={removeInputFromInputs}
                key={item.id}
                data-key={item.id}
              >
                {formatNumber(item.weight)}
              </li>
            ))
          ) : (
            <p>No Weights entered</p>
          )}
        </div>

        <div>
          <h1>Average Weight Postage Calculator</h1>
          <Form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="weight">
              Enter a weight
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="1234"
                required
                autoFocus="true"
              />
            </label>
            <button type="submit">Add Weight</button>
          </Form>

          <AverageResults
            average={averageOfInputs}
            total={sumofInputs}
            amount={inputs.length}
          />

          <button
            className="clear-inputs-button"
            type="button"
            onClick={clearInputs}
          >
            Clear Weights
          </button>

          <p className="more-info">
            ( You can leave this page and come back and the weights will stay )
          </p>
          <p className="more-info">( Hover over a weight to delete it )</p>
        </div>
      </Grid>
    </Wrapper>
  );
}
