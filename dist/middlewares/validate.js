"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = require("validator");

// Validate all routes
var _default = function _default(req, res, next) {
  var keys = Object.keys(req.body);
  var errors = {};
  keys.forEach(function (key) {
    switch (key) {
      case "msg":
      case "type":
      case "sources":
        if ((0, _validator.isEmpty)(req.body[key])) errors[key] = "".concat(key, " cannot be empty");
        break;

      case "rating":
        if (Number(req.body[key]) < 1 || Number(req.body[key]) > 5) {
          errors.rating = "rating should be between 1 and 5";
        }

        break;

      default:
        break;
    }
  });

  if (Object.keys(errors).length !== 0) {
    res.status(422).send(errors);
  } else {
    next();
  }
};

exports["default"] = _default;