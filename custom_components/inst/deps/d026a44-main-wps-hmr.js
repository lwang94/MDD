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
          var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: this.props.layout[inc]['i']
          }, this.props.children[inc]);
          children.push(child);
        }
      }

      return children;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwib25EIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsInB1c2giLCJsYyIsInNldFByb3BzIiwib2xkSXRlbSIsIm5ld0l0ZW0iLCJwbGFjZWhvbGRlciIsImUiLCJlbGVtZW50IiwiZ3JpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyYW5zbGF0ZVhNYXhWYWx1ZSIsIm9mZnNldFdpZHRoIiwidHJhbnNsYXRlWU1heFZhbHVlIiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNsYXRlVmFsdWVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zZm9ybSIsInNwbGl0IiwidHJhbnNsYXRlWCIsInBhcnNlSW50IiwidHJhbnNsYXRlWSIsInNsaWNlIiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwiY29tcGFjdHR5cGUiLCJyb3doZWlnaHQiLCJ3aWR0aCIsIm51bWNvbHVtbnMiLCJtYXhyb3dzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaSIsIngiLCJ5IiwidyIsImgiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5IiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JB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R0FoQixZQUFVLEVBQUVXLGlEQUFTLENBQUNLLE1BdkNMOztBQXlDakI7OztBQUdBZixTQUFPLEVBQUVVLGlEQUFTLENBQUNLLE1BNUNGOztBQTZDakI7Ozs7QUFJQTVDLFVBQVEsRUFBRXVDLGlEQUFTLENBQUNNO0FBakRILENBQXJCLEMiLCJmaWxlIjoiZDAyNmE0NC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uTEMgPSB0aGlzLm9uTEMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRCA9IHRoaXMub25ELmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVfY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZV9jaGlsZHJlbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGluYyArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IDxkaXYga2V5PXt0aGlzLnByb3BzLmxheW91dFtpbmNdWydpJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuW2luY119XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5cclxuICAgIH1cclxuXHJcbiAgICBvbkxDKGxjKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgICAgICAgICAgIGxheW91dDogbGNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gbGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSxcclxuICAgIG9uRChsYXlvdXQsIG9sZEl0ZW0sIG5ld0l0ZW0sIHBsYWNlaG9sZGVyLCBlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlYWN0LWdyaWQtbGF5b3V0JylbMF07XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWE1heFZhbHVlID0gZ3JpZC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWU1heFZhbHVlID0gZ3JpZC5vZmZzZXRIZWlnaHQgLSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkudHJhbnNmb3JtLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDJdKTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlWSA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTEpKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVYTWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVhNYXhWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWSA+IHRyYW5zbGF0ZVlNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlWU1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWSA8IDApIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jaGlsZHJlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5sYXlvdXQpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQnXHJcbiAgICAgICAgICAgIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XHJcbiAgICAgICAgICAgIGNvbXBhY3RUeXBlPXt0aGlzLnByb3BzLmNvbXBhY3R0eXBlfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMucHJvcHMucm93aGVpZ2h0fVxyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgY29scz17dGhpcy5wcm9wcy5udW1jb2x1bW5zfVxyXG4gICAgICAgICAgICBtYXhSb3dzPXt0aGlzLnByb3BzLm1heHJvd3N9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9XHJcbiAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkR9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogWycgJ10sXHJcbiAgICBsYXlvdXQ6IFt7aTogJ2RlZmF1bHQnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxfV0sXHJcbiAgICBjb21wYWN0dHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgcm93aGVpZ2h0OiAzMCxcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgbnVtY29sdW1uczogNixcclxuICAgIG1heHJvd3M6IDFcclxufTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9