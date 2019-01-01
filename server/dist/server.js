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
    var _req$body, email, password, user, isValid;

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
            isValid = _context.sent;
            res.status(200).json(user.clear());
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.status(404).json(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 11]]);
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
            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__["default"].isUniq(req.body);

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
                name: 'user'
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
              return _context4.abrupt("return", rej({
                type: 'not_found',
                messages: ['User not found!'],
                name: 'email'
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

UserSchema.statics.isUniq = function (_ref5) {
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
          return _utils__WEBPACK_IMPORTED_MODULE_3__["encrypt"](this.password);

        case 3:
          this.password = _context6.sent;
          _context6.next = 6;
          return this.generateId();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NpZ251cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXItbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9vbWl0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3BpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJtb25nb29zZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsImF1dG9JbmRleCIsImNvbm5lY3Rpb24iLCJvbmNlIiwiY29uc29sZSIsImxvZyIsImxvZ2luQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsIlVzZXIiLCJnZXRCeUVtYWlsIiwidXNlciIsImNoZWNrUGFzc3dvcmQiLCJpc1ZhbGlkIiwic3RhdHVzIiwianNvbiIsImNsZWFyIiwic2lnbnVwQ29udHJvbGxlciIsImlzVW5pcSIsImNyZWF0ZSIsIm5ld1VzZXIiLCJzZXQiLCJnZW5lcmF0ZVRva2VuIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJjb3JzIiwicm91dGVzIiwibGlzdGVuIiwiUE9SVCIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiTnVtYmVyIiwidW5pcXVlIiwiZmlyc3ROYW1lIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwibGV2ZWwiLCJkZWZhdWx0IiwicmVtZW1iZXJNZSIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwibWV0aG9kcyIsIm9taXQiLCJ0b09iamVjdCIsImdlbmVyYXRlSWQiLCJQcm9taXNlIiwicmVqIiwibW9kZWwiLCJmaW5kIiwic29ydCIsImxpbWl0IiwibGVhbiIsImxhc3RVc2VyIiwibmV3VXNlcklkIiwidXRpbHMiLCJtZXNzYWdlcyIsIm5hbWUiLCJzdGF0aWNzIiwiZ2V0QnlJZCIsImFyciIsIm1hdGNoIiwiJG9yIiwiJHJlZ2V4IiwiUmVnRXhwIiwibGVuZ3RoIiwiZXJyb3JzIiwiU2V0IiwiZm9yRWFjaCIsImRvYyIsImFkZCIsIkFycmF5IiwiZnJvbSIsInByZSIsImlzTmV3IiwiVXNlck1vZGVsIiwicm91dGVyIiwiUm91dGVyIiwicG9zdCIsImN0IiwiZW5jcnlwdCIsImJjcnlwdCIsImhhc2giLCJjb21wYXJlIiwiZGF0YSIsImV4cGlyZXNJbiIsImp3dCIsInNpZ24i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QU8sQ0FBQ0MsR0FBUixDQUFZdUcsVUFBN0MsRUFBeUQ7QUFBRUosYUFBUyxFQUFUQTtBQUFGLEdBQXpELENBQTVCO0FBQUEsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUNQUCxvRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gKCkgPT4ge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREJfVVJMLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgIGF1dG9JbmRleDogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIG1vbmdvb3NlLmNvbm5lY3Rpb24ub25jZSgnb3BlbicsICgpID0+IGNvbnNvbGUubG9nKCdEQiBjb25uZWN0aW9uIHN1Y2Nlc3NmdWwhJykpXHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWdudXBDb250cm9sbGVyIH0gZnJvbSAnLi9zaWdudXAtY29udHJvbGxlcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2dpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ2luLWNvbnRyb2xsZXInXHJcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyLW1vZGVsJ1xyXG5cclxuY29uc3QgbG9naW5Db250cm9sbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5nZXRCeUVtYWlsKGVtYWlsKVxyXG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHVzZXIuY2hlY2tQYXNzd29yZChwYXNzd29yZClcclxuICAgIFxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlci5jbGVhcigpKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oZXJyKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyXHJcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyLW1vZGVsJ1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCBzaWdudXBDb250cm9sbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IFVzZXIuaXNVbmlxKHJlcS5ib2R5KVxyXG4gICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KVxyXG5cclxuICAgIHJlcy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7Z2VuZXJhdGVUb2tlbihuZXdVc2VyKX1gKVxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24obmV3VXNlci5jbGVhcigpKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oZXJyKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbnVwQ29udHJvbGxlclxyXG4iLCJpbXBvcnQgJ2RvdGVudi9jb25maWcnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4vY29uZmlnL2RiJ1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuY29ubmVjdCgpXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpXHJcbmFwcC51c2UoY29ycygpKVxyXG5hcHAudXNlKHJvdXRlcylcclxuXHJcbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBpcyB1cCBvbiBwb3J0ICR7cHJvY2Vzcy5lbnYuUE9SVH1gKSlcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcclxuaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29taXQnXHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlcklkOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIGZpcnN0TmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGxhc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgbGV2ZWw6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDFcclxuICB9LFxyXG4gIHN0YXR1czoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMVxyXG4gIH0sXHJcbiAgcmVtZW1iZXJNZToge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfVxyXG59LFxyXG57XHJcbiAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxuLy8gTWV0aG9kc1xyXG5Vc2VyU2NoZW1hLm1ldGhvZHMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG9taXQodGhpcy50b09iamVjdCgpLCBbJ3Bhc3N3b3JkJywgJ19pZCcsICdfX3YnLCAncmVtZW1iZXJNZSddKVxyXG59XHJcblxyXG5Vc2VyU2NoZW1hLm1ldGhvZHMuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICBjb25zdCBsYXN0VXNlciA9IGF3YWl0IHRoaXMubW9kZWwoJ1VzZXInKS5maW5kKHt9LCAndXNlcklkJykuc29ydCgnLXVzZXJJZCcpLmxpbWl0KDEpLmxlYW4oKVxyXG5cclxuICAgIGlmIChsYXN0VXNlclswXSkge1xyXG4gICAgICBjb25zdCBuZXdVc2VySWQgPSBsYXN0VXNlclswXS51c2VySWQgKyAxXHJcbiAgICAgIHJldHVybiByZXMobmV3VXNlcklkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXMoMSlcclxuICB9KSAgXHJcbn1cclxuXHJcblVzZXJTY2hlbWEubWV0aG9kcy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHV0aWxzLmNvbXBhcmUocGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gcmVzKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlaih7IHR5cGU6ICd3cm9uZycsIG1lc3NhZ2VzOiBbJ1dyb25nIHBhc3N3b3JkJ10sIG5hbWU6ICdwYXNzd29yZCcgfSlcclxuICB9KVxyXG59XHJcbi8vIFN0YXRpY3NcclxuVXNlclNjaGVtYS5zdGF0aWNzLmdldEJ5SWQgPSBmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgYXJyID0gYXdhaXQgdGhpcy5maW5kKHsgdXNlcklkIH0pLmxpbWl0KDEpXHJcblxyXG4gICAgaWYgKGFyclswXSkge1xyXG4gICAgICByZXR1cm4gcmVzKGFyclswXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVqKHsgdHlwZTogJ25vdF9mb3VuZCcsIG1lc3NhZ2VzOiBbJ1VzZXIgbm90IGZvdW5kISddLCBuYW1lOiAndXNlcicgfSlcclxuICB9KVxyXG59XHJcblxyXG5Vc2VyU2NoZW1hLnN0YXRpY3MuZ2V0QnlFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgIGNvbnN0IG1hdGNoID0gYXdhaXQgdGhpcy5maW5kKHsgZW1haWwgfSkubGltaXQoMSlcclxuXHJcbiAgICBpZiAobWF0Y2hbMF0pIHtcclxuICAgICAgcmV0dXJuIHJlcyhtYXRjaFswXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVqKHsgdHlwZTogJ25vdF9mb3VuZCcsIG1lc3NhZ2VzOiBbJ1VzZXIgbm90IGZvdW5kISddLCBuYW1lOiAnZW1haWwnIH0pXHJcbiAgfSlcclxufVxyXG5cclxuVXNlclNjaGVtYS5zdGF0aWNzLmlzVW5pcSA9IGZ1bmN0aW9uICh7IHVzZXJuYW1lLCBlbWFpbCB9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0aGlzLmZpbmQoeyRvcjogW3tlbWFpbDogeyRyZWdleDogbmV3IFJlZ0V4cChgXiR7ZW1haWx9JGAsICdpJyl9fSwge3VzZXJuYW1lOiB7JHJlZ2V4OiBuZXcgUmVnRXhwKGBeJHt1c2VybmFtZX0kYCwgJ2knKX19XX0sICdlbWFpbCB1c2VybmFtZScpLmxpbWl0KDIpLmxlYW4oKVxyXG5cclxuICAgIGlmIChtYXRjaC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHJlcyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyBTZXQoKVxyXG5cclxuICAgIG1hdGNoLmZvckVhY2goZG9jID0+IHtcclxuICAgICAgaWYgKGRvYy5lbWFpbCA9PT0gZW1haWwpIHtcclxuICAgICAgICBlcnJvcnMuYWRkKHsgdHlwZTogJ2R1cGxpY2F0ZScsIG1lc3NhZ2VzOiBbYFRoaXMgZW1haWwgaXMgbm90IGF2YWlsYWJsZTogJHtlbWFpbH1gXSwgbmFtZTogJ2VtYWlsJyB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZG9jLnVzZXJuYW1lID09PSB1c2VybmFtZSkge1xyXG4gICAgICAgIGVycm9ycy5hZGQoeyB0eXBlOiAnZHVwbGljYXRlJywgbWVzc2FnZXM6IFtgVGhpcyB1c2VybmFtZSBpcyBub3QgYXZhaWxhYmxlOiAke3VzZXJuYW1lfWBdLCBuYW1lOiAndXNlcm5hbWUnIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlaihBcnJheS5mcm9tKGVycm9ycykpXHJcbiAgfSlcclxufVxyXG5cclxuLy8gSG9va3NcclxuVXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuaXNOZXcpIHtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCB1dGlscy5lbmNyeXB0KHRoaXMucGFzc3dvcmQpXHJcbiAgICB0aGlzLnVzZXJJZCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVJZCgpXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsXHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCAqIGFzIGN0IGZyb20gJy4uL2NvbnRyb2xsZXJzJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5wb3N0KCcvc2lnbnVwJywgY3Quc2lnbnVwQ29udHJvbGxlcilcclxucm91dGVyLnBvc3QoJy9sb2dpbicsIGN0LmxvZ2luQ29udHJvbGxlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iLCJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHQgPSAocGFzc3dvcmQpID0+IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMClcclxuZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAocGFzc3dvcmQsIGhhc2gpID0+IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9rZW4gPSAoZGF0YSwgZXhwaXJlc0luID0gJzRoJykgPT4gand0LnNpZ24ocGljayhkYXRhLCBbJ3VzZXJJZCddKSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgeyBleHBpcmVzSW4gfSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL29taXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3BpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==