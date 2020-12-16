module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/*! exports provided: storageRef, auth, firestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageRef", function() { return storageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "online-form-builder.firebaseapp.com",
  databaseURL: "https://online-form-builder-default-rtdb.firebaseio.com",
  projectId: "online-form-builder",
  storageBucket: "online-form-builder.appspot.com",
  messagingSenderId: "676308604224",
  appId: "1:676308604224:web:2fcb466aa7634695df16a5"
};
if (!firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps.length) firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(firebaseConfig);else firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.app();
const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.storage().ref();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth();
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore();

/***/ }),

/***/ "./helpers/user.js":
/*!*************************!*\
  !*** ./helpers/user.js ***!
  \*************************/
/*! exports provided: firebaseLogin, firebaseSignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseLogin", function() { return firebaseLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseSignUp", function() { return firebaseSignUp; });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebaseConfig */ "./firebaseConfig.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const addUserToCollection = async result => {
  let oDocument = {};

  try {
    const document = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection('users').doc(result.user.uid).set({
      email: result.user.email
    });
    oDocument.ok = true;
    oDocument.data = document;
  } catch (err) {
    oDocument.ok = false;
    oDocument.error = err;
  }

  return oDocument;
};

const firebaseLogin = async (email, password) => {
  let result;

  try {
    result = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
  }

  if (result) return result.user;else return null;
};
const firebaseSignUp = async (email, password) => {
  let result;

  try {
    result = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].createUserWithEmailAndPassword(email, password);
    const oDocument = await addUserToCollection(result); //if there's a problem saving user in users collection, then it is deleted

    if (!oDocument.ok) {
      await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.delete();
      throw _objectSpread({}, oDocument.error);
    }
  } catch (err) {
    result = err;
  }

  return result;
};

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/user */ "./helpers/user.js");



