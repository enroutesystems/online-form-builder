module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5lSs");


/***/ }),

/***/ "5lSs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iQSa");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const uid = req.query.uid;
  const formId = req.query.formId;

  if (!formId) {
    res.statusCode = 400;
    res.json({
      message: 'formId is required'
    });
  }

  const result = await Object(_helpers_answer__WEBPACK_IMPORTED_MODULE_0__[/* getResponses */ "a"])(formId, uid);
  res.statusCode = 200;
  res.json(result);
});

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cEQk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  users: 'users',
  userResponses: 'userResponses',
  questions: 'questions',
  optionAnswers: 'optionAnswers',
  forms: 'forms',
  allowedUsers: 'allowedUsers'
});

/***/ }),

/***/ "fR0J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export storageRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firestore; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ha8t");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wVQA");
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

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "iQSa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getResponses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendAnswers; });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fR0J");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cEQk");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getResponses = async (formId, uid) => {
  const arrayQuestions = [];
  const arrayResponses = [];
  const snapshotQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].questions).where('formId', '==', formId).get();
  snapshotQuestions.forEach(doc => arrayQuestions.push(doc.id));

  for (let questionId of arrayQuestions) {
    let snapshotUserResponses = _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].userResponses).where('questionId', '==', questionId);
    if (uid) snapshotUserResponses = await snapshotUserResponses.where('uid', '==', uid).get();else snapshotUserResponses = await snapshotUserResponses.get();
    snapshotUserResponses.forEach(doc => arrayResponses.push(doc.data()));
  }

  return {
    formId,
    responses: arrayResponses
  };
};
/**
 * Validates if sent answers have the correct format
 * @param {string[]} answers 
 */

const validateAnswers = answers => {
  for (let answer of answers) {
    if (!answer.questionId) return {
      message: 'Every answer must have a questionId'
    }; //checks if answer contains response or optionAnswerId but not both

    if (answer.response || answer.optionAnswerId) {
      if (answer.response && answer.optionAnswerId) return {
        message: 'No answer should contain both response and optionAnswerId'
      };
    } else return {
      message: 'Every answer must have a response or optionAnswerId'
    };
  }

  return {
    ok: true
  };
};
/**
 * 
 * @param {object} form 
 * @param {string} formId 
 * @param {string} uid 
 */


const isAllowedToAnswer = async (form, formId, uid) => {
  let oAllowedUser = {};

  if (!form.isPublic) {
    if (!uid) return {
      message: 'uid is required to fill this form'
    };
    const snapshotAllowedUsers = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].allowedUsers).where('formId', '==', formId).where('uid', '==', uid).get();
    snapshotAllowedUsers.forEach(doc => oAllowedUser = doc.data());
    if (oAllowedUser.uid === uid) return {
      ok: true
    };else return {
      message: 'User is not allowed to fill this form'
    };
  }
};
/**
 * Deletes all the responses in form made by the user
 * @param {string} uid 
 * @param {object[]} answers 
 */


const deleteUserResponse = async (uid, answers) => {
  const batch = _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].batch();

  for (let answer of answers) {
    const snapshotUserResponse = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].userResponses).where('questionId', '==', answer.questionId).where('uid', '==', uid).get();
    snapshotUserResponse.forEach(doc => {
      console.log('data', doc.data());
      batch.delete(doc.ref);
    });
  }

  await batch.commit();
};
/**
 * Saves the answers of a specific form into database
 * @param {string} uid 
 * @param {string[]} answers 
 */


const sendAnswers = async (formId, uid, answers) => {
  const form = await (await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].forms).doc(formId).get()).data();
  const validation = validateAnswers(answers);
  const allowedUser = await isAllowedToAnswer(form, formId, uid);
  if (validation.message) return {
    message: validation.message
  };
  if (allowedUser.message) return {
    message: allowedUser.message
  };

  for (let answer of answers) {
    try {
      await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].userResponses).add(_objectSpread({
        uid
      }, answer));
    } catch {
      await deleteUserResponse(uid, answers);
      return {
        message: 'Error while trying to save response into database'
      };
    }
  }

  return {
    ok: true
  };
};

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });