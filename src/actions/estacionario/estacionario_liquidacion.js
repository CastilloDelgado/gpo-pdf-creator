const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = require("../../fonts.js");
const {
  estacionarioContent,
} = require("../../templates/liquidacionEstacionario");
const {
  prenominaContent,
} = require("../../templates/liquidacionEstacionarioTemplate");

const reportStyles = require("../../styles/reportStyles.js");

// FULL SIZE REPORT SETTINGS

let liquidacionEstacionarioDefinition = async (sales_time, empleado_rfc) => ({
  content: await estacionarioContent(sales_time, empleado_rfc),
  styles: reportStyles,
});

// FULL SIZE REPORT SETTINGS
let prenominaEstacionarioDefinition = {
  content: prenominaContent,
  styles: reportStyles,
};

const tempFilePath = path.join(__dirname, "..", "..", "..", "temporal_files");

// Function called by /new/estacionario/liquidacion.
// The function creates the "Liquidación" format

module.exports = {
  createLiquidacionEstacionario: async (req, res) => {
    const sales_time = req.param("sales_time");
    const empleado_rfc = req.param("empleado_rfc");
    const printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(
      await liquidacionEstacionarioDefinition(sales_time, empleado_rfc)
    );
    pdfDoc.pipe(
      fs.createWriteStream(`${tempFilePath}/estacionario-liquidacion.pdf`)
    );
    pdfDoc.end();
    // res.json({ message: "Reporte creado con exito!" });

    setTimeout(() => {
      const options = {
        root: tempFilePath,
      };

      var fileName = "estacionario-liquidacion.pdf";
      res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Send:", fileName);
        }
      });
    }, 1000);
  },

  createPrenominaEstacionario: (req, res) => {
    const printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(prenominaEstacionarioDefinition);
    pdfDoc.pipe(
      fs.createWriteStream(`${tempFilePath}/estacionario-prenomina.pdf`)
    );
    pdfDoc.end();

    setTimeout(() => {
      const options = {
        root: tempFilePath,
      };

      var fileName = "estacionario-prenomina.pdf";
      res.sendFile(fileName, options, function (err) {
        if (err) {
          next(err);
        } else {
          console.log("Send:", fileName);
        }
      });
    }, 1000);
  },
};
