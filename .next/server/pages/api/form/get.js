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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/form/get.js");
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

/***/ "./helpers/answer.js":
/*!***************************!*\
  !*** ./helpers/answer.js ***!
  \***************************/
/*! exports provided: getResponses, isAllowedToAnswer, sendAnswers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponses", function() { return getResponses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllowedToAnswer", function() { return isAllowedToAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnswers", function() { return sendAnswers; });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collections */ "./helpers/collections.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getResponses = async (formId, uid) => {
  const arrayQuestions = [];
  const arrayResponses = [];
  const snapshotQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__["default"].questions).where('formId', '==', formId).get();
  snapshotQuestions.forEach(doc => arrayQuestions.push(doc.id));

  for (let questionId of arrayQuestions) {
    let snapshotUserResponses = _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__["default"].userResponses).where('questionId', '==', questionId);
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
    const snapshotAllowedUsers = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__["default"].allowedUsers).where('formId', '==', formId).where('uid', '==', uid).get();
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
  const batch = _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].batch();

  for (let answer of answers) {
    const snapshotUserResponse = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__["default"].userResponses).where('questionId', '==', answer.questionId).where('uid', '==', uid).get();
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
  const form = await (await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__["default"].forms).doc(formId).get()).data();
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
      await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_1__["default"].userResponses).add(_objectSpread({
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

/***/ "./helpers/collections.js":
/*!********************************!*\
  !*** ./helpers/collections.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  users: 'users',
  userResponses: 'userResponses',
  questions: 'questions',
  optionAnswers: 'optionAnswers',
  forms: 'forms',
  allowedUsers: 'allowedUsers'
});

/***/ }),

/***/ "./helpers/form.js":
/*!*************************!*\
  !*** ./helpers/form.js ***!
  \*************************/
/*! exports provided: getForms, createForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForms", function() { return getForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var _questionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionTypes */ "./helpers/questionTypes.js");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collections */ "./helpers/collections.js");
/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answer */ "./helpers/answer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getOptionAnswers = async questionId => {
  const arrayOptions = [];
  const snapshot = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].optionAnswers).where('questionId', '==', questionId).get();
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
  snapshotQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].questions).where('formId', '==', formId).get();
  snapshotQuestions.forEach(doc => tempArrayQuestions.push(doc));

  for (let doc of tempArrayQuestions) {
    let oQuestion = _objectSpread({}, doc.data());

    if (oQuestion.type === _questionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].multiOptions) oQuestion.options = await getOptionAnswers(doc.id);
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
  if (!uid && !formId) return {
    message: 'uid or formId was not specified'
  };

  try {
    if (formId) {
      document = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].forms).doc(formId).get();
      result = document.data();
      const isAllowed = await Object(_answer__WEBPACK_IMPORTED_MODULE_3__["isAllowedToAnswer"])(result, formId, uid);
      if (!isAllowed.ok && result.uid !== uid) return {
        message: 'User is not allowed to fill this form'
      };
      result.formId = document.id;
      result.questions = await getQuestions(formId);
    } else {
      /*this will store forms' snapshot temporarily, because asynchronous functions 
      doesn't executes correctly within forEach method of snapshot.*/
      let tempForms = [];
      snapshotForm = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].forms).where('uid', '==', uid).get();
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
      await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].optionAnswers).add({
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

  if (question.type === _questionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].multiOptions) {
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
    newQuestion = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].questions).doc();
    await newQuestion.set({
      formId,
      number,
      type: question.type,
      text: question.text
    });

    if (question.type === _questionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].multiOptions) {
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
  const batch = _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].batch(); //get questions with multi-options type 

  const snapshotMultiOptionsQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].questions).where('formId', '==', formId).where('type', '==', _questionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].multiOptions).get(); //each multi-optios questions is pushed to array

  snapshotMultiOptionsQuestions.forEach(doc => tempMultiOptionsQuestions.push(doc)); //for each question with multi-options type

  for (let doc of tempMultiOptionsQuestions) {
    //get option answers for current question
    const snapshotOptionAnswers = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].optionAnswers).where('questionId', '==', doc.id); //delete each option of current quiestion

    snapshotOptionAnswers.forEach(doc => batch.delete(doc.ref));
  }

  const snapshotQuestions = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].questions).where('formId', '==', formId).get();
  snapshotQuestions.forEach(doc => batch.delete(doc.ref));
  await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection('forms').doc(formId).delete();
  await batch.commit();
};

const allowUsers = async (formId, uid) => {
  try {
    await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].allowedUsers).add({
      formId,
      uid
    });
  } catch {
    return {
      message: 'Error while trying to save allowed users'
    };
  }

  return {
    ok: true
  };
};
/**arrayDate = [year, monthIndex, day, *hour, *minutes, *seconds] 
 * hour, minutes and seconds are optionals
*/


const createForm = async (uid, formName, isPublic, limitResponses, arrayDate, arrayTime, questions, allowedUsers) => {
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
    result = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection(_collections__WEBPACK_IMPORTED_MODULE_2__["default"].forms).add(data);
  } catch {
    return {
      message: 'Error while trying to save form data'
    };
  }

  const form = await result.get();

  if (allowedUsers && !isPublic) {
    for (uid of allowedUsers) {
      const allowUsersResult = await allowUsers(form.id, uid);

      if (allowUsersResult.message) {
        await deleteForm(form.id);
        return {
          message: allowUsersResult.message
        };
      }
    }
  }

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

/***/ "./helpers/questionTypes.js":
/*!**********************************!*\
  !*** ./helpers/questionTypes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  singleLineText: 'single-line-text',
  multipleLineText: 'multiple-line-text',
  link: 'link',
  map: 'map',
  multiOptions: 'multi-options',
  range: 'range',
  file: 'file'
});

/***/ }),

