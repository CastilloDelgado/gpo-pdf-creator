const express = require("express");
const router = express.Router();
const path = require("path");

const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = require("../fonts");
const ticketStyles = require("../styles/ticketStyles");
const reportStyles = require("../styles/reportStyles");
// const { liquidacionPortatilContent } = require("../templates/ticketContent");
const { content } = require("../templates/ticketContent");
const { estacionarioContent } = require("../templates/liquidacionEstacionario");
const {
  prenominaContent,
} = require("../templates/liquidacionEstacionarioTemplate");

const {
  createLiquidacionEstacionario,
  createPrenominaEstacionario,
} = require("../actions/estacionario/estacionario_liquidacion.js");

// TICKET SETTINGS
let liquidacionPortatilDefinition = {
  content: content,
  styles: ticketStyles,
  pageSize: { width: 300, height: 1000 },
};

// FULL SIZE REPORT SETTINGS
let liquidacionEstacionarioDefinition = {
  content: estacionarioContent,
  styles: reportStyles,
};

// FULL SIZE REPORT SETTINGS
let prenominaEstacionarioDefinition = {
  content: prenominaContent,
  styles: reportStyles,
};

router.get("/estacionario/liquidacion", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(liquidacionEstacionarioDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/estacionario-liquidacion.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

router.get("/estacionario/prenomina", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(prenominaEstacionarioDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/estacionario-prenomina.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

router.get("/portatil/liquidacion", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(liquidacionPortatilDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/portatil-liquidacion.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

// SERVICIOS QUE RETORNAN EL ARCHIVO

// Servicio para Liquidación Tanque Estacionario
router.get("/api/v1/estacionario/liquidacion", createLiquidacionEstacionario);

// Servicio para Prenomina Tanque Estacionario
router.get("/api/v1/estacionario/prenomina", createPrenominaEstacionario);

router.get("/new/portatil/liquidacion", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(liquidacionPortatilDefinition);
  pdfDoc.pipe(fs.createWriteStream("./src/routes/portatil-liquidacion.pdf"));
  pdfDoc.end();
  // res.json({ message: "Reporte creado con exito!" });

  setTimeout(() => {
    const options = {
      root: path.join(__dirname),
    };

    var fileName = "portatil-liquidacion.pdf";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log("Sent:", fileName);
      }
    });
  }, 1000);
});

module.exports = router;
