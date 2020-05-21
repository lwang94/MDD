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
    _this.onLC = _this.onLC.bind(_assertThisInitialized(_this)); // this.onD = this.onD.bind(this);

    _this.create_children = _this.create_children.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DragGrid, [{
    key: "create_children",
    value: function create_children() {
      var children = [];

      if (this.props.children != null) {
        for (var inc = 0; inc < this.props.children.length; inc += 1) {
          console.log(this.props.layout[inc]['i']);
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
    // onD(layout, oldItem, newItem, placeholder, e, element) {
    //     const grid = document.getElementsByClassName('react-grid-layout')[0];
    //     const translateXMaxValue = grid.offsetWidth - element.offsetWidth;
    //     const translateYMaxValue = grid.offsetHeight - element.offsetHeight;
    //     const translateValues = window.getComputedStyle(element).transform.split(',');
    //     let translateX = parseInt(translateValues[translateValues.length - 2]);
    //     let translateY = parseInt(translateValues[translateValues.length - 1].slice(0, -1));
    //     if (translateX > translateXMaxValue) {
    //         translateX = translateXMaxValue;
    //     }
    //     if (translateX < 0) {
    //         translateX = 0;
    //     }
    //     if (translateY > translateYMaxValue) {
    //         translateY = translateYMaxValue;
    //     }
    //     if (translateY < 0) {
    //         translateY = 0;
    //     }
    //     element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    // }

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
        onLayoutChange: this.onLC // onDrag={this.onD}>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJpbmMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibGF5b3V0IiwiY2hpbGQiLCJwdXNoIiwibGMiLCJzZXRQcm9wcyIsImNvbXBhY3R0eXBlIiwicm93aGVpZ2h0Iiwid2lkdGgiLCJudW1jb2x1bW5zIiwibWF4cm93cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImkiLCJ4IiwieSIsInciLCJoIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLCtCQUFaLENBRmUsQ0FHZjs7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJELElBQXJCLCtCQUF2QjtBQUplO0FBTWxCOzs7O3NDQUVpQjtBQUNkLFVBQU1FLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxVQUFJLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxJQUF1QixJQUEzQixFQUFpQztBQUM3QixhQUFLLElBQUlDLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUcsS0FBS0wsS0FBTCxDQUFXSSxRQUFYLENBQW9CRSxNQUE1QyxFQUFvREQsR0FBRyxJQUFJLENBQTNELEVBQThEO0FBQzFERSxp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cy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uTEMgPSB0aGlzLm9uTEMuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm9uRCA9IHRoaXMub25ELmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVfY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZV9jaGlsZHJlbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGluYyArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxheW91dFtpbmNdWydpJ10pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IDxkaXYga2V5PXt0aGlzLnByb3BzLmxheW91dFtpbmNdWydpJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuW2luY119XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5cclxuICAgIH1cclxuXHJcbiAgICBvbkxDKGxjKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XHJcbiAgICAgICAgICAgIGxheW91dDogbGNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gbGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSxcclxuICAgIC8vIG9uRChsYXlvdXQsIG9sZEl0ZW0sIG5ld0l0ZW0sIHBsYWNlaG9sZGVyLCBlLCBlbGVtZW50KSB7XHJcbiAgICAvLyAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlYWN0LWdyaWQtbGF5b3V0JylbMF07XHJcbiAgICAvLyAgICAgY29uc3QgdHJhbnNsYXRlWE1heFZhbHVlID0gZ3JpZC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAvLyAgICAgY29uc3QgdHJhbnNsYXRlWU1heFZhbHVlID0gZ3JpZC5vZmZzZXRIZWlnaHQgLSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAvLyAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkudHJhbnNmb3JtLnNwbGl0KCcsJyk7XHJcbiAgICAvLyAgICAgbGV0IHRyYW5zbGF0ZVggPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDJdKTtcclxuICAgIC8vICAgICBsZXQgdHJhbnNsYXRlWSA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTEpKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVYTWF4VmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVhNYXhWYWx1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVggPSAwO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodHJhbnNsYXRlWSA+IHRyYW5zbGF0ZVlNYXhWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlWU1heFZhbHVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodHJhbnNsYXRlWSA8IDApIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpYDtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jaGlsZHJlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5sYXlvdXQpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQnXHJcbiAgICAgICAgICAgIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XHJcbiAgICAgICAgICAgIGNvbXBhY3RUeXBlPXt0aGlzLnByb3BzLmNvbXBhY3R0eXBlfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMucHJvcHMucm93aGVpZ2h0fVxyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgY29scz17dGhpcy5wcm9wcy5udW1jb2x1bW5zfVxyXG4gICAgICAgICAgICBtYXhSb3dzPXt0aGlzLnByb3BzLm1heHJvd3N9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9XHJcbiAgICAgICAgICAgIC8vIG9uRHJhZz17dGhpcy5vbkR9PlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVfY2hpbGRyZW4oKX1cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkRyYWdHcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBbJyAnXSxcclxuICAgIGxheW91dDogW3tpOiAnZGVmYXVsdCcsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDF9XSxcclxuICAgIGNvbXBhY3R0eXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICByb3doZWlnaHQ6IDMwLFxyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBudW1jb2x1bW5zOiA2LFxyXG4gICAgbWF4cm93czogMVxyXG59O1xyXG5cclxuRHJhZ0dyaWQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2hpbGRyZW4gaW4gZWFjaCBwYXJ0IG9mIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxheW91dCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wYWN0IHR5cGVcclxuICAgICAqL1xyXG4gICAgY29tcGFjdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIG9uZSByb3cgaW4gdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgcm93aGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zXHJcbiAgICAgKi9cclxuICAgIG51bWNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIGluIGdyaWRcclxuICAgICAqL1xyXG4gICAgbWF4cm93czogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=