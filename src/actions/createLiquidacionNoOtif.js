const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("../fonts");
const ticketStyles = require("../styles/ticketStyles");
const { content } = require("../templates/liquidaciones/liquidacionNoOtif");
const { valueToMoney } = require("./helpers");

const createLiquidacionNoOtifContent = (data) => [
  {
    table: {
      widths: [70, 70, 70],
      border: [false, false, false, false],
      body: [
        /*
         *
         *  HEADER INFO
         *
         */

        [
          {
            text: [
              { text: "LIQUIDACION NO OTIF\n", style: "bigBoldLabel" },
              { text: "GASPAZA MAZATLAN, SIN.\n", style: "bigBoldLabel" },
              {
                text: "Periodo de Nómina: ",
                style: "simpleBoldLabel",
              },
              {
                text: data.chofer.periodoNomina + "\n",
                style: "simpleLabel",
              },
              {
                text: "Chofer: ",
                style: "simpleBoldLabel",
              },
              {
                text: data.chofer.nombreEmpleado + "\n",
                style: "simpleLabel",
              },
              {
                text: "Ayudante: ",
                style: "simpleBoldLabel",
              },
              {
                text: data.ayudante.nombreEmpleado + "\n",
                style: "simpleLabel",
              },
            ],
            border: [false, false, false, false],
            colSpan: 2,
          },
          {},
          {
            text: [
              { text: "PORTATIL\n", style: "bidLabel" },
              {
                text: "Vence el día: ",
                style: "simpleBoldLabel",
              },
              {
                text: data.ayudante.fechaVenta + "\n",
                style: "simpleLabel",
              },
              {
                text: "N° de ECO",
                style: "simpleBoldLabel",
              },
              {
                text: data.ayudante.numeroEconomicoUnidad + "\n",
                style: "simpleLabel",
              },
              {
                text: "Zona: ",
                style: "simpleBoldLabel",
              },
              {
                text: data.ayudante.zona + "\n",
                style: "simpleLabel",
              },
              {
                text: "\n",
              },
            ],
            border: [false, false, false, false],
          },
        ],

        /*
         *
         *  VENTA
         *
         */

        /*
         *
         *  Header
         *
         */

        [
          {
            text: [{ text: "Venta\n", style: "simpleBoldLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        [
          {
            text: [{ text: "Venta:\n", style: "simpleLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],

        /*
         *
         *  Table
         *
         */
        [
          {
            colSpan: 3,
            border: [false, false, false, false],
            style: "simpleTable",
            table: {
              widths: [100, 100],
              body: [
                [
                  {
                    text: "Concepto",
                    style: "headerCell",
                  },
                  {
                    text: "Total",
                    style: "headerCell",
                  },
                ],
                ...data.chofer.ventasPortatil.ventaConceptos.map((element) => [
                  element.concepto,
                  valueToMoney(element.total),
                ]),
              ],
            },
          },
        ],
        [
          {
            text: [{ text: "Ventas y comisiones:\n", style: "simpleLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        [
          {
            colSpan: 3,
            border: [false, false, false, false],
            style: "simpleTable",
            table: {
              widths: [44, 46, 46, 46],
              body: [
                [
                  {
                    text: "Cils",
                    style: "headerCell",
                  },
                  {
                    text: "KCils",
                    style: "headerCell",
                  },
                  {
                    text: "30K",
                    style: "headerCell",
                  },
                  {
                    text: "45K",
                    style: "headerCell",
                  },
                ],
                [
                  "Hoy",
                  data.chofer.ventasComisiones.hoyKcil,
                  data.chofer.ventasComisiones.hoyCbono,
                  data.chofer.ventasComisiones.hoyComision,
                ],
                [
                  "Ac",
                  data.chofer.ventasComisiones.acumKcil,
                  data.chofer.ventasComisiones.acumCbono,
                  data.chofer.ventasComisiones.acumComision,
                ],
              ],
            },
          },
        ],

        [
          {
            text: [{ text: "Acumulado para bono\n", style: "simpleBoldLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        /*
         *
         *  Table
         *
         */
        [
          {
            colSpan: 3,
            border: [false, false, false, false],
            style: "simpleTable",
            table: {
              widths: [100, 100],
              body: [
                [
                  {
                    text: "Concepto",
                    style: "headerCell",
                  },
                  {
                    text: "Total",
                    style: "headerCell",
                  },
                ],
                ["Sobre venta anterio", 0],
                ["Venta acum quincena", 0],
                ["Total", 0],
              ],
            },
          },
        ],

        [
          {
            text: [{ text: "Créditos\n", style: "simpleBoldLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        /*
         *
         *  Table
         *
         */
        [
          {
            colSpan: 3,
            border: [false, false, false, false],
            style: "simpleTable",
            table: {
              widths: [46, 46, 46, 46],
              body: [
                [
                  {
                    text: "",
                    style: "headerCell",
                  },
                  {
                    text: "Faltantes",
                    style: "headerCell",
                  },
                  {
                    text: "Créditos",
                    style: "headerCell",
                  },
                  {
                    text: "Abono",
                    style: "headerCell",
                  },
                ],
                [
                  "Hoy",
                  valueToMoney(data.chofer.creditos.hoyFaltantes),
                  valueToMoney(data.chofer.creditos.hoyCreditos),
                  valueToMoney(data.chofer.creditos.hoyAbono),
                ],
                [
                  "Acum",
                  valueToMoney(data.chofer.creditos.acumFaltantes),
                  valueToMoney(data.chofer.creditos.acumCreditos),
                  valueToMoney(data.chofer.creditos.acumAbono),
                ],
              ],
            },
          },
        ],

        [
          {
            text: [{ text: "Tabulador\n", style: "simpleBoldLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        /*
         *
         *  Table
         *
         */
        [
          {
            colSpan: 3,
            border: [false, false, false, false],
            style: "simpleTable",
            table: {
              widths: [64, 64, 64],
              body: [
                [
                  {
                    text: "L. Inferior",
                    style: "headerCell",
                  },
                  {
                    text: "L. Superior",
                    style: "headerCell",
                  },
                  {
                    text: "Comisión",
                    style: "headerCell",
                  },
                ],
                ...data.chofer.comisionRange.map((element) => [
                  element.limiteInferior,
                  element.limiteSuperior,
                  valueToMoney(element.comision),
                ]),
              ],
            },
          },
        ],

        [
          {
            text: [{ text: "Conteo de días\n", style: "simpleBoldLabel" }],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        /*
         *
         *  Table
         *
         */
        [
          {
            colSpan: 3,
            border: [false, false, false, false],
            style: "simpleTable",
            table: {
              widths: [100, 100],
              body: [
                [
                  {
                    text: "Concepto",
                    style: "headerCell",
                  },
                  {
                    text: "Cantidad",
                    style: "headerCell",
                  },
                ],
                ["Días transcurridos", data.chofer.conteoDias.transcurridos],
                ["Días trabajados", data.chofer.conteoDias.trabajados],
                ["Días x transcurrir", data.chofer.conteoDias.porTranscurrir],
              ],
            },
          },
        ],
        [
          {
            text: [
              {
                text: "\n\n\n\n\n\n_____________________________________________________________________",
                style: "simpleBoldLabel",
              },
            ],
            border: [false, false, false, false],
            colSpan: 3,
          },
        ],
        [
          {
            text: [
              {
                text: "",
                style: "simpleBoldLabel",
              },
            ],
            border: [false, false, false, false],
          },
          {
            text: [
              {
                text: `Firma de: ${data.chofer.nombreEmpleado}`,
                style: "simpleBoldLabel",
              },
            ],
            border: [false, false, false, false],
          },
          {
            text: [
              {
                text: "",
                style: "simpleBoldLabel",
              },
            ],
            border: [false, false, false, false],
          },
        ],
      ],
    },
  },
];

const fileName = "liquidacion_no_otif.pdf";

const createLiquidacionNoOtif = (req, res, next, data) => {
  try {
    const contentCreated = createLiquidacionNoOtifContent(data);
    // TICKET SETTINGS
    let liquidacionPortatilDefinition = {
      content: contentCreated,
      styles: ticketStyles,
      pageSize: { width: 300, height: 1400 },
    };

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
    console.log(error);
    res.json(error);
  }
};

module.exports = createLiquidacionNoOtif;
