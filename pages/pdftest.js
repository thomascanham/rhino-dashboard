/* eslint-disable new-cap */
import { useState } from 'react';
import jsPDF from 'jspdf';

export default function Test() {
  const [userInput, setUserInput] = useState('');
  const templateUrl =
    'https://files.ekmcdn.com/rhinouk/resources/other/smtdeliveynote.pdf';

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // load in the pdf
    const pdfTemplate = await fetch(templateUrl);
    const pdfTemplateBytes = await pdfTemplate.arrayBuffer();
    const pdfTemplateBlob = new Blob([pdfTemplateBytes], {
      type: 'application/pdf',
    });

    // load a jspdf instance
    const pdfDoc = new jsPDF();
    const pdfBytes = await pdfDoc.output('arraybuffer');

    // replace placeholders
    const textDecoder = new TextDecoder();
    const templateText = textDecoder.decode(pdfTemplateBytes);
    const modifiedText = templateText.replace('{templateText}', userInput);

    const modifiedPdfBlob = new Blob([modifiedText], {
      type: 'application/pdf',
    });

    const url = URL.createObjectURL(modifiedPdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'delivery-note-1.pdf';
    link.click();
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="input">
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Input here"
            value={userInput}
            onChange={handleChange}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
