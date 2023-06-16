const express = require("express");
const router = express.Router();

const { getSettlement, getPrenomina } = require("../service");

const createLiquidacionOtif = require("../actions/createLiquidacionOtif");
const createLiquidacionNoOtif = require("../actions/createLiquidacionNoOtif");
const createLiquidacionEstacionario = require("../actions/createLiquidacionEstacionario");
const createPrenominaEstacionario = require("../actions/createPrenominaEstacionario");
const createPrenominaPortatil = require("../actions/createPrenominaPortatil");

// ----------------------------  LIQUIDACIONES  ---------------------------------
//
// Crear liquidacion en base al tipo de liquidacion
// Esta funcion ejecuta el servicio settlement y obtiene el tipo de liquidacion
// Dependiendo del tipo se identifica si es portatil o estacionario
//
//            Tipo         Vehículo       Liquidacion
//            -----------------------------------------
//            1            ?????          Estacionario
//            2            ?????          Otif
//            3            ?????          No Otif
//

router.get("/api/v2/liquidacion", async (req, res, next) => {
  try {
    const response = await getSettlement(req.query.date, req.query.rfc);

    if (!response?.data?.result?.tipo) {
      response.data.result.tipo = 0;
    }

    const TIPOS_LIQUIDACION = {
      0: () => {
        res.json({ message: "Type not found" });
      },
      1: () =>
        createLiquidacionEstacionario(req, res, next, response.data.result),
      2: () => createLiquidacionOtif(req, res, next, response.data.result),
      3: () => createLiquidacionNoOtif(req, res, next, response.data.result),
    };

    TIPOS_LIQUIDACION[response?.data?.result?.tipo || 0]();
  } catch (error) {
    res.json(error);
  }
});

// ----------------------------   PRENOMINAS   ---------------------------------
//
// Crear prenomina en base al tipo de  prenomina
// Dependiendo del tipo se identifica si es portatil o estacionario
//
//            Tipo         Vehículo       Prenomina
//            -----------------------------------------
//            1            ?????          Estacionario
//            2            ?????          Portatil
//

router.get("/api/v2/prenomina", async (req, res, next) => {
  try {
    const response = await getPrenomina(req.query.date, req.query.rfc);

    if (!response?.data?.result?.tipo) {
      response.data.result.tipo = 0;
    }

    const TIPOS_PRENOMINA = {
      1: () => createPrenominaPortatil(req, res, next, data),
      2: () => createPrenominaEstacionario(req, res, next, data),
    };

    TIPOS_PRENOMINA[response.data.result.tipo]();
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
