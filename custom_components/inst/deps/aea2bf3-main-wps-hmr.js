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
    var numRows = 1;
    var numColumns = 1;
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
          isResizable: false
        };
        layout.push(comp);
        children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            borderStyle: 'solid'
          }
        }, components[increment]));
      }
    }

    ;
    _this.state = {
      id: 'test',
      label: 'test',
      children: children,
      layout: layout,
      compacttype: 'vertical',
      maxrows: 2,
      numcolumns: 1
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          borderStyle: 'solid'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.layout[0].x)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJjb21wYWN0dHlwZSIsIm1heHJvd3MiLCJudW1jb2x1bW5zIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0lBRU1BLEc7Ozs7O0FBRUYsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0IsVUFBcEIsQ0FBbkI7O0FBQ0EsU0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsT0FBNUIsRUFBcUNHLEtBQUssSUFBSSxDQUE5QyxFQUFpRDtBQUM3QyxXQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSCxVQUE1QixFQUF3Q0csS0FBSyxJQUFJLENBQWpELEVBQW9EO0FBQ2hELFlBQU1DLFNBQVMsR0FBR0QsS0FBSyxHQUFHRCxLQUFLLEdBQUdILE9BQWxDO0FBRUEsWUFBTU0sSUFBSSxHQUFHO0FBQ1RDLFdBQUMsaUJBQVVGLFNBQVYsQ0FEUTtBQUVURyxXQUFDLEVBQUVKLEtBRk07QUFHVEssV0FBQyxFQUFFTixLQUhNO0FBSVRPLFdBQUMsRUFBRSxDQUpNO0FBS1RDLFdBQUMsRUFBRSxDQUxNO0FBTVRDLHFCQUFXLEVBQUU7QUFOSixTQUFiO0FBUUFkLGNBQU0sQ0FBQ2UsSUFBUCxDQUFZUCxJQUFaO0FBQ0FQLGdCQUFRLENBQUNjLElBQVQsZUFBYztBQUFLLGVBQUssRUFBRTtBQUFDQyx1QkFBVyxFQUFFO0FBQWQ7QUFBWixXQUFxQ1osVUFBVSxDQUFDRyxTQUFELENBQS9DLENBQWQ7QUFDSDtBQUNKOztBQUFBO0FBQ0QsVUFBS1UsS0FBTCxHQUFhO0FBQ1RDLFFBQUUsRUFBRSxNQURLO0FBRVRDLFdBQUssRUFBRSxNQUZFO0FBR1RsQixjQUFRLEVBQUVBLFFBSEQ7QUFJVEQsWUFBTSxFQUFFQSxNQUpDO0FBS1RvQixpQkFBVyxFQUFFLFVBTEo7QUFNVEMsYUFBTyxFQUFFLENBTkE7QUFPVEMsZ0JBQVUsRUFBRTtBQVBILEtBQWI7QUFVQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFsQ1U7QUFtQ2I7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCwwQkFDSSxxRkFFSTtBQUFLLGFBQUssRUFBRTtBQUFDVCxxQkFBVyxFQUFFO0FBQWQ7QUFBWixzQkFDSSwyREFBQyw2Q0FBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS087QUFEbkIsU0FFUSxLQUFLTixLQUZiLEVBREosZUFLSSx1RUFBSyxLQUFLQSxLQUFMLENBQVdqQixNQUFYLENBQWtCLENBQWxCLEVBQXFCVSxDQUExQixDQUxKLENBRkosQ0FESjtBQVlIOzs7O0VBeERhaUIsK0M7O0FBMkRINUIsa0VBQWYsRSIsImZpbGUiOiJhZWEyYmYzLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0dyaWQgfSBmcm9tICcuLi9saWInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYXlvdXQgPSBbXTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG51bVJvd3MgPSAxO1xyXG4gICAgICAgIGNvbnN0IG51bUNvbHVtbnMgPSAxO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbJ1ZvbHRhZ2UnLCAnVGVtcCcsICdQcmVzc3VyZSddXHJcbiAgICAgICAgZm9yIChsZXQgY29tcHkgPSAwOyBjb21weSA8IG51bVJvd3M7IGNvbXB5ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcHggPSAwOyBjb21weCA8IG51bUNvbHVtbnM7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudCA9IGNvbXB4ICsgY29tcHkgKiBudW1Sb3dzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaTogYGNvbXBfJHtpbmNyZW1lbnR9YCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb21weCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjb21weSxcclxuICAgICAgICAgICAgICAgICAgICB3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNpemFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LnB1c2goY29tcCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319Pntjb21wb25lbnRzW2luY3JlbWVudF19PC9kaXY+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6ICd0ZXN0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICd0ZXN0JyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IGxheW91dCxcclxuICAgICAgICAgICAgY29tcGFjdHR5cGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgIG1heHJvd3M6IDIsXHJcbiAgICAgICAgICAgIG51bWNvbHVtbnM6IDFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdj5IZWxsbzwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUubGF5b3V0WzBdLnh9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==