/***/ "./pages/api/form/get.js":
/*!*******************************!*\
  !*** ./pages/api/form/get.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/form */ "./helpers/form.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const uid = req.query.uid;
  const formId = req.query.formId;
  const result = await Object(_helpers_form__WEBPACK_IMPORTED_MODULE_0__["getForms"])(uid, formId);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hbnN3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9jb2xsZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9xdWVzdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9mb3JtL2dldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcHAiLCJzdG9yYWdlUmVmIiwic3RvcmFnZSIsInJlZiIsImF1dGgiLCJmaXJlc3RvcmUiLCJnZXRSZXNwb25zZXMiLCJmb3JtSWQiLCJ1aWQiLCJhcnJheVF1ZXN0aW9ucyIsImFycmF5UmVzcG9uc2VzIiwic25hcHNob3RRdWVzdGlvbnMiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbnMiLCJxdWVzdGlvbnMiLCJ3aGVyZSIsImdldCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJxdWVzdGlvbklkIiwic25hcHNob3RVc2VyUmVzcG9uc2VzIiwidXNlclJlc3BvbnNlcyIsImRhdGEiLCJyZXNwb25zZXMiLCJ2YWxpZGF0ZUFuc3dlcnMiLCJhbnN3ZXJzIiwiYW5zd2VyIiwibWVzc2FnZSIsInJlc3BvbnNlIiwib3B0aW9uQW5zd2VySWQiLCJvayIsImlzQWxsb3dlZFRvQW5zd2VyIiwiZm9ybSIsIm9BbGxvd2VkVXNlciIsImlzUHVibGljIiwic25hcHNob3RBbGxvd2VkVXNlcnMiLCJhbGxvd2VkVXNlcnMiLCJkZWxldGVVc2VyUmVzcG9uc2UiLCJiYXRjaCIsInNuYXBzaG90VXNlclJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZSIsImNvbW1pdCIsInNlbmRBbnN3ZXJzIiwiZm9ybXMiLCJ2YWxpZGF0aW9uIiwiYWxsb3dlZFVzZXIiLCJhZGQiLCJ1c2VycyIsIm9wdGlvbkFuc3dlcnMiLCJnZXRPcHRpb25BbnN3ZXJzIiwiYXJyYXlPcHRpb25zIiwic25hcHNob3QiLCJ0ZXh0IiwiZ2V0UXVlc3Rpb25zIiwidGVtcEFycmF5UXVlc3Rpb25zIiwib1F1ZXN0aW9uIiwidHlwZSIsInF1ZXN0aW9uVHlwZXMiLCJtdWx0aU9wdGlvbnMiLCJvcHRpb25zIiwiZ2V0Rm9ybXMiLCJyZXN1bHQiLCJzbmFwc2hvdEZvcm0iLCJkb2N1bWVudCIsImlzQWxsb3dlZCIsInRlbXBGb3JtcyIsImVyciIsImNyZWF0ZU9wdGlvbkFuc3dlcnMiLCJ2YWxpZGF0ZVF1ZXN0aW9uIiwicXVlc3Rpb24iLCJBcnJheSIsImNyZWF0ZVF1ZXN0aW9uIiwibnVtYmVyIiwibmV3UXVlc3Rpb24iLCJzZXQiLCJyZXN1bHRPcHRpb25BbnN3ZXJzIiwiZGVsZXRlRm9ybSIsInRlbXBNdWx0aU9wdGlvbnNRdWVzdGlvbnMiLCJzbmFwc2hvdE11bHRpT3B0aW9uc1F1ZXN0aW9ucyIsInNuYXBzaG90T3B0aW9uQW5zd2VycyIsImFsbG93VXNlcnMiLCJjcmVhdGVGb3JtIiwiZm9ybU5hbWUiLCJsaW1pdFJlc3BvbnNlcyIsImFycmF5RGF0ZSIsImFycmF5VGltZSIsImFycmF5RGF0ZUZpbmFsIiwiZGF0ZUV4aXN0cyIsInNvbWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInRpbWVFeGlzdHMiLCJlbmREYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiYWxsb3dVc2Vyc1Jlc3VsdCIsImluZGV4IiwicXVlc3Rpb25SZXN1bHQiLCJwYXJzZUludCIsInNpbmdsZUxpbmVUZXh0IiwibXVsdGlwbGVMaW5lVGV4dCIsImxpbmsiLCJtYXAiLCJyYW5nZSIsImZpbGUiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFN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LEVBQUUsTUFISztBQUlYQyxLQUFHLEVBQUUsS0FKTTtBQUtYNUMsY0FBWSxFQUFFLGVBTEg7QUFNWDZDLE9BQUssRUFBRSxPQU5JO0FBT1hDLE1BQUksRUFBRTtBQVBLLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU1DLEdBQU4sRUFBV0MsR0FBWCxLQUFtQjtBQUU5QixRQUFNdEcsR0FBRyxHQUFHcUcsR0FBRyxDQUFDRSxLQUFKLENBQVV2RyxHQUF0QjtBQUNBLFFBQU1ELE1BQU0sR0FBR3NHLEdBQUcsQ0FBQ0UsS0FBSixDQUFVeEcsTUFBekI7QUFFQSxRQUFNMEQsTUFBTSxHQUFHLE1BQU1ELDhEQUFRLENBQUN4RCxHQUFELEVBQU1ELE1BQU4sQ0FBN0I7QUFDQSxNQUFJeUIsRUFBSjs7QUFFQSxNQUFHaUMsTUFBTSxDQUFDcEMsT0FBVixFQUFrQjtBQUNkaUYsT0FBRyxDQUFDRSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FoRixNQUFFLEdBQUcsS0FBTDtBQUNILEdBSEQsTUFJSTtBQUNBOEUsT0FBRyxDQUFDRSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FoRixNQUFFLEdBQUcsSUFBTDtBQUNIOztBQUVEOEUsS0FBRyxDQUFDRyxJQUFKLENBQVM7QUFDTGpGLE1BREs7QUFFTGlDO0FBRkssR0FBVDtBQUtILENBdEJELEU7Ozs7Ozs7Ozs7O0FDRkEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvYXBpL2Zvcm0vZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZm9ybS9nZXQuanNcIik7XG4iLCJpbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IFwib25saW5lLWZvcm0tYnVpbGRlci5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vb25saW5lLWZvcm0tYnVpbGRlci1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJvbmxpbmUtZm9ybS1idWlsZGVyXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcIm9ubGluZS1mb3JtLWJ1aWxkZXIuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY3NjMwODYwNDIyNFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2NzYzMDg2MDQyMjQ6d2ViOjJmY2I0NjZhYTc2MzQ2OTVkZjE2YTVcIlxyXG59XHJcblxyXG5pZighZmlyZWJhc2UuYXBwcy5sZW5ndGgpXHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG5lbHNlXHJcbiAgICBmaXJlYmFzZS5hcHAoKVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpXHJcbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG4iLCJpbXBvcnQge2ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2VDb25maWcnXHJcbmltcG9ydCBjb2xsZWN0aW9ucyBmcm9tICcuL2NvbGxlY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlc3BvbnNlcyA9IGFzeW5jKGZvcm1JZCwgdWlkKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGFycmF5UXVlc3Rpb25zID0gW11cclxuICAgIGNvbnN0IGFycmF5UmVzcG9uc2VzID0gW11cclxuXHJcbiAgICBjb25zdCBzbmFwc2hvdFF1ZXN0aW9ucyA9IGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKGNvbGxlY3Rpb25zLnF1ZXN0aW9ucykud2hlcmUoJ2Zvcm1JZCcsICc9PScsIGZvcm1JZCkuZ2V0KClcclxuXHJcbiAgICBzbmFwc2hvdFF1ZXN0aW9ucy5mb3JFYWNoKGRvYyA9PiBhcnJheVF1ZXN0aW9ucy5wdXNoKGRvYy5pZCkpXHJcblxyXG4gICAgZm9yKGxldCBxdWVzdGlvbklkIG9mIGFycmF5UXVlc3Rpb25zKXtcclxuICAgICAgICBsZXQgc25hcHNob3RVc2VyUmVzcG9uc2VzID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMudXNlclJlc3BvbnNlcylcclxuICAgICAgICAgICAgLndoZXJlKCdxdWVzdGlvbklkJywgJz09JywgcXVlc3Rpb25JZClcclxuXHJcbiAgICAgICAgaWYodWlkKVxyXG4gICAgICAgICAgICBzbmFwc2hvdFVzZXJSZXNwb25zZXMgPSBhd2FpdCBzbmFwc2hvdFVzZXJSZXNwb25zZXMud2hlcmUoJ3VpZCcsICc9PScsIHVpZCkuZ2V0KClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNuYXBzaG90VXNlclJlc3BvbnNlcyA9IGF3YWl0IHNuYXBzaG90VXNlclJlc3BvbnNlcy5nZXQoKVxyXG5cclxuICAgICAgICBzbmFwc2hvdFVzZXJSZXNwb25zZXMuZm9yRWFjaChkb2MgPT4gYXJyYXlSZXNwb25zZXMucHVzaChkb2MuZGF0YSgpKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZvcm1JZCxcclxuICAgICAgICByZXNwb25zZXM6IGFycmF5UmVzcG9uc2VzXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgaWYgc2VudCBhbnN3ZXJzIGhhdmUgdGhlIGNvcnJlY3QgZm9ybWF0XHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFuc3dlcnMgXHJcbiAqL1xyXG5jb25zdCB2YWxpZGF0ZUFuc3dlcnMgPSAoYW5zd2VycykgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgZm9yKGxldCBhbnN3ZXIgb2YgYW5zd2Vycyl7XHJcbiAgICAgICAgaWYoIWFuc3dlci5xdWVzdGlvbklkKVxyXG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdFdmVyeSBhbnN3ZXIgbXVzdCBoYXZlIGEgcXVlc3Rpb25JZCd9XHJcblxyXG4gICAgICAgIC8vY2hlY2tzIGlmIGFuc3dlciBjb250YWlucyByZXNwb25zZSBvciBvcHRpb25BbnN3ZXJJZCBidXQgbm90IGJvdGhcclxuICAgICAgICBpZigoYW5zd2VyLnJlc3BvbnNlIHx8IGFuc3dlci5vcHRpb25BbnN3ZXJJZCkpe1xyXG4gICAgICAgICAgICBpZihhbnN3ZXIucmVzcG9uc2UgJiYgYW5zd2VyLm9wdGlvbkFuc3dlcklkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHttZXNzYWdlOiAnTm8gYW5zd2VyIHNob3VsZCBjb250YWluIGJvdGggcmVzcG9uc2UgYW5kIG9wdGlvbkFuc3dlcklkJ31cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdFdmVyeSBhbnN3ZXIgbXVzdCBoYXZlIGEgcmVzcG9uc2Ugb3Igb3B0aW9uQW5zd2VySWQnfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7b2s6IHRydWV9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IGZvcm0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtSWQgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNBbGxvd2VkVG9BbnN3ZXIgPSBhc3luYyhmb3JtLCBmb3JtSWQsIHVpZCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgb0FsbG93ZWRVc2VyID0ge31cclxuXHJcbiAgICBpZighZm9ybS5pc1B1YmxpYyl7XHJcblxyXG4gICAgICAgIGlmKCF1aWQpXHJcbiAgICAgICAgICAgIHJldHVybiB7bWVzc2FnZTogJ3VpZCBpcyByZXF1aXJlZCB0byBmaWxsIHRoaXMgZm9ybSd9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90QWxsb3dlZFVzZXJzID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMuYWxsb3dlZFVzZXJzKVxyXG4gICAgICAgICAgICAud2hlcmUoJ2Zvcm1JZCcsICc9PScsIGZvcm1JZClcclxuICAgICAgICAgICAgLndoZXJlKCd1aWQnLCAnPT0nLCB1aWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG5cclxuICAgICAgICBzbmFwc2hvdEFsbG93ZWRVc2Vycy5mb3JFYWNoKGRvYyA9PiBvQWxsb3dlZFVzZXIgPSBkb2MuZGF0YSgpKVxyXG5cclxuICAgICAgICBpZihvQWxsb3dlZFVzZXIudWlkID09PSB1aWQpXHJcbiAgICAgICAgICAgIHJldHVybiB7b2s6IHRydWV9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdVc2VyIGlzIG5vdCBhbGxvd2VkIHRvIGZpbGwgdGhpcyBmb3JtJ31cclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZXMgYWxsIHRoZSByZXNwb25zZXMgaW4gZm9ybSBtYWRlIGJ5IHRoZSB1c2VyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgXHJcbiAqIEBwYXJhbSB7b2JqZWN0W119IGFuc3dlcnMgXHJcbiAqL1xyXG5jb25zdCBkZWxldGVVc2VyUmVzcG9uc2UgPSBhc3luYyh1aWQsIGFuc3dlcnMpID0+IHtcclxuICAgIGNvbnN0IGJhdGNoID0gZmlyZXN0b3JlLmJhdGNoKClcclxuXHJcbiAgICBmb3IobGV0IGFuc3dlciBvZiBhbnN3ZXJzKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc25hcHNob3RVc2VyUmVzcG9uc2UgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy51c2VyUmVzcG9uc2VzKVxyXG4gICAgICAgICAgICAud2hlcmUoJ3F1ZXN0aW9uSWQnLCAnPT0nLCBhbnN3ZXIucXVlc3Rpb25JZCkud2hlcmUoJ3VpZCcsICc9PScsIHVpZCkuZ2V0KClcclxuICAgICAgICBcclxuICAgICAgICBzbmFwc2hvdFVzZXJSZXNwb25zZS5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZG9jLmRhdGEoKSlcclxuICAgICAgICAgICAgYmF0Y2guZGVsZXRlKGRvYy5yZWYpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBiYXRjaC5jb21taXQoKVxyXG59XHJcblxyXG4vKipcclxuICogU2F2ZXMgdGhlIGFuc3dlcnMgb2YgYSBzcGVjaWZpYyBmb3JtIGludG8gZGF0YWJhc2VcclxuICogQHBhcmFtIHtzdHJpbmd9IHVpZCBcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gYW5zd2VycyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZW5kQW5zd2VycyA9IGFzeW5jKGZvcm1JZCwgdWlkLCBhbnN3ZXJzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9ICBhd2FpdCAoYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMuZm9ybXMpLmRvYyhmb3JtSWQpLmdldCgpKS5kYXRhKClcclxuXHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlQW5zd2VycyhhbnN3ZXJzKVxyXG4gICAgY29uc3QgYWxsb3dlZFVzZXIgPSBhd2FpdCBpc0FsbG93ZWRUb0Fuc3dlcihmb3JtLCBmb3JtSWQsIHVpZClcclxuXHJcbiAgICBpZih2YWxpZGF0aW9uLm1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuIHttZXNzYWdlOiB2YWxpZGF0aW9uLm1lc3NhZ2V9XHJcblxyXG4gICAgaWYoYWxsb3dlZFVzZXIubWVzc2FnZSlcclxuICAgICAgICByZXR1cm4ge21lc3NhZ2U6IGFsbG93ZWRVc2VyLm1lc3NhZ2V9XHJcblxyXG5cclxuICAgIGZvcihsZXQgYW5zd2VyIG9mIGFuc3dlcnMpe1xyXG4gICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy51c2VyUmVzcG9uc2VzKS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgdWlkLFxyXG4gICAgICAgICAgICAgICAgLi4uYW5zd2VyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoe1xyXG4gICAgICAgICAgICBhd2FpdCBkZWxldGVVc2VyUmVzcG9uc2UodWlkLCBhbnN3ZXJzKVxyXG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdFcnJvciB3aGlsZSB0cnlpbmcgdG8gc2F2ZSByZXNwb25zZSBpbnRvIGRhdGFiYXNlJ31cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge29rOiB0cnVlfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdXNlcnM6ICd1c2VycycsXHJcbiAgICB1c2VyUmVzcG9uc2VzOiAndXNlclJlc3BvbnNlcycsXHJcbiAgICBxdWVzdGlvbnM6ICdxdWVzdGlvbnMnLFxyXG4gICAgb3B0aW9uQW5zd2VyczogJ29wdGlvbkFuc3dlcnMnLFxyXG4gICAgZm9ybXM6ICdmb3JtcycsXHJcbiAgICBhbGxvd2VkVXNlcnM6ICdhbGxvd2VkVXNlcnMnXHJcbn0iLCJpbXBvcnQge2ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2VDb25maWcnXHJcbmltcG9ydCBxdWVzdGlvblR5cGVzIGZyb20gJy4vcXVlc3Rpb25UeXBlcydcclxuaW1wb3J0IGNvbGxlY3Rpb25zIGZyb20gJy4vY29sbGVjdGlvbnMnXHJcbmltcG9ydCB7aXNBbGxvd2VkVG9BbnN3ZXJ9IGZyb20gJy4vYW5zd2VyJ1xyXG5cclxuY29uc3QgZ2V0T3B0aW9uQW5zd2VycyA9IGFzeW5jKHF1ZXN0aW9uSWQpID0+IHtcclxuICAgIGNvbnN0IGFycmF5T3B0aW9ucyA9IFtdXHJcblxyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy5vcHRpb25BbnN3ZXJzKS53aGVyZSgncXVlc3Rpb25JZCcsICc9PScsIHF1ZXN0aW9uSWQpLmdldCgpXHJcblxyXG4gICAgc25hcHNob3QuZm9yRWFjaChkb2MgPT4gYXJyYXlPcHRpb25zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGRvYy5kYXRhKCkudGV4dCxcclxuICAgICAgICBvcHRpb25BbnN3ZXJJZCA6IGRvYy5pZFxyXG4gICAgfSkpXHJcblxyXG4gICAgcmV0dXJuIGFycmF5T3B0aW9uc1xyXG59XHJcblxyXG5jb25zdCBnZXRRdWVzdGlvbnMgPSBhc3luYyhmb3JtSWQpID0+IHtcclxuICAgIGxldCBzbmFwc2hvdFF1ZXN0aW9uc1xyXG4gICAgbGV0IHRlbXBBcnJheVF1ZXN0aW9ucyA9IFtdXHJcbiAgICBsZXQgYXJyYXlRdWVzdGlvbnMgPSBbXVxyXG5cclxuICAgIHNuYXBzaG90UXVlc3Rpb25zID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMucXVlc3Rpb25zKS53aGVyZSgnZm9ybUlkJywgJz09JywgZm9ybUlkKS5nZXQoKVxyXG4gICAgc25hcHNob3RRdWVzdGlvbnMuZm9yRWFjaChkb2MgPT4gdGVtcEFycmF5UXVlc3Rpb25zLnB1c2goZG9jKSlcclxuXHJcbiAgICBmb3IobGV0IGRvYyBvZiB0ZW1wQXJyYXlRdWVzdGlvbnMpe1xyXG4gICAgICAgIGxldCBvUXVlc3Rpb24gPSB7Li4uZG9jLmRhdGEoKX1cclxuICAgICAgICBcclxuICAgICAgICBpZihvUXVlc3Rpb24udHlwZSA9PT0gcXVlc3Rpb25UeXBlcy5tdWx0aU9wdGlvbnMpXHJcbiAgICAgICAgICAgIG9RdWVzdGlvbi5vcHRpb25zID0gYXdhaXQgZ2V0T3B0aW9uQW5zd2Vycyhkb2MuaWQpXHJcblxyXG5cclxuICAgICAgICBkZWxldGUgb1F1ZXN0aW9uLmZvcm1JZFxyXG4gICAgICAgIGFycmF5UXVlc3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAuLi5vUXVlc3Rpb24sXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSWQ6IGRvYy5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXlRdWVzdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvcm1zID0gYXN5bmModWlkLCBmb3JtSWQpID0+IHtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgIGxldCBzbmFwc2hvdEZvcm1cclxuICAgIGxldCBkb2N1bWVudFxyXG5cclxuICAgIGlmKCF1aWQgJiYgIWZvcm1JZClcclxuICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICd1aWQgb3IgZm9ybUlkIHdhcyBub3Qgc3BlY2lmaWVkJ31cclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZm9ybUlkKXtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50ID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMuZm9ybXMpLmRvYyhmb3JtSWQpLmdldCgpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LmRhdGEoKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNBbGxvd2VkID0gYXdhaXQgaXNBbGxvd2VkVG9BbnN3ZXIocmVzdWx0LCBmb3JtSWQsIHVpZClcclxuXHJcbiAgICAgICAgICAgIGlmKCFpc0FsbG93ZWQub2sgJiYgcmVzdWx0LnVpZCAhPT0gdWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHttZXNzYWdlOiAnVXNlciBpcyBub3QgYWxsb3dlZCB0byBmaWxsIHRoaXMgZm9ybSd9XHJcblxyXG4gICAgICAgICAgICByZXN1bHQuZm9ybUlkID0gZG9jdW1lbnQuaWRcclxuICAgICAgICAgICAgcmVzdWx0LnF1ZXN0aW9ucyA9IGF3YWl0IGdldFF1ZXN0aW9ucyhmb3JtSWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8qdGhpcyB3aWxsIHN0b3JlIGZvcm1zJyBzbmFwc2hvdCB0ZW1wb3JhcmlseSwgYmVjYXVzZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIFxyXG4gICAgICAgICAgICBkb2Vzbid0IGV4ZWN1dGVzIGNvcnJlY3RseSB3aXRoaW4gZm9yRWFjaCBtZXRob2Qgb2Ygc25hcHNob3QuKi9cclxuICAgICAgICAgICAgbGV0IHRlbXBGb3JtcyA9IFtdXHJcblxyXG4gICAgICAgICAgICBzbmFwc2hvdEZvcm0gPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy5mb3Jtcykud2hlcmUoJ3VpZCcsICc9PScsIHVpZCkuZ2V0KClcclxuXHJcbiAgICAgICAgICAgIHNuYXBzaG90Rm9ybS5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wRm9ybXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBmb3JtIG9mIHRlbXBGb3Jtcyl7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmRhdGEuZm9ybUlkID0gZm9ybS5pZFxyXG4gICAgICAgICAgICAgICAgZm9ybS5kYXRhLnF1ZXN0aW9ucyA9IGF3YWl0IGdldFF1ZXN0aW9ucyhmb3JtLmlkKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZm9ybS5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1InLCBlcnIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBlYWNoIG9wdGlvbiBvZiBvcHRpb25zIGFycmF5IGludG8gZGF0YWJhc2VcclxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uSWQgXHJcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMgXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVPcHRpb25BbnN3ZXJzID0gYXN5bmMgKHF1ZXN0aW9uSWQsIG9wdGlvbnMpID0+IHtcclxuICAgIFxyXG4gICAgZm9yKGxldCB0ZXh0IG9mIG9wdGlvbnMpe1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy5vcHRpb25BbnN3ZXJzKS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25JZCxcclxuICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2h7IHJldHVybiB7b2s6IGZhbHNlLCBtZXNzYWdlOiAnRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHNhdmUgb3B0aW9uIGFuc3dlcnMnfSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtvazogdHJ1ZX1cclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBpZiB0aGUgcXVlc3Rpb24gb2JqZWN0IGhhcyB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcclxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXN0aW9uIFxyXG4gKi9cclxuY29uc3QgdmFsaWRhdGVRdWVzdGlvbiA9IChxdWVzdGlvbikgPT4ge1xyXG5cclxuICAgIGlmKCFxdWVzdGlvbilcclxuICAgICAgICByZXR1cm4ge29rOiBmYWxzZSwgbWVzc2FnZTogJ0Zvcm0gbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBxdWVzdGlvbid9XHJcblxyXG4gICAgaWYoIXF1ZXN0aW9uLnR5cGUgfHwgIXF1ZXN0aW9uLnRleHQpXHJcbiAgICAgICAgcmV0dXJuIHtvazogZmFsc2UsIG1lc3NhZ2U6ICdRdWVzdGlvbiB0ZXh0IGFuZCB0eXBlIG11c3QgYmUgcHJvdmlkZWQnfVxyXG5cclxuICAgIC8vaWYgcXVlc3Rpb24gdHlwZSBpcyBtdWx0aS1vcHRpb25zXHJcbiAgICBpZihxdWVzdGlvbi50eXBlID09PSBxdWVzdGlvblR5cGVzLm11bHRpT3B0aW9ucyl7XHJcblxyXG4gICAgICAgIC8vaWYgcXVlc3Rpb24gb3B0aW9ucyBkb2Vzbid0IGhhdmUgYXQgbGVhc3QgMiBvcHRpb25zXHJcbiAgICAgICAgaWYoIXF1ZXN0aW9uLm9wdGlvbnMgfHwgIXF1ZXN0aW9uLm9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSB8fCBxdWVzdGlvbi5vcHRpb25zLmxlbmd0aCA8PSAxKVxyXG4gICAgICAgICAgICByZXR1cm4ge29rOiBmYWxzZSwgbWVzc2FnZTogJ1F1ZXN0aW9uIG9mIHR5cGUgXCJtdWx0aS1vcHRpb25zXCIgbXVzdCBoYXZlIGF0IGxlYXN0IHR3byBvcHRpb24nfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge29rOiB0cnVlfVxyXG59XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBxdWVzdGlvbiBpbnRvIGRhdGFiYXNlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtSWQgXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW1iZXIgXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBcclxuICovXHJcbmNvbnN0IGNyZWF0ZVF1ZXN0aW9uID0gYXN5bmMoZm9ybUlkLCBudW1iZXIsIHF1ZXN0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlUXVlc3Rpb24ocXVlc3Rpb24pXHJcblxyXG4gICAgaWYoIXZhbGlkYXRpb24ub2spXHJcbiAgICAgICAgcmV0dXJuIHttZXNzYWdlOiB2YWxpZGF0aW9uLm1lc3NhZ2V9XHJcblxyXG4gICAgbGV0IG5ld1F1ZXN0aW9uXHJcbiAgICB0cnl7XHJcbiAgICAgICAgbmV3UXVlc3Rpb24gPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy5xdWVzdGlvbnMpLmRvYygpXHJcblxyXG4gICAgICAgIGF3YWl0IG5ld1F1ZXN0aW9uLnNldCh7XHJcbiAgICAgICAgICAgIGZvcm1JZCxcclxuICAgICAgICAgICAgbnVtYmVyLFxyXG4gICAgICAgICAgICB0eXBlOiBxdWVzdGlvbi50eXBlLFxyXG4gICAgICAgICAgICB0ZXh0OiBxdWVzdGlvbi50ZXh0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYocXVlc3Rpb24udHlwZSA9PT0gcXVlc3Rpb25UeXBlcy5tdWx0aU9wdGlvbnMpe1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRPcHRpb25BbnN3ZXJzID0gYXdhaXQgY3JlYXRlT3B0aW9uQW5zd2VycyhuZXdRdWVzdGlvbi5pZCwgcXVlc3Rpb24ub3B0aW9ucylcclxuICAgICAgICAgICAgaWYoIXJlc3VsdE9wdGlvbkFuc3dlcnMub2spXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6IHJlc3VsdE9wdGlvbkFuc3dlcnMubWVzc2FnZX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaHsgXHJcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0Vycm9yIHdoaWxlIHRyeWluZyB0byBzYXZlIHF1ZXN0aW9ucyBkYXRhJ31cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgKGF3YWl0IG5ld1F1ZXN0aW9uLmdldCgpKS5kYXRhKClcclxuICAgIFxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZXMgc2VsZWN0ZWQgZm9ybSBhbmQgaXQncyBxdWVzdGlvbnMgYW5kIG9wdGlvbiBhbnN3ZXNcclxuICovXHJcbmNvbnN0IGRlbGV0ZUZvcm0gPSBhc3luYyAoZm9ybUlkKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wTXVsdGlPcHRpb25zUXVlc3Rpb25zID0gW11cclxuICAgIGNvbnN0IGJhdGNoID0gZmlyZXN0b3JlLmJhdGNoKClcclxuXHJcbiAgICAvL2dldCBxdWVzdGlvbnMgd2l0aCBtdWx0aS1vcHRpb25zIHR5cGUgXHJcbiAgICBjb25zdCBzbmFwc2hvdE11bHRpT3B0aW9uc1F1ZXN0aW9ucyA9IGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKGNvbGxlY3Rpb25zLnF1ZXN0aW9ucylcclxuICAgICAgICAud2hlcmUoJ2Zvcm1JZCcsICc9PScsIGZvcm1JZCkud2hlcmUoJ3R5cGUnLCAnPT0nLCBxdWVzdGlvblR5cGVzLm11bHRpT3B0aW9ucykuZ2V0KClcclxuXHJcbiAgICBcclxuICAgIC8vZWFjaCBtdWx0aS1vcHRpb3MgcXVlc3Rpb25zIGlzIHB1c2hlZCB0byBhcnJheVxyXG4gICAgc25hcHNob3RNdWx0aU9wdGlvbnNRdWVzdGlvbnMuZm9yRWFjaChkb2MgPT4gdGVtcE11bHRpT3B0aW9uc1F1ZXN0aW9ucy5wdXNoKGRvYykpXHJcblxyXG4gICAgLy9mb3IgZWFjaCBxdWVzdGlvbiB3aXRoIG11bHRpLW9wdGlvbnMgdHlwZVxyXG4gICAgZm9yKGxldCBkb2Mgb2YgdGVtcE11bHRpT3B0aW9uc1F1ZXN0aW9ucyl7XHJcbiAgICAgICAgLy9nZXQgb3B0aW9uIGFuc3dlcnMgZm9yIGN1cnJlbnQgcXVlc3Rpb25cclxuICAgICAgICBjb25zdCBzbmFwc2hvdE9wdGlvbkFuc3dlcnMgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbihjb2xsZWN0aW9ucy5vcHRpb25BbnN3ZXJzKVxyXG4gICAgICAgICAgICAud2hlcmUoJ3F1ZXN0aW9uSWQnLCAnPT0nLCBkb2MuaWQpXHJcblxyXG4gICAgICAgIC8vZGVsZXRlIGVhY2ggb3B0aW9uIG9mIGN1cnJlbnQgcXVpZXN0aW9uXHJcbiAgICAgICAgc25hcHNob3RPcHRpb25BbnN3ZXJzLmZvckVhY2goZG9jID0+IGJhdGNoLmRlbGV0ZShkb2MucmVmKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbmFwc2hvdFF1ZXN0aW9ucyA9IGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKGNvbGxlY3Rpb25zLnF1ZXN0aW9ucykud2hlcmUoJ2Zvcm1JZCcsICc9PScsIGZvcm1JZCkuZ2V0KClcclxuXHJcbiAgICBzbmFwc2hvdFF1ZXN0aW9ucy5mb3JFYWNoKGRvYyA9PiBiYXRjaC5kZWxldGUoZG9jLnJlZikpXHJcblxyXG4gICAgYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2Zvcm1zJykuZG9jKGZvcm1JZCkuZGVsZXRlKClcclxuXHJcbiAgICBhd2FpdCBiYXRjaC5jb21taXQoKVxyXG59XHJcblxyXG5jb25zdCBhbGxvd1VzZXJzID0gYXN5bmMoZm9ybUlkLCB1aWQpID0+IHtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMuYWxsb3dlZFVzZXJzKS5hZGQoe1xyXG4gICAgICAgICAgICBmb3JtSWQsXHJcbiAgICAgICAgICAgIHVpZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjYXRjaHtyZXR1cm4ge21lc3NhZ2U6ICdFcnJvciB3aGlsZSB0cnlpbmcgdG8gc2F2ZSBhbGxvd2VkIHVzZXJzJ319XHJcblxyXG4gICAgcmV0dXJuIHtvazogdHJ1ZX1cclxufVxyXG5cclxuLyoqYXJyYXlEYXRlID0gW3llYXIsIG1vbnRoSW5kZXgsIGRheSwgKmhvdXIsICptaW51dGVzLCAqc2Vjb25kc10gXHJcbiAqIGhvdXIsIG1pbnV0ZXMgYW5kIHNlY29uZHMgYXJlIG9wdGlvbmFsc1xyXG4qL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlRm9ybSA9IGFzeW5jKHVpZCwgZm9ybU5hbWUsIGlzUHVibGljLCBsaW1pdFJlc3BvbnNlcywgYXJyYXlEYXRlLCBhcnJheVRpbWUsIHF1ZXN0aW9ucywgYWxsb3dlZFVzZXJzKSA9PiB7XHJcblxyXG4gICAgaWYoIXVpZClcclxuICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdVc2VyIElEIGlzIHJlcXVpcmVkJ31cclxuICAgIFxyXG4gICAgaWYoIWZvcm1OYW1lKVxyXG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogJ0Zvcm0gbmFtZSBpcyByZXF1aXJlZCd9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB1aWQsIFxyXG4gICAgICAgIGZvcm1OYW1lLFxyXG4gICAgICAgIGlzUHVibGljOiBpc1B1YmxpYyA9PSAndHJ1ZSdcclxuICAgIH1cclxuXHJcbiAgICBpZihsaW1pdFJlc3BvbnNlcylcclxuICAgICAgICBkYXRhLmxpbWl0UmVzcG9uc2VzID0gbGltaXRSZXNwb25zZXNcclxuXHJcbiAgICBcclxuICAgIGlmKGFycmF5RGF0ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICBjb25zdCBhcnJheURhdGVGaW5hbCA9IFtdXHJcblxyXG4gICAgICAgIC8vaWYgYXJyYXlEYXRlIGhhcyBhdCBsZWFzdCBvbmUgbm90IHVuZGVmaW5lZCB2YWx1ZSwgdGhlbiBpdCdzIHB1c2hlZCB0byBhcnJheURhdGVGaW5hbFxyXG4gICAgICAgIGNvbnN0IGRhdGVFeGlzdHMgPSBhcnJheURhdGUuc29tZSh2YWx1ZSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGNvbnN0IHRpbWVFeGlzdHMgPSBhcnJheVRpbWUuc29tZSh2YWx1ZSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG5cclxuICAgICAgICBpZihkYXRlRXhpc3RzKXtcclxuXHJcbiAgICAgICAgICAgIGFycmF5RGF0ZUZpbmFsLnB1c2goLi4uYXJyYXlEYXRlKVxyXG4gICAgICAgICAgICAvL2lmIGFycmF5VGltZSBoYXMgYXQgbGVhc3Qgb25lIG5vdCB1bmRlZmluZWQgdmFsdWUsIHRoZW4gaXQncyBwdXNoZWQgdG8gYXJyYXlEYXRlRmluYWxcclxuXHJcbiAgICAgICAgICAgIGlmKHRpbWVFeGlzdHMpXHJcbiAgICAgICAgICAgICAgICBhcnJheURhdGVGaW5hbC5wdXNoKC4uLmFycmF5VGltZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRpbWVFeGlzdHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdJbnZhbGlkIERhdGUnfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGRhdGEuZW5kRGF0ZSA9IG5ldyBEYXRlKC4uLmFycmF5RGF0ZUZpbmFsKS50b0xvY2FsZVN0cmluZygpIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYgZW5kRGF0ZSBpcyBub3QgYSBkYXRlXHJcbiAgICAgICAgaWYoZGF0YS5lbmREYXRlID09ICdJbnZhbGlkIERhdGUnKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6ICdJbnZhbGlkIERhdGUnfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHRcclxuICAgIHRyeXsgcmVzdWx0ID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oY29sbGVjdGlvbnMuZm9ybXMpLmFkZChkYXRhKSB9XHJcbiAgICBjYXRjaHsgIHJldHVybiB7bWVzc2FnZTogJ0Vycm9yIHdoaWxlIHRyeWluZyB0byBzYXZlIGZvcm0gZGF0YSd9IH1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVzdWx0LmdldCgpXHJcblxyXG4gICAgaWYoYWxsb3dlZFVzZXJzICYmICFpc1B1YmxpYyl7XHJcblxyXG4gICAgICAgIGZvcih1aWQgb2YgYWxsb3dlZFVzZXJzKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbG93VXNlcnNSZXN1bHQgPSBhd2FpdCBhbGxvd1VzZXJzKGZvcm0uaWQsIHVpZClcclxuXHJcbiAgICAgICAgICAgIGlmKGFsbG93VXNlcnNSZXN1bHQubWVzc2FnZSl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVGb3JtKGZvcm0uaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHttZXNzYWdlOiBhbGxvd1VzZXJzUmVzdWx0Lm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBpbmRleCBpbiBxdWVzdGlvbnMpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uUmVzdWx0ID0gYXdhaXQgY3JlYXRlUXVlc3Rpb24oZm9ybS5pZCwgcGFyc2VJbnQoaW5kZXgpICsgMSxxdWVzdGlvbnNbaW5kZXhdKVxyXG5cclxuICAgICAgICAvL2lmIHRoZXJlJ3MgYW4gZXJyb3IgcmVnaXN0ZXJpbmcgcXVlc3Rpb25zIGluIGRhdGFiYXNlLCBmb3JtIGFuZCBpdCdzIHF1ZXN0aW9ucyBhcmUgZGVsZXRlZFxyXG4gICAgICAgIGlmKHF1ZXN0aW9uUmVzdWx0Lm1lc3NhZ2Upe1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgZGVsZXRlRm9ybShmb3JtLmlkKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogcXVlc3Rpb25SZXN1bHQubWVzc2FnZX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGZvcm0uZGF0YSgpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaW5nbGVMaW5lVGV4dDogJ3NpbmdsZS1saW5lLXRleHQnLFxyXG4gICAgbXVsdGlwbGVMaW5lVGV4dDogJ211bHRpcGxlLWxpbmUtdGV4dCcsXHJcbiAgICBsaW5rOiAnbGluaycsXHJcbiAgICBtYXA6ICdtYXAnLFxyXG4gICAgbXVsdGlPcHRpb25zOiAnbXVsdGktb3B0aW9ucycsXHJcbiAgICByYW5nZTogJ3JhbmdlJyxcclxuICAgIGZpbGU6ICdmaWxlJ1xyXG59IiwiaW1wb3J0IHtnZXRGb3Jtc30gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9mb3JtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMocmVxLCByZXMpID0+IHtcclxuXHJcbiAgICBjb25zdCB1aWQgPSByZXEucXVlcnkudWlkXHJcbiAgICBjb25zdCBmb3JtSWQgPSByZXEucXVlcnkuZm9ybUlkXHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Rm9ybXModWlkLCBmb3JtSWQpXHJcbiAgICBsZXQgb2tcclxuICAgIFxyXG4gICAgaWYocmVzdWx0Lm1lc3NhZ2Upe1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwXHJcbiAgICAgICAgb2sgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxyXG4gICAgICAgIG9rID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgICBvayxcclxuICAgICAgICByZXN1bHRcclxuICAgIH0pXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==