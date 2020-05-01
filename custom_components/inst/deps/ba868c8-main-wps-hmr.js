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
        h: 1,
        "static": true
      }, {
        i: 'b',
        x: 1,
        y: 0,
        w: 3,
        h: 1,
        minW: 2,
        maxW: 4
      }, {
        i: 'c',
        x: 4,
        y: 0,
        w: 1,
        h: 1
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: layout,
        cols: 12,
        rowHeight: 30,
        width: 1200,
        compactType: "horizontal",
        maxRows: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "a",
        style: {
          borderStyle: 'solid'
        }
      }, "Temp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "b",
        style: {
          borderStyle: 'solid'
        }
      }, "Voltage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "c",
        style: {
          borderStyle: 'solid'
        }
      }, "Pressure"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImkiLCJ4IiwieSIsInciLCJoIiwibWluVyIsIm1heFciLCJib3JkZXJTdHlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7Ozs2QkFDUTtBQUNMLFVBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQUNDLFNBQUMsRUFBRSxHQUFKO0FBQVNDLFNBQUMsRUFBRSxDQUFaO0FBQWVDLFNBQUMsRUFBRSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFFLENBQXhCO0FBQTJCQyxTQUFDLEVBQUUsQ0FBOUI7QUFBaUMsa0JBQVE7QUFBekMsT0FEVyxFQUVYO0FBQUNKLFNBQUMsRUFBRSxHQUFKO0FBQVNDLFNBQUMsRUFBRSxDQUFaO0FBQWVDLFNBQUMsRUFBRSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFFLENBQXhCO0FBQTJCQyxTQUFDLEVBQUUsQ0FBOUI7QUFBaUNDLFlBQUksRUFBRSxDQUF2QztBQUEwQ0MsWUFBSSxFQUFFO0FBQWhELE9BRlcsRUFHWDtBQUFDTixTQUFDLEVBQUUsR0FBSjtBQUFTQyxTQUFDLEVBQUUsQ0FBWjtBQUFlQyxTQUFDLEVBQUUsQ0FBbEI7QUFBcUJDLFNBQUMsRUFBRSxDQUF4QjtBQUEyQkMsU0FBQyxFQUFFO0FBQTlCLE9BSFcsQ0FBZjtBQUtBLDBCQUNBLDJEQUFDLHdEQUFEO0FBQVksaUJBQVMsRUFBQyxRQUF0QjtBQUErQixjQUFNLEVBQUVMLE1BQXZDO0FBQStDLFlBQUksRUFBRSxFQUFyRDtBQUF5RCxpQkFBUyxFQUFFLEVBQXBFO0FBQXdFLGFBQUssRUFBRSxJQUEvRTtBQUFxRixtQkFBVyxFQUFDLFlBQWpHO0FBQThHLGVBQU8sRUFBRTtBQUF2SCxzQkFDUTtBQUFLLFdBQUcsRUFBQyxHQUFUO0FBQWEsYUFBSyxFQUFFO0FBQUNRLHFCQUFXLEVBQUU7QUFBZDtBQUFwQixnQkFEUixlQUVRO0FBQUssV0FBRyxFQUFDLEdBQVQ7QUFBYSxhQUFLLEVBQUU7QUFBQ0EscUJBQVcsRUFBRTtBQUFkO0FBQXBCLG1CQUZSLGVBR1E7QUFBSyxXQUFHLEVBQUMsR0FBVDtBQUFhLGFBQUssRUFBRTtBQUFDQSxxQkFBVyxFQUFFO0FBQWQ7QUFBcEIsb0JBSFIsQ0FEQTtBQU9IOzs7O0VBakJpQ0MsK0MsR0FvQnRDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUFYLFFBQVEsQ0FBQ1ksWUFBVCxHQUF3QixFQUF4QjtBQUVBWixRQUFRLENBQUNhLFNBQVQsR0FBcUI7QUFDakI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSkc7O0FBTWpCOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVRQOztBQVdqQjs7O0FBR0FDLE9BQUssRUFBRUosaURBQVMsQ0FBQ0MsTUFkQTs7QUFnQmpCOzs7O0FBSUFJLFVBQVEsRUFBRUwsaURBQVMsQ0FBQ007QUFwQkgsQ0FBckIsQyIsImZpbGUiOiJiYTg2OGM4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbmltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW1xyXG4gICAgICAgICAgICB7aTogJ2EnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxLCBzdGF0aWM6IHRydWV9LFxyXG4gICAgICAgICAgICB7aTogJ2InLCB4OiAxLCB5OiAwLCB3OiAzLCBoOiAxLCBtaW5XOiAyLCBtYXhXOiA0fSxcclxuICAgICAgICAgICAge2k6ICdjJywgeDogNCwgeTogMCwgdzogMSwgaDogMX1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3NOYW1lPSdsYXlvdXQnIGxheW91dD17bGF5b3V0fSBjb2xzPXsxMn0gcm93SGVpZ2h0PXszMH0gd2lkdGg9ezEyMDB9IGNvbXBhY3RUeXBlPSdob3Jpem9udGFsJyBtYXhSb3dzPXsxfT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdhJyBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+VGVtcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2InIHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5Wb2x0YWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT0nYycgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlByZXNzdXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgRXhhbXBsZUNvbXBvbmVudDoge2xhYmVsfSZuYnNwO1xyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogU2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXRQcm9wcyBpcyBhIHByb3AgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGJ5IGRhc2gncyBmcm9udC1lbmQgKFwiZGFzaC1yZW5kZXJlclwiKS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW4gYSBEYXNoIGFwcCwgdGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29tcG9uZW50J3NcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogcHJvcHMgYW5kIHNlbmQgdGhlIGRhdGEgYmFjayB0byB0aGUgUHl0aG9uIERhc2hcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYXBwIHNlcnZlciBpZiBhIGNhbGxiYWNrIHVzZXMgdGhlIG1vZGlmaWVkIHByb3AgYXNcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW5wdXQgb3IgU3RhdGUuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9