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
      children: children,
      layout: layout
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJzdGF0ZSIsImlkIiwibGFiZWwiLCJzZXRQcm9wcyIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3VmFsIiwidGFyZ2V0IiwidmFsdWUiLCJudW1Sb3dzIiwibnVtQ29sdW1ucyIsImNvbXBvbmVudHMiLCJjb21weSIsImNvbXB4IiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJuZXdzdGF0ZSIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFFQSxRQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFqQixDQUpVLENBS1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxRQUFFLEVBQUUsTUFESztBQUVUQyxXQUFLLEVBQUUsTUFGRTtBQUdUSCxjQUFRLEVBQUVBLFFBSEQ7QUFJVEQsWUFBTSxFQUFFQTtBQUpDLEtBQWI7QUFPQSxVQUFLSyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLCtCQUFwQjtBQWhDVTtBQWlDYjs7OztpQ0FFWUUsQyxFQUFHO0FBQ1osVUFBTUMsTUFBTSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBeEI7QUFFQSxVQUFNWCxNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFVBQU1XLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFVBQU1DLFVBQVUsR0FBR0osTUFBbkI7QUFDQSxVQUFNSyxVQUFVLEdBQUcsQ0FBQyxTQUFELENBQW5COztBQUNBLFdBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILE9BQTVCLEVBQXFDRyxLQUFLLElBQUksQ0FBOUMsRUFBaUQ7QUFDN0MsYUFBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsVUFBNUIsRUFBd0NHLEtBQUssSUFBSSxDQUFqRCxFQUFvRDtBQUNoRCxjQUFNQyxTQUFTLEdBQUdELEtBQUssR0FBR0QsS0FBSyxHQUFHSCxPQUFsQztBQUVBLGNBQU1NLElBQUksR0FBRztBQUNUQyxhQUFDLGlCQUFVRixTQUFWLENBRFE7QUFFVEcsYUFBQyxFQUFFSixLQUZNO0FBR1RLLGFBQUMsRUFBRU4sS0FITTtBQUlUTyxhQUFDLEVBQUUsQ0FKTTtBQUtUQyxhQUFDLEVBQUUsQ0FMTTtBQU1UQyx1QkFBVyxFQUFFO0FBTkosV0FBYjtBQVFBeEIsZ0JBQU0sQ0FBQ3lCLElBQVAsQ0FBWVAsSUFBWjtBQUNBakIsa0JBQVEsQ0FBQ3dCLElBQVQsZUFBYztBQUFLLGlCQUFLLEVBQUU7QUFBQ0MseUJBQVcsRUFBRTtBQUFkO0FBQVosYUFBcUNaLFVBQVUsQ0FBQyxDQUFELENBQS9DLENBQWQ7QUFDSDtBQUNKOztBQUFBO0FBQ0QsVUFBTWEsUUFBUSxHQUFHO0FBQ2IxQixnQkFBUSxFQUFFQSxRQURHO0FBRWJELGNBQU0sRUFBRUE7QUFGSyxPQUFqQjtBQUlBLFdBQUtLLFFBQUwsQ0FBY3NCLFFBQWQ7QUFDSDs7OzZCQUVRQyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0wsMEJBQ0kscUZBQ0k7QUFBTyxhQUFLLEVBQUUsSUFBZDtBQUFvQixnQkFBUSxFQUFFLEtBQUtyQjtBQUFuQyxRQURKLGVBRUk7QUFBSyxhQUFLLEVBQUU7QUFBQ21CLHFCQUFXLEVBQUU7QUFBZDtBQUFaLHNCQUNJLDJEQUFDLDZDQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLckI7QUFEbkIsU0FFUSxLQUFLSCxLQUZiLEVBREosQ0FGSixDQURKO0FBWUg7Ozs7RUFyRmE0QiwrQzs7QUF3RkgvQixrRUFBZixFIiwiZmlsZSI6IjdmMWQ3YWUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBEcmFnR3JpZCB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBudWxsO1xyXG4gICAgICAgIC8vIGNvbnN0IG51bVJvd3MgPSAxO1xyXG4gICAgICAgIC8vIGNvbnN0IG51bUNvbHVtbnMgPSAxO1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbXBvbmVudHMgPSBbJ1ZvbHRhZ2UnXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBjb21weSA9IDA7IGNvbXB5IDwgbnVtUm93czsgY29tcHkgKz0gMSkge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBjb21weCA9IDA7IGNvbXB4IDwgbnVtQ29sdW1uczsgY29tcHggKz0gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gY29tcHggKyBjb21weSAqIG51bVJvd3M7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcCA9IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpOiBgY29tcF8ke2luY3JlbWVudH1gLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHg6IGNvbXB4LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHk6IGNvbXB5LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHc6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaDogMSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpc1Jlc2l6YWJsZTogZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy8gICAgICAgICBsYXlvdXQucHVzaChjb21wKTtcclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkcmVuLnB1c2goPGRpdiBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+e2NvbXBvbmVudHNbMF19PC9kaXY+KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6ICd0ZXN0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICd0ZXN0JyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IGxheW91dFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XHJcbiAgICAgICAgY29uc3QgbnVtUm93cyA9IDE7XHJcbiAgICAgICAgY29uc3QgbnVtQ29sdW1ucyA9IG5ld1ZhbDtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gWydWb2x0YWdlJ107XHJcbiAgICAgICAgZm9yIChsZXQgY29tcHkgPSAwOyBjb21weSA8IG51bVJvd3M7IGNvbXB5ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcHggPSAwOyBjb21weCA8IG51bUNvbHVtbnM7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudCA9IGNvbXB4ICsgY29tcHkgKiBudW1Sb3dzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaTogYGNvbXBfJHtpbmNyZW1lbnR9YCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb21weCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjb21weSxcclxuICAgICAgICAgICAgICAgICAgICB3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNpemFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LnB1c2goY29tcCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319Pntjb21wb25lbnRzWzBdfTwvZGl2Pik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG5ld3N0YXRlID0ge1xyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIGxheW91dDogbGF5b3V0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFByb3BzKG5ld3N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtudWxsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGgxPnt0aGlzLnN0YXRlLmxheW91dFswXS54fTwvaDE+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9