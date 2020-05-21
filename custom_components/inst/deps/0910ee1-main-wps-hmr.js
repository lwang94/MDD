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
    // this.onD = this.onD.bind(this);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: this.props.layout,
        compactType: this.props.compacttype,
        rowHeight: this.props.rowheight,
        width: this.props.width,
        cols: this.props.numcolumns,
        maxRows: this.props.maxrows // onLayoutChange={this.onLC}>
        // onDrag={this.onD}>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImNyZWF0ZV9jaGlsZHJlbiIsImJpbmQiLCJjaGlsZHJlbiIsInByb3BjaGlsZCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsImkiLCJkaXZzdHlsZSIsInB1c2giLCJjb21wYWN0dHlwZSIsInJvd2hlaWdodCIsIndpZHRoIiwibnVtY29sdW1ucyIsIm1heHJvd3MiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ4IiwieSIsInciLCJoIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm9iamVjdCIsIm51bWJlciIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTixFQURlLENBRWY7QUFDQTs7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLCtCQUF2QjtBQUplO0FBTWxCOzs7O3NDQUVpQjtBQUNkLFVBQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxVQUFJLEtBQUtILEtBQUwsQ0FBV0csUUFBWCxJQUF1QixJQUEzQixFQUFpQztBQUM3QixZQUFJQyxTQUFTLEdBQUcsS0FBS0osS0FBTCxDQUFXRyxRQUEzQjs7QUFDQSxZQUFJQyxTQUFTLENBQUNDLFdBQVYsSUFBeUJDLEtBQTdCLEVBQW9DO0FBQ2hDRixtQkFBUyxHQUFHLENBQUNBLFNBQUQsQ0FBWjtBQUNIOztBQUFBOztBQUNELGFBQUssSUFBSUcsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0gsU0FBUyxDQUFDSSxNQUFsQyxFQUEwQ0QsR0FBRyxJQUFJLENBQWpELEVBQW9EO0FBQ2hELGNBQU1FLEtBQUssZ0JBQUc7QUFBSyxlQUFHLEVBQUUsS0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCSCxHQUFsQixFQUF1QkksQ0FBakM7QUFBb0MsaUJBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdZO0FBQXRELGFBQ1RSLFNBQVMsQ0FBQ0csR0FBRCxDQURBLENBQWQ7QUFHQUosa0JBQVEsQ0FBQ1UsSUFBVCxDQUFjSixLQUFkO0FBQ0g7QUFDSjs7QUFDRCxhQUFPTixRQUFQO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7NkJBRVM7QUFDTCwwQkFDQSwyREFBQyx3REFBRDtBQUNJLGlCQUFTLEVBQUMsUUFEZDtBQUVJLGNBQU0sRUFBRSxLQUFLSCxLQUFMLENBQVdVLE1BRnZCO0FBR0ksbUJBQVcsRUFBRSxLQUFLVixLQUFMLENBQVdjLFdBSDVCO0FBSUksaUJBQVMsRUFBRSxLQUFLZCxLQUFMLENBQVdlLFNBSjFCO0FBS0ksYUFBSyxFQUFFLEtBQUtmLEtBQUwsQ0FBV2dCLEtBTHRCO0FBTUksWUFBSSxFQUFFLEtBQUtoQixLQUFMLENBQVdpQixVQU5yQjtBQU9JLGVBQU8sRUFBRSxLQUFLakIsS0FBTCxDQUFXa0IsT0FQeEIsQ0FRSTtBQUNBOztBQVRKLFNBV1MsS0FBS2pCLGVBQUwsRUFYVCxDQURBO0FBZUg7Ozs7RUF6RWlDa0IsK0M7OztBQTZFdENwQixRQUFRLENBQUNxQixZQUFULEdBQXdCO0FBQ3BCakIsVUFBUSxFQUFFLENBQUMsR0FBRCxDQURVO0FBRXBCUyxVQUFRLEVBQUUsRUFGVTtBQUdwQkYsUUFBTSxFQUFFLENBQUM7QUFBQ0MsS0FBQyxFQUFFLFNBQUo7QUFBZVUsS0FBQyxFQUFFLENBQWxCO0FBQXFCQyxLQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLEtBQUMsRUFBRSxDQUE5QjtBQUFpQ0MsS0FBQyxFQUFFO0FBQXBDLEdBQUQsQ0FIWTtBQUlwQlYsYUFBVyxFQUFFLFlBSk87QUFLcEJDLFdBQVMsRUFBRSxFQUxTO0FBTXBCQyxPQUFLLEVBQUUsSUFOYTtBQU9wQkMsWUFBVSxFQUFFLENBUFE7QUFRcEJDLFNBQU8sRUFBRTtBQVJXLENBQXhCO0FBV0FuQixRQUFRLENBQUMwQixTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBM0IsVUFBUSxFQUFFd0IsaURBQVMsQ0FBQ0ksS0FkSDs7QUFnQmpCOzs7QUFHQW5CLFVBQVEsRUFBRWUsaURBQVMsQ0FBQ0ssTUFuQkg7O0FBcUJqQjs7O0FBR0F0QixRQUFNLEVBQUVpQixpREFBUyxDQUFDSSxLQXhCRDs7QUEwQmpCOzs7QUFHQWpCLGFBQVcsRUFBRWEsaURBQVMsQ0FBQ0MsTUE3Qk47O0FBK0JqQjs7O0FBR0FiLFdBQVMsRUFBRVksaURBQVMsQ0FBQ00sTUFsQ0o7O0FBb0NqQjs7O0FBR0FqQixPQUFLLEVBQUVXLGlEQUFTLENBQUNNLE1BdkNBOztBQXlDakI7OztBQUdBaEIsWUFBVSxFQUFFVSxpREFBUyxDQUFDTSxNQTVDTDs7QUE4Q2pCOzs7QUFHQWYsU0FBTyxFQUFFUyxpREFBUyxDQUFDTSxNQWpERjs7QUFrRGpCOzs7O0FBSUFDLFVBQVEsRUFBRVAsaURBQVMsQ0FBQ1E7QUF0REgsQ0FBckIsQyIsImZpbGUiOiIwOTEwZWUxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vIHRoaXMub25MQyA9IHRoaXMub25MQy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMub25EID0gdGhpcy5vbkQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9jaGlsZHJlbiA9IHRoaXMuY3JlYXRlX2NoaWxkcmVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9jaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKHByb3BjaGlsZC5jb25zdHJ1Y3RvciAhPSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGNoaWxkID0gW3Byb3BjaGlsZF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgcHJvcGNoaWxkLmxlbmd0aDsgaW5jICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gPGRpdiBrZXk9e3RoaXMucHJvcHMubGF5b3V0W2luY10uaX0gc3R5bGU9e3RoaXMucHJvcHMuZGl2c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wY2hpbGRbaW5jXX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGlsZHJlblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTEMobGMpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgIC8vICAgICAgICAgbGF5b3V0OiBsY1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gb25EKGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsIGVsZW1lbnQpIHtcclxuICAgIC8vICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhY3QtZ3JpZC1sYXlvdXQnKVswXTtcclxuICAgIC8vICAgICBjb25zdCB0cmFuc2xhdGVYTWF4VmFsdWUgPSBncmlkLm9mZnNldFdpZHRoIC0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIC8vICAgICBjb25zdCB0cmFuc2xhdGVZTWF4VmFsdWUgPSBncmlkLm9mZnNldEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIC8vICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS50cmFuc2Zvcm0uc3BsaXQoJywnKTtcclxuICAgIC8vICAgICBsZXQgdHJhbnNsYXRlWCA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMl0pO1xyXG4gICAgLy8gICAgIGxldCB0cmFuc2xhdGVZID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAxXS5zbGljZSgwLCAtMSkpO1xyXG5cclxuICAgIC8vICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZVhNYXhWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlWE1heFZhbHVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodHJhbnNsYXRlWCA8IDApIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlWU1heFZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVZTWF4VmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVZIDwgMCkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVZID0gMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT17dGhpcy5wcm9wcy5jb21wYWN0dHlwZX1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd2hlaWdodH1cclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGNvbHM9e3RoaXMucHJvcHMubnVtY29sdW1uc31cclxuICAgICAgICAgICAgbWF4Um93cz17dGhpcy5wcm9wcy5tYXhyb3dzfVxyXG4gICAgICAgICAgICAvLyBvbkxheW91dENoYW5nZT17dGhpcy5vbkxDfT5cclxuICAgICAgICAgICAgLy8gb25EcmFnPXt0aGlzLm9uRH0+XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZV9jaGlsZHJlbigpfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFsnICddLFxyXG4gICAgZGl2c3R5bGU6IHt9LFxyXG4gICAgbGF5b3V0OiBbe2k6ICdkZWZhdWx0JywgeDogMCwgeTogMCwgdzogMSwgaDogMX1dLFxyXG4gICAgY29tcGFjdHR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHJvd2hlaWdodDogMzAsXHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIG51bWNvbHVtbnM6IDYsXHJcbiAgICBtYXhyb3dzOiAxXHJcbn07XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3R5bGUgb2YgdGhlIERpdiB0aGF0IGNvbnRhaW5zIHRoZSBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBkaXZzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9