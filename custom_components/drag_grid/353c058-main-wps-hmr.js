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
        if (this.props.children.constructor != array) {
          this.props.children = [this.props.children];
        }

        ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsImFycmF5IiwiaW5jIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImxheW91dCIsImNoaWxkIiwicHVzaCIsImxjIiwic2V0UHJvcHMiLCJjb21wYWN0dHlwZSIsInJvd2hlaWdodCIsIndpZHRoIiwibnVtY29sdW1ucyIsIm1heHJvd3MiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpIiwieCIsInkiLCJ3IiwiaCIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JBQVosQ0FGZSxDQUdmOztBQUNBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkQsSUFBckIsK0JBQXZCO0FBSmU7QUFNbEI7Ozs7c0NBRWlCO0FBQ2QsVUFBTUUsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFVBQUksS0FBS0osS0FBTCxDQUFXSSxRQUFYLElBQXVCLElBQTNCLEVBQWlDO0FBQzdCLFlBQUksS0FBS0osS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxXQUFwQixJQUFtQ0MsS0FBdkMsRUFBOEM7QUFDMUMsZUFBS04sS0FBTCxDQUFXSSxRQUFYLEdBQXNCLENBQUMsS0FB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O0FBR0FmLFlBQVUsRUFBRVcsaURBQVMsQ0FBQ0ksTUF2Q0w7O0FBeUNqQjs7O0FBR0FkLFNBQU8sRUFBRVUsaURBQVMsQ0FBQ0ksTUE1Q0Y7O0FBNkNqQjs7OztBQUlBbkIsVUFBUSxFQUFFZSxpREFBUyxDQUFDSztBQWpESCxDQUFyQixDIiwiZmlsZSI6IjM1M2MwNTgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vbkxDID0gdGhpcy5vbkxDLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbkQgPSB0aGlzLm9uRC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX2NoaWxkcmVuID0gdGhpcy5jcmVhdGVfY2hpbGRyZW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX2NoaWxkcmVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuLmNvbnN0cnVjdG9yICE9IGFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuID0gW3RoaXMucHJvcHMuY2hpbGRyZW5dXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluYyA9IDA7IGluYyA8IHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5sYXlvdXRbaW5jXVsnaSddKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSA8ZGl2IGtleT17dGhpcy5wcm9wcy5sYXlvdXRbaW5jXVsnaSddfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbltpbmNdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgb25MQyhsYykge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xyXG4gICAgICAgICAgICBsYXlvdXQ6IGxjXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsXHJcbiAgICAvLyBvbkQobGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSwgZWxlbWVudCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWFjdC1ncmlkLWxheW91dCcpWzBdO1xyXG4gICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVhNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0V2lkdGggLSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVlNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0SGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnRyYW5zZm9ybS5zcGxpdCgnLCcpO1xyXG4gICAgLy8gICAgIGxldCB0cmFuc2xhdGVYID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAyXSk7XHJcbiAgICAvLyAgICAgbGV0IHRyYW5zbGF0ZVkgPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnNsaWNlKDAsIC0xKSk7XHJcblxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlWE1heFZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVYTWF4VmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVYIDwgMCkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVYID0gMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVZTWF4VmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZVlNYXhWYWx1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRyYW5zbGF0ZVkgPCAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubGF5b3V0KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT17dGhpcy5wcm9wcy5jb21wYWN0dHlwZX1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd2hlaWdodH1cclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGNvbHM9e3RoaXMucHJvcHMubnVtY29sdW1uc31cclxuICAgICAgICAgICAgbWF4Um93cz17dGhpcy5wcm9wcy5tYXhyb3dzfVxyXG4gICAgICAgICAgICBvbkxheW91dENoYW5nZT17dGhpcy5vbkxDfVxyXG4gICAgICAgICAgICAvLyBvbkRyYWc9e3RoaXMub25EfT5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogWycgJ10sXHJcbiAgICBsYXlvdXQ6IFt7aTogJ2RlZmF1bHQnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxfV0sXHJcbiAgICBjb21wYWN0dHlwZTogJ2hvcml6b250YWwnLFxyXG4gICAgcm93aGVpZ2h0OiAzMCxcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgbnVtY29sdW1uczogNixcclxuICAgIG1heHJvd3M6IDFcclxufTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9