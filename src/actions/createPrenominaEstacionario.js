const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("../fonts");
const {
  prenominaContent,
} = require("../templates/prenominas/prenominaEstacionario");

const reportStyles = require("../styles/reportStyles");

let prenominaEstacionarioDefinition = {
  content: prenominaContent,
  styles: reportStyles,
};

const fileName = "prenomina_estacionario.pdf";

const createPrenominaEstacionario = (req, res, next) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(prenominaEstacionarioDefinition);
  pdfDoc.pipe(fs.createWriteStream(`./src/temporal_files/${fileName}`));
  pdfDoc.end();

  setTimeout(() => {
    const options = {
      root: path.join(__dirname, "../temporal_files"),
    };

    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log("Send:", fileName);
      }
    });
  }, 1000);
};

module.exports = createPrenominaEstacionario;
