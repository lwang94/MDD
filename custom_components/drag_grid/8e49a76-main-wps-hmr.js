webpackHotUpdatedrag_grid("main",{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.dropping {\n  visibility: hidden;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.react-resizable-hide > .react-resizable-handle {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-draggable/build/web/react-draggable.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-draggable/build/web/react-draggable.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! For license information please see react-draggable.min.js.LICENSE.txt */
!function(t,e){ true?module.exports=e(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(window,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)()},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){var r=n(7),o=r.default,a=r.DraggableCore;t.exports=o,t.exports.default=o,t.exports.DraggableCore=a},function(t,e,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return mt})),n.d(e,"DraggableCore",(function(){return nt}));var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(1),s=n.n(u),c=n(3),l=n.n(c);function f(t,e){for(var n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function p(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)}function d(t){return"number"==typeof t&&!isNaN(t)}function y(t){return parseInt(t,10)}function g(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var h=["Moz","Webkit","O","ms"];function b(t,e){return e?"".concat(e).concat(function(t){for(var e="",n=!0,r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var e=window.document.documentElement.style;if(t in e)return"";for(var n=0;n<h.length;n++)if(b(t,h[n])in e)return h[n];return""}();function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S="";function D(t,e){return S||(S=f(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return p(t[e])}))),!!p(t[S])&&t[S](e)}function x(t,e,n){var r=t;do{if(D(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function j(t,e,n,r){if(t){var o=w({capture:!0},r);t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}}function P(t,e,n,r){if(t){var o=w({capture:!0},r);t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}}function E(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=y(n.borderTopWidth),e+=y(n.borderBottomWidth)}function T(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=y(n.borderLeftWidth),e+=y(n.borderRightWidth)}function N(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=y(n.paddingTop),e-=y(n.paddingBottom)}function C(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=y(n.paddingLeft),e-=y(n.paddingRight)}function M(t,e,n){var r=t.x,o=t.y,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){var i="".concat("string"==typeof e.x?e.x:e.x+n),u="".concat("string"==typeof e.y?e.y:e.y+n);a="translate(".concat(i,", ").concat(u,")")+a}return a}function k(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0}function _(t){if(t){var e,n,r=t.getElementById("react-draggable-style-el");r||((r=t.createElement("style")).type="text/css",r.id="react-draggable-style-el",r.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",r.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(r)),t.body&&(e=t.body,n="react-draggable-transparent-selection",e.classList?e.classList.add(n):e.className.match(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)")))||(e.className+=" ".concat(n)))}}function R(t){var e,n;if(t)try{if(t.body&&(e=t.body,n="react-draggable-transparent-selection",e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)"),"g"),"")),t.selection)t.selection.empty();else{var r=(t.defaultView||window).getSelection();r&&"Caret"!==r.type&&r.removeAllRanges()}}catch(t){}}function X(t,e,n){return[Math.round(e/t[0])*t[0],Math.round(n/t[1])*t[1]]}function Y(t){return"both"===t.props.axis||"x"===t.props.axis}function A(t){return"both"===t.props.axis||"y"===t.props.axis}function L(t,e,n){var r="number"==typeof e?function(t,e){return t.targetTouches&&f(t.targetTouches,(function(t){return e===t.identifier}))||t.changedTouches&&f(t.changedTouches,(function(t){return e===t.identifier}))}(t,e):null;if("number"==typeof e&&!r)return null;var o=V(n);return function(t,e,n){var r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-r.left)/n,y:(t.clientY+e.scrollTop-r.top)/n}}(r||t,n.props.offsetParent||o.offsetParent||o.ownerDocument.body,n.props.scale)}function I(t,e,n){var r=t.state,o=!d(r.lastX),a=V(t);return o?{node:a,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:a,deltaX:e-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:e,y:n}}function U(t,e){var n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function V(t){var e=s.a.findDOMNode(t);if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?F(t):e}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Z={start:"touchstart",move:"touchmove",stop:"touchend"},tt={start:"mousedown",move:"mousemove",stop:"mouseup"},et=tt,nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(u,t);var e,n,r,a,i=(e=u,function(){var t,n=J(e);if($()){var r=J(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return z(this,t)});function u(){var t;q(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Q(F(t=i.call.apply(i,[this].concat(n))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),Q(F(t),"mounted",!1),Q(F(t),"handleDragStart",(function(e){if(t.props.onMouseDown(e),!t.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;var n=s.a.findDOMNode(F(t));if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var r=n.ownerDocument;if(!(t.props.disabled||!(e.target instanceof r.defaultView.Node)||t.props.handle&&!x(e.target,t.props.handle,n)||t.props.cancel&&x(e.target,t.props.cancel,n))){"touchstart"===e.type&&e.preventDefault();var o=k(e);t.setState({touchIdentifier:o});var a=L(e,o,F(t));if(null!=a){var i=a.x,u=a.y,c=I(F(t),i,u);t.props.onStart,!1!==t.props.onStart(e,c)&&!1!==t.mounted&&(t.props.enableUserSelectHack&&_(r),t.setState({dragging:!0,lastX:i,lastY:u}),j(r,et.move,t.handleDrag),j(r,et.stop,t.handleDragStop))}}})),Q(F(t),"handleDrag",(function(e){var n=L(e,t.state.touchIdentifier,F(t));if(null!=n){var r=n.x,o=n.y;if(Array.isArray(t.props.grid)){var a=r-t.state.lastX,i=o-t.state.lastY,u=B(X(t.props.grid,a,i),2);if(a=u[0],i=u[1],!a&&!i)return;r=t.state.lastX+a,o=t.state.lastY+i}var s=I(F(t),r,o);if(!1!==t.props.onDrag(e,s)&&!1!==t.mounted)t.setState({lastX:r,lastY:o});else try{t.handleDragStop(new MouseEvent("mouseup"))}catch(e){var c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.handleDragStop(c)}}})),Q(F(t),"handleDragStop",(function(e){if(t.state.dragging){var n=L(e,t.state.touchIdentifier,F(t));if(null!=n){var r=n.x,o=n.y,a=I(F(t),r,o);if(!1===t.props.onStop(e,a)||!1===t.mounted)return!1;var i=s.a.findDOMNode(F(t));i&&t.props.enableUserSelectHack&&R(i.ownerDocument),t.setState({dragging:!1,lastX:NaN,lastY:NaN}),i&&(P(i.ownerDocument,et.move,t.handleDrag),P(i.ownerDocument,et.stop,t.handleDragStop))}}})),Q(F(t),"onMouseDown",(function(e){return et=tt,t.handleDragStart(e)})),Q(F(t),"onMouseUp",(function(e){return et=tt,t.handleDragStop(e)})),Q(F(t),"onTouchStart",(function(e){return et=Z,t.handleDragStart(e)})),Q(F(t),"onTouchEnd",(function(e){return et=Z,t.handleDragStop(e)})),t}return n=u,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var t=s.a.findDOMNode(this);t&&j(t,Z.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var t=s.a.findDOMNode(this);if(t){var e=t.ownerDocument;P(e,tt.move,this.handleDrag),P(e,Z.move,this.handleDrag),P(e,tt.stop,this.handleDragStop),P(e,Z.stop,this.handleDragStop),P(t,Z.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&R(e)}}},{key:"render",value:function(){return o.a.cloneElement(o.a.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&G(n.prototype,r),a&&G(n,a),u}(o.a.Component);function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(){return(ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function at(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function it(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ut(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){bt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ft(t,e,n){return e&&lt(t.prototype,e),n&&lt(t,n),t}function pt(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?dt(t):e}function dt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function yt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Q(nt,"displayName","DraggableCore"),Q(nt,"propTypes",{allowAnyClick:i.a.bool,disabled:i.a.bool,enableUserSelectHack:i.a.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:i.a.arrayOf(i.a.number),handle:i.a.string,cancel:i.a.string,onStart:i.a.func,onDrag:i.a.func,onStop:i.a.func,onMouseDown:i.a.func,scale:i.a.number,className:g,style:g,transform:g}),Q(nt,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});var mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(r,t);var e,n=(e=r,function(){var t,n=gt(e);if(yt()){var r=gt(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return pt(this,t)});function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),bt(dt(e=n.call(this,t)),"onDragStart",(function(t,n){if(!1===e.props.onStart(t,U(dt(e),n)))return!1;e.setState({dragging:!0,dragged:!0})})),bt(dt(e),"onDrag",(function(t,n){if(!e.state.dragging)return!1;var r=U(dt(e),n),o={x:r.x,y:r.y};if(e.props.bounds){var a=o.x,i=o.y;o.x+=e.state.slackX,o.y+=e.state.slackY;var u=it(function(t,e,n){if(!t.props.bounds)return[e,n];var r=t.props.bounds;r="string"==typeof r?r:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(r);var o=V(t);if("string"==typeof r){var a,i=o.ownerDocument,u=i.defaultView;if(!((a="parent"===r?o.parentNode:i.querySelector(r))instanceof u.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var s=u.getComputedStyle(o),c=u.getComputedStyle(a);r={left:-o.offsetLeft+y(c.paddingLeft)+y(s.marginLeft),top:-o.offsetTop+y(c.paddingTop)+y(s.marginTop),right:C(a)-T(o)-o.offsetLeft+y(c.paddingRight)-y(s.marginRight),bottom:N(a)-E(o)-o.offsetTop+y(c.paddingBottom)-y(s.marginBottom)}}return d(r.right)&&(e=Math.min(e,r.right)),d(r.bottom)&&(n=Math.min(n,r.bottom)),d(r.left)&&(e=Math.max(e,r.left)),d(r.top)&&(n=Math.max(n,r.top)),[e,n]}(dt(e),o.x,o.y),2),s=u[0],c=u[1];o.x=s,o.y=c,o.slackX=e.state.slackX+(a-o.x),o.slackY=e.state.slackY+(i-o.y),r.x=o.x,r.y=o.y,r.deltaX=o.x-e.state.x,r.deltaY=o.y-e.state.y}if(!1===e.props.onDrag(t,r))return!1;e.setState(o)})),bt(dt(e),"onDragStop",(function(t,n){if(!e.state.dragging)return!1;if(!1===e.props.onStop(t,U(dt(e),n)))return!1;var r={dragging:!1,slackX:0,slackY:0};if(Boolean(e.props.position)){var o=e.props.position,a=o.x,i=o.y;r.x=a,r.y=i}e.setState(r)})),e.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:ct({},t.position),slackX:0,slackY:0,isElementSVG:!1},!t.position||t.onDrag||t.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),e}return ft(r,null,[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.position,r=e.prevPropsPosition;return!n||r&&n.x===r.x&&n.y===r.y?null:{x:n.x,y:n.y,prevPropsPosition:ct({},n)}}}]),ft(r,[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&s.a.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var t,e=this.props,n=(e.axis,e.bounds,e.children),r=e.defaultPosition,a=e.defaultClassName,i=e.defaultClassNameDragging,u=e.defaultClassNameDragged,s=e.position,c=e.positionOffset,f=(e.scale,at(e,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),p={},d=null,y=!Boolean(s)||this.state.dragging,g=s||r,h={x:Y(this)&&y?this.state.x:g.x,y:A(this)&&y?this.state.y:g.y};this.state.isElementSVG?d=function(t,e){return M(t,e,"")}(h,c):p=function(t,e){var n=M(t,e,"px");return O({},b("transform",m),n)}(h,c);var v=l()(n.props.className||"",a,(bt(t={},i,this.state.dragging),bt(t,u,this.state.dragged),t));return o.a.createElement(nt,ot({},f,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.a.cloneElement(o.a.Children.only(n),{className:v,style:ct({},n.props.style,{},p),transform:d}))}}]),r}(o.a.Component);bt(mt,"displayName","Draggable"),bt(mt,"propTypes",ct({},nt.propTypes,{axis:i.a.oneOf(["both","x","y","none"]),bounds:i.a.oneOfType([i.a.shape({left:i.a.number,right:i.a.number,top:i.a.number,bottom:i.a.number}),i.a.string,i.a.oneOf([!1])]),defaultClassName:i.a.string,defaultClassNameDragging:i.a.string,defaultClassNameDragged:i.a.string,defaultPosition:i.a.shape({x:i.a.number,y:i.a.number}),positionOffset:i.a.shape({x:i.a.oneOfType([i.a.number,i.a.string]),y:i.a.oneOfType([i.a.number,i.a.string])}),position:i.a.shape({x:i.a.number,y:i.a.number}),className:g,style:g,transform:g})),bt(mt,"defaultProps",ct({},nt.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))}])}));
//# sourceMappingURL=react-draggable.min.js.map

/***/ }),

/***/ "./node_modules/react-grid-layout/build/GridItem.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-grid-layout/build/GridItem.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDraggable = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/web/react-draggable.min.js");

var _reactResizable = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");

var _calculateUtils = __webpack_require__(/*! ./calculateUtils */ "./node_modules/react-grid-layout/build/calculateUtils.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An individual item within a ReactGridLayout.
 */
var GridItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridItem, _React$Component);

  function GridItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      resizing: null,
      dragging: null,
      className: ""
    });

    _defineProperty(_assertThisInitialized(_this), "currentNode", void 0);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e
    /*: Event*/
    , _ref) {
      var node = _ref.node;
      if (!_this.props.onDragStart) return;
      var newPosition
      /*: PartialPosition*/
      = {
        top: 0,
        left: 0
      }; // TODO: this wont work on nested parents

      var offsetParent = node.offsetParent;
      if (!offsetParent) return;
      var parentRect = offsetParent.getBoundingClientRect();
      var clientRect = node.getBoundingClientRect();
      var cLeft = clientRect.left / _this.props.transformScale;
      var pLeft = parentRect.left / _this.props.transformScale;
      var cTop = clientRect.top / _this.props.transformScale;
      var pTop = parentRect.top / _this.props.transformScale;
      newPosition.left = cLeft - pLeft + offsetParent.scrollLeft;
      newPosition.top = cTop - pTop + offsetParent.scrollTop;

      _this.setState({
        dragging: newPosition
      });

      var _calcXY = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
          x = _calcXY.x,
          y = _calcXY.y;

      return _this.props.onDragStart && _this.props.onDragStart.call(_assertThisInitialized(_this), _this.props.i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e
    /*: Event*/
    , _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;
      var _this$props = _this.props,
          onDrag = _this$props.onDrag,
          transformScale = _this$props.transformScale;
      if (!onDrag) return;
      deltaX /= transformScale;
      deltaY /= transformScale;
      var newPosition
      /*: PartialPosition*/
      = {
        top: 0,
        left: 0
      };
      if (!_this.state.dragging) throw new Error("onDrag called before onDragStart.");
      newPosition.left = _this.state.dragging.left + deltaX;
      newPosition.top = _this.state.dragging.top + deltaY;

      _this.setState({
        dragging: newPosition
      });

      var _calcXY2 = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
          x = _calcXY2.x,
          y = _calcXY2.y;

      return onDrag && onDrag.call(_assertThisInitialized(_this), _this.props.i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e
    /*: Event*/
    , _ref3) {
      var node = _ref3.node;
      if (!_this.props.onDragStop) return;
      var newPosition
      /*: PartialPosition*/
      = {
        top: 0,
        left: 0
      };
      if (!_this.state.dragging) throw new Error("onDragEnd called before onDragStart.");
      newPosition.left = _this.state.dragging.left;
      newPosition.top = _this.state.dragging.top;

      _this.setState({
        dragging: null
      });

      var _calcXY3 = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
          x = _calcXY3.x,
          y = _calcXY3.y;

      return _this.props.onDragStop && _this.props.onDragStop.call(_assertThisInitialized(_this), _this.props.i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStop", function (e
    /*: Event*/
    , callbackData
    /*: { node: HTMLElement, size: Position }*/
    ) {
      _this.onResizeHandler(e, callbackData, "onResizeStop");
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStart", function (e
    /*: Event*/
    , callbackData
    /*: { node: HTMLElement, size: Position }*/
    ) {
      _this.onResizeHandler(e, callbackData, "onResizeStart");
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (e
    /*: Event*/
    , callbackData
    /*: { node: HTMLElement, size: Position }*/
    ) {
      _this.onResizeHandler(e, callbackData, "onResize");
    });

    return _this;
  }

  _createClass(GridItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    /*: Props*/
    , nextState
    /*: State*/
    ) {
      // We can't deeply compare children. If the developer memoizes them, we can
      // use this optimization.
      if (this.props.children !== nextProps.children) return true;
      if (this.props.droppingPosition !== nextProps.droppingPosition) return true; // TODO memoize these calculations so they don't take so long?

      var oldPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state);
      var newPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(nextProps), nextProps.x, nextProps.y, nextProps.w, nextProps.h, nextState);
      return !(0, _utils.fastPositionEqual)(oldPosition, newPosition) || this.props.useCSSTransforms !== nextProps.useCSSTransforms;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.moveDroppingItem({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props*/
    ) {
      this.moveDroppingItem(prevProps);
    } // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.

  }, {
    key: "moveDroppingItem",
    value: function moveDroppingItem(prevProps
    /*: Props*/
    ) {
      var droppingPosition = this.props.droppingPosition;
      if (!droppingPosition) return;
      var prevDroppingPosition = prevProps.droppingPosition || {
        left: 0,
        top: 0
      };
      var dragging = this.state.dragging;

      if (!this.currentNode) {
        // eslint-disable-next-line react/no-find-dom-node
        this.currentNode = ((_reactDom.default.findDOMNode(this)
        /*: any*/
        )
        /*: HTMLElement*/
        );
      }

      var shouldDrag = dragging && droppingPosition.left !== prevDroppingPosition.left || droppingPosition.top !== prevDroppingPosition.top;

      if (!dragging) {
        this.onDragStart(droppingPosition.e, {
          node: this.currentNode,
          deltaX: droppingPosition.left,
          deltaY: droppingPosition.top
        });
      } else if (shouldDrag) {
        var deltaX = droppingPosition.left - dragging.left;
        var deltaY = droppingPosition.top - dragging.top;
        this.onDrag(droppingPosition.e, {
          node: this.currentNode,
          deltaX: deltaX,
          deltaY: deltaY
        });
      }
    }
  }, {
    key: "getPositionParams",
    value: function getPositionParams()
    /*: PositionParams*/
    {
      var props
      /*: Props*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return {
        cols: props.cols,
        containerPadding: props.containerPadding,
        containerWidth: props.containerWidth,
        margin: props.margin,
        maxRows: props.maxRows,
        rowHeight: props.rowHeight
      };
    }
    /**
     * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
     * well when server rendering, and the only way to do that properly is to use percentage width/left because
     * we don't know exactly what the browser viewport is.
     * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
     * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
     *
     * @param  {Object} pos Position object with width, height, left, top.
     * @return {Object}     Style object.
     */

  }, {
    key: "createStyle",
    value: function createStyle(pos
    /*: Position*/
    )
    /*: { [key: string]: ?string }*/
    {
      var _this$props2 = this.props,
          usePercentages = _this$props2.usePercentages,
          containerWidth = _this$props2.containerWidth,
          useCSSTransforms = _this$props2.useCSSTransforms;
      var style; // CSS Transforms support (default)

      if (useCSSTransforms) {
        style = (0, _utils.setTransform)(pos);
      } else {
        // top,left (slow)
        style = (0, _utils.setTopLeft)(pos); // This is used for server rendering.

        if (usePercentages) {
          style.left = (0, _utils.perc)(pos.left / containerWidth);
          style.width = (0, _utils.perc)(pos.width / containerWidth);
        }
      }

      return style;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */

  }, {
    key: "mixinDraggable",
    value: function mixinDraggable(child
    /*: ReactElement<any>*/
    , isDraggable
    /*: boolean*/
    )
    /*: ReactElement<any>*/
    {
      return _react.default.createElement(_reactDraggable.DraggableCore, {
        disabled: !isDraggable,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale
      }, child);
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */

  }, {
    key: "mixinResizable",
    value: function mixinResizable(child
    /*: ReactElement<any>*/
    , position
    /*: Position*/
    , isResizable
    /*: boolean*/
    )
    /*: ReactElement<any>*/
    {
      var _this$props3 = this.props,
          cols = _this$props3.cols,
          x = _this$props3.x,
          minW = _this$props3.minW,
          minH = _this$props3.minH,
          maxW = _this$props3.maxW,
          maxH = _this$props3.maxH,
          transformScale = _this$props3.transformScale;
      var positionParams = this.getPositionParams(); // This is the max possible width - doesn't go to infinity because of the width of the window

      var maxWidth = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, cols - x, 0).width; // Calculate min/max constraints using our min & maxes

      var mins = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, minW, minH);
      var maxes = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, maxW, maxH);
      var minConstraints = [mins.width, mins.height];
      var maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
      return _react.default.createElement(_reactResizable.Resizable, {
        draggableOpts: {
          disabled: !isResizable
        },
        className: isResizable ? undefined : "react-resizable-hide",
        width: position.width,
        height: position.height,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        onResizeStop: this.onResizeStop,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        transformScale: transformScale
      }, child);
    }
    /**
     * onDragStart event handler
     * @param  {Event}  e             event data
     * @param  {Object} callbackData  an object with node, delta and position information
     */

  }, {
    key: "onResizeHandler",

    /**
     * Wrapper around drag events to provide more useful data.
     * All drag events call the function with the given handler name,
     * with the signature (index, x, y).
     *
     * @param  {String} handlerName Handler name to wrap.
     * @return {Function}           Handler function.
     */
    value: function onResizeHandler(e
    /*: Event*/
    , _ref4, handlerName
    /*: string*/
    ) {
      var node = _ref4.node,
          size = _ref4.size;
      var handler = this.props[handlerName];
      if (!handler) return;
      var _this$props4 = this.props,
          cols = _this$props4.cols,
          x = _this$props4.x,
          y = _this$props4.y,
          i = _this$props4.i,
          maxW = _this$props4.maxW,
          minW = _this$props4.minW,
          maxH = _this$props4.maxH,
          minH = _this$props4.minH; // Get new XY

      var _calcWH = (0, _calculateUtils.calcWH)(this.getPositionParams(), size.width, size.height, x, y),
          w = _calcWH.w,
          h = _calcWH.h; // Cap w at numCols


      w = Math.min(w, cols - x); // Ensure w is at least 1

      w = Math.max(w, 1); // Min/max capping

      w = Math.max(Math.min(w, maxW), minW);
      h = Math.max(Math.min(h, maxH), minH);
      this.setState({
        resizing: handlerName === "onResizeStop" ? null : size
      });
      handler.call(this, i, w, h, {
        e: e,
        node: node,
        size: size
      });
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactNode*/
    {
      var _this$props5 = this.props,
          x = _this$props5.x,
          y = _this$props5.y,
          w = _this$props5.w,
          h = _this$props5.h,
          isDraggable = _this$props5.isDraggable,
          isResizable = _this$props5.isResizable,
          droppingPosition = _this$props5.droppingPosition,
          useCSSTransforms = _this$props5.useCSSTransforms;
      var pos = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(), x, y, w, h, this.state);

      var child = _react.default.Children.only(this.props.children); // Create the child element. We clone the existing element but modify its className and style.


      var newChild = _react.default.cloneElement(child, {
        className: (0, _classnames.default)("react-grid-item", child.props.className, this.props.className, {
          static: this.props.static,
          resizing: Boolean(this.state.resizing),
          "react-draggable": isDraggable,
          "react-draggable-dragging": Boolean(this.state.dragging),
          dropping: Boolean(droppingPosition),
          cssTransforms: useCSSTransforms
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: _objectSpread({}, this.props.style, {}, child.props.style, {}, this.createStyle(pos))
      }); // Resizable support. This is usually on but the user can toggle it off.


      newChild = this.mixinResizable(newChild, pos, isResizable); // Draggable support. This is always on, except for with placeholders.

      newChild = this.mixinDraggable(newChild, isDraggable);
      return newChild;
    }
  }]);

  return GridItem;
}(_react.default.Component);

exports.default = GridItem;

_defineProperty(GridItem, "propTypes", {
  // Children must be only a single element
  children: _propTypes.default.element,
  // General grid attributes
  cols: _propTypes.default.number.isRequired,
  containerWidth: _propTypes.default.number.isRequired,
  rowHeight: _propTypes.default.number.isRequired,
  margin: _propTypes.default.array.isRequired,
  maxRows: _propTypes.default.number.isRequired,
  containerPadding: _propTypes.default.array.isRequired,
  // These are all in grid units
  x: _propTypes.default.number.isRequired,
  y: _propTypes.default.number.isRequired,
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  // All optional
  minW: function minW(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minWidth not Number");
    if (value > props.w || value > props.maxW) return new Error("minWidth larger than item width/maxWidth");
  },
  maxW: function maxW(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxWidth not Number");
    if (value < props.w || value < props.minW) return new Error("maxWidth smaller than item width/minWidth");
  },
  minH: function minH(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minHeight not Number");
    if (value > props.h || value > props.maxH) return new Error("minHeight larger than item height/maxHeight");
  },
  maxH: function maxH(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxHeight not Number");
    if (value < props.h || value < props.minH) return new Error("maxHeight smaller than item height/minHeight");
  },
  // ID is nice to have for callbacks
  i: _propTypes.default.string.isRequired,
  // Functions
  onDragStop: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDrag: _propTypes.default.func,
  onResizeStop: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onResize: _propTypes.default.func,
  // Flags
  isDraggable: _propTypes.default.bool.isRequired,
  isResizable: _propTypes.default.bool.isRequired,
  static: _propTypes.default.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _propTypes.default.bool.isRequired,
  transformScale: _propTypes.default.number,
  // Others
  className: _propTypes.default.string,
  // Selector for draggable handle
  handle: _propTypes.default.string,
  // Selector for draggable cancel (see react-draggable)
  cancel: _propTypes.default.string,
  // Current position of a dropping element
  droppingPosition: _propTypes.default.shape({
    e: _propTypes.default.object.isRequired,
    left: _propTypes.default.number.isRequired,
    top: _propTypes.default.number.isRequired
  })
});

_defineProperty(GridItem, "defaultProps", {
  className: "",
  cancel: "",
  handle: "",
  minH: 1,
  minW: 1,
  maxH: Infinity,
  maxW: Infinity,
  transformScale: 1
});

/***/ }),

/***/ "./node_modules/react-grid-layout/build/ReactGridLayout.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/ReactGridLayout.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");

var _calculateUtils = __webpack_require__(/*! ./calculateUtils */ "./node_modules/react-grid-layout/build/calculateUtils.js");

var _GridItem = _interopRequireDefault(__webpack_require__(/*! ./GridItem */ "./node_modules/react-grid-layout/build/GridItem.js"));

var _ReactGridLayoutPropTypes = _interopRequireDefault(__webpack_require__(/*! ./ReactGridLayoutPropTypes */ "./node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// End Types
var layoutClassName = "react-grid-layout";
var isFirefox = false; // Try...catch will protect from navigator not existing (e.g. node) or a bad implementation of navigator

try {
  isFirefox = /firefox/i.test(navigator.userAgent);
} catch (e) {}
/* Ignore */

/**
 * A reactive, fluid grid layout with draggable, resizable components.
 */


var ReactGridLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactGridLayout, _React$Component);

  // TODO publish internal ReactClass displayName transform
  // Refactored to another module to make way for preval
  function ReactGridLayout(props
  /*: Props*/
  , context
  /*: any*/
  )
  /*: void*/
  {
    var _this;

    _classCallCheck(this, ReactGridLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactGridLayout).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeDrag: null,
      layout: (0, _utils.synchronizeLayoutWithChildren)(_this.props.layout, _this.props.children, _this.props.cols, // Legacy support for verticalCompact: false
      (0, _utils.compactType)(_this.props)),
      mounted: false,
      oldDragItem: null,
      oldLayout: null,
      oldResizeItem: null,
      droppingDOMNode: null,
      children: []
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnterCounter", 0);

    _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e
    /*: DragOverEvent*/
    ) {
      // we should ignore events from layout's children in Firefox
      // to avoid unpredictable jumping of a dropping placeholder
      // FIXME remove this hack
      if (isFirefox && e.nativeEvent.target.className.indexOf(layoutClassName) === -1) {
        return false;
      }

      var _this$props = _this.props,
          droppingItem = _this$props.droppingItem,
          margin = _this$props.margin,
          cols = _this$props.cols,
          rowHeight = _this$props.rowHeight,
          maxRows = _this$props.maxRows,
          width = _this$props.width,
          containerPadding = _this$props.containerPadding;
      var layout = _this.state.layout; // This is relative to the DOM element that this event fired for.

      var _e$nativeEvent = e.nativeEvent,
          layerX = _e$nativeEvent.layerX,
          layerY = _e$nativeEvent.layerY;
      var droppingPosition = {
        left: layerX,
        top: layerY,
        e: e
      };

      if (!_this.state.droppingDOMNode) {
        var positionParams
        /*: PositionParams*/
        = {
          cols: cols,
          margin: margin,
          maxRows: maxRows,
          rowHeight: rowHeight,
          containerWidth: width,
          containerPadding: containerPadding || margin
        };
        var calculatedPosition = (0, _calculateUtils.calcXY)(positionParams, layerY, layerX, droppingItem.w, droppingItem.h);

        _this.setState({
          droppingDOMNode: _react.default.createElement("div", {
            key: droppingItem.i
          }),
          droppingPosition: droppingPosition,
          layout: [].concat(_toConsumableArray(layout), [_objectSpread({}, droppingItem, {
            x: calculatedPosition.x,
            y: calculatedPosition.y,
            static: false,
            isDraggable: true
          })])
        });
      } else if (_this.state.droppingPosition) {
        var _this$state$droppingP = _this.state.droppingPosition,
            left = _this$state$droppingP.left,
            top = _this$state$droppingP.top;
        var shouldUpdatePosition = left != layerX || top != layerY;

        if (shouldUpdatePosition) {
          _this.setState({
            droppingPosition: droppingPosition
          });
        }
      }

      e.stopPropagation();
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "removeDroppingPlaceholder", function () {
      var _this$props2 = _this.props,
          droppingItem = _this$props2.droppingItem,
          cols = _this$props2.cols;
      var layout = _this.state.layout;
      var newLayout = (0, _utils.compact)(layout.filter(function (l) {
        return l.i !== droppingItem.i;
      }), (0, _utils.compactType)(_this.props), cols);

      _this.setState({
        layout: newLayout,
        droppingDOMNode: null,
        activeDrag: null,
        droppingPosition: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function () {
      _this.dragEnterCounter--; // onDragLeave can be triggered on each layout's child.
      // But we know that count of dragEnter and dragLeave events
      // will be balanced after leaving the layout's container
      // so we can increase and decrease count of dragEnter and
      // when it'll be equal to 0 we'll remove the placeholder

      if (_this.dragEnterCounter === 0) {
        _this.removeDroppingPlaceholder();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function () {
      _this.dragEnterCounter++;
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e
    /*: Event*/
    ) {
      var droppingItem = _this.props.droppingItem;
      var layout = _this.state.layout;

      var _ref = layout.find(function (l) {
        return l.i === droppingItem.i;
      }) || {},
          x = _ref.x,
          y = _ref.y,
          w = _ref.w,
          h = _ref.h; // reset gragEnter counter on drop


      _this.dragEnterCounter = 0;

      _this.removeDroppingPlaceholder();

      _this.props.onDrop({
        x: x,
        y: y,
        w: w,
        h: h,
        e: e
      });
    });

    (0, _utils.autoBindHandlers)(_assertThisInitialized(_this), ["onDragStart", "onDrag", "onDragStop", "onResizeStart", "onResize", "onResizeStop"]);
    return _this;
  }

  _createClass(ReactGridLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      }); // Possibly call back with layout on mount. This should be done after correcting the layout width
      // to ensure we don't rerender with the wrong width.

      this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    /*: Props*/
    , nextState
    /*: State*/
    ) {
      return (// NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== nextProps.children || !(0, _utils.fastRGLPropsEqual)(this.props, nextProps, _lodash.default) || this.state.activeDrag !== nextState.activeDrag || this.state.droppingPosition !== nextState.droppingPosition
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props*/
    , prevState
    /*: State*/
    ) {
      if (!this.state.activeDrag) {
        var newLayout = this.state.layout;
        var oldLayout = prevState.layout;
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */

  }, {
    key: "containerHeight",
    value: function containerHeight() {
      if (!this.props.autoSize) return;
      var nbRow = (0, _utils.bottom)(this.state.layout);
      var containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
    }
    /**
     * When dragging starts
     * @param {String} i Id of the child
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onDragStart",
    value: function onDragStart(i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref2) {
      var e = _ref2.e,
          node = _ref2.node;
      var layout = this.state.layout;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return;
      this.setState({
        oldDragItem: (0, _utils.cloneLayoutItem)(l),
        oldLayout: this.state.layout
      });
      return this.props.onDragStart(layout, l, l, null, e, node);
    }
    /**
     * Each drag movement create a new dragelement and move the element to the dragged location
     * @param {String} i Id of the child
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onDrag",
    value: function onDrag(i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref3) {
      var e = _ref3.e,
          node = _ref3.node;
      var oldDragItem = this.state.oldDragItem;
      var layout = this.state.layout;
      var cols = this.props.cols;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; // Create placeholder (display only)

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        placeholder: true,
        i: i
      }; // Move the element to the dragged location.

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, this.props.preventCollision, (0, _utils.compactType)(this.props), cols);
      this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);
      this.setState({
        layout: (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
        activeDrag: placeholder
      });
    }
    /**
     * When dragging stops, figure out which position the element is closest to and update its x and y.
     * @param  {String} i Index of the child.
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onDragStop",
    value: function onDragStop(i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref4) {
      var e = _ref4.e,
          node = _ref4.node;
      if (!this.state.activeDrag) return;
      var oldDragItem = this.state.oldDragItem;
      var layout = this.state.layout;
      var _this$props3 = this.props,
          cols = _this$props3.cols,
          preventCollision = _this$props3.preventCollision;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; // Move the element here

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(this.props), cols);
      this.props.onDragStop(layout, oldDragItem, l, null, e, node); // Set state

      var newLayout = (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
      var oldLayout = this.state.oldLayout;
      this.setState({
        activeDrag: null,
        layout: newLayout,
        oldDragItem: null,
        oldLayout: null
      });
      this.onLayoutMaybeChanged(newLayout, oldLayout);
    }
  }, {
    key: "onLayoutMaybeChanged",
    value: function onLayoutMaybeChanged(newLayout
    /*: Layout*/
    , oldLayout
    /*: ?Layout*/
    ) {
      if (!oldLayout) oldLayout = this.state.layout;

      if (!(0, _lodash.default)(oldLayout, newLayout)) {
        this.props.onLayoutChange(newLayout);
      }
    }
  }, {
    key: "onResizeStart",
    value: function onResizeStart(i
    /*: string*/
    , w
    /*: number*/
    , h
    /*: number*/
    , _ref5) {
      var e = _ref5.e,
          node = _ref5.node;
      var layout = this.state.layout;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return;
      this.setState({
        oldResizeItem: (0, _utils.cloneLayoutItem)(l),
        oldLayout: this.state.layout
      });
      this.props.onResizeStart(layout, l, l, null, e, node);
    }
  }, {
    key: "onResize",
    value: function onResize(i
    /*: string*/
    , w
    /*: number*/
    , h
    /*: number*/
    , _ref6) {
      var e = _ref6.e,
          node = _ref6.node;
      var _this$state = this.state,
          layout = _this$state.layout,
          oldResizeItem = _this$state.oldResizeItem;
      var _this$props4 = this.props,
          cols = _this$props4.cols,
          preventCollision = _this$props4.preventCollision;
      var l
      /*: ?LayoutItem*/
      = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; // Something like quad tree should be used
      // to find collisions faster

      var hasCollisions;

      if (preventCollision) {
        var collisions = (0, _utils.getAllCollisions)(layout, _objectSpread({}, l, {
          w: w,
          h: h
        })).filter(function (layoutItem) {
          return layoutItem.i !== l.i;
        });
        hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

        if (hasCollisions) {
          // adjust w && h to maximum allowed space
          var leastX = Infinity,
              leastY = Infinity;
          collisions.forEach(function (layoutItem) {
            if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
          });
          if (Number.isFinite(leastX)) l.w = leastX - l.x;
          if (Number.isFinite(leastY)) l.h = leastY - l.y;
        }
      }

      if (!hasCollisions) {
        // Set new width and height.
        l.w = w;
        l.h = h;
      } // Create placeholder element (display only)


      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        static: true,
        i: i
      };
      this.props.onResize(layout, oldResizeItem, l, placeholder, e, node); // Re-compact the layout and set the drag placeholder.

      this.setState({
        layout: (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
        activeDrag: placeholder
      });
    }
  }, {
    key: "onResizeStop",
    value: function onResizeStop(i
    /*: string*/
    , w
    /*: number*/
    , h
    /*: number*/
    , _ref7) {
      var e = _ref7.e,
          node = _ref7.node;
      var _this$state2 = this.state,
          layout = _this$state2.layout,
          oldResizeItem = _this$state2.oldResizeItem;
      var cols = this.props.cols;
      var l = (0, _utils.getLayoutItem)(layout, i);
      this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); // Set state

      var newLayout = (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
      var oldLayout = this.state.oldLayout;
      this.setState({
        activeDrag: null,
        layout: newLayout,
        oldResizeItem: null,
        oldLayout: null
      });
      this.onLayoutMaybeChanged(newLayout, oldLayout);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */

  }, {
    key: "placeholder",
    value: function placeholder()
    /*: ?ReactElement<any>*/
    {
      var activeDrag = this.state.activeDrag;
      if (!activeDrag) return null;
      var _this$props5 = this.props,
          width = _this$props5.width,
          cols = _this$props5.cols,
          margin = _this$props5.margin,
          containerPadding = _this$props5.containerPadding,
          rowHeight = _this$props5.rowHeight,
          maxRows = _this$props5.maxRows,
          useCSSTransforms = _this$props5.useCSSTransforms,
          transformScale = _this$props5.transformScale; // {...this.state.activeDrag} is pretty slow, actually

      return _react.default.createElement(_GridItem.default, {
        w: activeDrag.w,
        h: activeDrag.h,
        x: activeDrag.x,
        y: activeDrag.y,
        i: activeDrag.i,
        className: "react-grid-placeholder",
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        isDraggable: false,
        isResizable: false,
        useCSSTransforms: useCSSTransforms,
        transformScale: transformScale
      }, _react.default.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */

  }, {
    key: "processGridItem",
    value: function processGridItem(child
    /*: ReactElement<any>*/
    , isDroppingItem
    /*: boolean*/
    )
    /*: ?ReactElement<any>*/
    {
      if (!child || !child.key) return;
      var l = (0, _utils.getLayoutItem)(this.state.layout, String(child.key));
      if (!l) return null;
      var _this$props6 = this.props,
          width = _this$props6.width,
          cols = _this$props6.cols,
          margin = _this$props6.margin,
          containerPadding = _this$props6.containerPadding,
          rowHeight = _this$props6.rowHeight,
          maxRows = _this$props6.maxRows,
          isDraggable = _this$props6.isDraggable,
          isResizable = _this$props6.isResizable,
          useCSSTransforms = _this$props6.useCSSTransforms,
          transformScale = _this$props6.transformScale,
          draggableCancel = _this$props6.draggableCancel,
          draggableHandle = _this$props6.draggableHandle;
      var _this$state3 = this.state,
          mounted = _this$state3.mounted,
          droppingPosition = _this$state3.droppingPosition; // Determine user manipulations possible.
      // If an item is static, it can't be manipulated by default.
      // Any properties defined directly on the grid item will take precedence.

      var draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
      var resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
      return _react.default.createElement(_GridItem.default, {
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        cancel: draggableCancel,
        handle: draggableHandle,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: draggable,
        isResizable: resizable,
        useCSSTransforms: useCSSTransforms && mounted,
        usePercentages: !mounted,
        transformScale: transformScale,
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        i: l.i,
        minH: l.minH,
        minW: l.minW,
        maxH: l.maxH,
        maxW: l.maxW,
        static: l.static,
        droppingPosition: isDroppingItem ? droppingPosition : undefined
      }, child);
    } // Called while dragging an element. Part of browser native drag/drop API.
    // Native event target might be the layout itself, or an element within the layout.

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props7 = this.props,
          className = _this$props7.className,
          style = _this$props7.style,
          isDroppable = _this$props7.isDroppable;
      var mergedClassName = (0, _classnames.default)(layoutClassName, className);

      var mergedStyle = _objectSpread({
        height: this.containerHeight()
      }, style);

      return _react.default.createElement("div", {
        className: mergedClassName,
        style: mergedStyle,
        onDrop: isDroppable ? this.onDrop : _utils.noop,
        onDragLeave: isDroppable ? this.onDragLeave : _utils.noop,
        onDragEnter: isDroppable ? this.onDragEnter : _utils.noop,
        onDragOver: isDroppable ? this.onDragOver : _utils.noop
      }, _react.default.Children.map(this.props.children, function (child) {
        return _this2.processGridItem(child);
      }), isDroppable && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, true), this.placeholder());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    /*: Props*/
    , prevState
    /*: State*/
    ) {
      var newLayoutBase;

      if (prevState.activeDrag) {
        return null;
      } // Legacy support for compactType
      // Allow parent to set layout directly.


      if (!(0, _lodash.default)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
        newLayoutBase = nextProps.layout;
      } else if (!(0, _utils.childrenEqual)(nextProps.children, prevState.children)) {
        // If children change, also regenerate the layout. Use our state
        // as the base in case because it may be more up to date than
        // what is in props.
        newLayoutBase = prevState.layout;
      } // We need to regenerate the layout.


      if (newLayoutBase) {
        var newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, _utils.compactType)(nextProps));
        return {
          layout: newLayout,
          // We need to save these props to state for using
          // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
          compactType: nextProps.compactType,
          children: nextProps.children,
          propsLayout: nextProps.layout
        };
      }

      return null;
    }
  }]);

  return ReactGridLayout;
}(_react.default.Component);

exports.default = ReactGridLayout;

_defineProperty(ReactGridLayout, "displayName", "ReactGridLayout");

_defineProperty(ReactGridLayout, "propTypes", _ReactGridLayoutPropTypes.default);

_defineProperty(ReactGridLayout, "defaultProps", {
  autoSize: true,
  cols: 12,
  className: "",
  style: {},
  draggableHandle: "",
  draggableCancel: "",
  containerPadding: null,
  rowHeight: 150,
  maxRows: Infinity,
  // infinite vertical growth
  layout: [],
  margin: [10, 10],
  isDraggable: true,
  isResizable: true,
  isDroppable: false,
  useCSSTransforms: true,
  transformScale: 1,
  verticalCompact: true,
  compactType: "vertical",
  preventCollision: false,
  droppingItem: {
    i: "__dropping-elem__",
    h: 1,
    w: 1
  },
  onLayoutChange: _utils.noop,
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragStop: _utils.noop,
  onResizeStart: _utils.noop,
  onResize: _utils.noop,
  onResizeStop: _utils.noop,
  onDrop: _utils.noop
});

/***/ }),

/***/ "./node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  //
  // Basic props
  //
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  // This can be set explicitly. If it is not set, it will automatically
  // be set to the container width. Note that resizes will *not* cause this to adjust.
  // If you need that behavior, use WidthProvider.
  width: _propTypes.default.number,
  // If true, the container height swells and contracts to fit contents
  autoSize: _propTypes.default.bool,
  // # of cols.
  cols: _propTypes.default.number,
  // A selector that will not be draggable.
  draggableCancel: _propTypes.default.string,
  // A selector for the draggable handler
  draggableHandle: _propTypes.default.string,
  // Deprecated
  verticalCompact: function verticalCompact(props
  /*: Props*/
  ) {
    if (props.verticalCompact === false && "development" !== "production") {
      console.warn( // eslint-disable-line no-console
      "`verticalCompact` on <ReactGridLayout> is deprecated and will be removed soon. " + 'Use `compactType`: "horizontal" | "vertical" | null.');
    }
  },
  // Choose vertical or hotizontal compaction
  compactType: _propTypes.default.oneOf(["vertical", "horizontal"]),
  // layout is an array of object with the format:
  // {x: Number, y: Number, w: Number, h: Number, i: String}
  layout: function layout(props
  /*: Props*/
  ) {
    var layout = props.layout; // I hope you're setting the data-grid property on the grid items

    if (layout === undefined) return;

    __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js").validateLayout(layout, "layout");
  },
  //
  // Grid Dimensions
  //
  // Margin between items [x, y] in px
  margin: _propTypes.default.arrayOf(_propTypes.default.number),
  // Padding inside the container [x, y] in px
  containerPadding: _propTypes.default.arrayOf(_propTypes.default.number),
  // Rows have a static height, but you can change this based on breakpoints if you like
  rowHeight: _propTypes.default.number,
  // Default Infinity, but you can specify a max here if you like.
  // Note that this isn't fully fleshed out and won't error if you specify a layout that
  // extends beyond the row capacity. It will, however, not allow users to drag/resize
  // an item past the barrier. They can push items beyond the barrier, though.
  // Intentionally not documented for this reason.
  maxRows: _propTypes.default.number,
  //
  // Flags
  //
  isDraggable: _propTypes.default.bool,
  isResizable: _propTypes.default.bool,
  // If true, grid items won't change position when being dragged over.
  preventCollision: _propTypes.default.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _propTypes.default.bool,
  // parent layout transform scale
  transformScale: _propTypes.default.number,
  // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
  isDroppable: _propTypes.default.bool,
  //
  // Callbacks
  //
  // Callback so you can save the layout. Calls after each drag & resize stops.
  onLayoutChange: _propTypes.default.func,
  // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
  // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
  onDragStart: _propTypes.default.func,
  // Calls on each drag movement.
  onDrag: _propTypes.default.func,
  // Calls when drag is complete.
  onDragStop: _propTypes.default.func,
  //Calls when resize starts.
  onResizeStart: _propTypes.default.func,
  // Calls when resize movement happens.
  onResize: _propTypes.default.func,
  // Calls when resize is complete.
  onResizeStop: _propTypes.default.func,
  // Calls when some element is dropped.
  onDrop: _propTypes.default.func,
  //
  // Other validations
  //
  droppingItem: _propTypes.default.shape({
    i: _propTypes.default.string.isRequired,
    w: _propTypes.default.number.isRequired,
    h: _propTypes.default.number.isRequired
  }),
  // Children must not have duplicate keys.
  children: function children(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var children = props[propName]; // Check children keys for duplicates. Throw if found.

    var keys = {};

    _react.default.Children.forEach(children, function (child) {
      if (keys[child.key]) {
        throw new Error('Duplicate child key "' + child.key + '" found! This will cause problems in ReactGridLayout.');
      }

      keys[child.key] = true;
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");

var _responsiveUtils = __webpack_require__(/*! ./responsiveUtils */ "./node_modules/react-grid-layout/build/responsiveUtils.js");

var _ReactGridLayout = _interopRequireDefault(__webpack_require__(/*! ./ReactGridLayout */ "./node_modules/react-grid-layout/build/ReactGridLayout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var type = function type(obj) {
  return Object.prototype.toString.call(obj);
};
/**
 * Get a value of margin or containerPadding.
 *
 * @param  {Array | Object} param Margin | containerPadding, e.g. [10, 10] | {lg: [10, 10], ...}.
 * @param  {String} breakpoint   Breakpoint: lg, md, sm, xs and etc.
 * @return {Array}
 */


function getIndentationValue(param
/*: { [key: string]: [number, number] } | [number, number]*/
, breakpoint
/*: string*/
) {
  return Array.isArray(param) ? param : param[breakpoint];
}
/*:: type State = {
  layout: Layout,
  breakpoint: string,
  cols: number,
  layouts?: { [key: string]: Layout }
};*/

/*:: type Props<Breakpoint: string = string> = {|
  ...React.ElementConfig<typeof ReactGridLayout>,

  // Responsive config
  breakpoint?: ?Breakpoint,
  breakpoints: Breakpoints<Breakpoint>,
  cols: { [key: Breakpoint]: number },
  layouts: ResponsiveLayout<Breakpoint>,
  width: number,
  margin: { [key: Breakpoint]: [number, number] } | [number, number],
  containerPadding: { [key: Breakpoint]: [number, number] } | [number, number],

  // Callbacks
  onBreakpointChange: (Breakpoint, cols: number) => void,
  onLayoutChange: (Layout, { [key: Breakpoint]: Layout }) => void,
  onWidthChange: (
    containerWidth: number,
    margin: [number, number],
    cols: number,
    containerPadding: [number, number] | null
  ) => void
|};*/


var ResponsiveReactGridLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResponsiveReactGridLayout, _React$Component);

  function ResponsiveReactGridLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResponsiveReactGridLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResponsiveReactGridLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _this.generateInitialState());

    _defineProperty(_assertThisInitialized(_this), "onLayoutChange", function (layout
    /*: Layout*/
    ) {
      _this.props.onLayoutChange(layout, _objectSpread({}, _this.props.layouts, _defineProperty({}, _this.state.breakpoint, layout)));
    });

    return _this;
  }

  _createClass(ResponsiveReactGridLayout, [{
    key: "generateInitialState",
    value: function generateInitialState()
    /*: State*/
    {
      var _this$props = this.props,
          width = _this$props.width,
          breakpoints = _this$props.breakpoints,
          layouts = _this$props.layouts,
          cols = _this$props.cols;
      var breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
      var colNo = (0, _responsiveUtils.getColsFromBreakpoint)(breakpoint, cols); // verticalCompact compatibility, now deprecated

      var compactType = this.props.verticalCompact === false ? null : this.props.compactType; // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
      // for this layout.

      var initialLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, breakpoint, breakpoint, colNo, compactType);
      return {
        layout: initialLayout,
        breakpoint: breakpoint,
        cols: colNo
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props<*>*/
    ) {
      // Allow parent to set width or breakpoint directly.
      if (this.props.width != prevProps.width || this.props.breakpoint !== prevProps.breakpoint || !(0, _lodash.default)(this.props.breakpoints, prevProps.breakpoints) || !(0, _lodash.default)(this.props.cols, prevProps.cols)) {
        this.onWidthChange(prevProps);
      }
    } // wrap layouts so we do not need to pass layouts to child

  }, {
    key: "onWidthChange",

    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    value: function onWidthChange(prevProps
    /*: Props<*>*/
    ) {
      var _this$props2 = this.props,
          breakpoints = _this$props2.breakpoints,
          cols = _this$props2.cols,
          layouts = _this$props2.layouts,
          compactType = _this$props2.compactType;
      var newBreakpoint = this.props.breakpoint || (0, _responsiveUtils.getBreakpointFromWidth)(this.props.breakpoints, this.props.width);
      var lastBreakpoint = this.state.breakpoint;
      var newCols
      /*: number*/
      = (0, _responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);

      var newLayouts = _objectSpread({}, layouts); // Breakpoint change


      if (lastBreakpoint !== newBreakpoint || prevProps.breakpoints !== breakpoints || prevProps.cols !== cols) {
        // Preserve the current layout if the current breakpoint is not present in the next layouts.
        if (!(lastBreakpoint in newLayouts)) newLayouts[lastBreakpoint] = (0, _utils.cloneLayout)(this.state.layout); // Find or generate a new layout.

        var layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(newLayouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, compactType); // This adds missing items.

        layout = (0, _utils.synchronizeLayoutWithChildren)(layout, this.props.children, newCols, compactType); // Store the new layout.

        newLayouts[newBreakpoint] = layout; // callbacks

        this.props.onLayoutChange(layout, newLayouts);
        this.props.onBreakpointChange(newBreakpoint, newCols);
        this.setState({
          breakpoint: newBreakpoint,
          layout: layout,
          cols: newCols
        });
      }

      var margin = getIndentationValue(this.props.margin, newBreakpoint);
      var containerPadding = getIndentationValue(this.props.containerPadding, newBreakpoint); //call onWidthChange on every change of width, not only on breakpoint changes

      this.props.onWidthChange(this.props.width, margin, newCols, containerPadding);
    }
  }, {
    key: "render",
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _this$props3 = this.props,
          breakpoint = _this$props3.breakpoint,
          breakpoints = _this$props3.breakpoints,
          cols = _this$props3.cols,
          layouts = _this$props3.layouts,
          margin = _this$props3.margin,
          containerPadding = _this$props3.containerPadding,
          onBreakpointChange = _this$props3.onBreakpointChange,
          onLayoutChange = _this$props3.onLayoutChange,
          onWidthChange = _this$props3.onWidthChange,
          other = _objectWithoutProperties(_this$props3, ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"]);
      /* eslint-enable no-unused-vars */


      return React.createElement(_ReactGridLayout.default, _extends({}, other, {
        margin: getIndentationValue(margin, this.state.breakpoint),
        containerPadding: getIndentationValue(containerPadding, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    /*: Props<*>*/
    , prevState
    /*: State*/
    ) {
      if (!(0, _lodash.default)(nextProps.layouts, prevState.layouts)) {
        // Allow parent to set layouts directly.
        var breakpoint = prevState.breakpoint,
            _cols = prevState.cols; // Since we're setting an entirely new layout object, we must generate a new responsive layout
        // if one does not exist.

        var newLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(nextProps.layouts, nextProps.breakpoints, breakpoint, breakpoint, _cols, nextProps.compactType);
        return {
          layout: newLayout,
          layouts: nextProps.layouts
        };
      }

      return null;
    }
  }]);

  return ResponsiveReactGridLayout;
}(React.Component);

exports.default = ResponsiveReactGridLayout;

_defineProperty(ResponsiveReactGridLayout, "propTypes", {
  //
  // Basic props
  //
  // Optional, but if you are managing width yourself you may want to set the breakpoint
  // yourself as well.
  breakpoint: _propTypes.default.string,
  // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
  breakpoints: _propTypes.default.object,
  // # of cols. This is a breakpoint -> cols map
  cols: _propTypes.default.object,
  // # of margin. This is a breakpoint -> margin map
  // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
  // Margin between items [x, y] in px
  // e.g. [10, 10]
  margin: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  // # of containerPadding. This is a breakpoint -> containerPadding map
  // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
  // Padding inside the container [x, y] in px
  // e.g. [10, 10]
  containerPadding: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  // layouts is an object mapping breakpoints to layouts.
  // e.g. {lg: Layout, md: Layout, ...}
  layouts: function layouts(props
  /*: Props<>*/
  , propName
  /*: string*/
  ) {
    if (type(props[propName]) !== "[object Object]") {
      throw new Error("Layout property must be an object. Received: " + type(props[propName]));
    }

    Object.keys(props[propName]).forEach(function (key) {
      if (!(key in props.breakpoints)) {
        throw new Error("Each key in layouts must align with a key in breakpoints.");
      }

      (0, _utils.validateLayout)(props.layouts[key], "layouts." + key);
    });
  },
  // The width of this component.
  // Required in this propTypes stanza because generateInitialState() will fail without it.
  width: _propTypes.default.number.isRequired,
  //
  // Callbacks
  //
  // Calls back with breakpoint and new # cols
  onBreakpointChange: _propTypes.default.func,
  // Callback so you can save the layout.
  // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
  onLayoutChange: _propTypes.default.func,
  // Calls back with (containerWidth, margin, cols, containerPadding)
  onWidthChange: _propTypes.default.func
});

_defineProperty(ResponsiveReactGridLayout, "defaultProps", {
  breakpoints: {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0
  },
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 2
  },
  layouts: {},
  margin: [10, 10],
  containerPadding: {
    lg: [0, 0],
    md: [0, 0],
    sm: [0, 0],
    xs: [0, 0],
    xxs: [0, 0]
  },
  onBreakpointChange: _utils.noop,
  onLayoutChange: _utils.noop,
  onWidthChange: _utils.noop
});

/***/ }),

/***/ "./node_modules/react-grid-layout/build/calculateUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/calculateUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcGridColWidth = calcGridColWidth;
exports.calcGridItemPosition = calcGridItemPosition;
exports.calcXY = calcXY;
exports.calcWH = calcWH;

/*:: import type { Position } from "./utils";*/

/*:: export type PositionParams = {
  margin: [number, number],
  containerPadding: [number, number],
  containerWidth: number,
  cols: number,
  rowHeight: number,
  maxRows: number
};*/
// Helper for generating column width
function calcGridColWidth(positionParams
/*: PositionParams*/
)
/*: number*/
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      containerWidth = positionParams.containerWidth,
      cols = positionParams.cols;
  return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
}
/**
 * Return position on the page given an x, y, w, h.
 * left, top, width, height are all in pixels.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number}  x                      X coordinate in grid units.
 * @param  {Number}  y                      Y coordinate in grid units.
 * @param  {Number}  w                      W coordinate in grid units.
 * @param  {Number}  h                      H coordinate in grid units.
 * @return {Position}                       Object containing coords.
 */


function calcGridItemPosition(positionParams
/*: PositionParams*/
, x
/*: number*/
, y
/*: number*/
, w
/*: number*/
, h
/*: number*/
, state
/*: ?Object*/
)
/*: Position*/
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams);
  var out = {}; // If resizing, use the exact width and height as returned from resizing callbacks.

  if (state && state.resizing) {
    out.width = Math.round(state.resizing.width);
    out.height = Math.round(state.resizing.height);
  } // Otherwise, calculate from grid units.
  else {
      // 0 * Infinity === NaN, which causes problems with resize constraints;
      // Fix this if it occurs.
      // Note we do it here rather than later because Math.round(Infinity) causes deopt
      out.width = w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin[0]);
      out.height = h === Infinity ? h : Math.round(rowHeight * h + Math.max(0, h - 1) * margin[1]);
    } // If dragging, use the exact width and height as returned from dragging callbacks.


  if (state && state.dragging) {
    out.top = Math.round(state.dragging.top);
    out.left = Math.round(state.dragging.left);
  } // Otherwise, calculate from grid units.
  else {
      out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
      out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
    }

  return out;
}
/**
 * Translate x and y coordinates from pixels to grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number} top                     Top position (relative to parent) in pixels.
 * @param  {Number} left                    Left position (relative to parent) in pixels.
 * @param  {Number} w                       W coordinate in grid units.
 * @param  {Number} h                       H coordinate in grid units.
 * @return {Object}                         x and y in grid units.
 */


function calcXY(positionParams
/*: PositionParams*/
, top
/*: number*/
, left
/*: number*/
, w
/*: number*/
, h
/*: number*/
)
/*: { x: number, y: number }*/
{
  var margin = positionParams.margin,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight,
      maxRows = positionParams.maxRows;
  var colWidth = calcGridColWidth(positionParams); // left = colWidth * x + margin * (x + 1)
  // l = cx + m(x+1)
  // l = cx + mx + m
  // l - m = cx + mx
  // l - m = x(c + m)
  // (l - m) / (c + m) = x
  // x = (left - margin) / (coldWidth + margin)

  var x = Math.round((left - margin[0]) / (colWidth + margin[0]));
  var y = Math.round((top - margin[1]) / (rowHeight + margin[1])); // Capping

  x = Math.max(Math.min(x, cols - w), 0);
  y = Math.max(Math.min(y, maxRows - h), 0);
  return {
    x: x,
    y: y
  };
}
/**
 * Given a height and width in pixel values, calculate grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calcluations.
 * @param  {Number} height                  Height in pixels.
 * @param  {Number} width                   Width in pixels.
 * @param  {Number} x                       X coordinate in grid units.
 * @param  {Number} y                       Y coordinate in grid units.
 * @return {Object}                         w, h as grid units.
 */


function calcWH(positionParams
/*: PositionParams*/
, width
/*: number*/
, height
/*: number*/
, x
/*: number*/
, y
/*: number*/
)
/*: { w: number, h: number }*/
{
  var margin = positionParams.margin,
      maxRows = positionParams.maxRows,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams); // width = colWidth * w - (margin * (w - 1))
  // ...
  // w = (width + margin) / (colWidth + margin)

  var w = Math.round((width + margin[0]) / (colWidth + margin[0]));
  var h = Math.round((height + margin[1]) / (rowHeight + margin[1])); // Capping

  w = Math.max(Math.min(w, cols - x), 0);
  h = Math.max(Math.min(h, maxRows - y), 0);
  return {
    w: w,
    h: h
  };
}

/***/ }),

/***/ "./node_modules/react-grid-layout/build/components/WidthProvider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/components/WidthProvider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WidthProvider;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * A simple HOC that provides facility for listening to container resizes.
 *
 * The Flow type is pretty janky here. I can't just spread `WPProps` into this returned object - I wish I could - but it triggers
 * a flow bug of some sort that causes it to stop typechecking.
 */
function WidthProvider
/*:: <Config>*/
(ComposedComponent
/*: React.AbstractComponent<Config>*/
)
/*: React.AbstractComponent<{|
  ...Config,
  measureBeforeMount?: boolean,
  className?: string,
  style?: Object,
  width?: number
|}>*/
{
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WidthProvider, _React$Component);

    function WidthProvider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WidthProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WidthProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        width: 1280
      });

      _defineProperty(_assertThisInitialized(_this), "mounted", false);

      _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
        if (!_this.mounted) return; // eslint-disable-next-line react/no-find-dom-node

        var node = _reactDom.default.findDOMNode(_assertThisInitialized(_this)); // Flow casts this to Text | Element


        if (node instanceof HTMLElement) _this.setState({
          width: node.offsetWidth
        });
      });

      return _this;
    }

    _createClass(WidthProvider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        window.addEventListener("resize", this.onWindowResize); // Call to properly set the breakpoint and resize the elements.
        // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
        // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.

        this.onWindowResize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener("resize", this.onWindowResize);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            measureBeforeMount = _this$props.measureBeforeMount,
            rest = _objectWithoutProperties(_this$props, ["measureBeforeMount"]);

        if (measureBeforeMount && !this.mounted) {
          return React.createElement("div", {
            className: this.props.className,
            style: this.props.style
          });
        }

        return React.createElement(ComposedComponent, _extends({}, rest, this.state));
      }
    }]);

    return WidthProvider;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    measureBeforeMount: false
  }), _defineProperty(_class, "propTypes", {
    // If true, will not render children until mounted. Useful for getting the exact width before
    // rendering, to prevent any unsightly resizing.
    measureBeforeMount: _propTypes.default.bool
  }), _temp;
}

/***/ }),

/***/ "./node_modules/react-grid-layout/build/fastRGLPropsEqual.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/fastRGLPropsEqual.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// this file was prevaled
module.exports = function fastRGLPropsEqual(a, b, isEqualImpl) {
  if (a === b) return true;
  return a.className === b.className && isEqualImpl(a.style, b.style) && a.width === b.width && a.autoSize === b.autoSize && a.cols === b.cols && a.draggableCancel === b.draggableCancel && a.draggableHandle === b.draggableHandle && isEqualImpl(a.verticalCompact, b.verticalCompact) && isEqualImpl(a.compactType, b.compactType) && isEqualImpl(a.layout, b.layout) && isEqualImpl(a.margin, b.margin) && isEqualImpl(a.containerPadding, b.containerPadding) && a.rowHeight === b.rowHeight && a.maxRows === b.maxRows && a.isDraggable === b.isDraggable && a.isResizable === b.isResizable && a.preventCollision === b.preventCollision && a.useCSSTransforms === b.useCSSTransforms && a.transformScale === b.transformScale && a.isDroppable === b.isDroppable && a.onLayoutChange === b.onLayoutChange && a.onDragStart === b.onDragStart && a.onDrag === b.onDrag && a.onDragStop === b.onDragStop && a.onResizeStart === b.onResizeStart && a.onResize === b.onResize && a.onResizeStop === b.onResizeStop && a.onDrop === b.onDrop && isEqualImpl(a.droppingItem, b.droppingItem);
};

/***/ }),

/***/ "./node_modules/react-grid-layout/build/responsiveUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-grid-layout/build/responsiveUtils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBreakpointFromWidth = getBreakpointFromWidth;
exports.getColsFromBreakpoint = getColsFromBreakpoint;
exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
exports.sortBreakpoints = sortBreakpoints;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");

/**
 * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
 *
 * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
 * @param  {Number} width Screen width.
 * @return {String}       Highest breakpoint that is less than width.
 */
function getBreakpointFromWidth(breakpoints
/*: Breakpoints<Breakpoint>*/
, width
/*: number*/
)
/*: Breakpoint*/
{
  var sorted = sortBreakpoints(breakpoints);
  var matching = sorted[0];

  for (var i = 1, len = sorted.length; i < len; i++) {
    var breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }

  return matching;
}
/**
 * Given a breakpoint, get the # of cols set for it.
 * @param  {String} breakpoint Breakpoint name.
 * @param  {Object} cols       Map of breakpoints to cols.
 * @return {Number}            Number of cols.
 */


function getColsFromBreakpoint(breakpoint
/*: Breakpoint*/
, cols
/*: Breakpoints<Breakpoint>*/
)
/*: number*/
{
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }

  return cols[breakpoint];
}
/**
 * Given existing layouts and a new breakpoint, find or generate a new layout.
 *
 * This finds the layout above the new one and generates from it, if it exists.
 *
 * @param  {Object} layouts     Existing layouts.
 * @param  {Array} breakpoints All breakpoints.
 * @param  {String} breakpoint New breakpoint.
 * @param  {String} breakpoint Last breakpoint (for fallback).
 * @param  {Number} cols       Column count at new breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}             New layout.
 */


function findOrGenerateResponsiveLayout(layouts
/*: ResponsiveLayout<Breakpoint>*/
, breakpoints
/*: Breakpoints<Breakpoint>*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  // If it already exists, just return it.
  if (layouts[breakpoint]) return (0, _utils.cloneLayout)(layouts[breakpoint]); // Find or generate the next layout

  var layout = layouts[lastBreakpoint];
  var breakpointsSorted = sortBreakpoints(breakpoints);
  var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));

  for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
    var b = breakpointsAbove[i];

    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }

  layout = (0, _utils.cloneLayout)(layout || []); // clone layout so we don't modify existing items

  return (0, _utils.compact)((0, _utils.correctBounds)(layout, {
    cols: cols
  }), compactType, cols);
}
/**
 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
 * e.g. ['xxs', 'xs', 'sm', ...]
 *
 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
 * @return {Array}              Sorted breakpoints.
 */


function sortBreakpoints(breakpoints
/*: Breakpoints<Breakpoint>*/
)
/*: Array<Breakpoint>*/
{
  var keys
  /*: Array<string>*/
  = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}

/***/ }),

/***/ "./node_modules/react-grid-layout/build/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-layout/build/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottom = bottom;
exports.cloneLayout = cloneLayout;
exports.cloneLayoutItem = cloneLayoutItem;
exports.childrenEqual = childrenEqual;
exports.fastPositionEqual = fastPositionEqual;
exports.collides = collides;
exports.compact = compact;
exports.compactItem = compactItem;
exports.correctBounds = correctBounds;
exports.getLayoutItem = getLayoutItem;
exports.getFirstCollision = getFirstCollision;
exports.getAllCollisions = getAllCollisions;
exports.getStatics = getStatics;
exports.moveElement = moveElement;
exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
exports.perc = perc;
exports.setTransform = setTransform;
exports.setTopLeft = setTopLeft;
exports.sortLayoutItems = sortLayoutItems;
exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
exports.sortLayoutItemsByColRow = sortLayoutItemsByColRow;
exports.synchronizeLayoutWithChildren = synchronizeLayoutWithChildren;
exports.validateLayout = validateLayout;
exports.compactType = compactType;
exports.autoBindHandlers = autoBindHandlers;
exports.noop = exports.fastRGLPropsEqual = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isProduction = "development" === "production";
var DEBUG = false;
/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */

function bottom(layout
/*: Layout*/
)
/*: number*/
{
  var max = 0,
      bottomY;

  for (var i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }

  return max;
}

function cloneLayout(layout
/*: Layout*/
)
/*: Layout*/
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }

  return newLayout;
} // Fast path to cloning, since this is monomorphic


function cloneLayoutItem(layoutItem
/*: LayoutItem*/
)
/*: LayoutItem*/
{
  return {
    w: layoutItem.w,
    h: layoutItem.h,
    x: layoutItem.x,
    y: layoutItem.y,
    i: layoutItem.i,
    minW: layoutItem.minW,
    maxW: layoutItem.maxW,
    minH: layoutItem.minH,
    maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved),
    static: Boolean(layoutItem.static),
    // These can be null
    isDraggable: layoutItem.isDraggable,
    isResizable: layoutItem.isResizable
  };
}
/**
 * Comparing React `children` is a bit difficult. This is a good way to compare them.
 * This will catch differences in keys, order, and length.
 */


function childrenEqual(a
/*: ReactChildren*/
, b
/*: ReactChildren*/
)
/*: boolean*/
{
  return (0, _lodash.default)(_react.default.Children.map(a, function (c) {
    return c.key;
  }), _react.default.Children.map(b, function (c) {
    return c.key;
  }));
}
/**
 * See `fastRGLPropsEqual.js`.
 * We want this to run as fast as possible - it is called often - and to be
 * resilient to new props that we add. So rather than call lodash.isEqual,
 * which isn't suited to comparing props very well, we use this specialized
 * function in conjunction with preval to generate the fastest possible comparison
 * function, tuned for exactly our props.
 */

/*:: type FastRGLPropsEqual = (Object, Object, Function) => boolean;*/


var fastRGLPropsEqual
/*: FastRGLPropsEqual*/
= __webpack_require__(/*! ./fastRGLPropsEqual */ "./node_modules/react-grid-layout/build/fastRGLPropsEqual.js"); // Like the above, but a lot simpler.


exports.fastRGLPropsEqual = fastRGLPropsEqual;

function fastPositionEqual(a
/*: Position*/
, b
/*: Position*/
) {
  return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
}
/**
 * Given two layoutitems, check if they collide.
 */


function collides(l1
/*: LayoutItem*/
, l2
/*: LayoutItem*/
)
/*: boolean*/
{
  if (l1.i === l2.i) return false; // same element

  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2

  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2

  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2

  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2

  return true; // boxes overlap
}
/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * Does not modify layout items (clones). Creates a new layout array.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */


function compact(layout
/*: Layout*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  // Statics go in the compareWith array right away so items flow around them.
  var compareWith = getStatics(layout); // We go through the items by row and column.

  var sorted = sortLayoutItems(layout, compactType); // Holding for new items.

  var out = Array(layout.length);

  for (var i = 0, len = sorted.length; i < len; i++) {
    var l = cloneLayoutItem(sorted[i]); // Don't move static elements

    if (!l.static) {
      l = compactItem(compareWith, l, compactType, cols, sorted); // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.

      compareWith.push(l);
    } // Add to output array to make sure they still come out in the right order.


    out[layout.indexOf(sorted[i])] = l; // Clear moved flag, if it exists.

    l.moved = false;
  }

  return out;
}

var heightWidth = {
  x: "w",
  y: "h"
};
/**
 * Before moving item down, it will check if the movement will cause collisions and move those items down before.
 */

function resolveCompactionCollision(layout
/*: Layout*/
, item
/*: LayoutItem*/
, moveToCoord
/*: number*/
, axis
/*: "x" | "y"*/
) {
  var sizeProp = heightWidth[axis];
  item[axis] += 1;
  var itemIndex = layout.map(function (layoutItem) {
    return layoutItem.i;
  }).indexOf(item.i); // Go through each item we collide with.

  for (var i = itemIndex + 1; i < layout.length; i++) {
    var otherItem = layout[i]; // Ignore static items

    if (otherItem.static) continue; // Optimization: we can break early if we know we're past this el
    // We can do this b/c it's a sorted layout

    if (otherItem.y > item.y + item.h) break;

    if (collides(item, otherItem)) {
      resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis);
    }
  }

  item[axis] = moveToCoord;
}
/**
 * Compact an item in the layout.
 *
 * Modifies item.
 *
 */


function compactItem(compareWith
/*: Layout*/
, l
/*: LayoutItem*/
, compactType
/*: CompactType*/
, cols
/*: number*/
, fullLayout
/*: Layout*/
)
/*: LayoutItem*/
{
  var compactV = compactType === "vertical";
  var compactH = compactType === "horizontal";

  if (compactV) {
    // Bottom 'y' possible is the bottom of the layout.
    // This allows you to do nice stuff like specify {y: Infinity}
    // This is here because the layout must be sorted in order to get the correct bottom `y`.
    l.y = Math.min(bottom(compareWith), l.y); // Move the element up as far as it can go without colliding.

    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } else if (compactH) {
    l.y = Math.min(bottom(compareWith), l.y); // Move the element left as far as it can go without colliding.

    while (l.x > 0 && !getFirstCollision(compareWith, l)) {
      l.x--;
    }
  } // Move it down, and keep moving it down if it's colliding.


  var collides;

  while (collides = getFirstCollision(compareWith, l)) {
    if (compactH) {
      resolveCompactionCollision(fullLayout, l, collides.x + collides.w, "x");
    } else {
      resolveCompactionCollision(fullLayout, l, collides.y + collides.h, "y");
    } // Since we can't grow without bounds horizontally, if we've overflown, let's move it down and try again.


    if (compactH && l.x + l.w > cols) {
      l.x = cols - l.w;
      l.y++;
    }
  }

  return l;
}
/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * Modifies layout items.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */


function correctBounds(layout
/*: Layout*/
, bounds
/*: { cols: number }*/
)
/*: Layout*/
{
  var collidesWith = getStatics(layout);

  for (var i = 0, len = layout.length; i < len; i++) {
    var l = layout[i]; // Overflows right

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; // Overflows left

    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }

    if (!l.static) collidesWith.push(l);else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }

  return layout;
}
/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */


function getLayoutItem(layout
/*: Layout*/
, id
/*: string*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}
/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */


function getFirstCollision(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
}

function getAllCollisions(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}
/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */


function getStatics(layout
/*: Layout*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return l.static;
  });
}
/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * Modifies layout items.
 *
 * @param  {Array}      layout            Full layout to modify.
 * @param  {LayoutItem} l                 element to move.
 * @param  {Number}     [x]               X position in grid units.
 * @param  {Number}     [y]               Y position in grid units.
 */


function moveElement(layout
/*: Layout*/
, l
/*: LayoutItem*/
, x
/*: ?number*/
, y
/*: ?number*/
, isUserAction
/*: ?boolean*/
, preventCollision
/*: ?boolean*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  // If this is static and not explicitly enabled as draggable,
  // no move is possible, so we can short-circuit this immediately.
  if (l.static && l.isDraggable !== true) return layout; // Short-circuit if nothing to do.

  if (l.y === y && l.x === x) return layout;
  log("Moving element ".concat(l.i, " to [").concat(String(x), ",").concat(String(y), "] from [").concat(l.x, ",").concat(l.y, "]"));
  var oldX = l.x;
  var oldY = l.y; // This is quite a bit faster than extending the object

  if (typeof x === "number") l.x = x;
  if (typeof y === "number") l.y = y;
  l.moved = true; // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.

  var sorted = sortLayoutItems(layout, compactType);
  var movingUp = compactType === "vertical" && typeof y === "number" ? oldY >= y : compactType === "horizontal" && typeof x === "number" ? oldX >= x : false; // $FlowIgnore acceptable modification of read-only array as it was recently cloned

  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l); // There was a collision; abort

  if (preventCollision && collisions.length) {
    log("Collision prevented on ".concat(l.i, ", reverting."));
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout;
  } // Move each item that collides away from this element.


  for (var i = 0, len = collisions.length; i < len; i++) {
    var collision = collisions[i];
    log("Resolving collision between ".concat(l.i, " at [").concat(l.x, ",").concat(l.y, "] and ").concat(collision.i, " at [").concat(collision.x, ",").concat(collision.y, "]")); // Short circuit so we can't infinite loop

    if (collision.moved) continue; // Don't move static items - we have to move *this* element away

    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction, compactType, cols);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction, compactType, cols);
    }
  }

  return layout;
}
/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 */


function moveElementAwayFromCollision(layout
/*: Layout*/
, collidesWith
/*: LayoutItem*/
, itemToMove
/*: LayoutItem*/
, isUserAction
/*: ?boolean*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  var compactH = compactType === "horizontal"; // Compact vertically if not set to horizontal

  var compactV = compactType !== "horizontal";
  var preventCollision = collidesWith.static; // we're already colliding (not for static items)
  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.

  if (isUserAction) {
    // Reset isUserAction flag because we're not in the main collision anymore.
    isUserAction = false; // Make a mock item so we don't modify the item here, only modify in moveElement.

    var fakeItem
    /*: LayoutItem*/
    = {
      x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
      y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: "-1"
    }; // No collision? If so, we can go up there; otherwise, we'll end up moving down as normal

    if (!getFirstCollision(layout, fakeItem)) {
      log("Doing reverse collision on ".concat(itemToMove.i, " up to [").concat(fakeItem.x, ",").concat(fakeItem.y, "]."));
      return moveElement(layout, itemToMove, compactH ? fakeItem.x : undefined, compactV ? fakeItem.y : undefined, isUserAction, preventCollision, compactType, cols);
    }
  }

  return moveElement(layout, itemToMove, compactH ? itemToMove.x + 1 : undefined, compactV ? itemToMove.y + 1 : undefined, isUserAction, preventCollision, compactType, cols);
}
/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */


function perc(num
/*: number*/
)
/*: string*/
{
  return num * 100 + "%";
}

function setTransform(_ref)
/*: Object*/
{
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;
  // Replace unitless items with px
  var translate = "translate(".concat(left, "px,").concat(top, "px)");
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    position: "absolute"
  };
}

function setTopLeft(_ref2)
/*: Object*/
{
  var top = _ref2.top,
      left = _ref2.left,
      width = _ref2.width,
      height = _ref2.height;
  return {
    top: "".concat(top, "px"),
    left: "".concat(left, "px"),
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    position: "absolute"
  };
}
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */


function sortLayoutItems(layout
/*: Layout*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);else return sortLayoutItemsByRowCol(layout);
}
/**
 * Sort layout items by row ascending and column ascending.
 *
 * Does not modify Layout.
 */


function sortLayoutItemsByRowCol(layout
/*: Layout*/
)
/*: Layout*/
{
  // Slice to clone array as sort modifies
  return layout.slice(0).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    } else if (a.y === b.y && a.x === b.x) {
      // Without this, we can get different sort results in IE vs. Chrome/FF
      return 0;
    }

    return -1;
  });
}
/**
 * Sort layout items by column ascending then row ascending.
 *
 * Does not modify Layout.
 */


function sortLayoutItemsByColRow(layout
/*: Layout*/
)
/*: Layout*/
{
  return layout.slice(0).sort(function (a, b) {
    if (a.x > b.x || a.x === b.x && a.y > b.y) {
      return 1;
    }

    return -1;
  });
}
/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * Does not modify initialLayout.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {?String} compact      Compaction option.
 * @return {Array}                Working layout.
 */


function synchronizeLayoutWithChildren(initialLayout
/*: Layout*/
, children
/*: ReactChildren*/
, cols
/*: number*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  initialLayout = initialLayout || []; // Generate one layout item per child.

  var layout
  /*: LayoutItem[]*/
  = [];

  _react.default.Children.forEach(children, function (child
  /*: ReactElement<any>*/
  , i
  /*: number*/
  ) {
    // Don't overwrite if it already exists.
    var exists = getLayoutItem(initialLayout, String(child.key));

    if (exists) {
      layout[i] = cloneLayoutItem(exists);
    } else {
      if (!isProduction && child.props._grid) {
        console.warn("`_grid` properties on children have been deprecated as of React 15.2. " + // eslint-disable-line
        "Please use `data-grid` or add your properties directly to the `layout`.");
      }

      var g = child.props["data-grid"] || child.props._grid; // Hey, this item has a data-grid property, use it.

      if (g) {
        if (!isProduction) {
          validateLayout([g], "ReactGridLayout.children");
        }

        layout[i] = cloneLayoutItem(_objectSpread({}, g, {
          i: child.key
        }));
      } else {
        // Nothing provided: ensure this is added to the bottom
        layout[i] = cloneLayoutItem({
          w: 1,
          h: 1,
          x: 0,
          y: bottom(layout),
          i: String(child.key)
        });
      }
    }
  }); // Correct the layout.


  var correctedLayout = correctBounds(layout, {
    cols: cols
  });
  return compact(correctedLayout, compactType, cols);
}
/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */


function validateLayout(layout
/*: Layout*/
)
/*: void*/
{
  var contextName
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Layout";
  var subProps = ["x", "y", "w", "h"];
  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");

  for (var i = 0, len = layout.length; i < len; i++) {
    var item = layout[i];

    for (var j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== "number") {
        throw new Error("ReactGridLayout: " + contextName + "[" + i + "]." + subProps[j] + " must be a number!");
      }
    }

    if (item.i && typeof item.i !== "string") {
      throw new Error("ReactGridLayout: " + contextName + "[" + i + "].i must be a string!");
    }

    if (item.static !== undefined && typeof item.static !== "boolean") {
      throw new Error("ReactGridLayout: " + contextName + "[" + i + "].static must be a boolean!");
    }
  }
} // Legacy support for verticalCompact: false


function compactType(props
/*: ?{ verticalCompact: boolean, compactType: CompactType }*/
)
/*: CompactType*/
{
  var _ref3 = props || {},
      verticalCompact = _ref3.verticalCompact,
      compactType = _ref3.compactType;

  return verticalCompact === false ? null : compactType;
} // Flow can't really figure this out, so we just use Object


function autoBindHandlers(el
/*: Object*/
, fns
/*: Array<string>*/
)
/*: void*/
{
  fns.forEach(function (key) {
    return el[key] = el[key].bind(el);
  });
}

function log() {
  var _console;

  if (!DEBUG) return; // eslint-disable-next-line no-console

  (_console = console).log.apply(_console, arguments);
}

var noop = function noop() {};

exports.noop = noop;

/***/ }),

/***/ "./node_modules/react-grid-layout/css/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-layout/css/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-grid-layout/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-grid-layout/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./build/ReactGridLayout */ "./node_modules/react-grid-layout/build/ReactGridLayout.js").default;
module.exports.utils = __webpack_require__(/*! ./build/utils */ "./node_modules/react-grid-layout/build/utils.js");
module.exports.Responsive = __webpack_require__(/*! ./build/ResponsiveReactGridLayout */ "./node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js").default;
module.exports.Responsive.utils = __webpack_require__(/*! ./build/responsiveUtils */ "./node_modules/react-grid-layout/build/responsiveUtils.js");
module.exports.WidthProvider = __webpack_require__(/*! ./build/components/WidthProvider */ "./node_modules/react-grid-layout/build/components/WidthProvider.js").default;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-resizable/build/Resizable.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-resizable/build/Resizable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDraggable = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/web/react-draggable.min.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-resizable/build/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Resizable =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Resizable, _React$Component);

  function Resizable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      slackW: 0,
      slackH: 0
    });

    return _this;
  }

  var _proto = Resizable.prototype;

  _proto.lockAspectRatio = function lockAspectRatio(width, height, aspectRatio) {
    height = width / aspectRatio;
    width = height * aspectRatio;
    return [width, height];
  } // If you do this, be careful of constraints
  ;

  _proto.runConstraints = function runConstraints(width, height) {
    var _ref = [this.props.minConstraints, this.props.maxConstraints],
        min = _ref[0],
        max = _ref[1];
    if (!min && !max) return [width, height]; // Fit width & height to aspect ratio

    if (this.props.lockAspectRatio) {
      if (height === this.props.height) {
        var ratio = this.props.width / this.props.height;
        height = width / ratio;
        width = height * ratio;
      } else {
        // Take into account vertical resize with N/S handles on locked aspect
        // ratio. Calculate the change height-first, instead of width-first
        var _ratio = this.props.height / this.props.width;

        width = height / _ratio;
        height = width * _ratio;
      }
    }

    var oldW = width,
        oldH = height; // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.

    var _this$state = this.state,
        slackW = _this$state.slackW,
        slackH = _this$state.slackH;
    width += slackW;
    height += slackH;

    if (min) {
      width = Math.max(min[0], width);
      height = Math.max(min[1], height);
    }

    if (max) {
      width = Math.min(max[0], width);
      height = Math.min(max[1], height);
    } // If the numbers changed, we must have introduced some slack. Record it for the next iteration.


    slackW += oldW - width;
    slackH += oldH - height;

    if (slackW !== this.state.slackW || slackH !== this.state.slackH) {
      this.setState({
        slackW: slackW,
        slackH: slackH
      });
    }

    return [width, height];
  }
  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  ;

  _proto.resizeHandler = function resizeHandler(handlerName, axis) {
    var _this2 = this;

    return function (e, _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;
      deltaX /= _this2.props.transformScale;
      deltaY /= _this2.props.transformScale; // Axis restrictions

      var canDragX = (_this2.props.axis === 'both' || _this2.props.axis === 'x') && ['n', 's'].indexOf(axis) === -1;
      var canDragY = (_this2.props.axis === 'both' || _this2.props.axis === 'y') && ['e', 'w'].indexOf(axis) === -1; // reverse delta if using top or left drag handles

      if (canDragX && axis[axis.length - 1] === 'w') {
        deltaX = -deltaX;
      }

      if (canDragY && axis[0] === 'n') {
        deltaY = -deltaY;
      } // Update w/h


      var width = _this2.props.width + (canDragX ? deltaX : 0);
      var height = _this2.props.height + (canDragY ? deltaY : 0); // Early return if no change

      var widthChanged = width !== _this2.props.width,
          heightChanged = height !== _this2.props.height;
      if (handlerName === 'onResize' && !widthChanged && !heightChanged) return;

      var _this2$runConstraints = _this2.runConstraints(width, height);

      width = _this2$runConstraints[0];
      height = _this2$runConstraints[1];
      // Set the appropriate state for this handler.
      var newState = {};

      if (handlerName === 'onResizeStart') {// nothing
      } else if (handlerName === 'onResizeStop') {
        newState.slackW = newState.slackH = 0;
      } else {
        // Early return if no change after constraints
        if (width === _this2.props.width && height === _this2.props.height) return;
      }

      var hasCb = typeof _this2.props[handlerName] === 'function';

      if (hasCb) {
        // $FlowIgnore isn't refining this correctly to SyntheticEvent
        if (typeof e.persist === 'function') e.persist();

        _this2.setState(newState, function () {
          return _this2.props[handlerName](e, {
            node: node,
            size: {
              width: width,
              height: height
            },
            handle: axis
          });
        });
      } else {
        _this2.setState(newState);
      }
    };
  };

  _proto.renderResizeHandle = function renderResizeHandle(resizeHandle) {
    var handle = this.props.handle;

    if (handle) {
      if (typeof handle === 'function') {
        return handle(resizeHandle);
      }

      return handle;
    }

    return _react.default.createElement("span", {
      className: "react-resizable-handle react-resizable-handle-" + resizeHandle
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    // eslint-disable-next-line no-unused-vars
    var _this$props = this.props,
        children = _this$props.children,
        draggableOpts = _this$props.draggableOpts,
        width = _this$props.width,
        height = _this$props.height,
        handleSize = _this$props.handleSize,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        onResize = _this$props.onResize,
        onResizeStop = _this$props.onResizeStop,
        onResizeStart = _this$props.onResizeStart,
        resizeHandles = _this$props.resizeHandles,
        transformScale = _this$props.transformScale,
        p = _objectWithoutPropertiesLoose(_this$props, ["children", "draggableOpts", "width", "height", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"]);

    var className = p.className ? p.className + " react-resizable" : 'react-resizable'; // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // Its original children (resizable's child's children), and
    // One or more draggable handles.

    return (0, _utils.cloneElement)(children, _objectSpread({}, p, {
      className: className,
      children: [children.props.children, resizeHandles.map(function (h) {
        return _react.default.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
          key: "resizableHandle-" + h,
          onStop: _this3.resizeHandler('onResizeStop', h),
          onStart: _this3.resizeHandler('onResizeStart', h),
          onDrag: _this3.resizeHandler('onResize', h)
        }), _this3.renderResizeHandle(h));
      })]
    }));
  };

  return Resizable;
}(_react.default.Component);

exports.default = Resizable;

_defineProperty(Resizable, "propTypes", {
  //
  // Required Props
  //
  // Require that one and only one child be present.
  children: _propTypes.default.element.isRequired,
  // Initial w/h
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  //
  // Optional props
  //
  // Custom resize handle
  handle: _propTypes.default.element,
  // If you change this, be sure to update your css
  handleSize: _propTypes.default.array,
  // Defines which resize handles should be rendered (default: 'se')
  // Allows for any combination of:
  // 's' - South handle (bottom-center)
  // 'w' - West handle (left-center)
  // 'e' - East handle (right-center)
  // 'n' - North handle (top-center)
  // 'sw' - Southwest handle (bottom-left)
  // 'nw' - Northwest handle (top-left)
  // 'se' - Southeast handle (bottom-right)
  // 'ne' - Northeast handle (top-center)
  resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),
  transformScale: _propTypes.default.number,
  // If true, will only allow width/height to move in lockstep
  lockAspectRatio: _propTypes.default.bool,
  // Restricts resizing to a particular axis (default: 'both')
  // 'both' - allows resizing by width or height
  // 'x' - only allows the width to be changed
  // 'y' - only allows the height to be changed
  // 'none' - disables resizing altogether
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  // Min/max size
  minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
  maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
  // Callbacks
  onResizeStop: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onResize: _propTypes.default.func,
  // These will be passed wholesale to react-draggable's DraggableCore
  draggableOpts: _propTypes.default.object
});

_defineProperty(Resizable, "defaultProps", {
  handleSize: [20, 20],
  lockAspectRatio: false,
  axis: 'both',
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
});

/***/ }),

/***/ "./node_modules/react-resizable/build/ResizableBox.js":
/*!************************************************************!*\
  !*** ./node_modules/react-resizable/build/ResizableBox.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Resizable = _interopRequireDefault(__webpack_require__(/*! ./Resizable */ "./node_modules/react-resizable/build/Resizable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// An example use of Resizable.
var ResizableBox =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ResizableBox, _React$Component);

  function ResizableBox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: _this.props.width,
      height: _this.props.height,
      propsWidth: _this.props.width,
      propsHeight: _this.props.height
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (e, data) {
      var size = data.size;
      var width = size.width,
          height = size.height;

      if (_this.props.onResize) {
        e.persist && e.persist();

        _this.setState(size, function () {
          return _this.props.onResize && _this.props.onResize(e, data);
        });
      } else {
        _this.setState(size);
      }
    });

    return _this;
  }

  ResizableBox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // If parent changes height/width, set that in our state.
    if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
      return {
        width: props.width,
        height: props.height,
        propsWidth: props.width,
        propsHeight: props.height
      };
    }

    return null;
  };

  var _proto = ResizableBox.prototype;

  _proto.render = function render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the child component
    // with a new width and height.
    var _this$props = this.props,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize,
        onResize = _this$props.onResize,
        onResizeStart = _this$props.onResizeStart,
        onResizeStop = _this$props.onResizeStop,
        draggableOpts = _this$props.draggableOpts,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        width = _this$props.width,
        height = _this$props.height,
        resizeHandles = _this$props.resizeHandles,
        props = _objectWithoutPropertiesLoose(_this$props, ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles"]);

    return _react.default.createElement(_Resizable.default, {
      handle: handle,
      handleSize: handleSize,
      width: this.state.width,
      height: this.state.height,
      onResizeStart: onResizeStart,
      onResize: this.onResize,
      onResizeStop: onResizeStop,
      draggableOpts: draggableOpts,
      minConstraints: minConstraints,
      maxConstraints: maxConstraints,
      lockAspectRatio: lockAspectRatio,
      axis: axis,
      resizeHandles: resizeHandles
    }, _react.default.createElement("div", _extends({
      style: {
        width: this.state.width + 'px',
        height: this.state.height + 'px'
      }
    }, props)));
  };

  return ResizableBox;
}(_react.default.Component);

exports.default = ResizableBox;

_defineProperty(ResizableBox, "propTypes", {
  height: _propTypes.default.number,
  width: _propTypes.default.number
});

_defineProperty(ResizableBox, "defaultProps", {
  handleSize: [20, 20]
});

/***/ }),

/***/ "./node_modules/react-resizable/build/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/build/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cloneElement = cloneElement;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React.addons.cloneWithProps look-alike that merges style & className.
function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _objectSpread({}, element.props.style, {}, props.style);
  }

  if (props.className && element.props.className) {
    props.className = element.props.className + " " + props.className;
  }

  return _react.default.cloneElement(element, props);
}

/***/ }),

/***/ "./node_modules/react-resizable/css/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/css/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-resizable/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-resizable/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

module.exports.Resizable = __webpack_require__(/*! ./build/Resizable */ "./node_modules/react-resizable/build/Resizable.js").default;
module.exports.ResizableBox = __webpack_require__(/*! ./build/ResizableBox */ "./node_modules/react-resizable/build/ResizableBox.js").default;


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9sb2Rhc2guaXNlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJhZ2dhYmxlL2J1aWxkL3dlYi9yZWFjdC1kcmFnZ2FibGUubWluLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9HcmlkSXRlbS5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvYnVpbGQvUmVhY3RHcmlkTGF5b3V0LmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9SZWFjdEdyaWRMYXlvdXRQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL1Jlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL2NhbGN1bGF0ZVV0aWxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9jb21wb25lbnRzL1dpZHRoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL2Zhc3RSR0xQcm9wc0VxdWFsLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9yZXNwb25zaXZlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL3V0aWxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzcz84NGMyIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL1Jlc2l6YWJsZS5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL1Jlc2l6YWJsZUJveC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL3V0aWxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3M/YjhlOCIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2luZGV4LmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiXSwibmFtZXMiOlsiRHJhZ0dyaWQiLCJwcm9wcyIsImxheW91dCIsImNoaWxkcmVuIiwiY29tcHkiLCJudW1Sb3dzIiwiY29tcHgiLCJudW1Db2x1bW5zIiwiaW5jcmVtZW50IiwiY29tcCIsImkiLCJ4IiwieSIsInciLCJoIiwiaXNSZXNpemFibGUiLCJwdXNoIiwiYm9yZGVyU3R5bGUiLCJzdGF0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJudW1iZXIiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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bEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QU8sRUFBRTtBQUFsSSxTQUNVLEtBQUtnQixLQUFMLENBQVdmLFFBRHJCLENBREE7QUFRSDs7OztFQXRDaUNnQiwrQyxHQXlDdEM7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQW5CLFFBQVEsQ0FBQ29CLFlBQVQsR0FBd0IsRUFBeEI7QUFFQXBCLFFBQVEsQ0FBQ3FCLFNBQVQsR0FBcUI7QUFDakI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSkc7O0FBTWpCOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVRQOztBQVdqQjs7O0FBR0F2QixVQUFRLEVBQUVvQixpREFBUyxDQUFDSSxLQWRIOztBQWdCakI7OztBQUdBdEIsU0FBTyxFQUFFa0IsaURBQVMsQ0FBQ0ssTUFuQkY7O0FBcUJqQjs7O0FBR0FyQixZQUFVLEVBQUVnQixpREFBUyxDQUFDSyxNQXhCTDs7QUEwQmpCOzs7O0FBSUFDLFVBQVEsRUFBRU4saURBQVMsQ0FBQ087QUE5QkgsQ0FBckIsQyIsImZpbGUiOiI4ZTQ5YTc2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1ncmlkLWxheW91dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMgZWFzZTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIHRvcDtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbS5jc3NUcmFuc2Zvcm1zIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbS5yZXNpemluZyB7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBoZWlnaHQ7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0ucmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nIHtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5kcm9wcGluZyB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0ucmVhY3QtZ3JpZC1wbGFjZWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBvcGFjaXR5OiAwLjI7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG4gIHotaW5kZXg6IDI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucmVhY3QtcmVzaXphYmxlLWhpZGUgPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LXJlc2l6YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0EySURZaUlITjBlV3hsUFNKaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lObVptWm1abVl3TUNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhkcFpIUm9QU0kyY0hnaUlHaGxhV2RvZEQwaU5uQjRJajQ4WnlCdmNHRmphWFI1UFNJd0xqTXdNaUkrUEhCaGRHZ2daRDBpVFNBMklEWWdUQ0F3SURZZ1RDQXdJRFF1TWlCTUlEUWdOQzR5SUV3Z05DNHlJRFF1TWlCTUlEUXVNaUF3SUV3Z05pQXdJRXdnTmlBMklFd2dOaUEySUZvaUlHWnBiR3c5SWlNd01EQXdNREFpTHo0OEwyYytQQzl6ZG1jKycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcbiAgcGFkZGluZzogMCAzcHggM3B4IDA7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXN3IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IHN3LXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc2Uge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbncge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGN1cnNvcjogbnctcmVzaXplO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbmUge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IG5lLXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcsXFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZSB7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcge1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWUge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uLFxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXMge1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4ge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtcyB7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2UsXG4gICAgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKiEgRm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gcGxlYXNlIHNlZSByZWFjdC1kcmFnZ2FibGUubWluLmpzLkxJQ0VOU0UudHh0ICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJyZWFjdC1kb21cIikscmVxdWlyZShcInJlYWN0XCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJlYWN0LWRvbVwiLFwicmVhY3RcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5SZWFjdERyYWdnYWJsZT1lKHJlcXVpcmUoXCJyZWFjdC1kb21cIikscmVxdWlyZShcInJlYWN0XCIpKTp0LlJlYWN0RHJhZ2dhYmxlPWUodC5SZWFjdERPTSx0LlJlYWN0KX0od2luZG93LChmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTQpfShbZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDUpKCl9LGZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPXR9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWV9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcjshZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17fS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBvKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgcj1hcmd1bWVudHNbZV07aWYocil7dmFyIGE9dHlwZW9mIHI7aWYoXCJzdHJpbmdcIj09PWF8fFwibnVtYmVyXCI9PT1hKXQucHVzaChyKTtlbHNlIGlmKEFycmF5LmlzQXJyYXkocikmJnIubGVuZ3RoKXt2YXIgaT1vLmFwcGx5KG51bGwscik7aSYmdC5wdXNoKGkpfWVsc2UgaWYoXCJvYmplY3RcIj09PWEpZm9yKHZhciB1IGluIHIpbi5jYWxsKHIsdSkmJnJbdV0mJnQucHVzaCh1KX19cmV0dXJuIHQuam9pbihcIiBcIil9dC5leHBvcnRzPyhvLmRlZmF1bHQ9byx0LmV4cG9ydHM9byk6dm9pZCAwPT09KHI9ZnVuY3Rpb24oKXtyZXR1cm4gb30uYXBwbHkoZSxbXSkpfHwodC5leHBvcnRzPXIpfSgpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big3KSxvPXIuZGVmYXVsdCxhPXIuRHJhZ2dhYmxlQ29yZTt0LmV4cG9ydHM9byx0LmV4cG9ydHMuZGVmYXVsdD1vLHQuZXhwb3J0cy5EcmFnZ2FibGVDb3JlPWF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDYpO2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gYSgpe31hLnJlc2V0V2FybmluZ0NhY2hlPW8sdC5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbixvLGEsaSl7aWYoaSE9PXIpe3ZhciB1PW5ldyBFcnJvcihcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIik7dGhyb3cgdS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwiLHV9fWZ1bmN0aW9uIGUoKXtyZXR1cm4gdH10LmlzUmVxdWlyZWQ9dDt2YXIgbj17YXJyYXk6dCxib29sOnQsZnVuYzp0LG51bWJlcjp0LG9iamVjdDp0LHN0cmluZzp0LHN5bWJvbDp0LGFueTp0LGFycmF5T2Y6ZSxlbGVtZW50OnQsZWxlbWVudFR5cGU6dCxpbnN0YW5jZU9mOmUsbm9kZTp0LG9iamVjdE9mOmUsb25lT2Y6ZSxvbmVPZlR5cGU6ZSxzaGFwZTplLGV4YWN0OmUsY2hlY2tQcm9wVHlwZXM6YSxyZXNldFdhcm5pbmdDYWNoZTpvfTtyZXR1cm4gbi5Qcm9wVHlwZXM9bixufX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1cIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSksbi5kKGUsXCJkZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG10fSkpLG4uZChlLFwiRHJhZ2dhYmxlQ29yZVwiLChmdW5jdGlvbigpe3JldHVybiBudH0pKTt2YXIgcj1uKDIpLG89bi5uKHIpLGE9bigwKSxpPW4ubihhKSx1PW4oMSkscz1uLm4odSksYz1uKDMpLGw9bi5uKGMpO2Z1bmN0aW9uIGYodCxlKXtmb3IodmFyIG49MCxyPXQubGVuZ3RoO248cjtuKyspaWYoZS5hcHBseShlLFt0W25dLG4sdF0pKXJldHVybiB0W25dfWZ1bmN0aW9uIHAodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIGQodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJiFpc05hTih0KX1mdW5jdGlvbiB5KHQpe3JldHVybiBwYXJzZUludCh0LDEwKX1mdW5jdGlvbiBnKHQsZSxuKXtpZih0W2VdKXJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgXCIuY29uY2F0KGUsXCIgcGFzc2VkIHRvIFwiKS5jb25jYXQobixcIiAtIGRvIG5vdCBzZXQgdGhpcywgc2V0IGl0IG9uIHRoZSBjaGlsZC5cIikpfXZhciBoPVtcIk1velwiLFwiV2Via2l0XCIsXCJPXCIsXCJtc1wiXTtmdW5jdGlvbiBiKHQsZSl7cmV0dXJuIGU/XCJcIi5jb25jYXQoZSkuY29uY2F0KGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1cIlwiLG49ITAscj0wO3I8dC5sZW5ndGg7cisrKW4/KGUrPXRbcl0udG9VcHBlckNhc2UoKSxuPSExKTpcIi1cIj09PXRbcl0/bj0hMDplKz10W3JdO3JldHVybiBlfSh0KSk6dH12YXIgbT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcInRyYW5zZm9ybVwiO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fHZvaWQgMD09PXdpbmRvdy5kb2N1bWVudClyZXR1cm5cIlwiO3ZhciBlPXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7aWYodCBpbiBlKXJldHVyblwiXCI7Zm9yKHZhciBuPTA7bjxoLmxlbmd0aDtuKyspaWYoYih0LGhbbl0paW4gZSlyZXR1cm4gaFtuXTtyZXR1cm5cIlwifSgpO2Z1bmN0aW9uIHYodCxlKXt2YXIgbj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihyPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIHcodCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW2VdP2FyZ3VtZW50c1tlXTp7fTtlJTI/dihPYmplY3QobiksITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe08odCxlLG5bZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOnYoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gTyh0LGUsbil7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1uLHR9dmFyIFM9XCJcIjtmdW5jdGlvbiBEKHQsZSl7cmV0dXJuIFN8fChTPWYoW1wibWF0Y2hlc1wiLFwid2Via2l0TWF0Y2hlc1NlbGVjdG9yXCIsXCJtb3pNYXRjaGVzU2VsZWN0b3JcIixcIm1zTWF0Y2hlc1NlbGVjdG9yXCIsXCJvTWF0Y2hlc1NlbGVjdG9yXCJdLChmdW5jdGlvbihlKXtyZXR1cm4gcCh0W2VdKX0pKSksISFwKHRbU10pJiZ0W1NdKGUpfWZ1bmN0aW9uIHgodCxlLG4pe3ZhciByPXQ7ZG97aWYoRChyLGUpKXJldHVybiEwO2lmKHI9PT1uKXJldHVybiExO3I9ci5wYXJlbnROb2RlfXdoaWxlKHIpO3JldHVybiExfWZ1bmN0aW9uIGoodCxlLG4scil7aWYodCl7dmFyIG89dyh7Y2FwdHVyZTohMH0scik7dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihlLG4sbyk6dC5hdHRhY2hFdmVudD90LmF0dGFjaEV2ZW50KFwib25cIitlLG4pOnRbXCJvblwiK2VdPW59fWZ1bmN0aW9uIFAodCxlLG4scil7aWYodCl7dmFyIG89dyh7Y2FwdHVyZTohMH0scik7dC5yZW1vdmVFdmVudExpc3RlbmVyP3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4sbyk6dC5kZXRhY2hFdmVudD90LmRldGFjaEV2ZW50KFwib25cIitlLG4pOnRbXCJvblwiK2VdPW51bGx9fWZ1bmN0aW9uIEUodCl7dmFyIGU9dC5jbGllbnRIZWlnaHQsbj10Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtyZXR1cm4gZSs9eShuLmJvcmRlclRvcFdpZHRoKSxlKz15KG4uYm9yZGVyQm90dG9tV2lkdGgpfWZ1bmN0aW9uIFQodCl7dmFyIGU9dC5jbGllbnRXaWR0aCxuPXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybiBlKz15KG4uYm9yZGVyTGVmdFdpZHRoKSxlKz15KG4uYm9yZGVyUmlnaHRXaWR0aCl9ZnVuY3Rpb24gTih0KXt2YXIgZT10LmNsaWVudEhlaWdodCxuPXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybiBlLT15KG4ucGFkZGluZ1RvcCksZS09eShuLnBhZGRpbmdCb3R0b20pfWZ1bmN0aW9uIEModCl7dmFyIGU9dC5jbGllbnRXaWR0aCxuPXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybiBlLT15KG4ucGFkZGluZ0xlZnQpLGUtPXkobi5wYWRkaW5nUmlnaHQpfWZ1bmN0aW9uIE0odCxlLG4pe3ZhciByPXQueCxvPXQueSxhPVwidHJhbnNsYXRlKFwiLmNvbmNhdChyKS5jb25jYXQobixcIixcIikuY29uY2F0KG8pLmNvbmNhdChuLFwiKVwiKTtpZihlKXt2YXIgaT1cIlwiLmNvbmNhdChcInN0cmluZ1wiPT10eXBlb2YgZS54P2UueDplLngrbiksdT1cIlwiLmNvbmNhdChcInN0cmluZ1wiPT10eXBlb2YgZS55P2UueTplLnkrbik7YT1cInRyYW5zbGF0ZShcIi5jb25jYXQoaSxcIiwgXCIpLmNvbmNhdCh1LFwiKVwiKSthfXJldHVybiBhfWZ1bmN0aW9uIGsodCl7cmV0dXJuIHQudGFyZ2V0VG91Y2hlcyYmdC50YXJnZXRUb3VjaGVzWzBdP3QudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyOnQuY2hhbmdlZFRvdWNoZXMmJnQuY2hhbmdlZFRvdWNoZXNbMF0/dC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyOnZvaWQgMH1mdW5jdGlvbiBfKHQpe2lmKHQpe3ZhciBlLG4scj10LmdldEVsZW1lbnRCeUlkKFwicmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsXCIpO3J8fCgocj10LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSkudHlwZT1cInRleHQvY3NzXCIsci5pZD1cInJlYWN0LWRyYWdnYWJsZS1zdHlsZS1lbFwiLHIuaW5uZXJIVE1MPVwiLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6LW1vei1zZWxlY3Rpb24ge2FsbDogaW5oZXJpdDt9XFxuXCIsci5pbm5lckhUTUwrPVwiLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6c2VsZWN0aW9uIHthbGw6IGluaGVyaXQ7fVxcblwiLHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHIpKSx0LmJvZHkmJihlPXQuYm9keSxuPVwicmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvblwiLGUuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmFkZChuKTplLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKFwiKD86XnxcXFxccylcIi5jb25jYXQobixcIig/IVxcXFxTKVwiKSkpfHwoZS5jbGFzc05hbWUrPVwiIFwiLmNvbmNhdChuKSkpfX1mdW5jdGlvbiBSKHQpe3ZhciBlLG47aWYodCl0cnl7aWYodC5ib2R5JiYoZT10LmJvZHksbj1cInJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb25cIixlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5yZW1vdmUobik6ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XnxcXFxccylcIi5jb25jYXQobixcIig/IVxcXFxTKVwiKSxcImdcIiksXCJcIikpLHQuc2VsZWN0aW9uKXQuc2VsZWN0aW9uLmVtcHR5KCk7ZWxzZXt2YXIgcj0odC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKTtyJiZcIkNhcmV0XCIhPT1yLnR5cGUmJnIucmVtb3ZlQWxsUmFuZ2VzKCl9fWNhdGNoKHQpe319ZnVuY3Rpb24gWCh0LGUsbil7cmV0dXJuW01hdGgucm91bmQoZS90WzBdKSp0WzBdLE1hdGgucm91bmQobi90WzFdKSp0WzFdXX1mdW5jdGlvbiBZKHQpe3JldHVyblwiYm90aFwiPT09dC5wcm9wcy5heGlzfHxcInhcIj09PXQucHJvcHMuYXhpc31mdW5jdGlvbiBBKHQpe3JldHVyblwiYm90aFwiPT09dC5wcm9wcy5heGlzfHxcInlcIj09PXQucHJvcHMuYXhpc31mdW5jdGlvbiBMKHQsZSxuKXt2YXIgcj1cIm51bWJlclwiPT10eXBlb2YgZT9mdW5jdGlvbih0LGUpe3JldHVybiB0LnRhcmdldFRvdWNoZXMmJmYodC50YXJnZXRUb3VjaGVzLChmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuaWRlbnRpZmllcn0pKXx8dC5jaGFuZ2VkVG91Y2hlcyYmZih0LmNoYW5nZWRUb3VjaGVzLChmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuaWRlbnRpZmllcn0pKX0odCxlKTpudWxsO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlJiYhcilyZXR1cm4gbnVsbDt2YXIgbz1WKG4pO3JldHVybiBmdW5jdGlvbih0LGUsbil7dmFyIHI9ZT09PWUub3duZXJEb2N1bWVudC5ib2R5P3tsZWZ0OjAsdG9wOjB9OmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJue3g6KHQuY2xpZW50WCtlLnNjcm9sbExlZnQtci5sZWZ0KS9uLHk6KHQuY2xpZW50WStlLnNjcm9sbFRvcC1yLnRvcCkvbn19KHJ8fHQsbi5wcm9wcy5vZmZzZXRQYXJlbnR8fG8ub2Zmc2V0UGFyZW50fHxvLm93bmVyRG9jdW1lbnQuYm9keSxuLnByb3BzLnNjYWxlKX1mdW5jdGlvbiBJKHQsZSxuKXt2YXIgcj10LnN0YXRlLG89IWQoci5sYXN0WCksYT1WKHQpO3JldHVybiBvP3tub2RlOmEsZGVsdGFYOjAsZGVsdGFZOjAsbGFzdFg6ZSxsYXN0WTpuLHg6ZSx5Om59Ontub2RlOmEsZGVsdGFYOmUtci5sYXN0WCxkZWx0YVk6bi1yLmxhc3RZLGxhc3RYOnIubGFzdFgsbGFzdFk6ci5sYXN0WSx4OmUseTpufX1mdW5jdGlvbiBVKHQsZSl7dmFyIG49dC5wcm9wcy5zY2FsZTtyZXR1cm57bm9kZTplLm5vZGUseDp0LnN0YXRlLngrZS5kZWx0YVgvbix5OnQuc3RhdGUueStlLmRlbHRhWS9uLGRlbHRhWDplLmRlbHRhWC9uLGRlbHRhWTplLmRlbHRhWS9uLGxhc3RYOnQuc3RhdGUueCxsYXN0WTp0LnN0YXRlLnl9fWZ1bmN0aW9uIFYodCl7dmFyIGU9cy5hLmZpbmRET01Ob2RlKHQpO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIjxEcmFnZ2FibGVDb3JlPjogVW5tb3VudGVkIGR1cmluZyBldmVudCFcIik7cmV0dXJuIGV9ZnVuY3Rpb24gVyh0KXtyZXR1cm4oVz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gQih0LGUpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fSh0KXx8ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHwhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCkpKXJldHVybjt2YXIgbj1bXSxyPSEwLG89ITEsYT12b2lkIDA7dHJ5e2Zvcih2YXIgaSx1PXRbU3ltYm9sLml0ZXJhdG9yXSgpOyEocj0oaT11Lm5leHQoKSkuZG9uZSkmJihuLnB1c2goaS52YWx1ZSksIWV8fG4ubGVuZ3RoIT09ZSk7cj0hMCk7fWNhdGNoKHQpe289ITAsYT10fWZpbmFsbHl7dHJ5e3J8fG51bGw9PXUucmV0dXJufHx1LnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBhfX1yZXR1cm4gbn0odCxlKXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIEgodCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKG4pO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gSCh0LGUpfSh0LGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gSCh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9bmV3IEFycmF5KGUpO248ZTtuKyspcltuXT10W25dO3JldHVybiByfWZ1bmN0aW9uIHEodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIEcodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fWZ1bmN0aW9uIHoodCxlKXtyZXR1cm4hZXx8XCJvYmplY3RcIiE9PVcoZSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/Rih0KTplfWZ1bmN0aW9uIEYodCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIHR9ZnVuY3Rpb24gJCgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX1mdW5jdGlvbiBKKHQpe3JldHVybihKPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBLKHQsZSl7cmV0dXJuKEs9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIFEodCxlLG4pe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fXZhciBaPXtzdGFydDpcInRvdWNoc3RhcnRcIixtb3ZlOlwidG91Y2htb3ZlXCIsc3RvcDpcInRvdWNoZW5kXCJ9LHR0PXtzdGFydDpcIm1vdXNlZG93blwiLG1vdmU6XCJtb3VzZW1vdmVcIixzdG9wOlwibW91c2V1cFwifSxldD10dCxudD1mdW5jdGlvbih0KXshZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJksodCxlKX0odSx0KTt2YXIgZSxuLHIsYSxpPShlPXUsZnVuY3Rpb24oKXt2YXIgdCxuPUooZSk7aWYoJCgpKXt2YXIgcj1KKHRoaXMpLmNvbnN0cnVjdG9yO3Q9UmVmbGVjdC5jb25zdHJ1Y3Qobixhcmd1bWVudHMscil9ZWxzZSB0PW4uYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB6KHRoaXMsdCl9KTtmdW5jdGlvbiB1KCl7dmFyIHQ7cSh0aGlzLHUpO2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKW5bcl09YXJndW1lbnRzW3JdO3JldHVybiBRKEYodD1pLmNhbGwuYXBwbHkoaSxbdGhpc10uY29uY2F0KG4pKSksXCJzdGF0ZVwiLHtkcmFnZ2luZzohMSxsYXN0WDpOYU4sbGFzdFk6TmFOLHRvdWNoSWRlbnRpZmllcjpudWxsfSksUShGKHQpLFwibW91bnRlZFwiLCExKSxRKEYodCksXCJoYW5kbGVEcmFnU3RhcnRcIiwoZnVuY3Rpb24oZSl7aWYodC5wcm9wcy5vbk1vdXNlRG93bihlKSwhdC5wcm9wcy5hbGxvd0FueUNsaWNrJiZcIm51bWJlclwiPT10eXBlb2YgZS5idXR0b24mJjAhPT1lLmJ1dHRvbilyZXR1cm4hMTt2YXIgbj1zLmEuZmluZERPTU5vZGUoRih0KSk7aWYoIW58fCFuLm93bmVyRG9jdW1lbnR8fCFuLm93bmVyRG9jdW1lbnQuYm9keSl0aHJvdyBuZXcgRXJyb3IoXCI8RHJhZ2dhYmxlQ29yZT4gbm90IG1vdW50ZWQgb24gRHJhZ1N0YXJ0IVwiKTt2YXIgcj1uLm93bmVyRG9jdW1lbnQ7aWYoISh0LnByb3BzLmRpc2FibGVkfHwhKGUudGFyZ2V0IGluc3RhbmNlb2Ygci5kZWZhdWx0Vmlldy5Ob2RlKXx8dC5wcm9wcy5oYW5kbGUmJiF4KGUudGFyZ2V0LHQucHJvcHMuaGFuZGxlLG4pfHx0LnByb3BzLmNhbmNlbCYmeChlLnRhcmdldCx0LnByb3BzLmNhbmNlbCxuKSkpe1widG91Y2hzdGFydFwiPT09ZS50eXBlJiZlLnByZXZlbnREZWZhdWx0KCk7dmFyIG89ayhlKTt0LnNldFN0YXRlKHt0b3VjaElkZW50aWZpZXI6b30pO3ZhciBhPUwoZSxvLEYodCkpO2lmKG51bGwhPWEpe3ZhciBpPWEueCx1PWEueSxjPUkoRih0KSxpLHUpO3QucHJvcHMub25TdGFydCwhMSE9PXQucHJvcHMub25TdGFydChlLGMpJiYhMSE9PXQubW91bnRlZCYmKHQucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2smJl8ociksdC5zZXRTdGF0ZSh7ZHJhZ2dpbmc6ITAsbGFzdFg6aSxsYXN0WTp1fSksaihyLGV0Lm1vdmUsdC5oYW5kbGVEcmFnKSxqKHIsZXQuc3RvcCx0LmhhbmRsZURyYWdTdG9wKSl9fX0pKSxRKEYodCksXCJoYW5kbGVEcmFnXCIsKGZ1bmN0aW9uKGUpe3ZhciBuPUwoZSx0LnN0YXRlLnRvdWNoSWRlbnRpZmllcixGKHQpKTtpZihudWxsIT1uKXt2YXIgcj1uLngsbz1uLnk7aWYoQXJyYXkuaXNBcnJheSh0LnByb3BzLmdyaWQpKXt2YXIgYT1yLXQuc3RhdGUubGFzdFgsaT1vLXQuc3RhdGUubGFzdFksdT1CKFgodC5wcm9wcy5ncmlkLGEsaSksMik7aWYoYT11WzBdLGk9dVsxXSwhYSYmIWkpcmV0dXJuO3I9dC5zdGF0ZS5sYXN0WCthLG89dC5zdGF0ZS5sYXN0WStpfXZhciBzPUkoRih0KSxyLG8pO2lmKCExIT09dC5wcm9wcy5vbkRyYWcoZSxzKSYmITEhPT10Lm1vdW50ZWQpdC5zZXRTdGF0ZSh7bGFzdFg6cixsYXN0WTpvfSk7ZWxzZSB0cnl7dC5oYW5kbGVEcmFnU3RvcChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIikpfWNhdGNoKGUpe3ZhciBjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yy5pbml0TW91c2VFdmVudChcIm1vdXNldXBcIiwhMCwhMCx3aW5kb3csMCwwLDAsMCwwLCExLCExLCExLCExLDAsbnVsbCksdC5oYW5kbGVEcmFnU3RvcChjKX19fSkpLFEoRih0KSxcImhhbmRsZURyYWdTdG9wXCIsKGZ1bmN0aW9uKGUpe2lmKHQuc3RhdGUuZHJhZ2dpbmcpe3ZhciBuPUwoZSx0LnN0YXRlLnRvdWNoSWRlbnRpZmllcixGKHQpKTtpZihudWxsIT1uKXt2YXIgcj1uLngsbz1uLnksYT1JKEYodCkscixvKTtpZighMT09PXQucHJvcHMub25TdG9wKGUsYSl8fCExPT09dC5tb3VudGVkKXJldHVybiExO3ZhciBpPXMuYS5maW5kRE9NTm9kZShGKHQpKTtpJiZ0LnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrJiZSKGkub3duZXJEb2N1bWVudCksdC5zZXRTdGF0ZSh7ZHJhZ2dpbmc6ITEsbGFzdFg6TmFOLGxhc3RZOk5hTn0pLGkmJihQKGkub3duZXJEb2N1bWVudCxldC5tb3ZlLHQuaGFuZGxlRHJhZyksUChpLm93bmVyRG9jdW1lbnQsZXQuc3RvcCx0LmhhbmRsZURyYWdTdG9wKSl9fX0pKSxRKEYodCksXCJvbk1vdXNlRG93blwiLChmdW5jdGlvbihlKXtyZXR1cm4gZXQ9dHQsdC5oYW5kbGVEcmFnU3RhcnQoZSl9KSksUShGKHQpLFwib25Nb3VzZVVwXCIsKGZ1bmN0aW9uKGUpe3JldHVybiBldD10dCx0LmhhbmRsZURyYWdTdG9wKGUpfSkpLFEoRih0KSxcIm9uVG91Y2hTdGFydFwiLChmdW5jdGlvbihlKXtyZXR1cm4gZXQ9Wix0LmhhbmRsZURyYWdTdGFydChlKX0pKSxRKEYodCksXCJvblRvdWNoRW5kXCIsKGZ1bmN0aW9uKGUpe3JldHVybiBldD1aLHQuaGFuZGxlRHJhZ1N0b3AoZSl9KSksdH1yZXR1cm4gbj11LChyPVt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubW91bnRlZD0hMDt2YXIgdD1zLmEuZmluZERPTU5vZGUodGhpcyk7dCYmaih0LFouc3RhcnQsdGhpcy5vblRvdWNoU3RhcnQse3Bhc3NpdmU6ITF9KX19LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5tb3VudGVkPSExO3ZhciB0PXMuYS5maW5kRE9NTm9kZSh0aGlzKTtpZih0KXt2YXIgZT10Lm93bmVyRG9jdW1lbnQ7UChlLHR0Lm1vdmUsdGhpcy5oYW5kbGVEcmFnKSxQKGUsWi5tb3ZlLHRoaXMuaGFuZGxlRHJhZyksUChlLHR0LnN0b3AsdGhpcy5oYW5kbGVEcmFnU3RvcCksUChlLFouc3RvcCx0aGlzLmhhbmRsZURyYWdTdG9wKSxQKHQsWi5zdGFydCx0aGlzLm9uVG91Y2hTdGFydCx7cGFzc2l2ZTohMX0pLHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2smJlIoZSl9fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIG8uYS5jbG9uZUVsZW1lbnQoby5hLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbikse29uTW91c2VEb3duOnRoaXMub25Nb3VzZURvd24sb25Nb3VzZVVwOnRoaXMub25Nb3VzZVVwLG9uVG91Y2hFbmQ6dGhpcy5vblRvdWNoRW5kfSl9fV0pJiZHKG4ucHJvdG90eXBlLHIpLGEmJkcobixhKSx1fShvLmEuQ29tcG9uZW50KTtmdW5jdGlvbiBydCh0KXtyZXR1cm4ocnQ9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIG90KCl7cmV0dXJuKG90PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKHRbcl09bltyXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYXQodCxlKXtpZihudWxsPT10KXJldHVybnt9O3ZhciBuLHIsbz1mdW5jdGlvbih0LGUpe2lmKG51bGw9PXQpcmV0dXJue307dmFyIG4scixvPXt9LGE9T2JqZWN0LmtleXModCk7Zm9yKHI9MDtyPGEubGVuZ3RoO3IrKyluPWFbcl0sZS5pbmRleE9mKG4pPj0wfHwob1tuXT10W25dKTtyZXR1cm4gb30odCxlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgYT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2ZvcihyPTA7cjxhLmxlbmd0aDtyKyspbj1hW3JdLGUuaW5kZXhPZihuKT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHQsbikmJihvW25dPXRbbl0pfXJldHVybiBvfWZ1bmN0aW9uIGl0KHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxhPXZvaWQgMDt0cnl7Zm9yKHZhciBpLHU9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShpPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChpLnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2godCl7bz0hMCxhPXR9ZmluYWxseXt0cnl7cnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGF9fXJldHVybiBufSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gdXQodCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKG4pO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gdXQodCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHV0KHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gc3QodCxlKXt2YXIgbj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihyPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIGN0KHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPW51bGwhPWFyZ3VtZW50c1tlXT9hcmd1bWVudHNbZV06e307ZSUyP3N0KE9iamVjdChuKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7YnQodCxlLG5bZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOnN0KE9iamVjdChuKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sZSkpfSkpfXJldHVybiB0fWZ1bmN0aW9uIGx0KHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIua2V5LHIpfX1mdW5jdGlvbiBmdCh0LGUsbil7cmV0dXJuIGUmJmx0KHQucHJvdG90eXBlLGUpLG4mJmx0KHQsbiksdH1mdW5jdGlvbiBwdCh0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT09cnQoZSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/ZHQodCk6ZX1mdW5jdGlvbiBkdCh0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH1mdW5jdGlvbiB5dCgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX1mdW5jdGlvbiBndCh0KXtyZXR1cm4oZ3Q9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIGh0KHQsZSl7cmV0dXJuKGh0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiBidCh0LGUsbil7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1uLHR9UShudCxcImRpc3BsYXlOYW1lXCIsXCJEcmFnZ2FibGVDb3JlXCIpLFEobnQsXCJwcm9wVHlwZXNcIix7YWxsb3dBbnlDbGljazppLmEuYm9vbCxkaXNhYmxlZDppLmEuYm9vbCxlbmFibGVVc2VyU2VsZWN0SGFjazppLmEuYm9vbCxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24odCxlKXtpZih0W2VdJiYxIT09dFtlXS5ub2RlVHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJEcmFnZ2FibGUncyBvZmZzZXRQYXJlbnQgbXVzdCBiZSBhIERPTSBOb2RlLlwiKX0sZ3JpZDppLmEuYXJyYXlPZihpLmEubnVtYmVyKSxoYW5kbGU6aS5hLnN0cmluZyxjYW5jZWw6aS5hLnN0cmluZyxvblN0YXJ0OmkuYS5mdW5jLG9uRHJhZzppLmEuZnVuYyxvblN0b3A6aS5hLmZ1bmMsb25Nb3VzZURvd246aS5hLmZ1bmMsc2NhbGU6aS5hLm51bWJlcixjbGFzc05hbWU6ZyxzdHlsZTpnLHRyYW5zZm9ybTpnfSksUShudCxcImRlZmF1bHRQcm9wc1wiLHthbGxvd0FueUNsaWNrOiExLGNhbmNlbDpudWxsLGRpc2FibGVkOiExLGVuYWJsZVVzZXJTZWxlY3RIYWNrOiEwLG9mZnNldFBhcmVudDpudWxsLGhhbmRsZTpudWxsLGdyaWQ6bnVsbCx0cmFuc2Zvcm06bnVsbCxvblN0YXJ0OmZ1bmN0aW9uKCl7fSxvbkRyYWc6ZnVuY3Rpb24oKXt9LG9uU3RvcDpmdW5jdGlvbigpe30sb25Nb3VzZURvd246ZnVuY3Rpb24oKXt9LHNjYWxlOjF9KTt2YXIgbXQ9ZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZodCh0LGUpfShyLHQpO3ZhciBlLG49KGU9cixmdW5jdGlvbigpe3ZhciB0LG49Z3QoZSk7aWYoeXQoKSl7dmFyIHI9Z3QodGhpcykuY29uc3RydWN0b3I7dD1SZWZsZWN0LmNvbnN0cnVjdChuLGFyZ3VtZW50cyxyKX1lbHNlIHQ9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHB0KHRoaXMsdCl9KTtmdW5jdGlvbiByKHQpe3ZhciBlO3JldHVybiBmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsciksYnQoZHQoZT1uLmNhbGwodGhpcyx0KSksXCJvbkRyYWdTdGFydFwiLChmdW5jdGlvbih0LG4pe2lmKCExPT09ZS5wcm9wcy5vblN0YXJ0KHQsVShkdChlKSxuKSkpcmV0dXJuITE7ZS5zZXRTdGF0ZSh7ZHJhZ2dpbmc6ITAsZHJhZ2dlZDohMH0pfSkpLGJ0KGR0KGUpLFwib25EcmFnXCIsKGZ1bmN0aW9uKHQsbil7aWYoIWUuc3RhdGUuZHJhZ2dpbmcpcmV0dXJuITE7dmFyIHI9VShkdChlKSxuKSxvPXt4OnIueCx5OnIueX07aWYoZS5wcm9wcy5ib3VuZHMpe3ZhciBhPW8ueCxpPW8ueTtvLngrPWUuc3RhdGUuc2xhY2tYLG8ueSs9ZS5zdGF0ZS5zbGFja1k7dmFyIHU9aXQoZnVuY3Rpb24odCxlLG4pe2lmKCF0LnByb3BzLmJvdW5kcylyZXR1cm5bZSxuXTt2YXIgcj10LnByb3BzLmJvdW5kcztyPVwic3RyaW5nXCI9PXR5cGVvZiByP3I6ZnVuY3Rpb24odCl7cmV0dXJue2xlZnQ6dC5sZWZ0LHRvcDp0LnRvcCxyaWdodDp0LnJpZ2h0LGJvdHRvbTp0LmJvdHRvbX19KHIpO3ZhciBvPVYodCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpe3ZhciBhLGk9by5vd25lckRvY3VtZW50LHU9aS5kZWZhdWx0VmlldztpZighKChhPVwicGFyZW50XCI9PT1yP28ucGFyZW50Tm9kZTppLnF1ZXJ5U2VsZWN0b3IocikpaW5zdGFuY2VvZiB1LkhUTUxFbGVtZW50KSl0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBzZWxlY3RvciBcIicrcisnXCIgY291bGQgbm90IGZpbmQgYW4gZWxlbWVudC4nKTt2YXIgcz11LmdldENvbXB1dGVkU3R5bGUobyksYz11LmdldENvbXB1dGVkU3R5bGUoYSk7cj17bGVmdDotby5vZmZzZXRMZWZ0K3koYy5wYWRkaW5nTGVmdCkreShzLm1hcmdpbkxlZnQpLHRvcDotby5vZmZzZXRUb3AreShjLnBhZGRpbmdUb3ApK3kocy5tYXJnaW5Ub3ApLHJpZ2h0OkMoYSktVChvKS1vLm9mZnNldExlZnQreShjLnBhZGRpbmdSaWdodCkteShzLm1hcmdpblJpZ2h0KSxib3R0b206TihhKS1FKG8pLW8ub2Zmc2V0VG9wK3koYy5wYWRkaW5nQm90dG9tKS15KHMubWFyZ2luQm90dG9tKX19cmV0dXJuIGQoci5yaWdodCkmJihlPU1hdGgubWluKGUsci5yaWdodCkpLGQoci5ib3R0b20pJiYobj1NYXRoLm1pbihuLHIuYm90dG9tKSksZChyLmxlZnQpJiYoZT1NYXRoLm1heChlLHIubGVmdCkpLGQoci50b3ApJiYobj1NYXRoLm1heChuLHIudG9wKSksW2Usbl19KGR0KGUpLG8ueCxvLnkpLDIpLHM9dVswXSxjPXVbMV07by54PXMsby55PWMsby5zbGFja1g9ZS5zdGF0ZS5zbGFja1grKGEtby54KSxvLnNsYWNrWT1lLnN0YXRlLnNsYWNrWSsoaS1vLnkpLHIueD1vLngsci55PW8ueSxyLmRlbHRhWD1vLngtZS5zdGF0ZS54LHIuZGVsdGFZPW8ueS1lLnN0YXRlLnl9aWYoITE9PT1lLnByb3BzLm9uRHJhZyh0LHIpKXJldHVybiExO2Uuc2V0U3RhdGUobyl9KSksYnQoZHQoZSksXCJvbkRyYWdTdG9wXCIsKGZ1bmN0aW9uKHQsbil7aWYoIWUuc3RhdGUuZHJhZ2dpbmcpcmV0dXJuITE7aWYoITE9PT1lLnByb3BzLm9uU3RvcCh0LFUoZHQoZSksbikpKXJldHVybiExO3ZhciByPXtkcmFnZ2luZzohMSxzbGFja1g6MCxzbGFja1k6MH07aWYoQm9vbGVhbihlLnByb3BzLnBvc2l0aW9uKSl7dmFyIG89ZS5wcm9wcy5wb3NpdGlvbixhPW8ueCxpPW8ueTtyLng9YSxyLnk9aX1lLnNldFN0YXRlKHIpfSkpLGUuc3RhdGU9e2RyYWdnaW5nOiExLGRyYWdnZWQ6ITEseDp0LnBvc2l0aW9uP3QucG9zaXRpb24ueDp0LmRlZmF1bHRQb3NpdGlvbi54LHk6dC5wb3NpdGlvbj90LnBvc2l0aW9uLnk6dC5kZWZhdWx0UG9zaXRpb24ueSxwcmV2UHJvcHNQb3NpdGlvbjpjdCh7fSx0LnBvc2l0aW9uKSxzbGFja1g6MCxzbGFja1k6MCxpc0VsZW1lbnRTVkc6ITF9LCF0LnBvc2l0aW9ufHx0Lm9uRHJhZ3x8dC5vblN0b3B8fGNvbnNvbGUud2FybihcIkEgYHBvc2l0aW9uYCB3YXMgYXBwbGllZCB0byB0aGlzIDxEcmFnZ2FibGU+LCB3aXRob3V0IGRyYWcgaGFuZGxlcnMuIFRoaXMgd2lsbCBtYWtlIHRoaXMgY29tcG9uZW50IGVmZmVjdGl2ZWx5IHVuZHJhZ2dhYmxlLiBQbGVhc2UgYXR0YWNoIGBvbkRyYWdgIG9yIGBvblN0b3BgIGhhbmRsZXJzIHNvIHlvdSBjYW4gYWRqdXN0IHRoZSBgcG9zaXRpb25gIG9mIHRoaXMgZWxlbWVudC5cIiksZX1yZXR1cm4gZnQocixudWxsLFt7a2V5OlwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10LnBvc2l0aW9uLHI9ZS5wcmV2UHJvcHNQb3NpdGlvbjtyZXR1cm4hbnx8ciYmbi54PT09ci54JiZuLnk9PT1yLnk/bnVsbDp7eDpuLngseTpuLnkscHJldlByb3BzUG9zaXRpb246Y3Qoe30sbil9fX1dKSxmdChyLFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZvaWQgMCE9PXdpbmRvdy5TVkdFbGVtZW50JiZzLmEuZmluZERPTU5vZGUodGhpcylpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50JiZ0aGlzLnNldFN0YXRlKHtpc0VsZW1lbnRTVkc6ITB9KX19LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmc6ITF9KX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5wcm9wcyxuPShlLmF4aXMsZS5ib3VuZHMsZS5jaGlsZHJlbikscj1lLmRlZmF1bHRQb3NpdGlvbixhPWUuZGVmYXVsdENsYXNzTmFtZSxpPWUuZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nLHU9ZS5kZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCxzPWUucG9zaXRpb24sYz1lLnBvc2l0aW9uT2Zmc2V0LGY9KGUuc2NhbGUsYXQoZSxbXCJheGlzXCIsXCJib3VuZHNcIixcImNoaWxkcmVuXCIsXCJkZWZhdWx0UG9zaXRpb25cIixcImRlZmF1bHRDbGFzc05hbWVcIixcImRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZ1wiLFwiZGVmYXVsdENsYXNzTmFtZURyYWdnZWRcIixcInBvc2l0aW9uXCIsXCJwb3NpdGlvbk9mZnNldFwiLFwic2NhbGVcIl0pKSxwPXt9LGQ9bnVsbCx5PSFCb29sZWFuKHMpfHx0aGlzLnN0YXRlLmRyYWdnaW5nLGc9c3x8cixoPXt4OlkodGhpcykmJnk/dGhpcy5zdGF0ZS54OmcueCx5OkEodGhpcykmJnk/dGhpcy5zdGF0ZS55OmcueX07dGhpcy5zdGF0ZS5pc0VsZW1lbnRTVkc/ZD1mdW5jdGlvbih0LGUpe3JldHVybiBNKHQsZSxcIlwiKX0oaCxjKTpwPWZ1bmN0aW9uKHQsZSl7dmFyIG49TSh0LGUsXCJweFwiKTtyZXR1cm4gTyh7fSxiKFwidHJhbnNmb3JtXCIsbSksbil9KGgsYyk7dmFyIHY9bCgpKG4ucHJvcHMuY2xhc3NOYW1lfHxcIlwiLGEsKGJ0KHQ9e30saSx0aGlzLnN0YXRlLmRyYWdnaW5nKSxidCh0LHUsdGhpcy5zdGF0ZS5kcmFnZ2VkKSx0KSk7cmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KG50LG90KHt9LGYse29uU3RhcnQ6dGhpcy5vbkRyYWdTdGFydCxvbkRyYWc6dGhpcy5vbkRyYWcsb25TdG9wOnRoaXMub25EcmFnU3RvcH0pLG8uYS5jbG9uZUVsZW1lbnQoby5hLkNoaWxkcmVuLm9ubHkobikse2NsYXNzTmFtZTp2LHN0eWxlOmN0KHt9LG4ucHJvcHMuc3R5bGUse30scCksdHJhbnNmb3JtOmR9KSl9fV0pLHJ9KG8uYS5Db21wb25lbnQpO2J0KG10LFwiZGlzcGxheU5hbWVcIixcIkRyYWdnYWJsZVwiKSxidChtdCxcInByb3BUeXBlc1wiLGN0KHt9LG50LnByb3BUeXBlcyx7YXhpczppLmEub25lT2YoW1wiYm90aFwiLFwieFwiLFwieVwiLFwibm9uZVwiXSksYm91bmRzOmkuYS5vbmVPZlR5cGUoW2kuYS5zaGFwZSh7bGVmdDppLmEubnVtYmVyLHJpZ2h0OmkuYS5udW1iZXIsdG9wOmkuYS5udW1iZXIsYm90dG9tOmkuYS5udW1iZXJ9KSxpLmEuc3RyaW5nLGkuYS5vbmVPZihbITFdKV0pLGRlZmF1bHRDbGFzc05hbWU6aS5hLnN0cmluZyxkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6aS5hLnN0cmluZyxkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDppLmEuc3RyaW5nLGRlZmF1bHRQb3NpdGlvbjppLmEuc2hhcGUoe3g6aS5hLm51bWJlcix5OmkuYS5udW1iZXJ9KSxwb3NpdGlvbk9mZnNldDppLmEuc2hhcGUoe3g6aS5hLm9uZU9mVHlwZShbaS5hLm51bWJlcixpLmEuc3RyaW5nXSkseTppLmEub25lT2ZUeXBlKFtpLmEubnVtYmVyLGkuYS5zdHJpbmddKX0pLHBvc2l0aW9uOmkuYS5zaGFwZSh7eDppLmEubnVtYmVyLHk6aS5hLm51bWJlcn0pLGNsYXNzTmFtZTpnLHN0eWxlOmcsdHJhbnNmb3JtOmd9KSksYnQobXQsXCJkZWZhdWx0UHJvcHNcIixjdCh7fSxudC5kZWZhdWx0UHJvcHMse2F4aXM6XCJib3RoXCIsYm91bmRzOiExLGRlZmF1bHRDbGFzc05hbWU6XCJyZWFjdC1kcmFnZ2FibGVcIixkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6XCJyZWFjdC1kcmFnZ2FibGUtZHJhZ2dpbmdcIixkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDpcInJlYWN0LWRyYWdnYWJsZS1kcmFnZ2VkXCIsZGVmYXVsdFBvc2l0aW9uOnt4OjAseTowfSxwb3NpdGlvbjpudWxsLHNjYWxlOjF9KSl9XSl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1kcmFnZ2FibGUubWluLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdERyYWdnYWJsZSA9IHJlcXVpcmUoXCJyZWFjdC1kcmFnZ2FibGVcIik7XG5cbnZhciBfcmVhY3RSZXNpemFibGUgPSByZXF1aXJlKFwicmVhY3QtcmVzaXphYmxlXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfY2FsY3VsYXRlVXRpbHMgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVVdGlsc1wiKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKipcbiAqIEFuIGluZGl2aWR1YWwgaXRlbSB3aXRoaW4gYSBSZWFjdEdyaWRMYXlvdXQuXG4gKi9cbnZhciBHcmlkSXRlbSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZEl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWRJdGVtKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRJdGVtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEdyaWRJdGVtKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge1xuICAgICAgcmVzaXppbmc6IG51bGwsXG4gICAgICBkcmFnZ2luZzogbnVsbCxcbiAgICAgIGNsYXNzTmFtZTogXCJcIlxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImN1cnJlbnROb2RlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25EcmFnU3RhcnRcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICwgX3JlZikge1xuICAgICAgdmFyIG5vZGUgPSBfcmVmLm5vZGU7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSByZXR1cm47XG4gICAgICB2YXIgbmV3UG9zaXRpb25cbiAgICAgIC8qOiBQYXJ0aWFsUG9zaXRpb24qL1xuICAgICAgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfTsgLy8gVE9ETzogdGhpcyB3b250IHdvcmsgb24gbmVzdGVkIHBhcmVudHNcblxuICAgICAgdmFyIG9mZnNldFBhcmVudCA9IG5vZGUub2Zmc2V0UGFyZW50O1xuICAgICAgaWYgKCFvZmZzZXRQYXJlbnQpIHJldHVybjtcbiAgICAgIHZhciBwYXJlbnRSZWN0ID0gb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNMZWZ0ID0gY2xpZW50UmVjdC5sZWZ0IC8gX3RoaXMucHJvcHMudHJhbnNmb3JtU2NhbGU7XG4gICAgICB2YXIgcExlZnQgPSBwYXJlbnRSZWN0LmxlZnQgLyBfdGhpcy5wcm9wcy50cmFuc2Zvcm1TY2FsZTtcbiAgICAgIHZhciBjVG9wID0gY2xpZW50UmVjdC50b3AgLyBfdGhpcy5wcm9wcy50cmFuc2Zvcm1TY2FsZTtcbiAgICAgIHZhciBwVG9wID0gcGFyZW50UmVjdC50b3AgLyBfdGhpcy5wcm9wcy50cmFuc2Zvcm1TY2FsZTtcbiAgICAgIG5ld1Bvc2l0aW9uLmxlZnQgPSBjTGVmdCAtIHBMZWZ0ICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQ7XG4gICAgICBuZXdQb3NpdGlvbi50b3AgPSBjVG9wIC0gcFRvcCArIG9mZnNldFBhcmVudC5zY3JvbGxUb3A7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IG5ld1Bvc2l0aW9uXG4gICAgICB9KTtcblxuICAgICAgdmFyIF9jYWxjWFkgPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNYWSkoX3RoaXMuZ2V0UG9zaXRpb25QYXJhbXMoKSwgbmV3UG9zaXRpb24udG9wLCBuZXdQb3NpdGlvbi5sZWZ0LCBfdGhpcy5wcm9wcy53LCBfdGhpcy5wcm9wcy5oKSxcbiAgICAgICAgICB4ID0gX2NhbGNYWS54LFxuICAgICAgICAgIHkgPSBfY2FsY1hZLnk7XG5cbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkRyYWdTdGFydCAmJiBfdGhpcy5wcm9wcy5vbkRyYWdTdGFydC5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBfdGhpcy5wcm9wcy5pLCB4LCB5LCB7XG4gICAgICAgIGU6IGUsXG4gICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgIG5ld1Bvc2l0aW9uOiBuZXdQb3NpdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25EcmFnXCIsIGZ1bmN0aW9uIChlXG4gICAgLyo6IEV2ZW50Ki9cbiAgICAsIF9yZWYyKSB7XG4gICAgICB2YXIgbm9kZSA9IF9yZWYyLm5vZGUsXG4gICAgICAgICAgZGVsdGFYID0gX3JlZjIuZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWSA9IF9yZWYyLmRlbHRhWTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uRHJhZyA9IF90aGlzJHByb3BzLm9uRHJhZyxcbiAgICAgICAgICB0cmFuc2Zvcm1TY2FsZSA9IF90aGlzJHByb3BzLnRyYW5zZm9ybVNjYWxlO1xuICAgICAgaWYgKCFvbkRyYWcpIHJldHVybjtcbiAgICAgIGRlbHRhWCAvPSB0cmFuc2Zvcm1TY2FsZTtcbiAgICAgIGRlbHRhWSAvPSB0cmFuc2Zvcm1TY2FsZTtcbiAgICAgIHZhciBuZXdQb3NpdGlvblxuICAgICAgLyo6IFBhcnRpYWxQb3NpdGlvbiovXG4gICAgICA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9O1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcmFnZ2luZykgdGhyb3cgbmV3IEVycm9yKFwib25EcmFnIGNhbGxlZCBiZWZvcmUgb25EcmFnU3RhcnQuXCIpO1xuICAgICAgbmV3UG9zaXRpb24ubGVmdCA9IF90aGlzLnN0YXRlLmRyYWdnaW5nLmxlZnQgKyBkZWx0YVg7XG4gICAgICBuZXdQb3NpdGlvbi50b3AgPSBfdGhpcy5zdGF0ZS5kcmFnZ2luZy50b3AgKyBkZWx0YVk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IG5ld1Bvc2l0aW9uXG4gICAgICB9KTtcblxuICAgICAgdmFyIF9jYWxjWFkyID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjWFkpKF90aGlzLmdldFBvc2l0aW9uUGFyYW1zKCksIG5ld1Bvc2l0aW9uLnRvcCwgbmV3UG9zaXRpb24ubGVmdCwgX3RoaXMucHJvcHMudywgX3RoaXMucHJvcHMuaCksXG4gICAgICAgICAgeCA9IF9jYWxjWFkyLngsXG4gICAgICAgICAgeSA9IF9jYWxjWFkyLnk7XG5cbiAgICAgIHJldHVybiBvbkRyYWcgJiYgb25EcmFnLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIF90aGlzLnByb3BzLmksIHgsIHksIHtcbiAgICAgICAgZTogZSxcbiAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgbmV3UG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdTdG9wXCIsIGZ1bmN0aW9uIChlXG4gICAgLyo6IEV2ZW50Ki9cbiAgICAsIF9yZWYzKSB7XG4gICAgICB2YXIgbm9kZSA9IF9yZWYzLm5vZGU7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLm9uRHJhZ1N0b3ApIHJldHVybjtcbiAgICAgIHZhciBuZXdQb3NpdGlvblxuICAgICAgLyo6IFBhcnRpYWxQb3NpdGlvbiovXG4gICAgICA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9O1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcmFnZ2luZykgdGhyb3cgbmV3IEVycm9yKFwib25EcmFnRW5kIGNhbGxlZCBiZWZvcmUgb25EcmFnU3RhcnQuXCIpO1xuICAgICAgbmV3UG9zaXRpb24ubGVmdCA9IF90aGlzLnN0YXRlLmRyYWdnaW5nLmxlZnQ7XG4gICAgICBuZXdQb3NpdGlvbi50b3AgPSBfdGhpcy5zdGF0ZS5kcmFnZ2luZy50b3A7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IG51bGxcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX2NhbGNYWTMgPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNYWSkoX3RoaXMuZ2V0UG9zaXRpb25QYXJhbXMoKSwgbmV3UG9zaXRpb24udG9wLCBuZXdQb3NpdGlvbi5sZWZ0LCBfdGhpcy5wcm9wcy53LCBfdGhpcy5wcm9wcy5oKSxcbiAgICAgICAgICB4ID0gX2NhbGNYWTMueCxcbiAgICAgICAgICB5ID0gX2NhbGNYWTMueTtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uRHJhZ1N0b3AgJiYgX3RoaXMucHJvcHMub25EcmFnU3RvcC5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBfdGhpcy5wcm9wcy5pLCB4LCB5LCB7XG4gICAgICAgIGU6IGUsXG4gICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgIG5ld1Bvc2l0aW9uOiBuZXdQb3NpdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25SZXNpemVTdG9wXCIsIGZ1bmN0aW9uIChlXG4gICAgLyo6IEV2ZW50Ki9cbiAgICAsIGNhbGxiYWNrRGF0YVxuICAgIC8qOiB7IG5vZGU6IEhUTUxFbGVtZW50LCBzaXplOiBQb3NpdGlvbiB9Ki9cbiAgICApIHtcbiAgICAgIF90aGlzLm9uUmVzaXplSGFuZGxlcihlLCBjYWxsYmFja0RhdGEsIFwib25SZXNpemVTdG9wXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUmVzaXplU3RhcnRcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICwgY2FsbGJhY2tEYXRhXG4gICAgLyo6IHsgbm9kZTogSFRNTEVsZW1lbnQsIHNpemU6IFBvc2l0aW9uIH0qL1xuICAgICkge1xuICAgICAgX3RoaXMub25SZXNpemVIYW5kbGVyKGUsIGNhbGxiYWNrRGF0YSwgXCJvblJlc2l6ZVN0YXJ0XCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUmVzaXplXCIsIGZ1bmN0aW9uIChlXG4gICAgLyo6IEV2ZW50Ki9cbiAgICAsIGNhbGxiYWNrRGF0YVxuICAgIC8qOiB7IG5vZGU6IEhUTUxFbGVtZW50LCBzaXplOiBQb3NpdGlvbiB9Ki9cbiAgICApIHtcbiAgICAgIF90aGlzLm9uUmVzaXplSGFuZGxlcihlLCBjYWxsYmFja0RhdGEsIFwib25SZXNpemVcIik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZEl0ZW0sIFt7XG4gICAga2V5OiBcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzXG4gICAgLyo6IFByb3BzKi9cbiAgICAsIG5leHRTdGF0ZVxuICAgIC8qOiBTdGF0ZSovXG4gICAgKSB7XG4gICAgICAvLyBXZSBjYW4ndCBkZWVwbHkgY29tcGFyZSBjaGlsZHJlbi4gSWYgdGhlIGRldmVsb3BlciBtZW1vaXplcyB0aGVtLCB3ZSBjYW5cbiAgICAgIC8vIHVzZSB0aGlzIG9wdGltaXphdGlvbi5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZHJvcHBpbmdQb3NpdGlvbiAhPT0gbmV4dFByb3BzLmRyb3BwaW5nUG9zaXRpb24pIHJldHVybiB0cnVlOyAvLyBUT0RPIG1lbW9pemUgdGhlc2UgY2FsY3VsYXRpb25zIHNvIHRoZXkgZG9uJ3QgdGFrZSBzbyBsb25nP1xuXG4gICAgICB2YXIgb2xkUG9zaXRpb24gPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNHcmlkSXRlbVBvc2l0aW9uKSh0aGlzLmdldFBvc2l0aW9uUGFyYW1zKHRoaXMucHJvcHMpLCB0aGlzLnByb3BzLngsIHRoaXMucHJvcHMueSwgdGhpcy5wcm9wcy53LCB0aGlzLnByb3BzLmgsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjR3JpZEl0ZW1Qb3NpdGlvbikodGhpcy5nZXRQb3NpdGlvblBhcmFtcyhuZXh0UHJvcHMpLCBuZXh0UHJvcHMueCwgbmV4dFByb3BzLnksIG5leHRQcm9wcy53LCBuZXh0UHJvcHMuaCwgbmV4dFN0YXRlKTtcbiAgICAgIHJldHVybiAhKDAsIF91dGlscy5mYXN0UG9zaXRpb25FcXVhbCkob2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uKSB8fCB0aGlzLnByb3BzLnVzZUNTU1RyYW5zZm9ybXMgIT09IG5leHRQcm9wcy51c2VDU1NUcmFuc2Zvcm1zO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubW92ZURyb3BwaW5nSXRlbSh7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzXG4gICAgLyo6IFByb3BzKi9cbiAgICApIHtcbiAgICAgIHRoaXMubW92ZURyb3BwaW5nSXRlbShwcmV2UHJvcHMpO1xuICAgIH0gLy8gV2hlbiBhIGRyb3BwaW5nUG9zaXRpb24gaXMgcHJlc2VudCwgdGhpcyBtZWFucyB3ZSBzaG91bGQgZmlyZSBhIG1vdmUgZXZlbnQsIGFzIGlmIHdlIGhhZCBtb3ZlZFxuICAgIC8vIHRoaXMgZWxlbWVudCBieSBgeCwgeWAgcGl4ZWxzLlxuXG4gIH0sIHtcbiAgICBrZXk6IFwibW92ZURyb3BwaW5nSXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlRHJvcHBpbmdJdGVtKHByZXZQcm9wc1xuICAgIC8qOiBQcm9wcyovXG4gICAgKSB7XG4gICAgICB2YXIgZHJvcHBpbmdQb3NpdGlvbiA9IHRoaXMucHJvcHMuZHJvcHBpbmdQb3NpdGlvbjtcbiAgICAgIGlmICghZHJvcHBpbmdQb3NpdGlvbikgcmV0dXJuO1xuICAgICAgdmFyIHByZXZEcm9wcGluZ1Bvc2l0aW9uID0gcHJldlByb3BzLmRyb3BwaW5nUG9zaXRpb24gfHwge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDBcbiAgICAgIH07XG4gICAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLnN0YXRlLmRyYWdnaW5nO1xuXG4gICAgICBpZiAoIXRoaXMuY3VycmVudE5vZGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWZpbmQtZG9tLW5vZGVcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9ICgoX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcylcbiAgICAgICAgLyo6IGFueSovXG4gICAgICAgIClcbiAgICAgICAgLyo6IEhUTUxFbGVtZW50Ki9cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3VsZERyYWcgPSBkcmFnZ2luZyAmJiBkcm9wcGluZ1Bvc2l0aW9uLmxlZnQgIT09IHByZXZEcm9wcGluZ1Bvc2l0aW9uLmxlZnQgfHwgZHJvcHBpbmdQb3NpdGlvbi50b3AgIT09IHByZXZEcm9wcGluZ1Bvc2l0aW9uLnRvcDtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0KGRyb3BwaW5nUG9zaXRpb24uZSwge1xuICAgICAgICAgIG5vZGU6IHRoaXMuY3VycmVudE5vZGUsXG4gICAgICAgICAgZGVsdGFYOiBkcm9wcGluZ1Bvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgZGVsdGFZOiBkcm9wcGluZ1Bvc2l0aW9uLnRvcFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkRHJhZykge1xuICAgICAgICB2YXIgZGVsdGFYID0gZHJvcHBpbmdQb3NpdGlvbi5sZWZ0IC0gZHJhZ2dpbmcubGVmdDtcbiAgICAgICAgdmFyIGRlbHRhWSA9IGRyb3BwaW5nUG9zaXRpb24udG9wIC0gZHJhZ2dpbmcudG9wO1xuICAgICAgICB0aGlzLm9uRHJhZyhkcm9wcGluZ1Bvc2l0aW9uLmUsIHtcbiAgICAgICAgICBub2RlOiB0aGlzLmN1cnJlbnROb2RlLFxuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZGVsdGFZXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQb3NpdGlvblBhcmFtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3NpdGlvblBhcmFtcygpXG4gICAgLyo6IFBvc2l0aW9uUGFyYW1zKi9cbiAgICB7XG4gICAgICB2YXIgcHJvcHNcbiAgICAgIC8qOiBQcm9wcyovXG4gICAgICA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbHM6IHByb3BzLmNvbHMsXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IHByb3BzLmNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgIGNvbnRhaW5lcldpZHRoOiBwcm9wcy5jb250YWluZXJXaWR0aCxcbiAgICAgICAgbWFyZ2luOiBwcm9wcy5tYXJnaW4sXG4gICAgICAgIG1heFJvd3M6IHByb3BzLm1heFJvd3MsXG4gICAgICAgIHJvd0hlaWdodDogcHJvcHMucm93SGVpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHdoZXJlIHdlIHNldCB0aGUgZ3JpZCBpdGVtJ3MgYWJzb2x1dGUgcGxhY2VtZW50LiBJdCBnZXRzIGEgbGl0dGxlIHRyaWNreSBiZWNhdXNlIHdlIHdhbnQgdG8gZG8gaXRcbiAgICAgKiB3ZWxsIHdoZW4gc2VydmVyIHJlbmRlcmluZywgYW5kIHRoZSBvbmx5IHdheSB0byBkbyB0aGF0IHByb3Blcmx5IGlzIHRvIHVzZSBwZXJjZW50YWdlIHdpZHRoL2xlZnQgYmVjYXVzZVxuICAgICAqIHdlIGRvbid0IGtub3cgZXhhY3RseSB3aGF0IHRoZSBicm93c2VyIHZpZXdwb3J0IGlzLlxuICAgICAqIFVuZm9ydHVuYXRlbHksIENTUyBUcmFuc2Zvcm1zLCB3aGljaCBhcmUgZ3JlYXQgZm9yIHBlcmZvcm1hbmNlLCBicmVhayBpbiB0aGlzIGluc3RhbmNlIGJlY2F1c2UgYSBwZXJjZW50YWdlXG4gICAgICogbGVmdCBpcyByZWxhdGl2ZSB0byB0aGUgaXRlbSBpdHNlbGYsIG5vdCBpdHMgY29udGFpbmVyISBTbyB3ZSBjYW5ub3QgdXNlIHRoZW0gb24gdGhlIHNlcnZlciByZW5kZXJpbmcgcGFzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcG9zIFBvc2l0aW9uIG9iamVjdCB3aXRoIHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICBTdHlsZSBvYmplY3QuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTdHlsZShwb3NcbiAgICAvKjogUG9zaXRpb24qL1xuICAgIClcbiAgICAvKjogeyBba2V5OiBzdHJpbmddOiA/c3RyaW5nIH0qL1xuICAgIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHVzZVBlcmNlbnRhZ2VzID0gX3RoaXMkcHJvcHMyLnVzZVBlcmNlbnRhZ2VzLFxuICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gX3RoaXMkcHJvcHMyLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgIHVzZUNTU1RyYW5zZm9ybXMgPSBfdGhpcyRwcm9wczIudXNlQ1NTVHJhbnNmb3JtcztcbiAgICAgIHZhciBzdHlsZTsgLy8gQ1NTIFRyYW5zZm9ybXMgc3VwcG9ydCAoZGVmYXVsdClcblxuICAgICAgaWYgKHVzZUNTU1RyYW5zZm9ybXMpIHtcbiAgICAgICAgc3R5bGUgPSAoMCwgX3V0aWxzLnNldFRyYW5zZm9ybSkocG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvcCxsZWZ0IChzbG93KVxuICAgICAgICBzdHlsZSA9ICgwLCBfdXRpbHMuc2V0VG9wTGVmdCkocG9zKTsgLy8gVGhpcyBpcyB1c2VkIGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuXG4gICAgICAgIGlmICh1c2VQZXJjZW50YWdlcykge1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSAoMCwgX3V0aWxzLnBlcmMpKHBvcy5sZWZ0IC8gY29udGFpbmVyV2lkdGgpO1xuICAgICAgICAgIHN0eWxlLndpZHRoID0gKDAsIF91dGlscy5wZXJjKShwb3Mud2lkdGggLyBjb250YWluZXJXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNaXggYSBEcmFnZ2FibGUgaW5zdGFuY2UgaW50byBhIGNoaWxkLlxuICAgICAqIEBwYXJhbSAge0VsZW1lbnR9IGNoaWxkICAgIENoaWxkIGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7RWxlbWVudH0gICAgICAgICAgQ2hpbGQgd3JhcHBlZCBpbiBEcmFnZ2FibGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtaXhpbkRyYWdnYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtaXhpbkRyYWdnYWJsZShjaGlsZFxuICAgIC8qOiBSZWFjdEVsZW1lbnQ8YW55PiovXG4gICAgLCBpc0RyYWdnYWJsZVxuICAgIC8qOiBib29sZWFuKi9cbiAgICApXG4gICAgLyo6IFJlYWN0RWxlbWVudDxhbnk+Ki9cbiAgICB7XG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3REcmFnZ2FibGUuRHJhZ2dhYmxlQ29yZSwge1xuICAgICAgICBkaXNhYmxlZDogIWlzRHJhZ2dhYmxlLFxuICAgICAgICBvblN0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWc6IHRoaXMub25EcmFnLFxuICAgICAgICBvblN0b3A6IHRoaXMub25EcmFnU3RvcCxcbiAgICAgICAgaGFuZGxlOiB0aGlzLnByb3BzLmhhbmRsZSxcbiAgICAgICAgY2FuY2VsOiBcIi5yZWFjdC1yZXNpemFibGUtaGFuZGxlXCIgKyAodGhpcy5wcm9wcy5jYW5jZWwgPyBcIixcIiArIHRoaXMucHJvcHMuY2FuY2VsIDogXCJcIiksXG4gICAgICAgIHNjYWxlOiB0aGlzLnByb3BzLnRyYW5zZm9ybVNjYWxlXG4gICAgICB9LCBjaGlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1peCBhIFJlc2l6YWJsZSBpbnN0YW5jZSBpbnRvIGEgY2hpbGQuXG4gICAgICogQHBhcmFtICB7RWxlbWVudH0gY2hpbGQgICAgQ2hpbGQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHBvc2l0aW9uICBQb3NpdGlvbiBvYmplY3QgKHBpeGVsIHZhbHVlcylcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSAgICAgICAgICBDaGlsZCB3cmFwcGVkIGluIFJlc2l6YWJsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1peGluUmVzaXphYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1peGluUmVzaXphYmxlKGNoaWxkXG4gICAgLyo6IFJlYWN0RWxlbWVudDxhbnk+Ki9cbiAgICAsIHBvc2l0aW9uXG4gICAgLyo6IFBvc2l0aW9uKi9cbiAgICAsIGlzUmVzaXphYmxlXG4gICAgLyo6IGJvb2xlYW4qL1xuICAgIClcbiAgICAvKjogUmVhY3RFbGVtZW50PGFueT4qL1xuICAgIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHMgPSBfdGhpcyRwcm9wczMuY29scyxcbiAgICAgICAgICB4ID0gX3RoaXMkcHJvcHMzLngsXG4gICAgICAgICAgbWluVyA9IF90aGlzJHByb3BzMy5taW5XLFxuICAgICAgICAgIG1pbkggPSBfdGhpcyRwcm9wczMubWluSCxcbiAgICAgICAgICBtYXhXID0gX3RoaXMkcHJvcHMzLm1heFcsXG4gICAgICAgICAgbWF4SCA9IF90aGlzJHByb3BzMy5tYXhILFxuICAgICAgICAgIHRyYW5zZm9ybVNjYWxlID0gX3RoaXMkcHJvcHMzLnRyYW5zZm9ybVNjYWxlO1xuICAgICAgdmFyIHBvc2l0aW9uUGFyYW1zID0gdGhpcy5nZXRQb3NpdGlvblBhcmFtcygpOyAvLyBUaGlzIGlzIHRoZSBtYXggcG9zc2libGUgd2lkdGggLSBkb2Vzbid0IGdvIHRvIGluZmluaXR5IGJlY2F1c2Ugb2YgdGhlIHdpZHRoIG9mIHRoZSB3aW5kb3dcblxuICAgICAgdmFyIG1heFdpZHRoID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjR3JpZEl0ZW1Qb3NpdGlvbikocG9zaXRpb25QYXJhbXMsIDAsIDAsIGNvbHMgLSB4LCAwKS53aWR0aDsgLy8gQ2FsY3VsYXRlIG1pbi9tYXggY29uc3RyYWludHMgdXNpbmcgb3VyIG1pbiAmIG1heGVzXG5cbiAgICAgIHZhciBtaW5zID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjR3JpZEl0ZW1Qb3NpdGlvbikocG9zaXRpb25QYXJhbXMsIDAsIDAsIG1pblcsIG1pbkgpO1xuICAgICAgdmFyIG1heGVzID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjR3JpZEl0ZW1Qb3NpdGlvbikocG9zaXRpb25QYXJhbXMsIDAsIDAsIG1heFcsIG1heEgpO1xuICAgICAgdmFyIG1pbkNvbnN0cmFpbnRzID0gW21pbnMud2lkdGgsIG1pbnMuaGVpZ2h0XTtcbiAgICAgIHZhciBtYXhDb25zdHJhaW50cyA9IFtNYXRoLm1pbihtYXhlcy53aWR0aCwgbWF4V2lkdGgpLCBNYXRoLm1pbihtYXhlcy5oZWlnaHQsIEluZmluaXR5KV07XG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RSZXNpemFibGUuUmVzaXphYmxlLCB7XG4gICAgICAgIGRyYWdnYWJsZU9wdHM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogIWlzUmVzaXphYmxlXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZTogaXNSZXNpemFibGUgPyB1bmRlZmluZWQgOiBcInJlYWN0LXJlc2l6YWJsZS1oaWRlXCIsXG4gICAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwb3NpdGlvbi5oZWlnaHQsXG4gICAgICAgIG1pbkNvbnN0cmFpbnRzOiBtaW5Db25zdHJhaW50cyxcbiAgICAgICAgbWF4Q29uc3RyYWludHM6IG1heENvbnN0cmFpbnRzLFxuICAgICAgICBvblJlc2l6ZVN0b3A6IHRoaXMub25SZXNpemVTdG9wLFxuICAgICAgICBvblJlc2l6ZVN0YXJ0OiB0aGlzLm9uUmVzaXplU3RhcnQsXG4gICAgICAgIG9uUmVzaXplOiB0aGlzLm9uUmVzaXplLFxuICAgICAgICB0cmFuc2Zvcm1TY2FsZTogdHJhbnNmb3JtU2NhbGVcbiAgICAgIH0sIGNoaWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogb25EcmFnU3RhcnQgZXZlbnQgaGFuZGxlclxuICAgICAqIEBwYXJhbSAge0V2ZW50fSAgZSAgICAgICAgICAgICBldmVudCBkYXRhXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjYWxsYmFja0RhdGEgIGFuIG9iamVjdCB3aXRoIG5vZGUsIGRlbHRhIGFuZCBwb3NpdGlvbiBpbmZvcm1hdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVIYW5kbGVyXCIsXG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGFyb3VuZCBkcmFnIGV2ZW50cyB0byBwcm92aWRlIG1vcmUgdXNlZnVsIGRhdGEuXG4gICAgICogQWxsIGRyYWcgZXZlbnRzIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGdpdmVuIGhhbmRsZXIgbmFtZSxcbiAgICAgKiB3aXRoIHRoZSBzaWduYXR1cmUgKGluZGV4LCB4LCB5KS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gaGFuZGxlck5hbWUgSGFuZGxlciBuYW1lIHRvIHdyYXAuXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICBIYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZUhhbmRsZXIoZVxuICAgIC8qOiBFdmVudCovXG4gICAgLCBfcmVmNCwgaGFuZGxlck5hbWVcbiAgICAvKjogc3RyaW5nKi9cbiAgICApIHtcbiAgICAgIHZhciBub2RlID0gX3JlZjQubm9kZSxcbiAgICAgICAgICBzaXplID0gX3JlZjQuc2l6ZTtcbiAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5wcm9wc1toYW5kbGVyTmFtZV07XG4gICAgICBpZiAoIWhhbmRsZXIpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHMgPSBfdGhpcyRwcm9wczQuY29scyxcbiAgICAgICAgICB4ID0gX3RoaXMkcHJvcHM0LngsXG4gICAgICAgICAgeSA9IF90aGlzJHByb3BzNC55LFxuICAgICAgICAgIGkgPSBfdGhpcyRwcm9wczQuaSxcbiAgICAgICAgICBtYXhXID0gX3RoaXMkcHJvcHM0Lm1heFcsXG4gICAgICAgICAgbWluVyA9IF90aGlzJHByb3BzNC5taW5XLFxuICAgICAgICAgIG1heEggPSBfdGhpcyRwcm9wczQubWF4SCxcbiAgICAgICAgICBtaW5IID0gX3RoaXMkcHJvcHM0Lm1pbkg7IC8vIEdldCBuZXcgWFlcblxuICAgICAgdmFyIF9jYWxjV0ggPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNXSCkodGhpcy5nZXRQb3NpdGlvblBhcmFtcygpLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCwgeCwgeSksXG4gICAgICAgICAgdyA9IF9jYWxjV0gudyxcbiAgICAgICAgICBoID0gX2NhbGNXSC5oOyAvLyBDYXAgdyBhdCBudW1Db2xzXG5cblxuICAgICAgdyA9IE1hdGgubWluKHcsIGNvbHMgLSB4KTsgLy8gRW5zdXJlIHcgaXMgYXQgbGVhc3QgMVxuXG4gICAgICB3ID0gTWF0aC5tYXgodywgMSk7IC8vIE1pbi9tYXggY2FwcGluZ1xuXG4gICAgICB3ID0gTWF0aC5tYXgoTWF0aC5taW4odywgbWF4VyksIG1pblcpO1xuICAgICAgaCA9IE1hdGgubWF4KE1hdGgubWluKGgsIG1heEgpLCBtaW5IKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXNpemluZzogaGFuZGxlck5hbWUgPT09IFwib25SZXNpemVTdG9wXCIgPyBudWxsIDogc2l6ZVxuICAgICAgfSk7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgaSwgdywgaCwge1xuICAgICAgICBlOiBlLFxuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpXG4gICAgLyo6IFJlYWN0Tm9kZSovXG4gICAge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgeCA9IF90aGlzJHByb3BzNS54LFxuICAgICAgICAgIHkgPSBfdGhpcyRwcm9wczUueSxcbiAgICAgICAgICB3ID0gX3RoaXMkcHJvcHM1LncsXG4gICAgICAgICAgaCA9IF90aGlzJHByb3BzNS5oLFxuICAgICAgICAgIGlzRHJhZ2dhYmxlID0gX3RoaXMkcHJvcHM1LmlzRHJhZ2dhYmxlLFxuICAgICAgICAgIGlzUmVzaXphYmxlID0gX3RoaXMkcHJvcHM1LmlzUmVzaXphYmxlLFxuICAgICAgICAgIGRyb3BwaW5nUG9zaXRpb24gPSBfdGhpcyRwcm9wczUuZHJvcHBpbmdQb3NpdGlvbixcbiAgICAgICAgICB1c2VDU1NUcmFuc2Zvcm1zID0gX3RoaXMkcHJvcHM1LnVzZUNTU1RyYW5zZm9ybXM7XG4gICAgICB2YXIgcG9zID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjR3JpZEl0ZW1Qb3NpdGlvbikodGhpcy5nZXRQb3NpdGlvblBhcmFtcygpLCB4LCB5LCB3LCBoLCB0aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTsgLy8gQ3JlYXRlIHRoZSBjaGlsZCBlbGVtZW50LiBXZSBjbG9uZSB0aGUgZXhpc3RpbmcgZWxlbWVudCBidXQgbW9kaWZ5IGl0cyBjbGFzc05hbWUgYW5kIHN0eWxlLlxuXG5cbiAgICAgIHZhciBuZXdDaGlsZCA9IF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShcInJlYWN0LWdyaWQtaXRlbVwiLCBjaGlsZC5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgICAgc3RhdGljOiB0aGlzLnByb3BzLnN0YXRpYyxcbiAgICAgICAgICByZXNpemluZzogQm9vbGVhbih0aGlzLnN0YXRlLnJlc2l6aW5nKSxcbiAgICAgICAgICBcInJlYWN0LWRyYWdnYWJsZVwiOiBpc0RyYWdnYWJsZSxcbiAgICAgICAgICBcInJlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZ1wiOiBCb29sZWFuKHRoaXMuc3RhdGUuZHJhZ2dpbmcpLFxuICAgICAgICAgIGRyb3BwaW5nOiBCb29sZWFuKGRyb3BwaW5nUG9zaXRpb24pLFxuICAgICAgICAgIGNzc1RyYW5zZm9ybXM6IHVzZUNTU1RyYW5zZm9ybXNcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFdlIGNhbiBzZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb24gdGhlIGNoaWxkLCBidXQgdW5mb3J0dW5hdGVseSB3ZSBjYW4ndCBzZXQgdGhlIHBvc2l0aW9uLlxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7fSwgdGhpcy5wcm9wcy5zdHlsZSwge30sIGNoaWxkLnByb3BzLnN0eWxlLCB7fSwgdGhpcy5jcmVhdGVTdHlsZShwb3MpKVxuICAgICAgfSk7IC8vIFJlc2l6YWJsZSBzdXBwb3J0LiBUaGlzIGlzIHVzdWFsbHkgb24gYnV0IHRoZSB1c2VyIGNhbiB0b2dnbGUgaXQgb2ZmLlxuXG5cbiAgICAgIG5ld0NoaWxkID0gdGhpcy5taXhpblJlc2l6YWJsZShuZXdDaGlsZCwgcG9zLCBpc1Jlc2l6YWJsZSk7IC8vIERyYWdnYWJsZSBzdXBwb3J0LiBUaGlzIGlzIGFsd2F5cyBvbiwgZXhjZXB0IGZvciB3aXRoIHBsYWNlaG9sZGVycy5cblxuICAgICAgbmV3Q2hpbGQgPSB0aGlzLm1peGluRHJhZ2dhYmxlKG5ld0NoaWxkLCBpc0RyYWdnYWJsZSk7XG4gICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRJdGVtO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkSXRlbTtcblxuX2RlZmluZVByb3BlcnR5KEdyaWRJdGVtLCBcInByb3BUeXBlc1wiLCB7XG4gIC8vIENoaWxkcmVuIG11c3QgYmUgb25seSBhIHNpbmdsZSBlbGVtZW50XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudCxcbiAgLy8gR2VuZXJhbCBncmlkIGF0dHJpYnV0ZXNcbiAgY29sczogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICBjb250YWluZXJXaWR0aDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICByb3dIZWlnaHQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWFyZ2luOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXkuaXNSZXF1aXJlZCxcbiAgbWF4Um93czogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICBjb250YWluZXJQYWRkaW5nOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXkuaXNSZXF1aXJlZCxcbiAgLy8gVGhlc2UgYXJlIGFsbCBpbiBncmlkIHVuaXRzXG4gIHg6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgeTogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICB3OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGg6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgLy8gQWxsIG9wdGlvbmFsXG4gIG1pblc6IGZ1bmN0aW9uIG1pblcocHJvcHNcbiAgLyo6IFByb3BzKi9cbiAgLCBwcm9wTmFtZVxuICAvKjogc3RyaW5nKi9cbiAgKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHJldHVybiBuZXcgRXJyb3IoXCJtaW5XaWR0aCBub3QgTnVtYmVyXCIpO1xuICAgIGlmICh2YWx1ZSA+IHByb3BzLncgfHwgdmFsdWUgPiBwcm9wcy5tYXhXKSByZXR1cm4gbmV3IEVycm9yKFwibWluV2lkdGggbGFyZ2VyIHRoYW4gaXRlbSB3aWR0aC9tYXhXaWR0aFwiKTtcbiAgfSxcbiAgbWF4VzogZnVuY3Rpb24gbWF4Vyhwcm9wc1xuICAvKjogUHJvcHMqL1xuICAsIHByb3BOYW1lXG4gIC8qOiBzdHJpbmcqL1xuICApIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIG5ldyBFcnJvcihcIm1heFdpZHRoIG5vdCBOdW1iZXJcIik7XG4gICAgaWYgKHZhbHVlIDwgcHJvcHMudyB8fCB2YWx1ZSA8IHByb3BzLm1pblcpIHJldHVybiBuZXcgRXJyb3IoXCJtYXhXaWR0aCBzbWFsbGVyIHRoYW4gaXRlbSB3aWR0aC9taW5XaWR0aFwiKTtcbiAgfSxcbiAgbWluSDogZnVuY3Rpb24gbWluSChwcm9wc1xuICAvKjogUHJvcHMqL1xuICAsIHByb3BOYW1lXG4gIC8qOiBzdHJpbmcqL1xuICApIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIG5ldyBFcnJvcihcIm1pbkhlaWdodCBub3QgTnVtYmVyXCIpO1xuICAgIGlmICh2YWx1ZSA+IHByb3BzLmggfHwgdmFsdWUgPiBwcm9wcy5tYXhIKSByZXR1cm4gbmV3IEVycm9yKFwibWluSGVpZ2h0IGxhcmdlciB0aGFuIGl0ZW0gaGVpZ2h0L21heEhlaWdodFwiKTtcbiAgfSxcbiAgbWF4SDogZnVuY3Rpb24gbWF4SChwcm9wc1xuICAvKjogUHJvcHMqL1xuICAsIHByb3BOYW1lXG4gIC8qOiBzdHJpbmcqL1xuICApIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIG5ldyBFcnJvcihcIm1heEhlaWdodCBub3QgTnVtYmVyXCIpO1xuICAgIGlmICh2YWx1ZSA8IHByb3BzLmggfHwgdmFsdWUgPCBwcm9wcy5taW5IKSByZXR1cm4gbmV3IEVycm9yKFwibWF4SGVpZ2h0IHNtYWxsZXIgdGhhbiBpdGVtIGhlaWdodC9taW5IZWlnaHRcIik7XG4gIH0sXG4gIC8vIElEIGlzIG5pY2UgdG8gaGF2ZSBmb3IgY2FsbGJhY2tzXG4gIGk6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLy8gRnVuY3Rpb25zXG4gIG9uRHJhZ1N0b3A6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICBvbkRyYWdTdGFydDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIG9uRHJhZzogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVzaXplU3RvcDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVzaXplU3RhcnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICBvblJlc2l6ZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vIEZsYWdzXG4gIGlzRHJhZ2dhYmxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBpc1Jlc2l6YWJsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgc3RhdGljOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgLy8gVXNlIENTUyB0cmFuc2Zvcm1zIGluc3RlYWQgb2YgdG9wL2xlZnRcbiAgdXNlQ1NTVHJhbnNmb3JtczogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgdHJhbnNmb3JtU2NhbGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIC8vIE90aGVyc1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIC8vIFNlbGVjdG9yIGZvciBkcmFnZ2FibGUgaGFuZGxlXG4gIGhhbmRsZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgLy8gU2VsZWN0b3IgZm9yIGRyYWdnYWJsZSBjYW5jZWwgKHNlZSByZWFjdC1kcmFnZ2FibGUpXG4gIGNhbmNlbDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhIGRyb3BwaW5nIGVsZW1lbnRcbiAgZHJvcHBpbmdQb3NpdGlvbjogX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgICBlOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbGVmdDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRvcDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkXG4gIH0pXG59KTtcblxuX2RlZmluZVByb3BlcnR5KEdyaWRJdGVtLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2FuY2VsOiBcIlwiLFxuICBoYW5kbGU6IFwiXCIsXG4gIG1pbkg6IDEsXG4gIG1pblc6IDEsXG4gIG1heEg6IEluZmluaXR5LFxuICBtYXhXOiBJbmZpbml0eSxcbiAgdHJhbnNmb3JtU2NhbGU6IDFcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2xvZGFzaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC5pc2VxdWFsXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF9jYWxjdWxhdGVVdGlscyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVV0aWxzXCIpO1xuXG52YXIgX0dyaWRJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9HcmlkSXRlbVwiKSk7XG5cbnZhciBfUmVhY3RHcmlkTGF5b3V0UHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9SZWFjdEdyaWRMYXlvdXRQcm9wVHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gRW5kIFR5cGVzXG52YXIgbGF5b3V0Q2xhc3NOYW1lID0gXCJyZWFjdC1ncmlkLWxheW91dFwiO1xudmFyIGlzRmlyZWZveCA9IGZhbHNlOyAvLyBUcnkuLi5jYXRjaCB3aWxsIHByb3RlY3QgZnJvbSBuYXZpZ2F0b3Igbm90IGV4aXN0aW5nIChlLmcuIG5vZGUpIG9yIGEgYmFkIGltcGxlbWVudGF0aW9uIG9mIG5hdmlnYXRvclxuXG50cnkge1xuICBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59IGNhdGNoIChlKSB7fVxuLyogSWdub3JlICovXG5cbi8qKlxuICogQSByZWFjdGl2ZSwgZmx1aWQgZ3JpZCBsYXlvdXQgd2l0aCBkcmFnZ2FibGUsIHJlc2l6YWJsZSBjb21wb25lbnRzLlxuICovXG5cblxudmFyIFJlYWN0R3JpZExheW91dCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVhY3RHcmlkTGF5b3V0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAvLyBUT0RPIHB1Ymxpc2ggaW50ZXJuYWwgUmVhY3RDbGFzcyBkaXNwbGF5TmFtZSB0cmFuc2Zvcm1cbiAgLy8gUmVmYWN0b3JlZCB0byBhbm90aGVyIG1vZHVsZSB0byBtYWtlIHdheSBmb3IgcHJldmFsXG4gIGZ1bmN0aW9uIFJlYWN0R3JpZExheW91dChwcm9wc1xuICAvKjogUHJvcHMqL1xuICAsIGNvbnRleHRcbiAgLyo6IGFueSovXG4gIClcbiAgLyo6IHZvaWQqL1xuICB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0R3JpZExheW91dCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSZWFjdEdyaWRMYXlvdXQpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICBhY3RpdmVEcmFnOiBudWxsLFxuICAgICAgbGF5b3V0OiAoMCwgX3V0aWxzLnN5bmNocm9uaXplTGF5b3V0V2l0aENoaWxkcmVuKShfdGhpcy5wcm9wcy5sYXlvdXQsIF90aGlzLnByb3BzLmNoaWxkcmVuLCBfdGhpcy5wcm9wcy5jb2xzLCAvLyBMZWdhY3kgc3VwcG9ydCBmb3IgdmVydGljYWxDb21wYWN0OiBmYWxzZVxuICAgICAgKDAsIF91dGlscy5jb21wYWN0VHlwZSkoX3RoaXMucHJvcHMpKSxcbiAgICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgICAgb2xkRHJhZ0l0ZW06IG51bGwsXG4gICAgICBvbGRMYXlvdXQ6IG51bGwsXG4gICAgICBvbGRSZXNpemVJdGVtOiBudWxsLFxuICAgICAgZHJvcHBpbmdET01Ob2RlOiBudWxsLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZHJhZ0VudGVyQ291bnRlclwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdPdmVyXCIsIGZ1bmN0aW9uIChlXG4gICAgLyo6IERyYWdPdmVyRXZlbnQqL1xuICAgICkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGlnbm9yZSBldmVudHMgZnJvbSBsYXlvdXQncyBjaGlsZHJlbiBpbiBGaXJlZm94XG4gICAgICAvLyB0byBhdm9pZCB1bnByZWRpY3RhYmxlIGp1bXBpbmcgb2YgYSBkcm9wcGluZyBwbGFjZWhvbGRlclxuICAgICAgLy8gRklYTUUgcmVtb3ZlIHRoaXMgaGFja1xuICAgICAgaWYgKGlzRmlyZWZveCAmJiBlLm5hdGl2ZUV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihsYXlvdXRDbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRyb3BwaW5nSXRlbSA9IF90aGlzJHByb3BzLmRyb3BwaW5nSXRlbSxcbiAgICAgICAgICBtYXJnaW4gPSBfdGhpcyRwcm9wcy5tYXJnaW4sXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzLmNvbHMsXG4gICAgICAgICAgcm93SGVpZ2h0ID0gX3RoaXMkcHJvcHMucm93SGVpZ2h0LFxuICAgICAgICAgIG1heFJvd3MgPSBfdGhpcyRwcm9wcy5tYXhSb3dzLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMud2lkdGgsXG4gICAgICAgICAgY29udGFpbmVyUGFkZGluZyA9IF90aGlzJHByb3BzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgICB2YXIgbGF5b3V0ID0gX3RoaXMuc3RhdGUubGF5b3V0OyAvLyBUaGlzIGlzIHJlbGF0aXZlIHRvIHRoZSBET00gZWxlbWVudCB0aGF0IHRoaXMgZXZlbnQgZmlyZWQgZm9yLlxuXG4gICAgICB2YXIgX2UkbmF0aXZlRXZlbnQgPSBlLm5hdGl2ZUV2ZW50LFxuICAgICAgICAgIGxheWVyWCA9IF9lJG5hdGl2ZUV2ZW50LmxheWVyWCxcbiAgICAgICAgICBsYXllclkgPSBfZSRuYXRpdmVFdmVudC5sYXllclk7XG4gICAgICB2YXIgZHJvcHBpbmdQb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogbGF5ZXJYLFxuICAgICAgICB0b3A6IGxheWVyWSxcbiAgICAgICAgZTogZVxuICAgICAgfTtcblxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcm9wcGluZ0RPTU5vZGUpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uUGFyYW1zXG4gICAgICAgIC8qOiBQb3NpdGlvblBhcmFtcyovXG4gICAgICAgID0ge1xuICAgICAgICAgIGNvbHM6IGNvbHMsXG4gICAgICAgICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgICAgICAgbWF4Um93czogbWF4Um93cyxcbiAgICAgICAgICByb3dIZWlnaHQ6IHJvd0hlaWdodCxcbiAgICAgICAgICBjb250YWluZXJXaWR0aDogd2lkdGgsXG4gICAgICAgICAgY29udGFpbmVyUGFkZGluZzogY29udGFpbmVyUGFkZGluZyB8fCBtYXJnaW5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRQb3NpdGlvbiA9ICgwLCBfY2FsY3VsYXRlVXRpbHMuY2FsY1hZKShwb3NpdGlvblBhcmFtcywgbGF5ZXJZLCBsYXllclgsIGRyb3BwaW5nSXRlbS53LCBkcm9wcGluZ0l0ZW0uaCk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRyb3BwaW5nRE9NTm9kZTogX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGRyb3BwaW5nSXRlbS5pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZHJvcHBpbmdQb3NpdGlvbjogZHJvcHBpbmdQb3NpdGlvbixcbiAgICAgICAgICBsYXlvdXQ6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobGF5b3V0KSwgW19vYmplY3RTcHJlYWQoe30sIGRyb3BwaW5nSXRlbSwge1xuICAgICAgICAgICAgeDogY2FsY3VsYXRlZFBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBjYWxjdWxhdGVkUG9zaXRpb24ueSxcbiAgICAgICAgICAgIHN0YXRpYzogZmFsc2UsXG4gICAgICAgICAgICBpc0RyYWdnYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pXSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzLnN0YXRlLmRyb3BwaW5nUG9zaXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlJGRyb3BwaW5nUCA9IF90aGlzLnN0YXRlLmRyb3BwaW5nUG9zaXRpb24sXG4gICAgICAgICAgICBsZWZ0ID0gX3RoaXMkc3RhdGUkZHJvcHBpbmdQLmxlZnQsXG4gICAgICAgICAgICB0b3AgPSBfdGhpcyRzdGF0ZSRkcm9wcGluZ1AudG9wO1xuICAgICAgICB2YXIgc2hvdWxkVXBkYXRlUG9zaXRpb24gPSBsZWZ0ICE9IGxheWVyWCB8fCB0b3AgIT0gbGF5ZXJZO1xuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyb3BwaW5nUG9zaXRpb246IGRyb3BwaW5nUG9zaXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbW92ZURyb3BwaW5nUGxhY2Vob2xkZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRyb3BwaW5nSXRlbSA9IF90aGlzJHByb3BzMi5kcm9wcGluZ0l0ZW0sXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzMi5jb2xzO1xuICAgICAgdmFyIGxheW91dCA9IF90aGlzLnN0YXRlLmxheW91dDtcbiAgICAgIHZhciBuZXdMYXlvdXQgPSAoMCwgX3V0aWxzLmNvbXBhY3QpKGxheW91dC5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwuaSAhPT0gZHJvcHBpbmdJdGVtLmk7XG4gICAgICB9KSwgKDAsIF91dGlscy5jb21wYWN0VHlwZSkoX3RoaXMucHJvcHMpLCBjb2xzKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsYXlvdXQ6IG5ld0xheW91dCxcbiAgICAgICAgZHJvcHBpbmdET01Ob2RlOiBudWxsLFxuICAgICAgICBhY3RpdmVEcmFnOiBudWxsLFxuICAgICAgICBkcm9wcGluZ1Bvc2l0aW9uOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ0xlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmRyYWdFbnRlckNvdW50ZXItLTsgLy8gb25EcmFnTGVhdmUgY2FuIGJlIHRyaWdnZXJlZCBvbiBlYWNoIGxheW91dCdzIGNoaWxkLlxuICAgICAgLy8gQnV0IHdlIGtub3cgdGhhdCBjb3VudCBvZiBkcmFnRW50ZXIgYW5kIGRyYWdMZWF2ZSBldmVudHNcbiAgICAgIC8vIHdpbGwgYmUgYmFsYW5jZWQgYWZ0ZXIgbGVhdmluZyB0aGUgbGF5b3V0J3MgY29udGFpbmVyXG4gICAgICAvLyBzbyB3ZSBjYW4gaW5jcmVhc2UgYW5kIGRlY3JlYXNlIGNvdW50IG9mIGRyYWdFbnRlciBhbmRcbiAgICAgIC8vIHdoZW4gaXQnbGwgYmUgZXF1YWwgdG8gMCB3ZSdsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyXG5cbiAgICAgIGlmIChfdGhpcy5kcmFnRW50ZXJDb3VudGVyID09PSAwKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZURyb3BwaW5nUGxhY2Vob2xkZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdFbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kcmFnRW50ZXJDb3VudGVyKys7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Ecm9wXCIsIGZ1bmN0aW9uIChlXG4gICAgLyo6IEV2ZW50Ki9cbiAgICApIHtcbiAgICAgIHZhciBkcm9wcGluZ0l0ZW0gPSBfdGhpcy5wcm9wcy5kcm9wcGluZ0l0ZW07XG4gICAgICB2YXIgbGF5b3V0ID0gX3RoaXMuc3RhdGUubGF5b3V0O1xuXG4gICAgICB2YXIgX3JlZiA9IGxheW91dC5maW5kKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsLmkgPT09IGRyb3BwaW5nSXRlbS5pO1xuICAgICAgfSkgfHwge30sXG4gICAgICAgICAgeCA9IF9yZWYueCxcbiAgICAgICAgICB5ID0gX3JlZi55LFxuICAgICAgICAgIHcgPSBfcmVmLncsXG4gICAgICAgICAgaCA9IF9yZWYuaDsgLy8gcmVzZXQgZ3JhZ0VudGVyIGNvdW50ZXIgb24gZHJvcFxuXG5cbiAgICAgIF90aGlzLmRyYWdFbnRlckNvdW50ZXIgPSAwO1xuXG4gICAgICBfdGhpcy5yZW1vdmVEcm9wcGluZ1BsYWNlaG9sZGVyKCk7XG5cbiAgICAgIF90aGlzLnByb3BzLm9uRHJvcCh7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIHc6IHcsXG4gICAgICAgIGg6IGgsXG4gICAgICAgIGU6IGVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgKDAsIF91dGlscy5hdXRvQmluZEhhbmRsZXJzKShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgW1wib25EcmFnU3RhcnRcIiwgXCJvbkRyYWdcIiwgXCJvbkRyYWdTdG9wXCIsIFwib25SZXNpemVTdGFydFwiLCBcIm9uUmVzaXplXCIsIFwib25SZXNpemVTdG9wXCJdKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVhY3RHcmlkTGF5b3V0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3VudGVkOiB0cnVlXG4gICAgICB9KTsgLy8gUG9zc2libHkgY2FsbCBiYWNrIHdpdGggbGF5b3V0IG9uIG1vdW50LiBUaGlzIHNob3VsZCBiZSBkb25lIGFmdGVyIGNvcnJlY3RpbmcgdGhlIGxheW91dCB3aWR0aFxuICAgICAgLy8gdG8gZW5zdXJlIHdlIGRvbid0IHJlcmVuZGVyIHdpdGggdGhlIHdyb25nIHdpZHRoLlxuXG4gICAgICB0aGlzLm9uTGF5b3V0TWF5YmVDaGFuZ2VkKHRoaXMuc3RhdGUubGF5b3V0LCB0aGlzLnByb3BzLmxheW91dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzXG4gICAgLyo6IFByb3BzKi9cbiAgICAsIG5leHRTdGF0ZVxuICAgIC8qOiBTdGF0ZSovXG4gICAgKSB7XG4gICAgICByZXR1cm4gKC8vIE5PVEU6IHRoaXMgaXMgYWxtb3N0IGFsd2F5cyB1bmVxdWFsLiBUaGVyZWZvcmUgdGhlIG9ubHkgd2F5IHRvIGdldCBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgLy8gZnJvbSBTQ1UgaXMgaWYgdGhlIHVzZXIgaW50ZW50aW9uYWxseSBtZW1vaXplcyBjaGlsZHJlbi4gSWYgdGhleSBkbywgYW5kIHRoZXkgY2FuXG4gICAgICAgIC8vIGhhbmRsZSBjaGFuZ2VzIHByb3Blcmx5LCBwZXJmb3JtYW5jZSB3aWxsIGluY3JlYXNlLlxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4gfHwgISgwLCBfdXRpbHMuZmFzdFJHTFByb3BzRXF1YWwpKHRoaXMucHJvcHMsIG5leHRQcm9wcywgX2xvZGFzaC5kZWZhdWx0KSB8fCB0aGlzLnN0YXRlLmFjdGl2ZURyYWcgIT09IG5leHRTdGF0ZS5hY3RpdmVEcmFnIHx8IHRoaXMuc3RhdGUuZHJvcHBpbmdQb3NpdGlvbiAhPT0gbmV4dFN0YXRlLmRyb3BwaW5nUG9zaXRpb25cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzXG4gICAgLyo6IFByb3BzKi9cbiAgICAsIHByZXZTdGF0ZVxuICAgIC8qOiBTdGF0ZSovXG4gICAgKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYWN0aXZlRHJhZykge1xuICAgICAgICB2YXIgbmV3TGF5b3V0ID0gdGhpcy5zdGF0ZS5sYXlvdXQ7XG4gICAgICAgIHZhciBvbGRMYXlvdXQgPSBwcmV2U3RhdGUubGF5b3V0O1xuICAgICAgICB0aGlzLm9uTGF5b3V0TWF5YmVDaGFuZ2VkKG5ld0xheW91dCwgb2xkTGF5b3V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBhIHBpeGVsIHZhbHVlIGZvciB0aGUgY29udGFpbmVyLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gQ29udGFpbmVyIGhlaWdodCBpbiBwaXhlbHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb250YWluZXJIZWlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udGFpbmVySGVpZ2h0KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmF1dG9TaXplKSByZXR1cm47XG4gICAgICB2YXIgbmJSb3cgPSAoMCwgX3V0aWxzLmJvdHRvbSkodGhpcy5zdGF0ZS5sYXlvdXQpO1xuICAgICAgdmFyIGNvbnRhaW5lclBhZGRpbmdZID0gdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nID8gdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nWzFdIDogdGhpcy5wcm9wcy5tYXJnaW5bMV07XG4gICAgICByZXR1cm4gbmJSb3cgKiB0aGlzLnByb3BzLnJvd0hlaWdodCArIChuYlJvdyAtIDEpICogdGhpcy5wcm9wcy5tYXJnaW5bMV0gKyBjb250YWluZXJQYWRkaW5nWSAqIDIgKyBcInB4XCI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gZHJhZ2dpbmcgc3RhcnRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGkgSWQgb2YgdGhlIGNoaWxkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggWCBwb3NpdGlvbiBvZiB0aGUgbW92ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgcG9zaXRpb24gb2YgdGhlIG1vdmVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBtb3VzZWRvd24gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgVGhlIGN1cnJlbnQgZHJhZ2dpbmcgRE9NIGVsZW1lbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uRHJhZ1N0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGlcbiAgICAvKjogc3RyaW5nKi9cbiAgICAsIHhcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIHlcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIF9yZWYyKSB7XG4gICAgICB2YXIgZSA9IF9yZWYyLmUsXG4gICAgICAgICAgbm9kZSA9IF9yZWYyLm5vZGU7XG4gICAgICB2YXIgbGF5b3V0ID0gdGhpcy5zdGF0ZS5sYXlvdXQ7XG4gICAgICB2YXIgbCA9ICgwLCBfdXRpbHMuZ2V0TGF5b3V0SXRlbSkobGF5b3V0LCBpKTtcbiAgICAgIGlmICghbCkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9sZERyYWdJdGVtOiAoMCwgX3V0aWxzLmNsb25lTGF5b3V0SXRlbSkobCksXG4gICAgICAgIG9sZExheW91dDogdGhpcy5zdGF0ZS5sYXlvdXRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25EcmFnU3RhcnQobGF5b3V0LCBsLCBsLCBudWxsLCBlLCBub2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRWFjaCBkcmFnIG1vdmVtZW50IGNyZWF0ZSBhIG5ldyBkcmFnZWxlbWVudCBhbmQgbW92ZSB0aGUgZWxlbWVudCB0byB0aGUgZHJhZ2dlZCBsb2NhdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpIElkIG9mIHRoZSBjaGlsZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFggcG9zaXRpb24gb2YgdGhlIG1vdmVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBZIHBvc2l0aW9uIG9mIHRoZSBtb3ZlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZSBUaGUgbW91c2Vkb3duIGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlIFRoZSBjdXJyZW50IGRyYWdnaW5nIERPTSBlbGVtZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbkRyYWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnKGlcbiAgICAvKjogc3RyaW5nKi9cbiAgICAsIHhcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIHlcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIF9yZWYzKSB7XG4gICAgICB2YXIgZSA9IF9yZWYzLmUsXG4gICAgICAgICAgbm9kZSA9IF9yZWYzLm5vZGU7XG4gICAgICB2YXIgb2xkRHJhZ0l0ZW0gPSB0aGlzLnN0YXRlLm9sZERyYWdJdGVtO1xuICAgICAgdmFyIGxheW91dCA9IHRoaXMuc3RhdGUubGF5b3V0O1xuICAgICAgdmFyIGNvbHMgPSB0aGlzLnByb3BzLmNvbHM7XG4gICAgICB2YXIgbCA9ICgwLCBfdXRpbHMuZ2V0TGF5b3V0SXRlbSkobGF5b3V0LCBpKTtcbiAgICAgIGlmICghbCkgcmV0dXJuOyAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgKGRpc3BsYXkgb25seSlcblxuICAgICAgdmFyIHBsYWNlaG9sZGVyID0ge1xuICAgICAgICB3OiBsLncsXG4gICAgICAgIGg6IGwuaCxcbiAgICAgICAgeDogbC54LFxuICAgICAgICB5OiBsLnksXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0cnVlLFxuICAgICAgICBpOiBpXG4gICAgICB9OyAvLyBNb3ZlIHRoZSBlbGVtZW50IHRvIHRoZSBkcmFnZ2VkIGxvY2F0aW9uLlxuXG4gICAgICB2YXIgaXNVc2VyQWN0aW9uID0gdHJ1ZTtcbiAgICAgIGxheW91dCA9ICgwLCBfdXRpbHMubW92ZUVsZW1lbnQpKGxheW91dCwgbCwgeCwgeSwgaXNVc2VyQWN0aW9uLCB0aGlzLnByb3BzLnByZXZlbnRDb2xsaXNpb24sICgwLCBfdXRpbHMuY29tcGFjdFR5cGUpKHRoaXMucHJvcHMpLCBjb2xzKTtcbiAgICAgIHRoaXMucHJvcHMub25EcmFnKGxheW91dCwgb2xkRHJhZ0l0ZW0sIGwsIHBsYWNlaG9sZGVyLCBlLCBub2RlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsYXlvdXQ6ICgwLCBfdXRpbHMuY29tcGFjdCkobGF5b3V0LCAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKSh0aGlzLnByb3BzKSwgY29scyksXG4gICAgICAgIGFjdGl2ZURyYWc6IHBsYWNlaG9sZGVyXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBkcmFnZ2luZyBzdG9wcywgZmlndXJlIG91dCB3aGljaCBwb3NpdGlvbiB0aGUgZWxlbWVudCBpcyBjbG9zZXN0IHRvIGFuZCB1cGRhdGUgaXRzIHggYW5kIHkuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBpIEluZGV4IG9mIHRoZSBjaGlsZC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBYIHBvc2l0aW9uIG9mIHRoZSBtb3ZlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBwb3NpdGlvbiBvZiB0aGUgbW92ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIG1vdXNlZG93biBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSBUaGUgY3VycmVudCBkcmFnZ2luZyBET00gZWxlbWVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25EcmFnU3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdG9wKGlcbiAgICAvKjogc3RyaW5nKi9cbiAgICAsIHhcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIHlcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIF9yZWY0KSB7XG4gICAgICB2YXIgZSA9IF9yZWY0LmUsXG4gICAgICAgICAgbm9kZSA9IF9yZWY0Lm5vZGU7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYWN0aXZlRHJhZykgcmV0dXJuO1xuICAgICAgdmFyIG9sZERyYWdJdGVtID0gdGhpcy5zdGF0ZS5vbGREcmFnSXRlbTtcbiAgICAgIHZhciBsYXlvdXQgPSB0aGlzLnN0YXRlLmxheW91dDtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHMgPSBfdGhpcyRwcm9wczMuY29scyxcbiAgICAgICAgICBwcmV2ZW50Q29sbGlzaW9uID0gX3RoaXMkcHJvcHMzLnByZXZlbnRDb2xsaXNpb247XG4gICAgICB2YXIgbCA9ICgwLCBfdXRpbHMuZ2V0TGF5b3V0SXRlbSkobGF5b3V0LCBpKTtcbiAgICAgIGlmICghbCkgcmV0dXJuOyAvLyBNb3ZlIHRoZSBlbGVtZW50IGhlcmVcblxuICAgICAgdmFyIGlzVXNlckFjdGlvbiA9IHRydWU7XG4gICAgICBsYXlvdXQgPSAoMCwgX3V0aWxzLm1vdmVFbGVtZW50KShsYXlvdXQsIGwsIHgsIHksIGlzVXNlckFjdGlvbiwgcHJldmVudENvbGxpc2lvbiwgKDAsIF91dGlscy5jb21wYWN0VHlwZSkodGhpcy5wcm9wcyksIGNvbHMpO1xuICAgICAgdGhpcy5wcm9wcy5vbkRyYWdTdG9wKGxheW91dCwgb2xkRHJhZ0l0ZW0sIGwsIG51bGwsIGUsIG5vZGUpOyAvLyBTZXQgc3RhdGVcblxuICAgICAgdmFyIG5ld0xheW91dCA9ICgwLCBfdXRpbHMuY29tcGFjdCkobGF5b3V0LCAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKSh0aGlzLnByb3BzKSwgY29scyk7XG4gICAgICB2YXIgb2xkTGF5b3V0ID0gdGhpcy5zdGF0ZS5vbGRMYXlvdXQ7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlRHJhZzogbnVsbCxcbiAgICAgICAgbGF5b3V0OiBuZXdMYXlvdXQsXG4gICAgICAgIG9sZERyYWdJdGVtOiBudWxsLFxuICAgICAgICBvbGRMYXlvdXQ6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkxheW91dE1heWJlQ2hhbmdlZChuZXdMYXlvdXQsIG9sZExheW91dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTGF5b3V0TWF5YmVDaGFuZ2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGF5b3V0TWF5YmVDaGFuZ2VkKG5ld0xheW91dFxuICAgIC8qOiBMYXlvdXQqL1xuICAgICwgb2xkTGF5b3V0XG4gICAgLyo6ID9MYXlvdXQqL1xuICAgICkge1xuICAgICAgaWYgKCFvbGRMYXlvdXQpIG9sZExheW91dCA9IHRoaXMuc3RhdGUubGF5b3V0O1xuXG4gICAgICBpZiAoISgwLCBfbG9kYXNoLmRlZmF1bHQpKG9sZExheW91dCwgbmV3TGF5b3V0KSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uTGF5b3V0Q2hhbmdlKG5ld0xheW91dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUmVzaXplU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVTdGFydChpXG4gICAgLyo6IHN0cmluZyovXG4gICAgLCB3XG4gICAgLyo6IG51bWJlciovXG4gICAgLCBoXG4gICAgLyo6IG51bWJlciovXG4gICAgLCBfcmVmNSkge1xuICAgICAgdmFyIGUgPSBfcmVmNS5lLFxuICAgICAgICAgIG5vZGUgPSBfcmVmNS5ub2RlO1xuICAgICAgdmFyIGxheW91dCA9IHRoaXMuc3RhdGUubGF5b3V0O1xuICAgICAgdmFyIGwgPSAoMCwgX3V0aWxzLmdldExheW91dEl0ZW0pKGxheW91dCwgaSk7XG4gICAgICBpZiAoIWwpIHJldHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvbGRSZXNpemVJdGVtOiAoMCwgX3V0aWxzLmNsb25lTGF5b3V0SXRlbSkobCksXG4gICAgICAgIG9sZExheW91dDogdGhpcy5zdGF0ZS5sYXlvdXRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGxheW91dCwgbCwgbCwgbnVsbCwgZSwgbm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplKGlcbiAgICAvKjogc3RyaW5nKi9cbiAgICAsIHdcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIGhcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIF9yZWY2KSB7XG4gICAgICB2YXIgZSA9IF9yZWY2LmUsXG4gICAgICAgICAgbm9kZSA9IF9yZWY2Lm5vZGU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHN0YXRlLmxheW91dCxcbiAgICAgICAgICBvbGRSZXNpemVJdGVtID0gX3RoaXMkc3RhdGUub2xkUmVzaXplSXRlbTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHMgPSBfdGhpcyRwcm9wczQuY29scyxcbiAgICAgICAgICBwcmV2ZW50Q29sbGlzaW9uID0gX3RoaXMkcHJvcHM0LnByZXZlbnRDb2xsaXNpb247XG4gICAgICB2YXIgbFxuICAgICAgLyo6ID9MYXlvdXRJdGVtKi9cbiAgICAgID0gKDAsIF91dGlscy5nZXRMYXlvdXRJdGVtKShsYXlvdXQsIGkpO1xuICAgICAgaWYgKCFsKSByZXR1cm47IC8vIFNvbWV0aGluZyBsaWtlIHF1YWQgdHJlZSBzaG91bGQgYmUgdXNlZFxuICAgICAgLy8gdG8gZmluZCBjb2xsaXNpb25zIGZhc3RlclxuXG4gICAgICB2YXIgaGFzQ29sbGlzaW9ucztcblxuICAgICAgaWYgKHByZXZlbnRDb2xsaXNpb24pIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSAoMCwgX3V0aWxzLmdldEFsbENvbGxpc2lvbnMpKGxheW91dCwgX29iamVjdFNwcmVhZCh7fSwgbCwge1xuICAgICAgICAgIHc6IHcsXG4gICAgICAgICAgaDogaFxuICAgICAgICB9KSkuZmlsdGVyKGZ1bmN0aW9uIChsYXlvdXRJdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGxheW91dEl0ZW0uaSAhPT0gbC5pO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFzQ29sbGlzaW9ucyA9IGNvbGxpc2lvbnMubGVuZ3RoID4gMDsgLy8gSWYgd2UncmUgY29sbGlkaW5nLCB3ZSBuZWVkIGFkanVzdCB0aGUgcGxhY2Vob2xkZXIuXG5cbiAgICAgICAgaWYgKGhhc0NvbGxpc2lvbnMpIHtcbiAgICAgICAgICAvLyBhZGp1c3QgdyAmJiBoIHRvIG1heGltdW0gYWxsb3dlZCBzcGFjZVxuICAgICAgICAgIHZhciBsZWFzdFggPSBJbmZpbml0eSxcbiAgICAgICAgICAgICAgbGVhc3RZID0gSW5maW5pdHk7XG4gICAgICAgICAgY29sbGlzaW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChsYXlvdXRJdGVtKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0SXRlbS54ID4gbC54KSBsZWFzdFggPSBNYXRoLm1pbihsZWFzdFgsIGxheW91dEl0ZW0ueCk7XG4gICAgICAgICAgICBpZiAobGF5b3V0SXRlbS55ID4gbC55KSBsZWFzdFkgPSBNYXRoLm1pbihsZWFzdFksIGxheW91dEl0ZW0ueSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShsZWFzdFgpKSBsLncgPSBsZWFzdFggLSBsLng7XG4gICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShsZWFzdFkpKSBsLmggPSBsZWFzdFkgLSBsLnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNDb2xsaXNpb25zKSB7XG4gICAgICAgIC8vIFNldCBuZXcgd2lkdGggYW5kIGhlaWdodC5cbiAgICAgICAgbC53ID0gdztcbiAgICAgICAgbC5oID0gaDtcbiAgICAgIH0gLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIGVsZW1lbnQgKGRpc3BsYXkgb25seSlcblxuXG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIHc6IGwudyxcbiAgICAgICAgaDogbC5oLFxuICAgICAgICB4OiBsLngsXG4gICAgICAgIHk6IGwueSxcbiAgICAgICAgc3RhdGljOiB0cnVlLFxuICAgICAgICBpOiBpXG4gICAgICB9O1xuICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZShsYXlvdXQsIG9sZFJlc2l6ZUl0ZW0sIGwsIHBsYWNlaG9sZGVyLCBlLCBub2RlKTsgLy8gUmUtY29tcGFjdCB0aGUgbGF5b3V0IGFuZCBzZXQgdGhlIGRyYWcgcGxhY2Vob2xkZXIuXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsYXlvdXQ6ICgwLCBfdXRpbHMuY29tcGFjdCkobGF5b3V0LCAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKSh0aGlzLnByb3BzKSwgY29scyksXG4gICAgICAgIGFjdGl2ZURyYWc6IHBsYWNlaG9sZGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVTdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplU3RvcChpXG4gICAgLyo6IHN0cmluZyovXG4gICAgLCB3XG4gICAgLyo6IG51bWJlciovXG4gICAgLCBoXG4gICAgLyo6IG51bWJlciovXG4gICAgLCBfcmVmNykge1xuICAgICAgdmFyIGUgPSBfcmVmNy5lLFxuICAgICAgICAgIG5vZGUgPSBfcmVmNy5ub2RlO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkc3RhdGUyLmxheW91dCxcbiAgICAgICAgICBvbGRSZXNpemVJdGVtID0gX3RoaXMkc3RhdGUyLm9sZFJlc2l6ZUl0ZW07XG4gICAgICB2YXIgY29scyA9IHRoaXMucHJvcHMuY29scztcbiAgICAgIHZhciBsID0gKDAsIF91dGlscy5nZXRMYXlvdXRJdGVtKShsYXlvdXQsIGkpO1xuICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0b3AobGF5b3V0LCBvbGRSZXNpemVJdGVtLCBsLCBudWxsLCBlLCBub2RlKTsgLy8gU2V0IHN0YXRlXG5cbiAgICAgIHZhciBuZXdMYXlvdXQgPSAoMCwgX3V0aWxzLmNvbXBhY3QpKGxheW91dCwgKDAsIF91dGlscy5jb21wYWN0VHlwZSkodGhpcy5wcm9wcyksIGNvbHMpO1xuICAgICAgdmFyIG9sZExheW91dCA9IHRoaXMuc3RhdGUub2xkTGF5b3V0O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZURyYWc6IG51bGwsXG4gICAgICAgIGxheW91dDogbmV3TGF5b3V0LFxuICAgICAgICBvbGRSZXNpemVJdGVtOiBudWxsLFxuICAgICAgICBvbGRMYXlvdXQ6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkxheW91dE1heWJlQ2hhbmdlZChuZXdMYXlvdXQsIG9sZExheW91dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBsYWNlaG9sZGVyIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSBQbGFjZWhvbGRlciBkaXYuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGFjZWhvbGRlcigpXG4gICAgLyo6ID9SZWFjdEVsZW1lbnQ8YW55PiovXG4gICAge1xuICAgICAgdmFyIGFjdGl2ZURyYWcgPSB0aGlzLnN0YXRlLmFjdGl2ZURyYWc7XG4gICAgICBpZiAoIWFjdGl2ZURyYWcpIHJldHVybiBudWxsO1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczUud2lkdGgsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzNS5jb2xzLFxuICAgICAgICAgIG1hcmdpbiA9IF90aGlzJHByb3BzNS5tYXJnaW4sXG4gICAgICAgICAgY29udGFpbmVyUGFkZGluZyA9IF90aGlzJHByb3BzNS5jb250YWluZXJQYWRkaW5nLFxuICAgICAgICAgIHJvd0hlaWdodCA9IF90aGlzJHByb3BzNS5yb3dIZWlnaHQsXG4gICAgICAgICAgbWF4Um93cyA9IF90aGlzJHByb3BzNS5tYXhSb3dzLFxuICAgICAgICAgIHVzZUNTU1RyYW5zZm9ybXMgPSBfdGhpcyRwcm9wczUudXNlQ1NTVHJhbnNmb3JtcyxcbiAgICAgICAgICB0cmFuc2Zvcm1TY2FsZSA9IF90aGlzJHByb3BzNS50cmFuc2Zvcm1TY2FsZTsgLy8gey4uLnRoaXMuc3RhdGUuYWN0aXZlRHJhZ30gaXMgcHJldHR5IHNsb3csIGFjdHVhbGx5XG5cbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9HcmlkSXRlbS5kZWZhdWx0LCB7XG4gICAgICAgIHc6IGFjdGl2ZURyYWcudyxcbiAgICAgICAgaDogYWN0aXZlRHJhZy5oLFxuICAgICAgICB4OiBhY3RpdmVEcmFnLngsXG4gICAgICAgIHk6IGFjdGl2ZURyYWcueSxcbiAgICAgICAgaTogYWN0aXZlRHJhZy5pLFxuICAgICAgICBjbGFzc05hbWU6IFwicmVhY3QtZ3JpZC1wbGFjZWhvbGRlclwiLFxuICAgICAgICBjb250YWluZXJXaWR0aDogd2lkdGgsXG4gICAgICAgIGNvbHM6IGNvbHMsXG4gICAgICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICAgICBjb250YWluZXJQYWRkaW5nOiBjb250YWluZXJQYWRkaW5nIHx8IG1hcmdpbixcbiAgICAgICAgbWF4Um93czogbWF4Um93cyxcbiAgICAgICAgcm93SGVpZ2h0OiByb3dIZWlnaHQsXG4gICAgICAgIGlzRHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgaXNSZXNpemFibGU6IGZhbHNlLFxuICAgICAgICB1c2VDU1NUcmFuc2Zvcm1zOiB1c2VDU1NUcmFuc2Zvcm1zLFxuICAgICAgICB0cmFuc2Zvcm1TY2FsZTogdHJhbnNmb3JtU2NhbGVcbiAgICAgIH0sIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIGdyaWQgaXRlbSwgc2V0IGl0cyBzdHlsZSBhdHRyaWJ1dGVzICYgc3Vycm91bmQgaW4gYSA8RHJhZ2dhYmxlPi5cbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBjaGlsZCBSZWFjdCBlbGVtZW50LlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9ICAgICAgIEVsZW1lbnQgd3JhcHBlZCBpbiBkcmFnZ2FibGUgYW5kIHByb3Blcmx5IHBsYWNlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByb2Nlc3NHcmlkSXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9jZXNzR3JpZEl0ZW0oY2hpbGRcbiAgICAvKjogUmVhY3RFbGVtZW50PGFueT4qL1xuICAgICwgaXNEcm9wcGluZ0l0ZW1cbiAgICAvKjogYm9vbGVhbiovXG4gICAgKVxuICAgIC8qOiA/UmVhY3RFbGVtZW50PGFueT4qL1xuICAgIHtcbiAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLmtleSkgcmV0dXJuO1xuICAgICAgdmFyIGwgPSAoMCwgX3V0aWxzLmdldExheW91dEl0ZW0pKHRoaXMuc3RhdGUubGF5b3V0LCBTdHJpbmcoY2hpbGQua2V5KSk7XG4gICAgICBpZiAoIWwpIHJldHVybiBudWxsO1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczYud2lkdGgsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzNi5jb2xzLFxuICAgICAgICAgIG1hcmdpbiA9IF90aGlzJHByb3BzNi5tYXJnaW4sXG4gICAgICAgICAgY29udGFpbmVyUGFkZGluZyA9IF90aGlzJHByb3BzNi5jb250YWluZXJQYWRkaW5nLFxuICAgICAgICAgIHJvd0hlaWdodCA9IF90aGlzJHByb3BzNi5yb3dIZWlnaHQsXG4gICAgICAgICAgbWF4Um93cyA9IF90aGlzJHByb3BzNi5tYXhSb3dzLFxuICAgICAgICAgIGlzRHJhZ2dhYmxlID0gX3RoaXMkcHJvcHM2LmlzRHJhZ2dhYmxlLFxuICAgICAgICAgIGlzUmVzaXphYmxlID0gX3RoaXMkcHJvcHM2LmlzUmVzaXphYmxlLFxuICAgICAgICAgIHVzZUNTU1RyYW5zZm9ybXMgPSBfdGhpcyRwcm9wczYudXNlQ1NTVHJhbnNmb3JtcyxcbiAgICAgICAgICB0cmFuc2Zvcm1TY2FsZSA9IF90aGlzJHByb3BzNi50cmFuc2Zvcm1TY2FsZSxcbiAgICAgICAgICBkcmFnZ2FibGVDYW5jZWwgPSBfdGhpcyRwcm9wczYuZHJhZ2dhYmxlQ2FuY2VsLFxuICAgICAgICAgIGRyYWdnYWJsZUhhbmRsZSA9IF90aGlzJHByb3BzNi5kcmFnZ2FibGVIYW5kbGU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBtb3VudGVkID0gX3RoaXMkc3RhdGUzLm1vdW50ZWQsXG4gICAgICAgICAgZHJvcHBpbmdQb3NpdGlvbiA9IF90aGlzJHN0YXRlMy5kcm9wcGluZ1Bvc2l0aW9uOyAvLyBEZXRlcm1pbmUgdXNlciBtYW5pcHVsYXRpb25zIHBvc3NpYmxlLlxuICAgICAgLy8gSWYgYW4gaXRlbSBpcyBzdGF0aWMsIGl0IGNhbid0IGJlIG1hbmlwdWxhdGVkIGJ5IGRlZmF1bHQuXG4gICAgICAvLyBBbnkgcHJvcGVydGllcyBkZWZpbmVkIGRpcmVjdGx5IG9uIHRoZSBncmlkIGl0ZW0gd2lsbCB0YWtlIHByZWNlZGVuY2UuXG5cbiAgICAgIHZhciBkcmFnZ2FibGUgPSB0eXBlb2YgbC5pc0RyYWdnYWJsZSA9PT0gXCJib29sZWFuXCIgPyBsLmlzRHJhZ2dhYmxlIDogIWwuc3RhdGljICYmIGlzRHJhZ2dhYmxlO1xuICAgICAgdmFyIHJlc2l6YWJsZSA9IHR5cGVvZiBsLmlzUmVzaXphYmxlID09PSBcImJvb2xlYW5cIiA/IGwuaXNSZXNpemFibGUgOiAhbC5zdGF0aWMgJiYgaXNSZXNpemFibGU7XG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfR3JpZEl0ZW0uZGVmYXVsdCwge1xuICAgICAgICBjb250YWluZXJXaWR0aDogd2lkdGgsXG4gICAgICAgIGNvbHM6IGNvbHMsXG4gICAgICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICAgICBjb250YWluZXJQYWRkaW5nOiBjb250YWluZXJQYWRkaW5nIHx8IG1hcmdpbixcbiAgICAgICAgbWF4Um93czogbWF4Um93cyxcbiAgICAgICAgcm93SGVpZ2h0OiByb3dIZWlnaHQsXG4gICAgICAgIGNhbmNlbDogZHJhZ2dhYmxlQ2FuY2VsLFxuICAgICAgICBoYW5kbGU6IGRyYWdnYWJsZUhhbmRsZSxcbiAgICAgICAgb25EcmFnU3RvcDogdGhpcy5vbkRyYWdTdG9wLFxuICAgICAgICBvbkRyYWdTdGFydDogdGhpcy5vbkRyYWdTdGFydCxcbiAgICAgICAgb25EcmFnOiB0aGlzLm9uRHJhZyxcbiAgICAgICAgb25SZXNpemVTdGFydDogdGhpcy5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICBvblJlc2l6ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgICAgb25SZXNpemVTdG9wOiB0aGlzLm9uUmVzaXplU3RvcCxcbiAgICAgICAgaXNEcmFnZ2FibGU6IGRyYWdnYWJsZSxcbiAgICAgICAgaXNSZXNpemFibGU6IHJlc2l6YWJsZSxcbiAgICAgICAgdXNlQ1NTVHJhbnNmb3JtczogdXNlQ1NTVHJhbnNmb3JtcyAmJiBtb3VudGVkLFxuICAgICAgICB1c2VQZXJjZW50YWdlczogIW1vdW50ZWQsXG4gICAgICAgIHRyYW5zZm9ybVNjYWxlOiB0cmFuc2Zvcm1TY2FsZSxcbiAgICAgICAgdzogbC53LFxuICAgICAgICBoOiBsLmgsXG4gICAgICAgIHg6IGwueCxcbiAgICAgICAgeTogbC55LFxuICAgICAgICBpOiBsLmksXG4gICAgICAgIG1pbkg6IGwubWluSCxcbiAgICAgICAgbWluVzogbC5taW5XLFxuICAgICAgICBtYXhIOiBsLm1heEgsXG4gICAgICAgIG1heFc6IGwubWF4VyxcbiAgICAgICAgc3RhdGljOiBsLnN0YXRpYyxcbiAgICAgICAgZHJvcHBpbmdQb3NpdGlvbjogaXNEcm9wcGluZ0l0ZW0gPyBkcm9wcGluZ1Bvc2l0aW9uIDogdW5kZWZpbmVkXG4gICAgICB9LCBjaGlsZCk7XG4gICAgfSAvLyBDYWxsZWQgd2hpbGUgZHJhZ2dpbmcgYW4gZWxlbWVudC4gUGFydCBvZiBicm93c2VyIG5hdGl2ZSBkcmFnL2Ryb3AgQVBJLlxuICAgIC8vIE5hdGl2ZSBldmVudCB0YXJnZXQgbWlnaHQgYmUgdGhlIGxheW91dCBpdHNlbGYsIG9yIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBsYXlvdXQuXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczcuc3R5bGUsXG4gICAgICAgICAgaXNEcm9wcGFibGUgPSBfdGhpcyRwcm9wczcuaXNEcm9wcGFibGU7XG4gICAgICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGxheW91dENsYXNzTmFtZSwgY2xhc3NOYW1lKTtcblxuICAgICAgdmFyIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGhlaWdodDogdGhpcy5jb250YWluZXJIZWlnaHQoKVxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVyZ2VkQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogbWVyZ2VkU3R5bGUsXG4gICAgICAgIG9uRHJvcDogaXNEcm9wcGFibGUgPyB0aGlzLm9uRHJvcCA6IF91dGlscy5ub29wLFxuICAgICAgICBvbkRyYWdMZWF2ZTogaXNEcm9wcGFibGUgPyB0aGlzLm9uRHJhZ0xlYXZlIDogX3V0aWxzLm5vb3AsXG4gICAgICAgIG9uRHJhZ0VudGVyOiBpc0Ryb3BwYWJsZSA/IHRoaXMub25EcmFnRW50ZXIgOiBfdXRpbHMubm9vcCxcbiAgICAgICAgb25EcmFnT3ZlcjogaXNEcm9wcGFibGUgPyB0aGlzLm9uRHJhZ092ZXIgOiBfdXRpbHMubm9vcFxuICAgICAgfSwgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnByb2Nlc3NHcmlkSXRlbShjaGlsZCk7XG4gICAgICB9KSwgaXNEcm9wcGFibGUgJiYgdGhpcy5zdGF0ZS5kcm9wcGluZ0RPTU5vZGUgJiYgdGhpcy5wcm9jZXNzR3JpZEl0ZW0odGhpcy5zdGF0ZS5kcm9wcGluZ0RPTU5vZGUsIHRydWUpLCB0aGlzLnBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzXG4gICAgLyo6IFByb3BzKi9cbiAgICAsIHByZXZTdGF0ZVxuICAgIC8qOiBTdGF0ZSovXG4gICAgKSB7XG4gICAgICB2YXIgbmV3TGF5b3V0QmFzZTtcblxuICAgICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVEcmFnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvLyBMZWdhY3kgc3VwcG9ydCBmb3IgY29tcGFjdFR5cGVcbiAgICAgIC8vIEFsbG93IHBhcmVudCB0byBzZXQgbGF5b3V0IGRpcmVjdGx5LlxuXG5cbiAgICAgIGlmICghKDAsIF9sb2Rhc2guZGVmYXVsdCkobmV4dFByb3BzLmxheW91dCwgcHJldlN0YXRlLnByb3BzTGF5b3V0KSB8fCBuZXh0UHJvcHMuY29tcGFjdFR5cGUgIT09IHByZXZTdGF0ZS5jb21wYWN0VHlwZSkge1xuICAgICAgICBuZXdMYXlvdXRCYXNlID0gbmV4dFByb3BzLmxheW91dDtcbiAgICAgIH0gZWxzZSBpZiAoISgwLCBfdXRpbHMuY2hpbGRyZW5FcXVhbCkobmV4dFByb3BzLmNoaWxkcmVuLCBwcmV2U3RhdGUuY2hpbGRyZW4pKSB7XG4gICAgICAgIC8vIElmIGNoaWxkcmVuIGNoYW5nZSwgYWxzbyByZWdlbmVyYXRlIHRoZSBsYXlvdXQuIFVzZSBvdXIgc3RhdGVcbiAgICAgICAgLy8gYXMgdGhlIGJhc2UgaW4gY2FzZSBiZWNhdXNlIGl0IG1heSBiZSBtb3JlIHVwIHRvIGRhdGUgdGhhblxuICAgICAgICAvLyB3aGF0IGlzIGluIHByb3BzLlxuICAgICAgICBuZXdMYXlvdXRCYXNlID0gcHJldlN0YXRlLmxheW91dDtcbiAgICAgIH0gLy8gV2UgbmVlZCB0byByZWdlbmVyYXRlIHRoZSBsYXlvdXQuXG5cblxuICAgICAgaWYgKG5ld0xheW91dEJhc2UpIHtcbiAgICAgICAgdmFyIG5ld0xheW91dCA9ICgwLCBfdXRpbHMuc3luY2hyb25pemVMYXlvdXRXaXRoQ2hpbGRyZW4pKG5ld0xheW91dEJhc2UsIG5leHRQcm9wcy5jaGlsZHJlbiwgbmV4dFByb3BzLmNvbHMsICgwLCBfdXRpbHMuY29tcGFjdFR5cGUpKG5leHRQcm9wcykpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxheW91dDogbmV3TGF5b3V0LFxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc2F2ZSB0aGVzZSBwcm9wcyB0byBzdGF0ZSBmb3IgdXNpbmdcbiAgICAgICAgICAvLyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgaW5zdGVhZCBvZiBjb21wb25lbnREaWRNb3VudCAoaW4gd2hpY2ggd2Ugd291bGQgZ2V0IGV4dHJhIHJlcmVuZGVyKVxuICAgICAgICAgIGNvbXBhY3RUeXBlOiBuZXh0UHJvcHMuY29tcGFjdFR5cGUsXG4gICAgICAgICAgY2hpbGRyZW46IG5leHRQcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBwcm9wc0xheW91dDogbmV4dFByb3BzLmxheW91dFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVhY3RHcmlkTGF5b3V0O1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZWFjdEdyaWRMYXlvdXQ7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZWFjdEdyaWRMYXlvdXQsIFwiZGlzcGxheU5hbWVcIiwgXCJSZWFjdEdyaWRMYXlvdXRcIik7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZWFjdEdyaWRMYXlvdXQsIFwicHJvcFR5cGVzXCIsIF9SZWFjdEdyaWRMYXlvdXRQcm9wVHlwZXMuZGVmYXVsdCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZWFjdEdyaWRMYXlvdXQsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgYXV0b1NpemU6IHRydWUsXG4gIGNvbHM6IDEyLFxuICBjbGFzc05hbWU6IFwiXCIsXG4gIHN0eWxlOiB7fSxcbiAgZHJhZ2dhYmxlSGFuZGxlOiBcIlwiLFxuICBkcmFnZ2FibGVDYW5jZWw6IFwiXCIsXG4gIGNvbnRhaW5lclBhZGRpbmc6IG51bGwsXG4gIHJvd0hlaWdodDogMTUwLFxuICBtYXhSb3dzOiBJbmZpbml0eSxcbiAgLy8gaW5maW5pdGUgdmVydGljYWwgZ3Jvd3RoXG4gIGxheW91dDogW10sXG4gIG1hcmdpbjogWzEwLCAxMF0sXG4gIGlzRHJhZ2dhYmxlOiB0cnVlLFxuICBpc1Jlc2l6YWJsZTogdHJ1ZSxcbiAgaXNEcm9wcGFibGU6IGZhbHNlLFxuICB1c2VDU1NUcmFuc2Zvcm1zOiB0cnVlLFxuICB0cmFuc2Zvcm1TY2FsZTogMSxcbiAgdmVydGljYWxDb21wYWN0OiB0cnVlLFxuICBjb21wYWN0VHlwZTogXCJ2ZXJ0aWNhbFwiLFxuICBwcmV2ZW50Q29sbGlzaW9uOiBmYWxzZSxcbiAgZHJvcHBpbmdJdGVtOiB7XG4gICAgaTogXCJfX2Ryb3BwaW5nLWVsZW1fX1wiLFxuICAgIGg6IDEsXG4gICAgdzogMVxuICB9LFxuICBvbkxheW91dENoYW5nZTogX3V0aWxzLm5vb3AsXG4gIG9uRHJhZ1N0YXJ0OiBfdXRpbHMubm9vcCxcbiAgb25EcmFnOiBfdXRpbHMubm9vcCxcbiAgb25EcmFnU3RvcDogX3V0aWxzLm5vb3AsXG4gIG9uUmVzaXplU3RhcnQ6IF91dGlscy5ub29wLFxuICBvblJlc2l6ZTogX3V0aWxzLm5vb3AsXG4gIG9uUmVzaXplU3RvcDogX3V0aWxzLm5vb3AsXG4gIG9uRHJvcDogX3V0aWxzLm5vb3Bcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIC8vXG4gIC8vIEJhc2ljIHByb3BzXG4gIC8vXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsXG4gIC8vIFRoaXMgY2FuIGJlIHNldCBleHBsaWNpdGx5LiBJZiBpdCBpcyBub3Qgc2V0LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgLy8gYmUgc2V0IHRvIHRoZSBjb250YWluZXIgd2lkdGguIE5vdGUgdGhhdCByZXNpemVzIHdpbGwgKm5vdCogY2F1c2UgdGhpcyB0byBhZGp1c3QuXG4gIC8vIElmIHlvdSBuZWVkIHRoYXQgYmVoYXZpb3IsIHVzZSBXaWR0aFByb3ZpZGVyLlxuICB3aWR0aDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgLy8gSWYgdHJ1ZSwgdGhlIGNvbnRhaW5lciBoZWlnaHQgc3dlbGxzIGFuZCBjb250cmFjdHMgdG8gZml0IGNvbnRlbnRzXG4gIGF1dG9TaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgLy8gIyBvZiBjb2xzLlxuICBjb2xzOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAvLyBBIHNlbGVjdG9yIHRoYXQgd2lsbCBub3QgYmUgZHJhZ2dhYmxlLlxuICBkcmFnZ2FibGVDYW5jZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIC8vIEEgc2VsZWN0b3IgZm9yIHRoZSBkcmFnZ2FibGUgaGFuZGxlclxuICBkcmFnZ2FibGVIYW5kbGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIC8vIERlcHJlY2F0ZWRcbiAgdmVydGljYWxDb21wYWN0OiBmdW5jdGlvbiB2ZXJ0aWNhbENvbXBhY3QocHJvcHNcbiAgLyo6IFByb3BzKi9cbiAgKSB7XG4gICAgaWYgKHByb3BzLnZlcnRpY2FsQ29tcGFjdCA9PT0gZmFsc2UgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgXCJgdmVydGljYWxDb21wYWN0YCBvbiA8UmVhY3RHcmlkTGF5b3V0PiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgc29vbi4gXCIgKyAnVXNlIGBjb21wYWN0VHlwZWA6IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiIHwgbnVsbC4nKTtcbiAgICB9XG4gIH0sXG4gIC8vIENob29zZSB2ZXJ0aWNhbCBvciBob3Rpem9udGFsIGNvbXBhY3Rpb25cbiAgY29tcGFjdFR5cGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZihbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl0pLFxuICAvLyBsYXlvdXQgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0IHdpdGggdGhlIGZvcm1hdDpcbiAgLy8ge3g6IE51bWJlciwgeTogTnVtYmVyLCB3OiBOdW1iZXIsIGg6IE51bWJlciwgaTogU3RyaW5nfVxuICBsYXlvdXQ6IGZ1bmN0aW9uIGxheW91dChwcm9wc1xuICAvKjogUHJvcHMqL1xuICApIHtcbiAgICB2YXIgbGF5b3V0ID0gcHJvcHMubGF5b3V0OyAvLyBJIGhvcGUgeW91J3JlIHNldHRpbmcgdGhlIGRhdGEtZ3JpZCBwcm9wZXJ0eSBvbiB0aGUgZ3JpZCBpdGVtc1xuXG4gICAgaWYgKGxheW91dCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICByZXF1aXJlKFwiLi91dGlsc1wiKS52YWxpZGF0ZUxheW91dChsYXlvdXQsIFwibGF5b3V0XCIpO1xuICB9LFxuICAvL1xuICAvLyBHcmlkIERpbWVuc2lvbnNcbiAgLy9cbiAgLy8gTWFyZ2luIGJldHdlZW4gaXRlbXMgW3gsIHldIGluIHB4XG4gIG1hcmdpbjogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciksXG4gIC8vIFBhZGRpbmcgaW5zaWRlIHRoZSBjb250YWluZXIgW3gsIHldIGluIHB4XG4gIGNvbnRhaW5lclBhZGRpbmc6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIpLFxuICAvLyBSb3dzIGhhdmUgYSBzdGF0aWMgaGVpZ2h0LCBidXQgeW91IGNhbiBjaGFuZ2UgdGhpcyBiYXNlZCBvbiBicmVha3BvaW50cyBpZiB5b3UgbGlrZVxuICByb3dIZWlnaHQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIC8vIERlZmF1bHQgSW5maW5pdHksIGJ1dCB5b3UgY2FuIHNwZWNpZnkgYSBtYXggaGVyZSBpZiB5b3UgbGlrZS5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgaXNuJ3QgZnVsbHkgZmxlc2hlZCBvdXQgYW5kIHdvbid0IGVycm9yIGlmIHlvdSBzcGVjaWZ5IGEgbGF5b3V0IHRoYXRcbiAgLy8gZXh0ZW5kcyBiZXlvbmQgdGhlIHJvdyBjYXBhY2l0eS4gSXQgd2lsbCwgaG93ZXZlciwgbm90IGFsbG93IHVzZXJzIHRvIGRyYWcvcmVzaXplXG4gIC8vIGFuIGl0ZW0gcGFzdCB0aGUgYmFycmllci4gVGhleSBjYW4gcHVzaCBpdGVtcyBiZXlvbmQgdGhlIGJhcnJpZXIsIHRob3VnaC5cbiAgLy8gSW50ZW50aW9uYWxseSBub3QgZG9jdW1lbnRlZCBmb3IgdGhpcyByZWFzb24uXG4gIG1heFJvd3M6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIC8vXG4gIC8vIEZsYWdzXG4gIC8vXG4gIGlzRHJhZ2dhYmxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgaXNSZXNpemFibGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAvLyBJZiB0cnVlLCBncmlkIGl0ZW1zIHdvbid0IGNoYW5nZSBwb3NpdGlvbiB3aGVuIGJlaW5nIGRyYWdnZWQgb3Zlci5cbiAgcHJldmVudENvbGxpc2lvbjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG4gIC8vIFVzZSBDU1MgdHJhbnNmb3JtcyBpbnN0ZWFkIG9mIHRvcC9sZWZ0XG4gIHVzZUNTU1RyYW5zZm9ybXM6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAvLyBwYXJlbnQgbGF5b3V0IHRyYW5zZm9ybSBzY2FsZVxuICB0cmFuc2Zvcm1TY2FsZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgLy8gSWYgdHJ1ZSwgYW4gZXh0ZXJuYWwgZWxlbWVudCBjYW4gdHJpZ2dlciBvbkRyb3AgY2FsbGJhY2sgd2l0aCBhIHNwZWNpZmljIGdyaWQgcG9zaXRpb24gYXMgYSBwYXJhbWV0ZXJcbiAgaXNEcm9wcGFibGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAvL1xuICAvLyBDYWxsYmFja3NcbiAgLy9cbiAgLy8gQ2FsbGJhY2sgc28geW91IGNhbiBzYXZlIHRoZSBsYXlvdXQuIENhbGxzIGFmdGVyIGVhY2ggZHJhZyAmIHJlc2l6ZSBzdG9wcy5cbiAgb25MYXlvdXRDaGFuZ2U6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxscyB3aGVuIGRyYWcgc3RhcnRzLiBDYWxsYmFjayBpcyBvZiB0aGUgc2lnbmF0dXJlIChsYXlvdXQsIG9sZEl0ZW0sIG5ld0l0ZW0sIHBsYWNlaG9sZGVyLCBlLCA/bm9kZSkuXG4gIC8vIEFsbCBjYWxsYmFja3MgYmVsb3cgaGF2ZSB0aGUgc2FtZSBzaWduYXR1cmUuICdzdGFydCcgYW5kICdzdG9wJyBjYWxsYmFja3Mgb21pdCB0aGUgJ3BsYWNlaG9sZGVyJy5cbiAgb25EcmFnU3RhcnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxscyBvbiBlYWNoIGRyYWcgbW92ZW1lbnQuXG4gIG9uRHJhZzogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vIENhbGxzIHdoZW4gZHJhZyBpcyBjb21wbGV0ZS5cbiAgb25EcmFnU3RvcDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vQ2FsbHMgd2hlbiByZXNpemUgc3RhcnRzLlxuICBvblJlc2l6ZVN0YXJ0OiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gQ2FsbHMgd2hlbiByZXNpemUgbW92ZW1lbnQgaGFwcGVucy5cbiAgb25SZXNpemU6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxscyB3aGVuIHJlc2l6ZSBpcyBjb21wbGV0ZS5cbiAgb25SZXNpemVTdG9wOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gQ2FsbHMgd2hlbiBzb21lIGVsZW1lbnQgaXMgZHJvcHBlZC5cbiAgb25Ecm9wOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy9cbiAgLy8gT3RoZXIgdmFsaWRhdGlvbnNcbiAgLy9cbiAgZHJvcHBpbmdJdGVtOiBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICAgIGk6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkXG4gIH0pLFxuICAvLyBDaGlsZHJlbiBtdXN0IG5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzLlxuICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocHJvcHNcbiAgLyo6IFByb3BzKi9cbiAgLCBwcm9wTmFtZVxuICAvKjogc3RyaW5nKi9cbiAgKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHNbcHJvcE5hbWVdOyAvLyBDaGVjayBjaGlsZHJlbiBrZXlzIGZvciBkdXBsaWNhdGVzLiBUaHJvdyBpZiBmb3VuZC5cblxuICAgIHZhciBrZXlzID0ge307XG5cbiAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChrZXlzW2NoaWxkLmtleV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgY2hpbGQga2V5IFwiJyArIGNoaWxkLmtleSArICdcIiBmb3VuZCEgVGhpcyB3aWxsIGNhdXNlIHByb2JsZW1zIGluIFJlYWN0R3JpZExheW91dC4nKTtcbiAgICAgIH1cblxuICAgICAga2V5c1tjaGlsZC5rZXldID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2xvZGFzaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC5pc2VxdWFsXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX3Jlc3BvbnNpdmVVdGlscyA9IHJlcXVpcmUoXCIuL3Jlc3BvbnNpdmVVdGlsc1wiKTtcblxudmFyIF9SZWFjdEdyaWRMYXlvdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1JlYWN0R3JpZExheW91dFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdHlwZSA9IGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbn07XG4vKipcbiAqIEdldCBhIHZhbHVlIG9mIG1hcmdpbiBvciBjb250YWluZXJQYWRkaW5nLlxuICpcbiAqIEBwYXJhbSAge0FycmF5IHwgT2JqZWN0fSBwYXJhbSBNYXJnaW4gfCBjb250YWluZXJQYWRkaW5nLCBlLmcuIFsxMCwgMTBdIHwge2xnOiBbMTAsIDEwXSwgLi4ufS5cbiAqIEBwYXJhbSAge1N0cmluZ30gYnJlYWtwb2ludCAgIEJyZWFrcG9pbnQ6IGxnLCBtZCwgc20sIHhzIGFuZCBldGMuXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEluZGVudGF0aW9uVmFsdWUocGFyYW1cbi8qOiB7IFtrZXk6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSB8IFtudW1iZXIsIG51bWJlcl0qL1xuLCBicmVha3BvaW50XG4vKjogc3RyaW5nKi9cbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJhbSkgPyBwYXJhbSA6IHBhcmFtW2JyZWFrcG9pbnRdO1xufVxuLyo6OiB0eXBlIFN0YXRlID0ge1xuICBsYXlvdXQ6IExheW91dCxcbiAgYnJlYWtwb2ludDogc3RyaW5nLFxuICBjb2xzOiBudW1iZXIsXG4gIGxheW91dHM/OiB7IFtrZXk6IHN0cmluZ106IExheW91dCB9XG59OyovXG5cbi8qOjogdHlwZSBQcm9wczxCcmVha3BvaW50OiBzdHJpbmcgPSBzdHJpbmc+ID0ge3xcbiAgLi4uUmVhY3QuRWxlbWVudENvbmZpZzx0eXBlb2YgUmVhY3RHcmlkTGF5b3V0PixcblxuICAvLyBSZXNwb25zaXZlIGNvbmZpZ1xuICBicmVha3BvaW50PzogP0JyZWFrcG9pbnQsXG4gIGJyZWFrcG9pbnRzOiBCcmVha3BvaW50czxCcmVha3BvaW50PixcbiAgY29sczogeyBba2V5OiBCcmVha3BvaW50XTogbnVtYmVyIH0sXG4gIGxheW91dHM6IFJlc3BvbnNpdmVMYXlvdXQ8QnJlYWtwb2ludD4sXG4gIHdpZHRoOiBudW1iZXIsXG4gIG1hcmdpbjogeyBba2V5OiBCcmVha3BvaW50XTogW251bWJlciwgbnVtYmVyXSB9IHwgW251bWJlciwgbnVtYmVyXSxcbiAgY29udGFpbmVyUGFkZGluZzogeyBba2V5OiBCcmVha3BvaW50XTogW251bWJlciwgbnVtYmVyXSB9IHwgW251bWJlciwgbnVtYmVyXSxcblxuICAvLyBDYWxsYmFja3NcbiAgb25CcmVha3BvaW50Q2hhbmdlOiAoQnJlYWtwb2ludCwgY29sczogbnVtYmVyKSA9PiB2b2lkLFxuICBvbkxheW91dENoYW5nZTogKExheW91dCwgeyBba2V5OiBCcmVha3BvaW50XTogTGF5b3V0IH0pID0+IHZvaWQsXG4gIG9uV2lkdGhDaGFuZ2U6IChcbiAgICBjb250YWluZXJXaWR0aDogbnVtYmVyLFxuICAgIG1hcmdpbjogW251bWJlciwgbnVtYmVyXSxcbiAgICBjb2xzOiBudW1iZXIsXG4gICAgY29udGFpbmVyUGFkZGluZzogW251bWJlciwgbnVtYmVyXSB8IG51bGxcbiAgKSA9PiB2b2lkXG58fTsqL1xuXG5cbnZhciBSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0KCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dCkpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIF90aGlzLmdlbmVyYXRlSW5pdGlhbFN0YXRlKCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTGF5b3V0Q2hhbmdlXCIsIGZ1bmN0aW9uIChsYXlvdXRcbiAgICAvKjogTGF5b3V0Ki9cbiAgICApIHtcbiAgICAgIF90aGlzLnByb3BzLm9uTGF5b3V0Q2hhbmdlKGxheW91dCwgX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMubGF5b3V0cywgX2RlZmluZVByb3BlcnR5KHt9LCBfdGhpcy5zdGF0ZS5icmVha3BvaW50LCBsYXlvdXQpKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dCwgW3tcbiAgICBrZXk6IFwiZ2VuZXJhdGVJbml0aWFsU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVJbml0aWFsU3RhdGUoKVxuICAgIC8qOiBTdGF0ZSovXG4gICAge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzLndpZHRoLFxuICAgICAgICAgIGJyZWFrcG9pbnRzID0gX3RoaXMkcHJvcHMuYnJlYWtwb2ludHMsXG4gICAgICAgICAgbGF5b3V0cyA9IF90aGlzJHByb3BzLmxheW91dHMsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzLmNvbHM7XG4gICAgICB2YXIgYnJlYWtwb2ludCA9ICgwLCBfcmVzcG9uc2l2ZVV0aWxzLmdldEJyZWFrcG9pbnRGcm9tV2lkdGgpKGJyZWFrcG9pbnRzLCB3aWR0aCk7XG4gICAgICB2YXIgY29sTm8gPSAoMCwgX3Jlc3BvbnNpdmVVdGlscy5nZXRDb2xzRnJvbUJyZWFrcG9pbnQpKGJyZWFrcG9pbnQsIGNvbHMpOyAvLyB2ZXJ0aWNhbENvbXBhY3QgY29tcGF0aWJpbGl0eSwgbm93IGRlcHJlY2F0ZWRcblxuICAgICAgdmFyIGNvbXBhY3RUeXBlID0gdGhpcy5wcm9wcy52ZXJ0aWNhbENvbXBhY3QgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMucHJvcHMuY29tcGFjdFR5cGU7IC8vIEdldCB0aGUgaW5pdGlhbCBsYXlvdXQuIFRoaXMgY2FuIHRyaWNreTsgd2UgdHJ5IHRvIGdlbmVyYXRlIG9uZSBob3dldmVyIHBvc3NpYmxlIGlmIG9uZSBkb2Vzbid0IGV4aXN0XG4gICAgICAvLyBmb3IgdGhpcyBsYXlvdXQuXG5cbiAgICAgIHZhciBpbml0aWFsTGF5b3V0ID0gKDAsIF9yZXNwb25zaXZlVXRpbHMuZmluZE9yR2VuZXJhdGVSZXNwb25zaXZlTGF5b3V0KShsYXlvdXRzLCBicmVha3BvaW50cywgYnJlYWtwb2ludCwgYnJlYWtwb2ludCwgY29sTm8sIGNvbXBhY3RUeXBlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dDogaW5pdGlhbExheW91dCxcbiAgICAgICAgYnJlYWtwb2ludDogYnJlYWtwb2ludCxcbiAgICAgICAgY29sczogY29sTm9cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzXG4gICAgLyo6IFByb3BzPCo+Ki9cbiAgICApIHtcbiAgICAgIC8vIEFsbG93IHBhcmVudCB0byBzZXQgd2lkdGggb3IgYnJlYWtwb2ludCBkaXJlY3RseS5cbiAgICAgIGlmICh0aGlzLnByb3BzLndpZHRoICE9IHByZXZQcm9wcy53aWR0aCB8fCB0aGlzLnByb3BzLmJyZWFrcG9pbnQgIT09IHByZXZQcm9wcy5icmVha3BvaW50IHx8ICEoMCwgX2xvZGFzaC5kZWZhdWx0KSh0aGlzLnByb3BzLmJyZWFrcG9pbnRzLCBwcmV2UHJvcHMuYnJlYWtwb2ludHMpIHx8ICEoMCwgX2xvZGFzaC5kZWZhdWx0KSh0aGlzLnByb3BzLmNvbHMsIHByZXZQcm9wcy5jb2xzKSkge1xuICAgICAgICB0aGlzLm9uV2lkdGhDaGFuZ2UocHJldlByb3BzKTtcbiAgICAgIH1cbiAgICB9IC8vIHdyYXAgbGF5b3V0cyBzbyB3ZSBkbyBub3QgbmVlZCB0byBwYXNzIGxheW91dHMgdG8gY2hpbGRcblxuICB9LCB7XG4gICAga2V5OiBcIm9uV2lkdGhDaGFuZ2VcIixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHdpZHRoIGNoYW5nZXMgd29yayB0aHJvdWdoIGJyZWFrcG9pbnRzIGFuZCByZXNldCBzdGF0ZSB3aXRoIHRoZSBuZXcgd2lkdGggJiBicmVha3BvaW50LlxuICAgICAqIFdpZHRoIGNoYW5nZXMgYXJlIG5lY2Vzc2FyeSB0byBmaWd1cmUgb3V0IHRoZSB3aWRnZXQgd2lkdGhzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBvbldpZHRoQ2hhbmdlKHByZXZQcm9wc1xuICAgIC8qOiBQcm9wczwqPiovXG4gICAgKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBicmVha3BvaW50cyA9IF90aGlzJHByb3BzMi5icmVha3BvaW50cyxcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHMyLmNvbHMsXG4gICAgICAgICAgbGF5b3V0cyA9IF90aGlzJHByb3BzMi5sYXlvdXRzLFxuICAgICAgICAgIGNvbXBhY3RUeXBlID0gX3RoaXMkcHJvcHMyLmNvbXBhY3RUeXBlO1xuICAgICAgdmFyIG5ld0JyZWFrcG9pbnQgPSB0aGlzLnByb3BzLmJyZWFrcG9pbnQgfHwgKDAsIF9yZXNwb25zaXZlVXRpbHMuZ2V0QnJlYWtwb2ludEZyb21XaWR0aCkodGhpcy5wcm9wcy5icmVha3BvaW50cywgdGhpcy5wcm9wcy53aWR0aCk7XG4gICAgICB2YXIgbGFzdEJyZWFrcG9pbnQgPSB0aGlzLnN0YXRlLmJyZWFrcG9pbnQ7XG4gICAgICB2YXIgbmV3Q29sc1xuICAgICAgLyo6IG51bWJlciovXG4gICAgICA9ICgwLCBfcmVzcG9uc2l2ZVV0aWxzLmdldENvbHNGcm9tQnJlYWtwb2ludCkobmV3QnJlYWtwb2ludCwgY29scyk7XG5cbiAgICAgIHZhciBuZXdMYXlvdXRzID0gX29iamVjdFNwcmVhZCh7fSwgbGF5b3V0cyk7IC8vIEJyZWFrcG9pbnQgY2hhbmdlXG5cblxuICAgICAgaWYgKGxhc3RCcmVha3BvaW50ICE9PSBuZXdCcmVha3BvaW50IHx8IHByZXZQcm9wcy5icmVha3BvaW50cyAhPT0gYnJlYWtwb2ludHMgfHwgcHJldlByb3BzLmNvbHMgIT09IGNvbHMpIHtcbiAgICAgICAgLy8gUHJlc2VydmUgdGhlIGN1cnJlbnQgbGF5b3V0IGlmIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgbGF5b3V0cy5cbiAgICAgICAgaWYgKCEobGFzdEJyZWFrcG9pbnQgaW4gbmV3TGF5b3V0cykpIG5ld0xheW91dHNbbGFzdEJyZWFrcG9pbnRdID0gKDAsIF91dGlscy5jbG9uZUxheW91dCkodGhpcy5zdGF0ZS5sYXlvdXQpOyAvLyBGaW5kIG9yIGdlbmVyYXRlIGEgbmV3IGxheW91dC5cblxuICAgICAgICB2YXIgbGF5b3V0ID0gKDAsIF9yZXNwb25zaXZlVXRpbHMuZmluZE9yR2VuZXJhdGVSZXNwb25zaXZlTGF5b3V0KShuZXdMYXlvdXRzLCBicmVha3BvaW50cywgbmV3QnJlYWtwb2ludCwgbGFzdEJyZWFrcG9pbnQsIG5ld0NvbHMsIGNvbXBhY3RUeXBlKTsgLy8gVGhpcyBhZGRzIG1pc3NpbmcgaXRlbXMuXG5cbiAgICAgICAgbGF5b3V0ID0gKDAsIF91dGlscy5zeW5jaHJvbml6ZUxheW91dFdpdGhDaGlsZHJlbikobGF5b3V0LCB0aGlzLnByb3BzLmNoaWxkcmVuLCBuZXdDb2xzLCBjb21wYWN0VHlwZSk7IC8vIFN0b3JlIHRoZSBuZXcgbGF5b3V0LlxuXG4gICAgICAgIG5ld0xheW91dHNbbmV3QnJlYWtwb2ludF0gPSBsYXlvdXQ7IC8vIGNhbGxiYWNrc1xuXG4gICAgICAgIHRoaXMucHJvcHMub25MYXlvdXRDaGFuZ2UobGF5b3V0LCBuZXdMYXlvdXRzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJyZWFrcG9pbnRDaGFuZ2UobmV3QnJlYWtwb2ludCwgbmV3Q29scyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IG5ld0JyZWFrcG9pbnQsXG4gICAgICAgICAgbGF5b3V0OiBsYXlvdXQsXG4gICAgICAgICAgY29sczogbmV3Q29sc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hcmdpbiA9IGdldEluZGVudGF0aW9uVmFsdWUodGhpcy5wcm9wcy5tYXJnaW4sIG5ld0JyZWFrcG9pbnQpO1xuICAgICAgdmFyIGNvbnRhaW5lclBhZGRpbmcgPSBnZXRJbmRlbnRhdGlvblZhbHVlKHRoaXMucHJvcHMuY29udGFpbmVyUGFkZGluZywgbmV3QnJlYWtwb2ludCk7IC8vY2FsbCBvbldpZHRoQ2hhbmdlIG9uIGV2ZXJ5IGNoYW5nZSBvZiB3aWR0aCwgbm90IG9ubHkgb24gYnJlYWtwb2ludCBjaGFuZ2VzXG5cbiAgICAgIHRoaXMucHJvcHMub25XaWR0aENoYW5nZSh0aGlzLnByb3BzLndpZHRoLCBtYXJnaW4sIG5ld0NvbHMsIGNvbnRhaW5lclBhZGRpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJyZWFrcG9pbnQgPSBfdGhpcyRwcm9wczMuYnJlYWtwb2ludCxcbiAgICAgICAgICBicmVha3BvaW50cyA9IF90aGlzJHByb3BzMy5icmVha3BvaW50cyxcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHMzLmNvbHMsXG4gICAgICAgICAgbGF5b3V0cyA9IF90aGlzJHByb3BzMy5sYXlvdXRzLFxuICAgICAgICAgIG1hcmdpbiA9IF90aGlzJHByb3BzMy5tYXJnaW4sXG4gICAgICAgICAgY29udGFpbmVyUGFkZGluZyA9IF90aGlzJHByb3BzMy5jb250YWluZXJQYWRkaW5nLFxuICAgICAgICAgIG9uQnJlYWtwb2ludENoYW5nZSA9IF90aGlzJHByb3BzMy5vbkJyZWFrcG9pbnRDaGFuZ2UsXG4gICAgICAgICAgb25MYXlvdXRDaGFuZ2UgPSBfdGhpcyRwcm9wczMub25MYXlvdXRDaGFuZ2UsXG4gICAgICAgICAgb25XaWR0aENoYW5nZSA9IF90aGlzJHByb3BzMy5vbldpZHRoQ2hhbmdlLFxuICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMywgW1wiYnJlYWtwb2ludFwiLCBcImJyZWFrcG9pbnRzXCIsIFwiY29sc1wiLCBcImxheW91dHNcIiwgXCJtYXJnaW5cIiwgXCJjb250YWluZXJQYWRkaW5nXCIsIFwib25CcmVha3BvaW50Q2hhbmdlXCIsIFwib25MYXlvdXRDaGFuZ2VcIiwgXCJvbldpZHRoQ2hhbmdlXCJdKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfUmVhY3RHcmlkTGF5b3V0LmRlZmF1bHQsIF9leHRlbmRzKHt9LCBvdGhlciwge1xuICAgICAgICBtYXJnaW46IGdldEluZGVudGF0aW9uVmFsdWUobWFyZ2luLCB0aGlzLnN0YXRlLmJyZWFrcG9pbnQpLFxuICAgICAgICBjb250YWluZXJQYWRkaW5nOiBnZXRJbmRlbnRhdGlvblZhbHVlKGNvbnRhaW5lclBhZGRpbmcsIHRoaXMuc3RhdGUuYnJlYWtwb2ludCksXG4gICAgICAgIG9uTGF5b3V0Q2hhbmdlOiB0aGlzLm9uTGF5b3V0Q2hhbmdlLFxuICAgICAgICBsYXlvdXQ6IHRoaXMuc3RhdGUubGF5b3V0LFxuICAgICAgICBjb2xzOiB0aGlzLnN0YXRlLmNvbHNcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wc1xuICAgIC8qOiBQcm9wczwqPiovXG4gICAgLCBwcmV2U3RhdGVcbiAgICAvKjogU3RhdGUqL1xuICAgICkge1xuICAgICAgaWYgKCEoMCwgX2xvZGFzaC5kZWZhdWx0KShuZXh0UHJvcHMubGF5b3V0cywgcHJldlN0YXRlLmxheW91dHMpKSB7XG4gICAgICAgIC8vIEFsbG93IHBhcmVudCB0byBzZXQgbGF5b3V0cyBkaXJlY3RseS5cbiAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSBwcmV2U3RhdGUuYnJlYWtwb2ludCxcbiAgICAgICAgICAgIF9jb2xzID0gcHJldlN0YXRlLmNvbHM7IC8vIFNpbmNlIHdlJ3JlIHNldHRpbmcgYW4gZW50aXJlbHkgbmV3IGxheW91dCBvYmplY3QsIHdlIG11c3QgZ2VuZXJhdGUgYSBuZXcgcmVzcG9uc2l2ZSBsYXlvdXRcbiAgICAgICAgLy8gaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuXG4gICAgICAgIHZhciBuZXdMYXlvdXQgPSAoMCwgX3Jlc3BvbnNpdmVVdGlscy5maW5kT3JHZW5lcmF0ZVJlc3BvbnNpdmVMYXlvdXQpKG5leHRQcm9wcy5sYXlvdXRzLCBuZXh0UHJvcHMuYnJlYWtwb2ludHMsIGJyZWFrcG9pbnQsIGJyZWFrcG9pbnQsIF9jb2xzLCBuZXh0UHJvcHMuY29tcGFjdFR5cGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxheW91dDogbmV3TGF5b3V0LFxuICAgICAgICAgIGxheW91dHM6IG5leHRQcm9wcy5sYXlvdXRzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0O1xuXG5fZGVmaW5lUHJvcGVydHkoUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dCwgXCJwcm9wVHlwZXNcIiwge1xuICAvL1xuICAvLyBCYXNpYyBwcm9wc1xuICAvL1xuICAvLyBPcHRpb25hbCwgYnV0IGlmIHlvdSBhcmUgbWFuYWdpbmcgd2lkdGggeW91cnNlbGYgeW91IG1heSB3YW50IHRvIHNldCB0aGUgYnJlYWtwb2ludFxuICAvLyB5b3Vyc2VsZiBhcyB3ZWxsLlxuICBicmVha3BvaW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICAvLyB7bmFtZTogcHhWYWx9LCBlLmcuIHtsZzogMTIwMCwgbWQ6IDk5Niwgc206IDc2OCwgeHM6IDQ4MH1cbiAgYnJlYWtwb2ludHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsXG4gIC8vICMgb2YgY29scy4gVGhpcyBpcyBhIGJyZWFrcG9pbnQgLT4gY29scyBtYXBcbiAgY29sczogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcbiAgLy8gIyBvZiBtYXJnaW4uIFRoaXMgaXMgYSBicmVha3BvaW50IC0+IG1hcmdpbiBtYXBcbiAgLy8gZS5nLiB7IGxnOiBbNSwgNV0sIG1kOiBbMTAsIDEwXSwgc206IFsxNSwgMTVdIH1cbiAgLy8gTWFyZ2luIGJldHdlZW4gaXRlbXMgW3gsIHldIGluIHB4XG4gIC8vIGUuZy4gWzEwLCAxMF1cbiAgbWFyZ2luOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXksIF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3RdKSxcbiAgLy8gIyBvZiBjb250YWluZXJQYWRkaW5nLiBUaGlzIGlzIGEgYnJlYWtwb2ludCAtPiBjb250YWluZXJQYWRkaW5nIG1hcFxuICAvLyBlLmcuIHsgbGc6IFs1LCA1XSwgbWQ6IFsxMCwgMTBdLCBzbTogWzE1LCAxNV0gfVxuICAvLyBQYWRkaW5nIGluc2lkZSB0aGUgY29udGFpbmVyIFt4LCB5XSBpbiBweFxuICAvLyBlLmcuIFsxMCwgMTBdXG4gIGNvbnRhaW5lclBhZGRpbmc6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5hcnJheSwgX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdF0pLFxuICAvLyBsYXlvdXRzIGlzIGFuIG9iamVjdCBtYXBwaW5nIGJyZWFrcG9pbnRzIHRvIGxheW91dHMuXG4gIC8vIGUuZy4ge2xnOiBMYXlvdXQsIG1kOiBMYXlvdXQsIC4uLn1cbiAgbGF5b3V0czogZnVuY3Rpb24gbGF5b3V0cyhwcm9wc1xuICAvKjogUHJvcHM8PiovXG4gICwgcHJvcE5hbWVcbiAgLyo6IHN0cmluZyovXG4gICkge1xuICAgIGlmICh0eXBlKHByb3BzW3Byb3BOYW1lXSkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxheW91dCBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdC4gUmVjZWl2ZWQ6IFwiICsgdHlwZShwcm9wc1twcm9wTmFtZV0pKTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhwcm9wc1twcm9wTmFtZV0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3BzLmJyZWFrcG9pbnRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFYWNoIGtleSBpbiBsYXlvdXRzIG11c3QgYWxpZ24gd2l0aCBhIGtleSBpbiBicmVha3BvaW50cy5cIik7XG4gICAgICB9XG5cbiAgICAgICgwLCBfdXRpbHMudmFsaWRhdGVMYXlvdXQpKHByb3BzLmxheW91dHNba2V5XSwgXCJsYXlvdXRzLlwiICsga2V5KTtcbiAgICB9KTtcbiAgfSxcbiAgLy8gVGhlIHdpZHRoIG9mIHRoaXMgY29tcG9uZW50LlxuICAvLyBSZXF1aXJlZCBpbiB0aGlzIHByb3BUeXBlcyBzdGFuemEgYmVjYXVzZSBnZW5lcmF0ZUluaXRpYWxTdGF0ZSgpIHdpbGwgZmFpbCB3aXRob3V0IGl0LlxuICB3aWR0aDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICAvL1xuICAvLyBDYWxsYmFja3NcbiAgLy9cbiAgLy8gQ2FsbHMgYmFjayB3aXRoIGJyZWFrcG9pbnQgYW5kIG5ldyAjIGNvbHNcbiAgb25CcmVha3BvaW50Q2hhbmdlOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gQ2FsbGJhY2sgc28geW91IGNhbiBzYXZlIHRoZSBsYXlvdXQuXG4gIC8vIENhbGxzIGJhY2sgd2l0aCAoY3VycmVudExheW91dCwgYWxsTGF5b3V0cykuIGFsbExheW91dHMgYXJlIGtleWVkIGJ5IGJyZWFrcG9pbnQuXG4gIG9uTGF5b3V0Q2hhbmdlOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gQ2FsbHMgYmFjayB3aXRoIChjb250YWluZXJXaWR0aCwgbWFyZ2luLCBjb2xzLCBjb250YWluZXJQYWRkaW5nKVxuICBvbldpZHRoQ2hhbmdlOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuY1xufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0LCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgbGc6IDEyMDAsXG4gICAgbWQ6IDk5NixcbiAgICBzbTogNzY4LFxuICAgIHhzOiA0ODAsXG4gICAgeHhzOiAwXG4gIH0sXG4gIGNvbHM6IHtcbiAgICBsZzogMTIsXG4gICAgbWQ6IDEwLFxuICAgIHNtOiA2LFxuICAgIHhzOiA0LFxuICAgIHh4czogMlxuICB9LFxuICBsYXlvdXRzOiB7fSxcbiAgbWFyZ2luOiBbMTAsIDEwXSxcbiAgY29udGFpbmVyUGFkZGluZzoge1xuICAgIGxnOiBbMCwgMF0sXG4gICAgbWQ6IFswLCAwXSxcbiAgICBzbTogWzAsIDBdLFxuICAgIHhzOiBbMCwgMF0sXG4gICAgeHhzOiBbMCwgMF1cbiAgfSxcbiAgb25CcmVha3BvaW50Q2hhbmdlOiBfdXRpbHMubm9vcCxcbiAgb25MYXlvdXRDaGFuZ2U6IF91dGlscy5ub29wLFxuICBvbldpZHRoQ2hhbmdlOiBfdXRpbHMubm9vcFxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGNHcmlkQ29sV2lkdGggPSBjYWxjR3JpZENvbFdpZHRoO1xuZXhwb3J0cy5jYWxjR3JpZEl0ZW1Qb3NpdGlvbiA9IGNhbGNHcmlkSXRlbVBvc2l0aW9uO1xuZXhwb3J0cy5jYWxjWFkgPSBjYWxjWFk7XG5leHBvcnRzLmNhbGNXSCA9IGNhbGNXSDtcblxuLyo6OiBpbXBvcnQgdHlwZSB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vdXRpbHNcIjsqL1xuXG4vKjo6IGV4cG9ydCB0eXBlIFBvc2l0aW9uUGFyYW1zID0ge1xuICBtYXJnaW46IFtudW1iZXIsIG51bWJlcl0sXG4gIGNvbnRhaW5lclBhZGRpbmc6IFtudW1iZXIsIG51bWJlcl0sXG4gIGNvbnRhaW5lcldpZHRoOiBudW1iZXIsXG4gIGNvbHM6IG51bWJlcixcbiAgcm93SGVpZ2h0OiBudW1iZXIsXG4gIG1heFJvd3M6IG51bWJlclxufTsqL1xuLy8gSGVscGVyIGZvciBnZW5lcmF0aW5nIGNvbHVtbiB3aWR0aFxuZnVuY3Rpb24gY2FsY0dyaWRDb2xXaWR0aChwb3NpdGlvblBhcmFtc1xuLyo6IFBvc2l0aW9uUGFyYW1zKi9cbilcbi8qOiBudW1iZXIqL1xue1xuICB2YXIgbWFyZ2luID0gcG9zaXRpb25QYXJhbXMubWFyZ2luLFxuICAgICAgY29udGFpbmVyUGFkZGluZyA9IHBvc2l0aW9uUGFyYW1zLmNvbnRhaW5lclBhZGRpbmcsXG4gICAgICBjb250YWluZXJXaWR0aCA9IHBvc2l0aW9uUGFyYW1zLmNvbnRhaW5lcldpZHRoLFxuICAgICAgY29scyA9IHBvc2l0aW9uUGFyYW1zLmNvbHM7XG4gIHJldHVybiAoY29udGFpbmVyV2lkdGggLSBtYXJnaW5bMF0gKiAoY29scyAtIDEpIC0gY29udGFpbmVyUGFkZGluZ1swXSAqIDIpIC8gY29scztcbn1cbi8qKlxuICogUmV0dXJuIHBvc2l0aW9uIG9uIHRoZSBwYWdlIGdpdmVuIGFuIHgsIHksIHcsIGguXG4gKiBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgYXJlIGFsbCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0gIHtQb3NpdGlvblBhcmFtc30gcG9zaXRpb25QYXJhbXMgIFBhcmFtZXRlcnMgb2YgZ3JpZCBuZWVkZWQgZm9yIGNvb3JkaW5hdGVzIGNhbGN1bGF0aW9ucy5cbiAqIEBwYXJhbSAge051bWJlcn0gIHggICAgICAgICAgICAgICAgICAgICAgWCBjb29yZGluYXRlIGluIGdyaWQgdW5pdHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICB5ICAgICAgICAgICAgICAgICAgICAgIFkgY29vcmRpbmF0ZSBpbiBncmlkIHVuaXRzLlxuICogQHBhcmFtICB7TnVtYmVyfSAgdyAgICAgICAgICAgICAgICAgICAgICBXIGNvb3JkaW5hdGUgaW4gZ3JpZCB1bml0cy5cbiAqIEBwYXJhbSAge051bWJlcn0gIGggICAgICAgICAgICAgICAgICAgICAgSCBjb29yZGluYXRlIGluIGdyaWQgdW5pdHMuXG4gKiBAcmV0dXJuIHtQb3NpdGlvbn0gICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBjb250YWluaW5nIGNvb3Jkcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbGNHcmlkSXRlbVBvc2l0aW9uKHBvc2l0aW9uUGFyYW1zXG4vKjogUG9zaXRpb25QYXJhbXMqL1xuLCB4XG4vKjogbnVtYmVyKi9cbiwgeVxuLyo6IG51bWJlciovXG4sIHdcbi8qOiBudW1iZXIqL1xuLCBoXG4vKjogbnVtYmVyKi9cbiwgc3RhdGVcbi8qOiA/T2JqZWN0Ki9cbilcbi8qOiBQb3NpdGlvbiovXG57XG4gIHZhciBtYXJnaW4gPSBwb3NpdGlvblBhcmFtcy5tYXJnaW4sXG4gICAgICBjb250YWluZXJQYWRkaW5nID0gcG9zaXRpb25QYXJhbXMuY29udGFpbmVyUGFkZGluZyxcbiAgICAgIHJvd0hlaWdodCA9IHBvc2l0aW9uUGFyYW1zLnJvd0hlaWdodDtcbiAgdmFyIGNvbFdpZHRoID0gY2FsY0dyaWRDb2xXaWR0aChwb3NpdGlvblBhcmFtcyk7XG4gIHZhciBvdXQgPSB7fTsgLy8gSWYgcmVzaXppbmcsIHVzZSB0aGUgZXhhY3Qgd2lkdGggYW5kIGhlaWdodCBhcyByZXR1cm5lZCBmcm9tIHJlc2l6aW5nIGNhbGxiYWNrcy5cblxuICBpZiAoc3RhdGUgJiYgc3RhdGUucmVzaXppbmcpIHtcbiAgICBvdXQud2lkdGggPSBNYXRoLnJvdW5kKHN0YXRlLnJlc2l6aW5nLndpZHRoKTtcbiAgICBvdXQuaGVpZ2h0ID0gTWF0aC5yb3VuZChzdGF0ZS5yZXNpemluZy5oZWlnaHQpO1xuICB9IC8vIE90aGVyd2lzZSwgY2FsY3VsYXRlIGZyb20gZ3JpZCB1bml0cy5cbiAgZWxzZSB7XG4gICAgICAvLyAwICogSW5maW5pdHkgPT09IE5hTiwgd2hpY2ggY2F1c2VzIHByb2JsZW1zIHdpdGggcmVzaXplIGNvbnN0cmFpbnRzO1xuICAgICAgLy8gRml4IHRoaXMgaWYgaXQgb2NjdXJzLlxuICAgICAgLy8gTm90ZSB3ZSBkbyBpdCBoZXJlIHJhdGhlciB0aGFuIGxhdGVyIGJlY2F1c2UgTWF0aC5yb3VuZChJbmZpbml0eSkgY2F1c2VzIGRlb3B0XG4gICAgICBvdXQud2lkdGggPSB3ID09PSBJbmZpbml0eSA/IHcgOiBNYXRoLnJvdW5kKGNvbFdpZHRoICogdyArIE1hdGgubWF4KDAsIHcgLSAxKSAqIG1hcmdpblswXSk7XG4gICAgICBvdXQuaGVpZ2h0ID0gaCA9PT0gSW5maW5pdHkgPyBoIDogTWF0aC5yb3VuZChyb3dIZWlnaHQgKiBoICsgTWF0aC5tYXgoMCwgaCAtIDEpICogbWFyZ2luWzFdKTtcbiAgICB9IC8vIElmIGRyYWdnaW5nLCB1c2UgdGhlIGV4YWN0IHdpZHRoIGFuZCBoZWlnaHQgYXMgcmV0dXJuZWQgZnJvbSBkcmFnZ2luZyBjYWxsYmFja3MuXG5cblxuICBpZiAoc3RhdGUgJiYgc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICBvdXQudG9wID0gTWF0aC5yb3VuZChzdGF0ZS5kcmFnZ2luZy50b3ApO1xuICAgIG91dC5sZWZ0ID0gTWF0aC5yb3VuZChzdGF0ZS5kcmFnZ2luZy5sZWZ0KTtcbiAgfSAvLyBPdGhlcndpc2UsIGNhbGN1bGF0ZSBmcm9tIGdyaWQgdW5pdHMuXG4gIGVsc2Uge1xuICAgICAgb3V0LnRvcCA9IE1hdGgucm91bmQoKHJvd0hlaWdodCArIG1hcmdpblsxXSkgKiB5ICsgY29udGFpbmVyUGFkZGluZ1sxXSk7XG4gICAgICBvdXQubGVmdCA9IE1hdGgucm91bmQoKGNvbFdpZHRoICsgbWFyZ2luWzBdKSAqIHggKyBjb250YWluZXJQYWRkaW5nWzBdKTtcbiAgICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogVHJhbnNsYXRlIHggYW5kIHkgY29vcmRpbmF0ZXMgZnJvbSBwaXhlbHMgdG8gZ3JpZCB1bml0cy5cbiAqIEBwYXJhbSAge1Bvc2l0aW9uUGFyYW1zfSBwb3NpdGlvblBhcmFtcyAgUGFyYW1ldGVycyBvZiBncmlkIG5lZWRlZCBmb3IgY29vcmRpbmF0ZXMgY2FsY3VsYXRpb25zLlxuICogQHBhcmFtICB7TnVtYmVyfSB0b3AgICAgICAgICAgICAgICAgICAgICBUb3AgcG9zaXRpb24gKHJlbGF0aXZlIHRvIHBhcmVudCkgaW4gcGl4ZWxzLlxuICogQHBhcmFtICB7TnVtYmVyfSBsZWZ0ICAgICAgICAgICAgICAgICAgICBMZWZ0IHBvc2l0aW9uIChyZWxhdGl2ZSB0byBwYXJlbnQpIGluIHBpeGVscy5cbiAqIEBwYXJhbSAge051bWJlcn0gdyAgICAgICAgICAgICAgICAgICAgICAgVyBjb29yZGluYXRlIGluIGdyaWQgdW5pdHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGggICAgICAgICAgICAgICAgICAgICAgIEggY29vcmRpbmF0ZSBpbiBncmlkIHVuaXRzLlxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICAgICB4IGFuZCB5IGluIGdyaWQgdW5pdHMuXG4gKi9cblxuXG5mdW5jdGlvbiBjYWxjWFkocG9zaXRpb25QYXJhbXNcbi8qOiBQb3NpdGlvblBhcmFtcyovXG4sIHRvcFxuLyo6IG51bWJlciovXG4sIGxlZnRcbi8qOiBudW1iZXIqL1xuLCB3XG4vKjogbnVtYmVyKi9cbiwgaFxuLyo6IG51bWJlciovXG4pXG4vKjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9Ki9cbntcbiAgdmFyIG1hcmdpbiA9IHBvc2l0aW9uUGFyYW1zLm1hcmdpbixcbiAgICAgIGNvbHMgPSBwb3NpdGlvblBhcmFtcy5jb2xzLFxuICAgICAgcm93SGVpZ2h0ID0gcG9zaXRpb25QYXJhbXMucm93SGVpZ2h0LFxuICAgICAgbWF4Um93cyA9IHBvc2l0aW9uUGFyYW1zLm1heFJvd3M7XG4gIHZhciBjb2xXaWR0aCA9IGNhbGNHcmlkQ29sV2lkdGgocG9zaXRpb25QYXJhbXMpOyAvLyBsZWZ0ID0gY29sV2lkdGggKiB4ICsgbWFyZ2luICogKHggKyAxKVxuICAvLyBsID0gY3ggKyBtKHgrMSlcbiAgLy8gbCA9IGN4ICsgbXggKyBtXG4gIC8vIGwgLSBtID0gY3ggKyBteFxuICAvLyBsIC0gbSA9IHgoYyArIG0pXG4gIC8vIChsIC0gbSkgLyAoYyArIG0pID0geFxuICAvLyB4ID0gKGxlZnQgLSBtYXJnaW4pIC8gKGNvbGRXaWR0aCArIG1hcmdpbilcblxuICB2YXIgeCA9IE1hdGgucm91bmQoKGxlZnQgLSBtYXJnaW5bMF0pIC8gKGNvbFdpZHRoICsgbWFyZ2luWzBdKSk7XG4gIHZhciB5ID0gTWF0aC5yb3VuZCgodG9wIC0gbWFyZ2luWzFdKSAvIChyb3dIZWlnaHQgKyBtYXJnaW5bMV0pKTsgLy8gQ2FwcGluZ1xuXG4gIHggPSBNYXRoLm1heChNYXRoLm1pbih4LCBjb2xzIC0gdyksIDApO1xuICB5ID0gTWF0aC5tYXgoTWF0aC5taW4oeSwgbWF4Um93cyAtIGgpLCAwKTtcbiAgcmV0dXJuIHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gYSBoZWlnaHQgYW5kIHdpZHRoIGluIHBpeGVsIHZhbHVlcywgY2FsY3VsYXRlIGdyaWQgdW5pdHMuXG4gKiBAcGFyYW0gIHtQb3NpdGlvblBhcmFtc30gcG9zaXRpb25QYXJhbXMgIFBhcmFtZXRlcnMgb2YgZ3JpZCBuZWVkZWQgZm9yIGNvb3JkaW5hdGVzIGNhbGNsdWF0aW9ucy5cbiAqIEBwYXJhbSAge051bWJlcn0gaGVpZ2h0ICAgICAgICAgICAgICAgICAgSGVpZ2h0IGluIHBpeGVscy5cbiAqIEBwYXJhbSAge051bWJlcn0gd2lkdGggICAgICAgICAgICAgICAgICAgV2lkdGggaW4gcGl4ZWxzLlxuICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgICAgICAgICAgICAgICAgICBYIGNvb3JkaW5hdGUgaW4gZ3JpZCB1bml0cy5cbiAqIEBwYXJhbSAge051bWJlcn0geSAgICAgICAgICAgICAgICAgICAgICAgWSBjb29yZGluYXRlIGluIGdyaWQgdW5pdHMuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgIHcsIGggYXMgZ3JpZCB1bml0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbGNXSChwb3NpdGlvblBhcmFtc1xuLyo6IFBvc2l0aW9uUGFyYW1zKi9cbiwgd2lkdGhcbi8qOiBudW1iZXIqL1xuLCBoZWlnaHRcbi8qOiBudW1iZXIqL1xuLCB4XG4vKjogbnVtYmVyKi9cbiwgeVxuLyo6IG51bWJlciovXG4pXG4vKjogeyB3OiBudW1iZXIsIGg6IG51bWJlciB9Ki9cbntcbiAgdmFyIG1hcmdpbiA9IHBvc2l0aW9uUGFyYW1zLm1hcmdpbixcbiAgICAgIG1heFJvd3MgPSBwb3NpdGlvblBhcmFtcy5tYXhSb3dzLFxuICAgICAgY29scyA9IHBvc2l0aW9uUGFyYW1zLmNvbHMsXG4gICAgICByb3dIZWlnaHQgPSBwb3NpdGlvblBhcmFtcy5yb3dIZWlnaHQ7XG4gIHZhciBjb2xXaWR0aCA9IGNhbGNHcmlkQ29sV2lkdGgocG9zaXRpb25QYXJhbXMpOyAvLyB3aWR0aCA9IGNvbFdpZHRoICogdyAtIChtYXJnaW4gKiAodyAtIDEpKVxuICAvLyAuLi5cbiAgLy8gdyA9ICh3aWR0aCArIG1hcmdpbikgLyAoY29sV2lkdGggKyBtYXJnaW4pXG5cbiAgdmFyIHcgPSBNYXRoLnJvdW5kKCh3aWR0aCArIG1hcmdpblswXSkgLyAoY29sV2lkdGggKyBtYXJnaW5bMF0pKTtcbiAgdmFyIGggPSBNYXRoLnJvdW5kKChoZWlnaHQgKyBtYXJnaW5bMV0pIC8gKHJvd0hlaWdodCArIG1hcmdpblsxXSkpOyAvLyBDYXBwaW5nXG5cbiAgdyA9IE1hdGgubWF4KE1hdGgubWluKHcsIGNvbHMgLSB4KSwgMCk7XG4gIGggPSBNYXRoLm1heChNYXRoLm1pbihoLCBtYXhSb3dzIC0geSksIDApO1xuICByZXR1cm4ge1xuICAgIHc6IHcsXG4gICAgaDogaFxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gV2lkdGhQcm92aWRlcjtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qXG4gKiBBIHNpbXBsZSBIT0MgdGhhdCBwcm92aWRlcyBmYWNpbGl0eSBmb3IgbGlzdGVuaW5nIHRvIGNvbnRhaW5lciByZXNpemVzLlxuICpcbiAqIFRoZSBGbG93IHR5cGUgaXMgcHJldHR5IGphbmt5IGhlcmUuIEkgY2FuJ3QganVzdCBzcHJlYWQgYFdQUHJvcHNgIGludG8gdGhpcyByZXR1cm5lZCBvYmplY3QgLSBJIHdpc2ggSSBjb3VsZCAtIGJ1dCBpdCB0cmlnZ2Vyc1xuICogYSBmbG93IGJ1ZyBvZiBzb21lIHNvcnQgdGhhdCBjYXVzZXMgaXQgdG8gc3RvcCB0eXBlY2hlY2tpbmcuXG4gKi9cbmZ1bmN0aW9uIFdpZHRoUHJvdmlkZXJcbi8qOjogPENvbmZpZz4qL1xuKENvbXBvc2VkQ29tcG9uZW50XG4vKjogUmVhY3QuQWJzdHJhY3RDb21wb25lbnQ8Q29uZmlnPiovXG4pXG4vKjogUmVhY3QuQWJzdHJhY3RDb21wb25lbnQ8e3xcbiAgLi4uQ29uZmlnLFxuICBtZWFzdXJlQmVmb3JlTW91bnQ/OiBib29sZWFuLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIHN0eWxlPzogT2JqZWN0LFxuICB3aWR0aD86IG51bWJlclxufH0+Ki9cbntcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaWR0aFByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFdpZHRoUHJvdmlkZXIoKSB7XG4gICAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lkdGhQcm92aWRlcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKFdpZHRoUHJvdmlkZXIpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgICAgd2lkdGg6IDEyODBcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibW91bnRlZFwiLCBmYWxzZSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbldpbmRvd1Jlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMubW91bnRlZCkgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZmluZC1kb20tbm9kZVxuXG4gICAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBGbG93IGNhc3RzIHRoaXMgdG8gVGV4dCB8IEVsZW1lbnRcblxuXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB3aWR0aDogbm9kZS5vZmZzZXRXaWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdpZHRoUHJvdmlkZXIsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7IC8vIENhbGwgdG8gcHJvcGVybHkgc2V0IHRoZSBicmVha3BvaW50IGFuZCByZXNpemUgdGhlIGVsZW1lbnRzLlxuICAgICAgICAvLyBOb3RlIHRoYXQgaWYgeW91J3JlIGRvaW5nIGEgZnVsbC13aWR0aCBlbGVtZW50LCB0aGlzIGNhbiBnZXQgYSBsaXR0bGUgd29ua3kgaWYgYSBzY3JvbGxiYXJcbiAgICAgICAgLy8gYXBwZWFycyBiZWNhdXNlIG9mIHRoZSBncmlkLiBJbiB0aGF0IGNhc2UsIGZpcmUgeW91ciBvd24gcmVzaXplIGV2ZW50LCBvciBzZXQgYG92ZXJmbG93OiBzY3JvbGxgIG9uIHlvdXIgYm9keS5cblxuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbWVhc3VyZUJlZm9yZU1vdW50ID0gX3RoaXMkcHJvcHMubWVhc3VyZUJlZm9yZU1vdW50LFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wcywgW1wibWVhc3VyZUJlZm9yZU1vdW50XCJdKTtcblxuICAgICAgICBpZiAobWVhc3VyZUJlZm9yZU1vdW50ICYmICF0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcmVzdCwgdGhpcy5zdGF0ZSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXaWR0aFByb3ZpZGVyO1xuICB9KFJlYWN0LkNvbXBvbmVudCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3MsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBtZWFzdXJlQmVmb3JlTW91bnQ6IGZhbHNlXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcInByb3BUeXBlc1wiLCB7XG4gICAgLy8gSWYgdHJ1ZSwgd2lsbCBub3QgcmVuZGVyIGNoaWxkcmVuIHVudGlsIG1vdW50ZWQuIFVzZWZ1bCBmb3IgZ2V0dGluZyB0aGUgZXhhY3Qgd2lkdGggYmVmb3JlXG4gICAgLy8gcmVuZGVyaW5nLCB0byBwcmV2ZW50IGFueSB1bnNpZ2h0bHkgcmVzaXppbmcuXG4gICAgbWVhc3VyZUJlZm9yZU1vdW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbFxuICB9KSwgX3RlbXA7XG59IiwiLy8gdGhpcyBmaWxlIHdhcyBwcmV2YWxlZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmYXN0UkdMUHJvcHNFcXVhbChhLCBiLCBpc0VxdWFsSW1wbCkge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIHJldHVybiBhLmNsYXNzTmFtZSA9PT0gYi5jbGFzc05hbWUgJiYgaXNFcXVhbEltcGwoYS5zdHlsZSwgYi5zdHlsZSkgJiYgYS53aWR0aCA9PT0gYi53aWR0aCAmJiBhLmF1dG9TaXplID09PSBiLmF1dG9TaXplICYmIGEuY29scyA9PT0gYi5jb2xzICYmIGEuZHJhZ2dhYmxlQ2FuY2VsID09PSBiLmRyYWdnYWJsZUNhbmNlbCAmJiBhLmRyYWdnYWJsZUhhbmRsZSA9PT0gYi5kcmFnZ2FibGVIYW5kbGUgJiYgaXNFcXVhbEltcGwoYS52ZXJ0aWNhbENvbXBhY3QsIGIudmVydGljYWxDb21wYWN0KSAmJiBpc0VxdWFsSW1wbChhLmNvbXBhY3RUeXBlLCBiLmNvbXBhY3RUeXBlKSAmJiBpc0VxdWFsSW1wbChhLmxheW91dCwgYi5sYXlvdXQpICYmIGlzRXF1YWxJbXBsKGEubWFyZ2luLCBiLm1hcmdpbikgJiYgaXNFcXVhbEltcGwoYS5jb250YWluZXJQYWRkaW5nLCBiLmNvbnRhaW5lclBhZGRpbmcpICYmIGEucm93SGVpZ2h0ID09PSBiLnJvd0hlaWdodCAmJiBhLm1heFJvd3MgPT09IGIubWF4Um93cyAmJiBhLmlzRHJhZ2dhYmxlID09PSBiLmlzRHJhZ2dhYmxlICYmIGEuaXNSZXNpemFibGUgPT09IGIuaXNSZXNpemFibGUgJiYgYS5wcmV2ZW50Q29sbGlzaW9uID09PSBiLnByZXZlbnRDb2xsaXNpb24gJiYgYS51c2VDU1NUcmFuc2Zvcm1zID09PSBiLnVzZUNTU1RyYW5zZm9ybXMgJiYgYS50cmFuc2Zvcm1TY2FsZSA9PT0gYi50cmFuc2Zvcm1TY2FsZSAmJiBhLmlzRHJvcHBhYmxlID09PSBiLmlzRHJvcHBhYmxlICYmIGEub25MYXlvdXRDaGFuZ2UgPT09IGIub25MYXlvdXRDaGFuZ2UgJiYgYS5vbkRyYWdTdGFydCA9PT0gYi5vbkRyYWdTdGFydCAmJiBhLm9uRHJhZyA9PT0gYi5vbkRyYWcgJiYgYS5vbkRyYWdTdG9wID09PSBiLm9uRHJhZ1N0b3AgJiYgYS5vblJlc2l6ZVN0YXJ0ID09PSBiLm9uUmVzaXplU3RhcnQgJiYgYS5vblJlc2l6ZSA9PT0gYi5vblJlc2l6ZSAmJiBhLm9uUmVzaXplU3RvcCA9PT0gYi5vblJlc2l6ZVN0b3AgJiYgYS5vbkRyb3AgPT09IGIub25Ecm9wICYmIGlzRXF1YWxJbXBsKGEuZHJvcHBpbmdJdGVtLCBiLmRyb3BwaW5nSXRlbSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRCcmVha3BvaW50RnJvbVdpZHRoID0gZ2V0QnJlYWtwb2ludEZyb21XaWR0aDtcbmV4cG9ydHMuZ2V0Q29sc0Zyb21CcmVha3BvaW50ID0gZ2V0Q29sc0Zyb21CcmVha3BvaW50O1xuZXhwb3J0cy5maW5kT3JHZW5lcmF0ZVJlc3BvbnNpdmVMYXlvdXQgPSBmaW5kT3JHZW5lcmF0ZVJlc3BvbnNpdmVMYXlvdXQ7XG5leHBvcnRzLnNvcnRCcmVha3BvaW50cyA9IHNvcnRCcmVha3BvaW50cztcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG4vKipcbiAqIEdpdmVuIGEgd2lkdGgsIGZpbmQgdGhlIGhpZ2hlc3QgYnJlYWtwb2ludCB0aGF0IG1hdGNoZXMgaXMgdmFsaWQgZm9yIGl0ICh3aWR0aCA+IGJyZWFrcG9pbnQpLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYnJlYWtwb2ludHMgQnJlYWtwb2ludHMgb2JqZWN0IChlLmcuIHtsZzogMTIwMCwgbWQ6IDk2MCwgLi4ufSlcbiAqIEBwYXJhbSAge051bWJlcn0gd2lkdGggU2NyZWVuIHdpZHRoLlxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICBIaWdoZXN0IGJyZWFrcG9pbnQgdGhhdCBpcyBsZXNzIHRoYW4gd2lkdGguXG4gKi9cbmZ1bmN0aW9uIGdldEJyZWFrcG9pbnRGcm9tV2lkdGgoYnJlYWtwb2ludHNcbi8qOiBCcmVha3BvaW50czxCcmVha3BvaW50PiovXG4sIHdpZHRoXG4vKjogbnVtYmVyKi9cbilcbi8qOiBCcmVha3BvaW50Ki9cbntcbiAgdmFyIHNvcnRlZCA9IHNvcnRCcmVha3BvaW50cyhicmVha3BvaW50cyk7XG4gIHZhciBtYXRjaGluZyA9IHNvcnRlZFswXTtcblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gc29ydGVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGJyZWFrcG9pbnROYW1lID0gc29ydGVkW2ldO1xuICAgIGlmICh3aWR0aCA+IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnROYW1lXSkgbWF0Y2hpbmcgPSBicmVha3BvaW50TmFtZTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGluZztcbn1cbi8qKlxuICogR2l2ZW4gYSBicmVha3BvaW50LCBnZXQgdGhlICMgb2YgY29scyBzZXQgZm9yIGl0LlxuICogQHBhcmFtICB7U3RyaW5nfSBicmVha3BvaW50IEJyZWFrcG9pbnQgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gY29scyAgICAgICBNYXAgb2YgYnJlYWtwb2ludHMgdG8gY29scy5cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICBOdW1iZXIgb2YgY29scy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENvbHNGcm9tQnJlYWtwb2ludChicmVha3BvaW50XG4vKjogQnJlYWtwb2ludCovXG4sIGNvbHNcbi8qOiBCcmVha3BvaW50czxCcmVha3BvaW50PiovXG4pXG4vKjogbnVtYmVyKi9cbntcbiAgaWYgKCFjb2xzW2JyZWFrcG9pbnRdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dDogYGNvbHNgIGVudHJ5IGZvciBicmVha3BvaW50IFwiICsgYnJlYWtwb2ludCArIFwiIGlzIG1pc3NpbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbHNbYnJlYWtwb2ludF07XG59XG4vKipcbiAqIEdpdmVuIGV4aXN0aW5nIGxheW91dHMgYW5kIGEgbmV3IGJyZWFrcG9pbnQsIGZpbmQgb3IgZ2VuZXJhdGUgYSBuZXcgbGF5b3V0LlxuICpcbiAqIFRoaXMgZmluZHMgdGhlIGxheW91dCBhYm92ZSB0aGUgbmV3IG9uZSBhbmQgZ2VuZXJhdGVzIGZyb20gaXQsIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGxheW91dHMgICAgIEV4aXN0aW5nIGxheW91dHMuXG4gKiBAcGFyYW0gIHtBcnJheX0gYnJlYWtwb2ludHMgQWxsIGJyZWFrcG9pbnRzLlxuICogQHBhcmFtICB7U3RyaW5nfSBicmVha3BvaW50IE5ldyBicmVha3BvaW50LlxuICogQHBhcmFtICB7U3RyaW5nfSBicmVha3BvaW50IExhc3QgYnJlYWtwb2ludCAoZm9yIGZhbGxiYWNrKS5cbiAqIEBwYXJhbSAge051bWJlcn0gY29scyAgICAgICBDb2x1bW4gY291bnQgYXQgbmV3IGJyZWFrcG9pbnQuXG4gKiBAcGFyYW0gIHtCb29sZWFufSB2ZXJ0aWNhbENvbXBhY3QgV2hldGhlciBvciBub3QgdG8gY29tcGFjdCB0aGUgbGF5b3V0XG4gKiAgIHZlcnRpY2FsbHkuXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgTmV3IGxheW91dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRPckdlbmVyYXRlUmVzcG9uc2l2ZUxheW91dChsYXlvdXRzXG4vKjogUmVzcG9uc2l2ZUxheW91dDxCcmVha3BvaW50PiovXG4sIGJyZWFrcG9pbnRzXG4vKjogQnJlYWtwb2ludHM8QnJlYWtwb2ludD4qL1xuLCBicmVha3BvaW50XG4vKjogQnJlYWtwb2ludCovXG4sIGxhc3RCcmVha3BvaW50XG4vKjogQnJlYWtwb2ludCovXG4sIGNvbHNcbi8qOiBudW1iZXIqL1xuLCBjb21wYWN0VHlwZVxuLyo6IENvbXBhY3RUeXBlKi9cbilcbi8qOiBMYXlvdXQqL1xue1xuICAvLyBJZiBpdCBhbHJlYWR5IGV4aXN0cywganVzdCByZXR1cm4gaXQuXG4gIGlmIChsYXlvdXRzW2JyZWFrcG9pbnRdKSByZXR1cm4gKDAsIF91dGlscy5jbG9uZUxheW91dCkobGF5b3V0c1ticmVha3BvaW50XSk7IC8vIEZpbmQgb3IgZ2VuZXJhdGUgdGhlIG5leHQgbGF5b3V0XG5cbiAgdmFyIGxheW91dCA9IGxheW91dHNbbGFzdEJyZWFrcG9pbnRdO1xuICB2YXIgYnJlYWtwb2ludHNTb3J0ZWQgPSBzb3J0QnJlYWtwb2ludHMoYnJlYWtwb2ludHMpO1xuICB2YXIgYnJlYWtwb2ludHNBYm92ZSA9IGJyZWFrcG9pbnRzU29ydGVkLnNsaWNlKGJyZWFrcG9pbnRzU29ydGVkLmluZGV4T2YoYnJlYWtwb2ludCkpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBicmVha3BvaW50c0Fib3ZlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGIgPSBicmVha3BvaW50c0Fib3ZlW2ldO1xuXG4gICAgaWYgKGxheW91dHNbYl0pIHtcbiAgICAgIGxheW91dCA9IGxheW91dHNbYl07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBsYXlvdXQgPSAoMCwgX3V0aWxzLmNsb25lTGF5b3V0KShsYXlvdXQgfHwgW10pOyAvLyBjbG9uZSBsYXlvdXQgc28gd2UgZG9uJ3QgbW9kaWZ5IGV4aXN0aW5nIGl0ZW1zXG5cbiAgcmV0dXJuICgwLCBfdXRpbHMuY29tcGFjdCkoKDAsIF91dGlscy5jb3JyZWN0Qm91bmRzKShsYXlvdXQsIHtcbiAgICBjb2xzOiBjb2xzXG4gIH0pLCBjb21wYWN0VHlwZSwgY29scyk7XG59XG4vKipcbiAqIEdpdmVuIGJyZWFrcG9pbnRzLCByZXR1cm4gYW4gYXJyYXkgb2YgYnJlYWtwb2ludHMgc29ydGVkIGJ5IHdpZHRoLiBUaGlzIGlzIHVzdWFsbHlcbiAqIGUuZy4gWyd4eHMnLCAneHMnLCAnc20nLCAuLi5dXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBicmVha3BvaW50cyBLZXkvdmFsdWUgcGFpciBvZiBicmVha3BvaW50IG5hbWVzIHRvIHdpZHRocy5cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgU29ydGVkIGJyZWFrcG9pbnRzLlxuICovXG5cblxuZnVuY3Rpb24gc29ydEJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzXG4vKjogQnJlYWtwb2ludHM8QnJlYWtwb2ludD4qL1xuKVxuLyo6IEFycmF5PEJyZWFrcG9pbnQ+Ki9cbntcbiAgdmFyIGtleXNcbiAgLyo6IEFycmF5PHN0cmluZz4qL1xuICA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKTtcbiAgcmV0dXJuIGtleXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBicmVha3BvaW50c1thXSAtIGJyZWFrcG9pbnRzW2JdO1xuICB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYm90dG9tID0gYm90dG9tO1xuZXhwb3J0cy5jbG9uZUxheW91dCA9IGNsb25lTGF5b3V0O1xuZXhwb3J0cy5jbG9uZUxheW91dEl0ZW0gPSBjbG9uZUxheW91dEl0ZW07XG5leHBvcnRzLmNoaWxkcmVuRXF1YWwgPSBjaGlsZHJlbkVxdWFsO1xuZXhwb3J0cy5mYXN0UG9zaXRpb25FcXVhbCA9IGZhc3RQb3NpdGlvbkVxdWFsO1xuZXhwb3J0cy5jb2xsaWRlcyA9IGNvbGxpZGVzO1xuZXhwb3J0cy5jb21wYWN0ID0gY29tcGFjdDtcbmV4cG9ydHMuY29tcGFjdEl0ZW0gPSBjb21wYWN0SXRlbTtcbmV4cG9ydHMuY29ycmVjdEJvdW5kcyA9IGNvcnJlY3RCb3VuZHM7XG5leHBvcnRzLmdldExheW91dEl0ZW0gPSBnZXRMYXlvdXRJdGVtO1xuZXhwb3J0cy5nZXRGaXJzdENvbGxpc2lvbiA9IGdldEZpcnN0Q29sbGlzaW9uO1xuZXhwb3J0cy5nZXRBbGxDb2xsaXNpb25zID0gZ2V0QWxsQ29sbGlzaW9ucztcbmV4cG9ydHMuZ2V0U3RhdGljcyA9IGdldFN0YXRpY3M7XG5leHBvcnRzLm1vdmVFbGVtZW50ID0gbW92ZUVsZW1lbnQ7XG5leHBvcnRzLm1vdmVFbGVtZW50QXdheUZyb21Db2xsaXNpb24gPSBtb3ZlRWxlbWVudEF3YXlGcm9tQ29sbGlzaW9uO1xuZXhwb3J0cy5wZXJjID0gcGVyYztcbmV4cG9ydHMuc2V0VHJhbnNmb3JtID0gc2V0VHJhbnNmb3JtO1xuZXhwb3J0cy5zZXRUb3BMZWZ0ID0gc2V0VG9wTGVmdDtcbmV4cG9ydHMuc29ydExheW91dEl0ZW1zID0gc29ydExheW91dEl0ZW1zO1xuZXhwb3J0cy5zb3J0TGF5b3V0SXRlbXNCeVJvd0NvbCA9IHNvcnRMYXlvdXRJdGVtc0J5Um93Q29sO1xuZXhwb3J0cy5zb3J0TGF5b3V0SXRlbXNCeUNvbFJvdyA9IHNvcnRMYXlvdXRJdGVtc0J5Q29sUm93O1xuZXhwb3J0cy5zeW5jaHJvbml6ZUxheW91dFdpdGhDaGlsZHJlbiA9IHN5bmNocm9uaXplTGF5b3V0V2l0aENoaWxkcmVuO1xuZXhwb3J0cy52YWxpZGF0ZUxheW91dCA9IHZhbGlkYXRlTGF5b3V0O1xuZXhwb3J0cy5jb21wYWN0VHlwZSA9IGNvbXBhY3RUeXBlO1xuZXhwb3J0cy5hdXRvQmluZEhhbmRsZXJzID0gYXV0b0JpbmRIYW5kbGVycztcbmV4cG9ydHMubm9vcCA9IGV4cG9ydHMuZmFzdFJHTFByb3BzRXF1YWwgPSB2b2lkIDA7XG5cbnZhciBfbG9kYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoLmlzZXF1YWxcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcbnZhciBERUJVRyA9IGZhbHNlO1xuLyoqXG4gKiBSZXR1cm4gdGhlIGJvdHRvbSBjb29yZGluYXRlIG9mIHRoZSBsYXlvdXQuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGxheW91dCBMYXlvdXQgYXJyYXkuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgIEJvdHRvbSBjb29yZGluYXRlLlxuICovXG5cbmZ1bmN0aW9uIGJvdHRvbShsYXlvdXRcbi8qOiBMYXlvdXQqL1xuKVxuLyo6IG51bWJlciovXG57XG4gIHZhciBtYXggPSAwLFxuICAgICAgYm90dG9tWTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5b3V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYm90dG9tWSA9IGxheW91dFtpXS55ICsgbGF5b3V0W2ldLmg7XG4gICAgaWYgKGJvdHRvbVkgPiBtYXgpIG1heCA9IGJvdHRvbVk7XG4gIH1cblxuICByZXR1cm4gbWF4O1xufVxuXG5mdW5jdGlvbiBjbG9uZUxheW91dChsYXlvdXRcbi8qOiBMYXlvdXQqL1xuKVxuLyo6IExheW91dCovXG57XG4gIHZhciBuZXdMYXlvdXQgPSBBcnJheShsYXlvdXQubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5b3V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbmV3TGF5b3V0W2ldID0gY2xvbmVMYXlvdXRJdGVtKGxheW91dFtpXSk7XG4gIH1cblxuICByZXR1cm4gbmV3TGF5b3V0O1xufSAvLyBGYXN0IHBhdGggdG8gY2xvbmluZywgc2luY2UgdGhpcyBpcyBtb25vbW9ycGhpY1xuXG5cbmZ1bmN0aW9uIGNsb25lTGF5b3V0SXRlbShsYXlvdXRJdGVtXG4vKjogTGF5b3V0SXRlbSovXG4pXG4vKjogTGF5b3V0SXRlbSovXG57XG4gIHJldHVybiB7XG4gICAgdzogbGF5b3V0SXRlbS53LFxuICAgIGg6IGxheW91dEl0ZW0uaCxcbiAgICB4OiBsYXlvdXRJdGVtLngsXG4gICAgeTogbGF5b3V0SXRlbS55LFxuICAgIGk6IGxheW91dEl0ZW0uaSxcbiAgICBtaW5XOiBsYXlvdXRJdGVtLm1pblcsXG4gICAgbWF4VzogbGF5b3V0SXRlbS5tYXhXLFxuICAgIG1pbkg6IGxheW91dEl0ZW0ubWluSCxcbiAgICBtYXhIOiBsYXlvdXRJdGVtLm1heEgsXG4gICAgbW92ZWQ6IEJvb2xlYW4obGF5b3V0SXRlbS5tb3ZlZCksXG4gICAgc3RhdGljOiBCb29sZWFuKGxheW91dEl0ZW0uc3RhdGljKSxcbiAgICAvLyBUaGVzZSBjYW4gYmUgbnVsbFxuICAgIGlzRHJhZ2dhYmxlOiBsYXlvdXRJdGVtLmlzRHJhZ2dhYmxlLFxuICAgIGlzUmVzaXphYmxlOiBsYXlvdXRJdGVtLmlzUmVzaXphYmxlXG4gIH07XG59XG4vKipcbiAqIENvbXBhcmluZyBSZWFjdCBgY2hpbGRyZW5gIGlzIGEgYml0IGRpZmZpY3VsdC4gVGhpcyBpcyBhIGdvb2Qgd2F5IHRvIGNvbXBhcmUgdGhlbS5cbiAqIFRoaXMgd2lsbCBjYXRjaCBkaWZmZXJlbmNlcyBpbiBrZXlzLCBvcmRlciwgYW5kIGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNoaWxkcmVuRXF1YWwoYVxuLyo6IFJlYWN0Q2hpbGRyZW4qL1xuLCBiXG4vKjogUmVhY3RDaGlsZHJlbiovXG4pXG4vKjogYm9vbGVhbiovXG57XG4gIHJldHVybiAoMCwgX2xvZGFzaC5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoYSwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5rZXk7XG4gIH0pLCBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoYiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5rZXk7XG4gIH0pKTtcbn1cbi8qKlxuICogU2VlIGBmYXN0UkdMUHJvcHNFcXVhbC5qc2AuXG4gKiBXZSB3YW50IHRoaXMgdG8gcnVuIGFzIGZhc3QgYXMgcG9zc2libGUgLSBpdCBpcyBjYWxsZWQgb2Z0ZW4gLSBhbmQgdG8gYmVcbiAqIHJlc2lsaWVudCB0byBuZXcgcHJvcHMgdGhhdCB3ZSBhZGQuIFNvIHJhdGhlciB0aGFuIGNhbGwgbG9kYXNoLmlzRXF1YWwsXG4gKiB3aGljaCBpc24ndCBzdWl0ZWQgdG8gY29tcGFyaW5nIHByb3BzIHZlcnkgd2VsbCwgd2UgdXNlIHRoaXMgc3BlY2lhbGl6ZWRcbiAqIGZ1bmN0aW9uIGluIGNvbmp1bmN0aW9uIHdpdGggcHJldmFsIHRvIGdlbmVyYXRlIHRoZSBmYXN0ZXN0IHBvc3NpYmxlIGNvbXBhcmlzb25cbiAqIGZ1bmN0aW9uLCB0dW5lZCBmb3IgZXhhY3RseSBvdXIgcHJvcHMuXG4gKi9cblxuLyo6OiB0eXBlIEZhc3RSR0xQcm9wc0VxdWFsID0gKE9iamVjdCwgT2JqZWN0LCBGdW5jdGlvbikgPT4gYm9vbGVhbjsqL1xuXG5cbnZhciBmYXN0UkdMUHJvcHNFcXVhbFxuLyo6IEZhc3RSR0xQcm9wc0VxdWFsKi9cbj0gcmVxdWlyZShcIi4vZmFzdFJHTFByb3BzRXF1YWxcIik7IC8vIExpa2UgdGhlIGFib3ZlLCBidXQgYSBsb3Qgc2ltcGxlci5cblxuXG5leHBvcnRzLmZhc3RSR0xQcm9wc0VxdWFsID0gZmFzdFJHTFByb3BzRXF1YWw7XG5cbmZ1bmN0aW9uIGZhc3RQb3NpdGlvbkVxdWFsKGFcbi8qOiBQb3NpdGlvbiovXG4sIGJcbi8qOiBQb3NpdGlvbiovXG4pIHtcbiAgcmV0dXJuIGEubGVmdCA9PT0gYi5sZWZ0ICYmIGEudG9wID09PSBiLnRvcCAmJiBhLndpZHRoID09PSBiLndpZHRoICYmIGEuaGVpZ2h0ID09PSBiLmhlaWdodDtcbn1cbi8qKlxuICogR2l2ZW4gdHdvIGxheW91dGl0ZW1zLCBjaGVjayBpZiB0aGV5IGNvbGxpZGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb2xsaWRlcyhsMVxuLyo6IExheW91dEl0ZW0qL1xuLCBsMlxuLyo6IExheW91dEl0ZW0qL1xuKVxuLyo6IGJvb2xlYW4qL1xue1xuICBpZiAobDEuaSA9PT0gbDIuaSkgcmV0dXJuIGZhbHNlOyAvLyBzYW1lIGVsZW1lbnRcblxuICBpZiAobDEueCArIGwxLncgPD0gbDIueCkgcmV0dXJuIGZhbHNlOyAvLyBsMSBpcyBsZWZ0IG9mIGwyXG5cbiAgaWYgKGwxLnggPj0gbDIueCArIGwyLncpIHJldHVybiBmYWxzZTsgLy8gbDEgaXMgcmlnaHQgb2YgbDJcblxuICBpZiAobDEueSArIGwxLmggPD0gbDIueSkgcmV0dXJuIGZhbHNlOyAvLyBsMSBpcyBhYm92ZSBsMlxuXG4gIGlmIChsMS55ID49IGwyLnkgKyBsMi5oKSByZXR1cm4gZmFsc2U7IC8vIGwxIGlzIGJlbG93IGwyXG5cbiAgcmV0dXJuIHRydWU7IC8vIGJveGVzIG92ZXJsYXBcbn1cbi8qKlxuICogR2l2ZW4gYSBsYXlvdXQsIGNvbXBhY3QgaXQuIFRoaXMgaW52b2x2ZXMgZ29pbmcgZG93biBlYWNoIHkgY29vcmRpbmF0ZSBhbmQgcmVtb3ZpbmcgZ2Fwc1xuICogYmV0d2VlbiBpdGVtcy5cbiAqXG4gKiBEb2VzIG5vdCBtb2RpZnkgbGF5b3V0IGl0ZW1zIChjbG9uZXMpLiBDcmVhdGVzIGEgbmV3IGxheW91dCBhcnJheS5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gbGF5b3V0IExheW91dC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59IHZlcnRpY2FsQ29tcGFjdCBXaGV0aGVyIG9yIG5vdCB0byBjb21wYWN0IHRoZSBsYXlvdXRcbiAqICAgdmVydGljYWxseS5cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBDb21wYWN0ZWQgTGF5b3V0LlxuICovXG5cblxuZnVuY3Rpb24gY29tcGFjdChsYXlvdXRcbi8qOiBMYXlvdXQqL1xuLCBjb21wYWN0VHlwZVxuLyo6IENvbXBhY3RUeXBlKi9cbiwgY29sc1xuLyo6IG51bWJlciovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgLy8gU3RhdGljcyBnbyBpbiB0aGUgY29tcGFyZVdpdGggYXJyYXkgcmlnaHQgYXdheSBzbyBpdGVtcyBmbG93IGFyb3VuZCB0aGVtLlxuICB2YXIgY29tcGFyZVdpdGggPSBnZXRTdGF0aWNzKGxheW91dCk7IC8vIFdlIGdvIHRocm91Z2ggdGhlIGl0ZW1zIGJ5IHJvdyBhbmQgY29sdW1uLlxuXG4gIHZhciBzb3J0ZWQgPSBzb3J0TGF5b3V0SXRlbXMobGF5b3V0LCBjb21wYWN0VHlwZSk7IC8vIEhvbGRpbmcgZm9yIG5ldyBpdGVtcy5cblxuICB2YXIgb3V0ID0gQXJyYXkobGF5b3V0Lmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvcnRlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBsID0gY2xvbmVMYXlvdXRJdGVtKHNvcnRlZFtpXSk7IC8vIERvbid0IG1vdmUgc3RhdGljIGVsZW1lbnRzXG5cbiAgICBpZiAoIWwuc3RhdGljKSB7XG4gICAgICBsID0gY29tcGFjdEl0ZW0oY29tcGFyZVdpdGgsIGwsIGNvbXBhY3RUeXBlLCBjb2xzLCBzb3J0ZWQpOyAvLyBBZGQgdG8gY29tcGFyaXNvbiBhcnJheS4gV2Ugb25seSBjb2xsaWRlIHdpdGggaXRlbXMgYmVmb3JlIHRoaXMgb25lLlxuICAgICAgLy8gU3RhdGljcyBhcmUgYWxyZWFkeSBpbiB0aGlzIGFycmF5LlxuXG4gICAgICBjb21wYXJlV2l0aC5wdXNoKGwpO1xuICAgIH0gLy8gQWRkIHRvIG91dHB1dCBhcnJheSB0byBtYWtlIHN1cmUgdGhleSBzdGlsbCBjb21lIG91dCBpbiB0aGUgcmlnaHQgb3JkZXIuXG5cblxuICAgIG91dFtsYXlvdXQuaW5kZXhPZihzb3J0ZWRbaV0pXSA9IGw7IC8vIENsZWFyIG1vdmVkIGZsYWcsIGlmIGl0IGV4aXN0cy5cblxuICAgIGwubW92ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbnZhciBoZWlnaHRXaWR0aCA9IHtcbiAgeDogXCJ3XCIsXG4gIHk6IFwiaFwiXG59O1xuLyoqXG4gKiBCZWZvcmUgbW92aW5nIGl0ZW0gZG93biwgaXQgd2lsbCBjaGVjayBpZiB0aGUgbW92ZW1lbnQgd2lsbCBjYXVzZSBjb2xsaXNpb25zIGFuZCBtb3ZlIHRob3NlIGl0ZW1zIGRvd24gYmVmb3JlLlxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVDb21wYWN0aW9uQ29sbGlzaW9uKGxheW91dFxuLyo6IExheW91dCovXG4sIGl0ZW1cbi8qOiBMYXlvdXRJdGVtKi9cbiwgbW92ZVRvQ29vcmRcbi8qOiBudW1iZXIqL1xuLCBheGlzXG4vKjogXCJ4XCIgfCBcInlcIiovXG4pIHtcbiAgdmFyIHNpemVQcm9wID0gaGVpZ2h0V2lkdGhbYXhpc107XG4gIGl0ZW1bYXhpc10gKz0gMTtcbiAgdmFyIGl0ZW1JbmRleCA9IGxheW91dC5tYXAoZnVuY3Rpb24gKGxheW91dEl0ZW0pIHtcbiAgICByZXR1cm4gbGF5b3V0SXRlbS5pO1xuICB9KS5pbmRleE9mKGl0ZW0uaSk7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtIHdlIGNvbGxpZGUgd2l0aC5cblxuICBmb3IgKHZhciBpID0gaXRlbUluZGV4ICsgMTsgaSA8IGxheW91dC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBvdGhlckl0ZW0gPSBsYXlvdXRbaV07IC8vIElnbm9yZSBzdGF0aWMgaXRlbXNcblxuICAgIGlmIChvdGhlckl0ZW0uc3RhdGljKSBjb250aW51ZTsgLy8gT3B0aW1pemF0aW9uOiB3ZSBjYW4gYnJlYWsgZWFybHkgaWYgd2Uga25vdyB3ZSdyZSBwYXN0IHRoaXMgZWxcbiAgICAvLyBXZSBjYW4gZG8gdGhpcyBiL2MgaXQncyBhIHNvcnRlZCBsYXlvdXRcblxuICAgIGlmIChvdGhlckl0ZW0ueSA+IGl0ZW0ueSArIGl0ZW0uaCkgYnJlYWs7XG5cbiAgICBpZiAoY29sbGlkZXMoaXRlbSwgb3RoZXJJdGVtKSkge1xuICAgICAgcmVzb2x2ZUNvbXBhY3Rpb25Db2xsaXNpb24obGF5b3V0LCBvdGhlckl0ZW0sIG1vdmVUb0Nvb3JkICsgaXRlbVtzaXplUHJvcF0sIGF4aXMpO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1bYXhpc10gPSBtb3ZlVG9Db29yZDtcbn1cbi8qKlxuICogQ29tcGFjdCBhbiBpdGVtIGluIHRoZSBsYXlvdXQuXG4gKlxuICogTW9kaWZpZXMgaXRlbS5cbiAqXG4gKi9cblxuXG5mdW5jdGlvbiBjb21wYWN0SXRlbShjb21wYXJlV2l0aFxuLyo6IExheW91dCovXG4sIGxcbi8qOiBMYXlvdXRJdGVtKi9cbiwgY29tcGFjdFR5cGVcbi8qOiBDb21wYWN0VHlwZSovXG4sIGNvbHNcbi8qOiBudW1iZXIqL1xuLCBmdWxsTGF5b3V0XG4vKjogTGF5b3V0Ki9cbilcbi8qOiBMYXlvdXRJdGVtKi9cbntcbiAgdmFyIGNvbXBhY3RWID0gY29tcGFjdFR5cGUgPT09IFwidmVydGljYWxcIjtcbiAgdmFyIGNvbXBhY3RIID0gY29tcGFjdFR5cGUgPT09IFwiaG9yaXpvbnRhbFwiO1xuXG4gIGlmIChjb21wYWN0Vikge1xuICAgIC8vIEJvdHRvbSAneScgcG9zc2libGUgaXMgdGhlIGJvdHRvbSBvZiB0aGUgbGF5b3V0LlxuICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBkbyBuaWNlIHN0dWZmIGxpa2Ugc3BlY2lmeSB7eTogSW5maW5pdHl9XG4gICAgLy8gVGhpcyBpcyBoZXJlIGJlY2F1c2UgdGhlIGxheW91dCBtdXN0IGJlIHNvcnRlZCBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlY3QgYm90dG9tIGB5YC5cbiAgICBsLnkgPSBNYXRoLm1pbihib3R0b20oY29tcGFyZVdpdGgpLCBsLnkpOyAvLyBNb3ZlIHRoZSBlbGVtZW50IHVwIGFzIGZhciBhcyBpdCBjYW4gZ28gd2l0aG91dCBjb2xsaWRpbmcuXG5cbiAgICB3aGlsZSAobC55ID4gMCAmJiAhZ2V0Rmlyc3RDb2xsaXNpb24oY29tcGFyZVdpdGgsIGwpKSB7XG4gICAgICBsLnktLTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29tcGFjdEgpIHtcbiAgICBsLnkgPSBNYXRoLm1pbihib3R0b20oY29tcGFyZVdpdGgpLCBsLnkpOyAvLyBNb3ZlIHRoZSBlbGVtZW50IGxlZnQgYXMgZmFyIGFzIGl0IGNhbiBnbyB3aXRob3V0IGNvbGxpZGluZy5cblxuICAgIHdoaWxlIChsLnggPiAwICYmICFnZXRGaXJzdENvbGxpc2lvbihjb21wYXJlV2l0aCwgbCkpIHtcbiAgICAgIGwueC0tO1xuICAgIH1cbiAgfSAvLyBNb3ZlIGl0IGRvd24sIGFuZCBrZWVwIG1vdmluZyBpdCBkb3duIGlmIGl0J3MgY29sbGlkaW5nLlxuXG5cbiAgdmFyIGNvbGxpZGVzO1xuXG4gIHdoaWxlIChjb2xsaWRlcyA9IGdldEZpcnN0Q29sbGlzaW9uKGNvbXBhcmVXaXRoLCBsKSkge1xuICAgIGlmIChjb21wYWN0SCkge1xuICAgICAgcmVzb2x2ZUNvbXBhY3Rpb25Db2xsaXNpb24oZnVsbExheW91dCwgbCwgY29sbGlkZXMueCArIGNvbGxpZGVzLncsIFwieFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZUNvbXBhY3Rpb25Db2xsaXNpb24oZnVsbExheW91dCwgbCwgY29sbGlkZXMueSArIGNvbGxpZGVzLmgsIFwieVwiKTtcbiAgICB9IC8vIFNpbmNlIHdlIGNhbid0IGdyb3cgd2l0aG91dCBib3VuZHMgaG9yaXpvbnRhbGx5LCBpZiB3ZSd2ZSBvdmVyZmxvd24sIGxldCdzIG1vdmUgaXQgZG93biBhbmQgdHJ5IGFnYWluLlxuXG5cbiAgICBpZiAoY29tcGFjdEggJiYgbC54ICsgbC53ID4gY29scykge1xuICAgICAgbC54ID0gY29scyAtIGwudztcbiAgICAgIGwueSsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsO1xufVxuLyoqXG4gKiBHaXZlbiBhIGxheW91dCwgbWFrZSBzdXJlIGFsbCBlbGVtZW50cyBmaXQgd2l0aGluIGl0cyBib3VuZHMuXG4gKlxuICogTW9kaWZpZXMgbGF5b3V0IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBsYXlvdXQgTGF5b3V0IGFycmF5LlxuICogQHBhcmFtICB7TnVtYmVyfSBib3VuZHMgTnVtYmVyIG9mIGNvbHVtbnMuXG4gKi9cblxuXG5mdW5jdGlvbiBjb3JyZWN0Qm91bmRzKGxheW91dFxuLyo6IExheW91dCovXG4sIGJvdW5kc1xuLyo6IHsgY29sczogbnVtYmVyIH0qL1xuKVxuLyo6IExheW91dCovXG57XG4gIHZhciBjb2xsaWRlc1dpdGggPSBnZXRTdGF0aWNzKGxheW91dCk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxheW91dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBsID0gbGF5b3V0W2ldOyAvLyBPdmVyZmxvd3MgcmlnaHRcblxuICAgIGlmIChsLnggKyBsLncgPiBib3VuZHMuY29scykgbC54ID0gYm91bmRzLmNvbHMgLSBsLnc7IC8vIE92ZXJmbG93cyBsZWZ0XG5cbiAgICBpZiAobC54IDwgMCkge1xuICAgICAgbC54ID0gMDtcbiAgICAgIGwudyA9IGJvdW5kcy5jb2xzO1xuICAgIH1cblxuICAgIGlmICghbC5zdGF0aWMpIGNvbGxpZGVzV2l0aC5wdXNoKGwpO2Vsc2Uge1xuICAgICAgLy8gSWYgdGhpcyBpcyBzdGF0aWMgYW5kIGNvbGxpZGVzIHdpdGggb3RoZXIgc3RhdGljcywgd2UgbXVzdCBtb3ZlIGl0IGRvd24uXG4gICAgICAvLyBXZSBoYXZlIHRvIGRvIHNvbWV0aGluZyBuaWNlciB0aGFuIGp1c3QgbGV0dGluZyB0aGVtIG92ZXJsYXAuXG4gICAgICB3aGlsZSAoZ2V0Rmlyc3RDb2xsaXNpb24oY29sbGlkZXNXaXRoLCBsKSkge1xuICAgICAgICBsLnkrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGF5b3V0O1xufVxuLyoqXG4gKiBHZXQgYSBsYXlvdXQgaXRlbSBieSBJRC4gVXNlZCBzbyB3ZSBjYW4gb3ZlcnJpZGUgbGF0ZXIgb24gaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgbGF5b3V0IExheW91dCBhcnJheS5cbiAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgIElEXG4gKiBAcmV0dXJuIHtMYXlvdXRJdGVtfSAgICBJdGVtIGF0IElELlxuICovXG5cblxuZnVuY3Rpb24gZ2V0TGF5b3V0SXRlbShsYXlvdXRcbi8qOiBMYXlvdXQqL1xuLCBpZFxuLyo6IHN0cmluZyovXG4pXG4vKjogP0xheW91dEl0ZW0qL1xue1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5b3V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGxheW91dFtpXS5pID09PSBpZCkgcmV0dXJuIGxheW91dFtpXTtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIHRoaXMgbGF5b3V0IGNvbGxpZGVzIHdpdGguXG4gKiBJdCBkb2Vzbid0IGFwcGVhciB0byBtYXR0ZXIgd2hpY2ggb3JkZXIgd2UgYXBwcm9hY2ggdGhpcyBmcm9tLCBhbHRob3VnaFxuICogcGVyaGFwcyB0aGF0IGlzIHRoZSB3cm9uZyB0aGluZyB0byBkby5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGxheW91dEl0ZW0gTGF5b3V0IGl0ZW0uXG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfSAgQSBjb2xsaWRpbmcgbGF5b3V0IGl0ZW0sIG9yIHVuZGVmaW5lZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEZpcnN0Q29sbGlzaW9uKGxheW91dFxuLyo6IExheW91dCovXG4sIGxheW91dEl0ZW1cbi8qOiBMYXlvdXRJdGVtKi9cbilcbi8qOiA/TGF5b3V0SXRlbSovXG57XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYXlvdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoY29sbGlkZXMobGF5b3V0W2ldLCBsYXlvdXRJdGVtKSkgcmV0dXJuIGxheW91dFtpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGxDb2xsaXNpb25zKGxheW91dFxuLyo6IExheW91dCovXG4sIGxheW91dEl0ZW1cbi8qOiBMYXlvdXRJdGVtKi9cbilcbi8qOiBBcnJheTxMYXlvdXRJdGVtPiovXG57XG4gIHJldHVybiBsYXlvdXQuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgcmV0dXJuIGNvbGxpZGVzKGwsIGxheW91dEl0ZW0pO1xuICB9KTtcbn1cbi8qKlxuICogR2V0IGFsbCBzdGF0aWMgZWxlbWVudHMuXG4gKiBAcGFyYW0gIHtBcnJheX0gbGF5b3V0IEFycmF5IG9mIGxheW91dCBvYmplY3RzLlxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICBBcnJheSBvZiBzdGF0aWMgbGF5b3V0IGl0ZW1zLi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MobGF5b3V0XG4vKjogTGF5b3V0Ki9cbilcbi8qOiBBcnJheTxMYXlvdXRJdGVtPiovXG57XG4gIHJldHVybiBsYXlvdXQuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgcmV0dXJuIGwuc3RhdGljO1xuICB9KTtcbn1cbi8qKlxuICogTW92ZSBhbiBlbGVtZW50LiBSZXNwb25zaWJsZSBmb3IgZG9pbmcgY2FzY2FkaW5nIG1vdmVtZW50cyBvZiBvdGhlciBlbGVtZW50cy5cbiAqXG4gKiBNb2RpZmllcyBsYXlvdXQgaXRlbXMuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgbGF5b3V0ICAgICAgICAgICAgRnVsbCBsYXlvdXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtICB7TGF5b3V0SXRlbX0gbCAgICAgICAgICAgICAgICAgZWxlbWVudCB0byBtb3ZlLlxuICogQHBhcmFtICB7TnVtYmVyfSAgICAgW3hdICAgICAgICAgICAgICAgWCBwb3NpdGlvbiBpbiBncmlkIHVuaXRzLlxuICogQHBhcmFtICB7TnVtYmVyfSAgICAgW3ldICAgICAgICAgICAgICAgWSBwb3NpdGlvbiBpbiBncmlkIHVuaXRzLlxuICovXG5cblxuZnVuY3Rpb24gbW92ZUVsZW1lbnQobGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgbFxuLyo6IExheW91dEl0ZW0qL1xuLCB4XG4vKjogP251bWJlciovXG4sIHlcbi8qOiA/bnVtYmVyKi9cbiwgaXNVc2VyQWN0aW9uXG4vKjogP2Jvb2xlYW4qL1xuLCBwcmV2ZW50Q29sbGlzaW9uXG4vKjogP2Jvb2xlYW4qL1xuLCBjb21wYWN0VHlwZVxuLyo6IENvbXBhY3RUeXBlKi9cbiwgY29sc1xuLyo6IG51bWJlciovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgLy8gSWYgdGhpcyBpcyBzdGF0aWMgYW5kIG5vdCBleHBsaWNpdGx5IGVuYWJsZWQgYXMgZHJhZ2dhYmxlLFxuICAvLyBubyBtb3ZlIGlzIHBvc3NpYmxlLCBzbyB3ZSBjYW4gc2hvcnQtY2lyY3VpdCB0aGlzIGltbWVkaWF0ZWx5LlxuICBpZiAobC5zdGF0aWMgJiYgbC5pc0RyYWdnYWJsZSAhPT0gdHJ1ZSkgcmV0dXJuIGxheW91dDsgLy8gU2hvcnQtY2lyY3VpdCBpZiBub3RoaW5nIHRvIGRvLlxuXG4gIGlmIChsLnkgPT09IHkgJiYgbC54ID09PSB4KSByZXR1cm4gbGF5b3V0O1xuICBsb2coXCJNb3ZpbmcgZWxlbWVudCBcIi5jb25jYXQobC5pLCBcIiB0byBbXCIpLmNvbmNhdChTdHJpbmcoeCksIFwiLFwiKS5jb25jYXQoU3RyaW5nKHkpLCBcIl0gZnJvbSBbXCIpLmNvbmNhdChsLngsIFwiLFwiKS5jb25jYXQobC55LCBcIl1cIikpO1xuICB2YXIgb2xkWCA9IGwueDtcbiAgdmFyIG9sZFkgPSBsLnk7IC8vIFRoaXMgaXMgcXVpdGUgYSBiaXQgZmFzdGVyIHRoYW4gZXh0ZW5kaW5nIHRoZSBvYmplY3RcblxuICBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIGwueCA9IHg7XG4gIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikgbC55ID0geTtcbiAgbC5tb3ZlZCA9IHRydWU7IC8vIElmIHRoaXMgY29sbGlkZXMgd2l0aCBhbnl0aGluZywgbW92ZSBpdC5cbiAgLy8gV2hlbiBkb2luZyB0aGlzIGNvbXBhcmlzb24sIHdlIGhhdmUgdG8gc29ydCB0aGUgaXRlbXMgd2UgY29tcGFyZSB3aXRoXG4gIC8vIHRvIGVuc3VyZSwgaW4gdGhlIGNhc2Ugb2YgbXVsdGlwbGUgY29sbGlzaW9ucywgdGhhdCB3ZSdyZSBnZXR0aW5nIHRoZVxuICAvLyBuZWFyZXN0IGNvbGxpc2lvbi5cblxuICB2YXIgc29ydGVkID0gc29ydExheW91dEl0ZW1zKGxheW91dCwgY29tcGFjdFR5cGUpO1xuICB2YXIgbW92aW5nVXAgPSBjb21wYWN0VHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHR5cGVvZiB5ID09PSBcIm51bWJlclwiID8gb2xkWSA+PSB5IDogY29tcGFjdFR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmIHR5cGVvZiB4ID09PSBcIm51bWJlclwiID8gb2xkWCA+PSB4IDogZmFsc2U7IC8vICRGbG93SWdub3JlIGFjY2VwdGFibGUgbW9kaWZpY2F0aW9uIG9mIHJlYWQtb25seSBhcnJheSBhcyBpdCB3YXMgcmVjZW50bHkgY2xvbmVkXG5cbiAgaWYgKG1vdmluZ1VwKSBzb3J0ZWQgPSBzb3J0ZWQucmV2ZXJzZSgpO1xuICB2YXIgY29sbGlzaW9ucyA9IGdldEFsbENvbGxpc2lvbnMoc29ydGVkLCBsKTsgLy8gVGhlcmUgd2FzIGEgY29sbGlzaW9uOyBhYm9ydFxuXG4gIGlmIChwcmV2ZW50Q29sbGlzaW9uICYmIGNvbGxpc2lvbnMubGVuZ3RoKSB7XG4gICAgbG9nKFwiQ29sbGlzaW9uIHByZXZlbnRlZCBvbiBcIi5jb25jYXQobC5pLCBcIiwgcmV2ZXJ0aW5nLlwiKSk7XG4gICAgbC54ID0gb2xkWDtcbiAgICBsLnkgPSBvbGRZO1xuICAgIGwubW92ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbGF5b3V0O1xuICB9IC8vIE1vdmUgZWFjaCBpdGVtIHRoYXQgY29sbGlkZXMgYXdheSBmcm9tIHRoaXMgZWxlbWVudC5cblxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2xsaXNpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpc2lvbnNbaV07XG4gICAgbG9nKFwiUmVzb2x2aW5nIGNvbGxpc2lvbiBiZXR3ZWVuIFwiLmNvbmNhdChsLmksIFwiIGF0IFtcIikuY29uY2F0KGwueCwgXCIsXCIpLmNvbmNhdChsLnksIFwiXSBhbmQgXCIpLmNvbmNhdChjb2xsaXNpb24uaSwgXCIgYXQgW1wiKS5jb25jYXQoY29sbGlzaW9uLngsIFwiLFwiKS5jb25jYXQoY29sbGlzaW9uLnksIFwiXVwiKSk7IC8vIFNob3J0IGNpcmN1aXQgc28gd2UgY2FuJ3QgaW5maW5pdGUgbG9vcFxuXG4gICAgaWYgKGNvbGxpc2lvbi5tb3ZlZCkgY29udGludWU7IC8vIERvbid0IG1vdmUgc3RhdGljIGl0ZW1zIC0gd2UgaGF2ZSB0byBtb3ZlICp0aGlzKiBlbGVtZW50IGF3YXlcblxuICAgIGlmIChjb2xsaXNpb24uc3RhdGljKSB7XG4gICAgICBsYXlvdXQgPSBtb3ZlRWxlbWVudEF3YXlGcm9tQ29sbGlzaW9uKGxheW91dCwgY29sbGlzaW9uLCBsLCBpc1VzZXJBY3Rpb24sIGNvbXBhY3RUeXBlLCBjb2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5b3V0ID0gbW92ZUVsZW1lbnRBd2F5RnJvbUNvbGxpc2lvbihsYXlvdXQsIGwsIGNvbGxpc2lvbiwgaXNVc2VyQWN0aW9uLCBjb21wYWN0VHlwZSwgY29scyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxheW91dDtcbn1cbi8qKlxuICogVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgbmVlZHMgdG8gaGFwcGVuIC0gZ2l2ZW4gYSBjb2xsaXNpb24sIG1vdmUgYW4gZWxlbWVudCBhd2F5IGZyb20gdGhlIGNvbGxpc2lvbi5cbiAqIFdlIGF0dGVtcHQgdG8gbW92ZSBpdCB1cCBpZiB0aGVyZSdzIHJvb20sIG90aGVyd2lzZSBpdCBnb2VzIGJlbG93LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBsYXlvdXQgICAgICAgICAgICBGdWxsIGxheW91dCB0byBtb2RpZnkuXG4gKiBAcGFyYW0gIHtMYXlvdXRJdGVtfSBjb2xsaWRlc1dpdGggTGF5b3V0IGl0ZW0gd2UncmUgY29sbGlkaW5nIHdpdGguXG4gKiBAcGFyYW0gIHtMYXlvdXRJdGVtfSBpdGVtVG9Nb3ZlICAgTGF5b3V0IGl0ZW0gd2UncmUgbW92aW5nLlxuICovXG5cblxuZnVuY3Rpb24gbW92ZUVsZW1lbnRBd2F5RnJvbUNvbGxpc2lvbihsYXlvdXRcbi8qOiBMYXlvdXQqL1xuLCBjb2xsaWRlc1dpdGhcbi8qOiBMYXlvdXRJdGVtKi9cbiwgaXRlbVRvTW92ZVxuLyo6IExheW91dEl0ZW0qL1xuLCBpc1VzZXJBY3Rpb25cbi8qOiA/Ym9vbGVhbiovXG4sIGNvbXBhY3RUeXBlXG4vKjogQ29tcGFjdFR5cGUqL1xuLCBjb2xzXG4vKjogbnVtYmVyKi9cbilcbi8qOiBMYXlvdXQqL1xue1xuICB2YXIgY29tcGFjdEggPSBjb21wYWN0VHlwZSA9PT0gXCJob3Jpem9udGFsXCI7IC8vIENvbXBhY3QgdmVydGljYWxseSBpZiBub3Qgc2V0IHRvIGhvcml6b250YWxcblxuICB2YXIgY29tcGFjdFYgPSBjb21wYWN0VHlwZSAhPT0gXCJob3Jpem9udGFsXCI7XG4gIHZhciBwcmV2ZW50Q29sbGlzaW9uID0gY29sbGlkZXNXaXRoLnN0YXRpYzsgLy8gd2UncmUgYWxyZWFkeSBjb2xsaWRpbmcgKG5vdCBmb3Igc3RhdGljIGl0ZW1zKVxuICAvLyBJZiB0aGVyZSBpcyBlbm91Z2ggc3BhY2UgYWJvdmUgdGhlIGNvbGxpc2lvbiB0byBwdXQgdGhpcyBlbGVtZW50LCBtb3ZlIGl0IHRoZXJlLlxuICAvLyBXZSBvbmx5IGRvIHRoaXMgb24gdGhlIG1haW4gY29sbGlzaW9uIGFzIHRoaXMgY2FuIGdldCBmdW5reSBpbiBjYXNjYWRlcyBhbmQgY2F1c2VcbiAgLy8gdW53YW50ZWQgc3dhcHBpbmcgYmVoYXZpb3IuXG5cbiAgaWYgKGlzVXNlckFjdGlvbikge1xuICAgIC8vIFJlc2V0IGlzVXNlckFjdGlvbiBmbGFnIGJlY2F1c2Ugd2UncmUgbm90IGluIHRoZSBtYWluIGNvbGxpc2lvbiBhbnltb3JlLlxuICAgIGlzVXNlckFjdGlvbiA9IGZhbHNlOyAvLyBNYWtlIGEgbW9jayBpdGVtIHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgaXRlbSBoZXJlLCBvbmx5IG1vZGlmeSBpbiBtb3ZlRWxlbWVudC5cblxuICAgIHZhciBmYWtlSXRlbVxuICAgIC8qOiBMYXlvdXRJdGVtKi9cbiAgICA9IHtcbiAgICAgIHg6IGNvbXBhY3RIID8gTWF0aC5tYXgoY29sbGlkZXNXaXRoLnggLSBpdGVtVG9Nb3ZlLncsIDApIDogaXRlbVRvTW92ZS54LFxuICAgICAgeTogY29tcGFjdFYgPyBNYXRoLm1heChjb2xsaWRlc1dpdGgueSAtIGl0ZW1Ub01vdmUuaCwgMCkgOiBpdGVtVG9Nb3ZlLnksXG4gICAgICB3OiBpdGVtVG9Nb3ZlLncsXG4gICAgICBoOiBpdGVtVG9Nb3ZlLmgsXG4gICAgICBpOiBcIi0xXCJcbiAgICB9OyAvLyBObyBjb2xsaXNpb24/IElmIHNvLCB3ZSBjYW4gZ28gdXAgdGhlcmU7IG90aGVyd2lzZSwgd2UnbGwgZW5kIHVwIG1vdmluZyBkb3duIGFzIG5vcm1hbFxuXG4gICAgaWYgKCFnZXRGaXJzdENvbGxpc2lvbihsYXlvdXQsIGZha2VJdGVtKSkge1xuICAgICAgbG9nKFwiRG9pbmcgcmV2ZXJzZSBjb2xsaXNpb24gb24gXCIuY29uY2F0KGl0ZW1Ub01vdmUuaSwgXCIgdXAgdG8gW1wiKS5jb25jYXQoZmFrZUl0ZW0ueCwgXCIsXCIpLmNvbmNhdChmYWtlSXRlbS55LCBcIl0uXCIpKTtcbiAgICAgIHJldHVybiBtb3ZlRWxlbWVudChsYXlvdXQsIGl0ZW1Ub01vdmUsIGNvbXBhY3RIID8gZmFrZUl0ZW0ueCA6IHVuZGVmaW5lZCwgY29tcGFjdFYgPyBmYWtlSXRlbS55IDogdW5kZWZpbmVkLCBpc1VzZXJBY3Rpb24sIHByZXZlbnRDb2xsaXNpb24sIGNvbXBhY3RUeXBlLCBjb2xzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW92ZUVsZW1lbnQobGF5b3V0LCBpdGVtVG9Nb3ZlLCBjb21wYWN0SCA/IGl0ZW1Ub01vdmUueCArIDEgOiB1bmRlZmluZWQsIGNvbXBhY3RWID8gaXRlbVRvTW92ZS55ICsgMSA6IHVuZGVmaW5lZCwgaXNVc2VyQWN0aW9uLCBwcmV2ZW50Q29sbGlzaW9uLCBjb21wYWN0VHlwZSwgY29scyk7XG59XG4vKipcbiAqIEhlbHBlciB0byBjb252ZXJ0IGEgbnVtYmVyIHRvIGEgcGVyY2VudGFnZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBudW0gQW55IG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfSAgICAgVGhhdCBudW1iZXIgYXMgYSBwZXJjZW50YWdlLlxuICovXG5cblxuZnVuY3Rpb24gcGVyYyhudW1cbi8qOiBudW1iZXIqL1xuKVxuLyo6IHN0cmluZyovXG57XG4gIHJldHVybiBudW0gKiAxMDAgKyBcIiVcIjtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKF9yZWYpXG4vKjogT2JqZWN0Ki9cbntcbiAgdmFyIHRvcCA9IF9yZWYudG9wLFxuICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuICAvLyBSZXBsYWNlIHVuaXRsZXNzIGl0ZW1zIHdpdGggcHhcbiAgdmFyIHRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdChsZWZ0LCBcInB4LFwiKS5jb25jYXQodG9wLCBcInB4KVwiKTtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSxcbiAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zbGF0ZSxcbiAgICBNb3pUcmFuc2Zvcm06IHRyYW5zbGF0ZSxcbiAgICBtc1RyYW5zZm9ybTogdHJhbnNsYXRlLFxuICAgIE9UcmFuc2Zvcm06IHRyYW5zbGF0ZSxcbiAgICB3aWR0aDogXCJcIi5jb25jYXQod2lkdGgsIFwicHhcIiksXG4gICAgaGVpZ2h0OiBcIlwiLmNvbmNhdChoZWlnaHQsIFwicHhcIiksXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRUb3BMZWZ0KF9yZWYyKVxuLyo6IE9iamVjdCovXG57XG4gIHZhciB0b3AgPSBfcmVmMi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZjIubGVmdCxcbiAgICAgIHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQ7XG4gIHJldHVybiB7XG4gICAgdG9wOiBcIlwiLmNvbmNhdCh0b3AsIFwicHhcIiksXG4gICAgbGVmdDogXCJcIi5jb25jYXQobGVmdCwgXCJweFwiKSxcbiAgICB3aWR0aDogXCJcIi5jb25jYXQod2lkdGgsIFwicHhcIiksXG4gICAgaGVpZ2h0OiBcIlwiLmNvbmNhdChoZWlnaHQsIFwicHhcIiksXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICB9O1xufVxuLyoqXG4gKiBHZXQgbGF5b3V0IGl0ZW1zIHNvcnRlZCBmcm9tIHRvcCBsZWZ0IHRvIHJpZ2h0IGFuZCBkb3duLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBsYXlvdXQgb2JqZWN0cy5cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgTGF5b3V0LCBzb3J0ZWQgc3RhdGljIGl0ZW1zIGZpcnN0LlxuICovXG5cblxuZnVuY3Rpb24gc29ydExheW91dEl0ZW1zKGxheW91dFxuLyo6IExheW91dCovXG4sIGNvbXBhY3RUeXBlXG4vKjogQ29tcGFjdFR5cGUqL1xuKVxuLyo6IExheW91dCovXG57XG4gIGlmIChjb21wYWN0VHlwZSA9PT0gXCJob3Jpem9udGFsXCIpIHJldHVybiBzb3J0TGF5b3V0SXRlbXNCeUNvbFJvdyhsYXlvdXQpO2Vsc2UgcmV0dXJuIHNvcnRMYXlvdXRJdGVtc0J5Um93Q29sKGxheW91dCk7XG59XG4vKipcbiAqIFNvcnQgbGF5b3V0IGl0ZW1zIGJ5IHJvdyBhc2NlbmRpbmcgYW5kIGNvbHVtbiBhc2NlbmRpbmcuXG4gKlxuICogRG9lcyBub3QgbW9kaWZ5IExheW91dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNvcnRMYXlvdXRJdGVtc0J5Um93Q29sKGxheW91dFxuLyo6IExheW91dCovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgLy8gU2xpY2UgdG8gY2xvbmUgYXJyYXkgYXMgc29ydCBtb2RpZmllc1xuICByZXR1cm4gbGF5b3V0LnNsaWNlKDApLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYS55ID4gYi55IHx8IGEueSA9PT0gYi55ICYmIGEueCA+IGIueCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhLnkgPT09IGIueSAmJiBhLnggPT09IGIueCkge1xuICAgICAgLy8gV2l0aG91dCB0aGlzLCB3ZSBjYW4gZ2V0IGRpZmZlcmVudCBzb3J0IHJlc3VsdHMgaW4gSUUgdnMuIENocm9tZS9GRlxuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9KTtcbn1cbi8qKlxuICogU29ydCBsYXlvdXQgaXRlbXMgYnkgY29sdW1uIGFzY2VuZGluZyB0aGVuIHJvdyBhc2NlbmRpbmcuXG4gKlxuICogRG9lcyBub3QgbW9kaWZ5IExheW91dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNvcnRMYXlvdXRJdGVtc0J5Q29sUm93KGxheW91dFxuLyo6IExheW91dCovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgcmV0dXJuIGxheW91dC5zbGljZSgwKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKGEueCA+IGIueCB8fCBhLnggPT09IGIueCAmJiBhLnkgPiBiLnkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfSk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEgbGF5b3V0IHVzaW5nIHRoZSBpbml0aWFsTGF5b3V0IGFuZCBjaGlsZHJlbiBhcyBhIHRlbXBsYXRlLlxuICogTWlzc2luZyBlbnRyaWVzIHdpbGwgYmUgYWRkZWQsIGV4dHJhbmVvdXMgb25lcyB3aWxsIGJlIHRydW5jYXRlZC5cbiAqXG4gKiBEb2VzIG5vdCBtb2RpZnkgaW5pdGlhbExheW91dC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gIGluaXRpYWxMYXlvdXQgTGF5b3V0IHBhc3NlZCBpbiB0aHJvdWdoIHByb3BzLlxuICogQHBhcmFtICB7U3RyaW5nfSBicmVha3BvaW50ICAgIEN1cnJlbnQgcmVzcG9uc2l2ZSBicmVha3BvaW50LlxuICogQHBhcmFtICB7P1N0cmluZ30gY29tcGFjdCAgICAgIENvbXBhY3Rpb24gb3B0aW9uLlxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICAgIFdvcmtpbmcgbGF5b3V0LlxuICovXG5cblxuZnVuY3Rpb24gc3luY2hyb25pemVMYXlvdXRXaXRoQ2hpbGRyZW4oaW5pdGlhbExheW91dFxuLyo6IExheW91dCovXG4sIGNoaWxkcmVuXG4vKjogUmVhY3RDaGlsZHJlbiovXG4sIGNvbHNcbi8qOiBudW1iZXIqL1xuLCBjb21wYWN0VHlwZVxuLyo6IENvbXBhY3RUeXBlKi9cbilcbi8qOiBMYXlvdXQqL1xue1xuICBpbml0aWFsTGF5b3V0ID0gaW5pdGlhbExheW91dCB8fCBbXTsgLy8gR2VuZXJhdGUgb25lIGxheW91dCBpdGVtIHBlciBjaGlsZC5cblxuICB2YXIgbGF5b3V0XG4gIC8qOiBMYXlvdXRJdGVtW10qL1xuICA9IFtdO1xuXG4gIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZFxuICAvKjogUmVhY3RFbGVtZW50PGFueT4qL1xuICAsIGlcbiAgLyo6IG51bWJlciovXG4gICkge1xuICAgIC8vIERvbid0IG92ZXJ3cml0ZSBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cbiAgICB2YXIgZXhpc3RzID0gZ2V0TGF5b3V0SXRlbShpbml0aWFsTGF5b3V0LCBTdHJpbmcoY2hpbGQua2V5KSk7XG5cbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICBsYXlvdXRbaV0gPSBjbG9uZUxheW91dEl0ZW0oZXhpc3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFpc1Byb2R1Y3Rpb24gJiYgY2hpbGQucHJvcHMuX2dyaWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiYF9ncmlkYCBwcm9wZXJ0aWVzIG9uIGNoaWxkcmVuIGhhdmUgYmVlbiBkZXByZWNhdGVkIGFzIG9mIFJlYWN0IDE1LjIuIFwiICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBcIlBsZWFzZSB1c2UgYGRhdGEtZ3JpZGAgb3IgYWRkIHlvdXIgcHJvcGVydGllcyBkaXJlY3RseSB0byB0aGUgYGxheW91dGAuXCIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZyA9IGNoaWxkLnByb3BzW1wiZGF0YS1ncmlkXCJdIHx8IGNoaWxkLnByb3BzLl9ncmlkOyAvLyBIZXksIHRoaXMgaXRlbSBoYXMgYSBkYXRhLWdyaWQgcHJvcGVydHksIHVzZSBpdC5cblxuICAgICAgaWYgKGcpIHtcbiAgICAgICAgaWYgKCFpc1Byb2R1Y3Rpb24pIHtcbiAgICAgICAgICB2YWxpZGF0ZUxheW91dChbZ10sIFwiUmVhY3RHcmlkTGF5b3V0LmNoaWxkcmVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF5b3V0W2ldID0gY2xvbmVMYXlvdXRJdGVtKF9vYmplY3RTcHJlYWQoe30sIGcsIHtcbiAgICAgICAgICBpOiBjaGlsZC5rZXlcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90aGluZyBwcm92aWRlZDogZW5zdXJlIHRoaXMgaXMgYWRkZWQgdG8gdGhlIGJvdHRvbVxuICAgICAgICBsYXlvdXRbaV0gPSBjbG9uZUxheW91dEl0ZW0oe1xuICAgICAgICAgIHc6IDEsXG4gICAgICAgICAgaDogMSxcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IGJvdHRvbShsYXlvdXQpLFxuICAgICAgICAgIGk6IFN0cmluZyhjaGlsZC5rZXkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIENvcnJlY3QgdGhlIGxheW91dC5cblxuXG4gIHZhciBjb3JyZWN0ZWRMYXlvdXQgPSBjb3JyZWN0Qm91bmRzKGxheW91dCwge1xuICAgIGNvbHM6IGNvbHNcbiAgfSk7XG4gIHJldHVybiBjb21wYWN0KGNvcnJlY3RlZExheW91dCwgY29tcGFjdFR5cGUsIGNvbHMpO1xufVxuLyoqXG4gKiBWYWxpZGF0ZSBhIGxheW91dC4gVGhyb3dzIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gIGxheW91dCAgICAgICAgQXJyYXkgb2YgbGF5b3V0IGl0ZW1zLlxuICogQHBhcmFtICB7U3RyaW5nfSBbY29udGV4dE5hbWVdIENvbnRleHQgbmFtZSBmb3IgZXJyb3JzLlxuICogQHRocm93ICB7RXJyb3J9ICAgICAgICAgICAgICAgIFZhbGlkYXRpb24gZXJyb3IuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxheW91dChsYXlvdXRcbi8qOiBMYXlvdXQqL1xuKVxuLyo6IHZvaWQqL1xue1xuICB2YXIgY29udGV4dE5hbWVcbiAgLyo6IHN0cmluZyovXG4gID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcIkxheW91dFwiO1xuICB2YXIgc3ViUHJvcHMgPSBbXCJ4XCIsIFwieVwiLCBcIndcIiwgXCJoXCJdO1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGF5b3V0KSkgdGhyb3cgbmV3IEVycm9yKGNvbnRleHROYW1lICsgXCIgbXVzdCBiZSBhbiBhcnJheSFcIik7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxheW91dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBpdGVtID0gbGF5b3V0W2ldO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBzdWJQcm9wcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtW3N1YlByb3BzW2pdXSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdEdyaWRMYXlvdXQ6IFwiICsgY29udGV4dE5hbWUgKyBcIltcIiArIGkgKyBcIl0uXCIgKyBzdWJQcm9wc1tqXSArIFwiIG11c3QgYmUgYSBudW1iZXIhXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpdGVtLmkgJiYgdHlwZW9mIGl0ZW0uaSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3RHcmlkTGF5b3V0OiBcIiArIGNvbnRleHROYW1lICsgXCJbXCIgKyBpICsgXCJdLmkgbXVzdCBiZSBhIHN0cmluZyFcIik7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uc3RhdGljICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGl0ZW0uc3RhdGljICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3RHcmlkTGF5b3V0OiBcIiArIGNvbnRleHROYW1lICsgXCJbXCIgKyBpICsgXCJdLnN0YXRpYyBtdXN0IGJlIGEgYm9vbGVhbiFcIik7XG4gICAgfVxuICB9XG59IC8vIExlZ2FjeSBzdXBwb3J0IGZvciB2ZXJ0aWNhbENvbXBhY3Q6IGZhbHNlXG5cblxuZnVuY3Rpb24gY29tcGFjdFR5cGUocHJvcHNcbi8qOiA/eyB2ZXJ0aWNhbENvbXBhY3Q6IGJvb2xlYW4sIGNvbXBhY3RUeXBlOiBDb21wYWN0VHlwZSB9Ki9cbilcbi8qOiBDb21wYWN0VHlwZSovXG57XG4gIHZhciBfcmVmMyA9IHByb3BzIHx8IHt9LFxuICAgICAgdmVydGljYWxDb21wYWN0ID0gX3JlZjMudmVydGljYWxDb21wYWN0LFxuICAgICAgY29tcGFjdFR5cGUgPSBfcmVmMy5jb21wYWN0VHlwZTtcblxuICByZXR1cm4gdmVydGljYWxDb21wYWN0ID09PSBmYWxzZSA/IG51bGwgOiBjb21wYWN0VHlwZTtcbn0gLy8gRmxvdyBjYW4ndCByZWFsbHkgZmlndXJlIHRoaXMgb3V0LCBzbyB3ZSBqdXN0IHVzZSBPYmplY3RcblxuXG5mdW5jdGlvbiBhdXRvQmluZEhhbmRsZXJzKGVsXG4vKjogT2JqZWN0Ki9cbiwgZm5zXG4vKjogQXJyYXk8c3RyaW5nPiovXG4pXG4vKjogdm9pZCovXG57XG4gIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gZWxba2V5XSA9IGVsW2tleV0uYmluZChlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2coKSB7XG4gIHZhciBfY29uc29sZTtcblxuICBpZiAoIURFQlVHKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydEF0XCI6XCJ0b3BcIixcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vYnVpbGQvUmVhY3RHcmlkTGF5b3V0XCIpLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy51dGlscyA9IHJlcXVpcmUoXCIuL2J1aWxkL3V0aWxzXCIpO1xubW9kdWxlLmV4cG9ydHMuUmVzcG9uc2l2ZSA9IHJlcXVpcmUoXCIuL2J1aWxkL1Jlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXRcIikuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLlJlc3BvbnNpdmUudXRpbHMgPSByZXF1aXJlKFwiLi9idWlsZC9yZXNwb25zaXZlVXRpbHNcIik7XG5tb2R1bGUuZXhwb3J0cy5XaWR0aFByb3ZpZGVyID0gcmVxdWlyZShcIi4vYnVpbGQvY29tcG9uZW50cy9XaWR0aFByb3ZpZGVyXCIpLmRlZmF1bHQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3REcmFnZ2FibGUgPSByZXF1aXJlKFwicmVhY3QtZHJhZ2dhYmxlXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgUmVzaXphYmxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlc2l6YWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVzaXphYmxlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIHNsYWNrVzogMCxcbiAgICAgIHNsYWNrSDogMFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlc2l6YWJsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmxvY2tBc3BlY3RSYXRpbyA9IGZ1bmN0aW9uIGxvY2tBc3BlY3RSYXRpbyh3aWR0aCwgaGVpZ2h0LCBhc3BlY3RSYXRpbykge1xuICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9IC8vIElmIHlvdSBkbyB0aGlzLCBiZSBjYXJlZnVsIG9mIGNvbnN0cmFpbnRzXG4gIDtcblxuICBfcHJvdG8ucnVuQ29uc3RyYWludHMgPSBmdW5jdGlvbiBydW5Db25zdHJhaW50cyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy5taW5Db25zdHJhaW50cywgdGhpcy5wcm9wcy5tYXhDb25zdHJhaW50c10sXG4gICAgICAgIG1pbiA9IF9yZWZbMF0sXG4gICAgICAgIG1heCA9IF9yZWZbMV07XG4gICAgaWYgKCFtaW4gJiYgIW1heCkgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTsgLy8gRml0IHdpZHRoICYgaGVpZ2h0IHRvIGFzcGVjdCByYXRpb1xuXG4gICAgaWYgKHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICBpZiAoaGVpZ2h0ID09PSB0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgICB2YXIgcmF0aW8gPSB0aGlzLnByb3BzLndpZHRoIC8gdGhpcy5wcm9wcy5oZWlnaHQ7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gcmF0aW87XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogcmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUYWtlIGludG8gYWNjb3VudCB2ZXJ0aWNhbCByZXNpemUgd2l0aCBOL1MgaGFuZGxlcyBvbiBsb2NrZWQgYXNwZWN0XG4gICAgICAgIC8vIHJhdGlvLiBDYWxjdWxhdGUgdGhlIGNoYW5nZSBoZWlnaHQtZmlyc3QsIGluc3RlYWQgb2Ygd2lkdGgtZmlyc3RcbiAgICAgICAgdmFyIF9yYXRpbyA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gdGhpcy5wcm9wcy53aWR0aDtcblxuICAgICAgICB3aWR0aCA9IGhlaWdodCAvIF9yYXRpbztcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggKiBfcmF0aW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG9sZFcgPSB3aWR0aCxcbiAgICAgICAgb2xkSCA9IGhlaWdodDsgLy8gQWRkIHNsYWNrIHRvIHRoZSB2YWx1ZXMgdXNlZCB0byBjYWxjdWxhdGUgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBpZlxuICAgIC8vIHdlIHN0YXJ0IHJlbW92aW5nIHNsYWNrLCB0aGUgZWxlbWVudCB3b24ndCByZWFjdCB0byBpdCByaWdodCBhd2F5IHVudGlsIGl0J3MgYmVlblxuICAgIC8vIGNvbXBsZXRlbHkgcmVtb3ZlZC5cblxuICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHNsYWNrVyA9IF90aGlzJHN0YXRlLnNsYWNrVyxcbiAgICAgICAgc2xhY2tIID0gX3RoaXMkc3RhdGUuc2xhY2tIO1xuICAgIHdpZHRoICs9IHNsYWNrVztcbiAgICBoZWlnaHQgKz0gc2xhY2tIO1xuXG4gICAgaWYgKG1pbikge1xuICAgICAgd2lkdGggPSBNYXRoLm1heChtaW5bMF0sIHdpZHRoKTtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KG1pblsxXSwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAobWF4KSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKG1heFswXSwgd2lkdGgpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4obWF4WzFdLCBoZWlnaHQpO1xuICAgIH0gLy8gSWYgdGhlIG51bWJlcnMgY2hhbmdlZCwgd2UgbXVzdCBoYXZlIGludHJvZHVjZWQgc29tZSBzbGFjay4gUmVjb3JkIGl0IGZvciB0aGUgbmV4dCBpdGVyYXRpb24uXG5cblxuICAgIHNsYWNrVyArPSBvbGRXIC0gd2lkdGg7XG4gICAgc2xhY2tIICs9IG9sZEggLSBoZWlnaHQ7XG5cbiAgICBpZiAoc2xhY2tXICE9PSB0aGlzLnN0YXRlLnNsYWNrVyB8fCBzbGFja0ggIT09IHRoaXMuc3RhdGUuc2xhY2tIKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2xhY2tXOiBzbGFja1csXG4gICAgICAgIHNsYWNrSDogc2xhY2tIXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBkcmFnIGV2ZW50cyB0byBwcm92aWRlIG1vcmUgdXNlZnVsIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaGFuZGxlck5hbWUgSGFuZGxlciBuYW1lIHRvIHdyYXAuXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgSGFuZGxlciBmdW5jdGlvbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoaGFuZGxlck5hbWUsIGF4aXMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZSwgX3JlZjIpIHtcbiAgICAgIHZhciBub2RlID0gX3JlZjIubm9kZSxcbiAgICAgICAgICBkZWx0YVggPSBfcmVmMi5kZWx0YVgsXG4gICAgICAgICAgZGVsdGFZID0gX3JlZjIuZGVsdGFZO1xuICAgICAgZGVsdGFYIC89IF90aGlzMi5wcm9wcy50cmFuc2Zvcm1TY2FsZTtcbiAgICAgIGRlbHRhWSAvPSBfdGhpczIucHJvcHMudHJhbnNmb3JtU2NhbGU7IC8vIEF4aXMgcmVzdHJpY3Rpb25zXG5cbiAgICAgIHZhciBjYW5EcmFnWCA9IChfdGhpczIucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IF90aGlzMi5wcm9wcy5heGlzID09PSAneCcpICYmIFsnbicsICdzJ10uaW5kZXhPZihheGlzKSA9PT0gLTE7XG4gICAgICB2YXIgY2FuRHJhZ1kgPSAoX3RoaXMyLnByb3BzLmF4aXMgPT09ICdib3RoJyB8fCBfdGhpczIucHJvcHMuYXhpcyA9PT0gJ3knKSAmJiBbJ2UnLCAndyddLmluZGV4T2YoYXhpcykgPT09IC0xOyAvLyByZXZlcnNlIGRlbHRhIGlmIHVzaW5nIHRvcCBvciBsZWZ0IGRyYWcgaGFuZGxlc1xuXG4gICAgICBpZiAoY2FuRHJhZ1ggJiYgYXhpc1theGlzLmxlbmd0aCAtIDFdID09PSAndycpIHtcbiAgICAgICAgZGVsdGFYID0gLWRlbHRhWDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbkRyYWdZICYmIGF4aXNbMF0gPT09ICduJykge1xuICAgICAgICBkZWx0YVkgPSAtZGVsdGFZO1xuICAgICAgfSAvLyBVcGRhdGUgdy9oXG5cblxuICAgICAgdmFyIHdpZHRoID0gX3RoaXMyLnByb3BzLndpZHRoICsgKGNhbkRyYWdYID8gZGVsdGFYIDogMCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3RoaXMyLnByb3BzLmhlaWdodCArIChjYW5EcmFnWSA/IGRlbHRhWSA6IDApOyAvLyBFYXJseSByZXR1cm4gaWYgbm8gY2hhbmdlXG5cbiAgICAgIHZhciB3aWR0aENoYW5nZWQgPSB3aWR0aCAhPT0gX3RoaXMyLnByb3BzLndpZHRoLFxuICAgICAgICAgIGhlaWdodENoYW5nZWQgPSBoZWlnaHQgIT09IF90aGlzMi5wcm9wcy5oZWlnaHQ7XG4gICAgICBpZiAoaGFuZGxlck5hbWUgPT09ICdvblJlc2l6ZScgJiYgIXdpZHRoQ2hhbmdlZCAmJiAhaGVpZ2h0Q2hhbmdlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgX3RoaXMyJHJ1bkNvbnN0cmFpbnRzID0gX3RoaXMyLnJ1bkNvbnN0cmFpbnRzKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICB3aWR0aCA9IF90aGlzMiRydW5Db25zdHJhaW50c1swXTtcbiAgICAgIGhlaWdodCA9IF90aGlzMiRydW5Db25zdHJhaW50c1sxXTtcbiAgICAgIC8vIFNldCB0aGUgYXBwcm9wcmlhdGUgc3RhdGUgZm9yIHRoaXMgaGFuZGxlci5cbiAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgICBpZiAoaGFuZGxlck5hbWUgPT09ICdvblJlc2l6ZVN0YXJ0Jykgey8vIG5vdGhpbmdcbiAgICAgIH0gZWxzZSBpZiAoaGFuZGxlck5hbWUgPT09ICdvblJlc2l6ZVN0b3AnKSB7XG4gICAgICAgIG5ld1N0YXRlLnNsYWNrVyA9IG5ld1N0YXRlLnNsYWNrSCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFYXJseSByZXR1cm4gaWYgbm8gY2hhbmdlIGFmdGVyIGNvbnN0cmFpbnRzXG4gICAgICAgIGlmICh3aWR0aCA9PT0gX3RoaXMyLnByb3BzLndpZHRoICYmIGhlaWdodCA9PT0gX3RoaXMyLnByb3BzLmhlaWdodCkgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFzQ2IgPSB0eXBlb2YgX3RoaXMyLnByb3BzW2hhbmRsZXJOYW1lXSA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgaWYgKGhhc0NiKSB7XG4gICAgICAgIC8vICRGbG93SWdub3JlIGlzbid0IHJlZmluaW5nIHRoaXMgY29ycmVjdGx5IHRvIFN5bnRoZXRpY0V2ZW50XG4gICAgICAgIGlmICh0eXBlb2YgZS5wZXJzaXN0ID09PSAnZnVuY3Rpb24nKSBlLnBlcnNpc3QoKTtcblxuICAgICAgICBfdGhpczIuc2V0U3RhdGUobmV3U3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzW2hhbmRsZXJOYW1lXShlLCB7XG4gICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlOiBheGlzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJSZXNpemVIYW5kbGUgPSBmdW5jdGlvbiByZW5kZXJSZXNpemVIYW5kbGUocmVzaXplSGFuZGxlKSB7XG4gICAgdmFyIGhhbmRsZSA9IHRoaXMucHJvcHMuaGFuZGxlO1xuXG4gICAgaWYgKGhhbmRsZSkge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZShyZXNpemVIYW5kbGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwicmVhY3QtcmVzaXphYmxlLWhhbmRsZSByZWFjdC1yZXNpemFibGUtaGFuZGxlLVwiICsgcmVzaXplSGFuZGxlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGRyYWdnYWJsZU9wdHMgPSBfdGhpcyRwcm9wcy5kcmFnZ2FibGVPcHRzLFxuICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wcy5oZWlnaHQsXG4gICAgICAgIGhhbmRsZVNpemUgPSBfdGhpcyRwcm9wcy5oYW5kbGVTaXplLFxuICAgICAgICBsb2NrQXNwZWN0UmF0aW8gPSBfdGhpcyRwcm9wcy5sb2NrQXNwZWN0UmF0aW8sXG4gICAgICAgIGF4aXMgPSBfdGhpcyRwcm9wcy5heGlzLFxuICAgICAgICBtaW5Db25zdHJhaW50cyA9IF90aGlzJHByb3BzLm1pbkNvbnN0cmFpbnRzLFxuICAgICAgICBtYXhDb25zdHJhaW50cyA9IF90aGlzJHByb3BzLm1heENvbnN0cmFpbnRzLFxuICAgICAgICBvblJlc2l6ZSA9IF90aGlzJHByb3BzLm9uUmVzaXplLFxuICAgICAgICBvblJlc2l6ZVN0b3AgPSBfdGhpcyRwcm9wcy5vblJlc2l6ZVN0b3AsXG4gICAgICAgIG9uUmVzaXplU3RhcnQgPSBfdGhpcyRwcm9wcy5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICByZXNpemVIYW5kbGVzID0gX3RoaXMkcHJvcHMucmVzaXplSGFuZGxlcyxcbiAgICAgICAgdHJhbnNmb3JtU2NhbGUgPSBfdGhpcyRwcm9wcy50cmFuc2Zvcm1TY2FsZSxcbiAgICAgICAgcCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRyYWdnYWJsZU9wdHNcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImhhbmRsZVNpemVcIiwgXCJsb2NrQXNwZWN0UmF0aW9cIiwgXCJheGlzXCIsIFwibWluQ29uc3RyYWludHNcIiwgXCJtYXhDb25zdHJhaW50c1wiLCBcIm9uUmVzaXplXCIsIFwib25SZXNpemVTdG9wXCIsIFwib25SZXNpemVTdGFydFwiLCBcInJlc2l6ZUhhbmRsZXNcIiwgXCJ0cmFuc2Zvcm1TY2FsZVwiXSk7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gcC5jbGFzc05hbWUgPyBwLmNsYXNzTmFtZSArIFwiIHJlYWN0LXJlc2l6YWJsZVwiIDogJ3JlYWN0LXJlc2l6YWJsZSc7IC8vIFdoYXQgd2UncmUgZG9pbmcgaGVyZSBpcyBnZXR0aW5nIHRoZSBjaGlsZCBvZiB0aGlzIGVsZW1lbnQsIGFuZCBjbG9uaW5nIGl0IHdpdGggdGhpcyBlbGVtZW50J3MgcHJvcHMuXG4gICAgLy8gV2UgYXJlIHRoZW4gZGVmaW5pbmcgaXRzIGNoaWxkcmVuIGFzOlxuICAgIC8vIEl0cyBvcmlnaW5hbCBjaGlsZHJlbiAocmVzaXphYmxlJ3MgY2hpbGQncyBjaGlsZHJlbiksIGFuZFxuICAgIC8vIE9uZSBvciBtb3JlIGRyYWdnYWJsZSBoYW5kbGVzLlxuXG4gICAgcmV0dXJuICgwLCBfdXRpbHMuY2xvbmVFbGVtZW50KShjaGlsZHJlbiwgX29iamVjdFNwcmVhZCh7fSwgcCwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbjogW2NoaWxkcmVuLnByb3BzLmNoaWxkcmVuLCByZXNpemVIYW5kbGVzLm1hcChmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3REcmFnZ2FibGUuRHJhZ2dhYmxlQ29yZSwgX2V4dGVuZHMoe30sIGRyYWdnYWJsZU9wdHMsIHtcbiAgICAgICAgICBrZXk6IFwicmVzaXphYmxlSGFuZGxlLVwiICsgaCxcbiAgICAgICAgICBvblN0b3A6IF90aGlzMy5yZXNpemVIYW5kbGVyKCdvblJlc2l6ZVN0b3AnLCBoKSxcbiAgICAgICAgICBvblN0YXJ0OiBfdGhpczMucmVzaXplSGFuZGxlcignb25SZXNpemVTdGFydCcsIGgpLFxuICAgICAgICAgIG9uRHJhZzogX3RoaXMzLnJlc2l6ZUhhbmRsZXIoJ29uUmVzaXplJywgaClcbiAgICAgICAgfSksIF90aGlzMy5yZW5kZXJSZXNpemVIYW5kbGUoaCkpO1xuICAgICAgfSldXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSZXNpemFibGU7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc2l6YWJsZTtcblxuX2RlZmluZVByb3BlcnR5KFJlc2l6YWJsZSwgXCJwcm9wVHlwZXNcIiwge1xuICAvL1xuICAvLyBSZXF1aXJlZCBQcm9wc1xuICAvL1xuICAvLyBSZXF1aXJlIHRoYXQgb25lIGFuZCBvbmx5IG9uZSBjaGlsZCBiZSBwcmVzZW50LlxuICBjaGlsZHJlbjogX3Byb3BUeXBlcy5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgLy8gSW5pdGlhbCB3L2hcbiAgd2lkdGg6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIC8vXG4gIC8vIE9wdGlvbmFsIHByb3BzXG4gIC8vXG4gIC8vIEN1c3RvbSByZXNpemUgaGFuZGxlXG4gIGhhbmRsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmVsZW1lbnQsXG4gIC8vIElmIHlvdSBjaGFuZ2UgdGhpcywgYmUgc3VyZSB0byB1cGRhdGUgeW91ciBjc3NcbiAgaGFuZGxlU2l6ZTogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5LFxuICAvLyBEZWZpbmVzIHdoaWNoIHJlc2l6ZSBoYW5kbGVzIHNob3VsZCBiZSByZW5kZXJlZCAoZGVmYXVsdDogJ3NlJylcbiAgLy8gQWxsb3dzIGZvciBhbnkgY29tYmluYXRpb24gb2Y6XG4gIC8vICdzJyAtIFNvdXRoIGhhbmRsZSAoYm90dG9tLWNlbnRlcilcbiAgLy8gJ3cnIC0gV2VzdCBoYW5kbGUgKGxlZnQtY2VudGVyKVxuICAvLyAnZScgLSBFYXN0IGhhbmRsZSAocmlnaHQtY2VudGVyKVxuICAvLyAnbicgLSBOb3J0aCBoYW5kbGUgKHRvcC1jZW50ZXIpXG4gIC8vICdzdycgLSBTb3V0aHdlc3QgaGFuZGxlIChib3R0b20tbGVmdClcbiAgLy8gJ253JyAtIE5vcnRod2VzdCBoYW5kbGUgKHRvcC1sZWZ0KVxuICAvLyAnc2UnIC0gU291dGhlYXN0IGhhbmRsZSAoYm90dG9tLXJpZ2h0KVxuICAvLyAnbmUnIC0gTm9ydGhlYXN0IGhhbmRsZSAodG9wLWNlbnRlcilcbiAgcmVzaXplSGFuZGxlczogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFsncycsICd3JywgJ2UnLCAnbicsICdzdycsICdudycsICdzZScsICduZSddKSksXG4gIHRyYW5zZm9ybVNjYWxlOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAvLyBJZiB0cnVlLCB3aWxsIG9ubHkgYWxsb3cgd2lkdGgvaGVpZ2h0IHRvIG1vdmUgaW4gbG9ja3N0ZXBcbiAgbG9ja0FzcGVjdFJhdGlvOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgLy8gUmVzdHJpY3RzIHJlc2l6aW5nIHRvIGEgcGFydGljdWxhciBheGlzIChkZWZhdWx0OiAnYm90aCcpXG4gIC8vICdib3RoJyAtIGFsbG93cyByZXNpemluZyBieSB3aWR0aCBvciBoZWlnaHRcbiAgLy8gJ3gnIC0gb25seSBhbGxvd3MgdGhlIHdpZHRoIHRvIGJlIGNoYW5nZWRcbiAgLy8gJ3knIC0gb25seSBhbGxvd3MgdGhlIGhlaWdodCB0byBiZSBjaGFuZ2VkXG4gIC8vICdub25lJyAtIGRpc2FibGVzIHJlc2l6aW5nIGFsdG9nZXRoZXJcbiAgYXhpczogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFsnYm90aCcsICd4JywgJ3knLCAnbm9uZSddKSxcbiAgLy8gTWluL21heCBzaXplXG4gIG1pbkNvbnN0cmFpbnRzOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyKSxcbiAgbWF4Q29uc3RyYWludHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIpLFxuICAvLyBDYWxsYmFja3NcbiAgb25SZXNpemVTdG9wOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgb25SZXNpemVTdGFydDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVzaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gVGhlc2Ugd2lsbCBiZSBwYXNzZWQgd2hvbGVzYWxlIHRvIHJlYWN0LWRyYWdnYWJsZSdzIERyYWdnYWJsZUNvcmVcbiAgZHJhZ2dhYmxlT3B0czogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdFxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgaGFuZGxlU2l6ZTogWzIwLCAyMF0sXG4gIGxvY2tBc3BlY3RSYXRpbzogZmFsc2UsXG4gIGF4aXM6ICdib3RoJyxcbiAgbWluQ29uc3RyYWludHM6IFsyMCwgMjBdLFxuICBtYXhDb25zdHJhaW50czogW0luZmluaXR5LCBJbmZpbml0eV0sXG4gIHJlc2l6ZUhhbmRsZXM6IFsnc2UnXSxcbiAgdHJhbnNmb3JtU2NhbGU6IDFcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX1Jlc2l6YWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUmVzaXphYmxlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vIEFuIGV4YW1wbGUgdXNlIG9mIFJlc2l6YWJsZS5cbnZhciBSZXNpemFibGVCb3ggPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVzaXphYmxlQm94LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXNpemFibGVCb3goKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge1xuICAgICAgd2lkdGg6IF90aGlzLnByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBfdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICBwcm9wc1dpZHRoOiBfdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIHByb3BzSGVpZ2h0OiBfdGhpcy5wcm9wcy5oZWlnaHRcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblJlc2l6ZVwiLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgdmFyIHNpemUgPSBkYXRhLnNpemU7XG4gICAgICB2YXIgd2lkdGggPSBzaXplLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IHNpemUuaGVpZ2h0O1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25SZXNpemUpIHtcbiAgICAgICAgZS5wZXJzaXN0ICYmIGUucGVyc2lzdCgpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHNpemUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25SZXNpemUgJiYgX3RoaXMucHJvcHMub25SZXNpemUoZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc2l6ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBSZXNpemFibGVCb3guZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vIElmIHBhcmVudCBjaGFuZ2VzIGhlaWdodC93aWR0aCwgc2V0IHRoYXQgaW4gb3VyIHN0YXRlLlxuICAgIGlmIChzdGF0ZS5wcm9wc1dpZHRoICE9PSBwcm9wcy53aWR0aCB8fCBzdGF0ZS5wcm9wc0hlaWdodCAhPT0gcHJvcHMuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICBwcm9wc1dpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgcHJvcHNIZWlnaHQ6IHByb3BzLmhlaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUmVzaXphYmxlQm94LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIEJhc2ljIHdyYXBwZXIgYXJvdW5kIGEgUmVzaXphYmxlIGluc3RhbmNlLlxuICAgIC8vIElmIHlvdSB1c2UgUmVzaXphYmxlIGRpcmVjdGx5LCB5b3UgYXJlIHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgY2hpbGQgY29tcG9uZW50XG4gICAgLy8gd2l0aCBhIG5ldyB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGhhbmRsZSA9IF90aGlzJHByb3BzLmhhbmRsZSxcbiAgICAgICAgaGFuZGxlU2l6ZSA9IF90aGlzJHByb3BzLmhhbmRsZVNpemUsXG4gICAgICAgIG9uUmVzaXplID0gX3RoaXMkcHJvcHMub25SZXNpemUsXG4gICAgICAgIG9uUmVzaXplU3RhcnQgPSBfdGhpcyRwcm9wcy5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICBvblJlc2l6ZVN0b3AgPSBfdGhpcyRwcm9wcy5vblJlc2l6ZVN0b3AsXG4gICAgICAgIGRyYWdnYWJsZU9wdHMgPSBfdGhpcyRwcm9wcy5kcmFnZ2FibGVPcHRzLFxuICAgICAgICBtaW5Db25zdHJhaW50cyA9IF90aGlzJHByb3BzLm1pbkNvbnN0cmFpbnRzLFxuICAgICAgICBtYXhDb25zdHJhaW50cyA9IF90aGlzJHByb3BzLm1heENvbnN0cmFpbnRzLFxuICAgICAgICBsb2NrQXNwZWN0UmF0aW8gPSBfdGhpcyRwcm9wcy5sb2NrQXNwZWN0UmF0aW8sXG4gICAgICAgIGF4aXMgPSBfdGhpcyRwcm9wcy5heGlzLFxuICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wcy5oZWlnaHQsXG4gICAgICAgIHJlc2l6ZUhhbmRsZXMgPSBfdGhpcyRwcm9wcy5yZXNpemVIYW5kbGVzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJoYW5kbGVcIiwgXCJoYW5kbGVTaXplXCIsIFwib25SZXNpemVcIiwgXCJvblJlc2l6ZVN0YXJ0XCIsIFwib25SZXNpemVTdG9wXCIsIFwiZHJhZ2dhYmxlT3B0c1wiLCBcIm1pbkNvbnN0cmFpbnRzXCIsIFwibWF4Q29uc3RyYWludHNcIiwgXCJsb2NrQXNwZWN0UmF0aW9cIiwgXCJheGlzXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJyZXNpemVIYW5kbGVzXCJdKTtcblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9SZXNpemFibGUuZGVmYXVsdCwge1xuICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICBoYW5kbGVTaXplOiBoYW5kbGVTaXplLFxuICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgb25SZXNpemVTdGFydDogb25SZXNpemVTdGFydCxcbiAgICAgIG9uUmVzaXplOiB0aGlzLm9uUmVzaXplLFxuICAgICAgb25SZXNpemVTdG9wOiBvblJlc2l6ZVN0b3AsXG4gICAgICBkcmFnZ2FibGVPcHRzOiBkcmFnZ2FibGVPcHRzLFxuICAgICAgbWluQ29uc3RyYWludHM6IG1pbkNvbnN0cmFpbnRzLFxuICAgICAgbWF4Q29uc3RyYWludHM6IG1heENvbnN0cmFpbnRzLFxuICAgICAgbG9ja0FzcGVjdFJhdGlvOiBsb2NrQXNwZWN0UmF0aW8sXG4gICAgICBheGlzOiBheGlzLFxuICAgICAgcmVzaXplSGFuZGxlczogcmVzaXplSGFuZGxlc1xuICAgIH0sIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGggKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0ICsgJ3B4J1xuICAgICAgfVxuICAgIH0sIHByb3BzKSkpO1xuICB9O1xuXG4gIHJldHVybiBSZXNpemFibGVCb3g7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc2l6YWJsZUJveDtcblxuX2RlZmluZVByb3BlcnR5KFJlc2l6YWJsZUJveCwgXCJwcm9wVHlwZXNcIiwge1xuICBoZWlnaHQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIHdpZHRoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG59KTtcblxuX2RlZmluZVByb3BlcnR5KFJlc2l6YWJsZUJveCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBoYW5kbGVTaXplOiBbMjAsIDIwXVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gUmVhY3QuYWRkb25zLmNsb25lV2l0aFByb3BzIGxvb2stYWxpa2UgdGhhdCBtZXJnZXMgc3R5bGUgJiBjbGFzc05hbWUuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgcHJvcHMpIHtcbiAgaWYgKHByb3BzLnN0eWxlICYmIGVsZW1lbnQucHJvcHMuc3R5bGUpIHtcbiAgICBwcm9wcy5zdHlsZSA9IF9vYmplY3RTcHJlYWQoe30sIGVsZW1lbnQucHJvcHMuc3R5bGUsIHt9LCBwcm9wcy5zdHlsZSk7XG4gIH1cblxuICBpZiAocHJvcHMuY2xhc3NOYW1lICYmIGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgcHJvcHMuY2xhc3NOYW1lID0gZWxlbWVudC5wcm9wcy5jbGFzc05hbWUgKyBcIiBcIiArIHByb3BzLmNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgcHJvcHMpO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0QXRcIjpcInRvcFwiLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiRG9uJ3QgaW5zdGFudGlhdGUgUmVzaXphYmxlIGRpcmVjdGx5ISBVc2UgcmVxdWlyZSgncmVhY3QtcmVzaXphYmxlJykuUmVzaXphYmxlXCIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuUmVzaXphYmxlID0gcmVxdWlyZSgnLi9idWlsZC9SZXNpemFibGUnKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuUmVzaXphYmxlQm94ID0gcmVxdWlyZSgnLi9idWlsZC9SZXNpemFibGVCb3gnKS5kZWZhdWx0O1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuaW1wb3J0ICdcXFxccmVhY3QtZ3JpZC1sYXlvdXRcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJ1xcXFxyZWFjdC1yZXNpemFibGVcXFxcY3NzXFxcXHN0eWxlcy5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgY29tcHkgPSAwOyBjb21weSA8IHRoaXMucHJvcHMubnVtUm93czsgY29tcHkgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb21weCA9IDA7IGNvbXB4IDwgdGhpcy5wcm9wcy5udW1Db2x1bW5zOyBjb21weCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBjb21weCArIGNvbXB5ICogdGhpcy5wcm9wcy5udW1Sb3dzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbXAgPSB7aTogYGNvbXBfJHtpbmNyZW1lbnR9YCwgeDogY29tcHgsIHk6IGNvbXB5LCB3OiAxLCBoOiAxLCBpc1Jlc2l6YWJsZTogZmFsc2V9O1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LnB1c2goY29tcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGNvbXBfJHtpbmNyZW1lbnR9YH0gc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVuW2luY3JlbWVudF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsYXlvdXQsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zdCBsYXlvdXQgPSBbXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYScsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDEsIHN0YXRpYzogdHJ1ZX0sXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYicsIHg6IDEsIHk6IDAsIHc6IDMsIGg6IDEsIG1pblc6IDIsIG1heFc6IDR9LFxyXG4gICAgICAgIC8vICAgICB7aTogJ2MnLCB4OiA0LCB5OiAwLCB3OiAxLCBoOiAxfVxyXG4gICAgICAgIC8vIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZExheW91dCBjbGFzc05hbWU9J2xheW91dCcgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH0gY29scz17MTJ9IHJvd0hlaWdodD17MzB9IHdpZHRoPXsxMjAwfSBjb21wYWN0VHlwZT0naG9yaXpvbnRhbCcgbWF4Um93cz17MX0+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYga2V5PSdhJyBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+VGVtcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2InIHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5Wb2x0YWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT0nYycgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlByZXNzdXJlPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgc2V0UHJvcHMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cclxuLy8gICAgICAgICAgICAgICAgIEV4YW1wbGVDb21wb25lbnQ6IHtsYWJlbH0mbmJzcDtcclxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlbmQgdGhlIG5ldyB2YWx1ZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudC5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogc2V0UHJvcHMgaXMgYSBwcm9wIHRoYXQgaXMgYXV0b21hdGljYWxseSBzdXBwbGllZFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBieSBkYXNoJ3MgZnJvbnQtZW5kIChcImRhc2gtcmVuZGVyZXJcIikuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIEluIGEgRGFzaCBhcHAsIHRoaXMgd2lsbCB1cGRhdGUgdGhlIGNvbXBvbmVudCdzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHByb3BzIGFuZCBzZW5kIHRoZSBkYXRhIGJhY2sgdG8gdGhlIFB5dGhvbiBEYXNoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFwcCBzZXJ2ZXIgaWYgYSBjYWxsYmFjayB1c2VzIHRoZSBtb2RpZmllZCBwcm9wIGFzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIElucHV0IG9yIFN0YXRlLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBzZXRQcm9wcyh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbkRyYWdHcmlkLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuRHJhZ0dyaWQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2hpbGRyZW4gaW4gZWFjaCBwYXJ0IG9mIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiByb3dzXHJcbiAgICAgKi9cclxuICAgIG51bVJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcclxuICAgICAqL1xyXG4gICAgbnVtQ29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9