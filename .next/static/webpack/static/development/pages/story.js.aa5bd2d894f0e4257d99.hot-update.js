webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\fjemli\\Documents\\dev\\next\\hacker-next\\components\\Comment.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var comment = _ref.comment;
  return __jsx("div", {
    className: "comment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "comment-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, comment.user), __jsx("div", {
    className: "comment-content",
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), comment.comments && __jsx("div", {
    className: "nested-comments",
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
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwibmFtZXMiOlsiY29tbWVudCIsInVzZXIiLCJfX2h0bWwiLCJjb250ZW50IiwiY29tbWVudHMiLCJtYXAiLCJuZXN0ZWRDb21tZW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlO0FBQUEsTUFBRUEsT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FDWDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsT0FBTyxDQUFDQyxJQURiLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQywyQkFBdUIsRUFBRTtBQUFDQyxZQUFNLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBakIsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBTVFILE9BQU8sQ0FBQ0ksUUFBUixJQUFvQjtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVpKLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQUMsYUFBYTtBQUFBLFdBQzlCLE1BQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUEsYUFBYSxDQUFDQyxFQUE1QjtBQUFnQyxhQUFPLEVBQUVELGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEOEI7QUFBQSxHQUFsQyxDQUZZLENBTjVCLENBRFc7QUFBQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdG9yeS5qcy5hYTViZDJkODk0ZjBlNDI1N2Q5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHtjb21tZW50fSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXVzZXJcIj5cclxuICAgICAgICAgICAge2NvbW1lbnQudXNlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb21tZW50LmNvbnRlbnR9fT48L2Rpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQuY29tbWVudHMgJiYgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbW1lbnRzLm1hcChuZXN0ZWRDb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQga2V5PXtuZXN0ZWRDb21tZW50LmlkfSBjb21tZW50PXtuZXN0ZWRDb21tZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==