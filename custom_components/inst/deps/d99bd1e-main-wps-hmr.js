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

      for (var inc = 0; inc < this.props.formation.length; inc += 1) {
        var item = _objectSpread({}, this.props.formation[inc]);

        delete item.children;
        layout.push(item);
      }

      ;
      return layout;
    }
  }, {
    key: "create_children",
    value: function create_children() {
      var children = [];

      for (var inc = 0; inc < this.props.formation.length; inc += 1) {
        var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: this.props.formation[inc].i
        }, this.props.formation[inc].children);
        children.push(child);
      }

      ;
      return children;
    }
  }, {
    key: "onLC",
    value: function onLC(lc) {
      var newFormat = [];

      for (var inc = 0; inc < lc.length; inc += 1) {
        var newItem = _objectSpread({
          children: this.props.formation[inc].children
        }, lc[inc]);

        newFormat.push(newItem);
      }

      this.props.setProps({
        formation: newFormat
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
  formation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwiY3JlYXRlX2xheW91dCIsImNyZWF0ZV9jaGlsZHJlbiIsImxheW91dCIsImluYyIsImZvcm1hdGlvbiIsImxlbmd0aCIsIml0ZW0iLCJjaGlsZHJlbiIsInB1c2giLCJjaGlsZCIsImkiLCJsYyIsIm5ld0Zvcm1hdCIsIm5ld0l0ZW0iLCJzZXRQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBT3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBViwrQkFBWjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQiwrQkFBdkI7QUFMZTtBQU9sQjs7OztvQ0FFZTtBQUNaLFVBQU1HLE1BQU0sR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSUMsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBRyxLQUFLTixLQUFMLENBQVdPLFNBQVgsQ0FBcUJDLE1BQTdDLEVBQXFERixHQUFHLElBQUksQ0FBNUQsRUFBK0Q7QUFDM0QsWUFBTUcsSUFBSSxxQkFBTyxLQUFLVCxLQUFMLENBQVdPLFNBQVgsQ0FBcUJELEdBQXJCLENBQVAsQ0FBVjs7QUFDQSxlQUFPRyxJQUFJLENBQUNDLFFBQVo7QUFDQUwsY0FBTSxDQUFDTSxJQUFQLENBQVlGLElBQVo7QUFDSDs7QUFBQTtBQUNELGFBQU9KLE1BQVA7QUFDSDs7O3NDQUVpQjtBQUNkLFVBQU1LLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxXQUFLLElBQUlKLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUcsS0FBS04sS0FBTCxDQUFXTyxTQUFYLENBQXFCQyxNQUE3QyxFQUFxREYsR0FBRyxJQUFJLENBQTVELEVBQStEO0FBQzNELFlBQU1NLEtBQUssZ0JBQUc7QUFBSyxhQUFHLEVBQUUsS0FBS1osS0FBTCxDQUFXTyxTQUFYLENBQXFCRCxHQUFyQixFQUEwQk87QUFBcEMsV0FDVCxLQUFLYixLQUFMLENBQVdPLFNBQVgsQ0FBcUJELEdBQXJCLEVBQTBCSSxRQURqQixDQUFkO0FBR0FBLGdCQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZDtBQUNIOztBQUFBO0FBQ0QsYUFBT0YsUUFBUDtBQUNIOzs7eUJBRUlJLEUsRUFBSTtBQUNMLFVBQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxXQUFLLElBQUlULEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdRLEVBQUUsQ0FBQ04sTUFBM0IsRUFBbUNGLEdBQUcsSUFBSSxDQUExQyxFQUE2QztBQUN6QyxZQUFNVSxPQUFPO0FBQUlOLGtCQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXTyxTQUFYLENBQXFCRCxHQUFyQixFQUEwQkk7QUFBeEMsV0FBcURJLEVBQUUsQ0FBQ1IsR0FBRCxDQUF2RCxDQUFiOztBQUNBUyxpQkFBUyxDQUFDSixJQUFWLENBQWVLLE9BQWY7QUFDSDs7QUFDRCxXQUFLaEIsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQjtBQUNoQlYsaUJBQVMsRUFBRVE7QUFESyxPQUFwQjtBQUdIOzs7NkJBRVE7QUFDTCwwQkFDQSwyREFBQyx3REFBRDtBQUNJLGlCQUFTLEVBQUMsUUFEZDtBQUVJLGNBQU0sRUFBRSxLQUFLWixhQUFMLEVBRlo7QUFHSSxpQkFBUyxFQUFFLEVBSGY7QUFJSSxhQUFLLEVBQUUsSUFKWDtBQUtJLG1CQUFXLEVBQUMsWUFMaEI7QUFNSSxlQUFPLEVBQUUsQ0FOYjtBQU9JLHNCQUFjLEVBQUUsS0FBS0Y7QUFQekIsU0FRUyxLQUFLRyxlQUFMLEVBUlQsQ0FEQTtBQVlIOzs7O0VBdkRpQ2MsK0MsR0EwRHRDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUFuQixRQUFRLENBQUNvQixZQUFULEdBQXdCLEVBQXhCO0FBRUFwQixRQUFRLENBQUNxQixTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBbEIsV0FBUyxFQUFFZSxpREFBUyxDQUFDSSxLQUFWLENBQWdCRCxVQWRWOztBQWdCakI7Ozs7QUFJQVIsVUFBUSxFQUFFSyxpREFBUyxDQUFDSztBQXBCSCxDQUFyQixDIiwiZmlsZSI6ImQ5OWJkMWUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25MQyA9IHRoaXMub25MQy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX2xheW91dCA9IHRoaXMuY3JlYXRlX2xheW91dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX2NoaWxkcmVuID0gdGhpcy5jcmVhdGVfY2hpbGRyZW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX2xheW91dCgpIHtcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluYyA9IDA7IGluYyA8IHRoaXMucHJvcHMuZm9ybWF0aW9uLmxlbmd0aDsgaW5jICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHsuLi50aGlzLnByb3BzLmZvcm1hdGlvbltpbmNdfTtcclxuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGxheW91dC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGxheW91dFxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9jaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgdGhpcy5wcm9wcy5mb3JtYXRpb24ubGVuZ3RoOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IDxkaXYga2V5PXt0aGlzLnByb3BzLmZvcm1hdGlvbltpbmNdLml9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZm9ybWF0aW9uW2luY10uY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5cclxuICAgIH1cclxuXHJcbiAgICBvbkxDKGxjKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Rm9ybWF0ID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBsYy5sZW5ndGg7IGluYyArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7Y2hpbGRyZW46IHRoaXMucHJvcHMuZm9ybWF0aW9uW2luY10uY2hpbGRyZW4sIC4uLmxjW2luY119O1xyXG4gICAgICAgICAgICBuZXdGb3JtYXQucHVzaChuZXdJdGVtKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgZm9ybWF0aW9uOiBuZXdGb3JtYXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMuY3JlYXRlX2xheW91dCgpfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICB3aWR0aD17MTIwMH1cclxuICAgICAgICAgICAgY29tcGFjdFR5cGU9J2hvcml6b250YWwnXHJcbiAgICAgICAgICAgIG1heFJvd3M9ezF9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlX2NoaWxkcmVuKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgRXhhbXBsZUNvbXBvbmVudDoge2xhYmVsfSZuYnNwO1xyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogU2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXRQcm9wcyBpcyBhIHByb3AgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGJ5IGRhc2gncyBmcm9udC1lbmQgKFwiZGFzaC1yZW5kZXJlclwiKS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW4gYSBEYXNoIGFwcCwgdGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29tcG9uZW50J3NcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogcHJvcHMgYW5kIHNlbmQgdGhlIGRhdGEgYmFjayB0byB0aGUgUHl0aG9uIERhc2hcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYXBwIHNlcnZlciBpZiBhIGNhbGxiYWNrIHVzZXMgdGhlIG1vZGlmaWVkIHByb3AgYXNcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogSW5wdXQgb3IgU3RhdGUuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdGlvbjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==