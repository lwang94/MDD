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
    // layout, oldItem, newItem, placeholder, e,

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
        className: "layout" // layout={this.props.layout}
        ,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uRCIsImJpbmQiLCJjcmVhdGVfY2hpbGRyZW4iLCJjaGlsZHJlbiIsInByb3BjaGlsZCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsImkiLCJkaXZzdHlsZSIsInB1c2giLCJvbGRJdGVtIiwibmV3SXRlbSIsInBsYWNlaG9sZGVyIiwiZSIsImVsZW1lbnQiLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidHJhbnNsYXRlWE1heFZhbHVlIiwib2Zmc2V0V2lkdGgiLCJ0cmFuc2xhdGVZTWF4VmFsdWUiLCJvZmZzZXRIZWlnaHQiLCJ0cmFuc2xhdGVWYWx1ZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNmb3JtIiwic3BsaXQiLCJ0cmFuc2xhdGVYIiwicGFyc2VJbnQiLCJ0cmFuc2xhdGVZIiwic2xpY2UiLCJzdHlsZSIsImNvbXBhY3R0eXBlIiwicm93aGVpZ2h0Iiwid2lkdGgiLCJudW1jb2x1bW5zIiwibWF4cm93cyIsIm9uTEMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ4IiwieSIsInciLCJoIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm9iamVjdCIsIm51bWJlciIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTixFQURlLENBRWY7O0FB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QTs7QUF5Q2pCOzs7QUFHQWpCLFlBQVUsRUFBRVcsaURBQVMsQ0FBQ00sTUE1Q0w7O0FBOENqQjs7O0FBR0FoQixTQUFPLEVBQUVVLGlEQUFTLENBQUNNLE1BakRGOztBQWtEakI7Ozs7QUFJQUMsVUFBUSxFQUFFUCxpREFBUyxDQUFDUTtBQXRESCxDQUFyQixDIiwiZmlsZSI6ImUwMDdlZDMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbkxDID0gdGhpcy5vbkxDLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkQgPSB0aGlzLm9uRC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX2NoaWxkcmVuID0gdGhpcy5jcmVhdGVfY2hpbGRyZW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX2NoaWxkcmVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wY2hpbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAocHJvcGNoaWxkLmNvbnN0cnVjdG9yICE9IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wY2hpbGQgPSBbcHJvcGNoaWxkXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBwcm9wY2hpbGQubGVuZ3RoOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSA8ZGl2IGtleT17dGhpcy5wcm9wcy5sYXlvdXRbaW5jXS5pfSBzdHlsZT17dGhpcy5wcm9wcy5kaXZzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BjaGlsZFtpbmNdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25MQyhsYykge1xyXG4gICAgLy8gICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xyXG4gICAgLy8gICAgICAgICBsYXlvdXQ6IGxjXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuICAgIC8vIGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsXHJcbiAgICBvbkQobGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSwgZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWFjdC1ncmlkLWxheW91dCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVhNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0V2lkdGggLSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVlNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0SGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnRyYW5zZm9ybS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAyXSk7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVkgPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnNsaWNlKDAsIC0xKSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlWE1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVYTWF4VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVYIDwgMCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVZTWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZVlNYXhWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZVkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQnXHJcbiAgICAgICAgICAgIC8vIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XHJcbiAgICAgICAgICAgIGNvbXBhY3RUeXBlPXt0aGlzLnByb3BzLmNvbXBhY3R0eXBlfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMucHJvcHMucm93aGVpZ2h0fVxyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgY29scz17dGhpcy5wcm9wcy5udW1jb2x1bW5zfVxyXG4gICAgICAgICAgICBtYXhSb3dzPXt0aGlzLnByb3BzLm1heHJvd3N9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9XHJcbiAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkR9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogWycgJ10sXHJcbiAgICBkaXZzdHlsZToge30sXHJcbiAgICBsYXlvdXQ6IFt7aTogJ2RlZmF1bHQnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxfV0sXHJcbiAgICBjb21wYWN0dHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgcm93aGVpZ2h0OiAzMCxcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgbnVtY29sdW1uczogNixcclxuICAgIG1heHJvd3M6IDFcclxufTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdHlsZSBvZiB0aGUgRGl2IHRoYXQgY29udGFpbnMgdGhlIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGRpdnN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxheW91dCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wYWN0IHR5cGVcclxuICAgICAqL1xyXG4gICAgY29tcGFjdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIG9uZSByb3cgaW4gdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgcm93aGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zXHJcbiAgICAgKi9cclxuICAgIG51bWNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIGluIGdyaWRcclxuICAgICAqL1xyXG4gICAgbWF4cm93czogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=