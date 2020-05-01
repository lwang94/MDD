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

      for (var inc = 0; inc < this.props.children.length; inc += 1) {
        var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: this.props.layout[inc].i
        }, this.props.children[inc]);
        children.push(child);
      }

      ;
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
      console.log('okay');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwib25EIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsImkiLCJwdXNoIiwibGMiLCJzZXRQcm9wcyIsIm9sZEl0ZW0iLCJuZXdJdGVtIiwicGxhY2Vob2xkZXIiLCJlIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidHJhbnNsYXRlWE1heFZhbHVlIiwib2Zmc2V0V2lkdGgiLCJ0cmFuc2xhdGVZTWF4VmFsdWUiLCJvZmZzZXRIZWlnaHQiLCJ0cmFuc2xhdGVWYWx1ZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNmb3JtIiwic3BsaXQiLCJ0cmFuc2xhdGVYIiwicGFyc2VJbnQiLCJ0cmFuc2xhdGVZIiwic2xpY2UiLCJzdHlsZSIsImNvbXBhY3R0eXBlIiwicm93aGVpZ2h0Iiwid2lkdGgiLCJudW1jb2x1bW5zIiwibWF4cm93cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIngiLCJ5IiwidyIsImgiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5IiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JB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SCxDQUFyQixDIiwiZmlsZSI6ImY1MWUwYTgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25MQyA9IHRoaXMub25MQy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EID0gdGhpcy5vbkQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9jaGlsZHJlbiA9IHRoaXMuY3JlYXRlX2NoaWxkcmVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9jaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGluYyArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gPGRpdiBrZXk9e3RoaXMucHJvcHMubGF5b3V0W2luY10uaX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbltpbmNdfVxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgb25MQyhsYykge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xyXG4gICAgICAgICAgICBsYXlvdXQ6IGxjXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsXHJcbiAgICBvbkQobGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSwgZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdva2F5JylcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhY3QtZ3JpZC1sYXlvdXQnKVswXTtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVYTWF4VmFsdWUgPSBncmlkLm9mZnNldFdpZHRoIC0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVZTWF4VmFsdWUgPSBncmlkLm9mZnNldEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS50cmFuc2Zvcm0uc3BsaXQoJywnKTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMl0pO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVZID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAxXS5zbGljZSgwLCAtMSkpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZVhNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlWE1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWCA8IDApIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlWU1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVZTWF4VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVZIDwgMCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT17dGhpcy5wcm9wcy5jb21wYWN0dHlwZX1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd2hlaWdodH1cclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGNvbHM9e3RoaXMucHJvcHMubnVtY29sdW1uc31cclxuICAgICAgICAgICAgbWF4Um93cz17dGhpcy5wcm9wcy5tYXhyb3dzfVxyXG4gICAgICAgICAgICBvbkxheW91dENoYW5nZT17dGhpcy5vbkxDfVxyXG4gICAgICAgICAgICBvbkRyYWc9e3RoaXMub25EfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZV9jaGlsZHJlbigpfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFsnICddLFxyXG4gICAgbGF5b3V0OiBbe2k6ICdkZWZhdWx0JywgeDogMCwgeTogMCwgdzogMSwgaDogMX1dLFxyXG4gICAgY29tcGFjdHR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHJvd2hlaWdodDogMzAsXHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIG51bWNvbHVtbnM6IDYsXHJcbiAgICBtYXhyb3dzOiAxXHJcbn07XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF5b3V0IG9mIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBhY3QgdHlwZVxyXG4gICAgICovXHJcbiAgICBjb21wYWN0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBoZWlnaHQgb2Ygb25lIHJvdyBpbiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICByb3doZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdG90YWwgd2lkdGggb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcclxuICAgICAqL1xyXG4gICAgbnVtY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgaW4gZ3JpZFxyXG4gICAgICovXHJcbiAgICBtYXhyb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==