webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\fjemli\\Documents\\dev\\next\\hacker-next\\components\\StoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-4106005547" + " " + "story-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-4106005547" + " " + "story",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "jsx-4106005547" + " " + "story-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: story.url,
      className: "jsx-4106005547",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, story.title)), __jsx("div", {
      className: "jsx-4106005547" + " " + "story-details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-4106005547",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story/".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "jsx-4106005547",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 55
      }
    }, story.comments_count, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4106005547",
    __self: _this
  }, ".story-list.jsx-4106005547{padding:0 1em;}.story.jsx-4106005547{padding:0 1em;}.story-title.jsx-4106005547{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmplbWxpXFxEb2N1bWVudHNcXGRldlxcbmV4dFxcaGFja2VyLW5leHRcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBRytCLEFBR0EsQUFNQyxjQVJqQixBQUdBLENBTWtCLGdCQUNQLFNBQ1csb0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZmplbWxpXFxEb2N1bWVudHNcXGRldlxcbmV4dFxcaGFja2VyLW5leHRcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7c3Rvcmllc30pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxyXG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5XCIga2V5PXtzdG9yeS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3RvcnkvJHtzdG9yeS5pZH1gfT48YT57c3RvcnkuY29tbWVudHNfY291bnR9IGNvbW1lbnRzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAuc3RvcnktbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnN0b3J5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc3RvcnktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\fjemli\\\\Documents\\\\dev\\\\next\\\\hacker-next\\\\components\\\\StoryList.js */"));
};

_c = StoryList;
/* harmony default export */ __webpack_exports__["default"] = (StoryList);

var _c;

$RefreshReg$(_c, "StoryList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyJdLCJuYW1lcyI6WyJTdG9yeUxpc3QiLCJzdG9yaWVzIiwibWFwIiwic3RvcnkiLCJpZCIsInVybCIsInRpdGxlIiwicG9pbnRzIiwiY29tbWVudHNfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FDZDtBQUFBLHdDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFBQyxLQUFLO0FBQUEsV0FDZDtBQUF1QixTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFBbEM7QUFBQSwwQ0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBLDBDQUFjLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFFRCxLQUFLLENBQUNFLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCRixLQUFLLENBQUNHLEtBQTNCLENBREosQ0FESixFQUlJO0FBQUEsMENBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tILEtBQUssQ0FBQ0ksTUFBTixJQUFnQixDQURyQixZQURKLEVBSUksTUFBQyxnREFBRDtBQUFNLFVBQUksbUJBQVlKLEtBQUssQ0FBQ0MsRUFBbEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxLQUFLLENBQUNLLGNBQVYsY0FBbEMsQ0FKSixDQUpKLENBRGM7QUFBQSxHQUFqQixDQURMO0FBQUE7QUFBQTtBQUFBLHU2RUFEYztBQUFBLENBQWxCOztLQUFNUixTO0FBdUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZWY4ZTdmYWE3OTFmYThiNTY5OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7c3Rvcmllc30pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxyXG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5XCIga2V5PXtzdG9yeS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3RvcnkvJHtzdG9yeS5pZH1gfT48YT57c3RvcnkuY29tbWVudHNfY291bnR9IGNvbW1lbnRzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAuc3RvcnktbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnN0b3J5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc3RvcnktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==