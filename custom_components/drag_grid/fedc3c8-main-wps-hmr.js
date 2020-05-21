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

    _this = _super.call(this, props); // this.onLC = this.onLC.bind(this);
    // this.onD = this.onD.bind(this);

    _this.create_children = _this.create_children.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DragGrid, [{
    key: "create_children",
    value: function create_children() {
      var children = [];

      if (this.props.children != null) {
        var propchild = this.props.children;

        if (propchild.constructor != Array) {
          propchild = [propchild];
        }

        ;

        for (var inc = 0; inc < propchild.length; inc += 1) {
          var child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: this.props.layout[inc].i,
            style: this.props.divstyle
          }, propchild[inc]);
          children.push(child);
        }
      }

      return children;
    } // onLC(lc) {
    //     this.props.setProps({
    //         layout: lc
    //     })
    // }
    // onD(layout, oldItem, newItem, placeholder, e, element) {
    //     const grid = document.getElementsByClassName('react-grid-layout')[0];
    //     const translateXMaxValue = grid.offsetWidth - element.offsetWidth;
    //     const translateYMaxValue = grid.offsetHeight - element.offsetHeight;
    //     const translateValues = window.getComputedStyle(element).transform.split(',');
    //     let translateX = parseInt(translateValues[translateValues.length - 2]);
    //     let translateY = parseInt(translateValues[translateValues.length - 1].slice(0, -1));
    //     if (translateX > translateXMaxValue) {
    //         translateX = translateXMaxValue;
    //     }
    //     if (translateX < 0) {
    //         translateX = 0;
    //     }
    //     if (translateY > translateYMaxValue) {
    //         translateY = translateYMaxValue;
    //     }
    //     if (translateY < 0) {
    //         translateY = 0;
    //     }
    //     element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    // }

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout" // layout={this.props.layout}
        ,
        compactType: this.props.compacttype,
        rowHeight: this.props.rowheight,
        width: this.props.width,
        cols: this.props.numcolumns,
        maxRows: this.props.maxrows,
        onLayoutChange: this.onLC
      }, "// onDrag=", this.onD, ">", this.create_children());
    }
  }]);

  return DragGrid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DragGrid.defaultProps = {
  children: [' '],
  divstyle: {},
  layout: [{
    i: 'default',
    x: 0,
    y: 0,
    w: 1,
    h: 1
  }],
  compacttype: 'horizontal',
  rowheight: 30,
  width: 1200,
  numcolumns: 6,
  maxrows: 1
};
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
   * The style of the Div that contains the children
   */
  divstyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * The layout of the grid
   */
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The compact type
   */
  compacttype: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The height of one row in the grid
   */
  rowheight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The total width of the grid
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The number of columns
   */
  numcolumns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Maximum number of rows in grid
   */
  maxrows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImNyZWF0ZV9jaGlsZHJlbiIsImJpbmQiLCJjaGlsZHJlbiIsInByb3BjaGlsZCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJpbmMiLCJsZW5ndGgiLCJjaGlsZCIsImxheW91dCIsImkiLCJkaXZzdHlsZSIsInB1c2giLCJjb21wYWN0dHlwZSIsInJvd2hlaWdodCIsIndpZHRoIiwibnVtY29sdW1ucyIsIm1heHJvd3MiLCJvbkxDIiwib25EIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwieCIsInkiLCJ3IiwiaCIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFPcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU4sRUFEZSxDQUVmO0FBQ0E7O0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQiwrQkFBdkI7QUFKZTtBQU1sQjs7OztzQ0FFaUI7QUFDZCxVQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsVUFBSSxLQUFLSCxLQUFMLENBQVdHLFFBQVgsSUFBdUIsSUFBM0IsRUFBaUM7QUFDN0IsWUFBSUMsU0FBUyxHQUFHLEtBQUtKLEtBQUwsQ0FBV0csUUFBM0I7O0FBQ0EsWUFBSUMsU0FBUyxDQUFDQyxXQUFWLElBQXlCQyxLQUE3QixFQUFvQztBQUNoQ0YsbUJBQVMsR0FBRyxDQUFDQSxTQUFELENBQVo7QUFDSDs7QUFBQTs7QUFDRCxhQUFLLElBQUlHLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdILFNBQVMsQ0FBQ0ksTUFBbEMsRUFBMENELEdBQUcsSUFBSSxDQUFqRCxFQUFvRDtBQUNoRCxjQUFNRSxLQUFLLGdCQUFHO0FBQUssZUFBRyxFQUFFLEtBQUtULEtBQUwsQ0FBV1UsTUFBWCxDQUFrQkgsR0FBbEIsRUFBdUJJLENBQWpDO0FBQW9DLGlCQUFLLEVBQUUsS0FBS1gsS0FBTCxDQUFXWTtBQUF0RCxhQUNUUixTQUFTLENBQUNHLEdBQUQsQ0FEQSxDQUFkO0FBR0FKLGtCQUFRLENBQUNVLElBQVQsQ0FBY0osS0FBZDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT04sUUFBUDtBQUNILEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OzZCQUVTO0FBQ0wsMEJBQ0EsMkRBQUMsd0RBQUQ7QUFDSSxpQkFBUyxFQUFDLFFBRGQsQ0FFSTtBQUZKO0FBR0ksbUJBQVcsRUFBRSxLQUFLSCxLQUFMLENBQVdjLFdBSDVCO0FBSUksaUJBQVMsRUFBRSxLQUFLZCxLQUFMLENBQVdlLFNBSjFCO0FBS0ksYUFBSyxFQUFFLEtBQUtmLEtBQUwsQ0FBV2dCLEtBTHRCO0FBTUksWUFBSSxFQUFFLEtBQUtoQixLQUFMLENBQVdpQixVQU5yQjtBQU9JLGVBQU8sRUFBRSxLQUFLakIsS0FBTCxDQUFXa0IsT0FQeEI7QUFRSSxzQkFBYyxFQUFFLEtBQUtDO0FBUnpCLHVCQVNlLEtBQUtDLEdBVHBCLE9BVVMsS0FBS25CLGVBQUwsRUFWVCxDQURBO0FBY0g7Ozs7RUF4RWlDb0IsK0M7OztBQTRFdEN0QixRQUFRLENBQUN1QixZQUFULEdBQXdCO0FBQ3BCbkIsVUFBUSxFQUFFLENBQUMsR0FBRCxDQURVO0FBRXBCUyxVQUFRLEVBQUUsRUFGVTtBQUdwQkYsUUFBTSxFQUFFLENBQUM7QUFBQ0MsS0FBQyxFQUFFLFNBQUo7QUFBZVksS0FBQyxFQUFFLENBQWxCO0FBQXFCQyxLQUFDLEVBQUUsQ0FBeEI7QUFBMkJDLEtBQUMsRUFBRSxDQUE5QjtBQUFpQ0MsS0FBQyxFQUFFO0FBQXBDLEdBQUQsQ0FIWTtBQUlwQlosYUFBVyxFQUFFLFlBSk87QUFLcEJDLFdBQVMsRUFBRSxFQUxTO0FBTXBCQyxPQUFLLEVBQUUsSUFOYTtBQU9wQkMsWUFBVSxFQUFFLENBUFE7QUFRcEJDLFNBQU8sRUFBRTtBQVJXLENBQXhCO0FBV0FuQixRQUFRLENBQUM0QixTQUFULEdBQXFCO0FBQ2pCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpHOztBQU1qQjs7O0FBR0FDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFUUDs7QUFXakI7OztBQUdBN0IsVUFBUSxFQUFFMEIsaURBQVMsQ0FBQ0ksS0FkSDs7QUFnQmpCOzs7QUFHQXJCLFVBQVEsRUFBRWlCLGlEQUFTLENBQUNLLE1BbkJIOztBQXFCakI7OztBQUdBeEIsUUFBTSxFQUFFbUIsaURBQVMsQ0FBQ0ksS0F4QkQ7O0FBMEJqQjs7O0FBR0FuQixhQUFXLEVBQUVlLGlEQUFTLENBQUNDLE1BN0JOOztBQStCakI7OztBQUdBZixXQUFTLEVBQUVjLGlEQUFTLENBQUNNLE1BbENKOztBQW9DakI7OztBQUdBbkIsT0FBSyxFQUFFYSxpREFBUyxDQUFDTSxNQXZDQTs7QUF5Q2pCOzs7QUFHQWxCLFlBQVUsRUFBRVksaURBQVMsQ0FBQ00sTUE1Q0w7O0FBOENqQjs7O0FBR0FqQixTQUFPLEVBQUVXLGlEQUFTLENBQUNNLE1BakRGOztBQWtEakI7Ozs7QUFJQUMsVUFBUSxFQUFFUCxpREFBUyxDQUFDUTtBQXRESCxDQUFyQixDIiwiZmlsZSI6ImZlZGMzYzgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbkxDID0gdGhpcy5vbkxDLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbkQgPSB0aGlzLm9uRC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX2NoaWxkcmVuID0gdGhpcy5jcmVhdGVfY2hpbGRyZW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX2NoaWxkcmVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wY2hpbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAocHJvcGNoaWxkLmNvbnN0cnVjdG9yICE9IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wY2hpbGQgPSBbcHJvcGNoaWxkXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBwcm9wY2hpbGQubGVuZ3RoOyBpbmMgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSA8ZGl2IGtleT17dGhpcy5wcm9wcy5sYXlvdXRbaW5jXS5pfSBzdHlsZT17dGhpcy5wcm9wcy5kaXZzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BjaGlsZFtpbmNdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25MQyhsYykge1xyXG4gICAgLy8gICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xyXG4gICAgLy8gICAgICAgICBsYXlvdXQ6IGxjXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBvbkQobGF5b3V0LCBvbGRJdGVtLCBuZXdJdGVtLCBwbGFjZWhvbGRlciwgZSwgZWxlbWVudCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWFjdC1ncmlkLWxheW91dCcpWzBdO1xyXG4gICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVhNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0V2lkdGggLSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVlNYXhWYWx1ZSA9IGdyaWQub2Zmc2V0SGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnRyYW5zZm9ybS5zcGxpdCgnLCcpO1xyXG4gICAgLy8gICAgIGxldCB0cmFuc2xhdGVYID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAyXSk7XHJcbiAgICAvLyAgICAgbGV0IHRyYW5zbGF0ZVkgPSBwYXJzZUludCh0cmFuc2xhdGVWYWx1ZXNbdHJhbnNsYXRlVmFsdWVzLmxlbmd0aCAtIDFdLnNsaWNlKDAsIC0xKSk7XHJcblxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlWE1heFZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVYTWF4VmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVYIDwgMCkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVYID0gMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVZTWF4VmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZVlNYXhWYWx1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRyYW5zbGF0ZVkgPCAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQnXHJcbiAgICAgICAgICAgIC8vIGxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XHJcbiAgICAgICAgICAgIGNvbXBhY3RUeXBlPXt0aGlzLnByb3BzLmNvbXBhY3R0eXBlfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9e3RoaXMucHJvcHMucm93aGVpZ2h0fVxyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgY29scz17dGhpcy5wcm9wcy5udW1jb2x1bW5zfVxyXG4gICAgICAgICAgICBtYXhSb3dzPXt0aGlzLnByb3BzLm1heHJvd3N9XHJcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXt0aGlzLm9uTEN9PlxyXG4gICAgICAgICAgICAvLyBvbkRyYWc9e3RoaXMub25EfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZV9jaGlsZHJlbigpfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuRHJhZ0dyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFsnICddLFxyXG4gICAgZGl2c3R5bGU6IHt9LFxyXG4gICAgbGF5b3V0OiBbe2k6ICdkZWZhdWx0JywgeDogMCwgeTogMCwgdzogMSwgaDogMX1dLFxyXG4gICAgY29tcGFjdHR5cGU6ICdob3Jpem9udGFsJyxcclxuICAgIHJvd2hlaWdodDogMzAsXHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIG51bWNvbHVtbnM6IDYsXHJcbiAgICBtYXhyb3dzOiAxXHJcbn07XHJcblxyXG5EcmFnR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGlsZHJlbiBpbiBlYWNoIHBhcnQgb2YgdGhlIGdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3R5bGUgb2YgdGhlIERpdiB0aGF0IGNvbnRhaW5zIHRoZSBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBkaXZzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYXlvdXQgb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcGFjdCB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbXBhY3R0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiBvbmUgcm93IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIHJvd2hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1uc1xyXG4gICAgICovXHJcbiAgICBudW1jb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKi9cclxuICAgIG1heHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9