const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("../fonts");
const ticketStyles = require("../styles/ticketStyles");
const {
  content,
} = require("../templates/liquidaciones/liquidacionEstacionario");
const { valueToMoney } = require("./helpers");

const fileName = "liquidacion_estacionario.pdf";

const createLiquidacionEstacionarioContent = (data) => {
  return [
    {
      table: {
        widths: [160, 160, 160],
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
                { text: "ESTACIONARIO\n", style: "bidLabel" },
                {
                  text: "Vence el día: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: data.chofer.fechaVenta + "\n",
                  style: "simpleLabel",
                },
                {
                  text: "N° de ECO: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: data.chofer.numeroEconomicoUnidad + "\n",
                  style: "simpleLabel",
                },
                {
                  text: "Zona: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: data.chofer.zona + "\n",
                  style: "simpleLabel",
                },
                {
                  text: "Fecha de impresión: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: data.fechaImpresion + "\n",
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
                widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
                body: [
                  [
                    {
                      text: "Venta",
                      style: "headerCell",
                      colSpan: 6,
                      alignment: "center",
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                      text: "Comisión",
                      style: "headerCell",
                      colSpan: 4,
                      alignment: "center",
                    },
                    {},
                    {},
                    {},
                    {
                      text: "Bono",
                      style: "headerCell",
                      colSpan: 1,
                      alignment: "center",
                    },
                  ],
                  [
                    "Tipo",
                    "Lts",
                    "ANT",
                    "ACT",
                    "T.Lts",
                    "Puntos",
                    "Lts",
                    "ANT",
                    "P.Día (*)",
                    "Total",
                    "Lts",
                  ],
                  ...data.chofer.venta.map((element) => [
                    element.nombre,
                    ...Object.values(element.venta),
                    ...Object.values(element.comision),
                    element.ltsBono,
                  ]),
                ],
              },
            },
          ],

          [
            {
              text: [{ text: "Acumulado\n", style: "simpleBoldLabel" }],
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
                widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
                body: [
                  [
                    {
                      text: "Venta",
                      style: "headerCell",
                      colSpan: 6,
                      alignment: "center",
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                      text: "Comisión",
                      style: "headerCell",
                      colSpan: 4,
                      alignment: "center",
                    },
                    {},
                    {},
                    {},
                    {
                      text: "Bono",
                      style: "headerCell",
                      colSpan: 1,
                      alignment: "center",
                    },
                  ],
                  [
                    "Tipo",
                    "Lts",
                    "ANT",
                    "ACT",
                    "T.Lts",
                    "Puntos",
                    "Lts",
                    "ANT",
                    "P.Día (*)",
                    "Total",
                    "Lts",
                  ],
                  ...data.chofer.acumulado.map((element) => [
                    element.nombre,
                    ...Object.values(element.venta),
                    ...Object.values(element.comision),
                    element.ltsBono,
                  ]),
                ],
              },
            },
          ],
          [
            {
              text: [
                { text: "Tarifa para comisiones\n", style: "simpleBoldLabel" },
              ],
              border: [false, false, false, false],
              colSpan: 2,
            },
            {},
            {
              text: [
                {
                  text: "Créditos / Días laborados \n",
                  style: "simpleBoldLabel",
                },
              ],
              border: [false, false, false, false],
            },
          ],
          [
            {
              text: [{ text: "Tarifa por litro\n", style: "simpleLabel" }],
              border: [false, false, false, false],
            },
            {
              text: [{ text: "Bono\n", style: "simpleLabel" }],
              border: [false, false, false, false],
            },
            {
              text: [{ text: "", style: "simpleLabel" }],
              border: [false, false, false, false],
            },
          ],

          [
            {
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                widths: [40, 40, 40],
                body: [
                  [
                    {
                      text: "Tipo",
                      style: "headerCell",
                      alignment: "center",
                    },

                    {
                      text: "Comisión",
                      style: "headerCell",
                      alignment: "center",
                    },

                    {
                      text: "P/Bono",
                      style: "headerCell",
                      alignment: "center",
                    },
                  ],
                  ...data.chofer.tarifasComisiones.tarifaLitros.map(() => [
                    0, 0, 0,
                  ]),
                ],
              },
            },
            [
              {
                border: [false, false, false, false],
                style: "simpleTable",
                table: {
                  widths: [64, 64],
                  body: [
                    [
                      {
                        text: "L. Superior",
                        style: "headerCell",
                        alignment: "center",
                      },

                      {
                        text: "Importe",
                        style: "headerCell",
                        alignment: "center",
                      },
                    ],
                    ...data.chofer.tarifasComisiones.bono.map((element) => [
                      element.limitSuperior,
                      valueToMoney(element.importe),
                    ]),
                  ],
                },
              },
              {
                text: [{ text: "Remanente\n", style: "simpleLabel" }],
                border: [false, false, false, false],
              },
              {
                border: [false, false, false, false],
                style: "simpleTable",
                table: {
                  widths: [64, 64],
                  body: [
                    [
                      {
                        text: "L. Superior",
                        style: "headerCell",
                        alignment: "center",
                      },

                      {
                        text: "Importe",
                        style: "headerCell",
                        alignment: "center",
                      },
                    ],
                    ...data.chofer.tarifasComisiones.remanentes.map(
                      (element) => [
                        element.limitSuperior,
                        valueToMoney(element.importe),
                      ]
                    ),
                  ],
                },
              },
            ],

            [
              {
                border: [false, false, false, false],
                style: "simpleTable",
                table: {
                  widths: [40, 40, 40],
                  body: [
                    [
                      {
                        text: "",
                        style: "headerCell",
                        alignment: "center",
                      },

                      {
                        text: "Hoy",
                        style: "headerCell",
                        alignment: "center",
                      },
                      {
                        text: "ACUM",
                        style: "headerCell",
                        alignment: "center",
                      },
                    ],
                    ...data.chofer.creditosDiasLaborados.map((element) => [
                      element.nombre,
                      valueToMoney(element.hoy),
                      valueToMoney(element.acumulado),
                    ]),
                  ],
                },
              },
              {
                text: [{ text: "Remanente\n", style: "simpleLabel" }],
                border: [false, false, false, false],
              },
              {
                border: [false, false, false, false],
                style: "simpleTable",
                table: {
                  widths: [64, 64],
                  body: [
                    [
                      {
                        text: "",
                        style: "headerCell",
                        alignment: "center",
                      },

                      {
                        text: "Días",
                        style: "headerCell",
                        alignment: "center",
                      },
                    ],
                    ...Object.entries(data.chofer.dias),
                  ],
                },
              },
            ],
          ],
          [
            {
              text: [
                {
                  text: "\n\n\n\n\n\n_________________________________________________",
                  style: "simpleLabel",
                },
              ],
              border: [false, false, false, false],
            },
            {
              text: [{ text: "\n", style: "simpleLabel" }],
              border: [false, false, false, false],
            },
            {
              text: [
                {
                  text: "\n\n\n\n\n\n_________________________________________________",
                  style: "simpleLabel",
                },
              ],
              border: [false, false, false, false],
            },
          ],
          [
            {
              text: [
                {
                  text: "Firma del Chofer - " + data.chofer.nombreEmpleado,
                  style: "simpleLabel",
                  alignment: "center",
                },
              ],
              border: [false, false, false, false],
            },
            {
              text: [{ text: "\n", style: "simpleLabel" }],
              border: [false, false, false, false],
            },
            {
              text: [
                {
                  text: "Firma del Ayudante - " + data.ayudante.nombreEmpleado,
                  style: "simpleLabel",
                  alignment: "center",
                },
              ],
              border: [false, false, false, false],
            },
          ],
        ],
      },
    },
  ];
};

const createLiquidacionEstacionario = (req, res, next, data) => {
  try {
    const printer = new PdfPrinter(fonts);
    const contentCreated = createLiquidacionEstacionarioContent(data);

    // TICKET SETTINGS
    let liquidacionPortatilDefinition = {
      content: contentCreated,
      styles: ticketStyles,
      pageSize: { width: 600, height: 600 },
    };

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

module.exports = createLiquidacionEstacionario;
