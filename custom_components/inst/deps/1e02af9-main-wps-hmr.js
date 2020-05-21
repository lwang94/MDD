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

    _this = _super.call(this, props);
    _this.onLC = _this.onLC.bind(_assertThisInitialized(_this)); // this.onD = this.onD.bind(this);

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
    }
  }, {
    key: "onLC",
    value: function onLC(lc) {
      this.props.setProps({
        layout: lc
      });
    } // onD(layout, oldItem, newItem, placeholder, e, element) {
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
        className: "layout",
        layout: this.props.layout,
        compactType: this.props.compacttype,
        rowHeight: this.props.rowheight,
        width: this.props.width,
        cols: this.props.numcolumns,
        maxRows: this.props.maxrows,
        onLayoutChange: this.onLC // onDrag={this.onD}

      }, this.create_children());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsIm9uTEMiLCJiaW5kIiwiY3JlYXRlX2NoaWxkcmVuIiwiY2hpbGRyZW4iLCJwcm9wY2hpbGQiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiaW5jIiwibGVuZ3RoIiwiY2hpbGQiLCJsYXlvdXQiLCJpIiwiZGl2c3R5bGUiLCJwdXNoIiwibGMiLCJzZXRQcm9wcyIsImNvbXBhY3R0eXBlIiwicm93aGVpZ2h0Iiwid2lkdGgiLCJudW1jb2x1bW5zIiwibWF4cm93cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIngiLCJ5IiwidyIsImgiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JBQVosQ0FGZSxDQUdmOztBQUNBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkQsSUFBckIsK0JBQXZCO0FBSmU7QUFNbEI7Ozs7c0NBRWlCO0FBQ2QsVUFBTUUsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFVBQUksS0FBS0osS0FBTCxDQUFXSSxRQUFYLElBQXVCLElBQTNCLEVBQWlDO0FBQzdCLFlBQUlDLFNBQVMsR0FBRyxLQUFLTCxLQUFMLENBQVdJLFFBQTNCOztBQUNBLFlBQUlDLFNBQVMsQ0FBQ0MsV0FBVixJQUF5QkMsS0FB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QXBCLFVBQVEsRUFBRWMsaURBQVMsQ0FBQ087QUF0REgsQ0FBckIsQyIsImZpbGUiOiIxZTAyYWY5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcbi8vIGltcG9ydCAnXFxcXHJlYWN0LWdyaWQtbGF5b3V0XFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdcXFxccmVhY3QtcmVzaXphYmxlXFxcXGNzc1xcXFxzdHlsZXMuY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25MQyA9IHRoaXMub25MQy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMub25EID0gdGhpcy5vbkQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZV9jaGlsZHJlbiA9IHRoaXMuY3JlYXRlX2NoaWxkcmVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZV9jaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKHByb3BjaGlsZC5jb25zdHJ1Y3RvciAhPSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGNoaWxkID0gW3Byb3BjaGlsZF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgcHJvcGNoaWxkLmxlbmd0aDsgaW5jICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gPGRpdiBrZXk9e3RoaXMucHJvcHMubGF5b3V0W2luY10uaX0gc3R5bGU9e3RoaXMucHJvcHMuZGl2c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wY2hpbGRbaW5jXX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGlsZHJlblxyXG4gICAgfVxyXG5cclxuICAgIG9uTEMobGMpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcclxuICAgICAgICAgICAgbGF5b3V0OiBsY1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25EKGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsIGVsZW1lbnQpIHtcclxuICAgIC8vICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhY3QtZ3JpZC1sYXlvdXQnKVswXTtcclxuICAgIC8vICAgICBjb25zdCB0cmFuc2xhdGVYTWF4VmFsdWUgPSBncmlkLm9mZnNldFdpZHRoIC0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIC8vICAgICBjb25zdCB0cmFuc2xhdGVZTWF4VmFsdWUgPSBncmlkLm9mZnNldEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIC8vICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS50cmFuc2Zvcm0uc3BsaXQoJywnKTtcclxuICAgIC8vICAgICBsZXQgdHJhbnNsYXRlWCA9IHBhcnNlSW50KHRyYW5zbGF0ZVZhbHVlc1t0cmFuc2xhdGVWYWx1ZXMubGVuZ3RoIC0gMl0pO1xyXG4gICAgLy8gICAgIGxldCB0cmFuc2xhdGVZID0gcGFyc2VJbnQodHJhbnNsYXRlVmFsdWVzW3RyYW5zbGF0ZVZhbHVlcy5sZW5ndGggLSAxXS5zbGljZSgwLCAtMSkpO1xyXG5cclxuICAgIC8vICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZVhNYXhWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlWE1heFZhbHVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodHJhbnNsYXRlWCA8IDApIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlWU1heFZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVZTWF4VmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0cmFuc2xhdGVZIDwgMCkge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2xhdGVZID0gMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGF5b3V0J1xyXG4gICAgICAgICAgICBsYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxyXG4gICAgICAgICAgICBjb21wYWN0VHlwZT17dGhpcy5wcm9wcy5jb21wYWN0dHlwZX1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd2hlaWdodH1cclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGNvbHM9e3RoaXMucHJvcHMubnVtY29sdW1uc31cclxuICAgICAgICAgICAgbWF4Um93cz17dGhpcy5wcm9wcy5tYXhyb3dzfVxyXG4gICAgICAgICAgICBvbkxheW91dENoYW5nZT17dGhpcy5vbkxDfVxyXG4gICAgICAgICAgICAvLyBvbkRyYWc9e3RoaXMub25EfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVfY2hpbGRyZW4oKX1cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkRyYWdHcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBbJyAnXSxcclxuICAgIGRpdnN0eWxlOiB7fSxcclxuICAgIGxheW91dDogW3tpOiAnZGVmYXVsdCcsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDF9XSxcclxuICAgIGNvbXBhY3R0eXBlOiAnaG9yaXpvbnRhbCcsXHJcbiAgICByb3doZWlnaHQ6IDMwLFxyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBudW1jb2x1bW5zOiA2LFxyXG4gICAgbWF4cm93czogMVxyXG59O1xyXG5cclxuRHJhZ0dyaWQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2hpbGRyZW4gaW4gZWFjaCBwYXJ0IG9mIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0eWxlIG9mIHRoZSBEaXYgdGhhdCBjb250YWlucyB0aGUgY2hpbGRyZW5cclxuICAgICAqL1xyXG4gICAgZGl2c3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF5b3V0IG9mIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBhY3QgdHlwZVxyXG4gICAgICovXHJcbiAgICBjb21wYWN0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBoZWlnaHQgb2Ygb25lIHJvdyBpbiB0aGUgZ3JpZFxyXG4gICAgICovXHJcbiAgICByb3doZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdG90YWwgd2lkdGggb2YgdGhlIGdyaWRcclxuICAgICAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcclxuICAgICAqL1xyXG4gICAgbnVtY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgaW4gZ3JpZFxyXG4gICAgICovXHJcbiAgICBtYXhyb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==