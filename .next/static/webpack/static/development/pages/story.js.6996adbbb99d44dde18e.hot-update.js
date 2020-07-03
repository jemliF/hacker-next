webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CommentList */ "./components/CommentList.js");







var _jsxFileName = "C:\\Users\\fjemli\\Documents\\dev\\next\\hacker-next\\pages\\story.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Story = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Story, _React$Component);

  var _super = _createSuper(Story);

  function Story() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Story);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Story, [{
    key: "render",
    value: function render() {
      var story = this.props.story;

      if (!story) {
        return __jsx(next_error__WEBPACK_IMPORTED_MODULE_9___default.a, {
          statusCode: 503,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 20
          }
        });
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: story.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 16
        }
      }, __jsx("main", {
        className: "jsx-490611978",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "jsx-490611978" + " " + "story-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: story.url,
        className: "jsx-490611978",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }
      }, story.title)), __jsx("div", {
        className: "jsx-490611978" + " " + "story-details",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, __jsx("strong", {
        className: "jsx-490611978",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, story.points, " points"), __jsx("strong", {
        className: "jsx-490611978",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }, story.comments_count, " comments"), __jsx("strong", {
        className: "jsx-490611978",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, story.time_ago)), story.comments && story.comments.length > 0 ? __jsx(_components_CommentList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        comments: story.comments,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }) : __jsx("div", {
        className: "jsx-490611978",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }, "No comments for this story")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "490611978",
        __self: this
      }, "main.jsx-490611978{padding:1em;}.story-title.jsx-490611978{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-490611978 a.jsx-490611978{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-490611978 a.jsx-490611978:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-490611978{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.story-details.jsx-490611978 strong.jsx-490611978{margin-right:1em;}.story-details.jsx-490611978 a.jsx-490611978{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmplbWxpXFxEb2N1bWVudHNcXGRldlxcbmV4dFxcaGFja2VyLW5leHRcXHBhZ2VzXFxzdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ29CLEFBR3FDLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdMLFdBZlMsQUFnQnpCLENBekJBLEtBR2EsQUFhVSxBQU12QixTQWxCb0IsVUFhMkIsTUFadEIsa0JBUXpCLENBSEEsRUFKQSxhQVlzQixrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxmamVtbGlcXERvY3VtZW50c1xcZGV2XFxuZXh0XFxoYWNrZXItbmV4dFxccGFnZXNcXHN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWVudExpc3QnO1xyXG5cclxuY2xhc3MgU3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cmVxLCByZXMsIHF1ZXJ5fSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzdG9yeUlkID0gcXVlcnkuaWQ7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlLCBzdG9yeTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gKTtcclxuICAgICAgICAgICAgc3RvcnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgc3RvcnkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3N0b3J5fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3N0b3J5fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFzdG9yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPExheW91dCB0aXRsZT17c3RvcnkudGl0bGV9PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntzdG9yeS5wb2ludHN9IHBvaW50czwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LmNvbW1lbnRzX2NvdW50fSBjb21tZW50czwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LnRpbWVfYWdvfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RvcnkuY29tbWVudHMgJiYgc3RvcnkuY29tbWVudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRMaXN0IGNvbW1lbnRzPXtzdG9yeS5jb21tZW50c30vPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5ObyBjb21tZW50cyBmb3IgdGhpcyBzdG9yeTwvZGl2Pn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdG9yeS10aXRsZSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0b3J5LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktZGV0YWlscyBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0b3J5LWRldGFpbHMgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\fjemli\\\\Documents\\\\dev\\\\next\\\\hacker-next\\\\pages\\\\story.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, storyId, response, story;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                console.log(query);
                storyId = query.id;
                _context.prev = 3;
                _context.next = 6;
                return fetch("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 6:
                response = _context.sent;
                _context.next = 9;
                return response.json();

              case 9:
                story = _context.sent;
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.error(_context.t0);
                story = null;

              case 16:
                return _context.abrupt("return", {
                  story: story
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Story);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS5qcyJdLCJuYW1lcyI6WyJTdG9yeSIsInN0b3J5IiwicHJvcHMiLCJ0aXRsZSIsInVybCIsInBvaW50cyIsImNvbW1lbnRzX2NvdW50IiwidGltZV9hZ28iLCJjb21tZW50cyIsImxlbmd0aCIsInJlcSIsInJlcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInN0b3J5SWQiLCJpZCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7NkJBZU87QUFBQSxVQUNFQyxLQURGLEdBQ1csS0FBS0MsS0FEaEIsQ0FDRUQsS0FERjs7QUFFTCxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLGVBQU8sTUFBQyxpREFBRDtBQUFPLG9CQUFVLEVBQUUsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBQ0QsYUFBTyxNQUFDLDJEQUFEO0FBQVEsYUFBSyxFQUFFQSxLQUFLLENBQUNFLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDJDQUFjLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsWUFBSSxFQUFFRixLQUFLLENBQUNHLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFCSCxLQUFLLENBQUNFLEtBQTNCLENBREosQ0FESixFQUlJO0FBQUEsMkNBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNGLEtBQUssQ0FBQ0ksTUFBZixZQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNKLEtBQUssQ0FBQ0ssY0FBZixjQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNMLEtBQUssQ0FBQ00sUUFBZixDQUhKLENBSkosRUFTS04sS0FBSyxDQUFDTyxRQUFOLElBQWtCUCxLQUFLLENBQUNPLFFBQU4sQ0FBZUMsTUFBZixHQUF3QixDQUExQyxHQUNHLE1BQUMsZ0VBQUQ7QUFBYSxnQkFBUSxFQUFFUixLQUFLLENBQUNPLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESCxHQUVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FYUixDQURHO0FBQUE7QUFBQTtBQUFBLHk1SkFBUDtBQWlESDs7Ozs7Ozs7OztBQXBFNkJFLG1CLFFBQUFBLEcsRUFBS0MsRyxRQUFBQSxHLEVBQUtDLEssUUFBQUEsSztBQUNwQ0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ01HLHVCLEdBQVVILEtBQUssQ0FBQ0ksRTs7O3VCQUdEQyxLQUFLLGlEQUEwQ0YsT0FBMUMsRTs7O0FBQXRCRyx3Qjs7dUJBQ2NBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBZGxCLHFCOzs7Ozs7O0FBRUFZLHVCQUFPLENBQUNPLEtBQVI7QUFDQW5CLHFCQUFLLEdBQUcsSUFBUjs7O2lEQUVHO0FBQUNBLHVCQUFLLEVBQUxBO0FBQUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaS29CLDRDQUFLLENBQUNDLFM7O0FBd0VYdEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHN0b3J5LmpzLjY5OTZhZGJiYjk5ZDQ0ZGRlMThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tZW50TGlzdCc7XHJcblxyXG5jbGFzcyBTdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZXEsIHJlcywgcXVlcnl9KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xyXG4gICAgICAgIGNvbnN0IHN0b3J5SWQgPSBxdWVyeS5pZDtcclxuICAgICAgICBsZXQgcmVzcG9uc2UsIHN0b3J5O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL2l0ZW0vJHtzdG9yeUlkfWApO1xyXG4gICAgICAgICAgICBzdG9yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBzdG9yeSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7c3Rvcnl9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7c3Rvcnl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoIXN0b3J5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPXtzdG9yeS50aXRsZX0+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LnBvaW50c30gcG9pbnRzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkuY29tbWVudHNfY291bnR9IGNvbW1lbnRzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkudGltZV9hZ299PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzdG9yeS5jb21tZW50cyAmJiBzdG9yeS5jb21tZW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3QgY29tbWVudHM9e3N0b3J5LmNvbW1lbnRzfS8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vIGNvbW1lbnRzIGZvciB0aGlzIHN0b3J5PC9kaXY+fVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyJdLCJzb3VyY2VSb290IjoiIn0=