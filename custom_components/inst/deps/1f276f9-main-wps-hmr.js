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
/* harmony import */ var _react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var _react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var _react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);
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

    _this.onLC.bind(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(DragGrid, [{
    key: "onLC",
    value: function onLC(lc) {
      console.log(lc);
      this.props.setProps({
        id: 'test1'
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const layout = [
      //     {i: 'a', x: 0, y: 0, w: 1, h: 1, static: true},
      //     {i: 'b', x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4},
      //     {i: 'c', x: 4, y: 0, w: 1, h: 1}
      // ];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: this.props.layout,
        cols: 12,
        rowHeight: 30,
        width: 1200,
        compactType: "horizontal",
        maxRows: 1,
        onLayoutChange: this.onLC
      }, this.props.children);
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
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwibGMiLCJjb25zb2xlIiwibG9nIiwic2V0UHJvcHMiLCJpZCIsImxheW91dCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRUEsVUFBS0MsSUFBTCxDQUFVQyxJQUFWOztBQUhlO0FBS2xCOzs7O3lCQUNJQyxFLEVBQUk7QUFDTEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEVBQVo7QUFDQSxXQUFLSCxLQUFMLENBQVdNLFFBQVgsQ0FBb0I7QUFDaEJDLFVBQUUsRUFBRTtBQURZLE9BQXBCO0FBR0g7Ozs2QkFFUTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFDQSwyREFBQyx3REFBRDtBQUNJLGlCQUFTLEVBQUMsUUFEZDtBQUVJLGNBQU0sRUFBRSxLQUFLUCxLQUFMLENBQVdRLE1BRnZCO0FBR0ksWUFBSSxFQUFFLEVBSFY7QUFJSSxpQkFBUyxFQUFFLEVBSmY7QUFLSSxhQUFLLEVBQUUsSUFMWDtBQU1JLG1CQUFXLEVBQUMsWUFOaEI7QUFPSSxlQUFPLEVBQUUsQ0FQYjtBQVFJLHNCQUFjLEVBQUUsS0FBS1A7QUFSekIsU0FTUyxLQUFLRCxLQUFMLENBQVdTLFFBVHBCLENBREE7QUFhSDs7OztFQWpDaUNDLCtDLEdBb0N0QztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBWCxRQUFRLENBQUNZLFlBQVQsR0FBd0IsRUFBeEI7QUFFQVosUUFBUSxDQUFDYSxTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUwsSUFBRSxFQUFFTSxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBUCxVQUFRLEVBQUVJLGlEQUFTLENBQUNJLEtBZEg7O0FBZ0JqQjs7O0FBR0FULFFBQU0sRUFBRUssaURBQVMsQ0FBQ0ksS0FuQkQ7O0FBcUJqQjs7OztBQUlBWCxVQUFRLEVBQUVPLGlEQUFTLENBQUNLO0FBekJILENBQXJCLEMiLCJmaWxlIjoiMWYyNzZmOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkxDLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgb25MQyhsYykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxjKTtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgaWQ6ICd0ZXN0MSdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zdCBsYXlvdXQgPSBbXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYScsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDEsIHN0YXRpYzogdHJ1ZX0sXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYicsIHg6IDEsIHk6IDAsIHc6IDMsIGg6IDEsIG1pblc6IDIsIG1heFc6IDR9LFxyXG4gICAgICAgIC8vICAgICB7aTogJ2MnLCB4OiA0LCB5OiAwLCB3OiAxLCBoOiAxfVxyXG4gICAgICAgIC8vIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZExheW91dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2xheW91dCdcclxuICAgICAgICAgICAgbGF5b3V0PXt0aGlzLnByb3BzLmxheW91dH1cclxuICAgICAgICAgICAgY29scz17MTJ9XHJcbiAgICAgICAgICAgIHJvd0hlaWdodD17MzB9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxMjAwfVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT0naG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgbWF4Um93cz17MX1cclxuICAgICAgICAgICAgb25MYXlvdXRDaGFuZ2U9e3RoaXMub25MQ30+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIHNldFByb3BzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbi8vICAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZW5kIHRoZSBuZXcgdmFsdWUgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNldFByb3BzIGlzIGEgcHJvcCB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYnkgZGFzaCdzIGZyb250LWVuZCAoXCJkYXNoLXJlbmRlcmVyXCIpLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbiBhIERhc2ggYXBwLCB0aGlzIHdpbGwgdXBkYXRlIHRoZSBjb21wb25lbnQnc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwcm9wcyBhbmQgc2VuZCB0aGUgZGF0YSBiYWNrIHRvIHRoZSBQeXRob24gRGFzaFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhcHAgc2VydmVyIGlmIGEgY2FsbGJhY2sgdXNlcyB0aGUgbW9kaWZpZWQgcHJvcCBhc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbnB1dCBvciBTdGF0ZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gc2V0UHJvcHMoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==