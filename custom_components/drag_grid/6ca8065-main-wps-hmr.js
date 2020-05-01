webpackHotUpdatedrag_grid("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-magic-numbers: 0 */



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    var format = [];
    var numRows = 1;
    var numColumns = 3;
    var components = ['Voltage', 'Temp', 'Pressure'];

    for (var compy = 0; compy < numRows; compy += 1) {
      for (var compx = 0; compx < numColumns; compx += 1) {
        var increment = compx + compy * numRows;
        var comp = {
          i: "comp_".concat(increment),
          x: compx,
          y: compy,
          w: 1,
          h: 1,
          isResizable: false,
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, components[increment])
        };
        format.push(comp);
      }
    }

    ;
    _this.state = {
      id: 'test',
      label: 'test',
      format: format
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.format);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.format[0].x));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwiZm9ybWF0IiwibnVtUm93cyIsIm51bUNvbHVtbnMiLCJjb21wb25lbnRzIiwiY29tcHkiLCJjb21weCIsImluY3JlbWVudCIsImNvbXAiLCJpIiwieCIsInkiLCJ3IiwiaCIsImlzUmVzaXphYmxlIiwiY2hpbGRyZW4iLCJwdXNoIiwic3RhdGUiLCJpZCIsImxhYmVsIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFFQSxRQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLFVBQXBCLENBQW5COztBQUNBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILE9BQTVCLEVBQXFDRyxLQUFLLElBQUksQ0FBOUMsRUFBaUQ7QUFDN0MsV0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsVUFBNUIsRUFBd0NHLEtBQUssSUFBSSxDQUFqRCxFQUFvRDtBQUNoRCxZQUFNQyxTQUFTLEdBQUdELEtBQUssR0FBR0QsS0FBSyxHQUFHSCxPQUFsQztBQUVBLFlBQU1NLElBQUksR0FBRztBQUNUQyxXQUFDLGlCQUFVRixTQUFWLENBRFE7QUFFVEcsV0FBQyxFQUFFSixLQUZNO0FBR1RLLFdBQUMsRUFBRU4sS0FITTtBQUlUTyxXQUFDLEVBQUUsQ0FKTTtBQUtUQyxXQUFDLEVBQUUsQ0FMTTtBQU1UQyxxQkFBVyxFQUFFLEtBTko7QUFPVEMsa0JBQVEsZUFBRSx3RUFBTVgsVUFBVSxDQUFDRyxTQUFELENBQWhCO0FBUEQsU0FBYjtBQVNBTixjQUFNLENBQUNlLElBQVAsQ0FBWVIsSUFBWjtBQUNIO0FBQ0o7O0FBQUE7QUFDRCxVQUFLUyxLQUFMLEdBQWE7QUFDVEMsUUFBRSxFQUFFLE1BREs7QUFFVEMsV0FBSyxFQUFFLE1BRkU7QUFHVGxCLFlBQU0sRUFBRUE7QUFIQyxLQUFiO0FBTUEsVUFBS21CLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQTdCVTtBQThCYjs7Ozs2QkFFUUMsUSxFQUFVO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7Ozs2QkFFUTtBQUNMRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLUixLQUFMLENBQVdoQixNQUF2QjtBQUNBLDBCQUNJLHFGQUNJLDJEQUFDLDZDQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLbUI7QUFEbkIsU0FFUSxLQUFLSCxLQUZiLEVBREosZUFLSSx1RUFBSyxLQUFLQSxLQUFMLENBQVdoQixNQUFYLENBQWtCLENBQWxCLEVBQXFCUyxDQUExQixDQUxKLENBREo7QUFTSDs7OztFQWpEYWdCLCtDOztBQW9ESDFCLGtFQUFmLEUiLCJmaWxlIjoiNmNhODA2NS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IERyYWdHcmlkIH0gZnJvbSAnLi4vbGliJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gW11cclxuICAgICAgICBjb25zdCBudW1Sb3dzID0gMTtcclxuICAgICAgICBjb25zdCBudW1Db2x1bW5zID0gMztcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gWydWb2x0YWdlJywgJ1RlbXAnLCAnUHJlc3N1cmUnXVxyXG4gICAgICAgIGZvciAobGV0IGNvbXB5ID0gMDsgY29tcHkgPCBudW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCBudW1Db2x1bW5zOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSBjb21weCArIGNvbXB5ICogbnVtUm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGk6IGBjb21wXyR7aW5jcmVtZW50fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29tcHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29tcHksXHJcbiAgICAgICAgICAgICAgICAgICAgdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogPGRpdj57Y29tcG9uZW50c1tpbmNyZW1lbnRdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvcm1hdC5wdXNoKGNvbXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mb3JtYXQpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEcmFnR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5mb3JtYXRbMF0ueH08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==