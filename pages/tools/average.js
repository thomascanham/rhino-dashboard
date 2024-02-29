// TO DO:
// Save the current weights into local storage so you can come off the page and back
// If we do that we need a clear button that can clear it

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import generateRandomId from '../../lib/generateRandomId';
import AverageResults from '../../components/tools/AverageResults';

const Wrapper = styled.div`
  padding-top: 30px;
  color: #2b2b2b;
  h1 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 30px;
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
      <Grid>
        <div>
          {inputs.length ? (
            inputs.map((item) => <li key={item.id}>{item.weight}</li>)
          ) : (
            <p>No weights entered</p>
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
        </div>
      </Grid>
    </Wrapper>
  );
}
