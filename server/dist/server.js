/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/db.js":
/*!**************************!*\
  !*** ./src/config/db.js ***!
  \**************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var connect = function connect() {
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true
  });
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {
    return console.log('DB connection successful!');
  });
};

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! exports provided: signupController, loginController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-controller */ "./src/controllers/signup-controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signupController", function() { return _signup_controller__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _login_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-controller */ "./src/controllers/login-controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginController", function() { return _login_controller__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/controllers/login-controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/login-controller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-model */ "./src/models/user-model.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





var loginController =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var _req$body, email, password, rememberMe, user;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password, rememberMe = _req$body.rememberMe;
            _context.prev = 1;
            _context.next = 4;
            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__["default"].getByEmail(email);

          case 4:
            user = _context.sent;
            _context.next = 7;
            return user.checkPassword(password);

          case 7:
            if (!(user.rememberMe !== rememberMe)) {
              _context.next = 12;
              break;
            }

            user.rememberMe = rememberMe;
            _context.next = 11;
            return user.save();

          case 11:
            user = _context.sent;

          case 12:
            res.set('Authorization', "Bearer ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["generateToken"])(user)));
            res.status(200).json({
              data: user.clear(),
              success: true
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            res.status(403).json({
              errors: _context.t0
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 16]]);
  }));

  return function loginController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (loginController);

/***/ }),

/***/ "./src/controllers/signup-controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/signup-controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-model */ "./src/models/user-model.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





var signupController =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var newUser;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__["default"].isAvailable(req.body);

          case 3:
            _context.next = 5;
            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__["default"].create(req.body);

          case 5:
            newUser = _context.sent;
            res.set('Authorization', "Bearer ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["generateToken"])(newUser)));
            res.status(201).json({
              data: newUser.clear(),
              success: true
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(422).json({
              errors: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function signupController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (signupController);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/db */ "./src/config/db.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");






Object(_config_db__WEBPACK_IMPORTED_MODULE_4__["connect"])();
var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: false
}));
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(_routes__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.listen(process.env.PORT, function () {
  return console.log("Server is up on port ".concat(process.env.PORT));
});

/***/ }),

