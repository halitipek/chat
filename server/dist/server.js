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

/***/ "./src/models/counter-model.js":
/*!*************************************!*\
  !*** ./src/models/counter-model.js ***!
  \*************************************/
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



var CounterSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Schema({
  collectionName: {
    type: String,
    required: true,
    unique: true
  },
  sequence: {
    type: Number,
    required: true,
    default: 1
  }
});

CounterSchema.statics.generateSeq =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(collectionName) {
    var _this = this;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                var arr;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this.find({
                          collectionName: collectionName
                        }).limit(1);

                      case 2:
                        arr = _context.sent;

                        if (!arr[0]) {
                          _context.next = 8;
                          break;
                        }

                        arr[0].sequence++;
                        _context.next = 7;
                        return arr[0].save();

                      case 7:
                        return _context.abrupt("return", res(arr[0].sequence));

                      case 8:
                        _context.next = 10;
                        return _this.create({
                          collectionName: collectionName
                        });

                      case 10:
                        return _context.abrupt("return", res(1));

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var CounterModel = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.model('Counter', CounterSchema);
/* harmony default export */ __webpack_exports__["default"] = (CounterModel);

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
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _counter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-model */ "./src/models/counter-model.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






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
  return lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(this.toObject(), ['password', '_id', '__v']);
};

UserSchema.methods.checkPassword = function (password) {
  var _this = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res, rej) {
      var isValid;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _utils__WEBPACK_IMPORTED_MODULE_5__["compare"](password, _this.password);

            case 2:
              isValid = _context.sent;

              if (!isValid) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", res(true));

            case 5:
              return _context.abrupt("return", rej([{
                type: 'wrong',
                messages: ['Wrong password'],
                name: 'password'
              }]));

            case 6:
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
}; // Statics


