webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_StoryList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/StoryList */ "./components/StoryList.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "C:\\Users\\fjemli\\Documents\\dev\\next\\hacker-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          stories = _this$props.stories;

      if (!stories || stories.length === 0) {
        return __jsx(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
        title: "Hacker Next",
        description: "Hacker News Clone with Next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, __jsx(_components_StoryList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        stories: stories,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }), __jsx("footer", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx(Link, {
        href: "/?page".concat(page + 1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }
      }, "Click Here"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, stories, page, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                console.log(query);
                _context.prev = 2;
                page = Number(query.page) || 1;
                _context.next = 6;
                return fetch("https://node-hnapi.herokuapp.com/news?page=".concat(page));

              case 6:
                response = _context.sent;
                _context.next = 9;
                return response.json();

              case 9:
                stories = _context.sent;
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);
                stories = [];

              case 16:
                return _context.abrupt("return", {
                  page: page,
                  stories: stories
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwicGFnZSIsInN0b3JpZXMiLCJsZW5ndGgiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQWdCTztBQUFBLHdCQUNtQixLQUFLQyxLQUR4QjtBQUFBLFVBQ0VDLElBREYsZUFDRUEsSUFERjtBQUFBLFVBQ1FDLE9BRFIsZUFDUUEsT0FEUjs7QUFFTCxVQUFJLENBQUNBLE9BQUQsSUFBWUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CLENBQW5DLEVBQXNDO0FBQ2xDLGVBQU8sTUFBQyxpREFBRDtBQUFPLG9CQUFVLEVBQUUsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBQ0QsYUFDSSxNQUFDLDJEQUFEO0FBQVEsYUFBSyxFQUFDLGFBQWQ7QUFBNEIsbUJBQVcsRUFBQyw2QkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNkRBQUQ7QUFBVyxlQUFPLEVBQUVELE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLElBQUQ7QUFBTSxZQUFJLGtCQUFXRCxJQUFJLEdBQUcsQ0FBbEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixDQURKLENBRkosQ0FESjtBQVVIOzs7Ozs7Ozs7O0FBOUI2QkcsbUIsUUFBQUEsRyxFQUFLQyxHLFFBQUFBLEcsRUFBS0MsSyxRQUFBQSxLO0FBQ3BDQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBR0lMLG9CQUFJLEdBQUdRLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDTCxJQUFQLENBQU4sSUFBc0IsQ0FBN0I7O3VCQUN1QlMsS0FBSyxzREFBK0NULElBQS9DLEU7OztBQUF0QlUsd0I7O3VCQUNVQSxRQUFRLENBQUNDLElBQVQsRTs7O0FBQWhCVix1Qjs7Ozs7OztBQUVBSyx1QkFBTyxDQUFDTSxLQUFSO0FBQ0FYLHVCQUFPLEdBQUcsRUFBVjs7O2lEQUdHO0FBQUNELHNCQUFJLEVBQUpBLElBQUQ7QUFBT0MseUJBQU8sRUFBUEE7QUFBUCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWJLWSw0Q0FBSyxDQUFDQyxTOztBQWtDWGhCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zN2I5N2Q0ZjY4ZTllYmM5YjlmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xyXG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvcnlMaXN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZXEsIHJlcywgcXVlcnl9KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xyXG4gICAgICAgIGxldCBzdG9yaWVzLCBwYWdlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSkgfHwgMTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vbmV3cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgICAgICAgICAgc3RvcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBzdG9yaWVzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3BhZ2UsIHN0b3JpZXN9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7cGFnZSwgc3Rvcmllc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmICghc3RvcmllcyB8fCBzdG9yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiSGFja2VyIE5leHRcIiBkZXNjcmlwdGlvbj1cIkhhY2tlciBOZXdzIENsb25lIHdpdGggTmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPFN0b3J5TGlzdCBzdG9yaWVzPXtzdG9yaWVzfS8+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2Uke3BhZ2UgKyAxfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5DbGljayBIZXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9