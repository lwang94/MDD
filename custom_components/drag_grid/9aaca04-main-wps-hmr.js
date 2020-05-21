webpackHotUpdatedrag_grid("main",{

/***/ "./src/lib/components/DragGrid.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/DragGrid.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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



 // import '\\react-grid-layout\\css\\styles.css';
// import '\\react-resizable\\css\\styles.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var DragGrid = /*#__PURE__*/function (_Component) {
  _inherits(DragGrid, _Component);

  var _super = _createSuper(DragGrid);

  function DragGrid(props) {
    var _this;

    _classCallCheck(this, DragGrid);

    _this = _super.call(this, props);
    _this.onLC = _this.onLC.bind(_assertThisInitialized(_this));
    _this.onD = _this.onD.bind(_assertThisInitialized(_this));
    _this.create_children = _this.create_children.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DragGrid, [{
    key: "create_children",
    value: function create_children() {
      var children = [];

      if (this.props.children != null) {
        for (var inc = 0; inc < this.props.children.length; inc += 1) {
          var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.children[inc]);
          children.push(child);
        }
      }

      return children;
    } // key={this.props.layout[inc]['i']}

  }, {
    key: "onLC",
    value: function onLC(lc) {
      this.props.setProps({
        layout: lc
      });
    } // layout, oldItem, newItem, placeholder, e,

  }, {
    key: "onD",
    value: function onD(layout, oldItem, newItem, placeholder, e, element) {
      var grid = document.getElementsByClassName('react-grid-layout')[0];
      var translateXMaxValue = grid.offsetWidth - element.offsetWidth;
      var translateYMaxValue = grid.offsetHeight - element.offsetHeight;
      var translateValues = window.getComputedStyle(element).transform.split(',');
      var translateX = parseInt(translateValues[translateValues.length - 2]);
      var translateY = parseInt(translateValues[translateValues.length - 1].slice(0, -1));

      if (translateX > translateXMaxValue) {
        translateX = translateXMaxValue;
      }

      if (translateX < 0) {
        translateX = 0;
      }

      if (translateY > translateYMaxValue) {
        translateY = translateYMaxValue;
      }

      if (translateY < 0) {
        translateY = 0;
      }

      element.style.transform = "translate(".concat(translateX, "px, ").concat(translateY, "px)");
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.children);
      console.log(this.props.layout);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: this.props.layout,
        compactType: this.props.compacttype,
        rowHeight: this.props.rowheight,
        width: this.props.width,
        cols: this.props.numcolumns,
        maxRows: this.props.maxrows,
        onLayoutChange: this.onLC,
        onDrag: this.onD
      }, this.create_children());
    }
  }]);

  return DragGrid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DragGrid.defaultProps = {
  children: [' '],
  layout: [{
    i: 'default',
    x: 0,
    y: 0,
    w: 1,
    h: 1
  }],
  compacttype: 'horizontal',
  rowheight: 30,
  width: 1200,
  numcolumns: 6,
  maxrows: 1
};
DragGrid.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The children in each part of the grid.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The layout of the grid
   */
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The compact type
   */
  compacttype: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The height of one row in the grid
   */
  rowheight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The total width of the grid
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The number of columns
   */
  numcolumns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Maximum number of rows in grid
   */
  maxrows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwib25EIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsInB1c2giLCJsYyIsInNldFByb3BzIiwibGF5b3V0Iiwib2xkSXRlbSIsIm5ld0l0ZW0iLCJwbGFjZWhvbGRlciIsImUiLCJlbGVtZW50IiwiZ3JpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyYW5zbGF0ZVhNYXhWYWx1ZSIsIm9mZnNldFdpZHRoIiwidHJhbnNsYXRlWU1heFZhbHVlIiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNsYXRlVmFsdWVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zZm9ybSIsInNwbGl0IiwidHJhbnNsYXRlWCIsInBhcnNlSW50IiwidHJhbnNsYXRlWSIsInNsaWNlIiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwiY29tcGFjdHR5cGUiLCJyb3doZWlnaHQiLCJ3aWR0aCIsIm51bWNvbHVtbnMiLCJtYXhyb3dzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaSIsIngiLCJ5IiwidyIsImgiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5IiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JB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RVUsaURBQVMsQ0FBQ0ssTUE1Q0Y7O0FBNkNqQjs7OztBQUlBN0MsVUFBUSxFQUFFd0MsaURBQVMsQ0FBQ007QUFqREgsQ0FBckIsQyIsImZpbGUiOiI5YWFjYTA0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25MQyA9IHRoaXMub25MQy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EID0gdGhpcy5vbkQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9jaGlsZHJlbiA9IHRoaXMuY3JlYXRlX2NoaWxkcmVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9jaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCB0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDsgaW5jICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbltpbmNdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcbiAgICAvLyBrZXk9e3RoaXMucHJvcHMubGF5b3V0W2luY11bJ2knXX1cclxuXHJcbiAgICBvbkxDKGxjKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgICAgICAgICAgIGxheW91dDogbGNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gbGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSxcclxuICAgIG9uRChsYXlvdXQsIG9sZEl0ZW0sIG5ld0l0ZW0sIHBsYWNlaG9sZGVyLCBlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlYWN0LWdyaWQtbGF5b3V0JylbMF07XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWE1heFZhbHVlID0gZ3JpZC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWU1heFZhbHVlID0gZ3JpZC5vZmZzZXRIZWlnaHQgLSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkudHJhbnNmb3JtLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDJdKTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlWSA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTEpKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVYTWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVhNYXhWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWSA+IHRyYW5zbGF0ZVlNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlWU1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWSA8IDApIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jaGlsZHJlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5sYXlvdXQpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQnXHJcbiAgICAgICAgICAgIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XHJcbiAgICAgICAgICAgIGNvbXBhY3RUeXBlPXt0aGlzLnByb3BzLmNvbXBhY3R0eXBlfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMucHJvcHMucm93aGVpZ2h0fVxyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgY29scz17dGhpcy5wcm9wcy5udW1jb2x1bW5zfVxyXG4gICAgICAgICAgICBtYXhSb3dzPXt0aGlzLnByb3BzLm1heHJvd3N9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9XHJcbiAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkR9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogWycgJ10sXHJcbiAgICBsYXlvdXQ6IFt7aTogJ2RlZmF1bHQnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxfV0sXHJcbiAgICBjb21wYWN0dHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgcm93aGVpZ2h0OiAzMCxcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgbnVtY29sdW1uczogNixcclxuICAgIG1heHJvd3M6IDFcclxufTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9