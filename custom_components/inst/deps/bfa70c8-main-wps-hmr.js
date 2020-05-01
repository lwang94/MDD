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
        }, _this.props.children));
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

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: DragGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DragGrid_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DragGrid.react */ "./src/lib/components/DragGrid.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragGrid", function() { return _components_DragGrid_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* eslint-disable import/prefer-default-export */



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9sb2Rhc2guaXNlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJhZ2dhYmxlL2J1aWxkL3dlYi9yZWFjdC1kcmFnZ2FibGUubWluLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9HcmlkSXRlbS5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvYnVpbGQvUmVhY3RHcmlkTGF5b3V0LmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9SZWFjdEdyaWRMYXlvdXRQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL1Jlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL2NhbGN1bGF0ZVV0aWxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9jb21wb25lbnRzL1dpZHRoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL2Zhc3RSR0xQcm9wc0VxdWFsLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9idWlsZC9yZXNwb25zaXZlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2J1aWxkL3V0aWxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzcz84NGMyIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL1Jlc2l6YWJsZS5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL1Jlc2l6YWJsZUJveC5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL3V0aWxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3M/YjhlOCIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2luZGV4LmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL2RyYWdfZ3JpZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9kcmFnX2dyaWQvLi9zcmMvbGliL2NvbXBvbmVudHMvRHJhZ0dyaWQucmVhY3QuanMiLCJ3ZWJwYWNrOi8vZHJhZ19ncmlkLy4vc3JjL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJEcmFnR3JpZCIsInByb3BzIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJjb21weSIsIm51bVJvd3MiLCJjb21weCIsIm51bUNvbHVtbnMiLCJpbmNyZW1lbnQiLCJjb21wIiwiaSIsIngiLCJ5IiwidyIsImgiLCJpc1Jlc2l6YWJsZSIsInB1c2giLCJib3JkZXJTdHlsZSIsInN0YXRlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm51bWJlciIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkREO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsdUJBQXVCLHVCQUF1QixrQ0FBa0MsR0FBRyxvQkFBb0IsK0JBQStCLG1DQUFtQyxHQUFHLGtDQUFrQyxtQ0FBbUMsR0FBRyw2QkFBNkIsZUFBZSwrQkFBK0IsR0FBRywrQ0FBK0MscUJBQXFCLGVBQWUsMkJBQTJCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLDZDQUE2QyxvQkFBb0IsaUJBQWlCLCtCQUErQixlQUFlLDhCQUE4QiwyQkFBMkIsMEJBQTBCLHlCQUF5QixzQkFBc0IsR0FBRyxnREFBZ0QsdUJBQXVCLGdCQUFnQixpQkFBaUIsY0FBYyxhQUFhLHNCQUFzQixHQUFHLHVEQUF1RCxrQkFBa0IsdUJBQXVCLGVBQWUsZ0JBQWdCLGVBQWUsZ0JBQWdCLCtDQUErQyxnREFBZ0QsR0FBRyxxREFBcUQsa0JBQWtCLEdBQUc7QUFDOXVDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGO0FBQ0E7QUFDQSxjQUFjLFFBQVMscUJBQXFCLHVCQUF1QixHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsbUNBQW1DLDJCQUEyQiw4Q0FBOEMsOFZBQThWLHNDQUFzQyx5QkFBeUIsR0FBRyw4QkFBOEIsY0FBYyxZQUFZLHNCQUFzQiw2QkFBNkIsR0FBRyw4QkFBOEIsY0FBYyxhQUFhLHNCQUFzQixHQUFHLDhCQUE4QixXQUFXLFlBQVksc0JBQXNCLDhCQUE4QixHQUFHLDhCQUE4QixXQUFXLGFBQWEsc0JBQXNCLDhCQUE4QixHQUFHLHlEQUF5RCxhQUFhLHNCQUFzQixzQkFBc0IsR0FBRyw2QkFBNkIsWUFBWSw4QkFBOEIsR0FBRyw2QkFBNkIsYUFBYSw4QkFBOEIsR0FBRyx5REFBeUQsY0FBYyx1QkFBdUIsc0JBQXNCLEdBQUcsNkJBQTZCLFdBQVcsOEJBQThCLEdBQUcsNkJBQTZCLGNBQWMsNkJBQTZCLEdBQUc7QUFDcG5EO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixLQUEwQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSyx5QkFBeUI7O0FBRXJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZ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QUFXLEVBQUMsWUFBNUc7QUFBeUgsZUFBTyxFQUFFO0FBQWxJLFNBQ1MsS0FBS2dCLEtBQUwsQ0FBV2YsUUFEcEIsQ0FEQTtBQVFIOzs7O0VBdENpQ2dCLCtDLEdBeUN0QztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBbkIsUUFBUSxDQUFDb0IsWUFBVCxHQUF3QixFQUF4QjtBQUVBcEIsUUFBUSxDQUFDcUIsU0FBVCxHQUFxQjtBQUNqQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKRzs7QUFNakI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBVFA7O0FBV2pCOzs7QUFHQXZCLFVBQVEsRUFBRW9CLGlEQUFTLENBQUNJLEtBZEg7O0FBZ0JqQjs7O0FBR0F0QixTQUFPLEVBQUVrQixpREFBUyxDQUFDSyxNQW5CRjs7QUFxQmpCOzs7QUFHQXJCLFlBQVUsRUFBRWdCLGlEQUFTLENBQUNLLE1BeEJMOztBQTBCakI7Ozs7QUFJQUMsVUFBUSxFQUFFTixpREFBUyxDQUFDTztBQTlCSCxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6ImJmYTcwYzgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LWdyaWQtbGF5b3V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcyBlYXNlO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtIHtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgdG9wO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtLmNzc1RyYW5zZm9ybXMge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtLnJlc2l6aW5nIHtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWxsLWNoYW5nZTogd2lkdGgsIGhlaWdodDtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5yZWFjdC1kcmFnZ2FibGUtZHJhZ2dpbmcge1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIHotaW5kZXg6IDM7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtLmRyb3BwaW5nIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5yZWFjdC1ncmlkLXBsYWNlaG9sZGVyIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xcbiAgei1pbmRleDogMjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzcHg7XFxuICBib3R0b206IDNweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5yZWFjdC1yZXNpemFibGUtaGlkZSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3QtcmVzaXphYmxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQTJJRFlpSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrTFdOdmJHOXlPaU5tWm1abVptWXdNQ0lnZUQwaU1IQjRJaUI1UFNJd2NIZ2lJSGRwWkhSb1BTSTJjSGdpSUdobGFXZG9kRDBpTm5CNElqNDhaeUJ2Y0dGamFYUjVQU0l3TGpNd01pSStQSEJoZEdnZ1pEMGlUU0EySURZZ1RDQXdJRFlnVENBd0lEUXVNaUJNSURRZ05DNHlJRXdnTkM0eUlEUXVNaUJNSURRdU1pQXdJRXdnTmlBd0lFd2dOaUEySUV3Z05pQTJJRm9pSUdacGJHdzlJaU13TURBd01EQWlMejQ4TDJjK1BDOXpkbWMrJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XFxuICBwYWRkaW5nOiAwIDNweCAzcHggMDtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc3cge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGN1cnNvcjogc3ctcmVzaXplO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zZSB7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGN1cnNvcjogc2UtcmVzaXplO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1udyB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY3Vyc29yOiBudy1yZXNpemU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uZSB7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGN1cnNvcjogbmUtcmVzaXplO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtdyxcXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lIHtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtdyB7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZSB7XFxuICByaWdodDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4sXFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtcyB7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbiB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qISBGb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIHJlYWN0LWRyYWdnYWJsZS5taW4uanMuTElDRU5TRS50eHQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcInJlYWN0LWRvbVwiKSxyZXF1aXJlKFwicmVhY3RcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicmVhY3QtZG9tXCIsXCJyZWFjdFwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlJlYWN0RHJhZ2dhYmxlPWUocmVxdWlyZShcInJlYWN0LWRvbVwiKSxyZXF1aXJlKFwicmVhY3RcIikpOnQuUmVhY3REcmFnZ2FibGU9ZSh0LlJlYWN0RE9NLHQuUmVhY3QpfSh3aW5kb3csKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9NCl9KFtmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oNSkoKX0sZnVuY3Rpb24oZSxuKXtlLmV4cG9ydHM9dH0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZX0sZnVuY3Rpb24odCxlLG4pe3ZhciByOyFmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXt9Lmhhc093blByb3BlcnR5O2Z1bmN0aW9uIG8oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciByPWFyZ3VtZW50c1tlXTtpZihyKXt2YXIgYT10eXBlb2YgcjtpZihcInN0cmluZ1wiPT09YXx8XCJudW1iZXJcIj09PWEpdC5wdXNoKHIpO2Vsc2UgaWYoQXJyYXkuaXNBcnJheShyKSYmci5sZW5ndGgpe3ZhciBpPW8uYXBwbHkobnVsbCxyKTtpJiZ0LnB1c2goaSl9ZWxzZSBpZihcIm9iamVjdFwiPT09YSlmb3IodmFyIHUgaW4gciluLmNhbGwocix1KSYmclt1XSYmdC5wdXNoKHUpfX1yZXR1cm4gdC5qb2luKFwiIFwiKX10LmV4cG9ydHM/KG8uZGVmYXVsdD1vLHQuZXhwb3J0cz1vKTp2b2lkIDA9PT0ocj1mdW5jdGlvbigpe3JldHVybiBvfS5hcHBseShlLFtdKSl8fCh0LmV4cG9ydHM9cil9KCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDcpLG89ci5kZWZhdWx0LGE9ci5EcmFnZ2FibGVDb3JlO3QuZXhwb3J0cz1vLHQuZXhwb3J0cy5kZWZhdWx0PW8sdC5leHBvcnRzLkRyYWdnYWJsZUNvcmU9YX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNik7ZnVuY3Rpb24gbygpe31mdW5jdGlvbiBhKCl7fWEucmVzZXRXYXJuaW5nQ2FjaGU9byx0LmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxuLG8sYSxpKXtpZihpIT09cil7dmFyIHU9bmV3IEVycm9yKFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlc1wiKTt0aHJvdyB1Lm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsdX19ZnVuY3Rpb24gZSgpe3JldHVybiB0fXQuaXNSZXF1aXJlZD10O3ZhciBuPXthcnJheTp0LGJvb2w6dCxmdW5jOnQsbnVtYmVyOnQsb2JqZWN0OnQsc3RyaW5nOnQsc3ltYm9sOnQsYW55OnQsYXJyYXlPZjplLGVsZW1lbnQ6dCxlbGVtZW50VHlwZTp0LGluc3RhbmNlT2Y6ZSxub2RlOnQsb2JqZWN0T2Y6ZSxvbmVPZjplLG9uZU9mVHlwZTplLHNoYXBlOmUsZXhhY3Q6ZSxjaGVja1Byb3BUeXBlczphLHJlc2V0V2FybmluZ0NhY2hlOm99O3JldHVybiBuLlByb3BUeXBlcz1uLG59fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPVwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKSxuLmQoZSxcImRlZmF1bHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbXR9KSksbi5kKGUsXCJEcmFnZ2FibGVDb3JlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG50fSkpO3ZhciByPW4oMiksbz1uLm4ociksYT1uKDApLGk9bi5uKGEpLHU9bigxKSxzPW4ubih1KSxjPW4oMyksbD1uLm4oYyk7ZnVuY3Rpb24gZih0LGUpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKylpZihlLmFwcGx5KGUsW3Rbbl0sbix0XSkpcmV0dXJuIHRbbl19ZnVuY3Rpb24gcCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24gZCh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmIWlzTmFOKHQpfWZ1bmN0aW9uIHkodCl7cmV0dXJuIHBhcnNlSW50KHQsMTApfWZ1bmN0aW9uIGcodCxlLG4pe2lmKHRbZV0pcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBcIi5jb25jYXQoZSxcIiBwYXNzZWQgdG8gXCIpLmNvbmNhdChuLFwiIC0gZG8gbm90IHNldCB0aGlzLCBzZXQgaXQgb24gdGhlIGNoaWxkLlwiKSl9dmFyIGg9W1wiTW96XCIsXCJXZWJraXRcIixcIk9cIixcIm1zXCJdO2Z1bmN0aW9uIGIodCxlKXtyZXR1cm4gZT9cIlwiLmNvbmNhdChlKS5jb25jYXQoZnVuY3Rpb24odCl7Zm9yKHZhciBlPVwiXCIsbj0hMCxyPTA7cjx0Lmxlbmd0aDtyKyspbj8oZSs9dFtyXS50b1VwcGVyQ2FzZSgpLG49ITEpOlwiLVwiPT09dFtyXT9uPSEwOmUrPXRbcl07cmV0dXJuIGV9KHQpKTp0fXZhciBtPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwidHJhbnNmb3JtXCI7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8dm9pZCAwPT09d2luZG93LmRvY3VtZW50KXJldHVyblwiXCI7dmFyIGU9d2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtpZih0IGluIGUpcmV0dXJuXCJcIjtmb3IodmFyIG49MDtuPGgubGVuZ3RoO24rKylpZihiKHQsaFtuXSlpbiBlKXJldHVybiBoW25dO3JldHVyblwiXCJ9KCk7ZnVuY3Rpb24gdih0LGUpe3ZhciBuPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4scil9cmV0dXJuIG59ZnVuY3Rpb24gdyh0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1udWxsIT1hcmd1bWVudHNbZV0/YXJndW1lbnRzW2VdOnt9O2UlMj92KE9iamVjdChuKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7Tyh0LGUsbltlXSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXModCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6dihPYmplY3QobikpLmZvckVhY2goKGZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLGUpKX0pKX1yZXR1cm4gdH1mdW5jdGlvbiBPKHQsZSxuKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH12YXIgUz1cIlwiO2Z1bmN0aW9uIEQodCxlKXtyZXR1cm4gU3x8KFM9ZihbXCJtYXRjaGVzXCIsXCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3JcIixcIm1vek1hdGNoZXNTZWxlY3RvclwiLFwibXNNYXRjaGVzU2VsZWN0b3JcIixcIm9NYXRjaGVzU2VsZWN0b3JcIl0sKGZ1bmN0aW9uKGUpe3JldHVybiBwKHRbZV0pfSkpKSwhIXAodFtTXSkmJnRbU10oZSl9ZnVuY3Rpb24geCh0LGUsbil7dmFyIHI9dDtkb3tpZihEKHIsZSkpcmV0dXJuITA7aWYocj09PW4pcmV0dXJuITE7cj1yLnBhcmVudE5vZGV9d2hpbGUocik7cmV0dXJuITF9ZnVuY3Rpb24gaih0LGUsbixyKXtpZih0KXt2YXIgbz13KHtjYXB0dXJlOiEwfSxyKTt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKGUsbixvKTp0LmF0dGFjaEV2ZW50P3QuYXR0YWNoRXZlbnQoXCJvblwiK2Usbik6dFtcIm9uXCIrZV09bn19ZnVuY3Rpb24gUCh0LGUsbixyKXtpZih0KXt2YXIgbz13KHtjYXB0dXJlOiEwfSxyKTt0LnJlbW92ZUV2ZW50TGlzdGVuZXI/dC5yZW1vdmVFdmVudExpc3RlbmVyKGUsbixvKTp0LmRldGFjaEV2ZW50P3QuZGV0YWNoRXZlbnQoXCJvblwiK2Usbik6dFtcIm9uXCIrZV09bnVsbH19ZnVuY3Rpb24gRSh0KXt2YXIgZT10LmNsaWVudEhlaWdodCxuPXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybiBlKz15KG4uYm9yZGVyVG9wV2lkdGgpLGUrPXkobi5ib3JkZXJCb3R0b21XaWR0aCl9ZnVuY3Rpb24gVCh0KXt2YXIgZT10LmNsaWVudFdpZHRoLG49dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJuIGUrPXkobi5ib3JkZXJMZWZ0V2lkdGgpLGUrPXkobi5ib3JkZXJSaWdodFdpZHRoKX1mdW5jdGlvbiBOKHQpe3ZhciBlPXQuY2xpZW50SGVpZ2h0LG49dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJuIGUtPXkobi5wYWRkaW5nVG9wKSxlLT15KG4ucGFkZGluZ0JvdHRvbSl9ZnVuY3Rpb24gQyh0KXt2YXIgZT10LmNsaWVudFdpZHRoLG49dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJuIGUtPXkobi5wYWRkaW5nTGVmdCksZS09eShuLnBhZGRpbmdSaWdodCl9ZnVuY3Rpb24gTSh0LGUsbil7dmFyIHI9dC54LG89dC55LGE9XCJ0cmFuc2xhdGUoXCIuY29uY2F0KHIpLmNvbmNhdChuLFwiLFwiKS5jb25jYXQobykuY29uY2F0KG4sXCIpXCIpO2lmKGUpe3ZhciBpPVwiXCIuY29uY2F0KFwic3RyaW5nXCI9PXR5cGVvZiBlLng/ZS54OmUueCtuKSx1PVwiXCIuY29uY2F0KFwic3RyaW5nXCI9PXR5cGVvZiBlLnk/ZS55OmUueStuKTthPVwidHJhbnNsYXRlKFwiLmNvbmNhdChpLFwiLCBcIikuY29uY2F0KHUsXCIpXCIpK2F9cmV0dXJuIGF9ZnVuY3Rpb24gayh0KXtyZXR1cm4gdC50YXJnZXRUb3VjaGVzJiZ0LnRhcmdldFRvdWNoZXNbMF0/dC50YXJnZXRUb3VjaGVzWzBdLmlkZW50aWZpZXI6dC5jaGFuZ2VkVG91Y2hlcyYmdC5jaGFuZ2VkVG91Y2hlc1swXT90LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXI6dm9pZCAwfWZ1bmN0aW9uIF8odCl7aWYodCl7dmFyIGUsbixyPXQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWxcIik7cnx8KChyPXQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKS50eXBlPVwidGV4dC9jc3NcIixyLmlkPVwicmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsXCIsci5pbm5lckhUTUw9XCIucmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbiAqOjotbW96LXNlbGVjdGlvbiB7YWxsOiBpbmhlcml0O31cXG5cIixyLmlubmVySFRNTCs9XCIucmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbiAqOjpzZWxlY3Rpb24ge2FsbDogaW5oZXJpdDt9XFxuXCIsdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQocikpLHQuYm9keSYmKGU9dC5ib2R5LG49XCJyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uXCIsZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKG4pOmUuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoXCIoPzpefFxcXFxzKVwiLmNvbmNhdChuLFwiKD8hXFxcXFMpXCIpKSl8fChlLmNsYXNzTmFtZSs9XCIgXCIuY29uY2F0KG4pKSl9fWZ1bmN0aW9uIFIodCl7dmFyIGUsbjtpZih0KXRyeXtpZih0LmJvZHkmJihlPXQuYm9keSxuPVwicmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvblwiLGUuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LnJlbW92ZShuKTplLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzpefFxcXFxzKVwiLmNvbmNhdChuLFwiKD8hXFxcXFMpXCIpLFwiZ1wiKSxcIlwiKSksdC5zZWxlY3Rpb24pdC5zZWxlY3Rpb24uZW1wdHkoKTtlbHNle3ZhciByPSh0LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpO3ImJlwiQ2FyZXRcIiE9PXIudHlwZSYmci5yZW1vdmVBbGxSYW5nZXMoKX19Y2F0Y2godCl7fX1mdW5jdGlvbiBYKHQsZSxuKXtyZXR1cm5bTWF0aC5yb3VuZChlL3RbMF0pKnRbMF0sTWF0aC5yb3VuZChuL3RbMV0pKnRbMV1dfWZ1bmN0aW9uIFkodCl7cmV0dXJuXCJib3RoXCI9PT10LnByb3BzLmF4aXN8fFwieFwiPT09dC5wcm9wcy5heGlzfWZ1bmN0aW9uIEEodCl7cmV0dXJuXCJib3RoXCI9PT10LnByb3BzLmF4aXN8fFwieVwiPT09dC5wcm9wcy5heGlzfWZ1bmN0aW9uIEwodCxlLG4pe3ZhciByPVwibnVtYmVyXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIHQudGFyZ2V0VG91Y2hlcyYmZih0LnRhcmdldFRvdWNoZXMsKGZ1bmN0aW9uKHQpe3JldHVybiBlPT09dC5pZGVudGlmaWVyfSkpfHx0LmNoYW5nZWRUb3VjaGVzJiZmKHQuY2hhbmdlZFRvdWNoZXMsKGZ1bmN0aW9uKHQpe3JldHVybiBlPT09dC5pZGVudGlmaWVyfSkpfSh0LGUpOm51bGw7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUmJiFyKXJldHVybiBudWxsO3ZhciBvPVYobik7cmV0dXJuIGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lPT09ZS5vd25lckRvY3VtZW50LmJvZHk/e2xlZnQ6MCx0b3A6MH06ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57eDoodC5jbGllbnRYK2Uuc2Nyb2xsTGVmdC1yLmxlZnQpL24seToodC5jbGllbnRZK2Uuc2Nyb2xsVG9wLXIudG9wKS9ufX0ocnx8dCxuLnByb3BzLm9mZnNldFBhcmVudHx8by5vZmZzZXRQYXJlbnR8fG8ub3duZXJEb2N1bWVudC5ib2R5LG4ucHJvcHMuc2NhbGUpfWZ1bmN0aW9uIEkodCxlLG4pe3ZhciByPXQuc3RhdGUsbz0hZChyLmxhc3RYKSxhPVYodCk7cmV0dXJuIG8/e25vZGU6YSxkZWx0YVg6MCxkZWx0YVk6MCxsYXN0WDplLGxhc3RZOm4seDplLHk6bn06e25vZGU6YSxkZWx0YVg6ZS1yLmxhc3RYLGRlbHRhWTpuLXIubGFzdFksbGFzdFg6ci5sYXN0WCxsYXN0WTpyLmxhc3RZLHg6ZSx5Om59fWZ1bmN0aW9uIFUodCxlKXt2YXIgbj10LnByb3BzLnNjYWxlO3JldHVybntub2RlOmUubm9kZSx4OnQuc3RhdGUueCtlLmRlbHRhWC9uLHk6dC5zdGF0ZS55K2UuZGVsdGFZL24sZGVsdGFYOmUuZGVsdGFYL24sZGVsdGFZOmUuZGVsdGFZL24sbGFzdFg6dC5zdGF0ZS54LGxhc3RZOnQuc3RhdGUueX19ZnVuY3Rpb24gVih0KXt2YXIgZT1zLmEuZmluZERPTU5vZGUodCk7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiPERyYWdnYWJsZUNvcmU+OiBVbm1vdW50ZWQgZHVyaW5nIGV2ZW50IVwiKTtyZXR1cm4gZX1mdW5jdGlvbiBXKHQpe3JldHVybihXPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBCKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxhPXZvaWQgMDt0cnl7Zm9yKHZhciBpLHU9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShpPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChpLnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2godCl7bz0hMCxhPXR9ZmluYWxseXt0cnl7cnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGF9fXJldHVybiBufSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gSCh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20obik7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBIKHQsZSl9KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBIKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gcSh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gRyh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24geih0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT09VyhlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9GKHQpOmV9ZnVuY3Rpb24gRih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH1mdW5jdGlvbiAkKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIEoodCl7cmV0dXJuKEo9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIEsodCxlKXtyZXR1cm4oSz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9ZnVuY3Rpb24gUSh0LGUsbil7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1uLHR9dmFyIFo9e3N0YXJ0OlwidG91Y2hzdGFydFwiLG1vdmU6XCJ0b3VjaG1vdmVcIixzdG9wOlwidG91Y2hlbmRcIn0sdHQ9e3N0YXJ0OlwibW91c2Vkb3duXCIsbW92ZTpcIm1vdXNlbW92ZVwiLHN0b3A6XCJtb3VzZXVwXCJ9LGV0PXR0LG50PWZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmSyh0LGUpfSh1LHQpO3ZhciBlLG4scixhLGk9KGU9dSxmdW5jdGlvbigpe3ZhciB0LG49SihlKTtpZigkKCkpe3ZhciByPUoodGhpcykuY29uc3RydWN0b3I7dD1SZWZsZWN0LmNvbnN0cnVjdChuLGFyZ3VtZW50cyxyKX1lbHNlIHQ9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHoodGhpcyx0KX0pO2Z1bmN0aW9uIHUoKXt2YXIgdDtxKHRoaXMsdSk7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspbltyXT1hcmd1bWVudHNbcl07cmV0dXJuIFEoRih0PWkuY2FsbC5hcHBseShpLFt0aGlzXS5jb25jYXQobikpKSxcInN0YXRlXCIse2RyYWdnaW5nOiExLGxhc3RYOk5hTixsYXN0WTpOYU4sdG91Y2hJZGVudGlmaWVyOm51bGx9KSxRKEYodCksXCJtb3VudGVkXCIsITEpLFEoRih0KSxcImhhbmRsZURyYWdTdGFydFwiLChmdW5jdGlvbihlKXtpZih0LnByb3BzLm9uTW91c2VEb3duKGUpLCF0LnByb3BzLmFsbG93QW55Q2xpY2smJlwibnVtYmVyXCI9PXR5cGVvZiBlLmJ1dHRvbiYmMCE9PWUuYnV0dG9uKXJldHVybiExO3ZhciBuPXMuYS5maW5kRE9NTm9kZShGKHQpKTtpZighbnx8IW4ub3duZXJEb2N1bWVudHx8IW4ub3duZXJEb2N1bWVudC5ib2R5KXRocm93IG5ldyBFcnJvcihcIjxEcmFnZ2FibGVDb3JlPiBub3QgbW91bnRlZCBvbiBEcmFnU3RhcnQhXCIpO3ZhciByPW4ub3duZXJEb2N1bWVudDtpZighKHQucHJvcHMuZGlzYWJsZWR8fCEoZS50YXJnZXQgaW5zdGFuY2VvZiByLmRlZmF1bHRWaWV3Lk5vZGUpfHx0LnByb3BzLmhhbmRsZSYmIXgoZS50YXJnZXQsdC5wcm9wcy5oYW5kbGUsbil8fHQucHJvcHMuY2FuY2VsJiZ4KGUudGFyZ2V0LHQucHJvcHMuY2FuY2VsLG4pKSl7XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGUmJmUucHJldmVudERlZmF1bHQoKTt2YXIgbz1rKGUpO3Quc2V0U3RhdGUoe3RvdWNoSWRlbnRpZmllcjpvfSk7dmFyIGE9TChlLG8sRih0KSk7aWYobnVsbCE9YSl7dmFyIGk9YS54LHU9YS55LGM9SShGKHQpLGksdSk7dC5wcm9wcy5vblN0YXJ0LCExIT09dC5wcm9wcy5vblN0YXJ0KGUsYykmJiExIT09dC5tb3VudGVkJiYodC5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjayYmXyhyKSx0LnNldFN0YXRlKHtkcmFnZ2luZzohMCxsYXN0WDppLGxhc3RZOnV9KSxqKHIsZXQubW92ZSx0LmhhbmRsZURyYWcpLGoocixldC5zdG9wLHQuaGFuZGxlRHJhZ1N0b3ApKX19fSkpLFEoRih0KSxcImhhbmRsZURyYWdcIiwoZnVuY3Rpb24oZSl7dmFyIG49TChlLHQuc3RhdGUudG91Y2hJZGVudGlmaWVyLEYodCkpO2lmKG51bGwhPW4pe3ZhciByPW4ueCxvPW4ueTtpZihBcnJheS5pc0FycmF5KHQucHJvcHMuZ3JpZCkpe3ZhciBhPXItdC5zdGF0ZS5sYXN0WCxpPW8tdC5zdGF0ZS5sYXN0WSx1PUIoWCh0LnByb3BzLmdyaWQsYSxpKSwyKTtpZihhPXVbMF0saT11WzFdLCFhJiYhaSlyZXR1cm47cj10LnN0YXRlLmxhc3RYK2Esbz10LnN0YXRlLmxhc3RZK2l9dmFyIHM9SShGKHQpLHIsbyk7aWYoITEhPT10LnByb3BzLm9uRHJhZyhlLHMpJiYhMSE9PXQubW91bnRlZCl0LnNldFN0YXRlKHtsYXN0WDpyLGxhc3RZOm99KTtlbHNlIHRyeXt0LmhhbmRsZURyYWdTdG9wKG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiKSl9Y2F0Y2goZSl7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtjLmluaXRNb3VzZUV2ZW50KFwibW91c2V1cFwiLCEwLCEwLHdpbmRvdywwLDAsMCwwLDAsITEsITEsITEsITEsMCxudWxsKSx0LmhhbmRsZURyYWdTdG9wKGMpfX19KSksUShGKHQpLFwiaGFuZGxlRHJhZ1N0b3BcIiwoZnVuY3Rpb24oZSl7aWYodC5zdGF0ZS5kcmFnZ2luZyl7dmFyIG49TChlLHQuc3RhdGUudG91Y2hJZGVudGlmaWVyLEYodCkpO2lmKG51bGwhPW4pe3ZhciByPW4ueCxvPW4ueSxhPUkoRih0KSxyLG8pO2lmKCExPT09dC5wcm9wcy5vblN0b3AoZSxhKXx8ITE9PT10Lm1vdW50ZWQpcmV0dXJuITE7dmFyIGk9cy5hLmZpbmRET01Ob2RlKEYodCkpO2kmJnQucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2smJlIoaS5vd25lckRvY3VtZW50KSx0LnNldFN0YXRlKHtkcmFnZ2luZzohMSxsYXN0WDpOYU4sbGFzdFk6TmFOfSksaSYmKFAoaS5vd25lckRvY3VtZW50LGV0Lm1vdmUsdC5oYW5kbGVEcmFnKSxQKGkub3duZXJEb2N1bWVudCxldC5zdG9wLHQuaGFuZGxlRHJhZ1N0b3ApKX19fSkpLFEoRih0KSxcIm9uTW91c2VEb3duXCIsKGZ1bmN0aW9uKGUpe3JldHVybiBldD10dCx0LmhhbmRsZURyYWdTdGFydChlKX0pKSxRKEYodCksXCJvbk1vdXNlVXBcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIGV0PXR0LHQuaGFuZGxlRHJhZ1N0b3AoZSl9KSksUShGKHQpLFwib25Ub3VjaFN0YXJ0XCIsKGZ1bmN0aW9uKGUpe3JldHVybiBldD1aLHQuaGFuZGxlRHJhZ1N0YXJ0KGUpfSkpLFEoRih0KSxcIm9uVG91Y2hFbmRcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIGV0PVosdC5oYW5kbGVEcmFnU3RvcChlKX0pKSx0fXJldHVybiBuPXUsKHI9W3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5tb3VudGVkPSEwO3ZhciB0PXMuYS5maW5kRE9NTm9kZSh0aGlzKTt0JiZqKHQsWi5zdGFydCx0aGlzLm9uVG91Y2hTdGFydCx7cGFzc2l2ZTohMX0pfX0se2tleTpcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm1vdW50ZWQ9ITE7dmFyIHQ9cy5hLmZpbmRET01Ob2RlKHRoaXMpO2lmKHQpe3ZhciBlPXQub3duZXJEb2N1bWVudDtQKGUsdHQubW92ZSx0aGlzLmhhbmRsZURyYWcpLFAoZSxaLm1vdmUsdGhpcy5oYW5kbGVEcmFnKSxQKGUsdHQuc3RvcCx0aGlzLmhhbmRsZURyYWdTdG9wKSxQKGUsWi5zdG9wLHRoaXMuaGFuZGxlRHJhZ1N0b3ApLFAodCxaLnN0YXJ0LHRoaXMub25Ub3VjaFN0YXJ0LHtwYXNzaXZlOiExfSksdGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjayYmUihlKX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gby5hLmNsb25lRWxlbWVudChvLmEuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSx7b25Nb3VzZURvd246dGhpcy5vbk1vdXNlRG93bixvbk1vdXNlVXA6dGhpcy5vbk1vdXNlVXAsb25Ub3VjaEVuZDp0aGlzLm9uVG91Y2hFbmR9KX19XSkmJkcobi5wcm90b3R5cGUsciksYSYmRyhuLGEpLHV9KG8uYS5Db21wb25lbnQpO2Z1bmN0aW9uIHJ0KHQpe3JldHVybihydD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gb3QoKXtyZXR1cm4ob3Q9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYodFtyXT1uW3JdKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBhdCh0LGUpe2lmKG51bGw9PXQpcmV0dXJue307dmFyIG4scixvPWZ1bmN0aW9uKHQsZSl7aWYobnVsbD09dClyZXR1cm57fTt2YXIgbixyLG89e30sYT1PYmplY3Qua2V5cyh0KTtmb3Iocj0wO3I8YS5sZW5ndGg7cisrKW49YVtyXSxlLmluZGV4T2Yobik+PTB8fChvW25dPXRbbl0pO3JldHVybiBvfSh0LGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7Zm9yKHI9MDtyPGEubGVuZ3RoO3IrKyluPWFbcl0sZS5pbmRleE9mKG4pPj0wfHxPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxuKSYmKG9bbl09dFtuXSl9cmV0dXJuIG99ZnVuY3Rpb24gaXQodCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdH0odCl8fGZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKSlyZXR1cm47dmFyIG49W10scj0hMCxvPSExLGE9dm9pZCAwO3RyeXtmb3IodmFyIGksdT10W1N5bWJvbC5pdGVyYXRvcl0oKTshKHI9KGk9dS5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGkudmFsdWUpLCFlfHxuLmxlbmd0aCE9PWUpO3I9ITApO31jYXRjaCh0KXtvPSEwLGE9dH1maW5hbGx5e3RyeXtyfHxudWxsPT11LnJldHVybnx8dS5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgYX19cmV0dXJuIG59KHQsZSl8fGZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiB1dCh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20obik7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiB1dCh0LGUpfSh0LGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gdXQodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1mdW5jdGlvbiBzdCh0LGUpe3ZhciBuPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4scil9cmV0dXJuIG59ZnVuY3Rpb24gY3QodCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW2VdP2FyZ3VtZW50c1tlXTp7fTtlJTI/c3QoT2JqZWN0KG4pLCEwKS5mb3JFYWNoKChmdW5jdGlvbihlKXtidCh0LGUsbltlXSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXModCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6c3QoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gbHQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fWZ1bmN0aW9uIGZ0KHQsZSxuKXtyZXR1cm4gZSYmbHQodC5wcm90b3R5cGUsZSksbiYmbHQodCxuKSx0fWZ1bmN0aW9uIHB0KHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPT1ydChlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9kdCh0KTplfWZ1bmN0aW9uIGR0KHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fWZ1bmN0aW9uIHl0KCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIGd0KHQpe3JldHVybihndD1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSkodCl9ZnVuY3Rpb24gaHQodCxlKXtyZXR1cm4oaHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIGJ0KHQsZSxuKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH1RKG50LFwiZGlzcGxheU5hbWVcIixcIkRyYWdnYWJsZUNvcmVcIiksUShudCxcInByb3BUeXBlc1wiLHthbGxvd0FueUNsaWNrOmkuYS5ib29sLGRpc2FibGVkOmkuYS5ib29sLGVuYWJsZVVzZXJTZWxlY3RIYWNrOmkuYS5ib29sLG9mZnNldFBhcmVudDpmdW5jdGlvbih0LGUpe2lmKHRbZV0mJjEhPT10W2VdLm5vZGVUeXBlKXRocm93IG5ldyBFcnJvcihcIkRyYWdnYWJsZSdzIG9mZnNldFBhcmVudCBtdXN0IGJlIGEgRE9NIE5vZGUuXCIpfSxncmlkOmkuYS5hcnJheU9mKGkuYS5udW1iZXIpLGhhbmRsZTppLmEuc3RyaW5nLGNhbmNlbDppLmEuc3RyaW5nLG9uU3RhcnQ6aS5hLmZ1bmMsb25EcmFnOmkuYS5mdW5jLG9uU3RvcDppLmEuZnVuYyxvbk1vdXNlRG93bjppLmEuZnVuYyxzY2FsZTppLmEubnVtYmVyLGNsYXNzTmFtZTpnLHN0eWxlOmcsdHJhbnNmb3JtOmd9KSxRKG50LFwiZGVmYXVsdFByb3BzXCIse2FsbG93QW55Q2xpY2s6ITEsY2FuY2VsOm51bGwsZGlzYWJsZWQ6ITEsZW5hYmxlVXNlclNlbGVjdEhhY2s6ITAsb2Zmc2V0UGFyZW50Om51bGwsaGFuZGxlOm51bGwsZ3JpZDpudWxsLHRyYW5zZm9ybTpudWxsLG9uU3RhcnQ6ZnVuY3Rpb24oKXt9LG9uRHJhZzpmdW5jdGlvbigpe30sb25TdG9wOmZ1bmN0aW9uKCl7fSxvbk1vdXNlRG93bjpmdW5jdGlvbigpe30sc2NhbGU6MX0pO3ZhciBtdD1mdW5jdGlvbih0KXshZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJmh0KHQsZSl9KHIsdCk7dmFyIGUsbj0oZT1yLGZ1bmN0aW9uKCl7dmFyIHQsbj1ndChlKTtpZih5dCgpKXt2YXIgcj1ndCh0aGlzKS5jb25zdHJ1Y3Rvcjt0PVJlZmxlY3QuY29uc3RydWN0KG4sYXJndW1lbnRzLHIpfWVsc2UgdD1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcHQodGhpcyx0KX0pO2Z1bmN0aW9uIHIodCl7dmFyIGU7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxyKSxidChkdChlPW4uY2FsbCh0aGlzLHQpKSxcIm9uRHJhZ1N0YXJ0XCIsKGZ1bmN0aW9uKHQsbil7aWYoITE9PT1lLnByb3BzLm9uU3RhcnQodCxVKGR0KGUpLG4pKSlyZXR1cm4hMTtlLnNldFN0YXRlKHtkcmFnZ2luZzohMCxkcmFnZ2VkOiEwfSl9KSksYnQoZHQoZSksXCJvbkRyYWdcIiwoZnVuY3Rpb24odCxuKXtpZighZS5zdGF0ZS5kcmFnZ2luZylyZXR1cm4hMTt2YXIgcj1VKGR0KGUpLG4pLG89e3g6ci54LHk6ci55fTtpZihlLnByb3BzLmJvdW5kcyl7dmFyIGE9by54LGk9by55O28ueCs9ZS5zdGF0ZS5zbGFja1gsby55Kz1lLnN0YXRlLnNsYWNrWTt2YXIgdT1pdChmdW5jdGlvbih0LGUsbil7aWYoIXQucHJvcHMuYm91bmRzKXJldHVybltlLG5dO3ZhciByPXQucHJvcHMuYm91bmRzO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/cjpmdW5jdGlvbih0KXtyZXR1cm57bGVmdDp0LmxlZnQsdG9wOnQudG9wLHJpZ2h0OnQucmlnaHQsYm90dG9tOnQuYm90dG9tfX0ocik7dmFyIG89Vih0KTtpZihcInN0cmluZ1wiPT10eXBlb2Ygcil7dmFyIGEsaT1vLm93bmVyRG9jdW1lbnQsdT1pLmRlZmF1bHRWaWV3O2lmKCEoKGE9XCJwYXJlbnRcIj09PXI/by5wYXJlbnROb2RlOmkucXVlcnlTZWxlY3RvcihyKSlpbnN0YW5jZW9mIHUuSFRNTEVsZW1lbnQpKXRocm93IG5ldyBFcnJvcignQm91bmRzIHNlbGVjdG9yIFwiJytyKydcIiBjb3VsZCBub3QgZmluZCBhbiBlbGVtZW50LicpO3ZhciBzPXUuZ2V0Q29tcHV0ZWRTdHlsZShvKSxjPXUuZ2V0Q29tcHV0ZWRTdHlsZShhKTtyPXtsZWZ0Oi1vLm9mZnNldExlZnQreShjLnBhZGRpbmdMZWZ0KSt5KHMubWFyZ2luTGVmdCksdG9wOi1vLm9mZnNldFRvcCt5KGMucGFkZGluZ1RvcCkreShzLm1hcmdpblRvcCkscmlnaHQ6QyhhKS1UKG8pLW8ub2Zmc2V0TGVmdCt5KGMucGFkZGluZ1JpZ2h0KS15KHMubWFyZ2luUmlnaHQpLGJvdHRvbTpOKGEpLUUobyktby5vZmZzZXRUb3AreShjLnBhZGRpbmdCb3R0b20pLXkocy5tYXJnaW5Cb3R0b20pfX1yZXR1cm4gZChyLnJpZ2h0KSYmKGU9TWF0aC5taW4oZSxyLnJpZ2h0KSksZChyLmJvdHRvbSkmJihuPU1hdGgubWluKG4sci5ib3R0b20pKSxkKHIubGVmdCkmJihlPU1hdGgubWF4KGUsci5sZWZ0KSksZChyLnRvcCkmJihuPU1hdGgubWF4KG4sci50b3ApKSxbZSxuXX0oZHQoZSksby54LG8ueSksMikscz11WzBdLGM9dVsxXTtvLng9cyxvLnk9YyxvLnNsYWNrWD1lLnN0YXRlLnNsYWNrWCsoYS1vLngpLG8uc2xhY2tZPWUuc3RhdGUuc2xhY2tZKyhpLW8ueSksci54PW8ueCxyLnk9by55LHIuZGVsdGFYPW8ueC1lLnN0YXRlLngsci5kZWx0YVk9by55LWUuc3RhdGUueX1pZighMT09PWUucHJvcHMub25EcmFnKHQscikpcmV0dXJuITE7ZS5zZXRTdGF0ZShvKX0pKSxidChkdChlKSxcIm9uRHJhZ1N0b3BcIiwoZnVuY3Rpb24odCxuKXtpZighZS5zdGF0ZS5kcmFnZ2luZylyZXR1cm4hMTtpZighMT09PWUucHJvcHMub25TdG9wKHQsVShkdChlKSxuKSkpcmV0dXJuITE7dmFyIHI9e2RyYWdnaW5nOiExLHNsYWNrWDowLHNsYWNrWTowfTtpZihCb29sZWFuKGUucHJvcHMucG9zaXRpb24pKXt2YXIgbz1lLnByb3BzLnBvc2l0aW9uLGE9by54LGk9by55O3IueD1hLHIueT1pfWUuc2V0U3RhdGUocil9KSksZS5zdGF0ZT17ZHJhZ2dpbmc6ITEsZHJhZ2dlZDohMSx4OnQucG9zaXRpb24/dC5wb3NpdGlvbi54OnQuZGVmYXVsdFBvc2l0aW9uLngseTp0LnBvc2l0aW9uP3QucG9zaXRpb24ueTp0LmRlZmF1bHRQb3NpdGlvbi55LHByZXZQcm9wc1Bvc2l0aW9uOmN0KHt9LHQucG9zaXRpb24pLHNsYWNrWDowLHNsYWNrWTowLGlzRWxlbWVudFNWRzohMX0sIXQucG9zaXRpb258fHQub25EcmFnfHx0Lm9uU3RvcHx8Y29uc29sZS53YXJuKFwiQSBgcG9zaXRpb25gIHdhcyBhcHBsaWVkIHRvIHRoaXMgPERyYWdnYWJsZT4sIHdpdGhvdXQgZHJhZyBoYW5kbGVycy4gVGhpcyB3aWxsIG1ha2UgdGhpcyBjb21wb25lbnQgZWZmZWN0aXZlbHkgdW5kcmFnZ2FibGUuIFBsZWFzZSBhdHRhY2ggYG9uRHJhZ2Agb3IgYG9uU3RvcGAgaGFuZGxlcnMgc28geW91IGNhbiBhZGp1c3QgdGhlIGBwb3NpdGlvbmAgb2YgdGhpcyBlbGVtZW50LlwiKSxlfXJldHVybiBmdChyLG51bGwsW3trZXk6XCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXQucG9zaXRpb24scj1lLnByZXZQcm9wc1Bvc2l0aW9uO3JldHVybiFufHxyJiZuLng9PT1yLngmJm4ueT09PXIueT9udWxsOnt4Om4ueCx5Om4ueSxwcmV2UHJvcHNQb3NpdGlvbjpjdCh7fSxuKX19fV0pLGZ0KHIsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dm9pZCAwIT09d2luZG93LlNWR0VsZW1lbnQmJnMuYS5maW5kRE9NTm9kZSh0aGlzKWluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQmJnRoaXMuc2V0U3RhdGUoe2lzRWxlbWVudFNWRzohMH0pfX0se2tleTpcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtkcmFnZ2luZzohMX0pfX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLnByb3BzLG49KGUuYXhpcyxlLmJvdW5kcyxlLmNoaWxkcmVuKSxyPWUuZGVmYXVsdFBvc2l0aW9uLGE9ZS5kZWZhdWx0Q2xhc3NOYW1lLGk9ZS5kZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmcsdT1lLmRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkLHM9ZS5wb3NpdGlvbixjPWUucG9zaXRpb25PZmZzZXQsZj0oZS5zY2FsZSxhdChlLFtcImF4aXNcIixcImJvdW5kc1wiLFwiY2hpbGRyZW5cIixcImRlZmF1bHRQb3NpdGlvblwiLFwiZGVmYXVsdENsYXNzTmFtZVwiLFwiZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nXCIsXCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZFwiLFwicG9zaXRpb25cIixcInBvc2l0aW9uT2Zmc2V0XCIsXCJzY2FsZVwiXSkpLHA9e30sZD1udWxsLHk9IUJvb2xlYW4ocyl8fHRoaXMuc3RhdGUuZHJhZ2dpbmcsZz1zfHxyLGg9e3g6WSh0aGlzKSYmeT90aGlzLnN0YXRlLng6Zy54LHk6QSh0aGlzKSYmeT90aGlzLnN0YXRlLnk6Zy55fTt0aGlzLnN0YXRlLmlzRWxlbWVudFNWRz9kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE0odCxlLFwiXCIpfShoLGMpOnA9ZnVuY3Rpb24odCxlKXt2YXIgbj1NKHQsZSxcInB4XCIpO3JldHVybiBPKHt9LGIoXCJ0cmFuc2Zvcm1cIixtKSxuKX0oaCxjKTt2YXIgdj1sKCkobi5wcm9wcy5jbGFzc05hbWV8fFwiXCIsYSwoYnQodD17fSxpLHRoaXMuc3RhdGUuZHJhZ2dpbmcpLGJ0KHQsdSx0aGlzLnN0YXRlLmRyYWdnZWQpLHQpKTtyZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQobnQsb3Qoe30sZix7b25TdGFydDp0aGlzLm9uRHJhZ1N0YXJ0LG9uRHJhZzp0aGlzLm9uRHJhZyxvblN0b3A6dGhpcy5vbkRyYWdTdG9wfSksby5hLmNsb25lRWxlbWVudChvLmEuQ2hpbGRyZW4ub25seShuKSx7Y2xhc3NOYW1lOnYsc3R5bGU6Y3Qoe30sbi5wcm9wcy5zdHlsZSx7fSxwKSx0cmFuc2Zvcm06ZH0pKX19XSkscn0oby5hLkNvbXBvbmVudCk7YnQobXQsXCJkaXNwbGF5TmFtZVwiLFwiRHJhZ2dhYmxlXCIpLGJ0KG10LFwicHJvcFR5cGVzXCIsY3Qoe30sbnQucHJvcFR5cGVzLHtheGlzOmkuYS5vbmVPZihbXCJib3RoXCIsXCJ4XCIsXCJ5XCIsXCJub25lXCJdKSxib3VuZHM6aS5hLm9uZU9mVHlwZShbaS5hLnNoYXBlKHtsZWZ0OmkuYS5udW1iZXIscmlnaHQ6aS5hLm51bWJlcix0b3A6aS5hLm51bWJlcixib3R0b206aS5hLm51bWJlcn0pLGkuYS5zdHJpbmcsaS5hLm9uZU9mKFshMV0pXSksZGVmYXVsdENsYXNzTmFtZTppLmEuc3RyaW5nLGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzppLmEuc3RyaW5nLGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOmkuYS5zdHJpbmcsZGVmYXVsdFBvc2l0aW9uOmkuYS5zaGFwZSh7eDppLmEubnVtYmVyLHk6aS5hLm51bWJlcn0pLHBvc2l0aW9uT2Zmc2V0OmkuYS5zaGFwZSh7eDppLmEub25lT2ZUeXBlKFtpLmEubnVtYmVyLGkuYS5zdHJpbmddKSx5OmkuYS5vbmVPZlR5cGUoW2kuYS5udW1iZXIsaS5hLnN0cmluZ10pfSkscG9zaXRpb246aS5hLnNoYXBlKHt4OmkuYS5udW1iZXIseTppLmEubnVtYmVyfSksY2xhc3NOYW1lOmcsc3R5bGU6Zyx0cmFuc2Zvcm06Z30pKSxidChtdCxcImRlZmF1bHRQcm9wc1wiLGN0KHt9LG50LmRlZmF1bHRQcm9wcyx7YXhpczpcImJvdGhcIixib3VuZHM6ITEsZGVmYXVsdENsYXNzTmFtZTpcInJlYWN0LWRyYWdnYWJsZVwiLGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzpcInJlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZ1wiLGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOlwicmVhY3QtZHJhZ2dhYmxlLWRyYWdnZWRcIixkZWZhdWx0UG9zaXRpb246e3g6MCx5OjB9LHBvc2l0aW9uOm51bGwsc2NhbGU6MX0pKX1dKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LWRyYWdnYWJsZS5taW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0RHJhZ2dhYmxlID0gcmVxdWlyZShcInJlYWN0LWRyYWdnYWJsZVwiKTtcblxudmFyIF9yZWFjdFJlc2l6YWJsZSA9IHJlcXVpcmUoXCJyZWFjdC1yZXNpemFibGVcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF9jYWxjdWxhdGVVdGlscyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVV0aWxzXCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qKlxuICogQW4gaW5kaXZpZHVhbCBpdGVtIHdpdGhpbiBhIFJlYWN0R3JpZExheW91dC5cbiAqL1xudmFyIEdyaWRJdGVtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JpZEl0ZW0oKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZEl0ZW0pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoR3JpZEl0ZW0pKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICByZXNpemluZzogbnVsbCxcbiAgICAgIGRyYWdnaW5nOiBudWxsLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY3VycmVudE5vZGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdTdGFydFwiLCBmdW5jdGlvbiAoZVxuICAgIC8qOiBFdmVudCovXG4gICAgLCBfcmVmKSB7XG4gICAgICB2YXIgbm9kZSA9IF9yZWYubm9kZTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMub25EcmFnU3RhcnQpIHJldHVybjtcbiAgICAgIHZhciBuZXdQb3NpdGlvblxuICAgICAgLyo6IFBhcnRpYWxQb3NpdGlvbiovXG4gICAgICA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9OyAvLyBUT0RPOiB0aGlzIHdvbnQgd29yayBvbiBuZXN0ZWQgcGFyZW50c1xuXG4gICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICBpZiAoIW9mZnNldFBhcmVudCkgcmV0dXJuO1xuICAgICAgdmFyIHBhcmVudFJlY3QgPSBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY0xlZnQgPSBjbGllbnRSZWN0LmxlZnQgLyBfdGhpcy5wcm9wcy50cmFuc2Zvcm1TY2FsZTtcbiAgICAgIHZhciBwTGVmdCA9IHBhcmVudFJlY3QubGVmdCAvIF90aGlzLnByb3BzLnRyYW5zZm9ybVNjYWxlO1xuICAgICAgdmFyIGNUb3AgPSBjbGllbnRSZWN0LnRvcCAvIF90aGlzLnByb3BzLnRyYW5zZm9ybVNjYWxlO1xuICAgICAgdmFyIHBUb3AgPSBwYXJlbnRSZWN0LnRvcCAvIF90aGlzLnByb3BzLnRyYW5zZm9ybVNjYWxlO1xuICAgICAgbmV3UG9zaXRpb24ubGVmdCA9IGNMZWZ0IC0gcExlZnQgKyBvZmZzZXRQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgIG5ld1Bvc2l0aW9uLnRvcCA9IGNUb3AgLSBwVG9wICsgb2Zmc2V0UGFyZW50LnNjcm9sbFRvcDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogbmV3UG9zaXRpb25cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX2NhbGNYWSA9ICgwLCBfY2FsY3VsYXRlVXRpbHMuY2FsY1hZKShfdGhpcy5nZXRQb3NpdGlvblBhcmFtcygpLCBuZXdQb3NpdGlvbi50b3AsIG5ld1Bvc2l0aW9uLmxlZnQsIF90aGlzLnByb3BzLncsIF90aGlzLnByb3BzLmgpLFxuICAgICAgICAgIHggPSBfY2FsY1hZLngsXG4gICAgICAgICAgeSA9IF9jYWxjWFkueTtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uRHJhZ1N0YXJ0ICYmIF90aGlzLnByb3BzLm9uRHJhZ1N0YXJ0LmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIF90aGlzLnByb3BzLmksIHgsIHksIHtcbiAgICAgICAgZTogZSxcbiAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgbmV3UG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICwgX3JlZjIpIHtcbiAgICAgIHZhciBub2RlID0gX3JlZjIubm9kZSxcbiAgICAgICAgICBkZWx0YVggPSBfcmVmMi5kZWx0YVgsXG4gICAgICAgICAgZGVsdGFZID0gX3JlZjIuZGVsdGFZO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25EcmFnID0gX3RoaXMkcHJvcHMub25EcmFnLFxuICAgICAgICAgIHRyYW5zZm9ybVNjYWxlID0gX3RoaXMkcHJvcHMudHJhbnNmb3JtU2NhbGU7XG4gICAgICBpZiAoIW9uRHJhZykgcmV0dXJuO1xuICAgICAgZGVsdGFYIC89IHRyYW5zZm9ybVNjYWxlO1xuICAgICAgZGVsdGFZIC89IHRyYW5zZm9ybVNjYWxlO1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uXG4gICAgICAvKjogUGFydGlhbFBvc2l0aW9uKi9cbiAgICAgID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH07XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJvbkRyYWcgY2FsbGVkIGJlZm9yZSBvbkRyYWdTdGFydC5cIik7XG4gICAgICBuZXdQb3NpdGlvbi5sZWZ0ID0gX3RoaXMuc3RhdGUuZHJhZ2dpbmcubGVmdCArIGRlbHRhWDtcbiAgICAgIG5ld1Bvc2l0aW9uLnRvcCA9IF90aGlzLnN0YXRlLmRyYWdnaW5nLnRvcCArIGRlbHRhWTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogbmV3UG9zaXRpb25cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX2NhbGNYWTIgPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNYWSkoX3RoaXMuZ2V0UG9zaXRpb25QYXJhbXMoKSwgbmV3UG9zaXRpb24udG9wLCBuZXdQb3NpdGlvbi5sZWZ0LCBfdGhpcy5wcm9wcy53LCBfdGhpcy5wcm9wcy5oKSxcbiAgICAgICAgICB4ID0gX2NhbGNYWTIueCxcbiAgICAgICAgICB5ID0gX2NhbGNYWTIueTtcblxuICAgICAgcmV0dXJuIG9uRHJhZyAmJiBvbkRyYWcuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgX3RoaXMucHJvcHMuaSwgeCwgeSwge1xuICAgICAgICBlOiBlLFxuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBuZXdQb3NpdGlvbjogbmV3UG9zaXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ1N0b3BcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICwgX3JlZjMpIHtcbiAgICAgIHZhciBub2RlID0gX3JlZjMubm9kZTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMub25EcmFnU3RvcCkgcmV0dXJuO1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uXG4gICAgICAvKjogUGFydGlhbFBvc2l0aW9uKi9cbiAgICAgID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH07XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJvbkRyYWdFbmQgY2FsbGVkIGJlZm9yZSBvbkRyYWdTdGFydC5cIik7XG4gICAgICBuZXdQb3NpdGlvbi5sZWZ0ID0gX3RoaXMuc3RhdGUuZHJhZ2dpbmcubGVmdDtcbiAgICAgIG5ld1Bvc2l0aW9uLnRvcCA9IF90aGlzLnN0YXRlLmRyYWdnaW5nLnRvcDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogbnVsbFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBfY2FsY1hZMyA9ICgwLCBfY2FsY3VsYXRlVXRpbHMuY2FsY1hZKShfdGhpcy5nZXRQb3NpdGlvblBhcmFtcygpLCBuZXdQb3NpdGlvbi50b3AsIG5ld1Bvc2l0aW9uLmxlZnQsIF90aGlzLnByb3BzLncsIF90aGlzLnByb3BzLmgpLFxuICAgICAgICAgIHggPSBfY2FsY1hZMy54LFxuICAgICAgICAgIHkgPSBfY2FsY1hZMy55O1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25EcmFnU3RvcCAmJiBfdGhpcy5wcm9wcy5vbkRyYWdTdG9wLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIF90aGlzLnByb3BzLmksIHgsIHksIHtcbiAgICAgICAgZTogZSxcbiAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgbmV3UG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblJlc2l6ZVN0b3BcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICwgY2FsbGJhY2tEYXRhXG4gICAgLyo6IHsgbm9kZTogSFRNTEVsZW1lbnQsIHNpemU6IFBvc2l0aW9uIH0qL1xuICAgICkge1xuICAgICAgX3RoaXMub25SZXNpemVIYW5kbGVyKGUsIGNhbGxiYWNrRGF0YSwgXCJvblJlc2l6ZVN0b3BcIik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25SZXNpemVTdGFydFwiLCBmdW5jdGlvbiAoZVxuICAgIC8qOiBFdmVudCovXG4gICAgLCBjYWxsYmFja0RhdGFcbiAgICAvKjogeyBub2RlOiBIVE1MRWxlbWVudCwgc2l6ZTogUG9zaXRpb24gfSovXG4gICAgKSB7XG4gICAgICBfdGhpcy5vblJlc2l6ZUhhbmRsZXIoZSwgY2FsbGJhY2tEYXRhLCBcIm9uUmVzaXplU3RhcnRcIik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25SZXNpemVcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICwgY2FsbGJhY2tEYXRhXG4gICAgLyo6IHsgbm9kZTogSFRNTEVsZW1lbnQsIHNpemU6IFBvc2l0aW9uIH0qL1xuICAgICkge1xuICAgICAgX3RoaXMub25SZXNpemVIYW5kbGVyKGUsIGNhbGxiYWNrRGF0YSwgXCJvblJlc2l6ZVwiKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkSXRlbSwgW3tcbiAgICBrZXk6IFwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHNcbiAgICAvKjogUHJvcHMqL1xuICAgICwgbmV4dFN0YXRlXG4gICAgLyo6IFN0YXRlKi9cbiAgICApIHtcbiAgICAgIC8vIFdlIGNhbid0IGRlZXBseSBjb21wYXJlIGNoaWxkcmVuLiBJZiB0aGUgZGV2ZWxvcGVyIG1lbW9pemVzIHRoZW0sIHdlIGNhblxuICAgICAgLy8gdXNlIHRoaXMgb3B0aW1pemF0aW9uLlxuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbikgcmV0dXJuIHRydWU7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kcm9wcGluZ1Bvc2l0aW9uICE9PSBuZXh0UHJvcHMuZHJvcHBpbmdQb3NpdGlvbikgcmV0dXJuIHRydWU7IC8vIFRPRE8gbWVtb2l6ZSB0aGVzZSBjYWxjdWxhdGlvbnMgc28gdGhleSBkb24ndCB0YWtlIHNvIGxvbmc/XG5cbiAgICAgIHZhciBvbGRQb3NpdGlvbiA9ICgwLCBfY2FsY3VsYXRlVXRpbHMuY2FsY0dyaWRJdGVtUG9zaXRpb24pKHRoaXMuZ2V0UG9zaXRpb25QYXJhbXModGhpcy5wcm9wcyksIHRoaXMucHJvcHMueCwgdGhpcy5wcm9wcy55LCB0aGlzLnByb3BzLncsIHRoaXMucHJvcHMuaCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNHcmlkSXRlbVBvc2l0aW9uKSh0aGlzLmdldFBvc2l0aW9uUGFyYW1zKG5leHRQcm9wcyksIG5leHRQcm9wcy54LCBuZXh0UHJvcHMueSwgbmV4dFByb3BzLncsIG5leHRQcm9wcy5oLCBuZXh0U3RhdGUpO1xuICAgICAgcmV0dXJuICEoMCwgX3V0aWxzLmZhc3RQb3NpdGlvbkVxdWFsKShvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24pIHx8IHRoaXMucHJvcHMudXNlQ1NTVHJhbnNmb3JtcyAhPT0gbmV4dFByb3BzLnVzZUNTU1RyYW5zZm9ybXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5tb3ZlRHJvcHBpbmdJdGVtKHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHNcbiAgICAvKjogUHJvcHMqL1xuICAgICkge1xuICAgICAgdGhpcy5tb3ZlRHJvcHBpbmdJdGVtKHByZXZQcm9wcyk7XG4gICAgfSAvLyBXaGVuIGEgZHJvcHBpbmdQb3NpdGlvbiBpcyBwcmVzZW50LCB0aGlzIG1lYW5zIHdlIHNob3VsZCBmaXJlIGEgbW92ZSBldmVudCwgYXMgaWYgd2UgaGFkIG1vdmVkXG4gICAgLy8gdGhpcyBlbGVtZW50IGJ5IGB4LCB5YCBwaXhlbHMuXG5cbiAgfSwge1xuICAgIGtleTogXCJtb3ZlRHJvcHBpbmdJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVEcm9wcGluZ0l0ZW0ocHJldlByb3BzXG4gICAgLyo6IFByb3BzKi9cbiAgICApIHtcbiAgICAgIHZhciBkcm9wcGluZ1Bvc2l0aW9uID0gdGhpcy5wcm9wcy5kcm9wcGluZ1Bvc2l0aW9uO1xuICAgICAgaWYgKCFkcm9wcGluZ1Bvc2l0aW9uKSByZXR1cm47XG4gICAgICB2YXIgcHJldkRyb3BwaW5nUG9zaXRpb24gPSBwcmV2UHJvcHMuZHJvcHBpbmdQb3NpdGlvbiB8fCB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMFxuICAgICAgfTtcbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuc3RhdGUuZHJhZ2dpbmc7XG5cbiAgICAgIGlmICghdGhpcy5jdXJyZW50Tm9kZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZmluZC1kb20tbm9kZVxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gKChfcmVhY3REb20uZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKVxuICAgICAgICAvKjogYW55Ki9cbiAgICAgICAgKVxuICAgICAgICAvKjogSFRNTEVsZW1lbnQqL1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvdWxkRHJhZyA9IGRyYWdnaW5nICYmIGRyb3BwaW5nUG9zaXRpb24ubGVmdCAhPT0gcHJldkRyb3BwaW5nUG9zaXRpb24ubGVmdCB8fCBkcm9wcGluZ1Bvc2l0aW9uLnRvcCAhPT0gcHJldkRyb3BwaW5nUG9zaXRpb24udG9wO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQoZHJvcHBpbmdQb3NpdGlvbi5lLCB7XG4gICAgICAgICAgbm9kZTogdGhpcy5jdXJyZW50Tm9kZSxcbiAgICAgICAgICBkZWx0YVg6IGRyb3BwaW5nUG9zaXRpb24ubGVmdCxcbiAgICAgICAgICBkZWx0YVk6IGRyb3BwaW5nUG9zaXRpb24udG9wXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzaG91bGREcmFnKSB7XG4gICAgICAgIHZhciBkZWx0YVggPSBkcm9wcGluZ1Bvc2l0aW9uLmxlZnQgLSBkcmFnZ2luZy5sZWZ0O1xuICAgICAgICB2YXIgZGVsdGFZID0gZHJvcHBpbmdQb3NpdGlvbi50b3AgLSBkcmFnZ2luZy50b3A7XG4gICAgICAgIHRoaXMub25EcmFnKGRyb3BwaW5nUG9zaXRpb24uZSwge1xuICAgICAgICAgIG5vZGU6IHRoaXMuY3VycmVudE5vZGUsXG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFBvc2l0aW9uUGFyYW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvc2l0aW9uUGFyYW1zKClcbiAgICAvKjogUG9zaXRpb25QYXJhbXMqL1xuICAgIHtcbiAgICAgIHZhciBwcm9wc1xuICAgICAgLyo6IFByb3BzKi9cbiAgICAgID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29sczogcHJvcHMuY29scyxcbiAgICAgICAgY29udGFpbmVyUGFkZGluZzogcHJvcHMuY29udGFpbmVyUGFkZGluZyxcbiAgICAgICAgY29udGFpbmVyV2lkdGg6IHByb3BzLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICBtYXJnaW46IHByb3BzLm1hcmdpbixcbiAgICAgICAgbWF4Um93czogcHJvcHMubWF4Um93cyxcbiAgICAgICAgcm93SGVpZ2h0OiBwcm9wcy5yb3dIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgd2hlcmUgd2Ugc2V0IHRoZSBncmlkIGl0ZW0ncyBhYnNvbHV0ZSBwbGFjZW1lbnQuIEl0IGdldHMgYSBsaXR0bGUgdHJpY2t5IGJlY2F1c2Ugd2Ugd2FudCB0byBkbyBpdFxuICAgICAqIHdlbGwgd2hlbiBzZXJ2ZXIgcmVuZGVyaW5nLCBhbmQgdGhlIG9ubHkgd2F5IHRvIGRvIHRoYXQgcHJvcGVybHkgaXMgdG8gdXNlIHBlcmNlbnRhZ2Ugd2lkdGgvbGVmdCBiZWNhdXNlXG4gICAgICogd2UgZG9uJ3Qga25vdyBleGFjdGx5IHdoYXQgdGhlIGJyb3dzZXIgdmlld3BvcnQgaXMuXG4gICAgICogVW5mb3J0dW5hdGVseSwgQ1NTIFRyYW5zZm9ybXMsIHdoaWNoIGFyZSBncmVhdCBmb3IgcGVyZm9ybWFuY2UsIGJyZWFrIGluIHRoaXMgaW5zdGFuY2UgYmVjYXVzZSBhIHBlcmNlbnRhZ2VcbiAgICAgKiBsZWZ0IGlzIHJlbGF0aXZlIHRvIHRoZSBpdGVtIGl0c2VsZiwgbm90IGl0cyBjb250YWluZXIhIFNvIHdlIGNhbm5vdCB1c2UgdGhlbSBvbiB0aGUgc2VydmVyIHJlbmRlcmluZyBwYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBwb3MgUG9zaXRpb24gb2JqZWN0IHdpdGggd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgIFN0eWxlIG9iamVjdC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZVN0eWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlKHBvc1xuICAgIC8qOiBQb3NpdGlvbiovXG4gICAgKVxuICAgIC8qOiB7IFtrZXk6IHN0cmluZ106ID9zdHJpbmcgfSovXG4gICAge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdXNlUGVyY2VudGFnZXMgPSBfdGhpcyRwcm9wczIudXNlUGVyY2VudGFnZXMsXG4gICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfdGhpcyRwcm9wczIuY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgdXNlQ1NTVHJhbnNmb3JtcyA9IF90aGlzJHByb3BzMi51c2VDU1NUcmFuc2Zvcm1zO1xuICAgICAgdmFyIHN0eWxlOyAvLyBDU1MgVHJhbnNmb3JtcyBzdXBwb3J0IChkZWZhdWx0KVxuXG4gICAgICBpZiAodXNlQ1NTVHJhbnNmb3Jtcykge1xuICAgICAgICBzdHlsZSA9ICgwLCBfdXRpbHMuc2V0VHJhbnNmb3JtKShwb3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9wLGxlZnQgKHNsb3cpXG4gICAgICAgIHN0eWxlID0gKDAsIF91dGlscy5zZXRUb3BMZWZ0KShwb3MpOyAvLyBUaGlzIGlzIHVzZWQgZm9yIHNlcnZlciByZW5kZXJpbmcuXG5cbiAgICAgICAgaWYgKHVzZVBlcmNlbnRhZ2VzKSB7XG4gICAgICAgICAgc3R5bGUubGVmdCA9ICgwLCBfdXRpbHMucGVyYykocG9zLmxlZnQgLyBjb250YWluZXJXaWR0aCk7XG4gICAgICAgICAgc3R5bGUud2lkdGggPSAoMCwgX3V0aWxzLnBlcmMpKHBvcy53aWR0aCAvIGNvbnRhaW5lcldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1peCBhIERyYWdnYWJsZSBpbnN0YW5jZSBpbnRvIGEgY2hpbGQuXG4gICAgICogQHBhcmFtICB7RWxlbWVudH0gY2hpbGQgICAgQ2hpbGQgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSAgICAgICAgICBDaGlsZCB3cmFwcGVkIGluIERyYWdnYWJsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1peGluRHJhZ2dhYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1peGluRHJhZ2dhYmxlKGNoaWxkXG4gICAgLyo6IFJlYWN0RWxlbWVudDxhbnk+Ki9cbiAgICAsIGlzRHJhZ2dhYmxlXG4gICAgLyo6IGJvb2xlYW4qL1xuICAgIClcbiAgICAvKjogUmVhY3RFbGVtZW50PGFueT4qL1xuICAgIHtcbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdERyYWdnYWJsZS5EcmFnZ2FibGVDb3JlLCB7XG4gICAgICAgIGRpc2FibGVkOiAhaXNEcmFnZ2FibGUsXG4gICAgICAgIG9uU3RhcnQ6IHRoaXMub25EcmFnU3RhcnQsXG4gICAgICAgIG9uRHJhZzogdGhpcy5vbkRyYWcsXG4gICAgICAgIG9uU3RvcDogdGhpcy5vbkRyYWdTdG9wLFxuICAgICAgICBoYW5kbGU6IHRoaXMucHJvcHMuaGFuZGxlLFxuICAgICAgICBjYW5jZWw6IFwiLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGVcIiArICh0aGlzLnByb3BzLmNhbmNlbCA/IFwiLFwiICsgdGhpcy5wcm9wcy5jYW5jZWwgOiBcIlwiKSxcbiAgICAgICAgc2NhbGU6IHRoaXMucHJvcHMudHJhbnNmb3JtU2NhbGVcbiAgICAgIH0sIGNoaWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWl4IGEgUmVzaXphYmxlIGluc3RhbmNlIGludG8gYSBjaGlsZC5cbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBjaGlsZCAgICBDaGlsZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcG9zaXRpb24gIFBvc2l0aW9uIG9iamVjdCAocGl4ZWwgdmFsdWVzKVxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9ICAgICAgICAgIENoaWxkIHdyYXBwZWQgaW4gUmVzaXphYmxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWl4aW5SZXNpemFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWl4aW5SZXNpemFibGUoY2hpbGRcbiAgICAvKjogUmVhY3RFbGVtZW50PGFueT4qL1xuICAgICwgcG9zaXRpb25cbiAgICAvKjogUG9zaXRpb24qL1xuICAgICwgaXNSZXNpemFibGVcbiAgICAvKjogYm9vbGVhbiovXG4gICAgKVxuICAgIC8qOiBSZWFjdEVsZW1lbnQ8YW55PiovXG4gICAge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzMy5jb2xzLFxuICAgICAgICAgIHggPSBfdGhpcyRwcm9wczMueCxcbiAgICAgICAgICBtaW5XID0gX3RoaXMkcHJvcHMzLm1pblcsXG4gICAgICAgICAgbWluSCA9IF90aGlzJHByb3BzMy5taW5ILFxuICAgICAgICAgIG1heFcgPSBfdGhpcyRwcm9wczMubWF4VyxcbiAgICAgICAgICBtYXhIID0gX3RoaXMkcHJvcHMzLm1heEgsXG4gICAgICAgICAgdHJhbnNmb3JtU2NhbGUgPSBfdGhpcyRwcm9wczMudHJhbnNmb3JtU2NhbGU7XG4gICAgICB2YXIgcG9zaXRpb25QYXJhbXMgPSB0aGlzLmdldFBvc2l0aW9uUGFyYW1zKCk7IC8vIFRoaXMgaXMgdGhlIG1heCBwb3NzaWJsZSB3aWR0aCAtIGRvZXNuJ3QgZ28gdG8gaW5maW5pdHkgYmVjYXVzZSBvZiB0aGUgd2lkdGggb2YgdGhlIHdpbmRvd1xuXG4gICAgICB2YXIgbWF4V2lkdGggPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNHcmlkSXRlbVBvc2l0aW9uKShwb3NpdGlvblBhcmFtcywgMCwgMCwgY29scyAtIHgsIDApLndpZHRoOyAvLyBDYWxjdWxhdGUgbWluL21heCBjb25zdHJhaW50cyB1c2luZyBvdXIgbWluICYgbWF4ZXNcblxuICAgICAgdmFyIG1pbnMgPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNHcmlkSXRlbVBvc2l0aW9uKShwb3NpdGlvblBhcmFtcywgMCwgMCwgbWluVywgbWluSCk7XG4gICAgICB2YXIgbWF4ZXMgPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNHcmlkSXRlbVBvc2l0aW9uKShwb3NpdGlvblBhcmFtcywgMCwgMCwgbWF4VywgbWF4SCk7XG4gICAgICB2YXIgbWluQ29uc3RyYWludHMgPSBbbWlucy53aWR0aCwgbWlucy5oZWlnaHRdO1xuICAgICAgdmFyIG1heENvbnN0cmFpbnRzID0gW01hdGgubWluKG1heGVzLndpZHRoLCBtYXhXaWR0aCksIE1hdGgubWluKG1heGVzLmhlaWdodCwgSW5maW5pdHkpXTtcbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFJlc2l6YWJsZS5SZXNpemFibGUsIHtcbiAgICAgICAgZHJhZ2dhYmxlT3B0czoge1xuICAgICAgICAgIGRpc2FibGVkOiAhaXNSZXNpemFibGVcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiBpc1Jlc2l6YWJsZSA/IHVuZGVmaW5lZCA6IFwicmVhY3QtcmVzaXphYmxlLWhpZGVcIixcbiAgICAgICAgd2lkdGg6IHBvc2l0aW9uLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBvc2l0aW9uLmhlaWdodCxcbiAgICAgICAgbWluQ29uc3RyYWludHM6IG1pbkNvbnN0cmFpbnRzLFxuICAgICAgICBtYXhDb25zdHJhaW50czogbWF4Q29uc3RyYWludHMsXG4gICAgICAgIG9uUmVzaXplU3RvcDogdGhpcy5vblJlc2l6ZVN0b3AsXG4gICAgICAgIG9uUmVzaXplU3RhcnQ6IHRoaXMub25SZXNpemVTdGFydCxcbiAgICAgICAgb25SZXNpemU6IHRoaXMub25SZXNpemUsXG4gICAgICAgIHRyYW5zZm9ybVNjYWxlOiB0cmFuc2Zvcm1TY2FsZVxuICAgICAgfSwgY2hpbGQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBvbkRyYWdTdGFydCBldmVudCBoYW5kbGVyXG4gICAgICogQHBhcmFtICB7RXZlbnR9ICBlICAgICAgICAgICAgIGV2ZW50IGRhdGFcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNhbGxiYWNrRGF0YSAgYW4gb2JqZWN0IHdpdGggbm9kZSwgZGVsdGEgYW5kIHBvc2l0aW9uIGluZm9ybWF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblJlc2l6ZUhhbmRsZXJcIixcblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgYXJvdW5kIGRyYWcgZXZlbnRzIHRvIHByb3ZpZGUgbW9yZSB1c2VmdWwgZGF0YS5cbiAgICAgKiBBbGwgZHJhZyBldmVudHMgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gaGFuZGxlciBuYW1lLFxuICAgICAqIHdpdGggdGhlIHNpZ25hdHVyZSAoaW5kZXgsIHgsIHkpLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBoYW5kbGVyTmFtZSBIYW5kbGVyIG5hbWUgdG8gd3JhcC5cbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgIEhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplSGFuZGxlcihlXG4gICAgLyo6IEV2ZW50Ki9cbiAgICAsIF9yZWY0LCBoYW5kbGVyTmFtZVxuICAgIC8qOiBzdHJpbmcqL1xuICAgICkge1xuICAgICAgdmFyIG5vZGUgPSBfcmVmNC5ub2RlLFxuICAgICAgICAgIHNpemUgPSBfcmVmNC5zaXplO1xuICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLnByb3BzW2hhbmRsZXJOYW1lXTtcbiAgICAgIGlmICghaGFuZGxlcikgcmV0dXJuO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzNC5jb2xzLFxuICAgICAgICAgIHggPSBfdGhpcyRwcm9wczQueCxcbiAgICAgICAgICB5ID0gX3RoaXMkcHJvcHM0LnksXG4gICAgICAgICAgaSA9IF90aGlzJHByb3BzNC5pLFxuICAgICAgICAgIG1heFcgPSBfdGhpcyRwcm9wczQubWF4VyxcbiAgICAgICAgICBtaW5XID0gX3RoaXMkcHJvcHM0Lm1pblcsXG4gICAgICAgICAgbWF4SCA9IF90aGlzJHByb3BzNC5tYXhILFxuICAgICAgICAgIG1pbkggPSBfdGhpcyRwcm9wczQubWluSDsgLy8gR2V0IG5ldyBYWVxuXG4gICAgICB2YXIgX2NhbGNXSCA9ICgwLCBfY2FsY3VsYXRlVXRpbHMuY2FsY1dIKSh0aGlzLmdldFBvc2l0aW9uUGFyYW1zKCksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCB4LCB5KSxcbiAgICAgICAgICB3ID0gX2NhbGNXSC53LFxuICAgICAgICAgIGggPSBfY2FsY1dILmg7IC8vIENhcCB3IGF0IG51bUNvbHNcblxuXG4gICAgICB3ID0gTWF0aC5taW4odywgY29scyAtIHgpOyAvLyBFbnN1cmUgdyBpcyBhdCBsZWFzdCAxXG5cbiAgICAgIHcgPSBNYXRoLm1heCh3LCAxKTsgLy8gTWluL21heCBjYXBwaW5nXG5cbiAgICAgIHcgPSBNYXRoLm1heChNYXRoLm1pbih3LCBtYXhXKSwgbWluVyk7XG4gICAgICBoID0gTWF0aC5tYXgoTWF0aC5taW4oaCwgbWF4SCksIG1pbkgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlc2l6aW5nOiBoYW5kbGVyTmFtZSA9PT0gXCJvblJlc2l6ZVN0b3BcIiA/IG51bGwgOiBzaXplXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBpLCB3LCBoLCB7XG4gICAgICAgIGU6IGUsXG4gICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKClcbiAgICAvKjogUmVhY3ROb2RlKi9cbiAgICB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB4ID0gX3RoaXMkcHJvcHM1LngsXG4gICAgICAgICAgeSA9IF90aGlzJHByb3BzNS55LFxuICAgICAgICAgIHcgPSBfdGhpcyRwcm9wczUudyxcbiAgICAgICAgICBoID0gX3RoaXMkcHJvcHM1LmgsXG4gICAgICAgICAgaXNEcmFnZ2FibGUgPSBfdGhpcyRwcm9wczUuaXNEcmFnZ2FibGUsXG4gICAgICAgICAgaXNSZXNpemFibGUgPSBfdGhpcyRwcm9wczUuaXNSZXNpemFibGUsXG4gICAgICAgICAgZHJvcHBpbmdQb3NpdGlvbiA9IF90aGlzJHByb3BzNS5kcm9wcGluZ1Bvc2l0aW9uLFxuICAgICAgICAgIHVzZUNTU1RyYW5zZm9ybXMgPSBfdGhpcyRwcm9wczUudXNlQ1NTVHJhbnNmb3JtcztcbiAgICAgIHZhciBwb3MgPSAoMCwgX2NhbGN1bGF0ZVV0aWxzLmNhbGNHcmlkSXRlbVBvc2l0aW9uKSh0aGlzLmdldFBvc2l0aW9uUGFyYW1zKCksIHgsIHksIHcsIGgsIHRoaXMuc3RhdGUpO1xuXG4gICAgICB2YXIgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pOyAvLyBDcmVhdGUgdGhlIGNoaWxkIGVsZW1lbnQuIFdlIGNsb25lIHRoZSBleGlzdGluZyBlbGVtZW50IGJ1dCBtb2RpZnkgaXRzIGNsYXNzTmFtZSBhbmQgc3R5bGUuXG5cblxuICAgICAgdmFyIG5ld0NoaWxkID0gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKFwicmVhY3QtZ3JpZC1pdGVtXCIsIGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICBzdGF0aWM6IHRoaXMucHJvcHMuc3RhdGljLFxuICAgICAgICAgIHJlc2l6aW5nOiBCb29sZWFuKHRoaXMuc3RhdGUucmVzaXppbmcpLFxuICAgICAgICAgIFwicmVhY3QtZHJhZ2dhYmxlXCI6IGlzRHJhZ2dhYmxlLFxuICAgICAgICAgIFwicmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nXCI6IEJvb2xlYW4odGhpcy5zdGF0ZS5kcmFnZ2luZyksXG4gICAgICAgICAgZHJvcHBpbmc6IEJvb2xlYW4oZHJvcHBpbmdQb3NpdGlvbiksXG4gICAgICAgICAgY3NzVHJhbnNmb3JtczogdXNlQ1NTVHJhbnNmb3Jtc1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gV2UgY2FuIHNldCB0aGUgd2lkdGggYW5kIGhlaWdodCBvbiB0aGUgY2hpbGQsIGJ1dCB1bmZvcnR1bmF0ZWx5IHdlIGNhbid0IHNldCB0aGUgcG9zaXRpb24uXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnByb3BzLnN0eWxlLCB7fSwgY2hpbGQucHJvcHMuc3R5bGUsIHt9LCB0aGlzLmNyZWF0ZVN0eWxlKHBvcykpXG4gICAgICB9KTsgLy8gUmVzaXphYmxlIHN1cHBvcnQuIFRoaXMgaXMgdXN1YWxseSBvbiBidXQgdGhlIHVzZXIgY2FuIHRvZ2dsZSBpdCBvZmYuXG5cblxuICAgICAgbmV3Q2hpbGQgPSB0aGlzLm1peGluUmVzaXphYmxlKG5ld0NoaWxkLCBwb3MsIGlzUmVzaXphYmxlKTsgLy8gRHJhZ2dhYmxlIHN1cHBvcnQuIFRoaXMgaXMgYWx3YXlzIG9uLCBleGNlcHQgZm9yIHdpdGggcGxhY2Vob2xkZXJzLlxuXG4gICAgICBuZXdDaGlsZCA9IHRoaXMubWl4aW5EcmFnZ2FibGUobmV3Q2hpbGQsIGlzRHJhZ2dhYmxlKTtcbiAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZEl0ZW07XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWRJdGVtO1xuXG5fZGVmaW5lUHJvcGVydHkoR3JpZEl0ZW0sIFwicHJvcFR5cGVzXCIsIHtcbiAgLy8gQ2hpbGRyZW4gbXVzdCBiZSBvbmx5IGEgc2luZ2xlIGVsZW1lbnRcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5lbGVtZW50LFxuICAvLyBHZW5lcmFsIGdyaWQgYXR0cmlidXRlc1xuICBjb2xzOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbnRhaW5lcldpZHRoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJvd0hlaWdodDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICBtYXJnaW46IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLFxuICBtYXhSb3dzOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbnRhaW5lclBhZGRpbmc6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLFxuICAvLyBUaGVzZSBhcmUgYWxsIGluIGdyaWQgdW5pdHNcbiAgeDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICB5OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHc6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICAvLyBBbGwgb3B0aW9uYWxcbiAgbWluVzogZnVuY3Rpb24gbWluVyhwcm9wc1xuICAvKjogUHJvcHMqL1xuICAsIHByb3BOYW1lXG4gIC8qOiBzdHJpbmcqL1xuICApIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIG5ldyBFcnJvcihcIm1pbldpZHRoIG5vdCBOdW1iZXJcIik7XG4gICAgaWYgKHZhbHVlID4gcHJvcHMudyB8fCB2YWx1ZSA+IHByb3BzLm1heFcpIHJldHVybiBuZXcgRXJyb3IoXCJtaW5XaWR0aCBsYXJnZXIgdGhhbiBpdGVtIHdpZHRoL21heFdpZHRoXCIpO1xuICB9LFxuICBtYXhXOiBmdW5jdGlvbiBtYXhXKHByb3BzXG4gIC8qOiBQcm9wcyovXG4gICwgcHJvcE5hbWVcbiAgLyo6IHN0cmluZyovXG4gICkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSByZXR1cm4gbmV3IEVycm9yKFwibWF4V2lkdGggbm90IE51bWJlclwiKTtcbiAgICBpZiAodmFsdWUgPCBwcm9wcy53IHx8IHZhbHVlIDwgcHJvcHMubWluVykgcmV0dXJuIG5ldyBFcnJvcihcIm1heFdpZHRoIHNtYWxsZXIgdGhhbiBpdGVtIHdpZHRoL21pbldpZHRoXCIpO1xuICB9LFxuICBtaW5IOiBmdW5jdGlvbiBtaW5IKHByb3BzXG4gIC8qOiBQcm9wcyovXG4gICwgcHJvcE5hbWVcbiAgLyo6IHN0cmluZyovXG4gICkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSByZXR1cm4gbmV3IEVycm9yKFwibWluSGVpZ2h0IG5vdCBOdW1iZXJcIik7XG4gICAgaWYgKHZhbHVlID4gcHJvcHMuaCB8fCB2YWx1ZSA+IHByb3BzLm1heEgpIHJldHVybiBuZXcgRXJyb3IoXCJtaW5IZWlnaHQgbGFyZ2VyIHRoYW4gaXRlbSBoZWlnaHQvbWF4SGVpZ2h0XCIpO1xuICB9LFxuICBtYXhIOiBmdW5jdGlvbiBtYXhIKHByb3BzXG4gIC8qOiBQcm9wcyovXG4gICwgcHJvcE5hbWVcbiAgLyo6IHN0cmluZyovXG4gICkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSByZXR1cm4gbmV3IEVycm9yKFwibWF4SGVpZ2h0IG5vdCBOdW1iZXJcIik7XG4gICAgaWYgKHZhbHVlIDwgcHJvcHMuaCB8fCB2YWx1ZSA8IHByb3BzLm1pbkgpIHJldHVybiBuZXcgRXJyb3IoXCJtYXhIZWlnaHQgc21hbGxlciB0aGFuIGl0ZW0gaGVpZ2h0L21pbkhlaWdodFwiKTtcbiAgfSxcbiAgLy8gSUQgaXMgbmljZSB0byBoYXZlIGZvciBjYWxsYmFja3NcbiAgaTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAvLyBGdW5jdGlvbnNcbiAgb25EcmFnU3RvcDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIG9uRHJhZ1N0YXJ0OiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgb25EcmFnOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgb25SZXNpemVTdG9wOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgb25SZXNpemVTdGFydDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVzaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gRmxhZ3NcbiAgaXNEcmFnZ2FibGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIGlzUmVzaXphYmxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBzdGF0aWM6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAvLyBVc2UgQ1NTIHRyYW5zZm9ybXMgaW5zdGVhZCBvZiB0b3AvbGVmdFxuICB1c2VDU1NUcmFuc2Zvcm1zOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICB0cmFuc2Zvcm1TY2FsZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgLy8gT3RoZXJzXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgLy8gU2VsZWN0b3IgZm9yIGRyYWdnYWJsZSBoYW5kbGVcbiAgaGFuZGxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICAvLyBTZWxlY3RvciBmb3IgZHJhZ2dhYmxlIGNhbmNlbCAoc2VlIHJlYWN0LWRyYWdnYWJsZSlcbiAgY2FuY2VsOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICAvLyBDdXJyZW50IHBvc2l0aW9uIG9mIGEgZHJvcHBpbmcgZWxlbWVudFxuICBkcm9wcGluZ1Bvc2l0aW9uOiBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICAgIGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsZWZ0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdG9wOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSlcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoR3JpZEl0ZW0sIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjYW5jZWw6IFwiXCIsXG4gIGhhbmRsZTogXCJcIixcbiAgbWluSDogMSxcbiAgbWluVzogMSxcbiAgbWF4SDogSW5maW5pdHksXG4gIG1heFc6IEluZmluaXR5LFxuICB0cmFuc2Zvcm1TY2FsZTogMVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfbG9kYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoLmlzZXF1YWxcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVV0aWxzID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVXRpbHNcIik7XG5cbnZhciBfR3JpZEl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0dyaWRJdGVtXCIpKTtcblxudmFyIF9SZWFjdEdyaWRMYXlvdXRQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1JlYWN0R3JpZExheW91dFByb3BUeXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBFbmQgVHlwZXNcbnZhciBsYXlvdXRDbGFzc05hbWUgPSBcInJlYWN0LWdyaWQtbGF5b3V0XCI7XG52YXIgaXNGaXJlZm94ID0gZmFsc2U7IC8vIFRyeS4uLmNhdGNoIHdpbGwgcHJvdGVjdCBmcm9tIG5hdmlnYXRvciBub3QgZXhpc3RpbmcgKGUuZy4gbm9kZSkgb3IgYSBiYWQgaW1wbGVtZW50YXRpb24gb2YgbmF2aWdhdG9yXG5cbnRyeSB7XG4gIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn0gY2F0Y2ggKGUpIHt9XG4vKiBJZ25vcmUgKi9cblxuLyoqXG4gKiBBIHJlYWN0aXZlLCBmbHVpZCBncmlkIGxheW91dCB3aXRoIGRyYWdnYWJsZSwgcmVzaXphYmxlIGNvbXBvbmVudHMuXG4gKi9cblxuXG52YXIgUmVhY3RHcmlkTGF5b3V0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWFjdEdyaWRMYXlvdXQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIC8vIFRPRE8gcHVibGlzaCBpbnRlcm5hbCBSZWFjdENsYXNzIGRpc3BsYXlOYW1lIHRyYW5zZm9ybVxuICAvLyBSZWZhY3RvcmVkIHRvIGFub3RoZXIgbW9kdWxlIHRvIG1ha2Ugd2F5IGZvciBwcmV2YWxcbiAgZnVuY3Rpb24gUmVhY3RHcmlkTGF5b3V0KHByb3BzXG4gIC8qOiBQcm9wcyovXG4gICwgY29udGV4dFxuICAvKjogYW55Ki9cbiAgKVxuICAvKjogdm9pZCovXG4gIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RHcmlkTGF5b3V0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFJlYWN0R3JpZExheW91dCkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIGFjdGl2ZURyYWc6IG51bGwsXG4gICAgICBsYXlvdXQ6ICgwLCBfdXRpbHMuc3luY2hyb25pemVMYXlvdXRXaXRoQ2hpbGRyZW4pKF90aGlzLnByb3BzLmxheW91dCwgX3RoaXMucHJvcHMuY2hpbGRyZW4sIF90aGlzLnByb3BzLmNvbHMsIC8vIExlZ2FjeSBzdXBwb3J0IGZvciB2ZXJ0aWNhbENvbXBhY3Q6IGZhbHNlXG4gICAgICAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKShfdGhpcy5wcm9wcykpLFxuICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgICBvbGREcmFnSXRlbTogbnVsbCxcbiAgICAgIG9sZExheW91dDogbnVsbCxcbiAgICAgIG9sZFJlc2l6ZUl0ZW06IG51bGwsXG4gICAgICBkcm9wcGluZ0RPTU5vZGU6IG51bGwsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkcmFnRW50ZXJDb3VudGVyXCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ092ZXJcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRHJhZ092ZXJFdmVudCovXG4gICAgKSB7XG4gICAgICAvLyB3ZSBzaG91bGQgaWdub3JlIGV2ZW50cyBmcm9tIGxheW91dCdzIGNoaWxkcmVuIGluIEZpcmVmb3hcbiAgICAgIC8vIHRvIGF2b2lkIHVucHJlZGljdGFibGUganVtcGluZyBvZiBhIGRyb3BwaW5nIHBsYWNlaG9sZGVyXG4gICAgICAvLyBGSVhNRSByZW1vdmUgdGhpcyBoYWNrXG4gICAgICBpZiAoaXNGaXJlZm94ICYmIGUubmF0aXZlRXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKGxheW91dENsYXNzTmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZHJvcHBpbmdJdGVtID0gX3RoaXMkcHJvcHMuZHJvcHBpbmdJdGVtLFxuICAgICAgICAgIG1hcmdpbiA9IF90aGlzJHByb3BzLm1hcmdpbixcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHMuY29scyxcbiAgICAgICAgICByb3dIZWlnaHQgPSBfdGhpcyRwcm9wcy5yb3dIZWlnaHQsXG4gICAgICAgICAgbWF4Um93cyA9IF90aGlzJHByb3BzLm1heFJvd3MsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wcy53aWR0aCxcbiAgICAgICAgICBjb250YWluZXJQYWRkaW5nID0gX3RoaXMkcHJvcHMuY29udGFpbmVyUGFkZGluZztcbiAgICAgIHZhciBsYXlvdXQgPSBfdGhpcy5zdGF0ZS5sYXlvdXQ7IC8vIFRoaXMgaXMgcmVsYXRpdmUgdG8gdGhlIERPTSBlbGVtZW50IHRoYXQgdGhpcyBldmVudCBmaXJlZCBmb3IuXG5cbiAgICAgIHZhciBfZSRuYXRpdmVFdmVudCA9IGUubmF0aXZlRXZlbnQsXG4gICAgICAgICAgbGF5ZXJYID0gX2UkbmF0aXZlRXZlbnQubGF5ZXJYLFxuICAgICAgICAgIGxheWVyWSA9IF9lJG5hdGl2ZUV2ZW50LmxheWVyWTtcbiAgICAgIHZhciBkcm9wcGluZ1Bvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiBsYXllclgsXG4gICAgICAgIHRvcDogbGF5ZXJZLFxuICAgICAgICBlOiBlXG4gICAgICB9O1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmRyb3BwaW5nRE9NTm9kZSkge1xuICAgICAgICB2YXIgcG9zaXRpb25QYXJhbXNcbiAgICAgICAgLyo6IFBvc2l0aW9uUGFyYW1zKi9cbiAgICAgICAgPSB7XG4gICAgICAgICAgY29sczogY29scyxcbiAgICAgICAgICBtYXJnaW46IG1hcmdpbixcbiAgICAgICAgICBtYXhSb3dzOiBtYXhSb3dzLFxuICAgICAgICAgIHJvd0hlaWdodDogcm93SGVpZ2h0LFxuICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB3aWR0aCxcbiAgICAgICAgICBjb250YWluZXJQYWRkaW5nOiBjb250YWluZXJQYWRkaW5nIHx8IG1hcmdpblxuICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsY3VsYXRlZFBvc2l0aW9uID0gKDAsIF9jYWxjdWxhdGVVdGlscy5jYWxjWFkpKHBvc2l0aW9uUGFyYW1zLCBsYXllclksIGxheWVyWCwgZHJvcHBpbmdJdGVtLncsIGRyb3BwaW5nSXRlbS5oKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZHJvcHBpbmdET01Ob2RlOiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogZHJvcHBpbmdJdGVtLmlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkcm9wcGluZ1Bvc2l0aW9uOiBkcm9wcGluZ1Bvc2l0aW9uLFxuICAgICAgICAgIGxheW91dDogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsYXlvdXQpLCBbX29iamVjdFNwcmVhZCh7fSwgZHJvcHBpbmdJdGVtLCB7XG4gICAgICAgICAgICB4OiBjYWxjdWxhdGVkUG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IGNhbGN1bGF0ZWRQb3NpdGlvbi55LFxuICAgICAgICAgICAgc3RhdGljOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgICAgfSldKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXMuc3RhdGUuZHJvcHBpbmdQb3NpdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUkZHJvcHBpbmdQID0gX3RoaXMuc3RhdGUuZHJvcHBpbmdQb3NpdGlvbixcbiAgICAgICAgICAgIGxlZnQgPSBfdGhpcyRzdGF0ZSRkcm9wcGluZ1AubGVmdCxcbiAgICAgICAgICAgIHRvcCA9IF90aGlzJHN0YXRlJGRyb3BwaW5nUC50b3A7XG4gICAgICAgIHZhciBzaG91bGRVcGRhdGVQb3NpdGlvbiA9IGxlZnQgIT0gbGF5ZXJYIHx8IHRvcCAhPSBsYXllclk7XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZHJvcHBpbmdQb3NpdGlvbjogZHJvcHBpbmdQb3NpdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVtb3ZlRHJvcHBpbmdQbGFjZWhvbGRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZHJvcHBpbmdJdGVtID0gX3RoaXMkcHJvcHMyLmRyb3BwaW5nSXRlbSxcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHMyLmNvbHM7XG4gICAgICB2YXIgbGF5b3V0ID0gX3RoaXMuc3RhdGUubGF5b3V0O1xuICAgICAgdmFyIG5ld0xheW91dCA9ICgwLCBfdXRpbHMuY29tcGFjdCkobGF5b3V0LmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbC5pICE9PSBkcm9wcGluZ0l0ZW0uaTtcbiAgICAgIH0pLCAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKShfdGhpcy5wcm9wcyksIGNvbHMpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxheW91dDogbmV3TGF5b3V0LFxuICAgICAgICBkcm9wcGluZ0RPTU5vZGU6IG51bGwsXG4gICAgICAgIGFjdGl2ZURyYWc6IG51bGwsXG4gICAgICAgIGRyb3BwaW5nUG9zaXRpb246IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25EcmFnTGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZHJhZ0VudGVyQ291bnRlci0tOyAvLyBvbkRyYWdMZWF2ZSBjYW4gYmUgdHJpZ2dlcmVkIG9uIGVhY2ggbGF5b3V0J3MgY2hpbGQuXG4gICAgICAvLyBCdXQgd2Uga25vdyB0aGF0IGNvdW50IG9mIGRyYWdFbnRlciBhbmQgZHJhZ0xlYXZlIGV2ZW50c1xuICAgICAgLy8gd2lsbCBiZSBiYWxhbmNlZCBhZnRlciBsZWF2aW5nIHRoZSBsYXlvdXQncyBjb250YWluZXJcbiAgICAgIC8vIHNvIHdlIGNhbiBpbmNyZWFzZSBhbmQgZGVjcmVhc2UgY291bnQgb2YgZHJhZ0VudGVyIGFuZFxuICAgICAgLy8gd2hlbiBpdCdsbCBiZSBlcXVhbCB0byAwIHdlJ2xsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXJcblxuICAgICAgaWYgKF90aGlzLmRyYWdFbnRlckNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgX3RoaXMucmVtb3ZlRHJvcHBpbmdQbGFjZWhvbGRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ0VudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmRyYWdFbnRlckNvdW50ZXIrKztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyb3BcIiwgZnVuY3Rpb24gKGVcbiAgICAvKjogRXZlbnQqL1xuICAgICkge1xuICAgICAgdmFyIGRyb3BwaW5nSXRlbSA9IF90aGlzLnByb3BzLmRyb3BwaW5nSXRlbTtcbiAgICAgIHZhciBsYXlvdXQgPSBfdGhpcy5zdGF0ZS5sYXlvdXQ7XG5cbiAgICAgIHZhciBfcmVmID0gbGF5b3V0LmZpbmQoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwuaSA9PT0gZHJvcHBpbmdJdGVtLmk7XG4gICAgICB9KSB8fCB7fSxcbiAgICAgICAgICB4ID0gX3JlZi54LFxuICAgICAgICAgIHkgPSBfcmVmLnksXG4gICAgICAgICAgdyA9IF9yZWYudyxcbiAgICAgICAgICBoID0gX3JlZi5oOyAvLyByZXNldCBncmFnRW50ZXIgY291bnRlciBvbiBkcm9wXG5cblxuICAgICAgX3RoaXMuZHJhZ0VudGVyQ291bnRlciA9IDA7XG5cbiAgICAgIF90aGlzLnJlbW92ZURyb3BwaW5nUGxhY2Vob2xkZXIoKTtcblxuICAgICAgX3RoaXMucHJvcHMub25Ecm9wKHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICAgICAgdzogdyxcbiAgICAgICAgaDogaCxcbiAgICAgICAgZTogZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAoMCwgX3V0aWxzLmF1dG9CaW5kSGFuZGxlcnMpKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBbXCJvbkRyYWdTdGFydFwiLCBcIm9uRHJhZ1wiLCBcIm9uRHJhZ1N0b3BcIiwgXCJvblJlc2l6ZVN0YXJ0XCIsIFwib25SZXNpemVcIiwgXCJvblJlc2l6ZVN0b3BcIl0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWFjdEdyaWRMYXlvdXQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdW50ZWQ6IHRydWVcbiAgICAgIH0pOyAvLyBQb3NzaWJseSBjYWxsIGJhY2sgd2l0aCBsYXlvdXQgb24gbW91bnQuIFRoaXMgc2hvdWxkIGJlIGRvbmUgYWZ0ZXIgY29ycmVjdGluZyB0aGUgbGF5b3V0IHdpZHRoXG4gICAgICAvLyB0byBlbnN1cmUgd2UgZG9uJ3QgcmVyZW5kZXIgd2l0aCB0aGUgd3Jvbmcgd2lkdGguXG5cbiAgICAgIHRoaXMub25MYXlvdXRNYXliZUNoYW5nZWQodGhpcy5zdGF0ZS5sYXlvdXQsIHRoaXMucHJvcHMubGF5b3V0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHNcbiAgICAvKjogUHJvcHMqL1xuICAgICwgbmV4dFN0YXRlXG4gICAgLyo6IFN0YXRlKi9cbiAgICApIHtcbiAgICAgIHJldHVybiAoLy8gTk9URTogdGhpcyBpcyBhbG1vc3QgYWx3YXlzIHVuZXF1YWwuIFRoZXJlZm9yZSB0aGUgb25seSB3YXkgdG8gZ2V0IGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICAvLyBmcm9tIFNDVSBpcyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IG1lbW9pemVzIGNoaWxkcmVuLiBJZiB0aGV5IGRvLCBhbmQgdGhleSBjYW5cbiAgICAgICAgLy8gaGFuZGxlIGNoYW5nZXMgcHJvcGVybHksIHBlcmZvcm1hbmNlIHdpbGwgaW5jcmVhc2UuXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbiB8fCAhKDAsIF91dGlscy5mYXN0UkdMUHJvcHNFcXVhbCkodGhpcy5wcm9wcywgbmV4dFByb3BzLCBfbG9kYXNoLmRlZmF1bHQpIHx8IHRoaXMuc3RhdGUuYWN0aXZlRHJhZyAhPT0gbmV4dFN0YXRlLmFjdGl2ZURyYWcgfHwgdGhpcy5zdGF0ZS5kcm9wcGluZ1Bvc2l0aW9uICE9PSBuZXh0U3RhdGUuZHJvcHBpbmdQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHNcbiAgICAvKjogUHJvcHMqL1xuICAgICwgcHJldlN0YXRlXG4gICAgLyo6IFN0YXRlKi9cbiAgICApIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVEcmFnKSB7XG4gICAgICAgIHZhciBuZXdMYXlvdXQgPSB0aGlzLnN0YXRlLmxheW91dDtcbiAgICAgICAgdmFyIG9sZExheW91dCA9IHByZXZTdGF0ZS5sYXlvdXQ7XG4gICAgICAgIHRoaXMub25MYXlvdXRNYXliZUNoYW5nZWQobmV3TGF5b3V0LCBvbGRMYXlvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIGEgcGl4ZWwgdmFsdWUgZm9yIHRoZSBjb250YWluZXIuXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBDb250YWluZXIgaGVpZ2h0IGluIHBpeGVscy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5lckhlaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWluZXJIZWlnaHQoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuYXV0b1NpemUpIHJldHVybjtcbiAgICAgIHZhciBuYlJvdyA9ICgwLCBfdXRpbHMuYm90dG9tKSh0aGlzLnN0YXRlLmxheW91dCk7XG4gICAgICB2YXIgY29udGFpbmVyUGFkZGluZ1kgPSB0aGlzLnByb3BzLmNvbnRhaW5lclBhZGRpbmcgPyB0aGlzLnByb3BzLmNvbnRhaW5lclBhZGRpbmdbMV0gOiB0aGlzLnByb3BzLm1hcmdpblsxXTtcbiAgICAgIHJldHVybiBuYlJvdyAqIHRoaXMucHJvcHMucm93SGVpZ2h0ICsgKG5iUm93IC0gMSkgKiB0aGlzLnByb3BzLm1hcmdpblsxXSArIGNvbnRhaW5lclBhZGRpbmdZICogMiArIFwicHhcIjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBkcmFnZ2luZyBzdGFydHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaSBJZCBvZiB0aGUgY2hpbGRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBYIHBvc2l0aW9uIG9mIHRoZSBtb3ZlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBwb3NpdGlvbiBvZiB0aGUgbW92ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIG1vdXNlZG93biBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSBUaGUgY3VycmVudCBkcmFnZ2luZyBET00gZWxlbWVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25EcmFnU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnU3RhcnQoaVxuICAgIC8qOiBzdHJpbmcqL1xuICAgICwgeFxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgeVxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgX3JlZjIpIHtcbiAgICAgIHZhciBlID0gX3JlZjIuZSxcbiAgICAgICAgICBub2RlID0gX3JlZjIubm9kZTtcbiAgICAgIHZhciBsYXlvdXQgPSB0aGlzLnN0YXRlLmxheW91dDtcbiAgICAgIHZhciBsID0gKDAsIF91dGlscy5nZXRMYXlvdXRJdGVtKShsYXlvdXQsIGkpO1xuICAgICAgaWYgKCFsKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb2xkRHJhZ0l0ZW06ICgwLCBfdXRpbHMuY2xvbmVMYXlvdXRJdGVtKShsKSxcbiAgICAgICAgb2xkTGF5b3V0OiB0aGlzLnN0YXRlLmxheW91dFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkRyYWdTdGFydChsYXlvdXQsIGwsIGwsIG51bGwsIGUsIG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFYWNoIGRyYWcgbW92ZW1lbnQgY3JlYXRlIGEgbmV3IGRyYWdlbGVtZW50IGFuZCBtb3ZlIHRoZSBlbGVtZW50IHRvIHRoZSBkcmFnZ2VkIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGkgSWQgb2YgdGhlIGNoaWxkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggWCBwb3NpdGlvbiBvZiB0aGUgbW92ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgcG9zaXRpb24gb2YgdGhlIG1vdmVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBtb3VzZWRvd24gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgVGhlIGN1cnJlbnQgZHJhZ2dpbmcgRE9NIGVsZW1lbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uRHJhZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWcoaVxuICAgIC8qOiBzdHJpbmcqL1xuICAgICwgeFxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgeVxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgX3JlZjMpIHtcbiAgICAgIHZhciBlID0gX3JlZjMuZSxcbiAgICAgICAgICBub2RlID0gX3JlZjMubm9kZTtcbiAgICAgIHZhciBvbGREcmFnSXRlbSA9IHRoaXMuc3RhdGUub2xkRHJhZ0l0ZW07XG4gICAgICB2YXIgbGF5b3V0ID0gdGhpcy5zdGF0ZS5sYXlvdXQ7XG4gICAgICB2YXIgY29scyA9IHRoaXMucHJvcHMuY29scztcbiAgICAgIHZhciBsID0gKDAsIF91dGlscy5nZXRMYXlvdXRJdGVtKShsYXlvdXQsIGkpO1xuICAgICAgaWYgKCFsKSByZXR1cm47IC8vIENyZWF0ZSBwbGFjZWhvbGRlciAoZGlzcGxheSBvbmx5KVxuXG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIHc6IGwudyxcbiAgICAgICAgaDogbC5oLFxuICAgICAgICB4OiBsLngsXG4gICAgICAgIHk6IGwueSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRydWUsXG4gICAgICAgIGk6IGlcbiAgICAgIH07IC8vIE1vdmUgdGhlIGVsZW1lbnQgdG8gdGhlIGRyYWdnZWQgbG9jYXRpb24uXG5cbiAgICAgIHZhciBpc1VzZXJBY3Rpb24gPSB0cnVlO1xuICAgICAgbGF5b3V0ID0gKDAsIF91dGlscy5tb3ZlRWxlbWVudCkobGF5b3V0LCBsLCB4LCB5LCBpc1VzZXJBY3Rpb24sIHRoaXMucHJvcHMucHJldmVudENvbGxpc2lvbiwgKDAsIF91dGlscy5jb21wYWN0VHlwZSkodGhpcy5wcm9wcyksIGNvbHMpO1xuICAgICAgdGhpcy5wcm9wcy5vbkRyYWcobGF5b3V0LCBvbGREcmFnSXRlbSwgbCwgcGxhY2Vob2xkZXIsIGUsIG5vZGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxheW91dDogKDAsIF91dGlscy5jb21wYWN0KShsYXlvdXQsICgwLCBfdXRpbHMuY29tcGFjdFR5cGUpKHRoaXMucHJvcHMpLCBjb2xzKSxcbiAgICAgICAgYWN0aXZlRHJhZzogcGxhY2Vob2xkZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIGRyYWdnaW5nIHN0b3BzLCBmaWd1cmUgb3V0IHdoaWNoIHBvc2l0aW9uIHRoZSBlbGVtZW50IGlzIGNsb3Nlc3QgdG8gYW5kIHVwZGF0ZSBpdHMgeCBhbmQgeS5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGkgSW5kZXggb2YgdGhlIGNoaWxkLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFggcG9zaXRpb24gb2YgdGhlIG1vdmVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBZIHBvc2l0aW9uIG9mIHRoZSBtb3ZlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZSBUaGUgbW91c2Vkb3duIGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlIFRoZSBjdXJyZW50IGRyYWdnaW5nIERPTSBlbGVtZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbkRyYWdTdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0b3AoaVxuICAgIC8qOiBzdHJpbmcqL1xuICAgICwgeFxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgeVxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgX3JlZjQpIHtcbiAgICAgIHZhciBlID0gX3JlZjQuZSxcbiAgICAgICAgICBub2RlID0gX3JlZjQubm9kZTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVEcmFnKSByZXR1cm47XG4gICAgICB2YXIgb2xkRHJhZ0l0ZW0gPSB0aGlzLnN0YXRlLm9sZERyYWdJdGVtO1xuICAgICAgdmFyIGxheW91dCA9IHRoaXMuc3RhdGUubGF5b3V0O1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzMy5jb2xzLFxuICAgICAgICAgIHByZXZlbnRDb2xsaXNpb24gPSBfdGhpcyRwcm9wczMucHJldmVudENvbGxpc2lvbjtcbiAgICAgIHZhciBsID0gKDAsIF91dGlscy5nZXRMYXlvdXRJdGVtKShsYXlvdXQsIGkpO1xuICAgICAgaWYgKCFsKSByZXR1cm47IC8vIE1vdmUgdGhlIGVsZW1lbnQgaGVyZVxuXG4gICAgICB2YXIgaXNVc2VyQWN0aW9uID0gdHJ1ZTtcbiAgICAgIGxheW91dCA9ICgwLCBfdXRpbHMubW92ZUVsZW1lbnQpKGxheW91dCwgbCwgeCwgeSwgaXNVc2VyQWN0aW9uLCBwcmV2ZW50Q29sbGlzaW9uLCAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKSh0aGlzLnByb3BzKSwgY29scyk7XG4gICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0b3AobGF5b3V0LCBvbGREcmFnSXRlbSwgbCwgbnVsbCwgZSwgbm9kZSk7IC8vIFNldCBzdGF0ZVxuXG4gICAgICB2YXIgbmV3TGF5b3V0ID0gKDAsIF91dGlscy5jb21wYWN0KShsYXlvdXQsICgwLCBfdXRpbHMuY29tcGFjdFR5cGUpKHRoaXMucHJvcHMpLCBjb2xzKTtcbiAgICAgIHZhciBvbGRMYXlvdXQgPSB0aGlzLnN0YXRlLm9sZExheW91dDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVEcmFnOiBudWxsLFxuICAgICAgICBsYXlvdXQ6IG5ld0xheW91dCxcbiAgICAgICAgb2xkRHJhZ0l0ZW06IG51bGwsXG4gICAgICAgIG9sZExheW91dDogbnVsbFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uTGF5b3V0TWF5YmVDaGFuZ2VkKG5ld0xheW91dCwgb2xkTGF5b3V0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25MYXlvdXRNYXliZUNoYW5nZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25MYXlvdXRNYXliZUNoYW5nZWQobmV3TGF5b3V0XG4gICAgLyo6IExheW91dCovXG4gICAgLCBvbGRMYXlvdXRcbiAgICAvKjogP0xheW91dCovXG4gICAgKSB7XG4gICAgICBpZiAoIW9sZExheW91dCkgb2xkTGF5b3V0ID0gdGhpcy5zdGF0ZS5sYXlvdXQ7XG5cbiAgICAgIGlmICghKDAsIF9sb2Rhc2guZGVmYXVsdCkob2xkTGF5b3V0LCBuZXdMYXlvdXQpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25MYXlvdXRDaGFuZ2UobmV3TGF5b3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KGlcbiAgICAvKjogc3RyaW5nKi9cbiAgICAsIHdcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIGhcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIF9yZWY1KSB7XG4gICAgICB2YXIgZSA9IF9yZWY1LmUsXG4gICAgICAgICAgbm9kZSA9IF9yZWY1Lm5vZGU7XG4gICAgICB2YXIgbGF5b3V0ID0gdGhpcy5zdGF0ZS5sYXlvdXQ7XG4gICAgICB2YXIgbCA9ICgwLCBfdXRpbHMuZ2V0TGF5b3V0SXRlbSkobGF5b3V0LCBpKTtcbiAgICAgIGlmICghbCkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9sZFJlc2l6ZUl0ZW06ICgwLCBfdXRpbHMuY2xvbmVMYXlvdXRJdGVtKShsKSxcbiAgICAgICAgb2xkTGF5b3V0OiB0aGlzLnN0YXRlLmxheW91dFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQobGF5b3V0LCBsLCBsLCBudWxsLCBlLCBub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemUoaVxuICAgIC8qOiBzdHJpbmcqL1xuICAgICwgd1xuICAgIC8qOiBudW1iZXIqL1xuICAgICwgaFxuICAgIC8qOiBudW1iZXIqL1xuICAgICwgX3JlZjYpIHtcbiAgICAgIHZhciBlID0gX3JlZjYuZSxcbiAgICAgICAgICBub2RlID0gX3JlZjYubm9kZTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkc3RhdGUubGF5b3V0LFxuICAgICAgICAgIG9sZFJlc2l6ZUl0ZW0gPSBfdGhpcyRzdGF0ZS5vbGRSZXNpemVJdGVtO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29scyA9IF90aGlzJHByb3BzNC5jb2xzLFxuICAgICAgICAgIHByZXZlbnRDb2xsaXNpb24gPSBfdGhpcyRwcm9wczQucHJldmVudENvbGxpc2lvbjtcbiAgICAgIHZhciBsXG4gICAgICAvKjogP0xheW91dEl0ZW0qL1xuICAgICAgPSAoMCwgX3V0aWxzLmdldExheW91dEl0ZW0pKGxheW91dCwgaSk7XG4gICAgICBpZiAoIWwpIHJldHVybjsgLy8gU29tZXRoaW5nIGxpa2UgcXVhZCB0cmVlIHNob3VsZCBiZSB1c2VkXG4gICAgICAvLyB0byBmaW5kIGNvbGxpc2lvbnMgZmFzdGVyXG5cbiAgICAgIHZhciBoYXNDb2xsaXNpb25zO1xuXG4gICAgICBpZiAocHJldmVudENvbGxpc2lvbikge1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9ICgwLCBfdXRpbHMuZ2V0QWxsQ29sbGlzaW9ucykobGF5b3V0LCBfb2JqZWN0U3ByZWFkKHt9LCBsLCB7XG4gICAgICAgICAgdzogdyxcbiAgICAgICAgICBoOiBoXG4gICAgICAgIH0pKS5maWx0ZXIoZnVuY3Rpb24gKGxheW91dEl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gbGF5b3V0SXRlbS5pICE9PSBsLmk7XG4gICAgICAgIH0pO1xuICAgICAgICBoYXNDb2xsaXNpb25zID0gY29sbGlzaW9ucy5sZW5ndGggPiAwOyAvLyBJZiB3ZSdyZSBjb2xsaWRpbmcsIHdlIG5lZWQgYWRqdXN0IHRoZSBwbGFjZWhvbGRlci5cblxuICAgICAgICBpZiAoaGFzQ29sbGlzaW9ucykge1xuICAgICAgICAgIC8vIGFkanVzdCB3ICYmIGggdG8gbWF4aW11bSBhbGxvd2VkIHNwYWNlXG4gICAgICAgICAgdmFyIGxlYXN0WCA9IEluZmluaXR5LFxuICAgICAgICAgICAgICBsZWFzdFkgPSBJbmZpbml0eTtcbiAgICAgICAgICBjb2xsaXNpb25zLmZvckVhY2goZnVuY3Rpb24gKGxheW91dEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXRJdGVtLnggPiBsLngpIGxlYXN0WCA9IE1hdGgubWluKGxlYXN0WCwgbGF5b3V0SXRlbS54KTtcbiAgICAgICAgICAgIGlmIChsYXlvdXRJdGVtLnkgPiBsLnkpIGxlYXN0WSA9IE1hdGgubWluKGxlYXN0WSwgbGF5b3V0SXRlbS55KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGxlYXN0WCkpIGwudyA9IGxlYXN0WCAtIGwueDtcbiAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGxlYXN0WSkpIGwuaCA9IGxlYXN0WSAtIGwueTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc0NvbGxpc2lvbnMpIHtcbiAgICAgICAgLy8gU2V0IG5ldyB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgICAgICBsLncgPSB3O1xuICAgICAgICBsLmggPSBoO1xuICAgICAgfSAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgZWxlbWVudCAoZGlzcGxheSBvbmx5KVxuXG5cbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IHtcbiAgICAgICAgdzogbC53LFxuICAgICAgICBoOiBsLmgsXG4gICAgICAgIHg6IGwueCxcbiAgICAgICAgeTogbC55LFxuICAgICAgICBzdGF0aWM6IHRydWUsXG4gICAgICAgIGk6IGlcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLm9uUmVzaXplKGxheW91dCwgb2xkUmVzaXplSXRlbSwgbCwgcGxhY2Vob2xkZXIsIGUsIG5vZGUpOyAvLyBSZS1jb21wYWN0IHRoZSBsYXlvdXQgYW5kIHNldCB0aGUgZHJhZyBwbGFjZWhvbGRlci5cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxheW91dDogKDAsIF91dGlscy5jb21wYWN0KShsYXlvdXQsICgwLCBfdXRpbHMuY29tcGFjdFR5cGUpKHRoaXMucHJvcHMpLCBjb2xzKSxcbiAgICAgICAgYWN0aXZlRHJhZzogcGxhY2Vob2xkZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblJlc2l6ZVN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVTdG9wKGlcbiAgICAvKjogc3RyaW5nKi9cbiAgICAsIHdcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIGhcbiAgICAvKjogbnVtYmVyKi9cbiAgICAsIF9yZWY3KSB7XG4gICAgICB2YXIgZSA9IF9yZWY3LmUsXG4gICAgICAgICAgbm9kZSA9IF9yZWY3Lm5vZGU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRzdGF0ZTIubGF5b3V0LFxuICAgICAgICAgIG9sZFJlc2l6ZUl0ZW0gPSBfdGhpcyRzdGF0ZTIub2xkUmVzaXplSXRlbTtcbiAgICAgIHZhciBjb2xzID0gdGhpcy5wcm9wcy5jb2xzO1xuICAgICAgdmFyIGwgPSAoMCwgX3V0aWxzLmdldExheW91dEl0ZW0pKGxheW91dCwgaSk7XG4gICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RvcChsYXlvdXQsIG9sZFJlc2l6ZUl0ZW0sIGwsIG51bGwsIGUsIG5vZGUpOyAvLyBTZXQgc3RhdGVcblxuICAgICAgdmFyIG5ld0xheW91dCA9ICgwLCBfdXRpbHMuY29tcGFjdCkobGF5b3V0LCAoMCwgX3V0aWxzLmNvbXBhY3RUeXBlKSh0aGlzLnByb3BzKSwgY29scyk7XG4gICAgICB2YXIgb2xkTGF5b3V0ID0gdGhpcy5zdGF0ZS5vbGRMYXlvdXQ7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlRHJhZzogbnVsbCxcbiAgICAgICAgbGF5b3V0OiBuZXdMYXlvdXQsXG4gICAgICAgIG9sZFJlc2l6ZUl0ZW06IG51bGwsXG4gICAgICAgIG9sZExheW91dDogbnVsbFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uTGF5b3V0TWF5YmVDaGFuZ2VkKG5ld0xheW91dCwgb2xkTGF5b3V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGxhY2Vob2xkZXIgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IFBsYWNlaG9sZGVyIGRpdi5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYWNlaG9sZGVyKClcbiAgICAvKjogP1JlYWN0RWxlbWVudDxhbnk+Ki9cbiAgICB7XG4gICAgICB2YXIgYWN0aXZlRHJhZyA9IHRoaXMuc3RhdGUuYWN0aXZlRHJhZztcbiAgICAgIGlmICghYWN0aXZlRHJhZykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzNS53aWR0aCxcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHM1LmNvbHMsXG4gICAgICAgICAgbWFyZ2luID0gX3RoaXMkcHJvcHM1Lm1hcmdpbixcbiAgICAgICAgICBjb250YWluZXJQYWRkaW5nID0gX3RoaXMkcHJvcHM1LmNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgICAgcm93SGVpZ2h0ID0gX3RoaXMkcHJvcHM1LnJvd0hlaWdodCxcbiAgICAgICAgICBtYXhSb3dzID0gX3RoaXMkcHJvcHM1Lm1heFJvd3MsXG4gICAgICAgICAgdXNlQ1NTVHJhbnNmb3JtcyA9IF90aGlzJHByb3BzNS51c2VDU1NUcmFuc2Zvcm1zLFxuICAgICAgICAgIHRyYW5zZm9ybVNjYWxlID0gX3RoaXMkcHJvcHM1LnRyYW5zZm9ybVNjYWxlOyAvLyB7Li4udGhpcy5zdGF0ZS5hY3RpdmVEcmFnfSBpcyBwcmV0dHkgc2xvdywgYWN0dWFsbHlcblxuICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0dyaWRJdGVtLmRlZmF1bHQsIHtcbiAgICAgICAgdzogYWN0aXZlRHJhZy53LFxuICAgICAgICBoOiBhY3RpdmVEcmFnLmgsXG4gICAgICAgIHg6IGFjdGl2ZURyYWcueCxcbiAgICAgICAgeTogYWN0aXZlRHJhZy55LFxuICAgICAgICBpOiBhY3RpdmVEcmFnLmksXG4gICAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1ncmlkLXBsYWNlaG9sZGVyXCIsXG4gICAgICAgIGNvbnRhaW5lcldpZHRoOiB3aWR0aCxcbiAgICAgICAgY29sczogY29scyxcbiAgICAgICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcgfHwgbWFyZ2luLFxuICAgICAgICBtYXhSb3dzOiBtYXhSb3dzLFxuICAgICAgICByb3dIZWlnaHQ6IHJvd0hlaWdodCxcbiAgICAgICAgaXNEcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBpc1Jlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIHVzZUNTU1RyYW5zZm9ybXM6IHVzZUNTU1RyYW5zZm9ybXMsXG4gICAgICAgIHRyYW5zZm9ybVNjYWxlOiB0cmFuc2Zvcm1TY2FsZVxuICAgICAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgZ3JpZCBpdGVtLCBzZXQgaXRzIHN0eWxlIGF0dHJpYnV0ZXMgJiBzdXJyb3VuZCBpbiBhIDxEcmFnZ2FibGU+LlxuICAgICAqIEBwYXJhbSAge0VsZW1lbnR9IGNoaWxkIFJlYWN0IGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7RWxlbWVudH0gICAgICAgRWxlbWVudCB3cmFwcGVkIGluIGRyYWdnYWJsZSBhbmQgcHJvcGVybHkgcGxhY2VkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJvY2Vzc0dyaWRJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2Nlc3NHcmlkSXRlbShjaGlsZFxuICAgIC8qOiBSZWFjdEVsZW1lbnQ8YW55PiovXG4gICAgLCBpc0Ryb3BwaW5nSXRlbVxuICAgIC8qOiBib29sZWFuKi9cbiAgICApXG4gICAgLyo6ID9SZWFjdEVsZW1lbnQ8YW55PiovXG4gICAge1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQua2V5KSByZXR1cm47XG4gICAgICB2YXIgbCA9ICgwLCBfdXRpbHMuZ2V0TGF5b3V0SXRlbSkodGhpcy5zdGF0ZS5sYXlvdXQsIFN0cmluZyhjaGlsZC5rZXkpKTtcbiAgICAgIGlmICghbCkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzNi53aWR0aCxcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHM2LmNvbHMsXG4gICAgICAgICAgbWFyZ2luID0gX3RoaXMkcHJvcHM2Lm1hcmdpbixcbiAgICAgICAgICBjb250YWluZXJQYWRkaW5nID0gX3RoaXMkcHJvcHM2LmNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgICAgcm93SGVpZ2h0ID0gX3RoaXMkcHJvcHM2LnJvd0hlaWdodCxcbiAgICAgICAgICBtYXhSb3dzID0gX3RoaXMkcHJvcHM2Lm1heFJvd3MsXG4gICAgICAgICAgaXNEcmFnZ2FibGUgPSBfdGhpcyRwcm9wczYuaXNEcmFnZ2FibGUsXG4gICAgICAgICAgaXNSZXNpemFibGUgPSBfdGhpcyRwcm9wczYuaXNSZXNpemFibGUsXG4gICAgICAgICAgdXNlQ1NTVHJhbnNmb3JtcyA9IF90aGlzJHByb3BzNi51c2VDU1NUcmFuc2Zvcm1zLFxuICAgICAgICAgIHRyYW5zZm9ybVNjYWxlID0gX3RoaXMkcHJvcHM2LnRyYW5zZm9ybVNjYWxlLFxuICAgICAgICAgIGRyYWdnYWJsZUNhbmNlbCA9IF90aGlzJHByb3BzNi5kcmFnZ2FibGVDYW5jZWwsXG4gICAgICAgICAgZHJhZ2dhYmxlSGFuZGxlID0gX3RoaXMkcHJvcHM2LmRyYWdnYWJsZUhhbmRsZTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG1vdW50ZWQgPSBfdGhpcyRzdGF0ZTMubW91bnRlZCxcbiAgICAgICAgICBkcm9wcGluZ1Bvc2l0aW9uID0gX3RoaXMkc3RhdGUzLmRyb3BwaW5nUG9zaXRpb247IC8vIERldGVybWluZSB1c2VyIG1hbmlwdWxhdGlvbnMgcG9zc2libGUuXG4gICAgICAvLyBJZiBhbiBpdGVtIGlzIHN0YXRpYywgaXQgY2FuJ3QgYmUgbWFuaXB1bGF0ZWQgYnkgZGVmYXVsdC5cbiAgICAgIC8vIEFueSBwcm9wZXJ0aWVzIGRlZmluZWQgZGlyZWN0bHkgb24gdGhlIGdyaWQgaXRlbSB3aWxsIHRha2UgcHJlY2VkZW5jZS5cblxuICAgICAgdmFyIGRyYWdnYWJsZSA9IHR5cGVvZiBsLmlzRHJhZ2dhYmxlID09PSBcImJvb2xlYW5cIiA/IGwuaXNEcmFnZ2FibGUgOiAhbC5zdGF0aWMgJiYgaXNEcmFnZ2FibGU7XG4gICAgICB2YXIgcmVzaXphYmxlID0gdHlwZW9mIGwuaXNSZXNpemFibGUgPT09IFwiYm9vbGVhblwiID8gbC5pc1Jlc2l6YWJsZSA6ICFsLnN0YXRpYyAmJiBpc1Jlc2l6YWJsZTtcbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9HcmlkSXRlbS5kZWZhdWx0LCB7XG4gICAgICAgIGNvbnRhaW5lcldpZHRoOiB3aWR0aCxcbiAgICAgICAgY29sczogY29scyxcbiAgICAgICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcgfHwgbWFyZ2luLFxuICAgICAgICBtYXhSb3dzOiBtYXhSb3dzLFxuICAgICAgICByb3dIZWlnaHQ6IHJvd0hlaWdodCxcbiAgICAgICAgY2FuY2VsOiBkcmFnZ2FibGVDYW5jZWwsXG4gICAgICAgIGhhbmRsZTogZHJhZ2dhYmxlSGFuZGxlLFxuICAgICAgICBvbkRyYWdTdG9wOiB0aGlzLm9uRHJhZ1N0b3AsXG4gICAgICAgIG9uRHJhZ1N0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWc6IHRoaXMub25EcmFnLFxuICAgICAgICBvblJlc2l6ZVN0YXJ0OiB0aGlzLm9uUmVzaXplU3RhcnQsXG4gICAgICAgIG9uUmVzaXplOiB0aGlzLm9uUmVzaXplLFxuICAgICAgICBvblJlc2l6ZVN0b3A6IHRoaXMub25SZXNpemVTdG9wLFxuICAgICAgICBpc0RyYWdnYWJsZTogZHJhZ2dhYmxlLFxuICAgICAgICBpc1Jlc2l6YWJsZTogcmVzaXphYmxlLFxuICAgICAgICB1c2VDU1NUcmFuc2Zvcm1zOiB1c2VDU1NUcmFuc2Zvcm1zICYmIG1vdW50ZWQsXG4gICAgICAgIHVzZVBlcmNlbnRhZ2VzOiAhbW91bnRlZCxcbiAgICAgICAgdHJhbnNmb3JtU2NhbGU6IHRyYW5zZm9ybVNjYWxlLFxuICAgICAgICB3OiBsLncsXG4gICAgICAgIGg6IGwuaCxcbiAgICAgICAgeDogbC54LFxuICAgICAgICB5OiBsLnksXG4gICAgICAgIGk6IGwuaSxcbiAgICAgICAgbWluSDogbC5taW5ILFxuICAgICAgICBtaW5XOiBsLm1pblcsXG4gICAgICAgIG1heEg6IGwubWF4SCxcbiAgICAgICAgbWF4VzogbC5tYXhXLFxuICAgICAgICBzdGF0aWM6IGwuc3RhdGljLFxuICAgICAgICBkcm9wcGluZ1Bvc2l0aW9uOiBpc0Ryb3BwaW5nSXRlbSA/IGRyb3BwaW5nUG9zaXRpb24gOiB1bmRlZmluZWRcbiAgICAgIH0sIGNoaWxkKTtcbiAgICB9IC8vIENhbGxlZCB3aGlsZSBkcmFnZ2luZyBhbiBlbGVtZW50LiBQYXJ0IG9mIGJyb3dzZXIgbmF0aXZlIGRyYWcvZHJvcCBBUEkuXG4gICAgLy8gTmF0aXZlIGV2ZW50IHRhcmdldCBtaWdodCBiZSB0aGUgbGF5b3V0IGl0c2VsZiwgb3IgYW4gZWxlbWVudCB3aXRoaW4gdGhlIGxheW91dC5cblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM3LmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNy5zdHlsZSxcbiAgICAgICAgICBpc0Ryb3BwYWJsZSA9IF90aGlzJHByb3BzNy5pc0Ryb3BwYWJsZTtcbiAgICAgIHZhciBtZXJnZWRDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkobGF5b3V0Q2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuXG4gICAgICB2YXIgbWVyZ2VkU3R5bGUgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lckhlaWdodCgpXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBtZXJnZWRTdHlsZSxcbiAgICAgICAgb25Ecm9wOiBpc0Ryb3BwYWJsZSA/IHRoaXMub25Ecm9wIDogX3V0aWxzLm5vb3AsXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBpc0Ryb3BwYWJsZSA/IHRoaXMub25EcmFnTGVhdmUgOiBfdXRpbHMubm9vcCxcbiAgICAgICAgb25EcmFnRW50ZXI6IGlzRHJvcHBhYmxlID8gdGhpcy5vbkRyYWdFbnRlciA6IF91dGlscy5ub29wLFxuICAgICAgICBvbkRyYWdPdmVyOiBpc0Ryb3BwYWJsZSA/IHRoaXMub25EcmFnT3ZlciA6IF91dGlscy5ub29wXG4gICAgICB9LCBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIucHJvY2Vzc0dyaWRJdGVtKGNoaWxkKTtcbiAgICAgIH0pLCBpc0Ryb3BwYWJsZSAmJiB0aGlzLnN0YXRlLmRyb3BwaW5nRE9NTm9kZSAmJiB0aGlzLnByb2Nlc3NHcmlkSXRlbSh0aGlzLnN0YXRlLmRyb3BwaW5nRE9NTm9kZSwgdHJ1ZSksIHRoaXMucGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHNcbiAgICAvKjogUHJvcHMqL1xuICAgICwgcHJldlN0YXRlXG4gICAgLyo6IFN0YXRlKi9cbiAgICApIHtcbiAgICAgIHZhciBuZXdMYXlvdXRCYXNlO1xuXG4gICAgICBpZiAocHJldlN0YXRlLmFjdGl2ZURyYWcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IC8vIExlZ2FjeSBzdXBwb3J0IGZvciBjb21wYWN0VHlwZVxuICAgICAgLy8gQWxsb3cgcGFyZW50IHRvIHNldCBsYXlvdXQgZGlyZWN0bHkuXG5cblxuICAgICAgaWYgKCEoMCwgX2xvZGFzaC5kZWZhdWx0KShuZXh0UHJvcHMubGF5b3V0LCBwcmV2U3RhdGUucHJvcHNMYXlvdXQpIHx8IG5leHRQcm9wcy5jb21wYWN0VHlwZSAhPT0gcHJldlN0YXRlLmNvbXBhY3RUeXBlKSB7XG4gICAgICAgIG5ld0xheW91dEJhc2UgPSBuZXh0UHJvcHMubGF5b3V0O1xuICAgICAgfSBlbHNlIGlmICghKDAsIF91dGlscy5jaGlsZHJlbkVxdWFsKShuZXh0UHJvcHMuY2hpbGRyZW4sIHByZXZTdGF0ZS5jaGlsZHJlbikpIHtcbiAgICAgICAgLy8gSWYgY2hpbGRyZW4gY2hhbmdlLCBhbHNvIHJlZ2VuZXJhdGUgdGhlIGxheW91dC4gVXNlIG91ciBzdGF0ZVxuICAgICAgICAvLyBhcyB0aGUgYmFzZSBpbiBjYXNlIGJlY2F1c2UgaXQgbWF5IGJlIG1vcmUgdXAgdG8gZGF0ZSB0aGFuXG4gICAgICAgIC8vIHdoYXQgaXMgaW4gcHJvcHMuXG4gICAgICAgIG5ld0xheW91dEJhc2UgPSBwcmV2U3RhdGUubGF5b3V0O1xuICAgICAgfSAvLyBXZSBuZWVkIHRvIHJlZ2VuZXJhdGUgdGhlIGxheW91dC5cblxuXG4gICAgICBpZiAobmV3TGF5b3V0QmFzZSkge1xuICAgICAgICB2YXIgbmV3TGF5b3V0ID0gKDAsIF91dGlscy5zeW5jaHJvbml6ZUxheW91dFdpdGhDaGlsZHJlbikobmV3TGF5b3V0QmFzZSwgbmV4dFByb3BzLmNoaWxkcmVuLCBuZXh0UHJvcHMuY29scywgKDAsIF91dGlscy5jb21wYWN0VHlwZSkobmV4dFByb3BzKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGF5b3V0OiBuZXdMYXlvdXQsXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBzYXZlIHRoZXNlIHByb3BzIHRvIHN0YXRlIGZvciB1c2luZ1xuICAgICAgICAgIC8vIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBpbnN0ZWFkIG9mIGNvbXBvbmVudERpZE1vdW50IChpbiB3aGljaCB3ZSB3b3VsZCBnZXQgZXh0cmEgcmVyZW5kZXIpXG4gICAgICAgICAgY29tcGFjdFR5cGU6IG5leHRQcm9wcy5jb21wYWN0VHlwZSxcbiAgICAgICAgICBjaGlsZHJlbjogbmV4dFByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHByb3BzTGF5b3V0OiBuZXh0UHJvcHMubGF5b3V0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWFjdEdyaWRMYXlvdXQ7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWN0R3JpZExheW91dDtcblxuX2RlZmluZVByb3BlcnR5KFJlYWN0R3JpZExheW91dCwgXCJkaXNwbGF5TmFtZVwiLCBcIlJlYWN0R3JpZExheW91dFwiKTtcblxuX2RlZmluZVByb3BlcnR5KFJlYWN0R3JpZExheW91dCwgXCJwcm9wVHlwZXNcIiwgX1JlYWN0R3JpZExheW91dFByb3BUeXBlcy5kZWZhdWx0KTtcblxuX2RlZmluZVByb3BlcnR5KFJlYWN0R3JpZExheW91dCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhdXRvU2l6ZTogdHJ1ZSxcbiAgY29sczogMTIsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgc3R5bGU6IHt9LFxuICBkcmFnZ2FibGVIYW5kbGU6IFwiXCIsXG4gIGRyYWdnYWJsZUNhbmNlbDogXCJcIixcbiAgY29udGFpbmVyUGFkZGluZzogbnVsbCxcbiAgcm93SGVpZ2h0OiAxNTAsXG4gIG1heFJvd3M6IEluZmluaXR5LFxuICAvLyBpbmZpbml0ZSB2ZXJ0aWNhbCBncm93dGhcbiAgbGF5b3V0OiBbXSxcbiAgbWFyZ2luOiBbMTAsIDEwXSxcbiAgaXNEcmFnZ2FibGU6IHRydWUsXG4gIGlzUmVzaXphYmxlOiB0cnVlLFxuICBpc0Ryb3BwYWJsZTogZmFsc2UsXG4gIHVzZUNTU1RyYW5zZm9ybXM6IHRydWUsXG4gIHRyYW5zZm9ybVNjYWxlOiAxLFxuICB2ZXJ0aWNhbENvbXBhY3Q6IHRydWUsXG4gIGNvbXBhY3RUeXBlOiBcInZlcnRpY2FsXCIsXG4gIHByZXZlbnRDb2xsaXNpb246IGZhbHNlLFxuICBkcm9wcGluZ0l0ZW06IHtcbiAgICBpOiBcIl9fZHJvcHBpbmctZWxlbV9fXCIsXG4gICAgaDogMSxcbiAgICB3OiAxXG4gIH0sXG4gIG9uTGF5b3V0Q2hhbmdlOiBfdXRpbHMubm9vcCxcbiAgb25EcmFnU3RhcnQ6IF91dGlscy5ub29wLFxuICBvbkRyYWc6IF91dGlscy5ub29wLFxuICBvbkRyYWdTdG9wOiBfdXRpbHMubm9vcCxcbiAgb25SZXNpemVTdGFydDogX3V0aWxzLm5vb3AsXG4gIG9uUmVzaXplOiBfdXRpbHMubm9vcCxcbiAgb25SZXNpemVTdG9wOiBfdXRpbHMubm9vcCxcbiAgb25Ecm9wOiBfdXRpbHMubm9vcFxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgLy9cbiAgLy8gQmFzaWMgcHJvcHNcbiAgLy9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBzdHlsZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcbiAgLy8gVGhpcyBjYW4gYmUgc2V0IGV4cGxpY2l0bHkuIElmIGl0IGlzIG5vdCBzZXQsIGl0IHdpbGwgYXV0b21hdGljYWxseVxuICAvLyBiZSBzZXQgdG8gdGhlIGNvbnRhaW5lciB3aWR0aC4gTm90ZSB0aGF0IHJlc2l6ZXMgd2lsbCAqbm90KiBjYXVzZSB0aGlzIHRvIGFkanVzdC5cbiAgLy8gSWYgeW91IG5lZWQgdGhhdCBiZWhhdmlvciwgdXNlIFdpZHRoUHJvdmlkZXIuXG4gIHdpZHRoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAvLyBJZiB0cnVlLCB0aGUgY29udGFpbmVyIGhlaWdodCBzd2VsbHMgYW5kIGNvbnRyYWN0cyB0byBmaXQgY29udGVudHNcbiAgYXV0b1NpemU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAvLyAjIG9mIGNvbHMuXG4gIGNvbHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIC8vIEEgc2VsZWN0b3IgdGhhdCB3aWxsIG5vdCBiZSBkcmFnZ2FibGUuXG4gIGRyYWdnYWJsZUNhbmNlbDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgLy8gQSBzZWxlY3RvciBmb3IgdGhlIGRyYWdnYWJsZSBoYW5kbGVyXG4gIGRyYWdnYWJsZUhhbmRsZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgLy8gRGVwcmVjYXRlZFxuICB2ZXJ0aWNhbENvbXBhY3Q6IGZ1bmN0aW9uIHZlcnRpY2FsQ29tcGFjdChwcm9wc1xuICAvKjogUHJvcHMqL1xuICApIHtcbiAgICBpZiAocHJvcHMudmVydGljYWxDb21wYWN0ID09PSBmYWxzZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUud2FybiggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICBcImB2ZXJ0aWNhbENvbXBhY3RgIG9uIDxSZWFjdEdyaWRMYXlvdXQ+IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBzb29uLiBcIiArICdVc2UgYGNvbXBhY3RUeXBlYDogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCIgfCBudWxsLicpO1xuICAgIH1cbiAgfSxcbiAgLy8gQ2hvb3NlIHZlcnRpY2FsIG9yIGhvdGl6b250YWwgY29tcGFjdGlvblxuICBjb21wYWN0VHlwZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXSksXG4gIC8vIGxheW91dCBpcyBhbiBhcnJheSBvZiBvYmplY3Qgd2l0aCB0aGUgZm9ybWF0OlxuICAvLyB7eDogTnVtYmVyLCB5OiBOdW1iZXIsIHc6IE51bWJlciwgaDogTnVtYmVyLCBpOiBTdHJpbmd9XG4gIGxheW91dDogZnVuY3Rpb24gbGF5b3V0KHByb3BzXG4gIC8qOiBQcm9wcyovXG4gICkge1xuICAgIHZhciBsYXlvdXQgPSBwcm9wcy5sYXlvdXQ7IC8vIEkgaG9wZSB5b3UncmUgc2V0dGluZyB0aGUgZGF0YS1ncmlkIHByb3BlcnR5IG9uIHRoZSBncmlkIGl0ZW1zXG5cbiAgICBpZiAobGF5b3V0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHJlcXVpcmUoXCIuL3V0aWxzXCIpLnZhbGlkYXRlTGF5b3V0KGxheW91dCwgXCJsYXlvdXRcIik7XG4gIH0sXG4gIC8vXG4gIC8vIEdyaWQgRGltZW5zaW9uc1xuICAvL1xuICAvLyBNYXJnaW4gYmV0d2VlbiBpdGVtcyBbeCwgeV0gaW4gcHhcbiAgbWFyZ2luOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyKSxcbiAgLy8gUGFkZGluZyBpbnNpZGUgdGhlIGNvbnRhaW5lciBbeCwgeV0gaW4gcHhcbiAgY29udGFpbmVyUGFkZGluZzogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciksXG4gIC8vIFJvd3MgaGF2ZSBhIHN0YXRpYyBoZWlnaHQsIGJ1dCB5b3UgY2FuIGNoYW5nZSB0aGlzIGJhc2VkIG9uIGJyZWFrcG9pbnRzIGlmIHlvdSBsaWtlXG4gIHJvd0hlaWdodDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgLy8gRGVmYXVsdCBJbmZpbml0eSwgYnV0IHlvdSBjYW4gc3BlY2lmeSBhIG1heCBoZXJlIGlmIHlvdSBsaWtlLlxuICAvLyBOb3RlIHRoYXQgdGhpcyBpc24ndCBmdWxseSBmbGVzaGVkIG91dCBhbmQgd29uJ3QgZXJyb3IgaWYgeW91IHNwZWNpZnkgYSBsYXlvdXQgdGhhdFxuICAvLyBleHRlbmRzIGJleW9uZCB0aGUgcm93IGNhcGFjaXR5LiBJdCB3aWxsLCBob3dldmVyLCBub3QgYWxsb3cgdXNlcnMgdG8gZHJhZy9yZXNpemVcbiAgLy8gYW4gaXRlbSBwYXN0IHRoZSBiYXJyaWVyLiBUaGV5IGNhbiBwdXNoIGl0ZW1zIGJleW9uZCB0aGUgYmFycmllciwgdGhvdWdoLlxuICAvLyBJbnRlbnRpb25hbGx5IG5vdCBkb2N1bWVudGVkIGZvciB0aGlzIHJlYXNvbi5cbiAgbWF4Um93czogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgLy9cbiAgLy8gRmxhZ3NcbiAgLy9cbiAgaXNEcmFnZ2FibGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICBpc1Jlc2l6YWJsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG4gIC8vIElmIHRydWUsIGdyaWQgaXRlbXMgd29uJ3QgY2hhbmdlIHBvc2l0aW9uIHdoZW4gYmVpbmcgZHJhZ2dlZCBvdmVyLlxuICBwcmV2ZW50Q29sbGlzaW9uOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgLy8gVXNlIENTUyB0cmFuc2Zvcm1zIGluc3RlYWQgb2YgdG9wL2xlZnRcbiAgdXNlQ1NTVHJhbnNmb3JtczogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG4gIC8vIHBhcmVudCBsYXlvdXQgdHJhbnNmb3JtIHNjYWxlXG4gIHRyYW5zZm9ybVNjYWxlOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAvLyBJZiB0cnVlLCBhbiBleHRlcm5hbCBlbGVtZW50IGNhbiB0cmlnZ2VyIG9uRHJvcCBjYWxsYmFjayB3aXRoIGEgc3BlY2lmaWMgZ3JpZCBwb3NpdGlvbiBhcyBhIHBhcmFtZXRlclxuICBpc0Ryb3BwYWJsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG4gIC8vXG4gIC8vIENhbGxiYWNrc1xuICAvL1xuICAvLyBDYWxsYmFjayBzbyB5b3UgY2FuIHNhdmUgdGhlIGxheW91dC4gQ2FsbHMgYWZ0ZXIgZWFjaCBkcmFnICYgcmVzaXplIHN0b3BzLlxuICBvbkxheW91dENoYW5nZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vIENhbGxzIHdoZW4gZHJhZyBzdGFydHMuIENhbGxiYWNrIGlzIG9mIHRoZSBzaWduYXR1cmUgKGxheW91dCwgb2xkSXRlbSwgbmV3SXRlbSwgcGxhY2Vob2xkZXIsIGUsID9ub2RlKS5cbiAgLy8gQWxsIGNhbGxiYWNrcyBiZWxvdyBoYXZlIHRoZSBzYW1lIHNpZ25hdHVyZS4gJ3N0YXJ0JyBhbmQgJ3N0b3AnIGNhbGxiYWNrcyBvbWl0IHRoZSAncGxhY2Vob2xkZXInLlxuICBvbkRyYWdTdGFydDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vIENhbGxzIG9uIGVhY2ggZHJhZyBtb3ZlbWVudC5cbiAgb25EcmFnOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy8gQ2FsbHMgd2hlbiBkcmFnIGlzIGNvbXBsZXRlLlxuICBvbkRyYWdTdG9wOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgLy9DYWxscyB3aGVuIHJlc2l6ZSBzdGFydHMuXG4gIG9uUmVzaXplU3RhcnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxscyB3aGVuIHJlc2l6ZSBtb3ZlbWVudCBoYXBwZW5zLlxuICBvblJlc2l6ZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vIENhbGxzIHdoZW4gcmVzaXplIGlzIGNvbXBsZXRlLlxuICBvblJlc2l6ZVN0b3A6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxscyB3aGVuIHNvbWUgZWxlbWVudCBpcyBkcm9wcGVkLlxuICBvbkRyb3A6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvL1xuICAvLyBPdGhlciB2YWxpZGF0aW9uc1xuICAvL1xuICBkcm9wcGluZ0l0ZW06IF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gICAgaTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHc6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSksXG4gIC8vIENoaWxkcmVuIG11c3Qgbm90IGhhdmUgZHVwbGljYXRlIGtleXMuXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wc1xuICAvKjogUHJvcHMqL1xuICAsIHByb3BOYW1lXG4gIC8qOiBzdHJpbmcqL1xuICApIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBwcm9wc1twcm9wTmFtZV07IC8vIENoZWNrIGNoaWxkcmVuIGtleXMgZm9yIGR1cGxpY2F0ZXMuIFRocm93IGlmIGZvdW5kLlxuXG4gICAgdmFyIGtleXMgPSB7fTtcblxuICAgIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGtleXNbY2hpbGQua2V5XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBjaGlsZCBrZXkgXCInICsgY2hpbGQua2V5ICsgJ1wiIGZvdW5kISBUaGlzIHdpbGwgY2F1c2UgcHJvYmxlbXMgaW4gUmVhY3RHcmlkTGF5b3V0LicpO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2NoaWxkLmtleV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfbG9kYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoLmlzZXF1YWxcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfcmVzcG9uc2l2ZVV0aWxzID0gcmVxdWlyZShcIi4vcmVzcG9uc2l2ZVV0aWxzXCIpO1xuXG52YXIgX1JlYWN0R3JpZExheW91dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUmVhY3RHcmlkTGF5b3V0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB0eXBlID0gZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufTtcbi8qKlxuICogR2V0IGEgdmFsdWUgb2YgbWFyZ2luIG9yIGNvbnRhaW5lclBhZGRpbmcuXG4gKlxuICogQHBhcmFtICB7QXJyYXkgfCBPYmplY3R9IHBhcmFtIE1hcmdpbiB8IGNvbnRhaW5lclBhZGRpbmcsIGUuZy4gWzEwLCAxMF0gfCB7bGc6IFsxMCwgMTBdLCAuLi59LlxuICogQHBhcmFtICB7U3RyaW5nfSBicmVha3BvaW50ICAgQnJlYWtwb2ludDogbGcsIG1kLCBzbSwgeHMgYW5kIGV0Yy5cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cblxuZnVuY3Rpb24gZ2V0SW5kZW50YXRpb25WYWx1ZShwYXJhbVxuLyo6IHsgW2tleTogc3RyaW5nXTogW251bWJlciwgbnVtYmVyXSB9IHwgW251bWJlciwgbnVtYmVyXSovXG4sIGJyZWFrcG9pbnRcbi8qOiBzdHJpbmcqL1xuKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IHBhcmFtIDogcGFyYW1bYnJlYWtwb2ludF07XG59XG4vKjo6IHR5cGUgU3RhdGUgPSB7XG4gIGxheW91dDogTGF5b3V0LFxuICBicmVha3BvaW50OiBzdHJpbmcsXG4gIGNvbHM6IG51bWJlcixcbiAgbGF5b3V0cz86IHsgW2tleTogc3RyaW5nXTogTGF5b3V0IH1cbn07Ki9cblxuLyo6OiB0eXBlIFByb3BzPEJyZWFrcG9pbnQ6IHN0cmluZyA9IHN0cmluZz4gPSB7fFxuICAuLi5SZWFjdC5FbGVtZW50Q29uZmlnPHR5cGVvZiBSZWFjdEdyaWRMYXlvdXQ+LFxuXG4gIC8vIFJlc3BvbnNpdmUgY29uZmlnXG4gIGJyZWFrcG9pbnQ/OiA/QnJlYWtwb2ludCxcbiAgYnJlYWtwb2ludHM6IEJyZWFrcG9pbnRzPEJyZWFrcG9pbnQ+LFxuICBjb2xzOiB7IFtrZXk6IEJyZWFrcG9pbnRdOiBudW1iZXIgfSxcbiAgbGF5b3V0czogUmVzcG9uc2l2ZUxheW91dDxCcmVha3BvaW50PixcbiAgd2lkdGg6IG51bWJlcixcbiAgbWFyZ2luOiB7IFtrZXk6IEJyZWFrcG9pbnRdOiBbbnVtYmVyLCBudW1iZXJdIH0gfCBbbnVtYmVyLCBudW1iZXJdLFxuICBjb250YWluZXJQYWRkaW5nOiB7IFtrZXk6IEJyZWFrcG9pbnRdOiBbbnVtYmVyLCBudW1iZXJdIH0gfCBbbnVtYmVyLCBudW1iZXJdLFxuXG4gIC8vIENhbGxiYWNrc1xuICBvbkJyZWFrcG9pbnRDaGFuZ2U6IChCcmVha3BvaW50LCBjb2xzOiBudW1iZXIpID0+IHZvaWQsXG4gIG9uTGF5b3V0Q2hhbmdlOiAoTGF5b3V0LCB7IFtrZXk6IEJyZWFrcG9pbnRdOiBMYXlvdXQgfSkgPT4gdm9pZCxcbiAgb25XaWR0aENoYW5nZTogKFxuICAgIGNvbnRhaW5lcldpZHRoOiBudW1iZXIsXG4gICAgbWFyZ2luOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGNvbHM6IG51bWJlcixcbiAgICBjb250YWluZXJQYWRkaW5nOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbFxuICApID0+IHZvaWRcbnx9OyovXG5cblxudmFyIFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0KSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwgX3RoaXMuZ2VuZXJhdGVJbml0aWFsU3RhdGUoKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25MYXlvdXRDaGFuZ2VcIiwgZnVuY3Rpb24gKGxheW91dFxuICAgIC8qOiBMYXlvdXQqL1xuICAgICkge1xuICAgICAgX3RoaXMucHJvcHMub25MYXlvdXRDaGFuZ2UobGF5b3V0LCBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcy5sYXlvdXRzLCBfZGVmaW5lUHJvcGVydHkoe30sIF90aGlzLnN0YXRlLmJyZWFrcG9pbnQsIGxheW91dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0LCBbe1xuICAgIGtleTogXCJnZW5lcmF0ZUluaXRpYWxTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUluaXRpYWxTdGF0ZSgpXG4gICAgLyo6IFN0YXRlKi9cbiAgICB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMud2lkdGgsXG4gICAgICAgICAgYnJlYWtwb2ludHMgPSBfdGhpcyRwcm9wcy5icmVha3BvaW50cyxcbiAgICAgICAgICBsYXlvdXRzID0gX3RoaXMkcHJvcHMubGF5b3V0cyxcbiAgICAgICAgICBjb2xzID0gX3RoaXMkcHJvcHMuY29scztcbiAgICAgIHZhciBicmVha3BvaW50ID0gKDAsIF9yZXNwb25zaXZlVXRpbHMuZ2V0QnJlYWtwb2ludEZyb21XaWR0aCkoYnJlYWtwb2ludHMsIHdpZHRoKTtcbiAgICAgIHZhciBjb2xObyA9ICgwLCBfcmVzcG9uc2l2ZVV0aWxzLmdldENvbHNGcm9tQnJlYWtwb2ludCkoYnJlYWtwb2ludCwgY29scyk7IC8vIHZlcnRpY2FsQ29tcGFjdCBjb21wYXRpYmlsaXR5LCBub3cgZGVwcmVjYXRlZFxuXG4gICAgICB2YXIgY29tcGFjdFR5cGUgPSB0aGlzLnByb3BzLnZlcnRpY2FsQ29tcGFjdCA9PT0gZmFsc2UgPyBudWxsIDogdGhpcy5wcm9wcy5jb21wYWN0VHlwZTsgLy8gR2V0IHRoZSBpbml0aWFsIGxheW91dC4gVGhpcyBjYW4gdHJpY2t5OyB3ZSB0cnkgdG8gZ2VuZXJhdGUgb25lIGhvd2V2ZXIgcG9zc2libGUgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgIC8vIGZvciB0aGlzIGxheW91dC5cblxuICAgICAgdmFyIGluaXRpYWxMYXlvdXQgPSAoMCwgX3Jlc3BvbnNpdmVVdGlscy5maW5kT3JHZW5lcmF0ZVJlc3BvbnNpdmVMYXlvdXQpKGxheW91dHMsIGJyZWFrcG9pbnRzLCBicmVha3BvaW50LCBicmVha3BvaW50LCBjb2xObywgY29tcGFjdFR5cGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0OiBpbml0aWFsTGF5b3V0LFxuICAgICAgICBicmVha3BvaW50OiBicmVha3BvaW50LFxuICAgICAgICBjb2xzOiBjb2xOb1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHNcbiAgICAvKjogUHJvcHM8Kj4qL1xuICAgICkge1xuICAgICAgLy8gQWxsb3cgcGFyZW50IHRvIHNldCB3aWR0aCBvciBicmVha3BvaW50IGRpcmVjdGx5LlxuICAgICAgaWYgKHRoaXMucHJvcHMud2lkdGggIT0gcHJldlByb3BzLndpZHRoIHx8IHRoaXMucHJvcHMuYnJlYWtwb2ludCAhPT0gcHJldlByb3BzLmJyZWFrcG9pbnQgfHwgISgwLCBfbG9kYXNoLmRlZmF1bHQpKHRoaXMucHJvcHMuYnJlYWtwb2ludHMsIHByZXZQcm9wcy5icmVha3BvaW50cykgfHwgISgwLCBfbG9kYXNoLmRlZmF1bHQpKHRoaXMucHJvcHMuY29scywgcHJldlByb3BzLmNvbHMpKSB7XG4gICAgICAgIHRoaXMub25XaWR0aENoYW5nZShwcmV2UHJvcHMpO1xuICAgICAgfVxuICAgIH0gLy8gd3JhcCBsYXlvdXRzIHNvIHdlIGRvIG5vdCBuZWVkIHRvIHBhc3MgbGF5b3V0cyB0byBjaGlsZFxuXG4gIH0sIHtcbiAgICBrZXk6IFwib25XaWR0aENoYW5nZVwiLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgd2lkdGggY2hhbmdlcyB3b3JrIHRocm91Z2ggYnJlYWtwb2ludHMgYW5kIHJlc2V0IHN0YXRlIHdpdGggdGhlIG5ldyB3aWR0aCAmIGJyZWFrcG9pbnQuXG4gICAgICogV2lkdGggY2hhbmdlcyBhcmUgbmVjZXNzYXJ5IHRvIGZpZ3VyZSBvdXQgdGhlIHdpZGdldCB3aWR0aHMuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uV2lkdGhDaGFuZ2UocHJldlByb3BzXG4gICAgLyo6IFByb3BzPCo+Ki9cbiAgICApIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJyZWFrcG9pbnRzID0gX3RoaXMkcHJvcHMyLmJyZWFrcG9pbnRzLFxuICAgICAgICAgIGNvbHMgPSBfdGhpcyRwcm9wczIuY29scyxcbiAgICAgICAgICBsYXlvdXRzID0gX3RoaXMkcHJvcHMyLmxheW91dHMsXG4gICAgICAgICAgY29tcGFjdFR5cGUgPSBfdGhpcyRwcm9wczIuY29tcGFjdFR5cGU7XG4gICAgICB2YXIgbmV3QnJlYWtwb2ludCA9IHRoaXMucHJvcHMuYnJlYWtwb2ludCB8fCAoMCwgX3Jlc3BvbnNpdmVVdGlscy5nZXRCcmVha3BvaW50RnJvbVdpZHRoKSh0aGlzLnByb3BzLmJyZWFrcG9pbnRzLCB0aGlzLnByb3BzLndpZHRoKTtcbiAgICAgIHZhciBsYXN0QnJlYWtwb2ludCA9IHRoaXMuc3RhdGUuYnJlYWtwb2ludDtcbiAgICAgIHZhciBuZXdDb2xzXG4gICAgICAvKjogbnVtYmVyKi9cbiAgICAgID0gKDAsIF9yZXNwb25zaXZlVXRpbHMuZ2V0Q29sc0Zyb21CcmVha3BvaW50KShuZXdCcmVha3BvaW50LCBjb2xzKTtcblxuICAgICAgdmFyIG5ld0xheW91dHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBsYXlvdXRzKTsgLy8gQnJlYWtwb2ludCBjaGFuZ2VcblxuXG4gICAgICBpZiAobGFzdEJyZWFrcG9pbnQgIT09IG5ld0JyZWFrcG9pbnQgfHwgcHJldlByb3BzLmJyZWFrcG9pbnRzICE9PSBicmVha3BvaW50cyB8fCBwcmV2UHJvcHMuY29scyAhPT0gY29scykge1xuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGUgY3VycmVudCBsYXlvdXQgaWYgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBpcyBub3QgcHJlc2VudCBpbiB0aGUgbmV4dCBsYXlvdXRzLlxuICAgICAgICBpZiAoIShsYXN0QnJlYWtwb2ludCBpbiBuZXdMYXlvdXRzKSkgbmV3TGF5b3V0c1tsYXN0QnJlYWtwb2ludF0gPSAoMCwgX3V0aWxzLmNsb25lTGF5b3V0KSh0aGlzLnN0YXRlLmxheW91dCk7IC8vIEZpbmQgb3IgZ2VuZXJhdGUgYSBuZXcgbGF5b3V0LlxuXG4gICAgICAgIHZhciBsYXlvdXQgPSAoMCwgX3Jlc3BvbnNpdmVVdGlscy5maW5kT3JHZW5lcmF0ZVJlc3BvbnNpdmVMYXlvdXQpKG5ld0xheW91dHMsIGJyZWFrcG9pbnRzLCBuZXdCcmVha3BvaW50LCBsYXN0QnJlYWtwb2ludCwgbmV3Q29scywgY29tcGFjdFR5cGUpOyAvLyBUaGlzIGFkZHMgbWlzc2luZyBpdGVtcy5cblxuICAgICAgICBsYXlvdXQgPSAoMCwgX3V0aWxzLnN5bmNocm9uaXplTGF5b3V0V2l0aENoaWxkcmVuKShsYXlvdXQsIHRoaXMucHJvcHMuY2hpbGRyZW4sIG5ld0NvbHMsIGNvbXBhY3RUeXBlKTsgLy8gU3RvcmUgdGhlIG5ldyBsYXlvdXQuXG5cbiAgICAgICAgbmV3TGF5b3V0c1tuZXdCcmVha3BvaW50XSA9IGxheW91dDsgLy8gY2FsbGJhY2tzXG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkxheW91dENoYW5nZShsYXlvdXQsIG5ld0xheW91dHMpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJlYWtwb2ludENoYW5nZShuZXdCcmVha3BvaW50LCBuZXdDb2xzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYnJlYWtwb2ludDogbmV3QnJlYWtwb2ludCxcbiAgICAgICAgICBsYXlvdXQ6IGxheW91dCxcbiAgICAgICAgICBjb2xzOiBuZXdDb2xzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWFyZ2luID0gZ2V0SW5kZW50YXRpb25WYWx1ZSh0aGlzLnByb3BzLm1hcmdpbiwgbmV3QnJlYWtwb2ludCk7XG4gICAgICB2YXIgY29udGFpbmVyUGFkZGluZyA9IGdldEluZGVudGF0aW9uVmFsdWUodGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nLCBuZXdCcmVha3BvaW50KTsgLy9jYWxsIG9uV2lkdGhDaGFuZ2Ugb24gZXZlcnkgY2hhbmdlIG9mIHdpZHRoLCBub3Qgb25seSBvbiBicmVha3BvaW50IGNoYW5nZXNcblxuICAgICAgdGhpcy5wcm9wcy5vbldpZHRoQ2hhbmdlKHRoaXMucHJvcHMud2lkdGgsIG1hcmdpbiwgbmV3Q29scywgY29udGFpbmVyUGFkZGluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYnJlYWtwb2ludCA9IF90aGlzJHByb3BzMy5icmVha3BvaW50LFxuICAgICAgICAgIGJyZWFrcG9pbnRzID0gX3RoaXMkcHJvcHMzLmJyZWFrcG9pbnRzLFxuICAgICAgICAgIGNvbHMgPSBfdGhpcyRwcm9wczMuY29scyxcbiAgICAgICAgICBsYXlvdXRzID0gX3RoaXMkcHJvcHMzLmxheW91dHMsXG4gICAgICAgICAgbWFyZ2luID0gX3RoaXMkcHJvcHMzLm1hcmdpbixcbiAgICAgICAgICBjb250YWluZXJQYWRkaW5nID0gX3RoaXMkcHJvcHMzLmNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgICAgb25CcmVha3BvaW50Q2hhbmdlID0gX3RoaXMkcHJvcHMzLm9uQnJlYWtwb2ludENoYW5nZSxcbiAgICAgICAgICBvbkxheW91dENoYW5nZSA9IF90aGlzJHByb3BzMy5vbkxheW91dENoYW5nZSxcbiAgICAgICAgICBvbldpZHRoQ2hhbmdlID0gX3RoaXMkcHJvcHMzLm9uV2lkdGhDaGFuZ2UsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMzLCBbXCJicmVha3BvaW50XCIsIFwiYnJlYWtwb2ludHNcIiwgXCJjb2xzXCIsIFwibGF5b3V0c1wiLCBcIm1hcmdpblwiLCBcImNvbnRhaW5lclBhZGRpbmdcIiwgXCJvbkJyZWFrcG9pbnRDaGFuZ2VcIiwgXCJvbkxheW91dENoYW5nZVwiLCBcIm9uV2lkdGhDaGFuZ2VcIl0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9SZWFjdEdyaWRMYXlvdXQuZGVmYXVsdCwgX2V4dGVuZHMoe30sIG90aGVyLCB7XG4gICAgICAgIG1hcmdpbjogZ2V0SW5kZW50YXRpb25WYWx1ZShtYXJnaW4sIHRoaXMuc3RhdGUuYnJlYWtwb2ludCksXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGdldEluZGVudGF0aW9uVmFsdWUoY29udGFpbmVyUGFkZGluZywgdGhpcy5zdGF0ZS5icmVha3BvaW50KSxcbiAgICAgICAgb25MYXlvdXRDaGFuZ2U6IHRoaXMub25MYXlvdXRDaGFuZ2UsXG4gICAgICAgIGxheW91dDogdGhpcy5zdGF0ZS5sYXlvdXQsXG4gICAgICAgIGNvbHM6IHRoaXMuc3RhdGUuY29sc1xuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzXG4gICAgLyo6IFByb3BzPCo+Ki9cbiAgICAsIHByZXZTdGF0ZVxuICAgIC8qOiBTdGF0ZSovXG4gICAgKSB7XG4gICAgICBpZiAoISgwLCBfbG9kYXNoLmRlZmF1bHQpKG5leHRQcm9wcy5sYXlvdXRzLCBwcmV2U3RhdGUubGF5b3V0cykpIHtcbiAgICAgICAgLy8gQWxsb3cgcGFyZW50IHRvIHNldCBsYXlvdXRzIGRpcmVjdGx5LlxuICAgICAgICB2YXIgYnJlYWtwb2ludCA9IHByZXZTdGF0ZS5icmVha3BvaW50LFxuICAgICAgICAgICAgX2NvbHMgPSBwcmV2U3RhdGUuY29sczsgLy8gU2luY2Ugd2UncmUgc2V0dGluZyBhbiBlbnRpcmVseSBuZXcgbGF5b3V0IG9iamVjdCwgd2UgbXVzdCBnZW5lcmF0ZSBhIG5ldyByZXNwb25zaXZlIGxheW91dFxuICAgICAgICAvLyBpZiBvbmUgZG9lcyBub3QgZXhpc3QuXG5cbiAgICAgICAgdmFyIG5ld0xheW91dCA9ICgwLCBfcmVzcG9uc2l2ZVV0aWxzLmZpbmRPckdlbmVyYXRlUmVzcG9uc2l2ZUxheW91dCkobmV4dFByb3BzLmxheW91dHMsIG5leHRQcm9wcy5icmVha3BvaW50cywgYnJlYWtwb2ludCwgYnJlYWtwb2ludCwgX2NvbHMsIG5leHRQcm9wcy5jb21wYWN0VHlwZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGF5b3V0OiBuZXdMYXlvdXQsXG4gICAgICAgICAgbGF5b3V0czogbmV4dFByb3BzLmxheW91dHNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQ7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0LCBcInByb3BUeXBlc1wiLCB7XG4gIC8vXG4gIC8vIEJhc2ljIHByb3BzXG4gIC8vXG4gIC8vIE9wdGlvbmFsLCBidXQgaWYgeW91IGFyZSBtYW5hZ2luZyB3aWR0aCB5b3Vyc2VsZiB5b3UgbWF5IHdhbnQgdG8gc2V0IHRoZSBicmVha3BvaW50XG4gIC8vIHlvdXJzZWxmIGFzIHdlbGwuXG4gIGJyZWFrcG9pbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIC8vIHtuYW1lOiBweFZhbH0sIGUuZy4ge2xnOiAxMjAwLCBtZDogOTk2LCBzbTogNzY4LCB4czogNDgwfVxuICBicmVha3BvaW50czogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcbiAgLy8gIyBvZiBjb2xzLiBUaGlzIGlzIGEgYnJlYWtwb2ludCAtPiBjb2xzIG1hcFxuICBjb2xzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LFxuICAvLyAjIG9mIG1hcmdpbi4gVGhpcyBpcyBhIGJyZWFrcG9pbnQgLT4gbWFyZ2luIG1hcFxuICAvLyBlLmcuIHsgbGc6IFs1LCA1XSwgbWQ6IFsxMCwgMTBdLCBzbTogWzE1LCAxNV0gfVxuICAvLyBNYXJnaW4gYmV0d2VlbiBpdGVtcyBbeCwgeV0gaW4gcHhcbiAgLy8gZS5nLiBbMTAsIDEwXVxuICBtYXJnaW46IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5hcnJheSwgX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdF0pLFxuICAvLyAjIG9mIGNvbnRhaW5lclBhZGRpbmcuIFRoaXMgaXMgYSBicmVha3BvaW50IC0+IGNvbnRhaW5lclBhZGRpbmcgbWFwXG4gIC8vIGUuZy4geyBsZzogWzUsIDVdLCBtZDogWzEwLCAxMF0sIHNtOiBbMTUsIDE1XSB9XG4gIC8vIFBhZGRpbmcgaW5zaWRlIHRoZSBjb250YWluZXIgW3gsIHldIGluIHB4XG4gIC8vIGUuZy4gWzEwLCAxMF1cbiAgY29udGFpbmVyUGFkZGluZzogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5LCBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0XSksXG4gIC8vIGxheW91dHMgaXMgYW4gb2JqZWN0IG1hcHBpbmcgYnJlYWtwb2ludHMgdG8gbGF5b3V0cy5cbiAgLy8gZS5nLiB7bGc6IExheW91dCwgbWQ6IExheW91dCwgLi4ufVxuICBsYXlvdXRzOiBmdW5jdGlvbiBsYXlvdXRzKHByb3BzXG4gIC8qOiBQcm9wczw+Ki9cbiAgLCBwcm9wTmFtZVxuICAvKjogc3RyaW5nKi9cbiAgKSB7XG4gICAgaWYgKHR5cGUocHJvcHNbcHJvcE5hbWVdKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGF5b3V0IHByb3BlcnR5IG11c3QgYmUgYW4gb2JqZWN0LiBSZWNlaXZlZDogXCIgKyB0eXBlKHByb3BzW3Byb3BOYW1lXSkpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHByb3BzW3Byb3BOYW1lXSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvcHMuYnJlYWtwb2ludHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVhY2gga2V5IGluIGxheW91dHMgbXVzdCBhbGlnbiB3aXRoIGEga2V5IGluIGJyZWFrcG9pbnRzLlwiKTtcbiAgICAgIH1cblxuICAgICAgKDAsIF91dGlscy52YWxpZGF0ZUxheW91dCkocHJvcHMubGF5b3V0c1trZXldLCBcImxheW91dHMuXCIgKyBrZXkpO1xuICAgIH0pO1xuICB9LFxuICAvLyBUaGUgd2lkdGggb2YgdGhpcyBjb21wb25lbnQuXG4gIC8vIFJlcXVpcmVkIGluIHRoaXMgcHJvcFR5cGVzIHN0YW56YSBiZWNhdXNlIGdlbmVyYXRlSW5pdGlhbFN0YXRlKCkgd2lsbCBmYWlsIHdpdGhvdXQgaXQuXG4gIHdpZHRoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIC8vXG4gIC8vIENhbGxiYWNrc1xuICAvL1xuICAvLyBDYWxscyBiYWNrIHdpdGggYnJlYWtwb2ludCBhbmQgbmV3ICMgY29sc1xuICBvbkJyZWFrcG9pbnRDaGFuZ2U6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxsYmFjayBzbyB5b3UgY2FuIHNhdmUgdGhlIGxheW91dC5cbiAgLy8gQ2FsbHMgYmFjayB3aXRoIChjdXJyZW50TGF5b3V0LCBhbGxMYXlvdXRzKS4gYWxsTGF5b3V0cyBhcmUga2V5ZWQgYnkgYnJlYWtwb2ludC5cbiAgb25MYXlvdXRDaGFuZ2U6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBDYWxscyBiYWNrIHdpdGggKGNvbnRhaW5lcldpZHRoLCBtYXJnaW4sIGNvbHMsIGNvbnRhaW5lclBhZGRpbmcpXG4gIG9uV2lkdGhDaGFuZ2U6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jXG59KTtcblxuX2RlZmluZVByb3BlcnR5KFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBsZzogMTIwMCxcbiAgICBtZDogOTk2LFxuICAgIHNtOiA3NjgsXG4gICAgeHM6IDQ4MCxcbiAgICB4eHM6IDBcbiAgfSxcbiAgY29sczoge1xuICAgIGxnOiAxMixcbiAgICBtZDogMTAsXG4gICAgc206IDYsXG4gICAgeHM6IDQsXG4gICAgeHhzOiAyXG4gIH0sXG4gIGxheW91dHM6IHt9LFxuICBtYXJnaW46IFsxMCwgMTBdLFxuICBjb250YWluZXJQYWRkaW5nOiB7XG4gICAgbGc6IFswLCAwXSxcbiAgICBtZDogWzAsIDBdLFxuICAgIHNtOiBbMCwgMF0sXG4gICAgeHM6IFswLCAwXSxcbiAgICB4eHM6IFswLCAwXVxuICB9LFxuICBvbkJyZWFrcG9pbnRDaGFuZ2U6IF91dGlscy5ub29wLFxuICBvbkxheW91dENoYW5nZTogX3V0aWxzLm5vb3AsXG4gIG9uV2lkdGhDaGFuZ2U6IF91dGlscy5ub29wXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY0dyaWRDb2xXaWR0aCA9IGNhbGNHcmlkQ29sV2lkdGg7XG5leHBvcnRzLmNhbGNHcmlkSXRlbVBvc2l0aW9uID0gY2FsY0dyaWRJdGVtUG9zaXRpb247XG5leHBvcnRzLmNhbGNYWSA9IGNhbGNYWTtcbmV4cG9ydHMuY2FsY1dIID0gY2FsY1dIO1xuXG4vKjo6IGltcG9ydCB0eXBlIHsgUG9zaXRpb24gfSBmcm9tIFwiLi91dGlsc1wiOyovXG5cbi8qOjogZXhwb3J0IHR5cGUgUG9zaXRpb25QYXJhbXMgPSB7XG4gIG1hcmdpbjogW251bWJlciwgbnVtYmVyXSxcbiAgY29udGFpbmVyUGFkZGluZzogW251bWJlciwgbnVtYmVyXSxcbiAgY29udGFpbmVyV2lkdGg6IG51bWJlcixcbiAgY29sczogbnVtYmVyLFxuICByb3dIZWlnaHQ6IG51bWJlcixcbiAgbWF4Um93czogbnVtYmVyXG59OyovXG4vLyBIZWxwZXIgZm9yIGdlbmVyYXRpbmcgY29sdW1uIHdpZHRoXG5mdW5jdGlvbiBjYWxjR3JpZENvbFdpZHRoKHBvc2l0aW9uUGFyYW1zXG4vKjogUG9zaXRpb25QYXJhbXMqL1xuKVxuLyo6IG51bWJlciovXG57XG4gIHZhciBtYXJnaW4gPSBwb3NpdGlvblBhcmFtcy5tYXJnaW4sXG4gICAgICBjb250YWluZXJQYWRkaW5nID0gcG9zaXRpb25QYXJhbXMuY29udGFpbmVyUGFkZGluZyxcbiAgICAgIGNvbnRhaW5lcldpZHRoID0gcG9zaXRpb25QYXJhbXMuY29udGFpbmVyV2lkdGgsXG4gICAgICBjb2xzID0gcG9zaXRpb25QYXJhbXMuY29scztcbiAgcmV0dXJuIChjb250YWluZXJXaWR0aCAtIG1hcmdpblswXSAqIChjb2xzIC0gMSkgLSBjb250YWluZXJQYWRkaW5nWzBdICogMikgLyBjb2xzO1xufVxuLyoqXG4gKiBSZXR1cm4gcG9zaXRpb24gb24gdGhlIHBhZ2UgZ2l2ZW4gYW4geCwgeSwgdywgaC5cbiAqIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCBhcmUgYWxsIGluIHBpeGVscy5cbiAqIEBwYXJhbSAge1Bvc2l0aW9uUGFyYW1zfSBwb3NpdGlvblBhcmFtcyAgUGFyYW1ldGVycyBvZiBncmlkIG5lZWRlZCBmb3IgY29vcmRpbmF0ZXMgY2FsY3VsYXRpb25zLlxuICogQHBhcmFtICB7TnVtYmVyfSAgeCAgICAgICAgICAgICAgICAgICAgICBYIGNvb3JkaW5hdGUgaW4gZ3JpZCB1bml0cy5cbiAqIEBwYXJhbSAge051bWJlcn0gIHkgICAgICAgICAgICAgICAgICAgICAgWSBjb29yZGluYXRlIGluIGdyaWQgdW5pdHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICB3ICAgICAgICAgICAgICAgICAgICAgIFcgY29vcmRpbmF0ZSBpbiBncmlkIHVuaXRzLlxuICogQHBhcmFtICB7TnVtYmVyfSAgaCAgICAgICAgICAgICAgICAgICAgICBIIGNvb3JkaW5hdGUgaW4gZ3JpZCB1bml0cy5cbiAqIEByZXR1cm4ge1Bvc2l0aW9ufSAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgY29vcmRzLlxuICovXG5cblxuZnVuY3Rpb24gY2FsY0dyaWRJdGVtUG9zaXRpb24ocG9zaXRpb25QYXJhbXNcbi8qOiBQb3NpdGlvblBhcmFtcyovXG4sIHhcbi8qOiBudW1iZXIqL1xuLCB5XG4vKjogbnVtYmVyKi9cbiwgd1xuLyo6IG51bWJlciovXG4sIGhcbi8qOiBudW1iZXIqL1xuLCBzdGF0ZVxuLyo6ID9PYmplY3QqL1xuKVxuLyo6IFBvc2l0aW9uKi9cbntcbiAgdmFyIG1hcmdpbiA9IHBvc2l0aW9uUGFyYW1zLm1hcmdpbixcbiAgICAgIGNvbnRhaW5lclBhZGRpbmcgPSBwb3NpdGlvblBhcmFtcy5jb250YWluZXJQYWRkaW5nLFxuICAgICAgcm93SGVpZ2h0ID0gcG9zaXRpb25QYXJhbXMucm93SGVpZ2h0O1xuICB2YXIgY29sV2lkdGggPSBjYWxjR3JpZENvbFdpZHRoKHBvc2l0aW9uUGFyYW1zKTtcbiAgdmFyIG91dCA9IHt9OyAvLyBJZiByZXNpemluZywgdXNlIHRoZSBleGFjdCB3aWR0aCBhbmQgaGVpZ2h0IGFzIHJldHVybmVkIGZyb20gcmVzaXppbmcgY2FsbGJhY2tzLlxuXG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5yZXNpemluZykge1xuICAgIG91dC53aWR0aCA9IE1hdGgucm91bmQoc3RhdGUucmVzaXppbmcud2lkdGgpO1xuICAgIG91dC5oZWlnaHQgPSBNYXRoLnJvdW5kKHN0YXRlLnJlc2l6aW5nLmhlaWdodCk7XG4gIH0gLy8gT3RoZXJ3aXNlLCBjYWxjdWxhdGUgZnJvbSBncmlkIHVuaXRzLlxuICBlbHNlIHtcbiAgICAgIC8vIDAgKiBJbmZpbml0eSA9PT0gTmFOLCB3aGljaCBjYXVzZXMgcHJvYmxlbXMgd2l0aCByZXNpemUgY29uc3RyYWludHM7XG4gICAgICAvLyBGaXggdGhpcyBpZiBpdCBvY2N1cnMuXG4gICAgICAvLyBOb3RlIHdlIGRvIGl0IGhlcmUgcmF0aGVyIHRoYW4gbGF0ZXIgYmVjYXVzZSBNYXRoLnJvdW5kKEluZmluaXR5KSBjYXVzZXMgZGVvcHRcbiAgICAgIG91dC53aWR0aCA9IHcgPT09IEluZmluaXR5ID8gdyA6IE1hdGgucm91bmQoY29sV2lkdGggKiB3ICsgTWF0aC5tYXgoMCwgdyAtIDEpICogbWFyZ2luWzBdKTtcbiAgICAgIG91dC5oZWlnaHQgPSBoID09PSBJbmZpbml0eSA/IGggOiBNYXRoLnJvdW5kKHJvd0hlaWdodCAqIGggKyBNYXRoLm1heCgwLCBoIC0gMSkgKiBtYXJnaW5bMV0pO1xuICAgIH0gLy8gSWYgZHJhZ2dpbmcsIHVzZSB0aGUgZXhhY3Qgd2lkdGggYW5kIGhlaWdodCBhcyByZXR1cm5lZCBmcm9tIGRyYWdnaW5nIGNhbGxiYWNrcy5cblxuXG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5kcmFnZ2luZykge1xuICAgIG91dC50b3AgPSBNYXRoLnJvdW5kKHN0YXRlLmRyYWdnaW5nLnRvcCk7XG4gICAgb3V0LmxlZnQgPSBNYXRoLnJvdW5kKHN0YXRlLmRyYWdnaW5nLmxlZnQpO1xuICB9IC8vIE90aGVyd2lzZSwgY2FsY3VsYXRlIGZyb20gZ3JpZCB1bml0cy5cbiAgZWxzZSB7XG4gICAgICBvdXQudG9wID0gTWF0aC5yb3VuZCgocm93SGVpZ2h0ICsgbWFyZ2luWzFdKSAqIHkgKyBjb250YWluZXJQYWRkaW5nWzFdKTtcbiAgICAgIG91dC5sZWZ0ID0gTWF0aC5yb3VuZCgoY29sV2lkdGggKyBtYXJnaW5bMF0pICogeCArIGNvbnRhaW5lclBhZGRpbmdbMF0pO1xuICAgIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2xhdGUgeCBhbmQgeSBjb29yZGluYXRlcyBmcm9tIHBpeGVscyB0byBncmlkIHVuaXRzLlxuICogQHBhcmFtICB7UG9zaXRpb25QYXJhbXN9IHBvc2l0aW9uUGFyYW1zICBQYXJhbWV0ZXJzIG9mIGdyaWQgbmVlZGVkIGZvciBjb29yZGluYXRlcyBjYWxjdWxhdGlvbnMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRvcCAgICAgICAgICAgICAgICAgICAgIFRvcCBwb3NpdGlvbiAocmVsYXRpdmUgdG8gcGFyZW50KSBpbiBwaXhlbHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGxlZnQgICAgICAgICAgICAgICAgICAgIExlZnQgcG9zaXRpb24gKHJlbGF0aXZlIHRvIHBhcmVudCkgaW4gcGl4ZWxzLlxuICogQHBhcmFtICB7TnVtYmVyfSB3ICAgICAgICAgICAgICAgICAgICAgICBXIGNvb3JkaW5hdGUgaW4gZ3JpZCB1bml0cy5cbiAqIEBwYXJhbSAge051bWJlcn0gaCAgICAgICAgICAgICAgICAgICAgICAgSCBjb29yZGluYXRlIGluIGdyaWQgdW5pdHMuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgIHggYW5kIHkgaW4gZ3JpZCB1bml0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbGNYWShwb3NpdGlvblBhcmFtc1xuLyo6IFBvc2l0aW9uUGFyYW1zKi9cbiwgdG9wXG4vKjogbnVtYmVyKi9cbiwgbGVmdFxuLyo6IG51bWJlciovXG4sIHdcbi8qOiBudW1iZXIqL1xuLCBoXG4vKjogbnVtYmVyKi9cbilcbi8qOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0qL1xue1xuICB2YXIgbWFyZ2luID0gcG9zaXRpb25QYXJhbXMubWFyZ2luLFxuICAgICAgY29scyA9IHBvc2l0aW9uUGFyYW1zLmNvbHMsXG4gICAgICByb3dIZWlnaHQgPSBwb3NpdGlvblBhcmFtcy5yb3dIZWlnaHQsXG4gICAgICBtYXhSb3dzID0gcG9zaXRpb25QYXJhbXMubWF4Um93cztcbiAgdmFyIGNvbFdpZHRoID0gY2FsY0dyaWRDb2xXaWR0aChwb3NpdGlvblBhcmFtcyk7IC8vIGxlZnQgPSBjb2xXaWR0aCAqIHggKyBtYXJnaW4gKiAoeCArIDEpXG4gIC8vIGwgPSBjeCArIG0oeCsxKVxuICAvLyBsID0gY3ggKyBteCArIG1cbiAgLy8gbCAtIG0gPSBjeCArIG14XG4gIC8vIGwgLSBtID0geChjICsgbSlcbiAgLy8gKGwgLSBtKSAvIChjICsgbSkgPSB4XG4gIC8vIHggPSAobGVmdCAtIG1hcmdpbikgLyAoY29sZFdpZHRoICsgbWFyZ2luKVxuXG4gIHZhciB4ID0gTWF0aC5yb3VuZCgobGVmdCAtIG1hcmdpblswXSkgLyAoY29sV2lkdGggKyBtYXJnaW5bMF0pKTtcbiAgdmFyIHkgPSBNYXRoLnJvdW5kKCh0b3AgLSBtYXJnaW5bMV0pIC8gKHJvd0hlaWdodCArIG1hcmdpblsxXSkpOyAvLyBDYXBwaW5nXG5cbiAgeCA9IE1hdGgubWF4KE1hdGgubWluKHgsIGNvbHMgLSB3KSwgMCk7XG4gIHkgPSBNYXRoLm1heChNYXRoLm1pbih5LCBtYXhSb3dzIC0gaCksIDApO1xuICByZXR1cm4ge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufVxuLyoqXG4gKiBHaXZlbiBhIGhlaWdodCBhbmQgd2lkdGggaW4gcGl4ZWwgdmFsdWVzLCBjYWxjdWxhdGUgZ3JpZCB1bml0cy5cbiAqIEBwYXJhbSAge1Bvc2l0aW9uUGFyYW1zfSBwb3NpdGlvblBhcmFtcyAgUGFyYW1ldGVycyBvZiBncmlkIG5lZWRlZCBmb3IgY29vcmRpbmF0ZXMgY2FsY2x1YXRpb25zLlxuICogQHBhcmFtICB7TnVtYmVyfSBoZWlnaHQgICAgICAgICAgICAgICAgICBIZWlnaHQgaW4gcGl4ZWxzLlxuICogQHBhcmFtICB7TnVtYmVyfSB3aWR0aCAgICAgICAgICAgICAgICAgICBXaWR0aCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgICAgICAgICAgICAgICAgICAgIFggY29vcmRpbmF0ZSBpbiBncmlkIHVuaXRzLlxuICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICAgICAgICAgICAgICAgICAgICBZIGNvb3JkaW5hdGUgaW4gZ3JpZCB1bml0cy5cbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgICAgdywgaCBhcyBncmlkIHVuaXRzLlxuICovXG5cblxuZnVuY3Rpb24gY2FsY1dIKHBvc2l0aW9uUGFyYW1zXG4vKjogUG9zaXRpb25QYXJhbXMqL1xuLCB3aWR0aFxuLyo6IG51bWJlciovXG4sIGhlaWdodFxuLyo6IG51bWJlciovXG4sIHhcbi8qOiBudW1iZXIqL1xuLCB5XG4vKjogbnVtYmVyKi9cbilcbi8qOiB7IHc6IG51bWJlciwgaDogbnVtYmVyIH0qL1xue1xuICB2YXIgbWFyZ2luID0gcG9zaXRpb25QYXJhbXMubWFyZ2luLFxuICAgICAgbWF4Um93cyA9IHBvc2l0aW9uUGFyYW1zLm1heFJvd3MsXG4gICAgICBjb2xzID0gcG9zaXRpb25QYXJhbXMuY29scyxcbiAgICAgIHJvd0hlaWdodCA9IHBvc2l0aW9uUGFyYW1zLnJvd0hlaWdodDtcbiAgdmFyIGNvbFdpZHRoID0gY2FsY0dyaWRDb2xXaWR0aChwb3NpdGlvblBhcmFtcyk7IC8vIHdpZHRoID0gY29sV2lkdGggKiB3IC0gKG1hcmdpbiAqICh3IC0gMSkpXG4gIC8vIC4uLlxuICAvLyB3ID0gKHdpZHRoICsgbWFyZ2luKSAvIChjb2xXaWR0aCArIG1hcmdpbilcblxuICB2YXIgdyA9IE1hdGgucm91bmQoKHdpZHRoICsgbWFyZ2luWzBdKSAvIChjb2xXaWR0aCArIG1hcmdpblswXSkpO1xuICB2YXIgaCA9IE1hdGgucm91bmQoKGhlaWdodCArIG1hcmdpblsxXSkgLyAocm93SGVpZ2h0ICsgbWFyZ2luWzFdKSk7IC8vIENhcHBpbmdcblxuICB3ID0gTWF0aC5tYXgoTWF0aC5taW4odywgY29scyAtIHgpLCAwKTtcbiAgaCA9IE1hdGgubWF4KE1hdGgubWluKGgsIG1heFJvd3MgLSB5KSwgMCk7XG4gIHJldHVybiB7XG4gICAgdzogdyxcbiAgICBoOiBoXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBXaWR0aFByb3ZpZGVyO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLypcbiAqIEEgc2ltcGxlIEhPQyB0aGF0IHByb3ZpZGVzIGZhY2lsaXR5IGZvciBsaXN0ZW5pbmcgdG8gY29udGFpbmVyIHJlc2l6ZXMuXG4gKlxuICogVGhlIEZsb3cgdHlwZSBpcyBwcmV0dHkgamFua3kgaGVyZS4gSSBjYW4ndCBqdXN0IHNwcmVhZCBgV1BQcm9wc2AgaW50byB0aGlzIHJldHVybmVkIG9iamVjdCAtIEkgd2lzaCBJIGNvdWxkIC0gYnV0IGl0IHRyaWdnZXJzXG4gKiBhIGZsb3cgYnVnIG9mIHNvbWUgc29ydCB0aGF0IGNhdXNlcyBpdCB0byBzdG9wIHR5cGVjaGVja2luZy5cbiAqL1xuZnVuY3Rpb24gV2lkdGhQcm92aWRlclxuLyo6OiA8Q29uZmlnPiovXG4oQ29tcG9zZWRDb21wb25lbnRcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDxDb25maWc+Ki9cbilcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDx7fFxuICAuLi5Db25maWcsXG4gIG1lYXN1cmVCZWZvcmVNb3VudD86IGJvb2xlYW4sXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgc3R5bGU/OiBPYmplY3QsXG4gIHdpZHRoPzogbnVtYmVyXG58fT4qL1xue1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFdpZHRoUHJvdmlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV2lkdGhQcm92aWRlcigpIHtcbiAgICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaWR0aFByb3ZpZGVyKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoV2lkdGhQcm92aWRlcikpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge1xuICAgICAgICB3aWR0aDogMTI4MFxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtb3VudGVkXCIsIGZhbHNlKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uV2luZG93UmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5tb3VudGVkKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1maW5kLWRvbS1ub2RlXG5cbiAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20uZGVmYXVsdC5maW5kRE9NTm9kZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7IC8vIEZsb3cgY2FzdHMgdGhpcyB0byBUZXh0IHwgRWxlbWVudFxuXG5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHdpZHRoOiBub2RlLm9mZnNldFdpZHRoXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2lkdGhQcm92aWRlciwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uV2luZG93UmVzaXplKTsgLy8gQ2FsbCB0byBwcm9wZXJseSBzZXQgdGhlIGJyZWFrcG9pbnQgYW5kIHJlc2l6ZSB0aGUgZWxlbWVudHMuXG4gICAgICAgIC8vIE5vdGUgdGhhdCBpZiB5b3UncmUgZG9pbmcgYSBmdWxsLXdpZHRoIGVsZW1lbnQsIHRoaXMgY2FuIGdldCBhIGxpdHRsZSB3b25reSBpZiBhIHNjcm9sbGJhclxuICAgICAgICAvLyBhcHBlYXJzIGJlY2F1c2Ugb2YgdGhlIGdyaWQuIEluIHRoYXQgY2FzZSwgZmlyZSB5b3VyIG93biByZXNpemUgZXZlbnQsIG9yIHNldCBgb3ZlcmZsb3c6IHNjcm9sbGAgb24geW91ciBib2R5LlxuXG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBtZWFzdXJlQmVmb3JlTW91bnQgPSBfdGhpcyRwcm9wcy5tZWFzdXJlQmVmb3JlTW91bnQsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzLCBbXCJtZWFzdXJlQmVmb3JlTW91bnRcIl0pO1xuXG4gICAgICAgIGlmIChtZWFzdXJlQmVmb3JlTW91bnQgJiYgIXRoaXMubW91bnRlZCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCByZXN0LCB0aGlzLnN0YXRlKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdpZHRoUHJvdmlkZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIG1lYXN1cmVCZWZvcmVNb3VudDogZmFsc2VcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3MsIFwicHJvcFR5cGVzXCIsIHtcbiAgICAvLyBJZiB0cnVlLCB3aWxsIG5vdCByZW5kZXIgY2hpbGRyZW4gdW50aWwgbW91bnRlZC4gVXNlZnVsIGZvciBnZXR0aW5nIHRoZSBleGFjdCB3aWR0aCBiZWZvcmVcbiAgICAvLyByZW5kZXJpbmcsIHRvIHByZXZlbnQgYW55IHVuc2lnaHRseSByZXNpemluZy5cbiAgICBtZWFzdXJlQmVmb3JlTW91bnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sXG4gIH0pLCBfdGVtcDtcbn0iLCIvLyB0aGlzIGZpbGUgd2FzIHByZXZhbGVkXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RSR0xQcm9wc0VxdWFsKGEsIGIsIGlzRXF1YWxJbXBsKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGEuY2xhc3NOYW1lID09PSBiLmNsYXNzTmFtZSAmJiBpc0VxdWFsSW1wbChhLnN0eWxlLCBiLnN0eWxlKSAmJiBhLndpZHRoID09PSBiLndpZHRoICYmIGEuYXV0b1NpemUgPT09IGIuYXV0b1NpemUgJiYgYS5jb2xzID09PSBiLmNvbHMgJiYgYS5kcmFnZ2FibGVDYW5jZWwgPT09IGIuZHJhZ2dhYmxlQ2FuY2VsICYmIGEuZHJhZ2dhYmxlSGFuZGxlID09PSBiLmRyYWdnYWJsZUhhbmRsZSAmJiBpc0VxdWFsSW1wbChhLnZlcnRpY2FsQ29tcGFjdCwgYi52ZXJ0aWNhbENvbXBhY3QpICYmIGlzRXF1YWxJbXBsKGEuY29tcGFjdFR5cGUsIGIuY29tcGFjdFR5cGUpICYmIGlzRXF1YWxJbXBsKGEubGF5b3V0LCBiLmxheW91dCkgJiYgaXNFcXVhbEltcGwoYS5tYXJnaW4sIGIubWFyZ2luKSAmJiBpc0VxdWFsSW1wbChhLmNvbnRhaW5lclBhZGRpbmcsIGIuY29udGFpbmVyUGFkZGluZykgJiYgYS5yb3dIZWlnaHQgPT09IGIucm93SGVpZ2h0ICYmIGEubWF4Um93cyA9PT0gYi5tYXhSb3dzICYmIGEuaXNEcmFnZ2FibGUgPT09IGIuaXNEcmFnZ2FibGUgJiYgYS5pc1Jlc2l6YWJsZSA9PT0gYi5pc1Jlc2l6YWJsZSAmJiBhLnByZXZlbnRDb2xsaXNpb24gPT09IGIucHJldmVudENvbGxpc2lvbiAmJiBhLnVzZUNTU1RyYW5zZm9ybXMgPT09IGIudXNlQ1NTVHJhbnNmb3JtcyAmJiBhLnRyYW5zZm9ybVNjYWxlID09PSBiLnRyYW5zZm9ybVNjYWxlICYmIGEuaXNEcm9wcGFibGUgPT09IGIuaXNEcm9wcGFibGUgJiYgYS5vbkxheW91dENoYW5nZSA9PT0gYi5vbkxheW91dENoYW5nZSAmJiBhLm9uRHJhZ1N0YXJ0ID09PSBiLm9uRHJhZ1N0YXJ0ICYmIGEub25EcmFnID09PSBiLm9uRHJhZyAmJiBhLm9uRHJhZ1N0b3AgPT09IGIub25EcmFnU3RvcCAmJiBhLm9uUmVzaXplU3RhcnQgPT09IGIub25SZXNpemVTdGFydCAmJiBhLm9uUmVzaXplID09PSBiLm9uUmVzaXplICYmIGEub25SZXNpemVTdG9wID09PSBiLm9uUmVzaXplU3RvcCAmJiBhLm9uRHJvcCA9PT0gYi5vbkRyb3AgJiYgaXNFcXVhbEltcGwoYS5kcm9wcGluZ0l0ZW0sIGIuZHJvcHBpbmdJdGVtKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEJyZWFrcG9pbnRGcm9tV2lkdGggPSBnZXRCcmVha3BvaW50RnJvbVdpZHRoO1xuZXhwb3J0cy5nZXRDb2xzRnJvbUJyZWFrcG9pbnQgPSBnZXRDb2xzRnJvbUJyZWFrcG9pbnQ7XG5leHBvcnRzLmZpbmRPckdlbmVyYXRlUmVzcG9uc2l2ZUxheW91dCA9IGZpbmRPckdlbmVyYXRlUmVzcG9uc2l2ZUxheW91dDtcbmV4cG9ydHMuc29ydEJyZWFrcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbi8qKlxuICogR2l2ZW4gYSB3aWR0aCwgZmluZCB0aGUgaGlnaGVzdCBicmVha3BvaW50IHRoYXQgbWF0Y2hlcyBpcyB2YWxpZCBmb3IgaXQgKHdpZHRoID4gYnJlYWtwb2ludCkuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBicmVha3BvaW50cyBCcmVha3BvaW50cyBvYmplY3QgKGUuZy4ge2xnOiAxMjAwLCBtZDogOTYwLCAuLi59KVxuICogQHBhcmFtICB7TnVtYmVyfSB3aWR0aCBTY3JlZW4gd2lkdGguXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIEhpZ2hlc3QgYnJlYWtwb2ludCB0aGF0IGlzIGxlc3MgdGhhbiB3aWR0aC5cbiAqL1xuZnVuY3Rpb24gZ2V0QnJlYWtwb2ludEZyb21XaWR0aChicmVha3BvaW50c1xuLyo6IEJyZWFrcG9pbnRzPEJyZWFrcG9pbnQ+Ki9cbiwgd2lkdGhcbi8qOiBudW1iZXIqL1xuKVxuLyo6IEJyZWFrcG9pbnQqL1xue1xuICB2YXIgc29ydGVkID0gc29ydEJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzKTtcbiAgdmFyIG1hdGNoaW5nID0gc29ydGVkWzBdO1xuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBzb3J0ZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYnJlYWtwb2ludE5hbWUgPSBzb3J0ZWRbaV07XG4gICAgaWYgKHdpZHRoID4gYnJlYWtwb2ludHNbYnJlYWtwb2ludE5hbWVdKSBtYXRjaGluZyA9IGJyZWFrcG9pbnROYW1lO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoaW5nO1xufVxuLyoqXG4gKiBHaXZlbiBhIGJyZWFrcG9pbnQsIGdldCB0aGUgIyBvZiBjb2xzIHNldCBmb3IgaXQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGJyZWFrcG9pbnQgQnJlYWtwb2ludCBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSBjb2xzICAgICAgIE1hcCBvZiBicmVha3BvaW50cyB0byBjb2xzLlxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgIE51bWJlciBvZiBjb2xzLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q29sc0Zyb21CcmVha3BvaW50KGJyZWFrcG9pbnRcbi8qOiBCcmVha3BvaW50Ki9cbiwgY29sc1xuLyo6IEJyZWFrcG9pbnRzPEJyZWFrcG9pbnQ+Ki9cbilcbi8qOiBudW1iZXIqL1xue1xuICBpZiAoIWNvbHNbYnJlYWtwb2ludF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0OiBgY29sc2AgZW50cnkgZm9yIGJyZWFrcG9pbnQgXCIgKyBicmVha3BvaW50ICsgXCIgaXMgbWlzc2luZyFcIik7XG4gIH1cblxuICByZXR1cm4gY29sc1ticmVha3BvaW50XTtcbn1cbi8qKlxuICogR2l2ZW4gZXhpc3RpbmcgbGF5b3V0cyBhbmQgYSBuZXcgYnJlYWtwb2ludCwgZmluZCBvciBnZW5lcmF0ZSBhIG5ldyBsYXlvdXQuXG4gKlxuICogVGhpcyBmaW5kcyB0aGUgbGF5b3V0IGFib3ZlIHRoZSBuZXcgb25lIGFuZCBnZW5lcmF0ZXMgZnJvbSBpdCwgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gbGF5b3V0cyAgICAgRXhpc3RpbmcgbGF5b3V0cy5cbiAqIEBwYXJhbSAge0FycmF5fSBicmVha3BvaW50cyBBbGwgYnJlYWtwb2ludHMuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGJyZWFrcG9pbnQgTmV3IGJyZWFrcG9pbnQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGJyZWFrcG9pbnQgTGFzdCBicmVha3BvaW50IChmb3IgZmFsbGJhY2spLlxuICogQHBhcmFtICB7TnVtYmVyfSBjb2xzICAgICAgIENvbHVtbiBjb3VudCBhdCBuZXcgYnJlYWtwb2ludC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59IHZlcnRpY2FsQ29tcGFjdCBXaGV0aGVyIG9yIG5vdCB0byBjb21wYWN0IHRoZSBsYXlvdXRcbiAqICAgdmVydGljYWxseS5cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICBOZXcgbGF5b3V0LlxuICovXG5cblxuZnVuY3Rpb24gZmluZE9yR2VuZXJhdGVSZXNwb25zaXZlTGF5b3V0KGxheW91dHNcbi8qOiBSZXNwb25zaXZlTGF5b3V0PEJyZWFrcG9pbnQ+Ki9cbiwgYnJlYWtwb2ludHNcbi8qOiBCcmVha3BvaW50czxCcmVha3BvaW50PiovXG4sIGJyZWFrcG9pbnRcbi8qOiBCcmVha3BvaW50Ki9cbiwgbGFzdEJyZWFrcG9pbnRcbi8qOiBCcmVha3BvaW50Ki9cbiwgY29sc1xuLyo6IG51bWJlciovXG4sIGNvbXBhY3RUeXBlXG4vKjogQ29tcGFjdFR5cGUqL1xuKVxuLyo6IExheW91dCovXG57XG4gIC8vIElmIGl0IGFscmVhZHkgZXhpc3RzLCBqdXN0IHJldHVybiBpdC5cbiAgaWYgKGxheW91dHNbYnJlYWtwb2ludF0pIHJldHVybiAoMCwgX3V0aWxzLmNsb25lTGF5b3V0KShsYXlvdXRzW2JyZWFrcG9pbnRdKTsgLy8gRmluZCBvciBnZW5lcmF0ZSB0aGUgbmV4dCBsYXlvdXRcblxuICB2YXIgbGF5b3V0ID0gbGF5b3V0c1tsYXN0QnJlYWtwb2ludF07XG4gIHZhciBicmVha3BvaW50c1NvcnRlZCA9IHNvcnRCcmVha3BvaW50cyhicmVha3BvaW50cyk7XG4gIHZhciBicmVha3BvaW50c0Fib3ZlID0gYnJlYWtwb2ludHNTb3J0ZWQuc2xpY2UoYnJlYWtwb2ludHNTb3J0ZWQuaW5kZXhPZihicmVha3BvaW50KSk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJyZWFrcG9pbnRzQWJvdmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYiA9IGJyZWFrcG9pbnRzQWJvdmVbaV07XG5cbiAgICBpZiAobGF5b3V0c1tiXSkge1xuICAgICAgbGF5b3V0ID0gbGF5b3V0c1tiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCA9ICgwLCBfdXRpbHMuY2xvbmVMYXlvdXQpKGxheW91dCB8fCBbXSk7IC8vIGNsb25lIGxheW91dCBzbyB3ZSBkb24ndCBtb2RpZnkgZXhpc3RpbmcgaXRlbXNcblxuICByZXR1cm4gKDAsIF91dGlscy5jb21wYWN0KSgoMCwgX3V0aWxzLmNvcnJlY3RCb3VuZHMpKGxheW91dCwge1xuICAgIGNvbHM6IGNvbHNcbiAgfSksIGNvbXBhY3RUeXBlLCBjb2xzKTtcbn1cbi8qKlxuICogR2l2ZW4gYnJlYWtwb2ludHMsIHJldHVybiBhbiBhcnJheSBvZiBicmVha3BvaW50cyBzb3J0ZWQgYnkgd2lkdGguIFRoaXMgaXMgdXN1YWxseVxuICogZS5nLiBbJ3h4cycsICd4cycsICdzbScsIC4uLl1cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGJyZWFrcG9pbnRzIEtleS92YWx1ZSBwYWlyIG9mIGJyZWFrcG9pbnQgbmFtZXMgdG8gd2lkdGhzLlxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICBTb3J0ZWQgYnJlYWtwb2ludHMuXG4gKi9cblxuXG5mdW5jdGlvbiBzb3J0QnJlYWtwb2ludHMoYnJlYWtwb2ludHNcbi8qOiBCcmVha3BvaW50czxCcmVha3BvaW50PiovXG4pXG4vKjogQXJyYXk8QnJlYWtwb2ludD4qL1xue1xuICB2YXIga2V5c1xuICAvKjogQXJyYXk8c3RyaW5nPiovXG4gID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpO1xuICByZXR1cm4ga2V5cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGJyZWFrcG9pbnRzW2FdIC0gYnJlYWtwb2ludHNbYl07XG4gIH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib3R0b20gPSBib3R0b207XG5leHBvcnRzLmNsb25lTGF5b3V0ID0gY2xvbmVMYXlvdXQ7XG5leHBvcnRzLmNsb25lTGF5b3V0SXRlbSA9IGNsb25lTGF5b3V0SXRlbTtcbmV4cG9ydHMuY2hpbGRyZW5FcXVhbCA9IGNoaWxkcmVuRXF1YWw7XG5leHBvcnRzLmZhc3RQb3NpdGlvbkVxdWFsID0gZmFzdFBvc2l0aW9uRXF1YWw7XG5leHBvcnRzLmNvbGxpZGVzID0gY29sbGlkZXM7XG5leHBvcnRzLmNvbXBhY3QgPSBjb21wYWN0O1xuZXhwb3J0cy5jb21wYWN0SXRlbSA9IGNvbXBhY3RJdGVtO1xuZXhwb3J0cy5jb3JyZWN0Qm91bmRzID0gY29ycmVjdEJvdW5kcztcbmV4cG9ydHMuZ2V0TGF5b3V0SXRlbSA9IGdldExheW91dEl0ZW07XG5leHBvcnRzLmdldEZpcnN0Q29sbGlzaW9uID0gZ2V0Rmlyc3RDb2xsaXNpb247XG5leHBvcnRzLmdldEFsbENvbGxpc2lvbnMgPSBnZXRBbGxDb2xsaXNpb25zO1xuZXhwb3J0cy5nZXRTdGF0aWNzID0gZ2V0U3RhdGljcztcbmV4cG9ydHMubW92ZUVsZW1lbnQgPSBtb3ZlRWxlbWVudDtcbmV4cG9ydHMubW92ZUVsZW1lbnRBd2F5RnJvbUNvbGxpc2lvbiA9IG1vdmVFbGVtZW50QXdheUZyb21Db2xsaXNpb247XG5leHBvcnRzLnBlcmMgPSBwZXJjO1xuZXhwb3J0cy5zZXRUcmFuc2Zvcm0gPSBzZXRUcmFuc2Zvcm07XG5leHBvcnRzLnNldFRvcExlZnQgPSBzZXRUb3BMZWZ0O1xuZXhwb3J0cy5zb3J0TGF5b3V0SXRlbXMgPSBzb3J0TGF5b3V0SXRlbXM7XG5leHBvcnRzLnNvcnRMYXlvdXRJdGVtc0J5Um93Q29sID0gc29ydExheW91dEl0ZW1zQnlSb3dDb2w7XG5leHBvcnRzLnNvcnRMYXlvdXRJdGVtc0J5Q29sUm93ID0gc29ydExheW91dEl0ZW1zQnlDb2xSb3c7XG5leHBvcnRzLnN5bmNocm9uaXplTGF5b3V0V2l0aENoaWxkcmVuID0gc3luY2hyb25pemVMYXlvdXRXaXRoQ2hpbGRyZW47XG5leHBvcnRzLnZhbGlkYXRlTGF5b3V0ID0gdmFsaWRhdGVMYXlvdXQ7XG5leHBvcnRzLmNvbXBhY3RUeXBlID0gY29tcGFjdFR5cGU7XG5leHBvcnRzLmF1dG9CaW5kSGFuZGxlcnMgPSBhdXRvQmluZEhhbmRsZXJzO1xuZXhwb3J0cy5ub29wID0gZXhwb3J0cy5mYXN0UkdMUHJvcHNFcXVhbCA9IHZvaWQgMDtcblxudmFyIF9sb2Rhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2guaXNlcXVhbFwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xudmFyIERFQlVHID0gZmFsc2U7XG4vKipcbiAqIFJldHVybiB0aGUgYm90dG9tIGNvb3JkaW5hdGUgb2YgdGhlIGxheW91dC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gbGF5b3V0IExheW91dCBhcnJheS5cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgQm90dG9tIGNvb3JkaW5hdGUuXG4gKi9cblxuZnVuY3Rpb24gYm90dG9tKGxheW91dFxuLyo6IExheW91dCovXG4pXG4vKjogbnVtYmVyKi9cbntcbiAgdmFyIG1heCA9IDAsXG4gICAgICBib3R0b21ZO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYXlvdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBib3R0b21ZID0gbGF5b3V0W2ldLnkgKyBsYXlvdXRbaV0uaDtcbiAgICBpZiAoYm90dG9tWSA+IG1heCkgbWF4ID0gYm90dG9tWTtcbiAgfVxuXG4gIHJldHVybiBtYXg7XG59XG5cbmZ1bmN0aW9uIGNsb25lTGF5b3V0KGxheW91dFxuLyo6IExheW91dCovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgdmFyIG5ld0xheW91dCA9IEFycmF5KGxheW91dC5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYXlvdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBuZXdMYXlvdXRbaV0gPSBjbG9uZUxheW91dEl0ZW0obGF5b3V0W2ldKTtcbiAgfVxuXG4gIHJldHVybiBuZXdMYXlvdXQ7XG59IC8vIEZhc3QgcGF0aCB0byBjbG9uaW5nLCBzaW5jZSB0aGlzIGlzIG1vbm9tb3JwaGljXG5cblxuZnVuY3Rpb24gY2xvbmVMYXlvdXRJdGVtKGxheW91dEl0ZW1cbi8qOiBMYXlvdXRJdGVtKi9cbilcbi8qOiBMYXlvdXRJdGVtKi9cbntcbiAgcmV0dXJuIHtcbiAgICB3OiBsYXlvdXRJdGVtLncsXG4gICAgaDogbGF5b3V0SXRlbS5oLFxuICAgIHg6IGxheW91dEl0ZW0ueCxcbiAgICB5OiBsYXlvdXRJdGVtLnksXG4gICAgaTogbGF5b3V0SXRlbS5pLFxuICAgIG1pblc6IGxheW91dEl0ZW0ubWluVyxcbiAgICBtYXhXOiBsYXlvdXRJdGVtLm1heFcsXG4gICAgbWluSDogbGF5b3V0SXRlbS5taW5ILFxuICAgIG1heEg6IGxheW91dEl0ZW0ubWF4SCxcbiAgICBtb3ZlZDogQm9vbGVhbihsYXlvdXRJdGVtLm1vdmVkKSxcbiAgICBzdGF0aWM6IEJvb2xlYW4obGF5b3V0SXRlbS5zdGF0aWMpLFxuICAgIC8vIFRoZXNlIGNhbiBiZSBudWxsXG4gICAgaXNEcmFnZ2FibGU6IGxheW91dEl0ZW0uaXNEcmFnZ2FibGUsXG4gICAgaXNSZXNpemFibGU6IGxheW91dEl0ZW0uaXNSZXNpemFibGVcbiAgfTtcbn1cbi8qKlxuICogQ29tcGFyaW5nIFJlYWN0IGBjaGlsZHJlbmAgaXMgYSBiaXQgZGlmZmljdWx0LiBUaGlzIGlzIGEgZ29vZCB3YXkgdG8gY29tcGFyZSB0aGVtLlxuICogVGhpcyB3aWxsIGNhdGNoIGRpZmZlcmVuY2VzIGluIGtleXMsIG9yZGVyLCBhbmQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gY2hpbGRyZW5FcXVhbChhXG4vKjogUmVhY3RDaGlsZHJlbiovXG4sIGJcbi8qOiBSZWFjdENoaWxkcmVuKi9cbilcbi8qOiBib29sZWFuKi9cbntcbiAgcmV0dXJuICgwLCBfbG9kYXNoLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChhLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLmtleTtcbiAgfSksIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChiLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLmtleTtcbiAgfSkpO1xufVxuLyoqXG4gKiBTZWUgYGZhc3RSR0xQcm9wc0VxdWFsLmpzYC5cbiAqIFdlIHdhbnQgdGhpcyB0byBydW4gYXMgZmFzdCBhcyBwb3NzaWJsZSAtIGl0IGlzIGNhbGxlZCBvZnRlbiAtIGFuZCB0byBiZVxuICogcmVzaWxpZW50IHRvIG5ldyBwcm9wcyB0aGF0IHdlIGFkZC4gU28gcmF0aGVyIHRoYW4gY2FsbCBsb2Rhc2guaXNFcXVhbCxcbiAqIHdoaWNoIGlzbid0IHN1aXRlZCB0byBjb21wYXJpbmcgcHJvcHMgdmVyeSB3ZWxsLCB3ZSB1c2UgdGhpcyBzcGVjaWFsaXplZFxuICogZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCBwcmV2YWwgdG8gZ2VuZXJhdGUgdGhlIGZhc3Rlc3QgcG9zc2libGUgY29tcGFyaXNvblxuICogZnVuY3Rpb24sIHR1bmVkIGZvciBleGFjdGx5IG91ciBwcm9wcy5cbiAqL1xuXG4vKjo6IHR5cGUgRmFzdFJHTFByb3BzRXF1YWwgPSAoT2JqZWN0LCBPYmplY3QsIEZ1bmN0aW9uKSA9PiBib29sZWFuOyovXG5cblxudmFyIGZhc3RSR0xQcm9wc0VxdWFsXG4vKjogRmFzdFJHTFByb3BzRXF1YWwqL1xuPSByZXF1aXJlKFwiLi9mYXN0UkdMUHJvcHNFcXVhbFwiKTsgLy8gTGlrZSB0aGUgYWJvdmUsIGJ1dCBhIGxvdCBzaW1wbGVyLlxuXG5cbmV4cG9ydHMuZmFzdFJHTFByb3BzRXF1YWwgPSBmYXN0UkdMUHJvcHNFcXVhbDtcblxuZnVuY3Rpb24gZmFzdFBvc2l0aW9uRXF1YWwoYVxuLyo6IFBvc2l0aW9uKi9cbiwgYlxuLyo6IFBvc2l0aW9uKi9cbikge1xuICByZXR1cm4gYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS50b3AgPT09IGIudG9wICYmIGEud2lkdGggPT09IGIud2lkdGggJiYgYS5oZWlnaHQgPT09IGIuaGVpZ2h0O1xufVxuLyoqXG4gKiBHaXZlbiB0d28gbGF5b3V0aXRlbXMsIGNoZWNrIGlmIHRoZXkgY29sbGlkZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbGxpZGVzKGwxXG4vKjogTGF5b3V0SXRlbSovXG4sIGwyXG4vKjogTGF5b3V0SXRlbSovXG4pXG4vKjogYm9vbGVhbiovXG57XG4gIGlmIChsMS5pID09PSBsMi5pKSByZXR1cm4gZmFsc2U7IC8vIHNhbWUgZWxlbWVudFxuXG4gIGlmIChsMS54ICsgbDEudyA8PSBsMi54KSByZXR1cm4gZmFsc2U7IC8vIGwxIGlzIGxlZnQgb2YgbDJcblxuICBpZiAobDEueCA+PSBsMi54ICsgbDIudykgcmV0dXJuIGZhbHNlOyAvLyBsMSBpcyByaWdodCBvZiBsMlxuXG4gIGlmIChsMS55ICsgbDEuaCA8PSBsMi55KSByZXR1cm4gZmFsc2U7IC8vIGwxIGlzIGFib3ZlIGwyXG5cbiAgaWYgKGwxLnkgPj0gbDIueSArIGwyLmgpIHJldHVybiBmYWxzZTsgLy8gbDEgaXMgYmVsb3cgbDJcblxuICByZXR1cm4gdHJ1ZTsgLy8gYm94ZXMgb3ZlcmxhcFxufVxuLyoqXG4gKiBHaXZlbiBhIGxheW91dCwgY29tcGFjdCBpdC4gVGhpcyBpbnZvbHZlcyBnb2luZyBkb3duIGVhY2ggeSBjb29yZGluYXRlIGFuZCByZW1vdmluZyBnYXBzXG4gKiBiZXR3ZWVuIGl0ZW1zLlxuICpcbiAqIERvZXMgbm90IG1vZGlmeSBsYXlvdXQgaXRlbXMgKGNsb25lcykuIENyZWF0ZXMgYSBuZXcgbGF5b3V0IGFycmF5LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBsYXlvdXQgTGF5b3V0LlxuICogQHBhcmFtICB7Qm9vbGVhbn0gdmVydGljYWxDb21wYWN0IFdoZXRoZXIgb3Igbm90IHRvIGNvbXBhY3QgdGhlIGxheW91dFxuICogICB2ZXJ0aWNhbGx5LlxuICogQHJldHVybiB7QXJyYXl9ICAgICAgIENvbXBhY3RlZCBMYXlvdXQuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21wYWN0KGxheW91dFxuLyo6IExheW91dCovXG4sIGNvbXBhY3RUeXBlXG4vKjogQ29tcGFjdFR5cGUqL1xuLCBjb2xzXG4vKjogbnVtYmVyKi9cbilcbi8qOiBMYXlvdXQqL1xue1xuICAvLyBTdGF0aWNzIGdvIGluIHRoZSBjb21wYXJlV2l0aCBhcnJheSByaWdodCBhd2F5IHNvIGl0ZW1zIGZsb3cgYXJvdW5kIHRoZW0uXG4gIHZhciBjb21wYXJlV2l0aCA9IGdldFN0YXRpY3MobGF5b3V0KTsgLy8gV2UgZ28gdGhyb3VnaCB0aGUgaXRlbXMgYnkgcm93IGFuZCBjb2x1bW4uXG5cbiAgdmFyIHNvcnRlZCA9IHNvcnRMYXlvdXRJdGVtcyhsYXlvdXQsIGNvbXBhY3RUeXBlKTsgLy8gSG9sZGluZyBmb3IgbmV3IGl0ZW1zLlxuXG4gIHZhciBvdXQgPSBBcnJheShsYXlvdXQubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc29ydGVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGwgPSBjbG9uZUxheW91dEl0ZW0oc29ydGVkW2ldKTsgLy8gRG9uJ3QgbW92ZSBzdGF0aWMgZWxlbWVudHNcblxuICAgIGlmICghbC5zdGF0aWMpIHtcbiAgICAgIGwgPSBjb21wYWN0SXRlbShjb21wYXJlV2l0aCwgbCwgY29tcGFjdFR5cGUsIGNvbHMsIHNvcnRlZCk7IC8vIEFkZCB0byBjb21wYXJpc29uIGFycmF5LiBXZSBvbmx5IGNvbGxpZGUgd2l0aCBpdGVtcyBiZWZvcmUgdGhpcyBvbmUuXG4gICAgICAvLyBTdGF0aWNzIGFyZSBhbHJlYWR5IGluIHRoaXMgYXJyYXkuXG5cbiAgICAgIGNvbXBhcmVXaXRoLnB1c2gobCk7XG4gICAgfSAvLyBBZGQgdG8gb3V0cHV0IGFycmF5IHRvIG1ha2Ugc3VyZSB0aGV5IHN0aWxsIGNvbWUgb3V0IGluIHRoZSByaWdodCBvcmRlci5cblxuXG4gICAgb3V0W2xheW91dC5pbmRleE9mKHNvcnRlZFtpXSldID0gbDsgLy8gQ2xlYXIgbW92ZWQgZmxhZywgaWYgaXQgZXhpc3RzLlxuXG4gICAgbC5tb3ZlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxudmFyIGhlaWdodFdpZHRoID0ge1xuICB4OiBcIndcIixcbiAgeTogXCJoXCJcbn07XG4vKipcbiAqIEJlZm9yZSBtb3ZpbmcgaXRlbSBkb3duLCBpdCB3aWxsIGNoZWNrIGlmIHRoZSBtb3ZlbWVudCB3aWxsIGNhdXNlIGNvbGxpc2lvbnMgYW5kIG1vdmUgdGhvc2UgaXRlbXMgZG93biBiZWZvcmUuXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbXBhY3Rpb25Db2xsaXNpb24obGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgaXRlbVxuLyo6IExheW91dEl0ZW0qL1xuLCBtb3ZlVG9Db29yZFxuLyo6IG51bWJlciovXG4sIGF4aXNcbi8qOiBcInhcIiB8IFwieVwiKi9cbikge1xuICB2YXIgc2l6ZVByb3AgPSBoZWlnaHRXaWR0aFtheGlzXTtcbiAgaXRlbVtheGlzXSArPSAxO1xuICB2YXIgaXRlbUluZGV4ID0gbGF5b3V0Lm1hcChmdW5jdGlvbiAobGF5b3V0SXRlbSkge1xuICAgIHJldHVybiBsYXlvdXRJdGVtLmk7XG4gIH0pLmluZGV4T2YoaXRlbS5pKTsgLy8gR28gdGhyb3VnaCBlYWNoIGl0ZW0gd2UgY29sbGlkZSB3aXRoLlxuXG4gIGZvciAodmFyIGkgPSBpdGVtSW5kZXggKyAxOyBpIDwgbGF5b3V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG90aGVySXRlbSA9IGxheW91dFtpXTsgLy8gSWdub3JlIHN0YXRpYyBpdGVtc1xuXG4gICAgaWYgKG90aGVySXRlbS5zdGF0aWMpIGNvbnRpbnVlOyAvLyBPcHRpbWl6YXRpb246IHdlIGNhbiBicmVhayBlYXJseSBpZiB3ZSBrbm93IHdlJ3JlIHBhc3QgdGhpcyBlbFxuICAgIC8vIFdlIGNhbiBkbyB0aGlzIGIvYyBpdCdzIGEgc29ydGVkIGxheW91dFxuXG4gICAgaWYgKG90aGVySXRlbS55ID4gaXRlbS55ICsgaXRlbS5oKSBicmVhaztcblxuICAgIGlmIChjb2xsaWRlcyhpdGVtLCBvdGhlckl0ZW0pKSB7XG4gICAgICByZXNvbHZlQ29tcGFjdGlvbkNvbGxpc2lvbihsYXlvdXQsIG90aGVySXRlbSwgbW92ZVRvQ29vcmQgKyBpdGVtW3NpemVQcm9wXSwgYXhpcyk7XG4gICAgfVxuICB9XG5cbiAgaXRlbVtheGlzXSA9IG1vdmVUb0Nvb3JkO1xufVxuLyoqXG4gKiBDb21wYWN0IGFuIGl0ZW0gaW4gdGhlIGxheW91dC5cbiAqXG4gKiBNb2RpZmllcyBpdGVtLlxuICpcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbXBhY3RJdGVtKGNvbXBhcmVXaXRoXG4vKjogTGF5b3V0Ki9cbiwgbFxuLyo6IExheW91dEl0ZW0qL1xuLCBjb21wYWN0VHlwZVxuLyo6IENvbXBhY3RUeXBlKi9cbiwgY29sc1xuLyo6IG51bWJlciovXG4sIGZ1bGxMYXlvdXRcbi8qOiBMYXlvdXQqL1xuKVxuLyo6IExheW91dEl0ZW0qL1xue1xuICB2YXIgY29tcGFjdFYgPSBjb21wYWN0VHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiO1xuICB2YXIgY29tcGFjdEggPSBjb21wYWN0VHlwZSA9PT0gXCJob3Jpem9udGFsXCI7XG5cbiAgaWYgKGNvbXBhY3RWKSB7XG4gICAgLy8gQm90dG9tICd5JyBwb3NzaWJsZSBpcyB0aGUgYm90dG9tIG9mIHRoZSBsYXlvdXQuXG4gICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIGRvIG5pY2Ugc3R1ZmYgbGlrZSBzcGVjaWZ5IHt5OiBJbmZpbml0eX1cbiAgICAvLyBUaGlzIGlzIGhlcmUgYmVjYXVzZSB0aGUgbGF5b3V0IG11c3QgYmUgc29ydGVkIGluIG9yZGVyIHRvIGdldCB0aGUgY29ycmVjdCBib3R0b20gYHlgLlxuICAgIGwueSA9IE1hdGgubWluKGJvdHRvbShjb21wYXJlV2l0aCksIGwueSk7IC8vIE1vdmUgdGhlIGVsZW1lbnQgdXAgYXMgZmFyIGFzIGl0IGNhbiBnbyB3aXRob3V0IGNvbGxpZGluZy5cblxuICAgIHdoaWxlIChsLnkgPiAwICYmICFnZXRGaXJzdENvbGxpc2lvbihjb21wYXJlV2l0aCwgbCkpIHtcbiAgICAgIGwueS0tO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb21wYWN0SCkge1xuICAgIGwueSA9IE1hdGgubWluKGJvdHRvbShjb21wYXJlV2l0aCksIGwueSk7IC8vIE1vdmUgdGhlIGVsZW1lbnQgbGVmdCBhcyBmYXIgYXMgaXQgY2FuIGdvIHdpdGhvdXQgY29sbGlkaW5nLlxuXG4gICAgd2hpbGUgKGwueCA+IDAgJiYgIWdldEZpcnN0Q29sbGlzaW9uKGNvbXBhcmVXaXRoLCBsKSkge1xuICAgICAgbC54LS07XG4gICAgfVxuICB9IC8vIE1vdmUgaXQgZG93biwgYW5kIGtlZXAgbW92aW5nIGl0IGRvd24gaWYgaXQncyBjb2xsaWRpbmcuXG5cblxuICB2YXIgY29sbGlkZXM7XG5cbiAgd2hpbGUgKGNvbGxpZGVzID0gZ2V0Rmlyc3RDb2xsaXNpb24oY29tcGFyZVdpdGgsIGwpKSB7XG4gICAgaWYgKGNvbXBhY3RIKSB7XG4gICAgICByZXNvbHZlQ29tcGFjdGlvbkNvbGxpc2lvbihmdWxsTGF5b3V0LCBsLCBjb2xsaWRlcy54ICsgY29sbGlkZXMudywgXCJ4XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlQ29tcGFjdGlvbkNvbGxpc2lvbihmdWxsTGF5b3V0LCBsLCBjb2xsaWRlcy55ICsgY29sbGlkZXMuaCwgXCJ5XCIpO1xuICAgIH0gLy8gU2luY2Ugd2UgY2FuJ3QgZ3JvdyB3aXRob3V0IGJvdW5kcyBob3Jpem9udGFsbHksIGlmIHdlJ3ZlIG92ZXJmbG93biwgbGV0J3MgbW92ZSBpdCBkb3duIGFuZCB0cnkgYWdhaW4uXG5cblxuICAgIGlmIChjb21wYWN0SCAmJiBsLnggKyBsLncgPiBjb2xzKSB7XG4gICAgICBsLnggPSBjb2xzIC0gbC53O1xuICAgICAgbC55Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGw7XG59XG4vKipcbiAqIEdpdmVuIGEgbGF5b3V0LCBtYWtlIHN1cmUgYWxsIGVsZW1lbnRzIGZpdCB3aXRoaW4gaXRzIGJvdW5kcy5cbiAqXG4gKiBNb2RpZmllcyBsYXlvdXQgaXRlbXMuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGxheW91dCBMYXlvdXQgYXJyYXkuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGJvdW5kcyBOdW1iZXIgb2YgY29sdW1ucy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvcnJlY3RCb3VuZHMobGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgYm91bmRzXG4vKjogeyBjb2xzOiBudW1iZXIgfSovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgdmFyIGNvbGxpZGVzV2l0aCA9IGdldFN0YXRpY3MobGF5b3V0KTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5b3V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGwgPSBsYXlvdXRbaV07IC8vIE92ZXJmbG93cyByaWdodFxuXG4gICAgaWYgKGwueCArIGwudyA+IGJvdW5kcy5jb2xzKSBsLnggPSBib3VuZHMuY29scyAtIGwudzsgLy8gT3ZlcmZsb3dzIGxlZnRcblxuICAgIGlmIChsLnggPCAwKSB7XG4gICAgICBsLnggPSAwO1xuICAgICAgbC53ID0gYm91bmRzLmNvbHM7XG4gICAgfVxuXG4gICAgaWYgKCFsLnN0YXRpYykgY29sbGlkZXNXaXRoLnB1c2gobCk7ZWxzZSB7XG4gICAgICAvLyBJZiB0aGlzIGlzIHN0YXRpYyBhbmQgY29sbGlkZXMgd2l0aCBvdGhlciBzdGF0aWNzLCB3ZSBtdXN0IG1vdmUgaXQgZG93bi5cbiAgICAgIC8vIFdlIGhhdmUgdG8gZG8gc29tZXRoaW5nIG5pY2VyIHRoYW4ganVzdCBsZXR0aW5nIHRoZW0gb3ZlcmxhcC5cbiAgICAgIHdoaWxlIChnZXRGaXJzdENvbGxpc2lvbihjb2xsaWRlc1dpdGgsIGwpKSB7XG4gICAgICAgIGwueSsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYXlvdXQ7XG59XG4vKipcbiAqIEdldCBhIGxheW91dCBpdGVtIGJ5IElELiBVc2VkIHNvIHdlIGNhbiBvdmVycmlkZSBsYXRlciBvbiBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBsYXlvdXQgTGF5b3V0IGFycmF5LlxuICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgSURcbiAqIEByZXR1cm4ge0xheW91dEl0ZW19ICAgIEl0ZW0gYXQgSUQuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRMYXlvdXRJdGVtKGxheW91dFxuLyo6IExheW91dCovXG4sIGlkXG4vKjogc3RyaW5nKi9cbilcbi8qOiA/TGF5b3V0SXRlbSovXG57XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYXlvdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAobGF5b3V0W2ldLmkgPT09IGlkKSByZXR1cm4gbGF5b3V0W2ldO1xuICB9XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGl0ZW0gdGhpcyBsYXlvdXQgY29sbGlkZXMgd2l0aC5cbiAqIEl0IGRvZXNuJ3QgYXBwZWFyIHRvIG1hdHRlciB3aGljaCBvcmRlciB3ZSBhcHByb2FjaCB0aGlzIGZyb20sIGFsdGhvdWdoXG4gKiBwZXJoYXBzIHRoYXQgaXMgdGhlIHdyb25nIHRoaW5nIHRvIGRvLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gbGF5b3V0SXRlbSBMYXlvdXQgaXRlbS5cbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9ICBBIGNvbGxpZGluZyBsYXlvdXQgaXRlbSwgb3IgdW5kZWZpbmVkLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0Rmlyc3RDb2xsaXNpb24obGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgbGF5b3V0SXRlbVxuLyo6IExheW91dEl0ZW0qL1xuKVxuLyo6ID9MYXlvdXRJdGVtKi9cbntcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxheW91dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChjb2xsaWRlcyhsYXlvdXRbaV0sIGxheW91dEl0ZW0pKSByZXR1cm4gbGF5b3V0W2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsbENvbGxpc2lvbnMobGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgbGF5b3V0SXRlbVxuLyo6IExheW91dEl0ZW0qL1xuKVxuLyo6IEFycmF5PExheW91dEl0ZW0+Ki9cbntcbiAgcmV0dXJuIGxheW91dC5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICByZXR1cm4gY29sbGlkZXMobCwgbGF5b3V0SXRlbSk7XG4gIH0pO1xufVxuLyoqXG4gKiBHZXQgYWxsIHN0YXRpYyBlbGVtZW50cy5cbiAqIEBwYXJhbSAge0FycmF5fSBsYXlvdXQgQXJyYXkgb2YgbGF5b3V0IG9iamVjdHMuXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIHN0YXRpYyBsYXlvdXQgaXRlbXMuLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhsYXlvdXRcbi8qOiBMYXlvdXQqL1xuKVxuLyo6IEFycmF5PExheW91dEl0ZW0+Ki9cbntcbiAgcmV0dXJuIGxheW91dC5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICByZXR1cm4gbC5zdGF0aWM7XG4gIH0pO1xufVxuLyoqXG4gKiBNb3ZlIGFuIGVsZW1lbnQuIFJlc3BvbnNpYmxlIGZvciBkb2luZyBjYXNjYWRpbmcgbW92ZW1lbnRzIG9mIG90aGVyIGVsZW1lbnRzLlxuICpcbiAqIE1vZGlmaWVzIGxheW91dCBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgICBsYXlvdXQgICAgICAgICAgICBGdWxsIGxheW91dCB0byBtb2RpZnkuXG4gKiBAcGFyYW0gIHtMYXlvdXRJdGVtfSBsICAgICAgICAgICAgICAgICBlbGVtZW50IHRvIG1vdmUuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICBbeF0gICAgICAgICAgICAgICBYIHBvc2l0aW9uIGluIGdyaWQgdW5pdHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICBbeV0gICAgICAgICAgICAgICBZIHBvc2l0aW9uIGluIGdyaWQgdW5pdHMuXG4gKi9cblxuXG5mdW5jdGlvbiBtb3ZlRWxlbWVudChsYXlvdXRcbi8qOiBMYXlvdXQqL1xuLCBsXG4vKjogTGF5b3V0SXRlbSovXG4sIHhcbi8qOiA/bnVtYmVyKi9cbiwgeVxuLyo6ID9udW1iZXIqL1xuLCBpc1VzZXJBY3Rpb25cbi8qOiA/Ym9vbGVhbiovXG4sIHByZXZlbnRDb2xsaXNpb25cbi8qOiA/Ym9vbGVhbiovXG4sIGNvbXBhY3RUeXBlXG4vKjogQ29tcGFjdFR5cGUqL1xuLCBjb2xzXG4vKjogbnVtYmVyKi9cbilcbi8qOiBMYXlvdXQqL1xue1xuICAvLyBJZiB0aGlzIGlzIHN0YXRpYyBhbmQgbm90IGV4cGxpY2l0bHkgZW5hYmxlZCBhcyBkcmFnZ2FibGUsXG4gIC8vIG5vIG1vdmUgaXMgcG9zc2libGUsIHNvIHdlIGNhbiBzaG9ydC1jaXJjdWl0IHRoaXMgaW1tZWRpYXRlbHkuXG4gIGlmIChsLnN0YXRpYyAmJiBsLmlzRHJhZ2dhYmxlICE9PSB0cnVlKSByZXR1cm4gbGF5b3V0OyAvLyBTaG9ydC1jaXJjdWl0IGlmIG5vdGhpbmcgdG8gZG8uXG5cbiAgaWYgKGwueSA9PT0geSAmJiBsLnggPT09IHgpIHJldHVybiBsYXlvdXQ7XG4gIGxvZyhcIk1vdmluZyBlbGVtZW50IFwiLmNvbmNhdChsLmksIFwiIHRvIFtcIikuY29uY2F0KFN0cmluZyh4KSwgXCIsXCIpLmNvbmNhdChTdHJpbmcoeSksIFwiXSBmcm9tIFtcIikuY29uY2F0KGwueCwgXCIsXCIpLmNvbmNhdChsLnksIFwiXVwiKSk7XG4gIHZhciBvbGRYID0gbC54O1xuICB2YXIgb2xkWSA9IGwueTsgLy8gVGhpcyBpcyBxdWl0ZSBhIGJpdCBmYXN0ZXIgdGhhbiBleHRlbmRpbmcgdGhlIG9iamVjdFxuXG4gIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikgbC54ID0geDtcbiAgaWYgKHR5cGVvZiB5ID09PSBcIm51bWJlclwiKSBsLnkgPSB5O1xuICBsLm1vdmVkID0gdHJ1ZTsgLy8gSWYgdGhpcyBjb2xsaWRlcyB3aXRoIGFueXRoaW5nLCBtb3ZlIGl0LlxuICAvLyBXaGVuIGRvaW5nIHRoaXMgY29tcGFyaXNvbiwgd2UgaGF2ZSB0byBzb3J0IHRoZSBpdGVtcyB3ZSBjb21wYXJlIHdpdGhcbiAgLy8gdG8gZW5zdXJlLCBpbiB0aGUgY2FzZSBvZiBtdWx0aXBsZSBjb2xsaXNpb25zLCB0aGF0IHdlJ3JlIGdldHRpbmcgdGhlXG4gIC8vIG5lYXJlc3QgY29sbGlzaW9uLlxuXG4gIHZhciBzb3J0ZWQgPSBzb3J0TGF5b3V0SXRlbXMobGF5b3V0LCBjb21wYWN0VHlwZSk7XG4gIHZhciBtb3ZpbmdVcCA9IGNvbXBhY3RUeXBlID09PSBcInZlcnRpY2FsXCIgJiYgdHlwZW9mIHkgPT09IFwibnVtYmVyXCIgPyBvbGRZID49IHkgOiBjb21wYWN0VHlwZSA9PT0gXCJob3Jpem9udGFsXCIgJiYgdHlwZW9mIHggPT09IFwibnVtYmVyXCIgPyBvbGRYID49IHggOiBmYWxzZTsgLy8gJEZsb3dJZ25vcmUgYWNjZXB0YWJsZSBtb2RpZmljYXRpb24gb2YgcmVhZC1vbmx5IGFycmF5IGFzIGl0IHdhcyByZWNlbnRseSBjbG9uZWRcblxuICBpZiAobW92aW5nVXApIHNvcnRlZCA9IHNvcnRlZC5yZXZlcnNlKCk7XG4gIHZhciBjb2xsaXNpb25zID0gZ2V0QWxsQ29sbGlzaW9ucyhzb3J0ZWQsIGwpOyAvLyBUaGVyZSB3YXMgYSBjb2xsaXNpb247IGFib3J0XG5cbiAgaWYgKHByZXZlbnRDb2xsaXNpb24gJiYgY29sbGlzaW9ucy5sZW5ndGgpIHtcbiAgICBsb2coXCJDb2xsaXNpb24gcHJldmVudGVkIG9uIFwiLmNvbmNhdChsLmksIFwiLCByZXZlcnRpbmcuXCIpKTtcbiAgICBsLnggPSBvbGRYO1xuICAgIGwueSA9IG9sZFk7XG4gICAgbC5tb3ZlZCA9IGZhbHNlO1xuICAgIHJldHVybiBsYXlvdXQ7XG4gIH0gLy8gTW92ZSBlYWNoIGl0ZW0gdGhhdCBjb2xsaWRlcyBhd2F5IGZyb20gdGhpcyBlbGVtZW50LlxuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxpc2lvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcbiAgICBsb2coXCJSZXNvbHZpbmcgY29sbGlzaW9uIGJldHdlZW4gXCIuY29uY2F0KGwuaSwgXCIgYXQgW1wiKS5jb25jYXQobC54LCBcIixcIikuY29uY2F0KGwueSwgXCJdIGFuZCBcIikuY29uY2F0KGNvbGxpc2lvbi5pLCBcIiBhdCBbXCIpLmNvbmNhdChjb2xsaXNpb24ueCwgXCIsXCIpLmNvbmNhdChjb2xsaXNpb24ueSwgXCJdXCIpKTsgLy8gU2hvcnQgY2lyY3VpdCBzbyB3ZSBjYW4ndCBpbmZpbml0ZSBsb29wXG5cbiAgICBpZiAoY29sbGlzaW9uLm1vdmVkKSBjb250aW51ZTsgLy8gRG9uJ3QgbW92ZSBzdGF0aWMgaXRlbXMgLSB3ZSBoYXZlIHRvIG1vdmUgKnRoaXMqIGVsZW1lbnQgYXdheVxuXG4gICAgaWYgKGNvbGxpc2lvbi5zdGF0aWMpIHtcbiAgICAgIGxheW91dCA9IG1vdmVFbGVtZW50QXdheUZyb21Db2xsaXNpb24obGF5b3V0LCBjb2xsaXNpb24sIGwsIGlzVXNlckFjdGlvbiwgY29tcGFjdFR5cGUsIGNvbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXlvdXQgPSBtb3ZlRWxlbWVudEF3YXlGcm9tQ29sbGlzaW9uKGxheW91dCwgbCwgY29sbGlzaW9uLCBpc1VzZXJBY3Rpb24sIGNvbXBhY3RUeXBlLCBjb2xzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGF5b3V0O1xufVxuLyoqXG4gKiBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBuZWVkcyB0byBoYXBwZW4gLSBnaXZlbiBhIGNvbGxpc2lvbiwgbW92ZSBhbiBlbGVtZW50IGF3YXkgZnJvbSB0aGUgY29sbGlzaW9uLlxuICogV2UgYXR0ZW1wdCB0byBtb3ZlIGl0IHVwIGlmIHRoZXJlJ3Mgcm9vbSwgb3RoZXJ3aXNlIGl0IGdvZXMgYmVsb3cuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGxheW91dCAgICAgICAgICAgIEZ1bGwgbGF5b3V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSAge0xheW91dEl0ZW19IGNvbGxpZGVzV2l0aCBMYXlvdXQgaXRlbSB3ZSdyZSBjb2xsaWRpbmcgd2l0aC5cbiAqIEBwYXJhbSAge0xheW91dEl0ZW19IGl0ZW1Ub01vdmUgICBMYXlvdXQgaXRlbSB3ZSdyZSBtb3ZpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiBtb3ZlRWxlbWVudEF3YXlGcm9tQ29sbGlzaW9uKGxheW91dFxuLyo6IExheW91dCovXG4sIGNvbGxpZGVzV2l0aFxuLyo6IExheW91dEl0ZW0qL1xuLCBpdGVtVG9Nb3ZlXG4vKjogTGF5b3V0SXRlbSovXG4sIGlzVXNlckFjdGlvblxuLyo6ID9ib29sZWFuKi9cbiwgY29tcGFjdFR5cGVcbi8qOiBDb21wYWN0VHlwZSovXG4sIGNvbHNcbi8qOiBudW1iZXIqL1xuKVxuLyo6IExheW91dCovXG57XG4gIHZhciBjb21wYWN0SCA9IGNvbXBhY3RUeXBlID09PSBcImhvcml6b250YWxcIjsgLy8gQ29tcGFjdCB2ZXJ0aWNhbGx5IGlmIG5vdCBzZXQgdG8gaG9yaXpvbnRhbFxuXG4gIHZhciBjb21wYWN0ViA9IGNvbXBhY3RUeXBlICE9PSBcImhvcml6b250YWxcIjtcbiAgdmFyIHByZXZlbnRDb2xsaXNpb24gPSBjb2xsaWRlc1dpdGguc3RhdGljOyAvLyB3ZSdyZSBhbHJlYWR5IGNvbGxpZGluZyAobm90IGZvciBzdGF0aWMgaXRlbXMpXG4gIC8vIElmIHRoZXJlIGlzIGVub3VnaCBzcGFjZSBhYm92ZSB0aGUgY29sbGlzaW9uIHRvIHB1dCB0aGlzIGVsZW1lbnQsIG1vdmUgaXQgdGhlcmUuXG4gIC8vIFdlIG9ubHkgZG8gdGhpcyBvbiB0aGUgbWFpbiBjb2xsaXNpb24gYXMgdGhpcyBjYW4gZ2V0IGZ1bmt5IGluIGNhc2NhZGVzIGFuZCBjYXVzZVxuICAvLyB1bndhbnRlZCBzd2FwcGluZyBiZWhhdmlvci5cblxuICBpZiAoaXNVc2VyQWN0aW9uKSB7XG4gICAgLy8gUmVzZXQgaXNVc2VyQWN0aW9uIGZsYWcgYmVjYXVzZSB3ZSdyZSBub3QgaW4gdGhlIG1haW4gY29sbGlzaW9uIGFueW1vcmUuXG4gICAgaXNVc2VyQWN0aW9uID0gZmFsc2U7IC8vIE1ha2UgYSBtb2NrIGl0ZW0gc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBpdGVtIGhlcmUsIG9ubHkgbW9kaWZ5IGluIG1vdmVFbGVtZW50LlxuXG4gICAgdmFyIGZha2VJdGVtXG4gICAgLyo6IExheW91dEl0ZW0qL1xuICAgID0ge1xuICAgICAgeDogY29tcGFjdEggPyBNYXRoLm1heChjb2xsaWRlc1dpdGgueCAtIGl0ZW1Ub01vdmUudywgMCkgOiBpdGVtVG9Nb3ZlLngsXG4gICAgICB5OiBjb21wYWN0ViA/IE1hdGgubWF4KGNvbGxpZGVzV2l0aC55IC0gaXRlbVRvTW92ZS5oLCAwKSA6IGl0ZW1Ub01vdmUueSxcbiAgICAgIHc6IGl0ZW1Ub01vdmUudyxcbiAgICAgIGg6IGl0ZW1Ub01vdmUuaCxcbiAgICAgIGk6IFwiLTFcIlxuICAgIH07IC8vIE5vIGNvbGxpc2lvbj8gSWYgc28sIHdlIGNhbiBnbyB1cCB0aGVyZTsgb3RoZXJ3aXNlLCB3ZSdsbCBlbmQgdXAgbW92aW5nIGRvd24gYXMgbm9ybWFsXG5cbiAgICBpZiAoIWdldEZpcnN0Q29sbGlzaW9uKGxheW91dCwgZmFrZUl0ZW0pKSB7XG4gICAgICBsb2coXCJEb2luZyByZXZlcnNlIGNvbGxpc2lvbiBvbiBcIi5jb25jYXQoaXRlbVRvTW92ZS5pLCBcIiB1cCB0byBbXCIpLmNvbmNhdChmYWtlSXRlbS54LCBcIixcIikuY29uY2F0KGZha2VJdGVtLnksIFwiXS5cIikpO1xuICAgICAgcmV0dXJuIG1vdmVFbGVtZW50KGxheW91dCwgaXRlbVRvTW92ZSwgY29tcGFjdEggPyBmYWtlSXRlbS54IDogdW5kZWZpbmVkLCBjb21wYWN0ViA/IGZha2VJdGVtLnkgOiB1bmRlZmluZWQsIGlzVXNlckFjdGlvbiwgcHJldmVudENvbGxpc2lvbiwgY29tcGFjdFR5cGUsIGNvbHMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtb3ZlRWxlbWVudChsYXlvdXQsIGl0ZW1Ub01vdmUsIGNvbXBhY3RIID8gaXRlbVRvTW92ZS54ICsgMSA6IHVuZGVmaW5lZCwgY29tcGFjdFYgPyBpdGVtVG9Nb3ZlLnkgKyAxIDogdW5kZWZpbmVkLCBpc1VzZXJBY3Rpb24sIHByZXZlbnRDb2xsaXNpb24sIGNvbXBhY3RUeXBlLCBjb2xzKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGNvbnZlcnQgYSBudW1iZXIgdG8gYSBwZXJjZW50YWdlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bSBBbnkgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICBUaGF0IG51bWJlciBhcyBhIHBlcmNlbnRhZ2UuXG4gKi9cblxuXG5mdW5jdGlvbiBwZXJjKG51bVxuLyo6IG51bWJlciovXG4pXG4vKjogc3RyaW5nKi9cbntcbiAgcmV0dXJuIG51bSAqIDEwMCArIFwiJVwiO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0oX3JlZilcbi8qOiBPYmplY3QqL1xue1xuICB2YXIgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG4gIC8vIFJlcGxhY2UgdW5pdGxlc3MgaXRlbXMgd2l0aCBweFxuICB2YXIgdHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGxlZnQsIFwicHgsXCIpLmNvbmNhdCh0b3AsIFwicHgpXCIpO1xuICByZXR1cm4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlLFxuICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNsYXRlLFxuICAgIE1velRyYW5zZm9ybTogdHJhbnNsYXRlLFxuICAgIG1zVHJhbnNmb3JtOiB0cmFuc2xhdGUsXG4gICAgT1RyYW5zZm9ybTogdHJhbnNsYXRlLFxuICAgIHdpZHRoOiBcIlwiLmNvbmNhdCh3aWR0aCwgXCJweFwiKSxcbiAgICBoZWlnaHQ6IFwiXCIuY29uY2F0KGhlaWdodCwgXCJweFwiKSxcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNldFRvcExlZnQoX3JlZjIpXG4vKjogT2JqZWN0Ki9cbntcbiAgdmFyIHRvcCA9IF9yZWYyLnRvcCxcbiAgICAgIGxlZnQgPSBfcmVmMi5sZWZ0LFxuICAgICAgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IFwiXCIuY29uY2F0KHRvcCwgXCJweFwiKSxcbiAgICBsZWZ0OiBcIlwiLmNvbmNhdChsZWZ0LCBcInB4XCIpLFxuICAgIHdpZHRoOiBcIlwiLmNvbmNhdCh3aWR0aCwgXCJweFwiKSxcbiAgICBoZWlnaHQ6IFwiXCIuY29uY2F0KGhlaWdodCwgXCJweFwiKSxcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiXG4gIH07XG59XG4vKipcbiAqIEdldCBsYXlvdXQgaXRlbXMgc29ydGVkIGZyb20gdG9wIGxlZnQgdG8gcmlnaHQgYW5kIGRvd24uXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGxheW91dCBvYmplY3RzLlxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICBMYXlvdXQsIHNvcnRlZCBzdGF0aWMgaXRlbXMgZmlyc3QuXG4gKi9cblxuXG5mdW5jdGlvbiBzb3J0TGF5b3V0SXRlbXMobGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgY29tcGFjdFR5cGVcbi8qOiBDb21wYWN0VHlwZSovXG4pXG4vKjogTGF5b3V0Ki9cbntcbiAgaWYgKGNvbXBhY3RUeXBlID09PSBcImhvcml6b250YWxcIikgcmV0dXJuIHNvcnRMYXlvdXRJdGVtc0J5Q29sUm93KGxheW91dCk7ZWxzZSByZXR1cm4gc29ydExheW91dEl0ZW1zQnlSb3dDb2wobGF5b3V0KTtcbn1cbi8qKlxuICogU29ydCBsYXlvdXQgaXRlbXMgYnkgcm93IGFzY2VuZGluZyBhbmQgY29sdW1uIGFzY2VuZGluZy5cbiAqXG4gKiBEb2VzIG5vdCBtb2RpZnkgTGF5b3V0LlxuICovXG5cblxuZnVuY3Rpb24gc29ydExheW91dEl0ZW1zQnlSb3dDb2wobGF5b3V0XG4vKjogTGF5b3V0Ki9cbilcbi8qOiBMYXlvdXQqL1xue1xuICAvLyBTbGljZSB0byBjbG9uZSBhcnJheSBhcyBzb3J0IG1vZGlmaWVzXG4gIHJldHVybiBsYXlvdXQuc2xpY2UoMCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmIChhLnkgPiBiLnkgfHwgYS55ID09PSBiLnkgJiYgYS54ID4gYi54KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEueSA9PT0gYi55ICYmIGEueCA9PT0gYi54KSB7XG4gICAgICAvLyBXaXRob3V0IHRoaXMsIHdlIGNhbiBnZXQgZGlmZmVyZW50IHNvcnQgcmVzdWx0cyBpbiBJRSB2cy4gQ2hyb21lL0ZGXG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH0pO1xufVxuLyoqXG4gKiBTb3J0IGxheW91dCBpdGVtcyBieSBjb2x1bW4gYXNjZW5kaW5nIHRoZW4gcm93IGFzY2VuZGluZy5cbiAqXG4gKiBEb2VzIG5vdCBtb2RpZnkgTGF5b3V0LlxuICovXG5cblxuZnVuY3Rpb24gc29ydExheW91dEl0ZW1zQnlDb2xSb3cobGF5b3V0XG4vKjogTGF5b3V0Ki9cbilcbi8qOiBMYXlvdXQqL1xue1xuICByZXR1cm4gbGF5b3V0LnNsaWNlKDApLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYS54ID4gYi54IHx8IGEueCA9PT0gYi54ICYmIGEueSA+IGIueSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9KTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBsYXlvdXQgdXNpbmcgdGhlIGluaXRpYWxMYXlvdXQgYW5kIGNoaWxkcmVuIGFzIGEgdGVtcGxhdGUuXG4gKiBNaXNzaW5nIGVudHJpZXMgd2lsbCBiZSBhZGRlZCwgZXh0cmFuZW91cyBvbmVzIHdpbGwgYmUgdHJ1bmNhdGVkLlxuICpcbiAqIERvZXMgbm90IG1vZGlmeSBpbml0aWFsTGF5b3V0LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgaW5pdGlhbExheW91dCBMYXlvdXQgcGFzc2VkIGluIHRocm91Z2ggcHJvcHMuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGJyZWFrcG9pbnQgICAgQ3VycmVudCByZXNwb25zaXZlIGJyZWFrcG9pbnQuXG4gKiBAcGFyYW0gIHs/U3RyaW5nfSBjb21wYWN0ICAgICAgQ29tcGFjdGlvbiBvcHRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgICAgV29ya2luZyBsYXlvdXQuXG4gKi9cblxuXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUxheW91dFdpdGhDaGlsZHJlbihpbml0aWFsTGF5b3V0XG4vKjogTGF5b3V0Ki9cbiwgY2hpbGRyZW5cbi8qOiBSZWFjdENoaWxkcmVuKi9cbiwgY29sc1xuLyo6IG51bWJlciovXG4sIGNvbXBhY3RUeXBlXG4vKjogQ29tcGFjdFR5cGUqL1xuKVxuLyo6IExheW91dCovXG57XG4gIGluaXRpYWxMYXlvdXQgPSBpbml0aWFsTGF5b3V0IHx8IFtdOyAvLyBHZW5lcmF0ZSBvbmUgbGF5b3V0IGl0ZW0gcGVyIGNoaWxkLlxuXG4gIHZhciBsYXlvdXRcbiAgLyo6IExheW91dEl0ZW1bXSovXG4gID0gW107XG5cbiAgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkXG4gIC8qOiBSZWFjdEVsZW1lbnQ8YW55PiovXG4gICwgaVxuICAvKjogbnVtYmVyKi9cbiAgKSB7XG4gICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuICAgIHZhciBleGlzdHMgPSBnZXRMYXlvdXRJdGVtKGluaXRpYWxMYXlvdXQsIFN0cmluZyhjaGlsZC5rZXkpKTtcblxuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIGxheW91dFtpXSA9IGNsb25lTGF5b3V0SXRlbShleGlzdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzUHJvZHVjdGlvbiAmJiBjaGlsZC5wcm9wcy5fZ3JpZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJgX2dyaWRgIHByb3BlcnRpZXMgb24gY2hpbGRyZW4gaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgYXMgb2YgUmVhY3QgMTUuMi4gXCIgKyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIFwiUGxlYXNlIHVzZSBgZGF0YS1ncmlkYCBvciBhZGQgeW91ciBwcm9wZXJ0aWVzIGRpcmVjdGx5IHRvIHRoZSBgbGF5b3V0YC5cIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBnID0gY2hpbGQucHJvcHNbXCJkYXRhLWdyaWRcIl0gfHwgY2hpbGQucHJvcHMuX2dyaWQ7IC8vIEhleSwgdGhpcyBpdGVtIGhhcyBhIGRhdGEtZ3JpZCBwcm9wZXJ0eSwgdXNlIGl0LlxuXG4gICAgICBpZiAoZykge1xuICAgICAgICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgICAgICAgIHZhbGlkYXRlTGF5b3V0KFtnXSwgXCJSZWFjdEdyaWRMYXlvdXQuY2hpbGRyZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBsYXlvdXRbaV0gPSBjbG9uZUxheW91dEl0ZW0oX29iamVjdFNwcmVhZCh7fSwgZywge1xuICAgICAgICAgIGk6IGNoaWxkLmtleVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3RoaW5nIHByb3ZpZGVkOiBlbnN1cmUgdGhpcyBpcyBhZGRlZCB0byB0aGUgYm90dG9tXG4gICAgICAgIGxheW91dFtpXSA9IGNsb25lTGF5b3V0SXRlbSh7XG4gICAgICAgICAgdzogMSxcbiAgICAgICAgICBoOiAxLFxuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogYm90dG9tKGxheW91dCksXG4gICAgICAgICAgaTogU3RyaW5nKGNoaWxkLmtleSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gQ29ycmVjdCB0aGUgbGF5b3V0LlxuXG5cbiAgdmFyIGNvcnJlY3RlZExheW91dCA9IGNvcnJlY3RCb3VuZHMobGF5b3V0LCB7XG4gICAgY29sczogY29sc1xuICB9KTtcbiAgcmV0dXJuIGNvbXBhY3QoY29ycmVjdGVkTGF5b3V0LCBjb21wYWN0VHlwZSwgY29scyk7XG59XG4vKipcbiAqIFZhbGlkYXRlIGEgbGF5b3V0LiBUaHJvd3MgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgbGF5b3V0ICAgICAgICBBcnJheSBvZiBsYXlvdXQgaXRlbXMuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtjb250ZXh0TmFtZV0gQ29udGV4dCBuYW1lIGZvciBlcnJvcnMuXG4gKiBAdGhyb3cgIHtFcnJvcn0gICAgICAgICAgICAgICAgVmFsaWRhdGlvbiBlcnJvci5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGF5b3V0KGxheW91dFxuLyo6IExheW91dCovXG4pXG4vKjogdm9pZCovXG57XG4gIHZhciBjb250ZXh0TmFtZVxuICAvKjogc3RyaW5nKi9cbiAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFwiTGF5b3V0XCI7XG4gIHZhciBzdWJQcm9wcyA9IFtcInhcIiwgXCJ5XCIsIFwid1wiLCBcImhcIl07XG4gIGlmICghQXJyYXkuaXNBcnJheShsYXlvdXQpKSB0aHJvdyBuZXcgRXJyb3IoY29udGV4dE5hbWUgKyBcIiBtdXN0IGJlIGFuIGFycmF5IVwiKTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5b3V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsYXlvdXRbaV07XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHN1YlByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW1bc3ViUHJvcHNbal1dICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0R3JpZExheW91dDogXCIgKyBjb250ZXh0TmFtZSArIFwiW1wiICsgaSArIFwiXS5cIiArIHN1YlByb3BzW2pdICsgXCIgbXVzdCBiZSBhIG51bWJlciFcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uaSAmJiB0eXBlb2YgaXRlbS5pICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdEdyaWRMYXlvdXQ6IFwiICsgY29udGV4dE5hbWUgKyBcIltcIiArIGkgKyBcIl0uaSBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS5zdGF0aWMgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgaXRlbS5zdGF0aWMgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdEdyaWRMYXlvdXQ6IFwiICsgY29udGV4dE5hbWUgKyBcIltcIiArIGkgKyBcIl0uc3RhdGljIG11c3QgYmUgYSBib29sZWFuIVwiKTtcbiAgICB9XG4gIH1cbn0gLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHZlcnRpY2FsQ29tcGFjdDogZmFsc2VcblxuXG5mdW5jdGlvbiBjb21wYWN0VHlwZShwcm9wc1xuLyo6ID97IHZlcnRpY2FsQ29tcGFjdDogYm9vbGVhbiwgY29tcGFjdFR5cGU6IENvbXBhY3RUeXBlIH0qL1xuKVxuLyo6IENvbXBhY3RUeXBlKi9cbntcbiAgdmFyIF9yZWYzID0gcHJvcHMgfHwge30sXG4gICAgICB2ZXJ0aWNhbENvbXBhY3QgPSBfcmVmMy52ZXJ0aWNhbENvbXBhY3QsXG4gICAgICBjb21wYWN0VHlwZSA9IF9yZWYzLmNvbXBhY3RUeXBlO1xuXG4gIHJldHVybiB2ZXJ0aWNhbENvbXBhY3QgPT09IGZhbHNlID8gbnVsbCA6IGNvbXBhY3RUeXBlO1xufSAvLyBGbG93IGNhbid0IHJlYWxseSBmaWd1cmUgdGhpcyBvdXQsIHNvIHdlIGp1c3QgdXNlIE9iamVjdFxuXG5cbmZ1bmN0aW9uIGF1dG9CaW5kSGFuZGxlcnMoZWxcbi8qOiBPYmplY3QqL1xuLCBmbnNcbi8qOiBBcnJheTxzdHJpbmc+Ki9cbilcbi8qOiB2b2lkKi9cbntcbiAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBlbFtrZXldID0gZWxba2V5XS5iaW5kKGVsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgdmFyIF9jb25zb2xlO1xuXG4gIGlmICghREVCVUcpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5leHBvcnRzLm5vb3AgPSBub29wOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0QXRcIjpcInRvcFwiLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9idWlsZC9SZWFjdEdyaWRMYXlvdXRcIikuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLnV0aWxzID0gcmVxdWlyZShcIi4vYnVpbGQvdXRpbHNcIik7XG5tb2R1bGUuZXhwb3J0cy5SZXNwb25zaXZlID0gcmVxdWlyZShcIi4vYnVpbGQvUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dFwiKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuUmVzcG9uc2l2ZS51dGlscyA9IHJlcXVpcmUoXCIuL2J1aWxkL3Jlc3BvbnNpdmVVdGlsc1wiKTtcbm1vZHVsZS5leHBvcnRzLldpZHRoUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9idWlsZC9jb21wb25lbnRzL1dpZHRoUHJvdmlkZXJcIikuZGVmYXVsdDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdERyYWdnYWJsZSA9IHJlcXVpcmUoXCJyZWFjdC1kcmFnZ2FibGVcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBSZXNpemFibGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVzaXphYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXNpemFibGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge1xuICAgICAgc2xhY2tXOiAwLFxuICAgICAgc2xhY2tIOiAwXG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVzaXphYmxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubG9ja0FzcGVjdFJhdGlvID0gZnVuY3Rpb24gbG9ja0FzcGVjdFJhdGlvKHdpZHRoLCBoZWlnaHQsIGFzcGVjdFJhdGlvKSB7XG4gICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gIH0gLy8gSWYgeW91IGRvIHRoaXMsIGJlIGNhcmVmdWwgb2YgY29uc3RyYWludHNcbiAgO1xuXG4gIF9wcm90by5ydW5Db25zdHJhaW50cyA9IGZ1bmN0aW9uIHJ1bkNvbnN0cmFpbnRzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgX3JlZiA9IFt0aGlzLnByb3BzLm1pbkNvbnN0cmFpbnRzLCB0aGlzLnByb3BzLm1heENvbnN0cmFpbnRzXSxcbiAgICAgICAgbWluID0gX3JlZlswXSxcbiAgICAgICAgbWF4ID0gX3JlZlsxXTtcbiAgICBpZiAoIW1pbiAmJiAhbWF4KSByZXR1cm4gW3dpZHRoLCBoZWlnaHRdOyAvLyBGaXQgd2lkdGggJiBoZWlnaHQgdG8gYXNwZWN0IHJhdGlvXG5cbiAgICBpZiAodGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGlmIChoZWlnaHQgPT09IHRoaXMucHJvcHMuaGVpZ2h0KSB7XG4gICAgICAgIHZhciByYXRpbyA9IHRoaXMucHJvcHMud2lkdGggLyB0aGlzLnByb3BzLmhlaWdodDtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyByYXRpbztcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IHZlcnRpY2FsIHJlc2l6ZSB3aXRoIE4vUyBoYW5kbGVzIG9uIGxvY2tlZCBhc3BlY3RcbiAgICAgICAgLy8gcmF0aW8uIENhbGN1bGF0ZSB0aGUgY2hhbmdlIGhlaWdodC1maXJzdCwgaW5zdGVhZCBvZiB3aWR0aC1maXJzdFxuICAgICAgICB2YXIgX3JhdGlvID0gdGhpcy5wcm9wcy5oZWlnaHQgLyB0aGlzLnByb3BzLndpZHRoO1xuXG4gICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gX3JhdGlvO1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAqIF9yYXRpbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb2xkVyA9IHdpZHRoLFxuICAgICAgICBvbGRIID0gaGVpZ2h0OyAvLyBBZGQgc2xhY2sgdG8gdGhlIHZhbHVlcyB1c2VkIHRvIGNhbGN1bGF0ZSBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGlmXG4gICAgLy8gd2Ugc3RhcnQgcmVtb3Zpbmcgc2xhY2ssIHRoZSBlbGVtZW50IHdvbid0IHJlYWN0IHRvIGl0IHJpZ2h0IGF3YXkgdW50aWwgaXQncyBiZWVuXG4gICAgLy8gY29tcGxldGVseSByZW1vdmVkLlxuXG4gICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2xhY2tXID0gX3RoaXMkc3RhdGUuc2xhY2tXLFxuICAgICAgICBzbGFja0ggPSBfdGhpcyRzdGF0ZS5zbGFja0g7XG4gICAgd2lkdGggKz0gc2xhY2tXO1xuICAgIGhlaWdodCArPSBzbGFja0g7XG5cbiAgICBpZiAobWluKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KG1pblswXSwgd2lkdGgpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgobWluWzFdLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChtYXgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4obWF4WzBdLCB3aWR0aCk7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhbMV0sIGhlaWdodCk7XG4gICAgfSAvLyBJZiB0aGUgbnVtYmVycyBjaGFuZ2VkLCB3ZSBtdXN0IGhhdmUgaW50cm9kdWNlZCBzb21lIHNsYWNrLiBSZWNvcmQgaXQgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvbi5cblxuXG4gICAgc2xhY2tXICs9IG9sZFcgLSB3aWR0aDtcbiAgICBzbGFja0ggKz0gb2xkSCAtIGhlaWdodDtcblxuICAgIGlmIChzbGFja1cgIT09IHRoaXMuc3RhdGUuc2xhY2tXIHx8IHNsYWNrSCAhPT0gdGhpcy5zdGF0ZS5zbGFja0gpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzbGFja1c6IHNsYWNrVyxcbiAgICAgICAgc2xhY2tIOiBzbGFja0hcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGRyYWcgZXZlbnRzIHRvIHByb3ZpZGUgbW9yZSB1c2VmdWwgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBoYW5kbGVyTmFtZSBIYW5kbGVyIG5hbWUgdG8gd3JhcC5cbiAgICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICBIYW5kbGVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gcmVzaXplSGFuZGxlcihoYW5kbGVyTmFtZSwgYXhpcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlLCBfcmVmMikge1xuICAgICAgdmFyIG5vZGUgPSBfcmVmMi5ub2RlLFxuICAgICAgICAgIGRlbHRhWCA9IF9yZWYyLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfcmVmMi5kZWx0YVk7XG4gICAgICBkZWx0YVggLz0gX3RoaXMyLnByb3BzLnRyYW5zZm9ybVNjYWxlO1xuICAgICAgZGVsdGFZIC89IF90aGlzMi5wcm9wcy50cmFuc2Zvcm1TY2FsZTsgLy8gQXhpcyByZXN0cmljdGlvbnNcblxuICAgICAgdmFyIGNhbkRyYWdYID0gKF90aGlzMi5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgX3RoaXMyLnByb3BzLmF4aXMgPT09ICd4JykgJiYgWyduJywgJ3MnXS5pbmRleE9mKGF4aXMpID09PSAtMTtcbiAgICAgIHZhciBjYW5EcmFnWSA9IChfdGhpczIucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IF90aGlzMi5wcm9wcy5heGlzID09PSAneScpICYmIFsnZScsICd3J10uaW5kZXhPZihheGlzKSA9PT0gLTE7IC8vIHJldmVyc2UgZGVsdGEgaWYgdXNpbmcgdG9wIG9yIGxlZnQgZHJhZyBoYW5kbGVzXG5cbiAgICAgIGlmIChjYW5EcmFnWCAmJiBheGlzW2F4aXMubGVuZ3RoIC0gMV0gPT09ICd3Jykge1xuICAgICAgICBkZWx0YVggPSAtZGVsdGFYO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FuRHJhZ1kgJiYgYXhpc1swXSA9PT0gJ24nKSB7XG4gICAgICAgIGRlbHRhWSA9IC1kZWx0YVk7XG4gICAgICB9IC8vIFVwZGF0ZSB3L2hcblxuXG4gICAgICB2YXIgd2lkdGggPSBfdGhpczIucHJvcHMud2lkdGggKyAoY2FuRHJhZ1ggPyBkZWx0YVggOiAwKTtcbiAgICAgIHZhciBoZWlnaHQgPSBfdGhpczIucHJvcHMuaGVpZ2h0ICsgKGNhbkRyYWdZID8gZGVsdGFZIDogMCk7IC8vIEVhcmx5IHJldHVybiBpZiBubyBjaGFuZ2VcblxuICAgICAgdmFyIHdpZHRoQ2hhbmdlZCA9IHdpZHRoICE9PSBfdGhpczIucHJvcHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0Q2hhbmdlZCA9IGhlaWdodCAhPT0gX3RoaXMyLnByb3BzLmhlaWdodDtcbiAgICAgIGlmIChoYW5kbGVyTmFtZSA9PT0gJ29uUmVzaXplJyAmJiAhd2lkdGhDaGFuZ2VkICYmICFoZWlnaHRDaGFuZ2VkKSByZXR1cm47XG5cbiAgICAgIHZhciBfdGhpczIkcnVuQ29uc3RyYWludHMgPSBfdGhpczIucnVuQ29uc3RyYWludHMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgIHdpZHRoID0gX3RoaXMyJHJ1bkNvbnN0cmFpbnRzWzBdO1xuICAgICAgaGVpZ2h0ID0gX3RoaXMyJHJ1bkNvbnN0cmFpbnRzWzFdO1xuICAgICAgLy8gU2V0IHRoZSBhcHByb3ByaWF0ZSBzdGF0ZSBmb3IgdGhpcyBoYW5kbGVyLlxuICAgICAgdmFyIG5ld1N0YXRlID0ge307XG5cbiAgICAgIGlmIChoYW5kbGVyTmFtZSA9PT0gJ29uUmVzaXplU3RhcnQnKSB7Ly8gbm90aGluZ1xuICAgICAgfSBlbHNlIGlmIChoYW5kbGVyTmFtZSA9PT0gJ29uUmVzaXplU3RvcCcpIHtcbiAgICAgICAgbmV3U3RhdGUuc2xhY2tXID0gbmV3U3RhdGUuc2xhY2tIID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVhcmx5IHJldHVybiBpZiBubyBjaGFuZ2UgYWZ0ZXIgY29uc3RyYWludHNcbiAgICAgICAgaWYgKHdpZHRoID09PSBfdGhpczIucHJvcHMud2lkdGggJiYgaGVpZ2h0ID09PSBfdGhpczIucHJvcHMuaGVpZ2h0KSByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoYXNDYiA9IHR5cGVvZiBfdGhpczIucHJvcHNbaGFuZGxlck5hbWVdID09PSAnZnVuY3Rpb24nO1xuXG4gICAgICBpZiAoaGFzQ2IpIHtcbiAgICAgICAgLy8gJEZsb3dJZ25vcmUgaXNuJ3QgcmVmaW5pbmcgdGhpcyBjb3JyZWN0bHkgdG8gU3ludGhldGljRXZlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBlLnBlcnNpc3QgPT09ICdmdW5jdGlvbicpIGUucGVyc2lzdCgpO1xuXG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZShuZXdTdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHNbaGFuZGxlck5hbWVdKGUsIHtcbiAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGU6IGF4aXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlclJlc2l6ZUhhbmRsZSA9IGZ1bmN0aW9uIHJlbmRlclJlc2l6ZUhhbmRsZShyZXNpemVIYW5kbGUpIHtcbiAgICB2YXIgaGFuZGxlID0gdGhpcy5wcm9wcy5oYW5kbGU7XG5cbiAgICBpZiAoaGFuZGxlKSB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gaGFuZGxlKHJlc2l6ZUhhbmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1yZXNpemFibGUtaGFuZGxlIHJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtXCIgKyByZXNpemVIYW5kbGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZHJhZ2dhYmxlT3B0cyA9IF90aGlzJHByb3BzLmRyYWdnYWJsZU9wdHMsXG4gICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzLmhlaWdodCxcbiAgICAgICAgaGFuZGxlU2l6ZSA9IF90aGlzJHByb3BzLmhhbmRsZVNpemUsXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbyA9IF90aGlzJHByb3BzLmxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgYXhpcyA9IF90aGlzJHByb3BzLmF4aXMsXG4gICAgICAgIG1pbkNvbnN0cmFpbnRzID0gX3RoaXMkcHJvcHMubWluQ29uc3RyYWludHMsXG4gICAgICAgIG1heENvbnN0cmFpbnRzID0gX3RoaXMkcHJvcHMubWF4Q29uc3RyYWludHMsXG4gICAgICAgIG9uUmVzaXplID0gX3RoaXMkcHJvcHMub25SZXNpemUsXG4gICAgICAgIG9uUmVzaXplU3RvcCA9IF90aGlzJHByb3BzLm9uUmVzaXplU3RvcCxcbiAgICAgICAgb25SZXNpemVTdGFydCA9IF90aGlzJHByb3BzLm9uUmVzaXplU3RhcnQsXG4gICAgICAgIHJlc2l6ZUhhbmRsZXMgPSBfdGhpcyRwcm9wcy5yZXNpemVIYW5kbGVzLFxuICAgICAgICB0cmFuc2Zvcm1TY2FsZSA9IF90aGlzJHByb3BzLnRyYW5zZm9ybVNjYWxlLFxuICAgICAgICBwID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiZHJhZ2dhYmxlT3B0c1wiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwiaGFuZGxlU2l6ZVwiLCBcImxvY2tBc3BlY3RSYXRpb1wiLCBcImF4aXNcIiwgXCJtaW5Db25zdHJhaW50c1wiLCBcIm1heENvbnN0cmFpbnRzXCIsIFwib25SZXNpemVcIiwgXCJvblJlc2l6ZVN0b3BcIiwgXCJvblJlc2l6ZVN0YXJ0XCIsIFwicmVzaXplSGFuZGxlc1wiLCBcInRyYW5zZm9ybVNjYWxlXCJdKTtcblxuICAgIHZhciBjbGFzc05hbWUgPSBwLmNsYXNzTmFtZSA/IHAuY2xhc3NOYW1lICsgXCIgcmVhY3QtcmVzaXphYmxlXCIgOiAncmVhY3QtcmVzaXphYmxlJzsgLy8gV2hhdCB3ZSdyZSBkb2luZyBoZXJlIGlzIGdldHRpbmcgdGhlIGNoaWxkIG9mIHRoaXMgZWxlbWVudCwgYW5kIGNsb25pbmcgaXQgd2l0aCB0aGlzIGVsZW1lbnQncyBwcm9wcy5cbiAgICAvLyBXZSBhcmUgdGhlbiBkZWZpbmluZyBpdHMgY2hpbGRyZW4gYXM6XG4gICAgLy8gSXRzIG9yaWdpbmFsIGNoaWxkcmVuIChyZXNpemFibGUncyBjaGlsZCdzIGNoaWxkcmVuKSwgYW5kXG4gICAgLy8gT25lIG9yIG1vcmUgZHJhZ2dhYmxlIGhhbmRsZXMuXG5cbiAgICByZXR1cm4gKDAsIF91dGlscy5jbG9uZUVsZW1lbnQpKGNoaWxkcmVuLCBfb2JqZWN0U3ByZWFkKHt9LCBwLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuOiBbY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sIHJlc2l6ZUhhbmRsZXMubWFwKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdERyYWdnYWJsZS5EcmFnZ2FibGVDb3JlLCBfZXh0ZW5kcyh7fSwgZHJhZ2dhYmxlT3B0cywge1xuICAgICAgICAgIGtleTogXCJyZXNpemFibGVIYW5kbGUtXCIgKyBoLFxuICAgICAgICAgIG9uU3RvcDogX3RoaXMzLnJlc2l6ZUhhbmRsZXIoJ29uUmVzaXplU3RvcCcsIGgpLFxuICAgICAgICAgIG9uU3RhcnQ6IF90aGlzMy5yZXNpemVIYW5kbGVyKCdvblJlc2l6ZVN0YXJ0JywgaCksXG4gICAgICAgICAgb25EcmFnOiBfdGhpczMucmVzaXplSGFuZGxlcignb25SZXNpemUnLCBoKVxuICAgICAgICB9KSwgX3RoaXMzLnJlbmRlclJlc2l6ZUhhbmRsZShoKSk7XG4gICAgICB9KV1cbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlc2l6YWJsZTtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXphYmxlO1xuXG5fZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLCBcInByb3BUeXBlc1wiLCB7XG4gIC8vXG4gIC8vIFJlcXVpcmVkIFByb3BzXG4gIC8vXG4gIC8vIFJlcXVpcmUgdGhhdCBvbmUgYW5kIG9ubHkgb25lIGNoaWxkIGJlIHByZXNlbnQuXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudC5pc1JlcXVpcmVkLFxuICAvLyBJbml0aWFsIHcvaFxuICB3aWR0aDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgLy9cbiAgLy8gT3B0aW9uYWwgcHJvcHNcbiAgLy9cbiAgLy8gQ3VzdG9tIHJlc2l6ZSBoYW5kbGVcbiAgaGFuZGxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudCxcbiAgLy8gSWYgeW91IGNoYW5nZSB0aGlzLCBiZSBzdXJlIHRvIHVwZGF0ZSB5b3VyIGNzc1xuICBoYW5kbGVTaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXksXG4gIC8vIERlZmluZXMgd2hpY2ggcmVzaXplIGhhbmRsZXMgc2hvdWxkIGJlIHJlbmRlcmVkIChkZWZhdWx0OiAnc2UnKVxuICAvLyBBbGxvd3MgZm9yIGFueSBjb21iaW5hdGlvbiBvZjpcbiAgLy8gJ3MnIC0gU291dGggaGFuZGxlIChib3R0b20tY2VudGVyKVxuICAvLyAndycgLSBXZXN0IGhhbmRsZSAobGVmdC1jZW50ZXIpXG4gIC8vICdlJyAtIEVhc3QgaGFuZGxlIChyaWdodC1jZW50ZXIpXG4gIC8vICduJyAtIE5vcnRoIGhhbmRsZSAodG9wLWNlbnRlcilcbiAgLy8gJ3N3JyAtIFNvdXRod2VzdCBoYW5kbGUgKGJvdHRvbS1sZWZ0KVxuICAvLyAnbncnIC0gTm9ydGh3ZXN0IGhhbmRsZSAodG9wLWxlZnQpXG4gIC8vICdzZScgLSBTb3V0aGVhc3QgaGFuZGxlIChib3R0b20tcmlnaHQpXG4gIC8vICduZScgLSBOb3J0aGVhc3QgaGFuZGxlICh0b3AtY2VudGVyKVxuICByZXNpemVIYW5kbGVzOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydzJywgJ3cnLCAnZScsICduJywgJ3N3JywgJ253JywgJ3NlJywgJ25lJ10pKSxcbiAgdHJhbnNmb3JtU2NhbGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIC8vIElmIHRydWUsIHdpbGwgb25seSBhbGxvdyB3aWR0aC9oZWlnaHQgdG8gbW92ZSBpbiBsb2Nrc3RlcFxuICBsb2NrQXNwZWN0UmF0aW86IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAvLyBSZXN0cmljdHMgcmVzaXppbmcgdG8gYSBwYXJ0aWN1bGFyIGF4aXMgKGRlZmF1bHQ6ICdib3RoJylcbiAgLy8gJ2JvdGgnIC0gYWxsb3dzIHJlc2l6aW5nIGJ5IHdpZHRoIG9yIGhlaWdodFxuICAvLyAneCcgLSBvbmx5IGFsbG93cyB0aGUgd2lkdGggdG8gYmUgY2hhbmdlZFxuICAvLyAneScgLSBvbmx5IGFsbG93cyB0aGUgaGVpZ2h0IHRvIGJlIGNoYW5nZWRcbiAgLy8gJ25vbmUnIC0gZGlzYWJsZXMgcmVzaXppbmcgYWx0b2dldGhlclxuICBheGlzOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydib3RoJywgJ3gnLCAneScsICdub25lJ10pLFxuICAvLyBNaW4vbWF4IHNpemVcbiAgbWluQ29uc3RyYWludHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIpLFxuICBtYXhDb25zdHJhaW50czogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciksXG4gIC8vIENhbGxiYWNrc1xuICBvblJlc2l6ZVN0b3A6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICBvblJlc2l6ZVN0YXJ0OiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgb25SZXNpemU6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAvLyBUaGVzZSB3aWxsIGJlIHBhc3NlZCB3aG9sZXNhbGUgdG8gcmVhY3QtZHJhZ2dhYmxlJ3MgRHJhZ2dhYmxlQ29yZVxuICBkcmFnZ2FibGVPcHRzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0XG59KTtcblxuX2RlZmluZVByb3BlcnR5KFJlc2l6YWJsZSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBoYW5kbGVTaXplOiBbMjAsIDIwXSxcbiAgbG9ja0FzcGVjdFJhdGlvOiBmYWxzZSxcbiAgYXhpczogJ2JvdGgnLFxuICBtaW5Db25zdHJhaW50czogWzIwLCAyMF0sXG4gIG1heENvbnN0cmFpbnRzOiBbSW5maW5pdHksIEluZmluaXR5XSxcbiAgcmVzaXplSGFuZGxlczogWydzZSddLFxuICB0cmFuc2Zvcm1TY2FsZTogMVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfUmVzaXphYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9SZXNpemFibGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gQW4gZXhhbXBsZSB1c2Ugb2YgUmVzaXphYmxlLlxudmFyIFJlc2l6YWJsZUJveCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSZXNpemFibGVCb3gsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlc2l6YWJsZUJveCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICB3aWR0aDogX3RoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IF90aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIHByb3BzV2lkdGg6IF90aGlzLnByb3BzLndpZHRoLFxuICAgICAgcHJvcHNIZWlnaHQ6IF90aGlzLnByb3BzLmhlaWdodFxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUmVzaXplXCIsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgICAgIHZhciB3aWR0aCA9IHNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICBlLnBlcnNpc3QgJiYgZS5wZXJzaXN0KCk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc2l6ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblJlc2l6ZSAmJiBfdGhpcy5wcm9wcy5vblJlc2l6ZShlLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzaXplKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFJlc2l6YWJsZUJveC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgLy8gSWYgcGFyZW50IGNoYW5nZXMgaGVpZ2h0L3dpZHRoLCBzZXQgdGhhdCBpbiBvdXIgc3RhdGUuXG4gICAgaWYgKHN0YXRlLnByb3BzV2lkdGggIT09IHByb3BzLndpZHRoIHx8IHN0YXRlLnByb3BzSGVpZ2h0ICE9PSBwcm9wcy5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHByb3BzV2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBwcm9wc0hlaWdodDogcHJvcHMuaGVpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHZhciBfcHJvdG8gPSBSZXNpemFibGVCb3gucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gQmFzaWMgd3JhcHBlciBhcm91bmQgYSBSZXNpemFibGUgaW5zdGFuY2UuXG4gICAgLy8gSWYgeW91IHVzZSBSZXNpemFibGUgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBjaGlsZCBjb21wb25lbnRcbiAgICAvLyB3aXRoIGEgbmV3IHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaGFuZGxlID0gX3RoaXMkcHJvcHMuaGFuZGxlLFxuICAgICAgICBoYW5kbGVTaXplID0gX3RoaXMkcHJvcHMuaGFuZGxlU2l6ZSxcbiAgICAgICAgb25SZXNpemUgPSBfdGhpcyRwcm9wcy5vblJlc2l6ZSxcbiAgICAgICAgb25SZXNpemVTdGFydCA9IF90aGlzJHByb3BzLm9uUmVzaXplU3RhcnQsXG4gICAgICAgIG9uUmVzaXplU3RvcCA9IF90aGlzJHByb3BzLm9uUmVzaXplU3RvcCxcbiAgICAgICAgZHJhZ2dhYmxlT3B0cyA9IF90aGlzJHByb3BzLmRyYWdnYWJsZU9wdHMsXG4gICAgICAgIG1pbkNvbnN0cmFpbnRzID0gX3RoaXMkcHJvcHMubWluQ29uc3RyYWludHMsXG4gICAgICAgIG1heENvbnN0cmFpbnRzID0gX3RoaXMkcHJvcHMubWF4Q29uc3RyYWludHMsXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbyA9IF90aGlzJHByb3BzLmxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgYXhpcyA9IF90aGlzJHByb3BzLmF4aXMsXG4gICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzLmhlaWdodCxcbiAgICAgICAgcmVzaXplSGFuZGxlcyA9IF90aGlzJHByb3BzLnJlc2l6ZUhhbmRsZXMsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImhhbmRsZVwiLCBcImhhbmRsZVNpemVcIiwgXCJvblJlc2l6ZVwiLCBcIm9uUmVzaXplU3RhcnRcIiwgXCJvblJlc2l6ZVN0b3BcIiwgXCJkcmFnZ2FibGVPcHRzXCIsIFwibWluQ29uc3RyYWludHNcIiwgXCJtYXhDb25zdHJhaW50c1wiLCBcImxvY2tBc3BlY3RSYXRpb1wiLCBcImF4aXNcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInJlc2l6ZUhhbmRsZXNcIl0pO1xuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Jlc2l6YWJsZS5kZWZhdWx0LCB7XG4gICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgIGhhbmRsZVNpemU6IGhhbmRsZVNpemUsXG4gICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBvblJlc2l6ZVN0YXJ0OiBvblJlc2l6ZVN0YXJ0LFxuICAgICAgb25SZXNpemU6IHRoaXMub25SZXNpemUsXG4gICAgICBvblJlc2l6ZVN0b3A6IG9uUmVzaXplU3RvcCxcbiAgICAgIGRyYWdnYWJsZU9wdHM6IGRyYWdnYWJsZU9wdHMsXG4gICAgICBtaW5Db25zdHJhaW50czogbWluQ29uc3RyYWludHMsXG4gICAgICBtYXhDb25zdHJhaW50czogbWF4Q29uc3RyYWludHMsXG4gICAgICBsb2NrQXNwZWN0UmF0aW86IGxvY2tBc3BlY3RSYXRpbyxcbiAgICAgIGF4aXM6IGF4aXMsXG4gICAgICByZXNpemVIYW5kbGVzOiByZXNpemVIYW5kbGVzXG4gICAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZToge1xuICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgKyAncHgnXG4gICAgICB9XG4gICAgfSwgcHJvcHMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlc2l6YWJsZUJveDtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXphYmxlQm94O1xuXG5fZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlQm94LCBcInByb3BUeXBlc1wiLCB7XG4gIGhlaWdodDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgd2lkdGg6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlQm94LCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGhhbmRsZVNpemU6IFsyMCwgMjBdXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50O1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBSZWFjdC5hZGRvbnMuY2xvbmVXaXRoUHJvcHMgbG9vay1hbGlrZSB0aGF0IG1lcmdlcyBzdHlsZSAmIGNsYXNzTmFtZS5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBwcm9wcykge1xuICBpZiAocHJvcHMuc3R5bGUgJiYgZWxlbWVudC5wcm9wcy5zdHlsZSkge1xuICAgIHByb3BzLnN0eWxlID0gX29iamVjdFNwcmVhZCh7fSwgZWxlbWVudC5wcm9wcy5zdHlsZSwge30sIHByb3BzLnN0eWxlKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5jbGFzc05hbWUgJiYgZWxlbWVudC5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICBwcm9wcy5jbGFzc05hbWUgPSBlbGVtZW50LnByb3BzLmNsYXNzTmFtZSArIFwiIFwiICsgcHJvcHMuY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChlbGVtZW50LCBwcm9wcyk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRBdFwiOlwidG9wXCIsXCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJEb24ndCBpbnN0YW50aWF0ZSBSZXNpemFibGUgZGlyZWN0bHkhIFVzZSByZXF1aXJlKCdyZWFjdC1yZXNpemFibGUnKS5SZXNpemFibGVcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5SZXNpemFibGUgPSByZXF1aXJlKCcuL2J1aWxkL1Jlc2l6YWJsZScpLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5SZXNpemFibGVCb3ggPSByZXF1aXJlKCcuL2J1aWxkL1Jlc2l6YWJsZUJveCcpLmRlZmF1bHQ7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgJ1xcXFxyZWFjdC1ncmlkLWxheW91dFxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnXFxcXHJlYWN0LXJlc2l6YWJsZVxcXFxjc3NcXFxcc3R5bGVzLmNzcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gW107XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjb21weSA9IDA7IGNvbXB5IDwgdGhpcy5wcm9wcy5udW1Sb3dzOyBjb21weSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXB4ID0gMDsgY29tcHggPCB0aGlzLnByb3BzLm51bUNvbHVtbnM7IGNvbXB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IGNvbXB4ICsgY29tcHkgKiB0aGlzLnByb3BzLm51bVJvd3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcCA9IHtpOiBgY29tcF8ke2luY3JlbWVudH1gLCB4OiBjb21weCwgeTogY29tcHksIHc6IDEsIGg6IDEsIGlzUmVzaXphYmxlOiBmYWxzZX07XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQucHVzaChjb21wKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgY29tcF8ke2luY3JlbWVudH1gfSBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsYXlvdXQsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zdCBsYXlvdXQgPSBbXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYScsIHg6IDAsIHk6IDAsIHc6IDEsIGg6IDEsIHN0YXRpYzogdHJ1ZX0sXHJcbiAgICAgICAgLy8gICAgIHtpOiAnYicsIHg6IDEsIHk6IDAsIHc6IDMsIGg6IDEsIG1pblc6IDIsIG1heFc6IDR9LFxyXG4gICAgICAgIC8vICAgICB7aTogJ2MnLCB4OiA0LCB5OiAwLCB3OiAxLCBoOiAxfVxyXG4gICAgICAgIC8vIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZExheW91dCBjbGFzc05hbWU9J2xheW91dCcgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH0gY29scz17MTJ9IHJvd0hlaWdodD17MzB9IHdpZHRoPXsxMjAwfSBjb21wYWN0VHlwZT0naG9yaXpvbnRhbCcgbWF4Um93cz17MX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGtleT0nYScgc3R5bGU9e3tib3JkZXJTdHlsZTogJ3NvbGlkJ319PlRlbXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PSdiJyBzdHlsZT17e2JvcmRlclN0eWxlOiAnc29saWQnfX0+Vm9sdGFnZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9J2MnIHN0eWxlPXt7Ym9yZGVyU3R5bGU6ICdzb2xpZCd9fT5QcmVzc3VyZTwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIHNldFByb3BzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbi8vICAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZW5kIHRoZSBuZXcgdmFsdWUgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNldFByb3BzIGlzIGEgcHJvcCB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICogYnkgZGFzaCdzIGZyb250LWVuZCAoXCJkYXNoLXJlbmRlcmVyXCIpLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbiBhIERhc2ggYXBwLCB0aGlzIHdpbGwgdXBkYXRlIHRoZSBjb21wb25lbnQnc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwcm9wcyBhbmQgc2VuZCB0aGUgZGF0YSBiYWNrIHRvIHRoZSBQeXRob24gRGFzaFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhcHAgc2VydmVyIGlmIGEgY2FsbGJhY2sgdXNlcyB0aGUgbW9kaWZpZWQgcHJvcCBhc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJbnB1dCBvciBTdGF0ZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gc2V0UHJvcHMoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5EcmFnR3JpZC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbkRyYWdHcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkcmVuIGluIGVhY2ggcGFydCBvZiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2Ygcm93c1xyXG4gICAgICovXHJcbiAgICBudW1Sb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zXHJcbiAgICAgKi9cclxuICAgIG51bUNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgRHJhZ0dyaWQgZnJvbSAnLi9jb21wb25lbnRzL0RyYWdHcmlkLnJlYWN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBEcmFnR3JpZFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9