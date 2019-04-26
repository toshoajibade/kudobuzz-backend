"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var review = _express["default"].Router();

review.post("/", _controllers.reviewController.create);
review.get("/:business_id", _controllers.reviewController.list);
var _default = review;
exports["default"] = _default;