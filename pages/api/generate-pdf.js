import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userInput } = req.body;

    // load in the existing PDF template
    const templateBytes = fs.readFileSync('templates/deliverNote.pdf');

    const pdfDoc = await PDFDocument.load(templateBytes);

    // Replace placeholder text in the document
    const templateText = pdfDoc.getForm();
    const modifiedText = templateText.set(userInput);

    const testing = templateText.createTextField

    pdfDoc.setText(modifiedText);

    // save the modified pdf document
    const modifiedPdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachement; filename="delivery-note.pdf'
    );
    res.status(200).send(modifiedPdfBytes);
  } else {
    res.status(405).end(); // method not allowed
  }
}
