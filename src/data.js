const request = {
  status: "OK",

  message: "Liquidacion",

  result: {
    /**
     *
     *  CHOFER
     *
     */

    chofer: {
      tarifasComisiones: {
        tarifaLitros: [
          {
            nombre: "A",

            comision: 11.99,

            pbono: 0.1,
          },

          {
            nombre: "B",

            comision: 22.99,

            pbono: 0.2,
          },

          {
            nombre: "C",

            comision: 55.99,

            pbono: 0.3,
          },

          {
            nombre: "D",

            comision: 66.99,

            pbono: 0.4,
          },

          {
            nombre: "E",

            comision: 99.99,

            pbono: 0.5,
          },

          {
            nombre: "F",

            comision: 111.99,

            pbono: 0.6,
          },

          {
            nombre: "G",

            comision: 444.99,

            pbono: 0.7,
          },

          {
            nombre: "H",

            comision: 555.99,

            pbono: 0.8,
          },
        ],

        bono: [
          {
            limitSuperior: 1000,

            importe: 456.99,
          },
        ],

        remanentes: [
          {
            limitSuperior: 1000,

            importe: 0.234,
          },
        ],
      },

      creditosDiasLaborados: [
        {
          nombre: "Creditos",

          hoy: 797.0,

          acumulado: 797.0,
        },

        {
          nombre: "Faltantes",

          hoy: 0.0,

          acumulado: 0.0,
        },

        {
          nombre: "AbonoCTA",

          hoy: 0.0,

          acumulado: 0.0,
        },

        {
          nombre: "Descontar",

          hoy: 0.0,

          acumulado: 0.0,
        },
      ],

      dias: {
        transcurridos: 7,

        trabajados: 1,

        porTranscurrir: 8,
      },

      venta: [
        {
          nombre: "A",

          venta: {
            litros: 125.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 125.0,

            puntos: 76.0,
          },

          comision: {
            litros: 1498.75,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 1498.75,
          },

          ltsBono: 12.5,
        },

        {
          nombre: "B",

          venta: {
            litros: 0.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 0.0,

            puntos: 879.0,
          },

          comision: {
            litros: 0.0,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 0.0,
          },

          ltsBono: 0.0,
        },

        {
          nombre: "C",

          venta: {
            litros: 76.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 76.0,

            puntos: 679.0,
          },

          comision: {
            litros: 4255.24,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 4255.24,
          },

          ltsBono: 22.8,
        },

        {
          nombre: "D",

          venta: {
            litros: 47.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 47.0,

            puntos: 668.0,
          },

          comision: {
            litros: 3148.53,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 3148.53,
          },

          ltsBono: 18.8,
        },

        {
          nombre: "E",

          venta: {
            litros: 46.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 46.0,

            puntos: 335.0,
          },

          comision: {
            litros: 4599.54,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 4599.54,
          },

          ltsBono: 23.0,
        },

        {
          nombre: "F",

          venta: {
            litros: 768.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 768.0,

            puntos: 255.0,
          },

          comision: {
            litros: 86008.32,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 86008.32,
          },

          ltsBono: 460.8,
        },

        {
          nombre: "G",

          venta: {
            litros: 236.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 236.0,

            puntos: 356.0,
          },

          comision: {
            litros: 105017.64,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 105017.64,
          },

          ltsBono: 165.2,
        },

        {
          nombre: "H",

          venta: {
            litros: 2.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 2.0,

            puntos: 869.0,
          },

          comision: {
            litros: 1111.98,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 1111.98,
          },

          ltsBono: 1.6,
        },

        {
          nombre: "TOTALES",

          venta: {
            litros: 1300.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 1300.0,

            puntos: 4117.0,
          },

          comision: {
            litros: 205640.01,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 205640.01,
          },

          ltsBono: 704.7,
        },
      ],

      acumulado: [
        {
          nombre: "A",

          venta: {
            litros: 125.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 125.0,

            puntos: 76.0,
          },

          comision: {
            litros: 1498.75,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 1498.75,
          },

          ltsBono: 12.5,
        },

        {
          nombre: "B",

          venta: {
            litros: 0.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 0.0,

            puntos: 879.0,
          },

          comision: {
            litros: 0.0,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 0.0,
          },

          ltsBono: 0.0,
        },

        {
          nombre: "C",

          venta: {
            litros: 76.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 76.0,

            puntos: 679.0,
          },

          comision: {
            litros: 4255.24,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 4255.24,
          },

          ltsBono: 22.8,
        },

        {
          nombre: "D",

          venta: {
            litros: 47.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 47.0,

            puntos: 668.0,
          },

          comision: {
            litros: 3148.5299999999997,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 3148.5299999999997,
          },

          ltsBono: 18.8,
        },

        {
          nombre: "E",

          venta: {
            litros: 46.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 46.0,

            puntos: 335.0,
          },

          comision: {
            litros: 4599.54,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 4599.54,
          },

          ltsBono: 23.0,
        },

        {
          nombre: "F",

          venta: {
            litros: 768.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 768.0,

            puntos: 255.0,
          },

          comision: {
            litros: 86008.31999999999,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 86008.31999999999,
          },

          ltsBono: 460.79999999999995,
        },

        {
          nombre: "G",

          venta: {
            litros: 236.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 236.0,

            puntos: 356.0,
          },

          comision: {
            litros: 105017.64,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 105017.64,
          },

          ltsBono: 165.2,
        },

        {
          nombre: "H",

          venta: {
            litros: 2.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 2.0,

            puntos: 869.0,
          },

          comision: {
            litros: 1111.98,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 1111.98,
          },

          ltsBono: 1.6,
        },

        {
          nombre: "TOTALES",

          venta: {
            litros: 1300.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 1300.0,

            puntos: 4117.0,
          },

          comision: {
            litros: 205640.0,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 205640.0,
          },

          ltsBono: 704.7,
        },
      ],

      nombreEmpleado: "ISAAC CARRILLO ASTORGA",

      nombreCajera: "Meredith Sofia Lopez Lopez",

      turno: "",

      planta: "GASPASA MAZATLAN",

      fechaVenta: "2022-03-25 17:00:00",

      tipoServicio: "TANQUE ESTACIONARIO",

      numeroEconomicoUnidad: "105C",

      zona: "20",

      periodoNomina: "2022-03-22 AL 2022-04-05",
    },

    // AYUDANTE

    ayudante: {
      tarifasComisiones: {
        tarifaLitros: [
          {
            nombre: "A",

            comision: 1.99,

            pbono: 0.9,
          },

          {
            nombre: "B",

            comision: 2.99,

            pbono: 1.0,
          },

          {
            nombre: "C",

            comision: 5.99,

            pbono: 1.2,
          },

          {
            nombre: "D",

            comision: 6.99,

            pbono: 1.3,
          },

          {
            nombre: "E",

            comision: 9.99,

            pbono: 1.4,
          },

          {
            nombre: "F",

            comision: 10.99,

            pbono: 1.5,
          },

          {
            nombre: "G",

            comision: 13.99,

            pbono: 1.6,
          },

          {
            nombre: "H",

            comision: 14.99,

            pbono: 1.7,
          },
        ],

        bono: [
          {
            limitSuperior: 1000,

            importe: 456.99,
          },
        ],

        remanentes: [
          {
            limitSuperior: 1000,

            importe: 0.234,
          },
        ],
      },

      creditosDiasLaborados: [
        {
          nombre: "Creditos",

          hoy: 797.0,

          acumulado: 797.0,
        },

        {
          nombre: "Faltantes",

          hoy: 0.0,

          acumulado: 0.0,
        },

        {
          nombre: "AbonoCTA",

          hoy: 0.0,

          acumulado: 0.0,
        },

        {
          nombre: "Descontar",

          hoy: 0.0,

          acumulado: 0.0,
        },
      ],

      dias: {
        transcurridos: 7,

        trabajados: 1,

        porTranscurrir: 8,
      },

      venta: [
        {
          nombre: "A",

          venta: {
            litros: 125.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 125.0,

            puntos: 76.0,
          },

          comision: {
            litros: 248.75,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 248.75,
          },

          ltsBono: 112.5,
        },

        {
          nombre: "B",

          venta: {
            litros: 0.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 0.0,

            puntos: 879.0,
          },

          comision: {
            litros: 0.0,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 0.0,
          },

          ltsBono: 0.0,
        },

        {
          nombre: "C",

          venta: {
            litros: 76.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 76.0,

            puntos: 679.0,
          },

          comision: {
            litros: 455.24,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 455.24,
          },

          ltsBono: 91.2,
        },

        {
          nombre: "D",

          venta: {
            litros: 47.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 47.0,

            puntos: 668.0,
          },

          comision: {
            litros: 328.54,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 328.54,
          },

          ltsBono: 61.1,
        },

        {
          nombre: "E",

          venta: {
            litros: 46.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 46.0,

            puntos: 335.0,
          },

          comision: {
            litros: 459.54,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 459.54,
          },

          ltsBono: 64.4,
        },

        {
          nombre: "F",

          venta: {
            litros: 768.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 768.0,

            puntos: 255.0,
          },

          comision: {
            litros: 8440.32,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 8440.32,
          },

          ltsBono: 1152.0,
        },

        {
          nombre: "G",

          venta: {
            litros: 236.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 236.0,

            puntos: 356.0,
          },

          comision: {
            litros: 3301.64,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 3301.64,
          },

          ltsBono: 377.6,
        },

        {
          nombre: "H",

          venta: {
            litros: 2.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 2.0,

            puntos: 869.0,
          },

          comision: {
            litros: 29.98,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 29.98,
          },

          ltsBono: 3.4,
        },

        {
          nombre: "TOTALES",

          venta: {
            litros: 1300.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 1300.0,

            puntos: 4117.0,
          },

          comision: {
            litros: 13264.01,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 13264.01,
          },

          ltsBono: 1862.21,
        },
      ],

      acumulado: [
        {
          nombre: "A",

          venta: {
            litros: 125.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 125.0,

            puntos: 76.0,
          },

          comision: {
            litros: 248.75,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 248.75,
          },

          ltsBono: 112.5,
        },

        {
          nombre: "B",

          venta: {
            litros: 0.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 0.0,

            puntos: 879.0,
          },

          comision: {
            litros: 0.0,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 0.0,
          },

          ltsBono: 0.0,
        },

        {
          nombre: "C",

          venta: {
            litros: 76.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 76.0,

            puntos: 679.0,
          },

          comision: {
            litros: 455.24,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 455.24,
          },

          ltsBono: 91.2,
        },

        {
          nombre: "D",

          venta: {
            litros: 47.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 47.0,

            puntos: 668.0,
          },

          comision: {
            litros: 328.53000000000003,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 328.53000000000003,
          },

          ltsBono: 61.1,
        },

        {
          nombre: "E",

          venta: {
            litros: 46.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 46.0,

            puntos: 335.0,
          },

          comision: {
            litros: 459.54,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 459.54,
          },

          ltsBono: 64.39999999999999,
        },

        {
          nombre: "F",

          venta: {
            litros: 768.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 768.0,

            puntos: 255.0,
          },

          comision: {
            litros: 8440.32,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 8440.32,
          },

          ltsBono: 1152.0,
        },

        {
          nombre: "G",

          venta: {
            litros: 236.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 236.0,

            puntos: 356.0,
          },

          comision: {
            litros: 3301.64,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 3301.64,
          },

          ltsBono: 377.6,
        },

        {
          nombre: "H",

          venta: {
            litros: 2.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 2.0,

            puntos: 869.0,
          },

          comision: {
            litros: 29.98,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 29.98,
          },

          ltsBono: 3.4,
        },

        {
          nombre: "TOTALES",

          venta: {
            litros: 1300.0,

            ptsPagadosAnt: 0.0,

            ptsPagadosAct: 0.0,

            totalLitros: 1300.0,

            puntos: 4117.0,
          },

          comision: {
            litros: 13264.0,

            ptsAnt: 0.0,

            ptsDia: 0.0,

            total: 13264.0,
          },

          ltsBono: 1862.21,
        },
      ],

      nombreEmpleado: "ERNESTO ZUNIGA ANGULO",

      nombreCajera: "Meredith Sofia Lopez Lopez",

      turno: "",

      planta: "GASPASA MAZATLAN",

      fechaVenta: "2022-03-25 17:00:00",

      tipoServicio: "TANQUE ESTACIONARIO",

      numeroEconomicoUnidad: "105C",

      zona: "20",

      periodoNomina: "2022-03-22 AL 2022-04-05",
    },

    fechaImpresion: "2022-03-28 15:44:58",
  },

  time: "28-03-2022 03:44:58 p. m.",
};

module.exports = request;
