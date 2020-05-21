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
        var propchild = this.props.children;

        if (propchild.constructor != Array) {
          propchild = [propchild];
        }

        ;

        for (var inc = 0; inc < propchild.length; inc += 1) {
          var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: this.props.layout[inc]['i'],
            style: this.props.divstyle
          }, propchild[inc]);
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
      console.log(this.props);
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
  divstyle: {},
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
   * The style of the Div that contains the children
   */
  divstyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwib25EIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJwcm9wY2hpbGQiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiaW5jIiwibGVuZ3RoIiwiY2hpbGQiLCJsYXlvdXQiLCJkaXZzdHlsZSIsInB1c2giLCJsYyIsInNldFByb3BzIiwib2xkSXRlbSIsIm5ld0l0ZW0iLCJwbGFjZWhvbGRlciIsImUiLCJlbGVtZW50IiwiZ3JpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyYW5zbGF0ZVhNYXhWYWx1ZSIsIm9mZnNldFdpZHRoIiwidHJhbnNsYXRlWU1heFZhbHVlIiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNsYXRlVmFsdWVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zZm9ybSIsInNwbGl0IiwidHJhbnNsYXRlWCIsInBhcnNlSW50IiwidHJhbnNsYXRlWSIsInNsaWNlIiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwiY29tcGFjdHR5cGUiLCJyb3doZWlnaHQiLCJ3aWR0aCIsIm51bWNvbHVtbnMiLCJtYXhyb3dzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaSIsIngiLCJ5IiwidyIsImgiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFB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LE1BbkJIOztBQXFCakI7OztBQUdBaEQsUUFBTSxFQUFFMkMsaURBQVMsQ0FBQ0ksS0F4QkQ7O0FBMEJqQjs7O0FBR0FsQixhQUFXLEVBQUVjLGlEQUFTLENBQUNDLE1BN0JOOztBQStCakI7OztBQUdBZCxXQUFTLEVBQUVhLGlEQUFTLENBQUNNLE1BbENKOztBQW9DakI7OztBQUdBbEIsT0FBSyxFQUFFWSxpREFBUyxDQUFDTSxNQXZDQTs7QUF5Q2pCOzs7QUFHQWpCLFlBQVUsRUFBRVcsaURBQVMsQ0FBQ00sTUE1Q0w7O0FBOENqQjs7O0FBR0FoQixTQUFPLEVBQUVVLGlEQUFTLENBQUNNLE1BakRGOztBQWtEakI7Ozs7QUFJQTdDLFVBQVEsRUFBRXVDLGlEQUFTLENBQUNPO0FBdERILENBQXJCLEMiLCJmaWxlIjoiMGNkNWY3NC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uTEMgPSB0aGlzLm9uTEMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRCA9IHRoaXMub25ELmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVfY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZV9jaGlsZHJlbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHByb3BjaGlsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGlmIChwcm9wY2hpbGQuY29uc3RydWN0b3IgIT0gQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHByb3BjaGlsZCA9IFtwcm9wY2hpbGRdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluYyA9IDA7IGluYyA8IHByb3BjaGlsZC5sZW5ndGg7IGluYyArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IDxkaXYga2V5PXt0aGlzLnByb3BzLmxheW91dFtpbmNdWydpJ119IHN0eWxlPXt0aGlzLnByb3BzLmRpdnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcGNoaWxkW2luY119XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5cclxuICAgIH1cclxuXHJcbiAgICBvbkxDKGxjKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgICAgICAgICAgIGxheW91dDogbGNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gbGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSxcclxuICAgIG9uRChsYXlvdXQsIG9sZEl0ZW0sIG5ld0l0ZW0sIHBsYWNlaG9sZGVyLCBlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlYWN0LWdyaWQtbGF5b3V0JylbMF07XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWE1heFZhbHVlID0gZ3JpZC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWU1heFZhbHVlID0gZ3JpZC5vZmZzZXRIZWlnaHQgLSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkudHJhbnNmb3JtLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDJdKTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlWSA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTEpKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVYTWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVhNYXhWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWSA+IHRyYW5zbGF0ZVlNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlWU1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWSA8IDApIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT17dGhpcy5wcm9wcy5jb21wYWN0dHlwZX1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd2hlaWdodH1cclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGNvbHM9e3RoaXMucHJvcHMubnVtY29sdW1uc31cclxuICAgICAgICAgICAgbWF4Um93cz17dGhpcy5wcm9wcy5tYXhyb3dzfVxyXG4gICAgICAgICAgICBvbkxheW91dENoYW5nZT17dGhpcy5vbkxDfVxyXG4gICAgICAgICAgICBvbkRyYWc9e3RoaXMub25EfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZV9jaGlsZHJlbigpfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFsnICddLFxyXG4gICAgZGl2c3R5bGU6IHt9LFxyXG4gICAgbGF5b3V0OiBbe2k6ICdkZWZhdWx0JywgeDogMCwgeTogMCwgdzogMSwgaDogMX1dLFxyXG4gICAgY29tcGFjdHR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHJvd2hlaWdodDogMzAsXHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIG51bWNvbHVtbnM6IDYsXHJcbiAgICBtYXhyb3dzOiAxXHJcbn07XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3R5bGUgb2YgdGhlIERpdiB0aGF0IGNvbnRhaW5zIHRoZSBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBkaXZzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9