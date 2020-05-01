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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/react-grid-layout/css/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/react-resizable/css/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
        key: "a",
        style: {
          borderStyle: 'solid'
        }
      }, "a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "b",
        style: {
          borderStyle: 'solid'
        }
      }, "b"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "c",
        style: {
          borderStyle: 'solid'
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImkiLCJ4IiwieSIsInciLCJoIiwibWluVyIsIm1heFciLCJib3JkZXJTdHlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7NkJBQ1E7QUFDTCxVQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUFDQyxTQUFDLEVBQUUsR0FBSjtBQUFTQyxTQUFDLEVBQUUsQ0FBWjtBQUFlQyxTQUFDLEVBQUUsQ0FBbEI7QUFBcUJDLFNBQUMsRUFBRSxDQUF4QjtBQUEyQkMsU0FBQyxFQUFFLENBQTlCO0FBQWlDLGtCQUFRO0FBQXpDLE9BRFcsRUFFWDtBQUFDSixTQUFDLEVBQUUsR0FBSjtBQUFTQyxTQUFDLEVBQUUsQ0FBWjtBQUFlQyxTQUFDLEVBQUUsQ0FBbEI7QUFBcUJDLFNBQUMsRUFBRSxDQUF4QjtBQUEyQkMsU0FBQyxFQUFFLENBQTlCO0FBQWlDQyxZQUFJLEVBQUUsQ0FBdkM7QUFBMENDLFlBQUksRUFBRTtBQUFoRCxPQUZXLEVBR1g7QUFBQ04sU0FBQyxFQUFFLEdBQUo7QUFBU0MsU0FBQyxFQUFFLENBQVo7QUFBZUMsU0FBQyxFQUFFLENBQWxCO0FBQXFCQyxTQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLFNBQUMsRUFBRTtBQUE5QixPQUhXLENBQWY7QUFLQSwwQkFDSSwyREFBQyx3REFBRDtBQUFZLGlCQUFTLEVBQUMsUUFBdEI7QUFBK0IsY0FBTSxFQUFFTCxNQUF2QztBQUErQyxZQUFJLEVBQUUsRUFBckQ7QUFBeUQsaUJBQVMsRUFBRSxFQUFwRTtBQUF3RSxhQUFLLEVBQUU7QUFBL0Usc0JBQ0k7QUFBSyxXQUFHLEVBQUMsR0FBVDtBQUFhLGFBQUssRUFBRTtBQUFDUSxxQkFBVyxFQUFFO0FBQWQ7QUFBcEIsYUFESixlQUVJO0FBQUssV0FBRyxFQUFDLEdBQVQ7QUFBYSxhQUFLLEVBQUU7QUFBQ0EscUJBQVcsRUFBRTtBQUFkO0FBQXBCLGFBRkosZUFHSTtBQUFLLFdBQUcsRUFBQyxHQUFUO0FBQWEsYUFBSyxFQUFFO0FBQUNBLHFCQUFXLEVBQUU7QUFBZDtBQUFwQixhQUhKLENBREo7QUFPSDs7OztFQWpCaUNDLCtDLEdBb0J0QztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBWCxRQUFRLENBQUNZLFlBQVQsR0FBd0IsRUFBeEI7QUFFQVosUUFBUSxDQUFDYSxTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBQyxPQUFLLEVBQUVKLGlEQUFTLENBQUNDLE1BZEE7O0FBZ0JqQjs7OztBQUlBSSxVQUFRLEVBQUVMLGlEQUFTLENBQUNNO0FBcEJILENBQXJCLEMiLCJmaWxlIjoiNDhmNzM1NC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IFtcclxuICAgICAgICAgICAge2k6ICdhJywgeDogMCwgeTogMCwgdzogMSwgaDogMiwgc3RhdGljOiB0cnVlfSxcclxuICAgICAgICAgICAge2k6ICdiJywgeDogMSwgeTogMCwgdzogMywgaDogMiwgbWluVzogMiwgbWF4VzogNH0sXHJcbiAgICAgICAgICAgIHtpOiAnYycsIHg6IDQsIHk6IDAsIHc6IDEsIGg6IDJ9XHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzc05hbWU9J2xheW91dCcgbGF5b3V0PXtsYXlvdXR9IGNvbHM9ezEyfSByb3dIZWlnaHQ9ezMwfSB3aWR0aD17MTIwMH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT0nYScgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PmE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdiJyBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+YjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2MnIHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5jPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgRXhhbXBsZUNvbXBvbmVudDoge2xhYmVsfSZuYnNwO1xyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogU2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXRQcm9wcyBpcyBhIHByb3AgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGJ5IGRhc2gncyBmcm9udC1lbmQgKFwiZGFzaC1yZW5kZXJlclwiKS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW4gYSBEYXNoIGFwcCwgdGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29tcG9uZW50J3NcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogcHJvcHMgYW5kIHNlbmQgdGhlIGRhdGEgYmFjayB0byB0aGUgUHl0aG9uIERhc2hcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYXBwIHNlcnZlciBpZiBhIGNhbGxiYWNrIHVzZXMgdGhlIG1vZGlmaWVkIHByb3AgYXNcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW5wdXQgb3IgU3RhdGUuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9