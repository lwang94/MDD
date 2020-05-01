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
    var layout = [];
    var children = [];

    for (var compy = 0; compy < _this.props.numRows; compy += 1) {
      for (var compx = 0; compx < _this.props.numColumns; compx += 1) {
        var increment = compx + compy * _this.props.numRows;
        var comp = {
          i: "comp_".concat(increment),
          x: compx,
          y: compy,
          w: 1,
          h: 1,
          isResizable: false
        };
        layout.push(comp);
        children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "comp_".concat(increment),
          style: {
            borderStyle: 'solid'
          }
        }, _this.props.children[increment]));
      }
    }

    ;
    _this.state = {
      layout: layout,
      children: children
    };
    return _this;
  }

  _createClass(DragGrid, [{
    key: "render",
    value: function render() {
      // const layout = [
      //     {i: 'a', x: 0, y: 0, w: 1, h: 1, static: true},
      //     {i: 'b', x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4},
      //     {i: 'c', x: 4, y: 0, w: 1, h: 1}
      // ];
      console.log(this.state.layout);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: this.state.layout,
        cols: 12,
        rowHeight: 30,
        width: 1200,
        compactType: "horizontal",
        maxRows: 1
      }, this.state.children);
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
   * The number of rows
   */
  numRows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The number of columns
   */
  numColumns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImNoaWxkcmVuIiwiY29tcHkiLCJudW1Sb3dzIiwiY29tcHgiLCJudW1Db2x1bW5zIiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5IiwibnVtYmVyIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxRQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHLE1BQUtILEtBQUwsQ0FBV0ksT0FBdkMsRUFBZ0RELEtBQUssSUFBSSxDQUF6RCxFQUE0RDtBQUN4RCxXQUFLLElBQUlFLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHLE1BQUtMLEtBQUwsQ0FBV00sVUFBdkMsRUFBbURELEtBQUssSUFBSSxDQUE1RCxFQUErRDtBQUMzRCxZQUFNRSxTQUFTLEdBQUdGLEtBQUssR0FBR0YsS0FBSyxHQUFHLE1BQUtILEtBQUwsQ0FBV0ksT0FBN0M7QUFFQSxZQUFNSSxJQUFJLEdBQUc7QUFBQ0MsV0FBQyxpQkFBVUYsU0FBVixDQUFGO0FBQXlCRyxXQUFDLEVBQUVMLEtBQTVCO0FBQW1DTSxXQUFDLEVBQUVSLEtBQXRDO0FBQTZDUyxXQUFDLEVBQUUsQ0FBaEQ7QUFBbURDLFdBQUMsRUFBRSxDQUF0RDtBQUF5REMscUJBQVcsRUFBRTtBQUF0RSxTQUFiO0FBQ0FiLGNBQU0sQ0FBQ2MsSUFBUCxDQUFZUCxJQUFaO0FBRUFOLGdCQUFRLENBQUNhLElBQVQsZUFDSTtBQUFLLGFBQUcsaUJBQVVSLFNBQVYsQ0FBUjtBQUErQixlQUFLLEVBQUU7QUFBQ1MsdUJBQVcsRUFBRTtBQUFkO0FBQXRDLFdBQStELE1BQUtoQixLQUFMLENBQVdFLFFBQVgsQ0FBb0JLLFNBQXBCLENBQS9ELENBREo7QUFHSDtBQUNKOztBQUFBO0FBQ0QsVUFBS1UsS0FBTCxHQUFhO0FBQ1RoQixZQUFNLEVBQUVBLE1BREM7QUFFVEMsY0FBUSxFQUFFQTtBQUZELEtBQWI7QUFqQmU7QUFzQmxCOzs7OzZCQUNRO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0YsS0FBTCxDQUFXaEIsTUFBdkI7QUFDQSwwQkFDQSwyREFBQyx3REFBRDtBQUFZLGlCQUFTLEVBQUMsUUFBdEI7QUFBK0IsY0FBTSxFQUFFLEtBQUtnQixLQUFMLENBQVdoQixNQUFsRDtBQUEwRCxZQUFJLEVBQUUsRUFBaEU7QUFBb0UsaUJBQVMsRUFBRSxFQUEvRTtBQUFtRixhQUFLLEVBQUUsSUFBMUY7QUFBZ0csbUJBQVcsRUFBQyxZQUE1RztBQUF5SCxlQUFPLEVBQUU7QUFBbEksU0FDUyxLQUFLZ0IsS0FBTCxDQUFXZixRQURwQixDQURBO0FBUUg7Ozs7RUF2Q2lDa0IsK0MsR0EwQ3RDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUFyQixRQUFRLENBQUNzQixZQUFULEdBQXdCLEVBQXhCO0FBRUF0QixRQUFRLENBQUN1QixTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBekIsVUFBUSxFQUFFc0IsaURBQVMsQ0FBQ0ksS0FkSDs7QUFnQmpCOzs7QUFHQXhCLFNBQU8sRUFBRW9CLGlEQUFTLENBQUNLLE1BbkJGOztBQXFCakI7OztBQUdBdkIsWUFBVSxFQUFFa0IsaURBQVMsQ0FBQ0ssTUF4Qkw7O0FBMEJqQjs7OztBQUlBQyxVQUFRLEVBQUVOLGlEQUFTLENBQUNPO0FBOUJILENBQXJCLEMiLCJmaWxlIjoiZGE3OGIxNi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW107XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjb21weSA9IDA7IGNvbXB5IDwgdGhpcy5wcm9wcy5udW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCB0aGlzLnByb3BzLm51bUNvbHVtbnM7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudCA9IGNvbXB4ICsgY29tcHkgKiB0aGlzLnByb3BzLm51bVJvd3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcCA9IHtpOiBgY29tcF8ke2luY3JlbWVudH1gLCB4OiBjb21weCwgeTogY29tcHksIHc6IDEsIGg6IDEsIGlzUmVzaXphYmxlOiBmYWxzZX07XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQucHVzaChjb21wKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgY29tcF8ke2luY3JlbWVudH1gfSBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW5baW5jcmVtZW50XX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxheW91dDogbGF5b3V0LFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGxheW91dCA9IFtcclxuICAgICAgICAvLyAgICAge2k6ICdhJywgeDogMCwgeTogMCwgdzogMSwgaDogMSwgc3RhdGljOiB0cnVlfSxcclxuICAgICAgICAvLyAgICAge2k6ICdiJywgeDogMSwgeTogMCwgdzogMywgaDogMSwgbWluVzogMiwgbWF4VzogNH0sXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYycsIHg6IDQsIHk6IDAsIHc6IDEsIGg6IDF9XHJcbiAgICAgICAgLy8gXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxheW91dCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZExheW91dCBjbGFzc05hbWU9J2xheW91dCcgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH0gY29scz17MTJ9IHJvd0hlaWdodD17MzB9IHdpZHRoPXsxMjAwfSBjb21wYWN0VHlwZT0naG9yaXpvbnRhbCcgbWF4Um93cz17MX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGtleT0nYScgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlRlbXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdiJyBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+Vm9sdGFnZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2MnIHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5QcmVzc3VyZTwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIHNldFByb3BzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbi8vICAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZW5kIHRoZSBuZXcgdmFsdWUgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNldFByb3BzIGlzIGEgcHJvcCB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYnkgZGFzaCdzIGZyb250LWVuZCAoXCJkYXNoLXJlbmRlcmVyXCIpLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbiBhIERhc2ggYXBwLCB0aGlzIHdpbGwgdXBkYXRlIHRoZSBjb21wb25lbnQnc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwcm9wcyBhbmQgc2VuZCB0aGUgZGF0YSBiYWNrIHRvIHRoZSBQeXRob24gRGFzaFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhcHAgc2VydmVyIGlmIGEgY2FsbGJhY2sgdXNlcyB0aGUgbW9kaWZpZWQgcHJvcCBhc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbnB1dCBvciBTdGF0ZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gc2V0UHJvcHMoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2Ygcm93c1xyXG4gICAgICovXHJcbiAgICBudW1Sb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zXHJcbiAgICAgKi9cclxuICAgIG51bUNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==