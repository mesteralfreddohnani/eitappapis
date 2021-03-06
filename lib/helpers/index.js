/*
 *
 * Helpers for various tasks
 *
 */

// Dependencies
const crypto = require("crypto");
const config = require("./../config");

const helpers = {};

helpers.hash = str => {
  // Create a SHA256 hash
  if (typeof str == "string" && str.length > 0) {
    const hash = crypto
      .createHmac("sha256", config.hashingSecret)
      .update(str)
      .digest("hex");

    return hash;
  } else {
    return false;
  }
};

helpers.parseJsonToObject = str => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
};

module.exports = helpers;