/***/ "./src/models/user-model.js":
/*!**********************************!*\
  !*** ./src/models/user-model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_4__);





var UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Schema({
  userId: {
    type: Number,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  status: {
    type: Number,
    default: 1
  },
  rememberMe: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
}); // Methods

UserSchema.methods.clear = function () {
  return lodash_omit__WEBPACK_IMPORTED_MODULE_4___default()(this.toObject(), ['password', '_id', '__v', 'rememberMe']);
};

UserSchema.methods.generateId = function () {
  var _this = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res, rej) {
      var lastUser, newUserId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.model('User').find({}, 'userId').sort('-userId').limit(1).lean();

            case 2:
              lastUser = _context.sent;

              if (!lastUser[0]) {
                _context.next = 6;
                break;
              }

              newUserId = lastUser[0].userId + 1;
              return _context.abrupt("return", res(newUserId));

            case 6:
              return _context.abrupt("return", res(1));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

UserSchema.methods.checkPassword = function (password) {
  var _this2 = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res, rej) {
      var isValid;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _utils__WEBPACK_IMPORTED_MODULE_3__["compare"](password, _this2.password);

            case 2:
              isValid = _context2.sent;

              if (!isValid) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", res(true));

            case 5:
              return _context2.abrupt("return", rej([{
                type: 'wrong',
                messages: ['Wrong password'],
                name: 'password'
              }]));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}; // Statics


UserSchema.statics.getById = function (userId) {
  var _this3 = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res, rej) {
      var arr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.find({
                userId: userId
              }).limit(1);

            case 2:
              arr = _context3.sent;

              if (!arr[0]) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", res(arr[0]));

            case 5:
              return _context3.abrupt("return", rej([{
                type: 'not_found',
                messages: ['User not found!'],
                name: 'userId'
              }]));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

UserSchema.statics.getByUsername = function (username) {
  var _this4 = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(res, rej) {
      var match;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.find({
                username: username
              }).limit(1);

            case 2:
              match = _context4.sent;

              if (!match[0]) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", res(match[0]));

            case 5:
              return _context4.abrupt("return", rej([{
                type: 'not_found',
                messages: ['User not found!'],
                name: 'username'
              }]));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

UserSchema.statics.getByEmail = function (email) {
  var _this5 = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(res, rej) {
      var match;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.find({
                email: email
              }).limit(1);

            case 2:
              match = _context5.sent;

              if (!match[0]) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", res(match[0]));

            case 5:
              return _context5.abrupt("return", rej([{
                type: 'not_found',
                messages: ['User not found!'],
                name: 'email'
              }]));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

UserSchema.statics.isAvailable = function (_ref6) {
  var _this6 = this;

  var username = _ref6.username,
      email = _ref6.email;
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(res, rej) {
      var match, errors;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.find({
                $or: [{
                  email: {
                    $regex: new RegExp("^".concat(email, "$"), 'i')
                  }
                }, {
                  username: {
                    $regex: new RegExp("^".concat(username, "$"), 'i')
                  }
                }]
              }, 'email username').limit(2).lean();

            case 2:
              match = _context6.sent;

              if (!(match.length === 0)) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt("return", res(true));

            case 5:
              errors = new Set();
              match.forEach(function (doc) {
                if (doc.email === email) {
                  errors.add({
                    type: 'duplicate',
                    messages: ["This email is not available: ".concat(email)],
                    name: 'email'
                  });
                }

                if (doc.username === username) {
                  errors.add({
                    type: 'duplicate',
                    messages: ["This username is not available: ".concat(username)],
                    name: 'username'
                  });
                }
              });
              return _context6.abrupt("return", rej(Array.from(errors)));

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
}; // Hooks


UserSchema.pre('save',
/*#__PURE__*/
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (!this.isNew) {
            _context7.next = 7;
            break;
          }

          _context7.next = 3;
          return _utils__WEBPACK_IMPORTED_MODULE_3__["encrypt"](this.password);

        case 3:
          this.password = _context7.sent;
          _context7.next = 6;
          return this.generateId();

        case 6:
          this.userId = _context7.sent;

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  }, _callee7, this);
})));
var UserModel = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.model('User', UserSchema);
/* harmony default export */ __webpack_exports__["default"] = (UserModel);

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ "./src/controllers/index.js");


var router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.post('/signup', _controllers__WEBPACK_IMPORTED_MODULE_1__["signupController"]);
router.post('/login', _controllers__WEBPACK_IMPORTED_MODULE_1__["loginController"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: encrypt, compare, generateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encrypt", function() { return encrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateToken", function() { return generateToken; });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/pick */ "lodash/pick");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_2__);



