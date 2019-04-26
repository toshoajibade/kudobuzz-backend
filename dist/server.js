"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _App = _interopRequireDefault(require("./App"));

var port = process.env.PORT || 3000;

_App["default"].listen(port, function (err) {
  if (err) {
    console.log(err);
  }

  return console.log("server listening on ".concat(port));
});