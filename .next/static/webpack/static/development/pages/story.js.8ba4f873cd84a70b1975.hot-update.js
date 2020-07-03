webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\fjemli\\Documents\\dev\\next\\hacker-next\\components\\Comment.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var comment = _ref.comment;
  return __jsx("div", {
    className: "jsx-1726636863" + " " + "comment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1726636863" + " " + "comment-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, comment.user), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-1726636863" + " " + "comment-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), comment.comments && __jsx("div", {
    className: "jsx-1726636863" + " " + "nested-comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 33
    }
  }, comment.comments.map(function (nestedComment) {
    return __jsx(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1726636863",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmplbWxpXFxEb2N1bWVudHNcXGRldlxcbmV4dFxcaGFja2VyLW5leHRcXGNvbXBvbmVudHNcXENvbW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQiIsImZpbGUiOiJDOlxcVXNlcnNcXGZqZW1saVxcRG9jdW1lbnRzXFxkZXZcXG5leHRcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHtjb21tZW50fSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXVzZXJcIj5cclxuICAgICAgICAgICAge2NvbW1lbnQudXNlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb21tZW50LmNvbnRlbnR9fT48L2Rpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQuY29tbWVudHMgJiYgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbW1lbnRzLm1hcChuZXN0ZWRDb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQga2V5PXtuZXN0ZWRDb21tZW50LmlkfSBjb21tZW50PXtuZXN0ZWRDb21tZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\fjemli\\\\Documents\\\\dev\\\\next\\\\hacker-next\\\\components\\\\Comment.js */"));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwibmFtZXMiOlsiY29tbWVudCIsInVzZXIiLCJfX2h0bWwiLCJjb250ZW50IiwiY29tbWVudHMiLCJtYXAiLCJuZXN0ZWRDb21tZW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlO0FBQUEsTUFBRUEsT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FDWDtBQUFBLHdDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLE9BQU8sQ0FBQ0MsSUFEYixDQURKLEVBSUk7QUFBaUMsMkJBQXVCLEVBQUU7QUFBQ0MsWUFBTSxFQUFFRixPQUFPLENBQUNHO0FBQWpCLEtBQTFEO0FBQUEsd0NBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBTVFILE9BQU8sQ0FBQ0ksUUFBUixJQUFvQjtBQUFBLHdDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFWkosT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxHQUFqQixDQUFxQixVQUFBQyxhQUFhO0FBQUEsV0FDOUIsTUFBQyxPQUFEO0FBQVMsU0FBRyxFQUFFQSxhQUFhLENBQUNDLEVBQTVCO0FBQWdDLGFBQU8sRUFBRUQsYUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ4QjtBQUFBLEdBQWxDLENBRlksQ0FONUI7QUFBQTtBQUFBO0FBQUEseWtEQURXO0FBQUEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc3RvcnkuanMuOGJhNGY4NzNjZDg0YTcwYjE5NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7Y29tbWVudH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+XHJcbiAgICAgICAgICAgIHtjb21tZW50LnVzZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29tbWVudC5jb250ZW50fX0+PC9kaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tZW50LmNvbW1lbnRzICYmIDxkaXYgY2xhc3NOYW1lPVwibmVzdGVkLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jb21tZW50cy5tYXAobmVzdGVkQ29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IGtleT17bmVzdGVkQ29tbWVudC5pZH0gY29tbWVudD17bmVzdGVkQ29tbWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKTsiXSwic291cmNlUm9vdCI6IiJ9