var encrypt = function encrypt(password) {
  return bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(password, 10);
};
var compare = function compare(password, hash) {
  return bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.compare(password, hash);
};
var generateToken = function generateToken(data) {
  var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '4h';
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(data, ['userId']), process.env.JWT_SECRET, {
    expiresIn: expiresIn
  });
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/omit":
/*!******************************!*\
  !*** external "lodash/omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),

/***/ "lodash/pick":
/*!******************************!*\
  !*** external "lodash/pick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NpZ251cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXItbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9vbWl0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3BpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJtb25nb29zZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsImF1dG9JbmRleCIsImNvbm5lY3Rpb24iLCJvbmNlIiwiY29uc29sZSIsImxvZyIsImxvZ2luQ29udHJvbGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVtZW1iZXJNZSIsIlVzZXIiLCJnZXRCeUVtYWlsIiwidXNlciIsImNoZWNrUGFzc3dvcmQiLCJzYXZlIiwic2V0IiwiZ2VuZXJhdGVUb2tlbiIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY2xlYXIiLCJzdWNjZXNzIiwiZXJyb3JzIiwic2lnbnVwQ29udHJvbGxlciIsImlzQXZhaWxhYmxlIiwiY3JlYXRlIiwibmV3VXNlciIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiY29ycyIsInJvdXRlcyIsImxpc3RlbiIsIlBPUlQiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIk51bWJlciIsInVuaXF1ZSIsImZpcnN0TmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImxldmVsIiwiZGVmYXVsdCIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwibWV0aG9kcyIsIm9taXQiLCJ0b09iamVjdCIsImdlbmVyYXRlSWQiLCJQcm9taXNlIiwicmVqIiwibW9kZWwiLCJmaW5kIiwic29ydCIsImxpbWl0IiwibGVhbiIsImxhc3RVc2VyIiwibmV3VXNlcklkIiwidXRpbHMiLCJpc1ZhbGlkIiwibWVzc2FnZXMiLCJuYW1lIiwic3RhdGljcyIsImdldEJ5SWQiLCJhcnIiLCJnZXRCeVVzZXJuYW1lIiwibWF0Y2giLCIkb3IiLCIkcmVnZXgiLCJSZWdFeHAiLCJsZW5ndGgiLCJTZXQiLCJmb3JFYWNoIiwiZG9jIiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwicHJlIiwiaXNOZXciLCJVc2VyTW9kZWwiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJwb3N0IiwiY3QiLCJlbmNyeXB0IiwiYmNyeXB0IiwiaGFzaCIsImNv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LEdBQUcsU0FBaEJBLGFBQWdCLENBQUNHLElBQUQ7QUFBQSxNQUFPNEUsU0FBUCx1RUFBbUIsSUFBbkI7QUFBQSxTQUE0QkMsbURBQUcsQ0FBQ0MsSUFBSixDQUFTQyxrREFBSSxDQUFDL0UsSUFBRCxFQUFPLENBQUMsUUFBRCxDQUFQLENBQWIsRUFBaUMxQixPQUFPLENBQUNDLEdBQVIsQ0FBWXlHLFVBQTdDLEVBQXlEO0FBQUVKLGFBQVMsRUFBVEE7QUFBRixHQUF6RCxDQUE1QjtBQUFBLENBQXRCLEM7Ozs7Ozs7Ozs7O0FDUFAsb0U7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdCA9ICgpID0+IHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX1VSTCwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICBhdXRvSW5kZXg6IHRydWVcclxuICB9KVxyXG5cclxuICBtb25nb29zZS5jb25uZWN0aW9uLm9uY2UoJ29wZW4nLCAoKSA9PiBjb25zb2xlLmxvZygnREIgY29ubmVjdGlvbiBzdWNjZXNzZnVsIScpKVxyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgc2lnbnVwQ29udHJvbGxlciB9IGZyb20gJy4vc2lnbnVwLWNvbnRyb2xsZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9sb2dpbi1jb250cm9sbGVyJ1xyXG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlci1tb2RlbCdcclxuaW1wb3J0IHsgZ2VuZXJhdGVUb2tlbiB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuY29uc3QgbG9naW5Db250cm9sbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHJlbWVtYmVyTWUgfSA9IHJlcS5ib2R5XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZ2V0QnlFbWFpbChlbWFpbClcclxuICAgIGF3YWl0IHVzZXIuY2hlY2tQYXNzd29yZChwYXNzd29yZClcclxuICAgIFxyXG4gICAgaWYgKHVzZXIucmVtZW1iZXJNZSAhPT0gcmVtZW1iZXJNZSkge1xyXG4gICAgICB1c2VyLnJlbWVtYmVyTWUgPSByZW1lbWJlck1lXHJcblxyXG4gICAgICB1c2VyID0gYXdhaXQgdXNlci5zYXZlKClcclxuICAgIH1cclxuXHJcbiAgICByZXMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2dlbmVyYXRlVG9rZW4odXNlcil9YClcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogdXNlci5jbGVhcigpLCBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycm9yczogZXJyIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbkNvbnRyb2xsZXJcclxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXItbW9kZWwnXHJcbmltcG9ydCB7IGdlbmVyYXRlVG9rZW4gfSBmcm9tICcuLi91dGlscydcclxuXHJcbmNvbnN0IHNpZ251cENvbnRyb2xsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgVXNlci5pc0F2YWlsYWJsZShyZXEuYm9keSlcclxuICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZShyZXEuYm9keSlcclxuXHJcbiAgICByZXMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2dlbmVyYXRlVG9rZW4obmV3VXNlcil9YClcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YTogbmV3VXNlci5jbGVhcigpLCBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IGVycm9yczogZXJyIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWdudXBDb250cm9sbGVyXHJcbiIsImltcG9ydCAnZG90ZW52L2NvbmZpZydcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25maWcvZGInXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXHJcblxyXG5jb25uZWN0KClcclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSlcclxuYXBwLnVzZShjb3JzKCkpXHJcbmFwcC51c2Uocm91dGVzKVxyXG5cclxuYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHVwIG9uIHBvcnQgJHtwcm9jZXNzLmVudi5QT1JUfWApKVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xyXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCdcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VySWQ6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgZmlyc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgbGFzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBsZXZlbDoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMVxyXG4gIH0sXHJcbiAgc3RhdHVzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAxXHJcbiAgfSxcclxuICByZW1lbWJlck1lOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9XHJcbn0sXHJcbntcclxuICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG4vLyBNZXRob2RzXHJcblVzZXJTY2hlbWEubWV0aG9kcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gb21pdCh0aGlzLnRvT2JqZWN0KCksIFsncGFzc3dvcmQnLCAnX2lkJywgJ19fdicsICdyZW1lbWJlck1lJ10pXHJcbn1cclxuXHJcblVzZXJTY2hlbWEubWV0aG9kcy5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgIGNvbnN0IGxhc3RVc2VyID0gYXdhaXQgdGhpcy5tb2RlbCgnVXNlcicpLmZpbmQoe30sICd1c2VySWQnKS5zb3J0KCctdXNlcklkJykubGltaXQoMSkubGVhbigpXHJcblxyXG4gICAgaWYgKGxhc3RVc2VyWzBdKSB7XHJcbiAgICAgIGNvbnN0IG5ld1VzZXJJZCA9IGxhc3RVc2VyWzBdLnVzZXJJZCArIDFcclxuICAgICAgcmV0dXJuIHJlcyhuZXdVc2VySWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcygxKVxyXG4gIH0pICBcclxufVxyXG5cclxuVXNlclNjaGVtYS5tZXRob2RzLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdXRpbHMuY29tcGFyZShwYXNzd29yZCwgdGhpcy5wYXNzd29yZClcclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiByZXModHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVqKFt7IHR5cGU6ICd3cm9uZycsIG1lc3NhZ2VzOiBbJ1dyb25nIHBhc3N3b3JkJ10sIG5hbWU6ICdwYXNzd29yZCcgfV0pXHJcbiAgfSlcclxufVxyXG4vLyBTdGF0aWNzXHJcblVzZXJTY2hlbWEuc3RhdGljcy5nZXRCeUlkID0gZnVuY3Rpb24gKHVzZXJJZCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgIGNvbnN0IGFyciA9IGF3YWl0IHRoaXMuZmluZCh7IHVzZXJJZCB9KS5saW1pdCgxKVxyXG5cclxuICAgIGlmIChhcnJbMF0pIHtcclxuICAgICAgcmV0dXJuIHJlcyhhcnJbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlaihbeyB0eXBlOiAnbm90X2ZvdW5kJywgbWVzc2FnZXM6IFsnVXNlciBub3QgZm91bmQhJ10sIG5hbWU6ICd1c2VySWQnIH1dKVxyXG4gIH0pXHJcbn1cclxuXHJcblVzZXJTY2hlbWEuc3RhdGljcy5nZXRCeVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0aGlzLmZpbmQoeyB1c2VybmFtZSB9KS5saW1pdCgxKVxyXG5cclxuICAgIGlmIChtYXRjaFswXSkge1xyXG4gICAgICByZXR1cm4gcmVzKG1hdGNoWzBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWooW3sgdHlwZTogJ25vdF9mb3VuZCcsIG1lc3NhZ2VzOiBbJ1VzZXIgbm90IGZvdW5kISddLCBuYW1lOiAndXNlcm5hbWUnIH1dKVxyXG4gIH0pXHJcbn1cclxuXHJcblVzZXJTY2hlbWEuc3RhdGljcy5nZXRCeUVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0aGlzLmZpbmQoeyBlbWFpbCB9KS5saW1pdCgxKVxyXG5cclxuICAgIGlmIChtYXRjaFswXSkge1xyXG4gICAgICByZXR1cm4gcmVzKG1hdGNoWzBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWooW3sgdHlwZTogJ25vdF9mb3VuZCcsIG1lc3NhZ2VzOiBbJ1VzZXIgbm90IGZvdW5kISddLCBuYW1lOiAnZW1haWwnIH1dKVxyXG4gIH0pXHJcbn1cclxuXHJcblVzZXJTY2hlbWEuc3RhdGljcy5pc0F2YWlsYWJsZSA9IGZ1bmN0aW9uICh7IHVzZXJuYW1lLCBlbWFpbCB9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0aGlzLmZpbmQoeyRvcjogW3tlbWFpbDogeyRyZWdleDogbmV3IFJlZ0V4cChgXiR7ZW1haWx9JGAsICdpJyl9fSwge3VzZXJuYW1lOiB7JHJlZ2V4OiBuZXcgUmVnRXhwKGBeJHt1c2VybmFtZX0kYCwgJ2knKX19XX0sICdlbWFpbCB1c2VybmFtZScpLmxpbWl0KDIpLmxlYW4oKVxyXG5cclxuICAgIGlmIChtYXRjaC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHJlcyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyBTZXQoKVxyXG5cclxuICAgIG1hdGNoLmZvckVhY2goZG9jID0+IHtcclxuICAgICAgaWYgKGRvYy5lbWFpbCA9PT0gZW1haWwpIHtcclxuICAgICAgICBlcnJvcnMuYWRkKHsgdHlwZTogJ2R1cGxpY2F0ZScsIG1lc3NhZ2VzOiBbYFRoaXMgZW1haWwgaXMgbm90IGF2YWlsYWJsZTogJHtlbWFpbH1gXSwgbmFtZTogJ2VtYWlsJyB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZG9jLnVzZXJuYW1lID09PSB1c2VybmFtZSkge1xyXG4gICAgICAgIGVycm9ycy5hZGQoeyB0eXBlOiAnZHVwbGljYXRlJywgbWVzc2FnZXM6IFtgVGhpcyB1c2VybmFtZSBpcyBub3QgYXZhaWxhYmxlOiAke3VzZXJuYW1lfWBdLCBuYW1lOiAndXNlcm5hbWUnIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlaihBcnJheS5mcm9tKGVycm9ycykpXHJcbiAgfSlcclxufVxyXG5cclxuLy8gSG9va3NcclxuVXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuaXNOZXcpIHtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCB1dGlscy5lbmNyeXB0KHRoaXMucGFzc3dvcmQpXHJcbiAgICB0aGlzLnVzZXJJZCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVJZCgpXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsXHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCAqIGFzIGN0IGZyb20gJy4uL2NvbnRyb2xsZXJzJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5wb3N0KCcvc2lnbnVwJywgY3Quc2lnbnVwQ29udHJvbGxlcilcclxucm91dGVyLnBvc3QoJy9sb2dpbicsIGN0LmxvZ2luQ29udHJvbGxlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iLCJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHQgPSAocGFzc3dvcmQpID0+IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMClcclxuZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAocGFzc3dvcmQsIGhhc2gpID0+IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9rZW4gPSAoZGF0YSwgZXhwaXJlc0luID0gJzRoJykgPT4gand0LnNpZ24ocGljayhkYXRhLCBbJ3VzZXJJZCddKSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgeyBleHBpcmVzSW4gfSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL29taXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3BpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==