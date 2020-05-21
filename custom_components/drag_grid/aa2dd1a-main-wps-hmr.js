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

    _this = _super.call(this, props); // this.onLC = this.onLC.bind(this);

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
    } // onLC(lc) {
    //     this.props.setProps({
    //         layout: lc
    //     })
    // }

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
        maxRows: this.props.maxrows // onLayoutChange={this.onLC}
        ,
        onDrag: this.onD
      }, ">", this.create_children());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uRCIsImJpbmQiLCJjcmVhdGVfY2hpbGRyZW4iLCJjaGlsZHJlbiIsInByb3BjaGlsZCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsImkiLCJkaXZzdHlsZSIsInB1c2giLCJvbGRJdGVtIiwibmV3SXRlbSIsInBsYWNlaG9sZGVyIiwiZSIsImVsZW1lbnQiLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidHJhbnNsYXRlWE1heFZhbHVlIiwib2Zmc2V0V2lkdGgiLCJ0cmFuc2xhdGVZTWF4VmFsdWUiLCJvZmZzZXRIZWlnaHQiLCJ0cmFuc2xhdGVWYWx1ZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNmb3JtIiwic3BsaXQiLCJ0cmFuc2xhdGVYIiwicGFyc2VJbnQiLCJ0cmFuc2xhdGVZIiwic2xpY2UiLCJzdHlsZSIsImNvbXBhY3R0eXBlIiwicm93aGVpZ2h0Iiwid2lkdGgiLCJudW1jb2x1bW5zIiwibWF4cm93cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIngiLCJ5IiwidyIsImgiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBT3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOLEVBRGUsQ0FFZjs7QUFDQSxVQUFL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O0FBeUNqQjs7O0FBR0FoQixZQUFVLEVBQUVVLGlEQUFTLENBQUNNLE1BNUNMOztBQThDakI7OztBQUdBZixTQUFPLEVBQUVTLGlEQUFTLENBQUNNLE1BakRGOztBQWtEakI7Ozs7QUFJQUMsVUFBUSxFQUFFUCxpREFBUyxDQUFDUTtBQXRESCxDQUFyQixDIiwiZmlsZSI6ImFhMmRkMWEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbkxDID0gdGhpcy5vbkxDLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkQgPSB0aGlzLm9uRC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX2NoaWxkcmVuID0gdGhpcy5jcmVhdGVfY2hpbGRyZW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX2NoaWxkcmVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wY2hpbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAocHJvcGNoaWxkLmNvbnN0cnVjdG9yICE9IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wY2hpbGQgPSBbcHJvcGNoaWxkXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBwcm9wY2hpbGQubGVuZ3RoOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSA8ZGl2IGtleT17dGhpcy5wcm9wcy5sYXlvdXRbaW5jXS5pfSBzdHlsZT17dGhpcy5wcm9wcy5kaXZzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BjaGlsZFtpbmNdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25MQyhsYykge1xyXG4gICAgLy8gICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xyXG4gICAgLy8gICAgICAgICBsYXlvdXQ6IGxjXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICBvbkQobGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSwgZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWFjdC1ncmlkLWxheW91dCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVhNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0V2lkdGggLSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVlNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0SGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnRyYW5zZm9ybS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAyXSk7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVkgPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnNsaWNlKDAsIC0xKSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlWE1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVYTWF4VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVYIDwgMCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVZTWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZVlNYXhWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQnXHJcbiAgICAgICAgICAgIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XHJcbiAgICAgICAgICAgIGNvbXBhY3RUeXBlPXt0aGlzLnByb3BzLmNvbXBhY3R0eXBlfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMucHJvcHMucm93aGVpZ2h0fVxyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgY29scz17dGhpcy5wcm9wcy5udW1jb2x1bW5zfVxyXG4gICAgICAgICAgICBtYXhSb3dzPXt0aGlzLnByb3BzLm1heHJvd3N9XHJcbiAgICAgICAgICAgIC8vIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9XHJcbiAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkR9PlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVfY2hpbGRyZW4oKX1cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkRyYWdHcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBbJyAnXSxcclxuICAgIGRpdnN0eWxlOiB7fSxcclxuICAgIGxheW91dDogW3tpOiAnZGVmYXVsdCcsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDF9XSxcclxuICAgIGNvbXBhY3R0eXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICByb3doZWlnaHQ6IDMwLFxyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBudW1jb2x1bW5zOiA2LFxyXG4gICAgbWF4cm93czogMVxyXG59O1xyXG5cclxuRHJhZ0dyaWQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2hpbGRyZW4gaW4gZWFjaCBwYXJ0IG9mIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0eWxlIG9mIHRoZSBEaXYgdGhhdCBjb250YWlucyB0aGUgY2hpbGRyZW5cclxuICAgICAqL1xyXG4gICAgZGl2c3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF5b3V0IG9mIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBhY3QgdHlwZVxyXG4gICAgICovXHJcbiAgICBjb21wYWN0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBoZWlnaHQgb2Ygb25lIHJvdyBpbiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICByb3doZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdG90YWwgd2lkdGggb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcclxuICAgICAqL1xyXG4gICAgbnVtY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgaW4gZ3JpZFxyXG4gICAgICovXHJcbiAgICBtYXhyb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==