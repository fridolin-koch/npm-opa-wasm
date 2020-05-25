const aggregates = require("./aggregates");
const strings = require("./strings");
const regex = require("./regex");
const conversions = require("./conversions");

module.exports = {
  ...aggregates,
  ...strings,
  ...regex,
  ...conversions,
};
