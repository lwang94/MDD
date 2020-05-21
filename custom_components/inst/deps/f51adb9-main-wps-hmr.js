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
            key: this.props.layout[inc].i,
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwib25EIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJwcm9wY2hpbGQiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiaW5jIiwibGVuZ3RoIiwiY2hpbGQiLCJsYXlvdXQiLCJpIiwiZGl2c3R5bGUiLCJwdXNoIiwibGMiLCJzZXRQcm9wcyIsIm9sZEl0ZW0iLCJuZXdJdGVtIiwicGxhY2Vob2xkZXIiLCJlIiwiZWxlbWVudCIsImdyaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmFuc2xhdGVYTWF4VmFsdWUiLCJvZmZzZXRXaWR0aCIsInRyYW5zbGF0ZVlNYXhWYWx1ZSIsIm9mZnNldEhlaWdodCIsInRyYW5zbGF0ZVZhbHVlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcGxpdCIsInRyYW5zbGF0ZVgiLCJwYXJzZUludCIsInRyYW5zbGF0ZVkiLCJzbGljZSIsInN0eWxlIiwiY29tcGFjdHR5cGUiLCJyb3doZWlnaHQiLCJ3aWR0aCIsIm51bWNvbHVtbnMiLCJtYXhyb3dzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwieCIsInkiLCJ3IiwiaCIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBT3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFB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R0FqQixhQUFXLEVBQUVhLGlEQUFTLENBQUNDLE1BN0JOOztBQStCakI7OztBQUdBYixXQUFTLEVBQUVZLGlEQUFTLENBQUNNLE1BbENKOztBQW9DakI7OztBQUdBakIsT0FBSyxFQUFFVyxpREFBUyxDQUFDTSxNQXZDQTs7QUF5Q2pCOzs7QUFHQWhCLFlBQVUsRUFBRVUsaURBQVMsQ0FBQ00sTUE1Q0w7O0FBOENqQjs7O0FBR0FmLFNBQU8sRUFBRVMsaURBQVMsQ0FBQ00sTUFqREY7O0FBa0RqQjs7OztBQUlBMUMsVUFBUSxFQUFFb0MsaURBQVMsQ0FBQ087QUF0REgsQ0FBckIsQyIsImZpbGUiOiJmNTFhZGI5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25MQyA9IHRoaXMub25MQy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EID0gdGhpcy5vbkQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9jaGlsZHJlbiA9IHRoaXMuY3JlYXRlX2NoaWxkcmVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9jaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKHByb3BjaGlsZC5jb25zdHJ1Y3RvciAhPSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGNoaWxkID0gW3Byb3BjaGlsZF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgcHJvcGNoaWxkLmxlbmd0aDsgaW5jICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gPGRpdiBrZXk9e3RoaXMucHJvcHMubGF5b3V0W2luY10uaX0gc3R5bGU9e3RoaXMucHJvcHMuZGl2c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wY2hpbGRbaW5jXX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGlsZHJlblxyXG4gICAgfVxyXG5cclxuICAgIG9uTEMobGMpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgbGF5b3V0OiBsY1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EKGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhY3QtZ3JpZC1sYXlvdXQnKVswXTtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVYTWF4VmFsdWUgPSBncmlkLm9mZnNldFdpZHRoIC0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVZTWF4VmFsdWUgPSBncmlkLm9mZnNldEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS50cmFuc2Zvcm0uc3BsaXQoJywnKTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMl0pO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVZID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAxXS5zbGljZSgwLCAtMSkpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZVhNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlWE1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWCA8IDApIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlWU1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVZTWF4VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVZIDwgMCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT17dGhpcy5wcm9wcy5jb21wYWN0dHlwZX1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd2hlaWdodH1cclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGNvbHM9e3RoaXMucHJvcHMubnVtY29sdW1uc31cclxuICAgICAgICAgICAgbWF4Um93cz17dGhpcy5wcm9wcy5tYXhyb3dzfVxyXG4gICAgICAgICAgICBvbkxheW91dENoYW5nZT17dGhpcy5vbkxDfVxyXG4gICAgICAgICAgICBvbkRyYWc9e3RoaXMub25EfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZV9jaGlsZHJlbigpfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFsnICddLFxyXG4gICAgZGl2c3R5bGU6IHt9LFxyXG4gICAgbGF5b3V0OiBbe2k6ICdkZWZhdWx0JywgeDogMCwgeTogMCwgdzogMSwgaDogMX1dLFxyXG4gICAgY29tcGFjdHR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHJvd2hlaWdodDogMzAsXHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIG51bWNvbHVtbnM6IDYsXHJcbiAgICBtYXhyb3dzOiAxXHJcbn07XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3R5bGUgb2YgdGhlIERpdiB0aGF0IGNvbnRhaW5zIHRoZSBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBkaXZzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9