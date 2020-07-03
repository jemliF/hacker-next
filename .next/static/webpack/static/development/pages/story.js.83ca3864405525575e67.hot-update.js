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
            lineNumber: 23,
            columnNumber: 20
          }
        });
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: story.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 16
        }
      }, __jsx("main", {
        className: "jsx-3201332450",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "jsx-3201332450" + " " + "story-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: story.url,
        className: "jsx-3201332450",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      }, story.title)), __jsx("div", {
        className: "jsx-3201332450" + " " + "story-details",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx("strong", {
        className: "jsx-3201332450",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, story.points, " points"), __jsx("strong", {
        className: "jsx-3201332450",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, story.comments_count, " comments"), __jsx("strong", {
        className: "jsx-3201332450",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, story.time_ago))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3201332450",
        __self: this
      }, "main.jsx-3201332450{padding:1em;}.story-title.jsx-3201332450{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-3201332450 a.jsx-3201332450{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3201332450 a.jsx-3201332450:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmplbWxpXFxEb2N1bWVudHNcXGRldlxcbmV4dFxcaGFja2VyLW5leHRcXHBhZ2VzXFxzdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBR3FDLEFBR0ssQUFNTixBQUllLFdBSEwsQ0FUekIsS0FHYSxTQUNPLGdCQUNLLGtCQVF6QixDQUhBLEVBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxmamVtbGlcXERvY3VtZW50c1xcZGV2XFxuZXh0XFxoYWNrZXItbmV4dFxccGFnZXNcXHN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY2xhc3MgU3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cmVxLCByZXMsIHF1ZXJ5fSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzdG9yeUlkID0gcXVlcnkuaWQ7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlLCBzdG9yeTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gKTtcclxuICAgICAgICAgICAgc3RvcnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgc3RvcnkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3N0b3J5fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3N0b3J5fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFzdG9yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPExheW91dCB0aXRsZT17c3RvcnkudGl0bGV9PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntzdG9yeS5wb2ludHN9IHBvaW50czwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LmNvbW1lbnRzX2NvdW50fSBjb21tZW50czwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LnRpbWVfYWdvfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0b3J5LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktdGl0bGUgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\fjemli\\\\Documents\\\\dev\\\\next\\\\hacker-next\\\\pages\\\\story.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS5qcyJdLCJuYW1lcyI6WyJTdG9yeSIsInN0b3J5IiwicHJvcHMiLCJ0aXRsZSIsInVybCIsInBvaW50cyIsImNvbW1lbnRzX2NvdW50IiwidGltZV9hZ28iLCJyZXEiLCJyZXMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yeUlkIiwiaWQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQWVPO0FBQUEsVUFDRUMsS0FERixHQUNXLEtBQUtDLEtBRGhCLENBQ0VELEtBREY7O0FBRUwsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUixlQUFPLE1BQUMsaURBQUQ7QUFBTyxvQkFBVSxFQUFFLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUNELGFBQU8sTUFBQywyREFBRDtBQUFRLGFBQUssRUFBRUEsS0FBSyxDQUFDRSxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBYyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLFlBQUksRUFBRUYsS0FBSyxDQUFDRyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQkgsS0FBSyxDQUFDRSxLQUEzQixDQURKLENBREosRUFJSTtBQUFBLDRDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTRixLQUFLLENBQUNJLE1BQWYsWUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTSixLQUFLLENBQUNLLGNBQWYsY0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTTCxLQUFLLENBQUNNLFFBQWYsQ0FISixDQUpKLENBREc7QUFBQTtBQUFBO0FBQUEsMG1IQUFQO0FBa0NIOzs7Ozs7Ozs7O0FBckQ2QkMsbUIsUUFBQUEsRyxFQUFLQyxHLFFBQUFBLEcsRUFBS0MsSyxRQUFBQSxLO0FBQ3BDQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDTUcsdUIsR0FBVUgsS0FBSyxDQUFDSSxFOzs7dUJBR0RDLEtBQUssaURBQTBDRixPQUExQyxFOzs7QUFBdEJHLHdCOzt1QkFDY0EsUUFBUSxDQUFDQyxJQUFULEU7OztBQUFkaEIscUI7Ozs7Ozs7QUFFQVUsdUJBQU8sQ0FBQ08sS0FBUjtBQUNBakIscUJBQUssR0FBRyxJQUFSOzs7aURBRUc7QUFBQ0EsdUJBQUssRUFBTEE7QUFBRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVpLa0IsNENBQUssQ0FBQ0MsUzs7QUF5RFhwQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc3RvcnkuanMuODNjYTM4NjQ0MDU1MjU1NzVlNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNsYXNzIFN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3JlcSwgcmVzLCBxdWVyeX0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XHJcbiAgICAgICAgY29uc3Qgc3RvcnlJZCA9IHF1ZXJ5LmlkO1xyXG4gICAgICAgIGxldCByZXNwb25zZSwgc3Rvcnk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke3N0b3J5SWR9YCk7XHJcbiAgICAgICAgICAgIHN0b3J5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHN0b3J5ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtzdG9yeX07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzdG9yeX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmICghc3RvcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9e3N0b3J5LnRpdGxlfT5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkucG9pbnRzfSBwb2ludHM8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntzdG9yeS5jb21tZW50c19jb3VudH0gY29tbWVudHM8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntzdG9yeS50aW1lX2Fnb308L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyJdLCJzb3VyY2VSb290IjoiIn0=