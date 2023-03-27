const bigSize = 10;
const simpleSize = 6;
const tableTextSize = 5;
const headerCellColor = "#cccccc";

module.exports = {
  // font styles

  bigLabel: {
    fontSize: bigSize,
  },

  bigBoldLabel: {
    bold: true,
    fontSize: bigSize,
  },

  simpleLabel: {
    fontSize: simpleSize,
  },
  simpleBoldLabel: {
    fontSize: simpleSize,
    bold: true,
  },

  // table styles
  simpleTable: {
    fontSize: tableTextSize,
  },

  headerCell: {
    fontSize: tableTextSize,
    bold: true,
    fillColor: headerCellColor,
  },

  commonCell: {
    fontSize: tableTextSize,
  },

  subheaderCell: {
    fontSize: tableTextSize,
    textAlign: "center",
    bold: true,
  },
};
