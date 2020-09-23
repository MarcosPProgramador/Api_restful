"use strict";

var con = document.getElementById("con");

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
  var res = "";
  datas.map(function (data) {
    res += "<div class=\"box\">\n                    <div class=\"bx\">\n                        <span>ID: </span> ".concat(data.id, "\n                    </div>\n                    <div class=\"bx\">\n                        <span>Username: </span> ").concat(data.name + data.username, "\n                    </div>\n                    <div class=\"bx\">\n                        <span>Email: </span> ").concat(data.email, "\n                    </div>\n                    <div class=\"bx\">\n                        <span>Street: </span> ").concat(data.address.street, "\n                    </div>\n                    <div class=\"bx\">\n                        <span>City: </span> ").concat(data.address.city, "\n                    </div>\n                    <div class=\"bx\">\n                        <span>Phone: </span> ").concat(data.phone, "\n                    </div>\n\n                </div>\n        ");
  });
  con.innerHTML = res;
} // function createEl(el, cl) {
//     // select element and insert class
//     return (document.createElement(el).className = cl);
// }


getApi("http://localhost:3000");