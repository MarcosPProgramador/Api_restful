"use strict";

var con = o("#con");

function getApi(url) {
  var response, datas;
  return regeneratorRuntime.async(function getApi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          datas = _context.sent;
          show(datas);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function show(datas) {
  datas.map(function (data) {
    var arr = ["ID: " + data.id, "Name: " + data.name, "Username: " + data.username, "Email: " + data.email, "Street: " + data.address.street, "City: " + data.address.city, "Phone: " + data.phone];

    for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
      var ct = _arr[_i];
      iteratorArr(ct);
    }
  });

  function iteratorArr(ct) {
    var newLocal = "div";
    var newLocal_1 = "box";
    var box = create(newLocal, newLocal_1);
    box.textContent = ct; //  Container
    //          Box

    append(con, box);
  }
} // factory functions / desing pattern


function create(e, c) {
  var l = document.createElement(e);
  l.className = c;
  return l;
}

function append(c, b) {
  return c.appendChild(b);
}

function o(e) {
  return document.querySelector(e);
} // api


getApi("http://localhost:3000");