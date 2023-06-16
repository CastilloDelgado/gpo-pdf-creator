// This is the example of the ticker we will print

module.exports = {
  content: [
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
                  text: "00/00/0000 al 00/00/0000\n",
                  style: "simpleLabel",
                },
                {
                  text: "Chofer: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "Lorem ipsum dolor sit amet.\n",
                  style: "simpleLabel",
                },
                {
                  text: "Ayudante: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "Lorem ipsum dolor sit amet.\n",
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
                  text: "00/00/0000\n",
                  style: "simpleLabel",
                },
                {
                  text: "N° de ECO",
                  style: "simpleBoldLabel",
                },
                {
                  text: "000-000\n",
                  style: "simpleLabel",
                },
                {
                  text: "Zona: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "0000\n",
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
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
              },
            },
          ],

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
                widths: [48, 48, 48, 48, 48, 48, 48, 48, 52],
                body: [
                  [
                    {
                      text: "Venta",
                      style: "headerCell",
                      colSpan: 5,
                      alignment: "center",
                    },
                    {},
                    {},
                    {},
                    {},
                    {
                      text: "Comisión",
                      style: "headerCell",
                      colSpan: 3,
                      alignment: "center",
                    },
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
                  ],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                  [0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0],
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
                    [0, 0],
                    [0, 0],
                    [0, 0],
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
                    [0, 0],
                    [0, 0],
                    [0, 0],
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
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
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
                    [0, 0],
                    [0, 0],
                    [0, 0],
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
                  text: "Firma del Chofer",
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
                  text: "Firma del Ayudante",
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
  ],
};
