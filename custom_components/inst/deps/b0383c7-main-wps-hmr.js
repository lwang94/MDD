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
        borderStyle: "solid"
      }, "a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "b",
        borderStyle: "solid"
      }, "b"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "c",
        borderStyle: "solid"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImkiLCJ4IiwieSIsInciLCJoIiwibWluVyIsIm1heFciLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBT3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7OzZCQUNRO0FBQ0wsVUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFBQ0MsU0FBQyxFQUFFLEdBQUo7QUFBU0MsU0FBQyxFQUFFLENBQVo7QUFBZUMsU0FBQyxFQUFFLENBQWxCO0FBQXFCQyxTQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLFNBQUMsRUFBRSxDQUE5QjtBQUFpQyxrQkFBUTtBQUF6QyxPQURXLEVBRVg7QUFBQ0osU0FBQyxFQUFFLEdBQUo7QUFBU0MsU0FBQyxFQUFFLENBQVo7QUFBZUMsU0FBQyxFQUFFLENBQWxCO0FBQXFCQyxTQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLFNBQUMsRUFBRSxDQUE5QjtBQUFpQ0MsWUFBSSxFQUFFLENBQXZDO0FBQTBDQyxZQUFJLEVBQUU7QUFBaEQsT0FGVyxFQUdYO0FBQUNOLFNBQUMsRUFBRSxHQUFKO0FBQVNDLFNBQUMsRUFBRSxDQUFaO0FBQWVDLFNBQUMsRUFBRSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFFLENBQXhCO0FBQTJCQyxTQUFDLEVBQUU7QUFBOUIsT0FIVyxDQUFmO0FBS0EsMEJBQ0ksMkRBQUMsd0RBQUQ7QUFBWSxpQkFBUyxFQUFDLFFBQXRCO0FBQStCLGNBQU0sRUFBRUwsTUFBdkM7QUFBK0MsWUFBSSxFQUFFLEVBQXJEO0FBQXlELGlCQUFTLEVBQUUsRUFBcEU7QUFBd0UsYUFBSyxFQUFFO0FBQS9FLHNCQUNJO0FBQUssV0FBRyxFQUFDLEdBQVQ7QUFBYSxtQkFBVyxFQUFDO0FBQXpCLGFBREosZUFFSTtBQUFLLFdBQUcsRUFBQyxHQUFUO0FBQWEsbUJBQVcsRUFBQztBQUF6QixhQUZKLGVBR0k7QUFBSyxXQUFHLEVBQUMsR0FBVDtBQUFhLG1CQUFXLEVBQUM7QUFBekIsYUFISixDQURKO0FBT0g7Ozs7RUFqQmlDUSwrQyxHQW9CdEM7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQVYsUUFBUSxDQUFDVyxZQUFULEdBQXdCLEVBQXhCO0FBRUFYLFFBQVEsQ0FBQ1ksU0FBVCxHQUFxQjtBQUNqQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKRzs7QUFNakI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVFA7O0FBV2pCOzs7QUFHQUMsT0FBSyxFQUFFSixpREFBUyxDQUFDQyxNQWRBOztBQWdCakI7Ozs7QUFJQUksVUFBUSxFQUFFTCxpREFBUyxDQUFDTTtBQXBCSCxDQUFyQixDIiwiZmlsZSI6ImIwMzgzYzctbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW1xyXG4gICAgICAgICAgICB7aTogJ2EnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAyLCBzdGF0aWM6IHRydWV9LFxyXG4gICAgICAgICAgICB7aTogJ2InLCB4OiAxLCB5OiAwLCB3OiAzLCBoOiAyLCBtaW5XOiAyLCBtYXhXOiA0fSxcclxuICAgICAgICAgICAge2k6ICdjJywgeDogNCwgeTogMCwgdzogMSwgaDogMn1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzTmFtZT0nbGF5b3V0JyBsYXlvdXQ9e2xheW91dH0gY29scz17MTJ9IHJvd0hlaWdodD17MzB9IHdpZHRoPXsxMjAwfT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdhJyBib3JkZXJTdHlsZT0nc29saWQnPmE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdiJyBib3JkZXJTdHlsZT0nc29saWQnPmI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdjJyBib3JkZXJTdHlsZT0nc29saWQnPmM8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIHNldFByb3BzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbi8vICAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZW5kIHRoZSBuZXcgdmFsdWUgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNldFByb3BzIGlzIGEgcHJvcCB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYnkgZGFzaCdzIGZyb250LWVuZCAoXCJkYXNoLXJlbmRlcmVyXCIpLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbiBhIERhc2ggYXBwLCB0aGlzIHdpbGwgdXBkYXRlIHRoZSBjb21wb25lbnQnc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwcm9wcyBhbmQgc2VuZCB0aGUgZGF0YSBiYWNrIHRvIHRoZSBQeXRob24gRGFzaFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhcHAgc2VydmVyIGlmIGEgY2FsbGJhY2sgdXNlcyB0aGUgbW9kaWZpZWQgcHJvcCBhc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbnB1dCBvciBTdGF0ZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gc2V0UHJvcHMoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=