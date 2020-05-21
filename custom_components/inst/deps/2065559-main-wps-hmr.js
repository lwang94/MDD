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
    _this.state2 = {
      id: 'test',
      label: 'test',
      layout: layout,
      children: children
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
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.layout[0].x), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps
      }, this.state2))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJzdGF0ZTIiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBRUEsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQyxTQUFELENBQW5COztBQUNBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILE9BQTVCLEVBQXFDRyxLQUFLLElBQUksQ0FBOUMsRUFBaUQ7QUFDN0MsV0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsVUFBNUIsRUFBd0NHLEtBQUssSUFBSSxDQUFqRCxFQUFvRDtBQUNoRCxZQUFNQyxTQUFTLEdBQUdELEtBQUssR0FBR0QsS0FBSyxHQUFHSCxPQUFsQztBQUVBLFlBQU1NLElBQUksR0FBRztBQUNUQyxXQUFDLGlCQUFVRixTQUFWLENBRFE7QUFFVEcsV0FBQyxFQUFFSixLQUZNO0FBR1RLLFdBQUMsRUFBRU4sS0FITTtBQUlUTyxXQUFDLEVBQUUsQ0FKTTtBQUtUQyxXQUFDLEVBQUUsQ0FMTTtBQU1UQyxxQkFBVyxFQUFFO0FBTkosU0FBYjtBQVFBZCxjQUFNLENBQUNlLElBQVAsQ0FBWVAsSUFBWjtBQUNBUCxnQkFBUSxDQUFDYyxJQUFULGVBQWM7QUFBSyxlQUFLLEVBQUU7QUFBQ0MsdUJBQVcsRUFBRTtBQUFkO0FBQVosV0FBcUNaLFVBQVUsQ0FBQyxDQUFELENBQS9DLENBQWQ7QUFDSDtBQUNKOztBQUFBO0FBQ0QsVUFBS2EsS0FBTCxHQUFhO0FBQ1RDLFFBQUUsRUFBRSxNQURLO0FBRVRDLFdBQUssRUFBRSxNQUZFO0FBR1RuQixZQUFNLEVBQUVBLE1BSEM7QUFJVEMsY0FBUSxFQUFFQTtBQUpELEtBQWI7QUFPQSxVQUFLbUIsTUFBTCxHQUFjO0FBQ1ZGLFFBQUUsRUFBRSxNQURNO0FBRVZDLFdBQUssRUFBRSxNQUZHO0FBR1ZuQixZQUFNLEVBQUVBLE1BSEU7QUFJVkMsY0FBUSxFQUFFQTtBQUpBLEtBQWQ7QUFPQSxVQUFLb0IsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBdENVO0FBdUNiOzs7OzZCQUVRQyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0wsMEJBQ0kscUZBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ1AscUJBQVcsRUFBRTtBQUFkO0FBQVosc0JBQ0ksMkRBQUMsNkNBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtLO0FBRG5CLFNBRVEsS0FBS0osS0FGYixFQURKLGVBS0ksdUVBQUssS0FBS0EsS0FBTCxDQUFXakIsTUFBWCxDQUFrQixDQUFsQixFQUFxQlUsQ0FBMUIsQ0FMSixlQU1JLDJEQUFDLDZDQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLVztBQURuQixTQUVRLEtBQUtELE1BRmIsRUFOSixDQURKLENBREo7QUFlSDs7OztFQS9EYUssK0M7O0FBa0VIMUIsa0VBQWYsRSIsImZpbGUiOiIyMDY1NTU5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0dyaWQgfSBmcm9tICcuLi9saWInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYXlvdXQgPSBbXTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG51bVJvd3MgPSAzO1xyXG4gICAgICAgIGNvbnN0IG51bUNvbHVtbnMgPSAzO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbJ1ZvbHRhZ2UnXTtcclxuICAgICAgICBmb3IgKGxldCBjb21weSA9IDA7IGNvbXB5IDwgbnVtUm93czsgY29tcHkgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb21weCA9IDA7IGNvbXB4IDwgbnVtQ29sdW1uczsgY29tcHggKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gY29tcHggKyBjb21weSAqIG51bVJvd3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpOiBgY29tcF8ke2luY3JlbWVudH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IGNvbXB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGNvbXB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDogMSxcclxuICAgICAgICAgICAgICAgICAgICBpc1Jlc2l6YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQucHVzaChjb21wKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goPGRpdiBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+e2NvbXBvbmVudHNbMF19PC9kaXY+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6ICd0ZXN0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICd0ZXN0JyxcclxuICAgICAgICAgICAgbGF5b3V0OiBsYXlvdXQsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUyID0ge1xyXG4gICAgICAgICAgICBpZDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IGxheW91dCxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ0dyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmxheW91dFswXS54fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWdHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==