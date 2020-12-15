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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("e6rX");


/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "SYND":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createForm; });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fR0J");
/* harmony import */ var _questionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("r1Eb");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cEQk");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getOptionAnswers = async questionId => {
  const arrayOptions = [];
  const snapshot = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].optionAnswers).where('questionId', '==', questionId).get();
  snapshot.forEach(doc => arrayOptions.push({
    text: doc.data().text,
    optionAnswerId: doc.id
  }));
  return arrayOptions;
};

const getQuestions = async formId => {
  let snapshotQuestions;
  let tempArrayQuestions = [];
  let arrayQuestions = [];
  snapshotQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].questions).where('formId', '==', formId).get();
  snapshotQuestions.forEach(doc => tempArrayQuestions.push(doc));

  for (let doc of tempArrayQuestions) {
    let oQuestion = _objectSpread({}, doc.data());

    if (oQuestion.type === _questionTypes__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].multiOptions) oQuestion.options = await getOptionAnswers(doc.id);
    delete oQuestion.formId;
    arrayQuestions.push(_objectSpread(_objectSpread({}, oQuestion), {}, {
      questionId: doc.id
    }));
  }

  return arrayQuestions;
};

const getForms = async (uid, formId) => {
  let result = [];
  let snapshotForm;
  let document;
  if (uid && formId) return {
    message: 'You must provide uid or formId but not both.'
  };
  if (!uid && !formId) return {
    message: 'You must provide uid or formId'
  };

  try {
    if (formId) {
      document = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].forms).doc(formId).get();
      result = document.data();
      result.formId = document.id;
      result.questions = await getQuestions(formId);
    }

    if (uid) {
      /*this will store forms' snapshot temporarily, because asynchronous functions 
      doesn't executes correctly within forEach method of snapshot.*/
      let tempForms = [];
      snapshotForm = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].forms).where('uid', '==', uid).get();
      snapshotForm.forEach(doc => {
        tempForms.push({
          id: doc.id,
          data: doc.data()
        });
      });

      for (let form of tempForms) {
        form.data.formId = form.id;
        form.data.questions = await getQuestions(form.id);
        result.push(form.data);
      }
    }
  } catch (err) {
    console.log('ERROR', err);
  }

  return result;
};
/**
 * Registers each option of options array into database
 * @param {string} questionId 
 * @param {array} options 
 */

const createOptionAnswers = async (questionId, options) => {
  for (let text of options) {
    try {
      await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].optionAnswers).add({
        questionId,
        text
      });
    } catch {
      return {
        ok: false,
        message: 'Error while trying to save option answers'
      };
    }
  }

  return {
    ok: true
  };
};
/**
 * Validates if the question object has the necessary properties
 * @param {object} question 
 */


const validateQuestion = question => {
  if (!question) return {
    ok: false,
    message: 'Form must have at least one question'
  };
  if (!question.type || !question.text) return {
    ok: false,
    message: 'Question text and type must be provided'
  }; //if question type is multi-options

  if (question.type === _questionTypes__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].multiOptions) {
    //if question options doesn't have at least 2 options
    if (!question.options || !question.options instanceof Array || question.options.length <= 1) return {
      ok: false,
      message: 'Question of type "multi-options" must have at least two option'
    };
  }

  return {
    ok: true
  };
};
/**
 * Registers the question into database
 * @param {string} formId 
 * @param {Number} number 
 * @param {object} question 
 */


const createQuestion = async (formId, number, question) => {
  const validation = validateQuestion(question);
  if (!validation.ok) return {
    message: validation.message
  };
  let newQuestion;

  try {
    newQuestion = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].questions).doc();
    await newQuestion.set({
      formId,
      number,
      type: question.type,
      text: question.text
    });

    if (question.type === _questionTypes__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].multiOptions) {
      const resultOptionAnswers = await createOptionAnswers(newQuestion.id, question.options);
      if (!resultOptionAnswers.ok) return {
        message: resultOptionAnswers.message
      };
    }
  } catch {
    return {
      message: 'Error while trying to save questions data'
    };
  }

  return await (await newQuestion.get()).data();
};
/**
 * Deletes selected form and it's questions and option answes
 */


const deleteForm = async formId => {
  const tempMultiOptionsQuestions = [];
  const batch = _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].batch(); //get questions with multi-options type 

  const snapshotMultiOptionsQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].questions).where('formId', '==', formId).where('type', '==', _questionTypes__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].multiOptions).get(); //each multi-optios questions is pushed to array

  snapshotMultiOptionsQuestions.forEach(doc => tempMultiOptionsQuestions.push(doc)); //for each question with multi-options type

  for (let doc of tempMultiOptionsQuestions) {
    //get option answers for current question
    const snapshotOptionAnswers = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].optionAnswers).where('questionId', '==', doc.id); //delete each option of current quiestion

    snapshotOptionAnswers.forEach(doc => batch.delete(doc.ref));
  }

  const snapshotQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].questions).where('formId', '==', formId).get();
  snapshotQuestions.forEach(doc => batch.delete(doc.ref));
  await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection('forms').doc(formId).delete();
  await batch.commit();
};
/**arrayDate = [year, monthIndex, day, *hour, *minutes, *seconds] 
 * hour, minutes and seconds are optionals
*/


const createForm = async (uid, formName, isPublic, limitResponses, arrayDate, arrayTime, questions) => {
  if (!uid) return {
    message: 'User ID is required'
  };
  if (!formName) return {
    message: 'Form name is required'
  };
  const data = {
    uid,
    formName,
    isPublic: isPublic == 'true'
  };
  if (limitResponses) data.limitResponses = limitResponses;

  if (arrayDate.length > 0) {
    const arrayDateFinal = []; //if arrayDate has at least one not undefined value, then it's pushed to arrayDateFinal

    const dateExists = arrayDate.some(value => value !== undefined);
    const timeExists = arrayTime.some(value => value !== undefined);

    if (dateExists) {
      arrayDateFinal.push(...arrayDate); //if arrayTime has at least one not undefined value, then it's pushed to arrayDateFinal

      if (timeExists) arrayDateFinal.push(...arrayTime);
    } else {
      if (timeExists) return {
        message: 'Invalid Date'
      };
    }

    data.endDate = new Date(...arrayDateFinal).toLocaleString(); //if endDate is not a date

    if (data.endDate == 'Invalid Date') return {
      message: 'Invalid Date'
    };
  }

  let result;

  try {
    result = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[/* firestore */ "b"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].forms).add(data);
  } catch {
    return {
      message: 'Error while trying to save form data'
    };
  }

  const form = await result.get();

  for (let index in questions) {
    const questionResult = await createQuestion(form.id, parseInt(index) + 1, questions[index]); //if there's an error registering questions in database, form and it's questions are deleted

    if (questionResult.message) {
      await deleteForm(form.id);
      return {
        message: questionResult.message
      };
    }
  }

  return await form.data();
};

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

/***/ "e6rX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SYND");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const uid = req.query.uid;
  const formId = req.query.formId;
  const result = await Object(_helpers_form__WEBPACK_IMPORTED_MODULE_0__[/* getForms */ "b"])(uid, formId);
  let ok;

  if (result.message) {
    res.statusCode = 400;
    ok = false;
  } else {
    res.statusCode = 200;
    ok = true;
  }

  res.json({
    ok,
    result
  });
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

/***/ "r1Eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  text: 'text',
  map: 'map',
  multiOptions: 'multi-options',
  range: 'range'
});

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });