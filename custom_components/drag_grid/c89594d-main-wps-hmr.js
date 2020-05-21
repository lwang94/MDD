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
          i: "comp2_".concat(increment2),
          x: _compx,
          y: _compy,
          w: 1,
          h: 1,
          isResizable: false
        };
        layout2.push(comp2);
        children2.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            borderStyle: 'solid',
            height: 500
          }
        }, components2[0]));
      }
    }

    ;
    _this.state2 = {
      id: 'test2',
      label: 'test2',
      layout: layout2,
      children: children2,
      rowheight: 500
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJsYXlvdXQyIiwiY2hpbGRyZW4yIiwibnVtUm93czIiLCJudW1Db2x1bW5zMiIsImNvbXBvbmVudHMyIiwiaW5jcmVtZW50MiIsImNvbXAyIiwiaGVpZ2h0Iiwic3RhdGUyIiwicm93aGVpZ2h0Iiwic2V0UHJvcHMiLCJiaW5kIiwic2V0UHJvcHMyIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0lBRU1BLEc7Ozs7O0FBRUYsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUMsU0FBRCxDQUFuQjs7QUFDQSxTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSCxPQUE1QixFQUFxQ0csS0FBSyxJQUFJLENBQTlDLEVBQWlEO0FBQzdDLFdBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILFVBQTVCLEVBQXdDRyxLQUFLLElBQUksQ0FBakQsRUFBb0Q7QUFDaEQsWUFBTUMsU0FBUyxHQUFHRCxLQUFLLEdBQUdELEtBQUssR0FBR0gsT0FBbEM7QUFF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IiwiZmlsZSI6ImM4OTU5NGQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBEcmFnR3JpZCB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XHJcbiAgICAgICAgY29uc3QgbnVtUm93cyA9IDM7XHJcbiAgICAgICAgY29uc3QgbnVtQ29sdW1ucyA9IDM7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFsnVm9sdGFnZSddO1xyXG4gICAgICAgIGZvciAobGV0IGNvbXB5ID0gMDsgY29tcHkgPCBudW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCBudW1Db2x1bW5zOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSBjb21weCArIGNvbXB5ICogbnVtUm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGk6IGBjb21wXyR7aW5jcmVtZW50fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29tcHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29tcHksXHJcbiAgICAgICAgICAgICAgICAgICAgdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxheW91dC5wdXNoKGNvbXApO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCg8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT57Y29tcG9uZW50c1swXX08L2Rpdj4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IGxheW91dCxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0MiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuMiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG51bVJvd3MyID0gMztcclxuICAgICAgICBjb25zdCBudW1Db2x1bW5zMiA9IDM7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50czIgPSBbJ1RlbXAnXTtcclxuICAgICAgICBmb3IgKGxldCBjb21weSA9IDA7IGNvbXB5IDwgbnVtUm93czI7IGNvbXB5ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcHggPSAwOyBjb21weCA8IG51bUNvbHVtbnMyOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmNyZW1lbnQyID0gY29tcHggKyBjb21weSAqIG51bVJvd3MyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGk6IGBjb21wMl8ke2luY3JlbWVudDJ9YCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb21weCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjb21weSxcclxuICAgICAgICAgICAgICAgICAgICB3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNpemFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0Mi5wdXNoKGNvbXAyKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuMi5wdXNoKDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJywgaGVpZ2h0OiA1MDB9fT57Y29tcG9uZW50czJbMF19PC9kaXY+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZTIgPSB7XHJcbiAgICAgICAgICAgIGlkOiAndGVzdDInLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3Rlc3QyJyxcclxuICAgICAgICAgICAgbGF5b3V0OiBsYXlvdXQyLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4yLFxyXG4gICAgICAgICAgICByb3doZWlnaHQ6IDUwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wczIgPSB0aGlzLnNldFByb3BzMi5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wczIobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUubGF5b3V0WzBdLnh9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ0dyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==