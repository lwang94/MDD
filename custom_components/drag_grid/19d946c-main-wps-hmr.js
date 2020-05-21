webpackHotUpdatedrag_grid("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* eslint no-magic-numbers: 0 */



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    var layout = null;
    var children = null; // const numRows = 1;
    // const numColumns = 1;
    // const components = ['Voltage'];
    // for (let compy = 0; compy < numRows; compy += 1) {
    //     for (let compx = 0; compx < numColumns; compx += 1) {
    //         const increment = compx + compy * numRows;
    //         const comp = {
    //             i: `comp_${increment}`,
    //             x: compx,
    //             y: compy,
    //             w: 1,
    //             h: 1,
    //             isResizable: false
    //         };
    //         layout.push(comp);
    //         children.push(<div style={{borderStyle: 'solid'}}>{components[0]}</div>);
    //     }
    // };

    _this.state = {
      id: 'test',
      label: 'test',
      children: children
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange(e) {
      var newVal = e.target.value;
      var layout = [];
      var children = [];
      var numRows = 1;
      var numColumns = newVal;
      var components = ['Voltage'];

      for (var compy = 0; compy < numRows; compy += 1) {
        for (var compx = 0; compx < numColumns; compx += 1) {
          var increment = compx + compy * numRows;
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
            style: {
              borderStyle: 'solid'
            }
          }, components[0]));
        }
      }

      ;
      var newstate = {
        children: children,
        layout: layout
      };
      this.setProps(newstate);
    }
  }, {
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: null,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          borderStyle: 'solid'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DragGrid"], _extends({
        setProps: this.setProps
      }, this.state))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJzZXRQcm9wcyIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3VmFsIiwidGFyZ2V0IiwidmFsdWUiLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJuZXdzdGF0ZSIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFFQSxRQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFqQixDQUpVLENBS1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxRQUFFLEVBQUUsTUFESztBQUVUQyxXQUFLLEVBQUUsTUFGRTtBQUdUSCxjQUFRLEVBQUVBO0FBSEQsS0FBYjtBQU1BLFVBQUtJLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsK0JBQXBCO0FBL0JVO0FBZ0NiOzs7O2lDQUVZRSxDLEVBQUc7QUFDWixVQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUF4QjtBQUVBLFVBQU1YLE1BQU0sR0FBRyxFQUFmO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsVUFBTVcsT0FBTyxHQUFHLENBQWhCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHSixNQUFuQjtBQUNBLFVBQU1LLFVBQVUsR0FBRyxDQUFDLFNBQUQsQ0FBbkI7O0FBQ0EsV0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsT0FBNUIsRUFBcUNHLEtBQUssSUFBSSxDQUE5QyxFQUFpRDtBQUM3QyxhQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSCxVQUE1QixFQUF3Q0csS0FBSyxJQUFJLENBQWpELEVBQW9EO0FBQ2hELGNBQU1DLFNBQVMsR0FBR0QsS0FBSyxHQUFHRCxLQUFLLEdBQUdILE9BQWxDO0FBRUEsY0FBTU0sSUFBSSxHQUFHO0FBQ1RDLGFBQUMsaUJBQVVGLFNBQVYsQ0FEUTtBQUVURyxhQUFDLEVBQUVKLEtBRk07QUFHVEssYUFBQyxFQUFFTixLQUhNO0FBSVRPLGFBQUMsRUFBRSxDQUpNO0FBS1RDLGFBQUMsRUFBRSxDQUxNO0FBTVRDLHVCQUFXLEVBQUU7QUFOSixXQUFiO0FBUUF4QixnQkFBTSxDQUFDeUIsSUFBUCxDQUFZUCxJQUFaO0FBQ0FqQixrQkFBUSxDQUFDd0IsSUFBVCxlQUFjO0FBQUssaUJBQUssRUFBRTtBQUFDQyx5QkFBVyxFQUFFO0FBQWQ7QUFBWixhQUFxQ1osVUFBVSxDQUFDLENBQUQsQ0FBL0MsQ0FBZDtBQUNIO0FBQ0o7O0FBQUE7QUFDRCxVQUFNYSxRQUFRLEdBQUc7QUFDYjFCLGdCQUFRLEVBQUVBLFFBREc7QUFFYkQsY0FBTSxFQUFFQTtBQUZLLE9BQWpCO0FBSUEsV0FBS0ssUUFBTCxDQUFjc0IsUUFBZDtBQUNIOzs7NkJBRVFDLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCwwQkFDSSxxRkFDSTtBQUFPLGFBQUssRUFBRSxJQUFkO0FBQW9CLGdCQUFRLEVBQUUsS0FBS3JCO0FBQW5DLFFBREosZUFFSTtBQUFLLGFBQUssRUFBRTtBQUFDbUIscUJBQVcsRUFBRTtBQUFkO0FBQVosc0JBQ0ksMkRBQUMsNkNBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtyQjtBQURuQixTQUVRLEtBQUtILEtBRmIsRUFESixDQUZKLENBREo7QUFZSDs7OztFQXBGYTRCLCtDOztBQXVGSC9CLGtFQUFmLEUiLCJmaWxlIjoiMTlkOTQ2Yy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IERyYWdHcmlkIH0gZnJvbSAnLi4vbGliJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG51bGw7XHJcbiAgICAgICAgLy8gY29uc3QgbnVtUm93cyA9IDE7XHJcbiAgICAgICAgLy8gY29uc3QgbnVtQ29sdW1ucyA9IDE7XHJcbiAgICAgICAgLy8gY29uc3QgY29tcG9uZW50cyA9IFsnVm9sdGFnZSddO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGNvbXB5ID0gMDsgY29tcHkgPCBudW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCBudW1Db2x1bW5zOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSBjb21weCArIGNvbXB5ICogbnVtUm93cztcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjb21wID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGk6IGBjb21wXyR7aW5jcmVtZW50fWAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgeDogY29tcHgsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgeTogY29tcHksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdzogMSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBoOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgfTtcclxuICAgICAgICAvLyAgICAgICAgIGxheW91dC5wdXNoKGNvbXApO1xyXG4gICAgICAgIC8vICAgICAgICAgY2hpbGRyZW4ucHVzaCg8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT57Y29tcG9uZW50c1swXX08L2Rpdj4pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3Rlc3QnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBsYXlvdXQgPSBbXTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG51bVJvd3MgPSAxO1xyXG4gICAgICAgIGNvbnN0IG51bUNvbHVtbnMgPSBuZXdWYWw7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFsnVm9sdGFnZSddO1xyXG4gICAgICAgIGZvciAobGV0IGNvbXB5ID0gMDsgY29tcHkgPCBudW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCBudW1Db2x1bW5zOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSBjb21weCArIGNvbXB5ICogbnVtUm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGk6IGBjb21wXyR7aW5jcmVtZW50fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29tcHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29tcHksXHJcbiAgICAgICAgICAgICAgICAgICAgdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxheW91dC5wdXNoKGNvbXApO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCg8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT57Y29tcG9uZW50c1swXX08L2Rpdj4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBuZXdzdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IGxheW91dFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyhuZXdzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bnVsbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ0dyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxoMT57dGhpcy5zdGF0ZS5sYXlvdXRbMF0ueH08L2gxPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==