"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var _fs = _interopRequireDefault(require("fs"));

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
              _context.next = 3;
              return _models.Reviews.create(req.body);

            case 3:
              review = _context.sent;

              if (review) {
                _context.next = 6;
                break;
              }

              throw new Error();

            case 6:
              res.status(201).send(review);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              res.status(400).send({
                msg: "Bad request"
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
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
                $facet: {
                  all_reviews: [{
                    $group: {
                      _id: {
                        type: "$type",
                        sources: "$sources"
                      },
                      count: {
                        $sum: 1
                      }
                    }
                  }, {
                    $project: {
                      _id: 0,
                      type: "$_id.type",
                      sources: "$_id.sources",
                      count: 1
                    }
                  }, {
                    $sort: {
                      count: -1
                    }
                  }],
                  review_types: [{
                    $sortByCount: "$type"
                  }],
                  review_sources: [{
                    $sortByCount: "$sources"
                  }]
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
              console.log(reviews);

              _fs["default"].writeFileSync("./mum.json", JSON.stringify(reviews));

              res.status(200).send(reviews);
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              res.status(404).send({
                msg: "Review not found"
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    function list(_x3, _x4) {
      return _list.apply(this, arguments);
    }

    return list;
  }()
};
exports["default"] = _default;