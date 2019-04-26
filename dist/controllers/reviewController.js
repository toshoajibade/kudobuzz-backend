"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var _default = {
  create: function () {
    var _create = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var review;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log(req.body);
              _context.next = 4;
              return _models.Reviews.create(req.body);

            case 4:
              review = _context.sent;

              if (review) {
                _context.next = 7;
                break;
              }

              throw new Error();

            case 7:
              res.status(201).send(review);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              res.status(400).send({
                msg: "Bad request"
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  list: function () {
    var _list = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var reviews;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models.Reviews.aggregate([{
                $match: {
                  sources: {
                    $ne: "kudobuzz"
                  }
                }
              }, {
                $group: {
                  _id: {
                    _id: "$type",
                    name: "$sources"
                  },
                  matches: {
                    $sum: 1
                  }
                }
              }, {
                $sort: {
                  matches: -1
                }
              }]);

            case 3:
              reviews = _context2.sent;

              if (reviews) {
                _context2.next = 6;
                break;
              }

              throw new Error();

            case 6:
              res.status(200).send(reviews);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              res.status(404).send({
                msg: "Review not found"
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    function list(_x3, _x4) {
      return _list.apply(this, arguments);
    }

    return list;
  }()
};
exports["default"] = _default;