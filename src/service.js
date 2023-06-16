const { default: axios } = require("axios");

const headers = { Authorization: "" };

module.exports = {
  getSettlement: (time, rfc) =>
    axios.get(
      `http://127.0.0.1:8095/api/sales/settlement?sales_time=${time}&empleado_rfc=${rfc}`,
      { headers }
    ),

  getPrenomina: (time, rfc) =>
    axios.get(
      `http://127.0.0.1:8095/api/sales/pdfcreate/prenomina?sales_time=${time}&empleado_rfc=${rfc}`,
      { headers }
    ),
};
