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
!(function webpackMissingModule() { var e = new Error("Cannot find module '\react-grid-layoutcssstyles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '\react-resizablecssstyles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    _classCallCheck(this, DragGrid);

    return _super.call(this, props);
  }

  _createClass(DragGrid, [{
    key: "render",
    value: function render() {
      var layout = [{
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        "static": true
      }, {
        i: 'b',
        x: 1,
        y: 0,
        w: 3,
        h: 2,
        minW: 2,
        maxW: 4
      }, {
        i: 'c',
        x: 4,
        y: 0,
        w: 1,
        h: 2
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: layout,
        cols: 12,
        rowHeight: 30,
        width: 1200
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "a"
      }, "a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "b"
      }, "b"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "c"
      }, "c"));
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
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImkiLCJ4IiwieSIsInciLCJoIiwibWluVyIsIm1heFciLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBT3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7OzZCQUNRO0FBQ0wsVUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFBQ0MsU0FBQyxFQUFFLEdBQUo7QUFBU0MsU0FBQyxFQUFFLENBQVo7QUFBZUMsU0FBQyxFQUFFLENBQWxCO0FBQXFCQyxTQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLFNBQUMsRUFBRSxDQUE5QjtBQUFpQyxrQkFBUTtBQUF6QyxPQURXLEVBRVg7QUFBQ0osU0FBQyxFQUFFLEdBQUo7QUFBU0MsU0FBQyxFQUFFLENBQVo7QUFBZUMsU0FBQyxFQUFFLENBQWxCO0FBQXFCQyxTQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLFNBQUMsRUFBRSxDQUE5QjtBQUFpQ0MsWUFBSSxFQUFFLENBQXZDO0FBQTBDQyxZQUFJLEVBQUU7QUFBaEQsT0FGVyxFQUdYO0FBQUNOLFNBQUMsRUFBRSxHQUFKO0FBQVNDLFNBQUMsRUFBRSxDQUFaO0FBQWVDLFNBQUMsRUFBRSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFFLENBQXhCO0FBQTJCQyxTQUFDLEVBQUU7QUFBOUIsT0FIVyxDQUFmO0FBS0EsMEJBQ0ksMkRBQUMsd0RBQUQ7QUFBWSxpQkFBUyxFQUFDLFFBQXRCO0FBQStCLGNBQU0sRUFBRUwsTUFBdkM7QUFBK0MsWUFBSSxFQUFFLEVBQXJEO0FBQXlELGlCQUFTLEVBQUUsRUFBcEU7QUFBd0UsYUFBSyxFQUFFO0FBQS9FLHNCQUNJO0FBQUssV0FBRyxFQUFDO0FBQVQsYUFESixlQUVJO0FBQUssV0FBRyxFQUFDO0FBQVQsYUFGSixlQUdJO0FBQUssV0FBRyxFQUFDO0FBQVQsYUFISixDQURKO0FBT0g7Ozs7RUFqQmlDUSwrQyxHQW9CdEM7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQVYsUUFBUSxDQUFDVyxZQUFULEdBQXdCLEVBQXhCO0FBRUFYLFFBQVEsQ0FBQ1ksU0FBVCxHQUFxQjtBQUNqQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKRzs7QUFNakI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVFA7O0FBV2pCOzs7QUFHQUMsT0FBSyxFQUFFSixpREFBUyxDQUFDQyxNQWRBOztBQWdCakI7Ozs7QUFJQUksVUFBUSxFQUFFTCxpREFBUyxDQUFDTTtBQXBCSCxDQUFyQixDIiwiZmlsZSI6IjhlMWY2MzktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuaW1wb3J0ICdcXHJlYWN0LWdyaWQtbGF5b3V0XFxjc3NcXHN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJ1xccmVhY3QtcmVzaXphYmxlXFxjc3NcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSBbXHJcbiAgICAgICAgICAgIHtpOiAnYScsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDIsIHN0YXRpYzogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtpOiAnYicsIHg6IDEsIHk6IDAsIHc6IDMsIGg6IDIsIG1pblc6IDIsIG1heFc6IDR9LFxyXG4gICAgICAgICAgICB7aTogJ2MnLCB4OiA0LCB5OiAwLCB3OiAxLCBoOiAyfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3NOYW1lPSdsYXlvdXQnIGxheW91dD17bGF5b3V0fSBjb2xzPXsxMn0gcm93SGVpZ2h0PXszMH0gd2lkdGg9ezEyMDB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2EnPmE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdiJz5iPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT0nYyc+YzwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgc2V0UHJvcHMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cclxuLy8gICAgICAgICAgICAgICAgIEV4YW1wbGVDb21wb25lbnQ6IHtsYWJlbH0mbmJzcDtcclxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlbmQgdGhlIG5ldyB2YWx1ZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudC5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogc2V0UHJvcHMgaXMgYSBwcm9wIHRoYXQgaXMgYXV0b21hdGljYWxseSBzdXBwbGllZFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBieSBkYXNoJ3MgZnJvbnQtZW5kIChcImRhc2gtcmVuZGVyZXJcIikuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIEluIGEgRGFzaCBhcHAsIHRoaXMgd2lsbCB1cGRhdGUgdGhlIGNvbXBvbmVudCdzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHByb3BzIGFuZCBzZW5kIHRoZSBkYXRhIGJhY2sgdG8gdGhlIFB5dGhvbiBEYXNoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFwcCBzZXJ2ZXIgaWYgYSBjYWxsYmFjayB1c2VzIHRoZSBtb2RpZmllZCBwcm9wIGFzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIElucHV0IG9yIFN0YXRlLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBzZXRQcm9wcyh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbkRyYWdHcmlkLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuRHJhZ0dyaWQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cclxuICAgICAqL1xyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==