"use strict";

var express = require("express");

var axios = require("axios");

var cors = require("cors");

var app = express();
app.use(cors());
app.get("/", function _callee(req, res) {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios("http://jsonplaceholder.typicode.com/users"));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          res.json(data);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
app.listen(3000);