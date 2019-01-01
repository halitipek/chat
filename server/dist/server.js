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




var loginController =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {
    var _req$body, email, password, user;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__["default"].getByEmail(email);

          case 4:
            user = _context.sent;
            _context.next = 7;
            return user.checkPassword(password);

          case 7:
            res.status(200).json(user.clear());
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            res.status(403).json(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 10]]);
  }));

  return function loginController(_x, _x2, _x3) {
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
            res.status(201).json(newUser.clear());
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(422).json(_context.t0);

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
              return _context2.abrupt("return", rej({
                type: 'wrong',
                messages: ['Wrong password'],
                name: 'password'
              }));

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
              return _context3.abrupt("return", rej({
                type: 'not_found',
                messages: ['User not found!'],
                name: 'userId'
              }));

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
              return _context4.abrupt("return", rej({
                type: 'not_found',
                messages: ['User not found!'],
                name: 'username'
              }));

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
              return _context5.abrupt("return", rej({
                type: 'not_found',
                messages: ['User not found!'],
                name: 'email'
              }));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NpZ251cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXItbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9vbWl0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3BpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJtb25nb29zZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsImF1dG9JbmRleCIsImNvbm5lY3Rpb24iLCJvbmNlIiwiY29uc29sZSIsImxvZyIsImxvZ2luQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsIlVzZXIiLCJnZXRCeUVtYWlsIiwidXNlciIsImNoZWNrUGFzc3dvcmQiLCJzdGF0dXMiLCJqc29uIiwiY2xlYXIiLCJzaWdudXBDb250cm9sbGVyIiwiaXNBdmFpbGFibGUiLCJjcmVhdGUiLCJuZXdVc2VyIiwic2V0IiwiZ2VuZXJhdGVUb2tlbiIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiY29ycyIsInJvdXRlcyIsImxpc3RlbiIsIlBPUlQiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIk51bWJlciIsInVuaXF1ZSIsImZpcnN0TmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImxldmVsIiwiZGVmYXVsdCIsInJlbWVtYmVyTWUiLCJCb29sZWFuIiwidGltZXN0YW1wcyIsIm1ldGhvZHMiLCJvbWl0IiwidG9PYmplY3QiLCJnZW5lcmF0ZUlkIiwiUHJvbWlzZSIsInJlaiIsIm1vZGVsIiwiZmluZCIsInNvcnQiLCJsaW1pdCIsImxlYW4iLCJsYXN0VXNlciIsIm5ld1VzZXJJZCIsInV0aWxzIiwiaXNWYWxpZCIsIm1lc3NhZ2VzIiwibmFtZSIsInN0YXRpY3MiLCJnZXRCeUlkIiwiYXJyIiwiZ2V0QnlVc2VybmFtZSIsIm1hdGNoIiwiJG9yIiwiJHJlZ2V4IiwiUmVnRXhwIiwibGVuZ3RoIiwiZXJyb3JzIiwiU2V0IiwiZm9yRWFjaCIsImRvYyIsImFkZCIsIkFycmF5IiwiZnJvbSIsInByZSIsImlzTmV3IiwiVXNlck1vZGVsIiwicm91dGVyIiwiUm91dGVyIiwicG9zdCIsImN0IiwiZW5jcnlwdCIsImJjcnlwdCIsImhhc2giLCJjb21wYXJlIiwiZGF0YSIsImV4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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdCA9ICgpID0+IHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX1VSTCwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICBhdXRvSW5kZXg6IHRydWVcclxuICB9KVxyXG5cclxuICBtb25nb29zZS5jb25uZWN0aW9uLm9uY2UoJ29wZW4nLCAoKSA9PiBjb25zb2xlLmxvZygnREIgY29ubmVjdGlvbiBzdWNjZXNzZnVsIScpKVxyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgc2lnbnVwQ29udHJvbGxlciB9IGZyb20gJy4vc2lnbnVwLWNvbnRyb2xsZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9sb2dpbi1jb250cm9sbGVyJ1xyXG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlci1tb2RlbCdcclxuXHJcbmNvbnN0IGxvZ2luQ29udHJvbGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZ2V0QnlFbWFpbChlbWFpbClcclxuICAgIGF3YWl0IHVzZXIuY2hlY2tQYXNzd29yZChwYXNzd29yZClcclxuICAgIFxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlci5jbGVhcigpKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oZXJyKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyXHJcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyLW1vZGVsJ1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCBzaWdudXBDb250cm9sbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IFVzZXIuaXNBdmFpbGFibGUocmVxLmJvZHkpXHJcbiAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgVXNlci5jcmVhdGUocmVxLmJvZHkpXHJcblxyXG4gICAgcmVzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtnZW5lcmF0ZVRva2VuKG5ld1VzZXIpfWApXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdVc2VyLmNsZWFyKCkpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbihlcnIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWdudXBDb250cm9sbGVyXHJcbiIsImltcG9ydCAnZG90ZW52L2NvbmZpZydcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25maWcvZGInXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXHJcblxyXG5jb25uZWN0KClcclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSlcclxuYXBwLnVzZShjb3JzKCkpXHJcbmFwcC51c2Uocm91dGVzKVxyXG5cclxuYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHVwIG9uIHBvcnQgJHtwcm9jZXNzLmVudi5QT1JUfWApKVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xyXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCdcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VySWQ6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgZmlyc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgbGFzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBsZXZlbDoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMVxyXG4gIH0sXHJcbiAgc3RhdHVzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAxXHJcbiAgfSxcclxuICByZW1lbWJlck1lOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9XHJcbn0sXHJcbntcclxuICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG4vLyBNZXRob2RzXHJcblVzZXJTY2hlbWEubWV0aG9kcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gb21pdCh0aGlzLnRvT2JqZWN0KCksIFsncGFzc3dvcmQnLCAnX2lkJywgJ19fdicsICdyZW1lbWJlck1lJ10pXHJcbn1cclxuXHJcblVzZXJTY2hlbWEubWV0aG9kcy5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgIGNvbnN0IGxhc3RVc2VyID0gYXdhaXQgdGhpcy5tb2RlbCgnVXNlcicpLmZpbmQoe30sICd1c2VySWQnKS5zb3J0KCctdXNlcklkJykubGltaXQoMSkubGVhbigpXHJcblxyXG4gICAgaWYgKGxhc3RVc2VyWzBdKSB7XHJcbiAgICAgIGNvbnN0IG5ld1VzZXJJZCA9IGxhc3RVc2VyWzBdLnVzZXJJZCArIDFcclxuICAgICAgcmV0dXJuIHJlcyhuZXdVc2VySWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcygxKVxyXG4gIH0pICBcclxufVxyXG5cclxuVXNlclNjaGVtYS5tZXRob2RzLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdXRpbHMuY29tcGFyZShwYXNzd29yZCwgdGhpcy5wYXNzd29yZClcclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiByZXModHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVqKHsgdHlwZTogJ3dyb25nJywgbWVzc2FnZXM6IFsnV3JvbmcgcGFzc3dvcmQnXSwgbmFtZTogJ3Bhc3N3b3JkJyB9KVxyXG4gIH0pXHJcbn1cclxuLy8gU3RhdGljc1xyXG5Vc2VyU2NoZW1hLnN0YXRpY3MuZ2V0QnlJZCA9IGZ1bmN0aW9uICh1c2VySWQpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBhcnIgPSBhd2FpdCB0aGlzLmZpbmQoeyB1c2VySWQgfSkubGltaXQoMSlcclxuXHJcbiAgICBpZiAoYXJyWzBdKSB7XHJcbiAgICAgIHJldHVybiByZXMoYXJyWzBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWooeyB0eXBlOiAnbm90X2ZvdW5kJywgbWVzc2FnZXM6IFsnVXNlciBub3QgZm91bmQhJ10sIG5hbWU6ICd1c2VySWQnIH0pXHJcbiAgfSlcclxufVxyXG5cclxuVXNlclNjaGVtYS5zdGF0aWNzLmdldEJ5VXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRoaXMuZmluZCh7IHVzZXJuYW1lIH0pLmxpbWl0KDEpXHJcblxyXG4gICAgaWYgKG1hdGNoWzBdKSB7XHJcbiAgICAgIHJldHVybiByZXMobWF0Y2hbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlaih7IHR5cGU6ICdub3RfZm91bmQnLCBtZXNzYWdlczogWydVc2VyIG5vdCBmb3VuZCEnXSwgbmFtZTogJ3VzZXJuYW1lJyB9KVxyXG4gIH0pXHJcbn1cclxuXHJcblVzZXJTY2hlbWEuc3RhdGljcy5nZXRCeUVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0aGlzLmZpbmQoeyBlbWFpbCB9KS5saW1pdCgxKVxyXG5cclxuICAgIGlmIChtYXRjaFswXSkge1xyXG4gICAgICByZXR1cm4gcmVzKG1hdGNoWzBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWooeyB0eXBlOiAnbm90X2ZvdW5kJywgbWVzc2FnZXM6IFsnVXNlciBub3QgZm91bmQhJ10sIG5hbWU6ICdlbWFpbCcgfSlcclxuICB9KVxyXG59XHJcblxyXG5Vc2VyU2NoZW1hLnN0YXRpY3MuaXNBdmFpbGFibGUgPSBmdW5jdGlvbiAoeyB1c2VybmFtZSwgZW1haWwgfSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgIGNvbnN0IG1hdGNoID0gYXdhaXQgdGhpcy5maW5kKHskb3I6IFt7ZW1haWw6IHskcmVnZXg6IG5ldyBSZWdFeHAoYF4ke2VtYWlsfSRgLCAnaScpfX0sIHt1c2VybmFtZTogeyRyZWdleDogbmV3IFJlZ0V4cChgXiR7dXNlcm5hbWV9JGAsICdpJyl9fV19LCAnZW1haWwgdXNlcm5hbWUnKS5saW1pdCgyKS5sZWFuKClcclxuXHJcbiAgICBpZiAobWF0Y2gubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiByZXModHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgU2V0KClcclxuXHJcbiAgICBtYXRjaC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgIGlmIChkb2MuZW1haWwgPT09IGVtYWlsKSB7XHJcbiAgICAgICAgZXJyb3JzLmFkZCh7IHR5cGU6ICdkdXBsaWNhdGUnLCBtZXNzYWdlczogW2BUaGlzIGVtYWlsIGlzIG5vdCBhdmFpbGFibGU6ICR7ZW1haWx9YF0sIG5hbWU6ICdlbWFpbCcgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRvYy51c2VybmFtZSA9PT0gdXNlcm5hbWUpIHtcclxuICAgICAgICBlcnJvcnMuYWRkKHsgdHlwZTogJ2R1cGxpY2F0ZScsIG1lc3NhZ2VzOiBbYFRoaXMgdXNlcm5hbWUgaXMgbm90IGF2YWlsYWJsZTogJHt1c2VybmFtZX1gXSwgbmFtZTogJ3VzZXJuYW1lJyB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZWooQXJyYXkuZnJvbShlcnJvcnMpKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIEhvb2tzXHJcblVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmlzTmV3KSB7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gYXdhaXQgdXRpbHMuZW5jcnlwdCh0aGlzLnBhc3N3b3JkKVxyXG4gICAgdGhpcy51c2VySWQgPSBhd2FpdCB0aGlzLmdlbmVyYXRlSWQoKVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IFVzZXJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbFxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tICcuLi9jb250cm9sbGVycydcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIucG9zdCgnL3NpZ251cCcsIGN0LnNpZ251cENvbnRyb2xsZXIpXHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBjdC5sb2dpbkNvbnRyb2xsZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIiwiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljaydcclxuXHJcbmV4cG9ydCBjb25zdCBlbmNyeXB0ID0gKHBhc3N3b3JkKSA9PiBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlID0gKHBhc3N3b3JkLCBoYXNoKSA9PiBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaClcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRva2VuID0gKGRhdGEsIGV4cGlyZXNJbiA9ICc0aCcpID0+IGp3dC5zaWduKHBpY2soZGF0YSwgWyd1c2VySWQnXSksIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luIH0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9vbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9waWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=