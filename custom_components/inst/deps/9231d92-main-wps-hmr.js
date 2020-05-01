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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    _this.create_layout = _this.create_layout.bind(_assertThisInitialized(_this));
    _this.create_children = _this.create_children.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DragGrid, [{
    key: "create_layout",
    value: function create_layout() {
      var layout = [];

      for (var inc = 0; inc < length(this.props.format); inc += 1) {
        var item = _objectSpread({}, this.props.format);

        delete item[children];
        layout.push(item);
      }

      ;
      return layout;
    }
  }, {
    key: "create_children",
    value: function create_children() {
      var children = [];

      for (var inc = 0; inc < length(this.props.format); inc += 1) {
        var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: this.props.format.i
        }, this.props.format.children);
        children.push(child);
      }

      ;
      return children;
    }
  }, {
    key: "onLC",
    value: function onLC(lc) {
      newFormat = [];

      for (var inc = 0; inc < length(lc); inc += 1) {
        var newItem = _objectSpread({
          children: this.props.format.children
        }, lc[inc]);

        newFormat.push(newItem);
      }

      this.props.setProps({
        format: newFormat
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: this.create_layout(),
        rowHeight: 30,
        width: 1200,
        compactType: "horizontal",
        maxRows: 1,
        onLayoutChange: this.onLC
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
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwiY3JlYXRlX2xheW91dCIsImNyZWF0ZV9jaGlsZHJlbiIsImxheW91dCIsImluYyIsImxlbmd0aCIsImZvcm1hdCIsIml0ZW0iLCJjaGlsZHJlbiIsInB1c2giLCJjaGlsZCIsImkiLCJsYyIsIm5ld0Zvcm1hdCIsIm5ld0l0ZW0iLCJzZXRQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBT3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBViwrQkFBWjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQiwrQkFBdkI7QUFMZTtBQU9sQjs7OztvQ0FFZTtBQUNaLFVBQU1HLE1BQU0sR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSUMsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0MsTUFBTSxDQUFDLEtBQUtQLEtBQUwsQ0FBV1EsTUFBWixDQUE5QixFQUFtREYsR0FBRyxJQUFJLENBQTFELEVBQTZEO0FBQ3pELFlBQU1HLElBQUkscUJBQU8sS0FBS1QsS0FBTCxDQUFXUSxNQUFsQixDQUFWOztBQUNBLGVBQU9DLElBQUksQ0FBQ0MsUUFBRCxDQUFYO0FBQ0FMLGNBQU0sQ0FBQ00sSUFBUCxDQUFZRixJQUFaO0FBQ0g7O0FBQUE7QUFDRCxhQUFPSixNQUFQO0FBQ0g7OztzQ0FFaUI7QUFDZCxVQUFNSyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsV0FBSyxJQUFJSixHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHQyxNQUFNLENBQUMsS0FBS1AsS0FBTCxDQUFXUSxNQUFaLENBQTlCLEVBQW1ERixHQUFHLElBQUksQ0FBMUQsRUFBNkQ7QUFDekQsWUFBTU0sS0FBSyxnQkFBRztBQUFLLGFBQUcsRUFBRSxLQUFLWixLQUFMLENBQVdRLE1BQVgsQ0FBa0JLO0FBQTVCLFdBQWdDLEtBQUtiLEtBQUwsQ0FBV1EsTUFBWCxDQUFrQkUsUUFBbEQsQ0FBZDtBQUNBQSxnQkFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQ7QUFDSDs7QUFBQTtBQUNELGFBQU9GLFFBQVA7QUFDSDs7O3lCQUVJSSxFLEVBQUk7QUFDTEMsZUFBUyxHQUFHLEVBQVo7O0FBQ0EsV0FBSyxJQUFJVCxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHQyxNQUFNLENBQUNPLEVBQUQsQ0FBOUIsRUFBb0NSLEdBQUcsSUFBSSxDQUEzQyxFQUE4QztBQUMxQyxZQUFNVSxPQUFPO0FBQUlOLGtCQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXUSxNQUFYLENBQWtCRTtBQUFoQyxXQUE2Q0ksRUFBRSxDQUFDUixHQUFELENBQS9DLENBQWI7O0FBQ0FTLGlCQUFTLENBQUNKLElBQVYsQ0FBZUssT0FBZjtBQUNIOztBQUNELFdBQUtoQixLQUFMLENBQVdpQixRQUFYLENBQW9CO0FBQ2hCVCxjQUFNLEVBQUVPO0FBRFEsT0FBcEI7QUFHSDs7OzZCQUVRO0FBQ0wsMEJBQ0EsMkRBQUMsd0RBQUQ7QUFDSSxpQkFBUyxFQUFDLFFBRGQ7QUFFSSxjQUFNLEVBQUUsS0FBS1osYUFBTCxFQUZaO0FBR0ksaUJBQVMsRUFBRSxFQUhmO0FBSUksYUFBSyxFQUFFLElBSlg7QUFLSSxtQkFBVyxFQUFDLFlBTGhCO0FBTUksZUFBTyxFQUFFLENBTmI7QUFPSSxzQkFBYyxFQUFFLEtBQUtGO0FBUHpCLFNBUVMsS0FBS0csZUFBTCxFQVJULENBREE7QUFZSDs7OztFQXJEaUNjLCtDLEdBd0R0QztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBbkIsUUFBUSxDQUFDb0IsWUFBVCxHQUF3QixFQUF4QjtBQUVBcEIsUUFBUSxDQUFDcUIsU0FBVCxHQUFxQjtBQUNqQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKRzs7QUFNakI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVFA7O0FBV2pCOzs7QUFHQWpCLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0ksS0FBVixDQUFnQkQsVUFkUDs7QUFnQmpCOzs7O0FBSUFSLFVBQVEsRUFBRUssaURBQVMsQ0FBQ0s7QUFwQkgsQ0FBckIsQyIsImZpbGUiOiI5MjMxZDkyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLm9uTEMgPSB0aGlzLm9uTEMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9sYXlvdXQgPSB0aGlzLmNyZWF0ZV9sYXlvdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9jaGlsZHJlbiA9IHRoaXMuY3JlYXRlX2NoaWxkcmVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9sYXlvdXQoKSB7XHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBsZW5ndGgodGhpcy5wcm9wcy5mb3JtYXQpOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gey4uLnRoaXMucHJvcHMuZm9ybWF0fTtcclxuICAgICAgICAgICAgZGVsZXRlIGl0ZW1bY2hpbGRyZW5dO1xyXG4gICAgICAgICAgICBsYXlvdXQucHVzaChpdGVtKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBsYXlvdXRcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluYyA9IDA7IGluYyA8IGxlbmd0aCh0aGlzLnByb3BzLmZvcm1hdCk7IGluYyArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gPGRpdiBrZXk9e3RoaXMucHJvcHMuZm9ybWF0Lml9Pnt0aGlzLnByb3BzLmZvcm1hdC5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgb25MQyhsYykge1xyXG4gICAgICAgIG5ld0Zvcm1hdCA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgbGVuZ3RoKGxjKTsgaW5jICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtjaGlsZHJlbjogdGhpcy5wcm9wcy5mb3JtYXQuY2hpbGRyZW4sIC4uLmxjW2luY119O1xyXG4gICAgICAgICAgICBuZXdGb3JtYXQucHVzaChuZXdJdGVtKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgZm9ybWF0OiBuZXdGb3JtYXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMuY3JlYXRlX2xheW91dCgpfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICB3aWR0aD17MTIwMH1cclxuICAgICAgICAgICAgY29tcGFjdFR5cGU9J2hvcml6b250YWwnXHJcbiAgICAgICAgICAgIG1heFJvd3M9ezF9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgRXhhbXBsZUNvbXBvbmVudDoge2xhYmVsfSZuYnNwO1xyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogU2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXRQcm9wcyBpcyBhIHByb3AgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGJ5IGRhc2gncyBmcm9udC1lbmQgKFwiZGFzaC1yZW5kZXJlclwiKS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW4gYSBEYXNoIGFwcCwgdGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29tcG9uZW50J3NcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogcHJvcHMgYW5kIHNlbmQgdGhlIGRhdGEgYmFjayB0byB0aGUgUHl0aG9uIERhc2hcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYXBwIHNlcnZlciBpZiBhIGNhbGxiYWNrIHVzZXMgdGhlIG1vZGlmaWVkIHByb3AgYXNcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW5wdXQgb3IgU3RhdGUuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==