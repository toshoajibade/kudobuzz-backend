"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])(); // Load environmental variables

_dotenv["default"].config(); // Configure app middleware


app.use((0, _helmet["default"])());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_routes["default"]);
app.set("trust proxy", true); // Connect to MongoDB database using mongoose ORM

var mongoDB = process.env.MONGODB_URI;
_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect(mongoDB, {
  useNewUrlParser: true,
  autoIndex: false
});

var _default = app;
exports["default"] = _default;