UserSchema.statics.getById = function (userId) {
  var _this2 = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res, rej) {
      var arr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.find({
                userId: userId
              }).limit(1);

            case 2:
              arr = _context2.sent;

              if (!arr[0]) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", res(arr[0]));

            case 5:
              return _context2.abrupt("return", rej([{
                type: 'not_found',
                messages: ['User not found!'],
                name: 'userId'
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
};

UserSchema.statics.getByUsername = function (username) {
  var _this3 = this;

  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res, rej) {
      var match;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.find({
                username: username
              }).limit(1);

            case 2:
              match = _context3.sent;

              if (!match[0]) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", res(match[0]));

            case 5:
              return _context3.abrupt("return", rej([{
                type: 'not_found',
                messages: ['User not found!'],
                name: 'username'
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

UserSchema.statics.getByEmail = function (email) {
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
                email: email
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
                name: 'email'
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

UserSchema.statics.isAvailable = function (_ref5) {
  var _this5 = this;

  var username = _ref5.username,
      email = _ref5.email;
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(res, rej) {
      var match, errors;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.find({
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
              match = _context5.sent;

              if (!(match.length === 0)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", res(true));

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
              return _context5.abrupt("return", rej(Array.from(errors)));

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function (_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
}; // Hooks


UserSchema.pre('save',
/*#__PURE__*/
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!this.isNew) {
            _context6.next = 7;
            break;
          }

          _context6.next = 3;
          return _utils__WEBPACK_IMPORTED_MODULE_5__["encrypt"](this.password);

        case 3:
          this.password = _context6.sent;
          _context6.next = 6;
          return _counter_model__WEBPACK_IMPORTED_MODULE_4__["default"].generateSeq('Users');

        case 6:
          this.userId = _context6.sent;

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NpZ251cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvdW50ZXItbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvb21pdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9waWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJjb25uZWN0IiwibW9uZ29vc2UiLCJwcm9jZXNzIiwiZW52IiwiREJfVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlQ3JlYXRlSW5kZXgiLCJhdXRvSW5kZXgiLCJjb25uZWN0aW9uIiwib25jZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsInJlbWVtYmVyTWUiLCJVc2VyIiwiZ2V0QnlFbWFpbCIsInVzZXIiLCJjaGVja1Bhc3N3b3JkIiwic2F2ZSIsInNldCIsImdlbmVyYXRlVG9rZW4iLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNsZWFyIiwic3VjY2VzcyIsImVycm9ycyIsInNpZ251cENvbnRyb2xsZXIiLCJpc0F2YWlsYWJsZSIsImNyZWF0ZSIsIm5ld1VzZXIiLCJhcHAiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImNvcnMiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJQT1JUIiwiQ291bnRlclNjaGVtYSIsIlNjaGVtYSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwic2VxdWVuY2UiLCJOdW1iZXIiLCJkZWZhdWx0Iiwic3RhdGljcyIsImdlbmVyYXRlU2VxIiwiUHJvbWlzZSIsImZpbmQiLCJsaW1pdCIsImFyciIsIkNvdW50ZXJNb2RlbCIsIm1vZGVsIiwiVXNlclNjaGVtYSIsInVzZXJJZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlcm5hbWUiLCJsZXZlbCIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwibWV0aG9kcyIsIm9taXQiLCJ0b09iamVjdCIsInJlaiIsInV0aWxzIiwiaXNWYWxpZCIsIm1lc3NhZ2VzIiwibmFtZSIsImdldEJ5SWQiLCJnZXRCeVVzZXJuYW1lIiwibWF0Y2giLCIkb3IiLCIkcmVnZXgiLCJSZWdFeHAiLCJsZWFuIiwibGVuZ3RoIiwiU2V0IiwiZm9yRWFjaCIsImRvYyIsImFkZCIsIkFycmF5IiwiZnJvbSIsInByZSIsImlzTmV3IiwiQ291bnRlciIsIlVzZXJNb2RlbCIsInJvdXRlciIsIlJvdXRlciIsInBvc3QiLCJjdCIsImVuY3J5cHQiLCJiY3J5cHQiLCJoYXNoIiwiY29tcGFyZSIsImV4cGlyZXNJbiIsImp3dCIsInNpZ24iLCJwaWNrIiwiSldUX1NFQ1JFVCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUMzQkMsaURBQVEsQ0FBQ0QsT0FBVCxDQUFpQkUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQTdCLEVBQXFDO0FBQ25DQyxtQkFBZSxFQUFFLElBRGtCO0FBRW5DQyxrQkFBYyxFQUFFLElBRm1CO0FBR25DQyxhQUFTLEVBQUU7QUFId0IsR0FBckM7QUFNQU4saURBQVEsQ0FBQ08sVUFBVCxDQUFvQkMsSUFBcEIsQ0FBeUIsTUFBekIsRUFBaUM7QUFB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LHVEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9VUkwsIHtcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgYXV0b0luZGV4OiB0cnVlXHJcbiAgfSlcclxuXHJcbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKCdvcGVuJywgKCkgPT4gY29uc29sZS5sb2coJ0RCIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bCEnKSlcclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHNpZ251cENvbnRyb2xsZXIgfSBmcm9tICcuL3NpZ251cC1jb250cm9sbGVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvZ2luQ29udHJvbGxlciB9IGZyb20gJy4vbG9naW4tY29udHJvbGxlcidcclxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXItbW9kZWwnXHJcbmltcG9ydCB7IGdlbmVyYXRlVG9rZW4gfSBmcm9tICcuLi91dGlscydcclxuXHJcbmNvbnN0IGxvZ2luQ29udHJvbGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByZW1lbWJlck1lIH0gPSByZXEuYm9keVxyXG5cclxuICB0cnkge1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmdldEJ5RW1haWwoZW1haWwpXHJcbiAgICBhd2FpdCB1c2VyLmNoZWNrUGFzc3dvcmQocGFzc3dvcmQpXHJcbiAgICBcclxuICAgIGlmICh1c2VyLnJlbWVtYmVyTWUgIT09IHJlbWVtYmVyTWUpIHtcclxuICAgICAgdXNlci5yZW1lbWJlck1lID0gcmVtZW1iZXJNZVxyXG5cclxuICAgICAgdXNlciA9IGF3YWl0IHVzZXIuc2F2ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtnZW5lcmF0ZVRva2VuKHVzZXIpfWApXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHVzZXIuY2xlYXIoKSwgc3VjY2VzczogdHJ1ZSB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBlcnJvcnM6IGVyciB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyXHJcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyLW1vZGVsJ1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCBzaWdudXBDb250cm9sbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IFVzZXIuaXNBdmFpbGFibGUocmVxLmJvZHkpXHJcbiAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgVXNlci5jcmVhdGUocmVxLmJvZHkpXHJcblxyXG4gICAgcmVzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtnZW5lcmF0ZVRva2VuKG5ld1VzZXIpfWApXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGRhdGE6IG5ld1VzZXIuY2xlYXIoKSwgc3VjY2VzczogdHJ1ZSB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBlcnJvcnM6IGVyciB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbnVwQ29udHJvbGxlclxyXG4iLCJpbXBvcnQgJ2RvdGVudi9jb25maWcnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4vY29uZmlnL2RiJ1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuY29ubmVjdCgpXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpXHJcbmFwcC51c2UoY29ycygpKVxyXG5hcHAudXNlKHJvdXRlcylcclxuXHJcbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBpcyB1cCBvbiBwb3J0ICR7cHJvY2Vzcy5lbnYuUE9SVH1gKSlcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgQ291bnRlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGNvbGxlY3Rpb25OYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgc2VxdWVuY2U6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgZGVmYXVsdDogMVxyXG4gIH1cclxufSlcclxuXHJcbkNvdW50ZXJTY2hlbWEuc3RhdGljcy5nZW5lcmF0ZVNlcSA9IGFzeW5jIGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzKSA9PiB7XHJcbiAgICBjb25zdCBhcnIgPSBhd2FpdCB0aGlzLmZpbmQoeyBjb2xsZWN0aW9uTmFtZSB9KS5saW1pdCgxKVxyXG5cclxuICAgIGlmIChhcnJbMF0pIHtcclxuICAgICAgYXJyWzBdLnNlcXVlbmNlKytcclxuICAgICAgYXdhaXQgYXJyWzBdLnNhdmUoKVxyXG4gICAgICByZXR1cm4gcmVzKGFyclswXS5zZXF1ZW5jZSlcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0aGlzLmNyZWF0ZSh7IGNvbGxlY3Rpb25OYW1lIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlcygxKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IENvdW50ZXJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCdDb3VudGVyJywgQ291bnRlclNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJNb2RlbFxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0J1xyXG5cclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyLW1vZGVsJ1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VySWQ6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgZmlyc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgbGFzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBsZXZlbDoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMVxyXG4gIH0sXHJcbiAgc3RhdHVzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAxXHJcbiAgfSxcclxuICByZW1lbWJlck1lOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9XHJcbn0sXHJcbntcclxuICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG4vLyBNZXRob2RzXHJcblVzZXJTY2hlbWEubWV0aG9kcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gb21pdCh0aGlzLnRvT2JqZWN0KCksIFsncGFzc3dvcmQnLCAnX2lkJywgJ19fdiddKVxyXG59XHJcblxyXG5Vc2VyU2NoZW1hLm1ldGhvZHMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB1dGlscy5jb21wYXJlKHBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHJlcyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWooW3sgdHlwZTogJ3dyb25nJywgbWVzc2FnZXM6IFsnV3JvbmcgcGFzc3dvcmQnXSwgbmFtZTogJ3Bhc3N3b3JkJyB9XSlcclxuICB9KVxyXG59XHJcbi8vIFN0YXRpY3NcclxuVXNlclNjaGVtYS5zdGF0aWNzLmdldEJ5SWQgPSBmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgYXJyID0gYXdhaXQgdGhpcy5maW5kKHsgdXNlcklkIH0pLmxpbWl0KDEpXHJcblxyXG4gICAgaWYgKGFyclswXSkge1xyXG4gICAgICByZXR1cm4gcmVzKGFyclswXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVqKFt7IHR5cGU6ICdub3RfZm91bmQnLCBtZXNzYWdlczogWydVc2VyIG5vdCBmb3VuZCEnXSwgbmFtZTogJ3VzZXJJZCcgfV0pXHJcbiAgfSlcclxufVxyXG5cclxuVXNlclNjaGVtYS5zdGF0aWNzLmdldEJ5VXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRoaXMuZmluZCh7IHVzZXJuYW1lIH0pLmxpbWl0KDEpXHJcblxyXG4gICAgaWYgKG1hdGNoWzBdKSB7XHJcbiAgICAgIHJldHVybiByZXMobWF0Y2hbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlaihbeyB0eXBlOiAnbm90X2ZvdW5kJywgbWVzc2FnZXM6IFsnVXNlciBub3QgZm91bmQhJ10sIG5hbWU6ICd1c2VybmFtZScgfV0pXHJcbiAgfSlcclxufVxyXG5cclxuVXNlclNjaGVtYS5zdGF0aWNzLmdldEJ5RW1haWwgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRoaXMuZmluZCh7IGVtYWlsIH0pLmxpbWl0KDEpXHJcblxyXG4gICAgaWYgKG1hdGNoWzBdKSB7XHJcbiAgICAgIHJldHVybiByZXMobWF0Y2hbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlaihbeyB0eXBlOiAnbm90X2ZvdW5kJywgbWVzc2FnZXM6IFsnVXNlciBub3QgZm91bmQhJ10sIG5hbWU6ICdlbWFpbCcgfV0pXHJcbiAgfSlcclxufVxyXG5cclxuVXNlclNjaGVtYS5zdGF0aWNzLmlzQXZhaWxhYmxlID0gZnVuY3Rpb24gKHsgdXNlcm5hbWUsIGVtYWlsIH0pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRoaXMuZmluZCh7JG9yOiBbe2VtYWlsOiB7JHJlZ2V4OiBuZXcgUmVnRXhwKGBeJHtlbWFpbH0kYCwgJ2knKX19LCB7dXNlcm5hbWU6IHskcmVnZXg6IG5ldyBSZWdFeHAoYF4ke3VzZXJuYW1lfSRgLCAnaScpfX1dfSwgJ2VtYWlsIHVzZXJuYW1lJykubGltaXQoMikubGVhbigpXHJcblxyXG4gICAgaWYgKG1hdGNoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gcmVzKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IFNldCgpXHJcblxyXG4gICAgbWF0Y2guZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICBpZiAoZG9jLmVtYWlsID09PSBlbWFpbCkge1xyXG4gICAgICAgIGVycm9ycy5hZGQoeyB0eXBlOiAnZHVwbGljYXRlJywgbWVzc2FnZXM6IFtgVGhpcyBlbWFpbCBpcyBub3QgYXZhaWxhYmxlOiAke2VtYWlsfWBdLCBuYW1lOiAnZW1haWwnIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkb2MudXNlcm5hbWUgPT09IHVzZXJuYW1lKSB7XHJcbiAgICAgICAgZXJyb3JzLmFkZCh7IHR5cGU6ICdkdXBsaWNhdGUnLCBtZXNzYWdlczogW2BUaGlzIHVzZXJuYW1lIGlzIG5vdCBhdmFpbGFibGU6ICR7dXNlcm5hbWV9YF0sIG5hbWU6ICd1c2VybmFtZScgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVqKEFycmF5LmZyb20oZXJyb3JzKSlcclxuICB9KVxyXG59XHJcblxyXG4vLyBIb29rc1xyXG5Vc2VyU2NoZW1hLnByZSgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5pc05ldykge1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IHV0aWxzLmVuY3J5cHQodGhpcy5wYXNzd29yZClcclxuICAgIHRoaXMudXNlcklkID0gYXdhaXQgQ291bnRlci5nZW5lcmF0ZVNlcSgnVXNlcnMnKVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IFVzZXJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbFxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tICcuLi9jb250cm9sbGVycydcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIucG9zdCgnL3NpZ251cCcsIGN0LnNpZ251cENvbnRyb2xsZXIpXHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBjdC5sb2dpbkNvbnRyb2xsZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIiwiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljaydcclxuXHJcbmV4cG9ydCBjb25zdCBlbmNyeXB0ID0gKHBhc3N3b3JkKSA9PiBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlID0gKHBhc3N3b3JkLCBoYXNoKSA9PiBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaClcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRva2VuID0gKGRhdGEsIGV4cGlyZXNJbiA9ICc0aCcpID0+IGp3dC5zaWduKHBpY2soZGF0YSwgWyd1c2VySWQnXSksIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luIH0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9vbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9waWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=