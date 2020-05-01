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
        increment = compx + compy * _this.props.numRows;
        comp = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImNoaWxkcmVuIiwiY29tcHkiLCJudW1Sb3dzIiwiY29tcHgiLCJudW1Db2x1bW5zIiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJudW1iZXIiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUcsTUFBS0gsS0FBTCxDQUFXSSxPQUF2QyxFQUFnREQsS0FBSyxJQUFJLENBQXpELEVBQTREO0FBQ3hELFdBQUssSUFBSUUsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUcsTUFBS0wsS0FBTCxDQUFXTSxVQUF2QyxFQUFtREQsS0FBSyxJQUFJLENBQTVELEVBQStEO0FBQzNERSxpQkFBUyxHQUFHRixLQUFLLEdBQUdGLEtBQUssR0FBRyxNQUFLSCxLQUFMLENBQVdJLE9BQXZDO0FBRUFJLFlBQUksR0FBRztBQUFDQyxXQUFDLGlCQUFVRixTQUFWLENBQUY7QUFBeUJHLFdBQUMsRUFBRUwsS0FBNUI7QUFBbUNNLFdBQUMsRUFBRVIsS0FBdEM7QUFBNkNTLFdBQUMsRUFBRSxDQUFoRDtBQUFtREMsV0FBQyxFQUFFLENBQXREO0FBQXlEQyxxQkFBVyxFQUFFO0FBQXRFLFNBQVA7QUFDQWIsY0FBTSxDQUFDYyxJQUFQLENBQVlQLElBQVo7QUFFQU4sZ0JBQVEsQ0FBQ2EsSUFBVCxlQUNJO0FBQUssYUFBRyxpQkFBVVIsU0FBVixDQUFSO0FBQStCLGVBQUssRUFBRTtBQUFDUyx1QkFBVyxFQUFFO0FBQWQ7QUFBdEMsV0FBK0QsTUFBS2hCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkssU0FBcEIsQ0FBL0QsQ0FESjtBQUdIO0FBQ0o7O0FBQUE7QUFDRCxVQUFLVSxLQUFMLEdBQWE7QUFDVGhCLFlBQU0sRUFBTkEsTUFEUztBQUVUQyxjQUFRLEVBQVJBO0FBRlMsS0FBYjtBQWpCZTtBQXNCbEI7Ozs7NkJBQ1E7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQ0EsMkRBQUMsd0RBQUQ7QUFBWSxpQkFBUyxFQUFDLFFBQXRCO0FBQStCLGNBQU0sRUFBRSxLQUFLZSxLQUFMLENBQVdoQixNQUFsRDtBQUEwRCxZQUFJLEVBQUUsRUFBaEU7QUFBb0UsaUJBQVMsRUFBRSxFQUEvRTtBQUFtRixhQUFLLEVBQUUsSUFBMUY7QUFBZ0csbUJBQVcsRUFBQyxZQUE1RztBQUF5SCxlQUFPLEVBQUU7QUFBbEksU0FDUyxLQUFLZ0IsS0FBTCxDQUFXZixRQURwQixDQURBO0FBUUg7Ozs7RUF0Q2lDZ0IsK0MsR0F5Q3RDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUFuQixRQUFRLENBQUNvQixZQUFULEdBQXdCLEVBQXhCO0FBRUFwQixRQUFRLENBQUNxQixTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBdkIsVUFBUSxFQUFFb0IsaURBQVMsQ0FBQ0ksS0FkSDs7QUFnQmpCOzs7QUFHQXRCLFNBQU8sRUFBRWtCLGlEQUFTLENBQUNLLE1BbkJGOztBQXFCakI7OztBQUdBckIsWUFBVSxFQUFFZ0IsaURBQVMsQ0FBQ0ssTUF4Qkw7O0FBMEJqQjs7OztBQUlBQyxVQUFRLEVBQUVOLGlEQUFTLENBQUNPO0FBOUJILENBQXJCLEMiLCJmaWxlIjoiMzMxYWRjNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW107XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjb21weSA9IDA7IGNvbXB5IDwgdGhpcy5wcm9wcy5udW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCB0aGlzLnByb3BzLm51bUNvbHVtbnM7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IGNvbXB4ICsgY29tcHkgKiB0aGlzLnByb3BzLm51bVJvd3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcCA9IHtpOiBgY29tcF8ke2luY3JlbWVudH1gLCB4OiBjb21weCwgeTogY29tcHksIHc6IDEsIGg6IDEsIGlzUmVzaXphYmxlOiBmYWxzZX07XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQucHVzaChjb21wKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgY29tcF8ke2luY3JlbWVudH1gfSBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW5baW5jcmVtZW50XX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxheW91dCxcclxuICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGxheW91dCA9IFtcclxuICAgICAgICAvLyAgICAge2k6ICdhJywgeDogMCwgeTogMCwgdzogMSwgaDogMSwgc3RhdGljOiB0cnVlfSxcclxuICAgICAgICAvLyAgICAge2k6ICdiJywgeDogMSwgeTogMCwgdzogMywgaDogMSwgbWluVzogMiwgbWF4VzogNH0sXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYycsIHg6IDQsIHk6IDAsIHc6IDEsIGg6IDF9XHJcbiAgICAgICAgLy8gXTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzTmFtZT0nbGF5b3V0JyBsYXlvdXQ9e3RoaXMuc3RhdGUubGF5b3V0fSBjb2xzPXsxMn0gcm93SGVpZ2h0PXszMH0gd2lkdGg9ezEyMDB9IGNvbXBhY3RUeXBlPSdob3Jpem9udGFsJyBtYXhSb3dzPXsxfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYga2V5PSdhJyBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+VGVtcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2InIHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5Wb2x0YWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT0nYycgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlByZXNzdXJlPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgc2V0UHJvcHMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cclxuLy8gICAgICAgICAgICAgICAgIEV4YW1wbGVDb21wb25lbnQ6IHtsYWJlbH0mbmJzcDtcclxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlbmQgdGhlIG5ldyB2YWx1ZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudC5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogc2V0UHJvcHMgaXMgYSBwcm9wIHRoYXQgaXMgYXV0b21hdGljYWxseSBzdXBwbGllZFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBieSBkYXNoJ3MgZnJvbnQtZW5kIChcImRhc2gtcmVuZGVyZXJcIikuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIEluIGEgRGFzaCBhcHAsIHRoaXMgd2lsbCB1cGRhdGUgdGhlIGNvbXBvbmVudCdzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHByb3BzIGFuZCBzZW5kIHRoZSBkYXRhIGJhY2sgdG8gdGhlIFB5dGhvbiBEYXNoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFwcCBzZXJ2ZXIgaWYgYSBjYWxsYmFjayB1c2VzIHRoZSBtb2RpZmllZCBwcm9wIGFzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIElucHV0IG9yIFN0YXRlLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBzZXRQcm9wcyh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbkRyYWdHcmlkLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuRHJhZ0dyaWQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2hpbGRyZW4gaW4gZWFjaCBwYXJ0IG9mIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiByb3dzXHJcbiAgICAgKi9cclxuICAgIG51bVJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcclxuICAgICAqL1xyXG4gICAgbnVtQ29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9