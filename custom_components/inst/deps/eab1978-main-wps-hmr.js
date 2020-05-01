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
        rowHeight: 30,
        width: 1200,
        compactType: "horizontal",
        maxRows: 1,
        onLayoutChange: this.onLC,
        onDrag: this.onD
      }, this.create_children());
    }
  }]);

  return DragGrid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default class DragGrid extends Component {
//     render() {
//         const {id, label, setProps, value} = this.props;
//         return (
//             <div id={id}>
//                 ExampleComponent: {label}&nbsp;
//                 <input
//                     value={value}
//                     onChange={
//                         /*
//                          * Send the new value to the parent component.
//                          * setProps is a prop that is automatically supplied
//                          * by dash's front-end ("dash-renderer").
//                          * In a Dash app, this will update the component's
//                          * props and send the data back to the Python Dash
//                          * app server if a callback uses the modified prop as
//                          * Input or State.
//                          */
//                         e => setProps({ value: e.target.value })
//                     }
//                 />
//             </div>
//         );
//     }
// }



DragGrid.defaultProps = {};
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
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwib25EIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsImkiLCJwdXNoIiwibGMiLCJzZXRQcm9wcyIsIm9sZEl0ZW0iLCJuZXdJdGVtIiwicGxhY2Vob2xkZXIiLCJlIiwiZWxlbWVudCIsImdyaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmFuc2xhdGVYTWF4VmFsdWUiLCJvZmZzZXRXaWR0aCIsInRyYW5zbGF0ZVlNYXhWYWx1ZSIsIm9mZnNldEhlaWdodCIsInRyYW5zbGF0ZVZhbHVlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcGxpdCIsInRyYW5zbGF0ZVgiLCJwYXJzZUludCIsInRyYW5zbGF0ZVkiLCJzbGljZSIsInN0eWxlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLCtCQUFaO0FBQ0EsVUFBS0MsR0FBTCxHQUFXLE1BQUtBLEdBQUwsQ0FBU0QsSUFBVCwrQkFBWDtBQUNBLFVBQUtFLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkYsSUFBckIs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Q0FBQ3VDLFNBQVQsR0FBcUI7QUFDakI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSkc7O0FBTWpCOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVRQOztBQVdqQjs7O0FBR0F0QyxVQUFRLEVBQUVtQyxpREFBUyxDQUFDSSxLQWRIOztBQWdCakI7OztBQUdBbkMsUUFBTSxFQUFFK0IsaURBQVMsQ0FBQ0ksS0FBVixDQUFnQkQsVUFuQlA7O0FBcUJqQjs7OztBQUlBOUIsVUFBUSxFQUFFMkIsaURBQVMsQ0FBQ0s7QUF6QkgsQ0FBckIsQyIsImZpbGUiOiJlYWIxOTc4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLm9uTEMgPSB0aGlzLm9uTEMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRCA9IHRoaXMub25ELmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVfY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZV9jaGlsZHJlbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluYyA9IDA7IGluYyA8IHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IDxkaXYga2V5PXt0aGlzLnByb3BzLmxheW91dFtpbmNdLml9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW5baW5jXX1cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlblxyXG4gICAgfVxyXG5cclxuICAgIG9uTEMobGMpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgbGF5b3V0OiBsY1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EKGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhY3QtZ3JpZC1sYXlvdXQnKVswXTtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVYTWF4VmFsdWUgPSBncmlkLm9mZnNldFdpZHRoIC0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVZTWF4VmFsdWUgPSBncmlkLm9mZnNldEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS50cmFuc2Zvcm0uc3BsaXQoJywnKTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMl0pO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVZID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAxXS5zbGljZSgwLCAtMSkpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZVhNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlWE1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRlWCA8IDApIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlWU1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVZTWF4VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVZIDwgMCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICB3aWR0aD17MTIwMH1cclxuICAgICAgICAgICAgY29tcGFjdFR5cGU9J2hvcml6b250YWwnXHJcbiAgICAgICAgICAgIG1heFJvd3M9ezF9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9XHJcbiAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkR9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgRXhhbXBsZUNvbXBvbmVudDoge2xhYmVsfSZuYnNwO1xyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogU2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXRQcm9wcyBpcyBhIHByb3AgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGJ5IGRhc2gncyBmcm9udC1lbmQgKFwiZGFzaC1yZW5kZXJlclwiKS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW4gYSBEYXNoIGFwcCwgdGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29tcG9uZW50J3NcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogcHJvcHMgYW5kIHNlbmQgdGhlIGRhdGEgYmFjayB0byB0aGUgUHl0aG9uIERhc2hcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYXBwIHNlcnZlciBpZiBhIGNhbGxiYWNrIHVzZXMgdGhlIG1vZGlmaWVkIHByb3AgYXNcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW5wdXQgb3IgU3RhdGUuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF5b3V0IG9mIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==