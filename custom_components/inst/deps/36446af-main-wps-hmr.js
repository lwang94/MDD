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
      maxrows: 2
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.layout[0].x)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJjb21wYWN0dHlwZSIsIm1heHJvd3MiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBRUEsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixVQUFwQixDQUFuQjs7QUFDQSxTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSCxPQUE1QixFQUFxQ0csS0FBSyxJQUFJLENBQTlDLEVBQWlEO0FBQzdDLFdBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILFVBQTVCLEVBQXdDRyxLQUFLLElBQUksQ0FBakQsRUFBb0Q7QUFDaEQsWUFBTUMsU0FBUyxHQUFHRCxLQUFLLEdBQUdELEtBQUssR0FBR0gsT0FBbEM7QUFFQSxZQUFNTSxJQUFJLEdBQUc7QUFDVEMsV0FBQyxpQkFBVUYsU0FBVixDQURRO0FBRVRHLFdBQUMsRUFBRUosS0FGTTtBQUdUSyxXQUFDLEVBQUVOLEtBSE07QUFJVE8sV0FBQyxFQUFFLENBSk07QUFLVEMsV0FBQyxFQUFFLENBTE07QUFNVEMscUJBQVcsRUFBRTtBQU5KLFNBQWI7QUFRQWQsY0FBTSxDQUFDZSxJQUFQLENBQVlQLElBQVo7QUFDQVAsZ0JBQVEsQ0FBQ2MsSUFBVCxlQUFjO0FBQUssZUFBSyxFQUFFO0FBQUNDLHVCQUFXLEVBQUU7QUFBZDtBQUFaLFdBQXFDWixVQUFVLENBQUNHLFNBQUQsQ0FBL0MsQ0FBZDtBQUNIO0FBQ0o7O0FBQUE7QUFDRCxVQUFLVSxLQUFMLEdBQWE7QUFDVEMsUUFBRSxFQUFFLE1BREs7QUFFVEMsV0FBSyxFQUFFLE1BRkU7QUFHVGxCLGNBQVEsRUFBRUEsUUFIRDtBQUlURCxZQUFNLEVBQUVBLE1BSkM7QUFLVG9CLGlCQUFXLEVBQUUsVUFMSjtBQU1UQyxhQUFPLEVBQUU7QUFOQSxLQUFiO0FBU0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBakNVO0FBa0NiOzs7OzZCQUVRQyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0wsMEJBQ0kscUZBRUkscUZBQ0ksMkRBQUMsNkNBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtGO0FBRG5CLFNBRVEsS0FBS0wsS0FGYixFQURKLGVBS0ksdUVBQUssS0FBS0EsS0FBTCxDQUFXakIsTUFBWCxDQUFrQixDQUFsQixFQUFxQlUsQ0FBMUIsQ0FMSixDQUZKLENBREo7QUFZSDs7OztFQXZEYWdCLCtDOztBQTBESDNCLGtFQUFmLEUiLCJmaWxlIjoiMzY0NDZhZi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IERyYWdHcmlkIH0gZnJvbSAnLi4vbGliJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW107XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBjb25zdCBudW1Sb3dzID0gMTtcclxuICAgICAgICBjb25zdCBudW1Db2x1bW5zID0gMztcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gWydWb2x0YWdlJywgJ1RlbXAnLCAnUHJlc3N1cmUnXVxyXG4gICAgICAgIGZvciAobGV0IGNvbXB5ID0gMDsgY29tcHkgPCBudW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCBudW1Db2x1bW5zOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSBjb21weCArIGNvbXB5ICogbnVtUm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGk6IGBjb21wXyR7aW5jcmVtZW50fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29tcHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29tcHksXHJcbiAgICAgICAgICAgICAgICAgICAgdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxheW91dC5wdXNoKGNvbXApO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCg8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT57Y29tcG9uZW50c1tpbmNyZW1lbnRdfTwvZGl2Pik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiAndGVzdCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAndGVzdCcsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcclxuICAgICAgICAgICAgbGF5b3V0OiBsYXlvdXQsXHJcbiAgICAgICAgICAgIGNvbXBhY3R0eXBlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBtYXhyb3dzOiAyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXY+SGVsbG88L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUubGF5b3V0WzBdLnh9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==