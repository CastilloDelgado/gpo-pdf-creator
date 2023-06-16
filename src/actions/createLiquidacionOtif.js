const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("../fonts");
const ticketStyles = require("../styles/ticketStyles");
const { content } = require("../templates/liquidaciones/liquidacionOtif");

// TICKET SETTINGS
let liquidacionPortatilDefinition = {
  content: content,
  styles: ticketStyles,
  pageSize: { width: 300, height: 800 },
};

const fileName = "liquidacion_otif.pdf";

const createLiquidacionOtif = (req, res, next) => {
  try {
    const printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(liquidacionPortatilDefinition);
    pdfDoc.pipe(fs.createWriteStream(`./src/temporal_files/${fileName}`));
    pdfDoc.end();

    setTimeout(() => {
      const options = {
        root: path.join(__dirname, "../temporal_files"),
      };

      res.sendFile(fileName, options, function (err) {
        if (err) {
          res.json(err);
          next(err);
        } else {
          console.log("Sent:", fileName);
        }
      });
    }, 1000);
  } catch (error) {
    res.json(error);
  }
};

module.exports = createLiquidacionOtif;