const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    name: 'Firebase security',
    credentials: {
      email: {
        label: 'Email',
        type: 'text',
        placeholder: 'your@mail.com'
      },
      password: {
        label: 'Password',
        type: 'password'
      }
    },
    authorize: async credentials => {
      const user = await Object(_helpers_user__WEBPACK_IMPORTED_MODULE_2__["firebaseLogin"])(credentials.email, credentials.password);
      return Promise.resolve(user);
    }
  })],
  session: {
    jwt: true
  },
  jwt: {
    secret: 'SuperSecretKey'
  },
  debug: true
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy91c2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsInN0b3JhZ2VSZWYiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImZpcmVzdG9yZSIsImFkZFVzZXJUb0NvbGxlY3Rpb24iLCJyZXN1bHQiLCJvRG9jdW1lbnQiLCJkb2N1bWVudCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1c2VyIiwidWlkIiwic2V0IiwiZW1haWwiLCJvayIsImRhdGEiLCJlcnIiLCJlcnJvciIsImZpcmViYXNlTG9naW4iLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImZpcmViYXNlU2lnblVwIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3VycmVudFVzZXIiLCJkZWxldGUiLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dGhvcml6ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vzc2lvbiIsImp3dCIsInNlY3JldCIsImRlYnVnIiwicmVxIiwicmVzIiwiTmV4dEF1dGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENB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YUFBSyxFQUFFLE9BQVI7QUFBaUJDLFlBQUksRUFBRSxNQUF2QjtBQUErQkMsbUJBQVcsRUFBQztBQUEzQyxPQURDO0FBRVJoQixjQUFRLEVBQUU7QUFBQ2MsYUFBSyxFQUFFLFVBQVI7QUFBb0JDLFlBQUksRUFBRTtBQUExQjtBQUZGLEtBRk07QUFNbEJFLGFBQVMsRUFBRSxNQUFNSixXQUFOLElBQXNCO0FBQzdCLFlBQU10QixJQUFJLEdBQUcsTUFBTVEsbUVBQWEsQ0FBQ2MsV0FBVyxDQUFDbkIsS0FBYixFQUFvQm1CLFdBQVcsQ0FBQ2IsUUFBaEMsQ0FBaEM7QUFDQSxhQUFPa0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCNUIsSUFBaEIsQ0FBUDtBQUNIO0FBVGlCLEdBQXRCLENBRFMsQ0FERztBQWNkNkIsU0FBTyxFQUFFO0FBQ1BDLE9BQUcsRUFBRTtBQURFLEdBZEs7QUFpQmRBLEtBQUcsRUFBQztBQUNBQyxVQUFNLEVBQUU7QUFEUixHQWpCVTtBQW9CZEMsT0FBSyxFQUFFO0FBcEJPLENBQWhCO0FBdUJlLGdFQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY0MsZ0RBQVEsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVdqQixPQUFYLENBQXJDLEU7Ozs7Ozs7Ozs7O0FDM0JBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIik7XG4iLCJpbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IFwib25saW5lLWZvcm0tYnVpbGRlci5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vb25saW5lLWZvcm0tYnVpbGRlci1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJvbmxpbmUtZm9ybS1idWlsZGVyXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcIm9ubGluZS1mb3JtLWJ1aWxkZXIuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY3NjMwODYwNDIyNFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2NzYzMDg2MDQyMjQ6d2ViOjJmY2I0NjZhYTc2MzQ2OTVkZjE2YTVcIlxyXG59XHJcblxyXG5pZighZmlyZWJhc2UuYXBwcy5sZW5ndGgpXHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG5lbHNlXHJcbiAgICBmaXJlYmFzZS5hcHAoKVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpXHJcbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG4iLCJpbXBvcnQge2F1dGgsIGZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2VDb25maWcnXHJcblxyXG5jb25zdCBhZGRVc2VyVG9Db2xsZWN0aW9uID0gYXN5bmMocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgbGV0IG9Eb2N1bWVudCA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHJlc3VsdC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgZW1haWw6IHJlc3VsdC51c2VyLmVtYWlsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb0RvY3VtZW50Lm9rID0gdHJ1ZVxyXG4gICAgICAgIG9Eb2N1bWVudC5kYXRhID0gZG9jdW1lbnRcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgb0RvY3VtZW50Lm9rID0gZmFsc2VcclxuICAgICAgICBvRG9jdW1lbnQuZXJyb3IgPSBlcnJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIG9Eb2N1bWVudFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2VMb2dpbiA9IGFzeW5jKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdFxyXG5cclxuICAgIHRyeXsgICAgXHJcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYocmVzdWx0KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQudXNlclxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaXJlYmFzZVNpZ25VcCA9IGFzeW5jKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdFxyXG4gICAgXHJcbiAgICB0cnl7XHJcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnN0IG9Eb2N1bWVudCA9IGF3YWl0IGFkZFVzZXJUb0NvbGxlY3Rpb24ocmVzdWx0KVxyXG5cclxuICAgICAgICAvL2lmIHRoZXJlJ3MgYSBwcm9ibGVtIHNhdmluZyB1c2VyIGluIHVzZXJzIGNvbGxlY3Rpb24sIHRoZW4gaXQgaXMgZGVsZXRlZFxyXG4gICAgICAgIGlmKCFvRG9jdW1lbnQub2spe1xyXG4gICAgICAgICAgICBhd2FpdCBhdXRoLmN1cnJlbnRVc2VyLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgIHRocm93IHsuLi5vRG9jdW1lbnQuZXJyb3J9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgICByZXN1bHQgPSBlcnJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn0iLCJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZpcmViYXNlTG9naW4gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3VzZXInXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcclxuICAgICAgICBuYW1lOiAnRmlyZWJhc2Ugc2VjdXJpdHknLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOntcclxuICAgICAgICAgICAgZW1haWw6IHtsYWJlbDogJ0VtYWlsJywgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjoneW91ckBtYWlsLmNvbSd9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDoge2xhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aG9yaXplOiBhc3luYyhjcmVkZW50aWFscykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmlyZWJhc2VMb2dpbihjcmVkZW50aWFscy5lbWFpbCwgY3JlZGVudGlhbHMucGFzc3dvcmQpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgand0OiB0cnVlXHJcbiAgfSxcclxuICBqd3Q6e1xyXG4gICAgICBzZWNyZXQ6ICdTdXBlclNlY3JldEtleSdcclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==