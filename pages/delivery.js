import { useState } from 'react';
import styled from 'styled-components';

export default function Delivery() {
  const [userInput, setUserInput] = useState('');

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'delivery-note.pdf';
      link.click();
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput">
          <input
            type="text"
            name="userInput"
            id="userInput"
            placeholder="Input a string"
            onChange={handleInputChange}
            value={userInput}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const DeliveryStyles = styled.div``;
