// This is the example of the ticker we will print

module.exports = {
  content: [
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
                { text: "LIQUIDACION OTIF\n", style: "bigBoldLabel" },
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
                { text: "PORTATIL\n", style: "bidLabel" },
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

          [
            {
              text: [{ text: "Venta\n", style: "simpleBoldLabel" }],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            {
              text: [{ text: "Venta:\n", style: "simpleLabel" }],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
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
                  ["EFEC/Ventas", "00"],
                  ["Cheques", "00"],
                  ["Total liquidaciones", "00"],
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
            {},
            {},
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
                widths: [45, 45, 45, 45],
                body: [
                  [
                    {
                      text: "",
                      style: "headerCell",
                    },
                    {
                      text: "Cils Cte",
                      style: "headerCell",
                    },
                    {
                      text: "Nvo",
                      style: "headerCell",
                    },
                    {
                      text: "Com Estimada",
                      style: "headerCell",
                    },
                  ],
                  ["Ac", 0, 0, 0],
                  ["Hoy", 0, 0, 0],
                ],
              },
            },
          ],

          [
            {
              text: [
                { text: "% acumulado para bono:\n", style: "simpleBoldLabel" },
              ],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
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
                widths: [63, 63, 63],
                body: [
                  [
                    {
                      text: "Concepto",
                      style: "headerCell",
                    },
                    {
                      text: "Día",
                      style: "headerCell",
                    },
                    {
                      text: "Acumulado",
                      style: "headerCell",
                    },
                  ],
                  ["ENT TIP/Forma (OTIF)", 0, 0],
                  ["Disciplina", 0, 0],
                  ["Atención", 0, 0],
                ],
              },
            },
          ],
          [
            {
              text: [
                {
                  text: `% Bono = ${0}% +  ${0}% +  ${0}% = ${0}%`,
                  style: "simpleLabel",
                },
              ],
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
                widths: [100, 100],
                body: [
                  [
                    {
                      text: "Vta x pedidos ATM",
                      style: "headerCell",
                    },
                    {
                      text: "",
                      style: "headerCell",
                    },
                  ],
                  ["ENT TIP/Forma (OTIF)", 0],
                ],
              },
            },
          ],
          [
            {
              colSpan: 3,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                widths: [63, 63, 63],
                body: [
                  [
                    {
                      text: "",
                      style: "headerCell",
                    },
                    {
                      text: "Hoy",
                      style: "headerCell",
                    },
                    {
                      text: "Acumulado",
                      style: "headerCell",
                    },
                  ],
                  ["Empleado", 0, 0],
                  ["Flotilla", 0, 0],
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
                  ["Hoy", "$0000.00", "$0000.00", "$0000.00"],
                  ["Acum", "$0000.00", "$0000.00", "$0000.00"],
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
                  ["Días transcurridos", "00"],
                  ["Días trabajados", "00"],
                  ["Días por transcurrir", "00"],
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
            {},
            {},
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
                  ["0000", "0000", "$0000.00"],
                  ["0000", "0000", "$0000.00"],
                  ["0000", "0000", "$0000.00"],
                  ["0000", "0000", "$0000.00"],
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
                  text: `Firma de: \n${"Nombre del Empleado"}`,
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
  ],
};
