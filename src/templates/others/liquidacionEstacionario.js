// const data = require("../data");
var data = {};
const axios = require("axios");
const { token } = require("../constants");

// Add token manually
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const contentCreator = async (sales_time, empleado_rfc) => {
  try {
    const request = await axios.get(
      // "http://localhost:8095/api/sales/settlement?sales_time=2022-06-08&empleado_rfc=ZAAG750119APA"
      `http://localhost:8095/api/sales/settlement?sales_time=${sales_time}&empleado_rfc=${empleado_rfc}`
    );

    data = request.data;

    const currentTime = new Date();
    const currentTimeFormatted = `${
      currentTime.getDate() < 10 ? "0" : ""
    }${currentTime.getDate()}-${currentTime.getMonth() + 1 < 10 ? "0" : ""}${
      currentTime.getMonth() + 1
    }-${currentTime.getFullYear()} ${
      currentTime.getHours() < 10 ? "0" : ""
    }${currentTime.getHours()}:${
      currentTime.getMinutes() < 10 ? "0" : ""
    }${currentTime.getMinutes()}:${
      currentTime.getSeconds() < 10 ? "" : ""
    }${currentTime.getSeconds()}`;

    const tarifaLitros = (tipoEmpleado) => {
      const table = [
        [
          { text: "Tipo", style: "headerCell", alignment: "center" },
          { text: "Comisión", style: "headerCell", alignment: "center" },
          { text: "P/Bono", style: "headerCell", alignment: "center" },
        ],
      ];

      const tableData = data.result[
        tipoEmpleado
      ].tarifasComisiones.tarifaLitros.forEach((row) => {
        table.push([
          { text: row.nombre, style: "commonCell" },
          { text: `$ ${row.comision}`, style: "commonCell" },
          { text: row.pbono, style: "commonCell" },
        ]);
      });

      table.concat(tableData);

      return table;
    };

    const bono = (tipoEmpleado) => {
      const table = [
        [
          { text: "L. Superior", style: "headerCell", alignment: "center" },
          { text: "Importe", style: "headerCell", alignment: "center" },
        ],
      ];

      const tableData = data.result[
        tipoEmpleado
      ].tarifasComisiones.bono.forEach((row) => {
        table.push([
          { text: row.limitSuperior, style: "commonCell" },
          { text: `$ ${row.importe}`, style: "commonCell" },
        ]);
      });

      table.concat(tableData);

      return table;
    };

    const remanentes = (tipoEmpleado) => {
      const table = [
        [
          { text: "L. Superior", style: "headerCell", alignment: "center" },
          { text: "Importe", style: "headerCell", alignment: "center" },
        ],
      ];

      const tableData = data.result[
        tipoEmpleado
      ].tarifasComisiones.remanentes.forEach((row) => {
        table.push([
          { text: row.limitSuperior, style: "commonCell" },
          { text: `$ ${row.importe}`, style: "commonCell" },
        ]);
      });

      table.concat(tableData);

      return table;
    };

    const venta = (tipoEmpleado) => {
      const table = [
        [
          {
            text: "Ventas",
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
          { text: "Bono", style: "headerCell", alignment: "center" },
        ],
        [
          {
            text: "Tipo",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Lts",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "ANT",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "ACT",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "T. Lts",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Puntos",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Lts",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "ANT",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "P. Día (*)",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Total",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Lts",
            style: "subheaderCell",
            alignment: "center",
          },
        ],
      ];

      const tableData = data.result[tipoEmpleado].venta.forEach((row) => {
        table.push([
          { text: `${row.nombre}`, style: "commonCell" },
          { text: `${row.venta.litros}`, style: "commonCell" },
          { text: `${row.venta.ptsPagadosAnt}`, style: "commonCell" },
          { text: `${row.venta.ptsPagadosAct}`, style: "commonCell" },
          { text: `${row.venta.totalLitros}`, style: "commonCell" },
          { text: `${row.venta.puntos}`, style: "commonCell" },
          { text: `${row.comision.litros.toFixed(2)}`, style: "commonCell" },
          { text: `${row.comision.ptsAnt}`, style: "commonCell" },
          { text: `${row.comision.ptsDia}`, style: "commonCell" },
          { text: `${row.comision.total}`, style: "commonCell" },
          { text: `${row.ltsBono}`, style: "commonCell" },
        ]);
      });

      table.concat(tableData);

      return table;
    };

    const acumulado = (tipoEmpleado) => {
      const table = [
        [
          {
            text: "Ventas",
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
          { text: "Bono", style: "headerCell", alignment: "center" },
        ],
        [
          {
            text: "Tipo",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Lts",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "ACT",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "T. Lts",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Puntos",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Lts",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "P. Día (*)",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Total",
            style: "subheaderCell",
            alignment: "center",
          },
          {
            text: "Lts",
            style: "subheaderCell",
            alignment: "center",
          },
        ],
      ];

      const tableData = data.result[tipoEmpleado].acumulado.forEach((row) => {
        table.push([
          { text: `${row.nombre}`, style: "commonCell" },
          { text: `${row.venta.litros}`, style: "commonCell" },
          { text: `${row.venta.ptsPagadosAct}`, style: "commonCell" },
          { text: `${row.venta.totalLitros}`, style: "commonCell" },
          { text: `${row.venta.puntos}`, style: "commonCell" },
          { text: `${row.comision.litros.toFixed(2)}`, style: "commonCell" },
          { text: `${row.comision.ptsDia}`, style: "commonCell" },
          { text: `${row.comision.total.toFixed(2)}`, style: "commonCell" },
          { text: `${row.ltsBono.toFixed(2)}`, style: "commonCell" },
        ]);
      });

      table.concat(tableData);

      return table;
    };

    const creditosDiasLaborados = (tipoEmpleado) => {
      const table = [
        [
          { text: "", style: "headerCell", alignment: "center" },
          { text: "Hoy", style: "headerCell", alignment: "center" },
          { text: "ACUM", style: "headerCell", alignment: "center" },
        ],
      ];

      const tableData = data.result[tipoEmpleado].creditosDiasLaborados.forEach(
        (row) => {
          table.push([
            { text: `${row.nombre}`, style: "commonCell" },
            { text: `$ ${row.hoy}`, style: "commonCell" },
            { text: `$ ${row.acumulado}`, style: "commonCell" },
          ]);
        }
      );

      table.concat(tableData);

      return table;
    };

    let contentBody = [];
    const types = ["chofer", "ayudante"];

    types.forEach((type, index) => {
      contentBody.push({
        // HEADER
        columns: [
          [
            {
              text: `${data.result[type].planta}`,
              style: "bigBoldLabel",
            },
            {
              text: [
                {
                  text: "Periodo de Nómina: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${data.result[type].periodoNomina}`,
                  style: "simpleLabel",
                },
              ],
            },

            {
              text: [
                {
                  text: "Chofer: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${data.result.chofer.nombreEmpleado}`,
                  style: "simpleLabel",
                },
              ],
            },
            {
              text: [
                {
                  text: "Ayudante: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${data.result.ayudante.nombreEmpleado}`,
                  style: "simpleLabel",
                },
              ],
            },
          ],

          [
            {
              text: `${data.result[type].tipoServicio}\n`,
              style: "bigLabel",
            },
            {
              text: [
                {
                  text: "Venta del día: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${data.result[type].fechaVenta}\n`,
                  style: "simpleLabel",
                },
              ],
            },
            {
              text: [
                {
                  text: "N° ECO: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${data.result[type].numeroEconomicoUnidad}\n`,
                  style: "simpleLabel",
                },
              ],
            },
            {
              text: [
                {
                  text: "Zona: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${data.result[type].zona}\n`,
                  style: "simpleLabel",
                },
              ],
            },
            {
              text: [
                {
                  text: "Fecha de impresión: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: `${currentTimeFormatted}\n`,
                  style: "simpleLabel",
                },
              ],
            },
          ],
        ],
      });

      contentBody.push({ text: "\n" });

      contentBody.push({
        columns: [
          [
            // SALES TABLE
            {
              text: "Venta:",
              style: "simpleBoldLabel",
            },
            {
              table: {
                body: venta(type),
              },
            },
          ],
          { text: "", width: 5 },
          [
            // ACUMMULATED TABLE
            {
              text: "Acumulado:",
              style: "simpleBoldLabel",
            },
            {
              table: {
                body: acumulado(type),
              },
            },
          ],
        ],
      });

      contentBody.push({
        columns: [
          [
            {
              text: "\nTarifas para comisiones:",
              style: "simpleBoldLabel",
            },
            {
              text: "Tarifa por litro:\n\n",
              style: "simpleLabel",
            },
            {
              table: {
                body: tarifaLitros(type),
              },
            },
          ],
          [
            {
              text: "\nCréditos/Días Laborados:\n\n",
              style: "simpleBoldLabel",
            },
            {
              table: {
                body: creditosDiasLaborados(type),
              },
            },

            { text: "\n", style: "simpleLabel" },
            {
              table: {
                body: [
                  [
                    { text: "", style: "headerCell" },
                    { text: "Días", style: "headerCell" },
                  ],
                  [
                    {
                      text: "Trascurridos",
                      style: "commonCell",
                    },
                    {
                      text: `${data.result[type].dias.transcurridos}`,
                      style: "commonCell",
                    },
                  ],
                  [
                    { text: "Trabajados", style: "commonCell" },
                    {
                      text: `${data.result[type].dias.trabajados}`,
                      style: "commonCell",
                    },
                  ],
                  [
                    {
                      text: "Por trascurrir",
                      style: "commonCell",
                    },
                    {
                      text: `${data.result[type].dias.porTranscurrir}`,
                      style: "commonCell",
                    },
                  ],
                ],
              },
            },
          ],
          [
            {
              text: "\nBono:\n\n",
              style: "simpleBoldLabel",
            },
            {
              table: {
                body: bono(type),
              },
            },
            {
              text: "\nRemanente:\n\n",
              style: "simpleBoldLabel",
            },
            {
              table: {
                body: remanentes(type),
              },
            },
          ],
          [
            // SYMBOLS
            {
              text: "\n",
              style: "simpleBoldLabel",
            },
            {
              text: "Puntos:\n\n",
              style: "simpleBoldLabel",
            },
            {
              text: "ACT: Comisión pagada al momento que se otorgaron.",
              style: "simpleLabel",
            },
            {
              text: "ANT: Comisión pendiente de pago.",
              style: "simpleLabel",
            },
            {
              text: "(*): Pago de comisión triple.",
              style: "simpleLabel",
            },
          ],
        ],
      });

      contentBody.push({ text: "\n\n" });

      contentBody.push({
        columns: [
          [
            {
              text: "________________________________________________",
              style: "bigLabel",
              alignment: "center",
            },
            {
              text: [
                { text: "Chofer: ", style: "simpleBoldLabel" },
                {
                  text: `${data.result[type].nombreEmpleado}`,
                  style: "simpleLabel",
                },
              ],
              alignment: "center",
            },
          ],
          [
            {
              text: "________________________________________________",
              style: "bigLabel",
              alignment: "center",
            },
            {
              text: [
                { text: "Cajero: ", style: "simpleBoldLabel" },
                {
                  text: `${data.result[type].nombreCajera}`,
                  style: "simpleLabel",
                },
              ],
              alignment: "center",
            },
          ],
        ],
      });

      if (index + 1 < types.length) {
        contentBody.push({ text: "\n" });
      }
    });

    console.log(contentBody);
    return contentBody;
  } catch (e) {
    console.log(e);
  }
};

/*
 *
 *  CONTENT
 *
 */

const content = {
  estacionarioContent: contentCreator,
};

module.exports = content;
