"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var ReviewSchema = new Schema({
  business_id: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  sources: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
}, {
  timestamps: true
});
ReviewSchema.set("toObject", {
  getters: true
});

var _default = _mongoose["default"].model("Review", ReviewSchema);

exports["default"] = _default;