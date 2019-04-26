"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _reviewRoute = _interopRequireDefault(require("./reviewRoute"));

var _validate = _interopRequireDefault(require("../middlewares/validate"));

var routes = _express["default"].Router();

routes.use(_validate["default"]);
routes.use("/api/v1/review", _reviewRoute["default"]);
var _default = routes;
exports["default"] = _default;