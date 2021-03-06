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
    var layout = [];
    var children = [];
    var numRows = 3;
    var numColumns = 3;
    var components = ['Voltage'];

    for (var compy = 0; compy < numRows; compy += 1) {
      for (var compx = 0; compx < numColumns; compx += 1) {
        var increment = compx + compy * numRows;
        var comp = {
          i: "comp_".concat(increment),
          x: compx,
          y: compy,
          w: 1,
          h: 1,
          isResizable: false
        };
        layout.push(comp);
        children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            borderStyle: 'solid'
          }
        }, components[0]));
      }
    }

    ;
    _this.state = {
      id: 'test',
      label: 'test',
      layout: layout,
      children: children
    };
    var layout2 = [];
    var children2 = [];
    var numRows2 = 3;
    var numColumns2 = 3;
    var components2 = ['Temp'];

    for (var _compy = 0; _compy < numRows2; _compy += 1) {
      for (var _compx = 0; _compx < numColumns2; _compx += 1) {
        var increment2 = _compx + _compy * numRows2;
        var comp2 = {
          i: "comp_".concat(increment2),
          x: _compx,
          y: _compy,
          w: 1,
          h: 1,
          isResizable: false
        };
        layout2.push(comp2);
        children2.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            borderStyle: 'solid'
          }
        }, components2[0]));
      }
    }

    ;
    _this.state2 = {
      id: 'test2',
      label: 'test2',
      layout: layout2,
      children: children2
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    _this.setProps2 = _this.setProps2.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "setProps2",
    value: function setProps2(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          borderStyle: 'solid'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.layout[0].x), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps2
      }, this.state2))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJsYXlvdXQyIiwiY2hpbGRyZW4yIiwibnVtUm93czIiLCJudW1Db2x1bW5zMiIsImNvbXBvbmVudHMyIiwiaW5jcmVtZW50MiIsImNvbXAyIiwic3RhdGUyIiwic2V0UHJvcHMiLCJiaW5kIiwic2V0UHJvcHMyIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0lBRU1BLEc7Ozs7O0FBRUYsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUMsU0FBRCxDQUFuQjs7QUFDQSxTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSCxPQUE1QixFQUFxQ0csS0FBSyxJQUFJLENBQTlDLEVBQWlEO0FBQzdDLFdBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILFVBQTVCLEVBQXdDRyxLQUFLLElBQUksQ0FBakQsRUFBb0Q7QUFDaEQsWUFBTUMsU0FBUyxHQUFHRCxLQUFLLEdBQUdELEtBQUssR0FBR0gsT0FBbEM7QUFFQSxZQUFNTSxJQUFJLEdBQUc7QUFD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bWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IERyYWdHcmlkIH0gZnJvbSAnLi4vbGliJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW107XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBjb25zdCBudW1Sb3dzID0gMztcclxuICAgICAgICBjb25zdCBudW1Db2x1bW5zID0gMztcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gWydWb2x0YWdlJ107XHJcbiAgICAgICAgZm9yIChsZXQgY29tcHkgPSAwOyBjb21weSA8IG51bVJvd3M7IGNvbXB5ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcHggPSAwOyBjb21weCA8IG51bUNvbHVtbnM7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudCA9IGNvbXB4ICsgY29tcHkgKiBudW1Sb3dzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaTogYGNvbXBfJHtpbmNyZW1lbnR9YCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb21weCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjb21weSxcclxuICAgICAgICAgICAgICAgICAgICB3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNpemFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LnB1c2goY29tcCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319Pntjb21wb25lbnRzWzBdfTwvZGl2Pik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiAndGVzdCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAndGVzdCcsXHJcbiAgICAgICAgICAgIGxheW91dDogbGF5b3V0LFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsYXlvdXQyID0gW107XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4yID0gW107XHJcbiAgICAgICAgY29uc3QgbnVtUm93czIgPSAzO1xyXG4gICAgICAgIGNvbnN0IG51bUNvbHVtbnMyID0gMztcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzMiA9IFsnVGVtcCddO1xyXG4gICAgICAgIGZvciAobGV0IGNvbXB5ID0gMDsgY29tcHkgPCBudW1Sb3dzMjsgY29tcHkgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb21weCA9IDA7IGNvbXB4IDwgbnVtQ29sdW1uczI7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudDIgPSBjb21weCArIGNvbXB5ICogbnVtUm93czI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaTogYGNvbXBfJHtpbmNyZW1lbnQyfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29tcHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29tcHksXHJcbiAgICAgICAgICAgICAgICAgICAgdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxheW91dDIucHVzaChjb21wMik7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjIucHVzaCg8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT57Y29tcG9uZW50czJbMF19PC9kaXY+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZTIgPSB7XHJcbiAgICAgICAgICAgIGlkOiAndGVzdDInLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3Rlc3QyJyxcclxuICAgICAgICAgICAgbGF5b3V0OiBsYXlvdXQyLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4yXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldFByb3BzMiA9IHRoaXMuc2V0UHJvcHMyLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzMihuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWdHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5sYXlvdXRbMF0ueH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlMn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9