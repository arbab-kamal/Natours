(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/es-errors/index.js
  var require_es_errors = __commonJS({
    "node_modules/es-errors/index.js"(exports, module) {
      "use strict";
      module.exports = Error;
    }
  });

  // node_modules/es-errors/eval.js
  var require_eval = __commonJS({
    "node_modules/es-errors/eval.js"(exports, module) {
      "use strict";
      module.exports = EvalError;
    }
  });

  // node_modules/es-errors/range.js
  var require_range = __commonJS({
    "node_modules/es-errors/range.js"(exports, module) {
      "use strict";
      module.exports = RangeError;
    }
  });

  // node_modules/es-errors/ref.js
  var require_ref = __commonJS({
    "node_modules/es-errors/ref.js"(exports, module) {
      "use strict";
      module.exports = ReferenceError;
    }
  });

  // node_modules/es-errors/syntax.js
  var require_syntax = __commonJS({
    "node_modules/es-errors/syntax.js"(exports, module) {
      "use strict";
      module.exports = SyntaxError;
    }
  });

  // node_modules/es-errors/type.js
  var require_type = __commonJS({
    "node_modules/es-errors/type.js"(exports, module) {
      "use strict";
      module.exports = TypeError;
    }
  });

  // node_modules/es-errors/uri.js
  var require_uri = __commonJS({
    "node_modules/es-errors/uri.js"(exports, module) {
      "use strict";
      module.exports = URIError;
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/has-proto/index.js
  var require_has_proto = __commonJS({
    "node_modules/has-proto/index.js"(exports, module) {
      "use strict";
      var test = {
        __proto__: null,
        foo: {}
      };
      var $Object = Object;
      module.exports = function hasProto() {
        return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
      };
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var toStr = Object.prototype.toString;
      var max = Math.max;
      var funcType = "[object Function]";
      var concatty = function concatty2(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy2(arrLike, offset) {
        var arr = [];
        for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function(arr, joiner) {
        var str = "";
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind2(that) {
        var target = this;
        if (typeof target !== "function" || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              concatty(args, arguments)
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(
            that,
            concatty(args, arguments)
          );
        };
        var boundLength = max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = "$" + i;
        }
        bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/hasown/index.js
  var require_hasown = __commonJS({
    "node_modules/hasown/index.js"(exports, module) {
      "use strict";
      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind2 = require_function_bind();
      module.exports = bind2.call(call, $hasOwn);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $Error = require_es_errors();
      var $EvalError = require_eval();
      var $RangeError = require_range();
      var $ReferenceError = require_ref();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var $URIError = require_uri();
      var $Function = Function;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var hasProto = require_has_proto()();
      var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
        return x.__proto__;
      } : null);
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": $Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": $EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": $RangeError,
        "%ReferenceError%": $ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": $URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      if (getProto) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind2 = require_function_bind();
      var hasOwn = require_hasown();
      var $concat = bind2.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
      var $replace = bind2.call(Function.call, String.prototype.replace);
      var $strSlice = bind2.call(Function.call, String.prototype.slice);
      var $exec = bind2.call(Function.call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/es-define-property/index.js
  var require_es_define_property = __commonJS({
    "node_modules/es-define-property/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }
  });

  // node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "node_modules/gopd/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/define-data-property/index.js
  var require_define_data_property = __commonJS({
    "node_modules/define-data-property/index.js"(exports, module) {
      "use strict";
      var $defineProperty = require_es_define_property();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var gopd = require_gopd();
      module.exports = function defineDataProperty(obj, property, value) {
        if (!obj || typeof obj !== "object" && typeof obj !== "function") {
          throw new $TypeError("`obj` must be an object or a function`");
        }
        if (typeof property !== "string" && typeof property !== "symbol") {
          throw new $TypeError("`property` must be a string or a symbol`");
        }
        if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
          throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
          throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
          throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
          throw new $TypeError("`loose`, if provided, must be a boolean");
        }
        var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
        var nonWritable = arguments.length > 4 ? arguments[4] : null;
        var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
        var loose = arguments.length > 6 ? arguments[6] : false;
        var desc = !!gopd && gopd(obj, property);
        if ($defineProperty) {
          $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
          });
        } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
          obj[property] = value;
        } else {
          throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        }
      };
    }
  });

  // node_modules/has-property-descriptors/index.js
  var require_has_property_descriptors = __commonJS({
    "node_modules/has-property-descriptors/index.js"(exports, module) {
      "use strict";
      var $defineProperty = require_es_define_property();
      var hasPropertyDescriptors = function hasPropertyDescriptors2() {
        return !!$defineProperty;
      };
      hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
        if (!$defineProperty) {
          return null;
        }
        try {
          return $defineProperty([], "length", { value: 1 }).length !== 1;
        } catch (e) {
          return true;
        }
      };
      module.exports = hasPropertyDescriptors;
    }
  });

  // node_modules/set-function-length/index.js
  var require_set_function_length = __commonJS({
    "node_modules/set-function-length/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var define = require_define_data_property();
      var hasDescriptors = require_has_property_descriptors()();
      var gOPD = require_gopd();
      var $TypeError = require_type();
      var $floor = GetIntrinsic("%Math.floor%");
      module.exports = function setFunctionLength(fn, length) {
        if (typeof fn !== "function") {
          throw new $TypeError("`fn` is not a function");
        }
        if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
          throw new $TypeError("`length` must be a positive 32-bit integer");
        }
        var loose = arguments.length > 2 && !!arguments[2];
        var functionLengthIsConfigurable = true;
        var functionLengthIsWritable = true;
        if ("length" in fn && gOPD) {
          var desc = gOPD(fn, "length");
          if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
          }
          if (desc && !desc.writable) {
            functionLengthIsWritable = false;
          }
        }
        if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
          if (hasDescriptors) {
            define(
              /** @type {Parameters<define>[0]} */
              fn,
              "length",
              length,
              true,
              true
            );
          } else {
            define(
              /** @type {Parameters<define>[0]} */
              fn,
              "length",
              length
            );
          }
        }
        return fn;
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      var bind2 = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var setFunctionLength = require_set_function_length();
      var $TypeError = require_type();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind2.call($call, $apply);
      var $defineProperty = require_es_define_property();
      var $max = GetIntrinsic("%Math.max%");
      module.exports = function callBind(originalFunction) {
        if (typeof originalFunction !== "function") {
          throw new $TypeError("a function is required");
        }
        var func = $reflectApply(bind2, $call, arguments);
        return setFunctionLength(
          func,
          1 + $max(0, originalFunction.length - (arguments.length - 1)),
          true
        );
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind2, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // (disabled):node_modules/object-inspect/util.inspect
  var require_util = __commonJS({
    "(disabled):node_modules/object-inspect/util.inspect"() {
    }
  });

  // node_modules/object-inspect/index.js
  var require_object_inspect = __commonJS({
    "node_modules/object-inspect/index.js"(exports, module) {
      var hasMap = typeof Map === "function" && Map.prototype;
      var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
      var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
      var mapForEach = hasMap && Map.prototype.forEach;
      var hasSet = typeof Set === "function" && Set.prototype;
      var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
      var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
      var setForEach = hasSet && Set.prototype.forEach;
      var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
      var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
      var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
      var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
      var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
      var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
      var booleanValueOf = Boolean.prototype.valueOf;
      var objectToString = Object.prototype.toString;
      var functionToString = Function.prototype.toString;
      var $match = String.prototype.match;
      var $slice = String.prototype.slice;
      var $replace = String.prototype.replace;
      var $toUpperCase = String.prototype.toUpperCase;
      var $toLowerCase = String.prototype.toLowerCase;
      var $test = RegExp.prototype.test;
      var $concat = Array.prototype.concat;
      var $join = Array.prototype.join;
      var $arrSlice = Array.prototype.slice;
      var $floor = Math.floor;
      var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
      var gOPS = Object.getOwnPropertySymbols;
      var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
      var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
      var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
        return O.__proto__;
      } : null);
      function addNumericSeparator(num, str) {
        if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
          return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === "number") {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var utilInspect = require_util();
      var inspectCustom = utilInspect.custom;
      var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
        if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;
        if (typeof obj === "undefined") {
          return "undefined";
        }
        if (obj === null) {
          return "null";
        }
        if (typeof obj === "boolean") {
          return obj ? "true" : "false";
        }
        if (typeof obj === "string") {
          return inspectString(obj, opts);
        }
        if (typeof obj === "number") {
          if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === "bigint") {
          var bigIntStr = String(obj) + "n";
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }
        var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
        if (typeof depth === "undefined") {
          depth = 0;
        }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
          return isArray2(obj) ? "[Array]" : "[Object]";
        }
        var indent = getIndent(opts, depth);
        if (typeof seen === "undefined") {
          seen = [];
        } else if (indexOf(seen, obj) >= 0) {
          return "[Circular]";
        }
        function inspect(value, from, noIndent) {
          if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
          }
          if (noIndent) {
            var newOpts = {
              depth: opts.depth
            };
            if (has(opts, "quoteStyle")) {
              newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if (typeof obj === "function" && !isRegExp2(obj)) {
          var name = nameOf(obj);
          var keys = arrObjKeys(obj, inspect);
          return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
          return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement(obj)) {
          var s = "<" + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
            s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
          }
          s += ">";
          if (obj.childNodes && obj.childNodes.length) {
            s += "...";
          }
          s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
          return s;
        }
        if (isArray2(obj)) {
          if (obj.length === 0) {
            return "[]";
          }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
          }
          return "[ " + $join.call(xs, ", ") + " ]";
        }
        if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
          }
          if (parts.length === 0) {
            return "[" + String(obj) + "]";
          }
          return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if (typeof obj === "object" && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
          }
        }
        if (isMap(obj)) {
          var mapParts = [];
          if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
          }
          return collectionOf("Map", mapSize.call(obj), mapParts, indent);
        }
        if (isSet(obj)) {
          var setParts = [];
          if (setForEach) {
            setForEach.call(obj, function(value) {
              setParts.push(inspect(value, obj));
            });
          }
          return collectionOf("Set", setSize.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
          return weakCollectionOf("WeakMap");
        }
        if (isWeakSet(obj)) {
          return weakCollectionOf("WeakSet");
        }
        if (isWeakRef(obj)) {
          return weakCollectionOf("WeakRef");
        }
        if (isNumber2(obj)) {
          return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean2(obj)) {
          return markBoxed(booleanValueOf.call(obj));
        }
        if (isString2(obj)) {
          return markBoxed(inspect(String(obj)));
        }
        if (typeof window !== "undefined" && obj === window) {
          return "{ [object Window] }";
        }
        if (obj === global) {
          return "{ [object globalThis] }";
        }
        if (!isDate2(obj) && !isRegExp2(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? "" : "null prototype";
          var stringTag = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
          var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
          var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
          if (ys.length === 0) {
            return tag + "{}";
          }
          if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
          }
          return tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      function wrapQuotes(s, defaultStyle, opts) {
        var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, "&quot;");
      }
      function isArray2(obj) {
        return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isDate2(obj) {
        return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isRegExp2(obj) {
        return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isError(obj) {
        return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isString2(obj) {
        return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isNumber2(obj) {
        return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isBoolean2(obj) {
        return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isSymbol(obj) {
        if (hasShammedSymbols) {
          return obj && typeof obj === "object" && obj instanceof Symbol;
        }
        if (typeof obj === "symbol") {
          return true;
        }
        if (!obj || typeof obj !== "object" || !symToString) {
          return false;
        }
        try {
          symToString.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isBigInt(obj) {
        if (!obj || typeof obj !== "object" || !bigIntValueOf) {
          return false;
        }
        try {
          bigIntValueOf.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      var hasOwn = Object.prototype.hasOwnProperty || function(key) {
        return key in this;
      };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function nameOf(f) {
        if (f.name) {
          return f.name;
        }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) {
          return m[1];
        }
        return null;
      }
      function indexOf(xs, x) {
        if (xs.indexOf) {
          return xs.indexOf(x);
        }
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) {
            return i;
          }
        }
        return -1;
      }
      function isMap(x) {
        if (!mapSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          mapSize.call(x);
          try {
            setSize.call(x);
          } catch (s) {
            return true;
          }
          return x instanceof Map;
        } catch (e) {
        }
        return false;
      }
      function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakMapHas.call(x, weakMapHas);
          try {
            weakSetHas.call(x, weakSetHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakMap;
        } catch (e) {
        }
        return false;
      }
      function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakRefDeref.call(x);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isSet(x) {
        if (!setSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          setSize.call(x);
          try {
            mapSize.call(x);
          } catch (m) {
            return true;
          }
          return x instanceof Set;
        } catch (e) {
        }
        return false;
      }
      function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakSetHas.call(x, weakSetHas);
          try {
            weakMapHas.call(x, weakMapHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakSet;
        } catch (e) {
        }
        return false;
      }
      function isElement(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
          return true;
        }
        return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s, "single", opts);
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0);
        var x = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[n];
        if (x) {
          return "\\" + x;
        }
        return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size, entries, indent) {
        var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
        return type + " (" + size + ") {" + joinedEntries + "}";
      }
      function singleLineValues(xs) {
        for (var i = 0; i < xs.length; i++) {
          if (indexOf(xs[i], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }
      function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === "	") {
          baseIndent = "	";
        } else if (typeof opts.indent === "number" && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), " ");
        } else {
          return null;
        }
        return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
        };
      }
      function indentedJoin(xs, indent) {
        if (xs.length === 0) {
          return "";
        }
        var lineJoiner = "\n" + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray2(obj);
        var xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
          }
        }
        var syms = typeof gOPS === "function" ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
            symMap["$" + syms[k]] = syms[k];
          }
        }
        for (var key in obj) {
          if (!has(obj, key)) {
            continue;
          }
          if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
          }
          if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue;
          } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
          } else {
            xs.push(key + ": " + inspect(obj[key], obj));
          }
        }
        if (typeof gOPS === "function") {
          for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
              xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
          }
        }
        return xs;
      }
    }
  });

  // node_modules/side-channel/index.js
  var require_side_channel = __commonJS({
    "node_modules/side-channel/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_callBound();
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var $WeakMap = GetIntrinsic("%WeakMap%", true);
      var $Map = GetIntrinsic("%Map%", true);
      var $weakMapGet = callBound("WeakMap.prototype.get", true);
      var $weakMapSet = callBound("WeakMap.prototype.set", true);
      var $weakMapHas = callBound("WeakMap.prototype.has", true);
      var $mapGet = callBound("Map.prototype.get", true);
      var $mapSet = callBound("Map.prototype.set", true);
      var $mapHas = callBound("Map.prototype.has", true);
      var listGetNode = function(list, key) {
        var prev = list;
        var curr;
        for (; (curr = prev.next) !== null; prev = curr) {
          if (curr.key === key) {
            prev.next = curr.next;
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
            return curr;
          }
        }
      };
      var listGet = function(objects, key) {
        var node = listGetNode(objects, key);
        return node && node.value;
      };
      var listSet = function(objects, key, value) {
        var node = listGetNode(objects, key);
        if (node) {
          node.value = value;
        } else {
          objects.next = /** @type {import('.').ListNode<typeof value>} */
          {
            // eslint-disable-line no-param-reassign, no-extra-parens
            key,
            next: objects.next,
            value
          };
        }
      };
      var listHas = function(objects, key) {
        return !!listGetNode(objects, key);
      };
      module.exports = function getSideChannel() {
        var $wm;
        var $m;
        var $o;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            } else if ($Map) {
              if ($m) {
                return $mapGet($m, key);
              }
            } else {
              if ($o) {
                return listGet($o, key);
              }
            }
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            } else if ($Map) {
              if ($m) {
                return $mapHas($m, key);
              }
            } else {
              if ($o) {
                return listHas($o, key);
              }
            }
            return false;
          },
          set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if ($Map) {
              if (!$m) {
                $m = new $Map();
              }
              $mapSet($m, key, value);
            } else {
              if (!$o) {
                $o = { key: {}, next: null };
              }
              listSet($o, key, value);
            }
          }
        };
        return channel;
      };
    }
  });

  // node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      var replace = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
          },
          RFC3986: function(value) {
            return String(value);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var hexTable = function() {
        var array = [];
        for (var i = 0; i < 256; ++i) {
          array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
        }
        return array;
      }();
      var compactQueue = function compactQueue2(queue) {
        while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];
          if (isArray2(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
              if (typeof obj[j] !== "undefined") {
                compacted.push(obj[j]);
              }
            }
            item.obj[item.prop] = compacted;
          }
        }
      };
      var arrayToObject2 = function arrayToObject3(source, options) {
        var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
          }
        }
        return obj;
      };
      var merge2 = function merge3(target, source, options) {
        if (!source) {
          return target;
        }
        if (typeof source !== "object") {
          if (isArray2(target)) {
            target.push(source);
          } else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
              target[source] = true;
            }
          } else {
            return [target, source];
          }
          return target;
        }
        if (!target || typeof target !== "object") {
          return [target].concat(source);
        }
        var mergeTarget = target;
        if (isArray2(target) && !isArray2(source)) {
          mergeTarget = arrayToObject2(target, options);
        }
        if (isArray2(target) && isArray2(source)) {
          source.forEach(function(item, i) {
            if (has.call(target, i)) {
              var targetItem = target[i];
              if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                target[i] = merge3(targetItem, item, options);
              } else {
                target.push(item);
              }
            } else {
              target[i] = item;
            }
          });
          return target;
        }
        return Object.keys(source).reduce(function(acc, key) {
          var value = source[key];
          if (has.call(acc, key)) {
            acc[key] = merge3(acc[key], value, options);
          } else {
            acc[key] = value;
          }
          return acc;
        }, mergeTarget);
      };
      var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function(acc, key) {
          acc[key] = source[key];
          return acc;
        }, target);
      };
      var decode = function(str, decoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      };
      var encode3 = function encode4(str, defaultEncoder, charset, kind, format) {
        if (str.length === 0) {
          return str;
        }
        var string = str;
        if (typeof str === "symbol") {
          string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string = String(str);
        }
        if (charset === "iso-8859-1") {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            out += string.charAt(i);
            continue;
          }
          if (c < 128) {
            out = out + hexTable[c];
            continue;
          }
          if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
          }
          if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
          out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        return out;
      };
      var compact = function compact2(value) {
        var queue = [{ obj: { o: value }, prop: "o" }];
        var refs = [];
        for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];
          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
              queue.push({ obj, prop: key });
              refs.push(val);
            }
          }
        }
        compactQueue(queue);
        return value;
      };
      var isRegExp2 = function isRegExp3(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer2 = function isBuffer3(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a, b) {
        return [].concat(a, b);
      };
      var maybeMap = function maybeMap2(val, fn) {
        if (isArray2(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
          }
          return mapped;
        }
        return fn(val);
      };
      module.exports = {
        arrayToObject: arrayToObject2,
        assign,
        combine,
        compact,
        decode,
        encode: encode3,
        isBuffer: isBuffer2,
        isRegExp: isRegExp2,
        maybeMap,
        merge: merge2
      };
    }
  });

  // node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      var getSideChannel = require_side_channel();
      var utils = require_utils();
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
          return prefix + "[]";
        },
        comma: "comma",
        indices: function indices(prefix, key) {
          return prefix + "[" + key + "]";
        },
        repeat: function repeat(prefix) {
          return prefix;
        }
      };
      var isArray2 = Array.isArray;
      var split = String.prototype.split;
      var push = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults2 = {
        addQueryPrefix: false,
        allowDots: false,
        charset: "utf-8",
        charsetSentinel: false,
        delimiter: "&",
        encode: true,
        encoder: utils.encode,
        encodeValuesOnly: false,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
          return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
        return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
      };
      var sentinel = {};
      var stringify2 = function stringify3(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
        var obj = object;
        var tmpSc = sideChannel;
        var step = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
          var pos = tmpSc.get(object);
          step += 1;
          if (typeof pos !== "undefined") {
            if (pos === step) {
              throw new RangeError("Cyclic object value");
            } else {
              findFlag = true;
            }
          }
          if (typeof tmpSc.get(sentinel) === "undefined") {
            step = 0;
          }
        }
        if (typeof filter2 === "function") {
          obj = filter2(prefix, obj);
        } else if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
          obj = utils.maybeMap(obj, function(value2) {
            if (value2 instanceof Date) {
              return serializeDate(value2);
            }
            return value2;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix;
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
            if (generateArrayPrefix === "comma" && encodeValuesOnly) {
              var valuesArray = split.call(String(obj), ",");
              var valuesJoined = "";
              for (var i = 0; i < valuesArray.length; ++i) {
                valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults2.encoder, charset, "value", format));
              }
              return [formatter(keyValue) + (commaRoundTrip && isArray2(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
            }
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
          }
          return [formatter(prefix) + "=" + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === "undefined") {
          return values;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray2(obj)) {
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray2(filter2)) {
          objKeys = filter2;
        } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
        }
        var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? prefix + "[]" : prefix;
        for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
          if (skipNulls && value === null) {
            continue;
          }
          var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
          sideChannel.set(object, step);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values, stringify3(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter2,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
          ));
        }
        return values;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset = opts.charset || defaults2.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format = opts.format;
        }
        var formatter = formats.formatters[format];
        var filter2 = defaults2.filter;
        if (typeof opts.filter === "function" || isArray2(opts.filter)) {
          filter2 = opts.filter;
        }
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
          allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
          filter: filter2,
          format,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);
        var objKeys;
        var filter2;
        if (typeof options.filter === "function") {
          filter2 = options.filter;
          obj = filter2("", obj);
        } else if (isArray2(options.filter)) {
          filter2 = options.filter;
          objKeys = filter2;
        }
        var keys = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var arrayFormat;
        if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if (opts && "indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = "indices";
        }
        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
        if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        }
        var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options.sort) {
          objKeys.sort(options.sort);
        }
        var sideChannel = getSideChannel();
        for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
          if (options.skipNulls && obj[key] === null) {
            continue;
          }
          pushToArray(keys, stringify2(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
          ));
        }
        var joined = keys.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? "?" : "";
        if (options.charsetSentinel) {
          if (options.charset === "iso-8859-1") {
            prefix += "utf8=%26%2310003%3B&";
          } else {
            prefix += "utf8=%E2%9C%93&";
          }
        }
        return joined.length > 0 ? prefix + joined : "";
      };
    }
  });

  // node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var defaults2 = {
        allowDots: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictNullHandling: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options) {
        if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
          return val.split(",");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options) {
        var obj = {};
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
        var parts = cleanStr.split(options.delimiter, limit);
        var skipIndex = -1;
        var i;
        var charset = options.charset;
        if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf("utf8=") === 0) {
              if (parts[i] === charsetSentinel) {
                charset = "utf-8";
              } else if (parts[i] === isoSentinel) {
                charset = "iso-8859-1";
              }
              skipIndex = i;
              i = parts.length;
            }
          }
        }
        for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
            continue;
          }
          var part = parts[i];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key, val;
          if (pos === -1) {
            key = options.decoder(part, defaults2.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
          } else {
            key = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
            val = utils.maybeMap(
              parseArrayValue(part.slice(pos + 1), options),
              function(encodedVal) {
                return options.decoder(encodedVal, defaults2.decoder, charset, "value");
              }
            );
          }
          if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(val);
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray2(val) ? [val] : val;
          }
          if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
          } else {
            obj[key] = val;
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options, valuesParsed) {
        var leaf = valuesParsed ? val : parseArrayValue(val, options);
        for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];
          if (root === "[]" && options.parseArrays) {
            obj = [].concat(leaf);
          } else {
            obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") {
              obj = { 0: leaf };
            } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
              obj = [];
              obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") {
              obj[cleanRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;
        var segment = options.depth > 0 && brackets.exec(key);
        var parent = segment ? key.slice(0, segment.index) : key;
        var keys = [];
        if (parent) {
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys.push(parent);
        }
        var i = 0;
        while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys.push(segment[1]);
        }
        if (segment) {
          keys.push("[" + key.slice(segment.index) + "]");
        }
        return parseObject(keys, val, options, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
        return {
          allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
          allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(str, opts) {
        var options = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options) : str;
        var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
          obj = utils.merge(obj, newObj, options);
        }
        if (options.allowSparse === true) {
          return obj;
        }
        return utils.compact(obj);
      };
    }
  });

  // node_modules/qs/lib/index.js
  var require_lib = __commonJS({
    "node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      var stringify2 = require_stringify();
      var parse = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse,
        stringify: stringify2
      };
    }
  });

  // public/js/leaflet.js
  var displayMap = (locations) => {
    const map = L.map("map", { zoomControl: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var greenIcon = L.icon({
      iconUrl: "/img/pin.png",
      iconSize: [32, 40],
      // size of the icon
      iconAnchor: [16, 45],
      // point of the icon which will correspond to marker's location
      popupAnchor: [0, -50]
      // point from which the popup should open relative to the iconAnchor
    });
    const points = [];
    locations.forEach((loc) => {
      points.push([loc.coordinates[1], loc.coordinates[0]]);
      L.marker([loc.coordinates[1], loc.coordinates[0]], { icon: greenIcon }).addTo(map).bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false
      }).openPopup();
    });
    const bounds = L.latLngBounds(points).pad(0.5);
    map.fitBounds(bounds);
    map.scrollWheelZoom.disable();
  };

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    origin: () => origin
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var hasStandardBrowserEnv = ((product) => {
    return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
  })(typeof navigator !== "undefined" && navigator.product);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var origin = hasBrowserEnv && window.location.href || "http://localhost";

  // node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports,
    ...browser_default
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else if (utils_default.isHeaders(header)) {
        for (const [key, value] of header.entries()) {
          setHeader(value, key, rewrite);
        }
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    const threshold = 1e3 / freq;
    let timer = null;
    return function throttled() {
      const force = this === true;
      const now = Date.now();
      if (force || now - timestamp > threshold) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timestamp = now;
        return fn.apply(null, arguments);
      }
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          timestamp = Date.now();
          return fn.apply(null, arguments);
        }, threshold - (now - timestamp));
      }
    };
  }
  var throttle_default = throttle;

  // node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer_default = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return throttle_default((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    }, freq);
  };

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + "=" + encodeURIComponent(value)];
        utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils_default.isString(path) && cookie.push("path=" + path);
        utils_default.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default = (config) => {
    const newConfig = mergeConfig({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders_default.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    let contentType;
    if (utils_default.isFormData(data)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if ((contentType = headers.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    if (platform_default.hasStandardBrowserEnv) {
      withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };

  // node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig_default(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
      let { responseType } = _config;
      let onCanceled;
      function done() {
        if (_config.cancelToken) {
          _config.cancelToken.unsubscribe(onCanceled);
        }
        if (_config.signal) {
          _config.signal.removeEventListener("abort", onCanceled);
        }
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, _config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, _config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = _config.transitional || transitional_default;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          _config,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (typeof _config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer_default(_config.onDownloadProgress, true));
      }
      if (typeof _config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer_default(_config.onUploadProgress));
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals = (signals, timeout) => {
    let controller = new AbortController();
    let aborted;
    const onabort = function(cancel) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = cancel instanceof Error ? cancel : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2 && (signal2.removeEventListener ? signal2.removeEventListener("abort", onabort) : signal2.unsubscribe(onabort));
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2 && signal2.addEventListener && signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = unsubscribe;
    return [signal, () => {
      timer && clearTimeout(timer);
      timer = null;
    }];
  };
  var composeSignals_default = composeSignals;

  // node_modules/axios/lib/helpers/trackStream.js
  var streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  var readBytes = async function* (iterable, chunkSize, encode3) {
    for await (const chunk of iterable) {
      yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode3(String(chunk)), chunkSize);
    }
  };
  var trackStream = (stream, chunkSize, onProgress, onFinish, encode3) => {
    const iterator = readBytes(stream, chunkSize, encode3);
    let bytes = 0;
    return new ReadableStream({
      type: "bytes",
      async pull(controller) {
        const { done, value } = await iterator.next();
        if (done) {
          controller.close();
          onFinish();
          return;
        }
        let len = value.byteLength;
        onProgress && onProgress(bytes += len);
        controller.enqueue(new Uint8Array(value));
      },
      cancel(reason) {
        onFinish(reason);
        return iterator.return();
      }
    }, {
      highWaterMark: 2
    });
  };

  // node_modules/axios/lib/adapters/fetch.js
  var fetchProgressDecorator = (total, fn) => {
    const lengthComputable = total != null;
    return (loaded) => setTimeout(() => fn({
      lengthComputable,
      total,
      loaded
    }));
  };
  var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
  var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
  var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
  var supportsRequestStream = isReadableStreamSupported && (() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform_default.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  })();
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var supportsResponseStream = isReadableStreamSupported && !!(() => {
    try {
      return utils_default.isReadableStream(new Response("").body);
    } catch (err) {
    }
  })();
  var resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && ((res) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
        throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
      });
    });
  })(new Response());
  var getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils_default.isBlob(body)) {
      return body.size;
    }
    if (utils_default.isSpecCompliantForm(body)) {
      return (await new Request(body).arrayBuffer()).byteLength;
    }
    if (utils_default.isArrayBufferView(body)) {
      return body.byteLength;
    }
    if (utils_default.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils_default.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  var resolveBodyLength = async (headers, body) => {
    const length = utils_default.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  var fetch_default = isFetchSupported && (async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig_default(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? composeSignals_default([signal, cancelToken], timeout) : [];
    let finished, request;
    const onFinish = () => {
      !finished && setTimeout(() => {
        composedSignal && composedSignal.unsubscribe();
      });
      finished = true;
    };
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, fetchProgressDecorator(
            requestContentLength,
            progressEventReducer_default(onUploadProgress)
          ), null, encodeText);
        }
      }
      if (!utils_default.isString(withCredentials)) {
        withCredentials = withCredentials ? "cors" : "omit";
      }
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        withCredentials
      });
      let response = await fetch(request);
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onDownloadProgress && fetchProgressDecorator(
            responseContentLength,
            progressEventReducer_default(onDownloadProgress, true)
          ), isStreamResponse && onFinish, encodeText),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && onFinish();
      stopTimeout && stopTimeout();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders_default.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      onFinish();
      if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError_default.from(err, err && err.code, config, request);
    }
  });

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default,
    fetch: fetch_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.7.2";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy;
          Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // public/js/alert.js
  var hideAlert = () => {
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
  };
  var showAlert = (type, msg) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout(hideAlert, 5e3);
  };

  // public/js/login.js
  var login = async (email, password) => {
    try {
      const res = await axios_default({
        method: "POST",
        url: "/api/v1/user/login",
        data: {
          email,
          password
        }
      });
      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully!");
        window.setTimeout(() => {
          location.assign("/");
        }, 1500);
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };
  var logout = async () => {
    try {
      const res = await axios_default({
        method: "GET",
        url: "/api/v1/user/logout"
      });
      if (res.data.status === "success") location.reload(true);
    } catch (err) {
      showAlert("error", "Error logging out! Try again");
    }
  };

  // public/js/signup.js
  var signup = async (name, email, password, passwordConfirm) => {
    try {
      const res = await axios_default({
        method: "POST",
        url: "/api/v1/user/signup",
        data: {
          name,
          email,
          password,
          passwordConfirm
        }
      });
      if (res.data.status === "success") {
        showAlert("success", "Account created and logged in successfully");
        window.setTimeout(() => {
          location.assign("/");
        }, 1500);
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };

  // public/js/updateSettings.js
  var updateSettings = async (data, type) => {
    try {
      const url = type === "password" ? "/api/v1/user/UpdateMyPassword" : "/api/v1/user/updateMe";
      const res = await axios_default({
        method: "PATCH",
        url,
        data
      });
      if (res.data.status === "success") {
        showAlert("success", `${type.toUpperCase()} updated successfully!`);
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };

  // node_modules/stripe/esm/net/HttpClient.js
  var HttpClient = class _HttpClient {
    /** The client name used for diagnostics. */
    getClientName() {
      throw new Error("getClientName not implemented.");
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
      throw new Error("makeRequest not implemented.");
    }
    /** Helper to make a consistent timeout error across implementations. */
    static makeTimeoutError() {
      const timeoutErr = new TypeError(_HttpClient.TIMEOUT_ERROR_CODE);
      timeoutErr.code = _HttpClient.TIMEOUT_ERROR_CODE;
      return timeoutErr;
    }
  };
  HttpClient.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
  HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
  var HttpClientResponse = class {
    constructor(statusCode, headers) {
      this._statusCode = statusCode;
      this._headers = headers;
    }
    getStatusCode() {
      return this._statusCode;
    }
    getHeaders() {
      return this._headers;
    }
    getRawResponse() {
      throw new Error("getRawResponse not implemented.");
    }
    toStream(streamCompleteCallback) {
      throw new Error("toStream not implemented.");
    }
    toJSON() {
      throw new Error("toJSON not implemented.");
    }
  };

  // node_modules/stripe/esm/net/FetchHttpClient.js
  var FetchHttpClient = class _FetchHttpClient extends HttpClient {
    constructor(fetchFn) {
      super();
      if (!fetchFn) {
        if (!globalThis.fetch) {
          throw new Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");
        }
        fetchFn = globalThis.fetch;
      }
      if (globalThis.AbortController) {
        this._fetchFn = _FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
      } else {
        this._fetchFn = _FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
      }
    }
    static makeFetchWithRaceTimeout(fetchFn) {
      return (url, init, timeout) => {
        let pendingTimeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          pendingTimeoutId = setTimeout(() => {
            pendingTimeoutId = null;
            reject(HttpClient.makeTimeoutError());
          }, timeout);
        });
        const fetchPromise = fetchFn(url, init);
        return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
          if (pendingTimeoutId) {
            clearTimeout(pendingTimeoutId);
          }
        });
      };
    }
    static makeFetchWithAbortTimeout(fetchFn) {
      return async (url, init, timeout) => {
        const abort = new AbortController();
        let timeoutId = setTimeout(() => {
          timeoutId = null;
          abort.abort(HttpClient.makeTimeoutError());
        }, timeout);
        try {
          return await fetchFn(url, Object.assign(Object.assign({}, init), { signal: abort.signal }));
        } catch (err) {
          if (err.name === "AbortError") {
            throw HttpClient.makeTimeoutError();
          } else {
            throw err;
          }
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
      };
    }
    /** @override. */
    getClientName() {
      return "fetch";
    }
    async makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
      const isInsecureConnection = protocol === "http";
      const url = new URL(path, `${isInsecureConnection ? "http" : "https"}://${host}`);
      url.port = port;
      const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
      const body = requestData || (methodHasPayload ? "" : void 0);
      const res = await this._fetchFn(url.toString(), {
        method,
        // @ts-ignore
        headers,
        // @ts-ignore
        body
      }, timeout);
      return new FetchHttpClientResponse(res);
    }
  };
  var FetchHttpClientResponse = class _FetchHttpClientResponse extends HttpClientResponse {
    constructor(res) {
      super(res.status, _FetchHttpClientResponse._transformHeadersToObject(res.headers));
      this._res = res;
    }
    getRawResponse() {
      return this._res;
    }
    toStream(streamCompleteCallback) {
      streamCompleteCallback();
      return this._res.body;
    }
    toJSON() {
      return this._res.json();
    }
    static _transformHeadersToObject(headers) {
      const headersObj = {};
      for (const entry of headers) {
        if (!Array.isArray(entry) || entry.length != 2) {
          throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
        }
        headersObj[entry[0]] = entry[1];
      }
      return headersObj;
    }
  };

  // node_modules/stripe/esm/crypto/CryptoProvider.js
  var CryptoProvider = class {
    /**
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */
    computeHMACSignature(payload, secret) {
      throw new Error("computeHMACSignature not implemented.");
    }
    /**
     * Asynchronous version of `computeHMACSignature`. Some implementations may
     * only allow support async signature computation.
     *
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */
    computeHMACSignatureAsync(payload, secret) {
      throw new Error("computeHMACSignatureAsync not implemented.");
    }
  };
  var CryptoProviderOnlySupportsAsyncError = class extends Error {
  };

  // node_modules/stripe/esm/crypto/SubtleCryptoProvider.js
  var SubtleCryptoProvider = class extends CryptoProvider {
    constructor(subtleCrypto) {
      super();
      this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */
    computeHMACSignature(payload, secret) {
      throw new CryptoProviderOnlySupportsAsyncError("SubtleCryptoProvider cannot be used in a synchronous context.");
    }
    /** @override */
    async computeHMACSignatureAsync(payload, secret) {
      const encoder = new TextEncoder();
      const key = await this.subtleCrypto.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: { name: "SHA-256" }
      }, false, ["sign"]);
      const signatureBuffer = await this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
      const signatureBytes = new Uint8Array(signatureBuffer);
      const signatureHexCodes = new Array(signatureBytes.length);
      for (let i = 0; i < signatureBytes.length; i++) {
        signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
      }
      return signatureHexCodes.join("");
    }
  };
  var byteHexMapping = new Array(256);
  for (let i = 0; i < byteHexMapping.length; i++) {
    byteHexMapping[i] = i.toString(16).padStart(2, "0");
  }

  // node_modules/stripe/esm/platform/PlatformFunctions.js
  var PlatformFunctions = class {
    constructor() {
      this._fetchFn = null;
      this._agent = null;
    }
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */
    getUname() {
      throw new Error("getUname not implemented.");
    }
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */
    uuid4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
    /**
     * Compares strings in constant time.
     */
    secureCompare(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      const len = a.length;
      let result = 0;
      for (let i = 0; i < len; ++i) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
      }
      return result === 0;
    }
    /**
     * Creates an event emitter.
     */
    createEmitter() {
      throw new Error("createEmitter not implemented.");
    }
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */
    tryBufferData(data) {
      throw new Error("tryBufferData not implemented.");
    }
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */
    createNodeHttpClient(agent) {
      throw new Error("createNodeHttpClient not implemented.");
    }
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */
    createFetchHttpClient(fetchFn) {
      return new FetchHttpClient(fetchFn);
    }
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */
    createDefaultHttpClient() {
      throw new Error("createDefaultHttpClient not implemented.");
    }
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */
    createNodeCryptoProvider() {
      throw new Error("createNodeCryptoProvider not implemented.");
    }
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */
    createSubtleCryptoProvider(subtleCrypto) {
      return new SubtleCryptoProvider(subtleCrypto);
    }
    createDefaultCryptoProvider() {
      throw new Error("createDefaultCryptoProvider not implemented.");
    }
  };

  // node_modules/stripe/esm/StripeEmitter.js
  var _StripeEvent = class extends Event {
    constructor(eventName, data) {
      super(eventName);
      this.data = data;
    }
  };
  var StripeEmitter = class {
    constructor() {
      this.eventTarget = new EventTarget();
      this.listenerMapping = /* @__PURE__ */ new Map();
    }
    on(eventName, listener) {
      const listenerWrapper = (event) => {
        listener(event.data);
      };
      this.listenerMapping.set(listener, listenerWrapper);
      return this.eventTarget.addEventListener(eventName, listenerWrapper);
    }
    removeListener(eventName, listener) {
      const listenerWrapper = this.listenerMapping.get(listener);
      this.listenerMapping.delete(listener);
      return this.eventTarget.removeEventListener(eventName, listenerWrapper);
    }
    once(eventName, listener) {
      const listenerWrapper = (event) => {
        listener(event.data);
      };
      this.listenerMapping.set(listener, listenerWrapper);
      return this.eventTarget.addEventListener(eventName, listenerWrapper, {
        once: true
      });
    }
    emit(eventName, data) {
      return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
    }
  };

  // node_modules/stripe/esm/platform/WebPlatformFunctions.js
  var WebPlatformFunctions = class extends PlatformFunctions {
    /** @override */
    getUname() {
      return Promise.resolve(null);
    }
    /** @override */
    createEmitter() {
      return new StripeEmitter();
    }
    /** @override */
    tryBufferData(data) {
      if (data.file.data instanceof ReadableStream) {
        throw new Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");
      }
      return Promise.resolve(data);
    }
    /** @override */
    createNodeHttpClient() {
      throw new Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.");
    }
    /** @override */
    createDefaultHttpClient() {
      return super.createFetchHttpClient();
    }
    /** @override */
    createNodeCryptoProvider() {
      throw new Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.");
    }
    /** @override */
    createDefaultCryptoProvider() {
      return this.createSubtleCryptoProvider();
    }
  };

  // node_modules/stripe/esm/Error.js
  var Error_exports = {};
  __export(Error_exports, {
    StripeAPIError: () => StripeAPIError,
    StripeAuthenticationError: () => StripeAuthenticationError,
    StripeCardError: () => StripeCardError,
    StripeConnectionError: () => StripeConnectionError,
    StripeError: () => StripeError,
    StripeIdempotencyError: () => StripeIdempotencyError,
    StripeInvalidGrantError: () => StripeInvalidGrantError,
    StripeInvalidRequestError: () => StripeInvalidRequestError,
    StripePermissionError: () => StripePermissionError,
    StripeRateLimitError: () => StripeRateLimitError,
    StripeSignatureVerificationError: () => StripeSignatureVerificationError,
    StripeUnknownError: () => StripeUnknownError,
    generate: () => generate
  });
  var generate = (rawStripeError) => {
    switch (rawStripeError.type) {
      case "card_error":
        return new StripeCardError(rawStripeError);
      case "invalid_request_error":
        return new StripeInvalidRequestError(rawStripeError);
      case "api_error":
        return new StripeAPIError(rawStripeError);
      case "authentication_error":
        return new StripeAuthenticationError(rawStripeError);
      case "rate_limit_error":
        return new StripeRateLimitError(rawStripeError);
      case "idempotency_error":
        return new StripeIdempotencyError(rawStripeError);
      case "invalid_grant":
        return new StripeInvalidGrantError(rawStripeError);
      default:
        return new StripeUnknownError(rawStripeError);
    }
  };
  var StripeError = class extends Error {
    constructor(raw = {}, type = null) {
      super(raw.message);
      this.type = type || this.constructor.name;
      this.raw = raw;
      this.rawType = raw.type;
      this.code = raw.code;
      this.doc_url = raw.doc_url;
      this.param = raw.param;
      this.detail = raw.detail;
      this.headers = raw.headers;
      this.requestId = raw.requestId;
      this.statusCode = raw.statusCode;
      this.message = raw.message;
      this.charge = raw.charge;
      this.decline_code = raw.decline_code;
      this.payment_intent = raw.payment_intent;
      this.payment_method = raw.payment_method;
      this.payment_method_type = raw.payment_method_type;
      this.setup_intent = raw.setup_intent;
      this.source = raw.source;
    }
  };
  StripeError.generate = generate;
  var StripeCardError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeCardError");
    }
  };
  var StripeInvalidRequestError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeInvalidRequestError");
    }
  };
  var StripeAPIError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeAPIError");
    }
  };
  var StripeAuthenticationError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeAuthenticationError");
    }
  };
  var StripePermissionError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripePermissionError");
    }
  };
  var StripeRateLimitError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeRateLimitError");
    }
  };
  var StripeConnectionError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeConnectionError");
    }
  };
  var StripeSignatureVerificationError = class extends StripeError {
    constructor(header, payload, raw = {}) {
      super(raw, "StripeSignatureVerificationError");
      this.header = header;
      this.payload = payload;
    }
  };
  var StripeIdempotencyError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeIdempotencyError");
    }
  };
  var StripeInvalidGrantError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeInvalidGrantError");
    }
  };
  var StripeUnknownError = class extends StripeError {
    constructor(raw = {}) {
      super(raw, "StripeUnknownError");
    }
  };

  // node_modules/stripe/esm/apiVersion.js
  var ApiVersion = "2024-06-20";

  // node_modules/stripe/esm/resources.js
  var resources_exports = {};
  __export(resources_exports, {
    Account: () => Accounts2,
    AccountLinks: () => AccountLinks,
    AccountSessions: () => AccountSessions,
    Accounts: () => Accounts2,
    ApplePayDomains: () => ApplePayDomains,
    ApplicationFees: () => ApplicationFees,
    Apps: () => Apps,
    Balance: () => Balance,
    BalanceTransactions: () => BalanceTransactions,
    Billing: () => Billing,
    BillingPortal: () => BillingPortal,
    Charges: () => Charges,
    Checkout: () => Checkout,
    Climate: () => Climate,
    ConfirmationTokens: () => ConfirmationTokens2,
    CountrySpecs: () => CountrySpecs,
    Coupons: () => Coupons,
    CreditNotes: () => CreditNotes,
    CustomerSessions: () => CustomerSessions,
    Customers: () => Customers2,
    Disputes: () => Disputes2,
    Entitlements: () => Entitlements,
    EphemeralKeys: () => EphemeralKeys,
    Events: () => Events,
    ExchangeRates: () => ExchangeRates,
    FileLinks: () => FileLinks,
    Files: () => Files,
    FinancialConnections: () => FinancialConnections,
    Forwarding: () => Forwarding,
    Identity: () => Identity,
    InvoiceItems: () => InvoiceItems,
    Invoices: () => Invoices,
    Issuing: () => Issuing,
    Mandates: () => Mandates,
    OAuth: () => OAuth,
    PaymentIntents: () => PaymentIntents,
    PaymentLinks: () => PaymentLinks,
    PaymentMethodConfigurations: () => PaymentMethodConfigurations,
    PaymentMethodDomains: () => PaymentMethodDomains,
    PaymentMethods: () => PaymentMethods,
    Payouts: () => Payouts,
    Plans: () => Plans,
    Prices: () => Prices,
    Products: () => Products2,
    PromotionCodes: () => PromotionCodes,
    Quotes: () => Quotes,
    Radar: () => Radar,
    Refunds: () => Refunds2,
    Reporting: () => Reporting,
    Reviews: () => Reviews,
    SetupAttempts: () => SetupAttempts,
    SetupIntents: () => SetupIntents,
    ShippingRates: () => ShippingRates,
    Sigma: () => Sigma,
    Sources: () => Sources,
    SubscriptionItems: () => SubscriptionItems,
    SubscriptionSchedules: () => SubscriptionSchedules,
    Subscriptions: () => Subscriptions,
    Tax: () => Tax,
    TaxCodes: () => TaxCodes,
    TaxIds: () => TaxIds,
    TaxRates: () => TaxRates,
    Terminal: () => Terminal,
    TestHelpers: () => TestHelpers,
    Tokens: () => Tokens2,
    Topups: () => Topups,
    Transfers: () => Transfers,
    Treasury: () => Treasury,
    WebhookEndpoints: () => WebhookEndpoints
  });

  // node_modules/stripe/esm/ResourceNamespace.js
  function ResourceNamespace(stripe, resources) {
    for (const name in resources) {
      const camelCaseName = name[0].toLowerCase() + name.substring(1);
      const resource = new resources[name](stripe);
      this[camelCaseName] = resource;
    }
  }
  function resourceNamespace(namespace, resources) {
    return function(stripe) {
      return new ResourceNamespace(stripe, resources);
    };
  }

  // node_modules/stripe/esm/utils.js
  var qs = __toESM(require_lib(), 1);
  var OPTIONS_KEYS = [
    "apiKey",
    "idempotencyKey",
    "stripeAccount",
    "apiVersion",
    "maxNetworkRetries",
    "timeout",
    "host"
  ];
  function isOptionsHash(o) {
    return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
  }
  function stringifyRequestData(data) {
    return qs.stringify(data, {
      serializeDate: (d) => Math.floor(d.getTime() / 1e3).toString()
    }).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
  var makeURLInterpolator = /* @__PURE__ */ (() => {
    const rc = {
      "\n": "\\n",
      '"': '\\"',
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    return (str) => {
      const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
      return (outputs) => {
        return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => (
          // @ts-ignore
          encodeURIComponent(outputs[$1] || "")
        ));
      };
    };
  })();
  function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
      return [];
    }
    return params.map((param) => param.replace(/[{}]/g, ""));
  }
  function getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
      return {};
    }
    if (!isOptionsHash(args[0])) {
      return args.shift();
    }
    const argKeys = Object.keys(args[0]);
    const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
    if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
      emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
    }
    return {};
  }
  function getOptionsFromArgs(args) {
    const opts = {
      auth: null,
      host: null,
      headers: {},
      settings: {}
    };
    if (args.length > 0) {
      const arg = args[args.length - 1];
      if (typeof arg === "string") {
        opts.auth = args.pop();
      } else if (isOptionsHash(arg)) {
        const params = Object.assign({}, args.pop());
        const extraKeys = Object.keys(params).filter((key) => !OPTIONS_KEYS.includes(key));
        if (extraKeys.length) {
          emitWarning(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
        }
        if (params.apiKey) {
          opts.auth = params.apiKey;
        }
        if (params.idempotencyKey) {
          opts.headers["Idempotency-Key"] = params.idempotencyKey;
        }
        if (params.stripeAccount) {
          opts.headers["Stripe-Account"] = params.stripeAccount;
        }
        if (params.apiVersion) {
          opts.headers["Stripe-Version"] = params.apiVersion;
        }
        if (Number.isInteger(params.maxNetworkRetries)) {
          opts.settings.maxNetworkRetries = params.maxNetworkRetries;
        }
        if (Number.isInteger(params.timeout)) {
          opts.settings.timeout = params.timeout;
        }
        if (params.host) {
          opts.host = params.host;
        }
      }
    }
    return opts;
  }
  function protoExtend(sub) {
    const Super = this;
    const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
      Super.apply(this, args);
    };
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);
    return Constructor;
  }
  function removeNullish(obj) {
    if (typeof obj !== "object") {
      throw new Error("Argument must be an object");
    }
    return Object.keys(obj).reduce((result, key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  }
  function normalizeHeaders(obj) {
    if (!(obj && typeof obj === "object")) {
      return obj;
    }
    return Object.keys(obj).reduce((result, header) => {
      result[normalizeHeader2(header)] = obj[header];
      return result;
    }, {});
  }
  function normalizeHeader2(header) {
    return header.split("-").map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
  }
  function callbackifyPromiseWithTimeout(promise, callback) {
    if (callback) {
      return promise.then((res) => {
        setTimeout(() => {
          callback(null, res);
        }, 0);
      }, (err) => {
        setTimeout(() => {
          callback(err, null);
        }, 0);
      });
    }
    return promise;
  }
  function pascalToCamelCase(name) {
    if (name === "OAuth") {
      return "oauth";
    } else {
      return name[0].toLowerCase() + name.substring(1);
    }
  }
  function emitWarning(warning) {
    if (typeof process.emitWarning !== "function") {
      return console.warn(`Stripe: ${warning}`);
    }
    return process.emitWarning(warning, "Stripe");
  }
  function isObject2(obj) {
    const type = typeof obj;
    return (type === "function" || type === "object") && !!obj;
  }
  function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey) => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const newKey = prevKey ? `${prevKey}[${key}]` : key;
        if (isObject2(value)) {
          if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, "data")) {
            return step(value, newKey);
          } else {
            result[newKey] = value;
          }
        } else {
          result[newKey] = String(value);
        }
      });
    };
    step(data, null);
    return result;
  }
  function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
      if (defaultVal !== void 0) {
        return defaultVal;
      } else {
        throw new Error(`${name} must be an integer`);
      }
    }
    return n;
  }
  function determineProcessUserAgentProperties() {
    return typeof process === "undefined" ? {} : {
      lang_version: process.version,
      platform: process.platform
    };
  }

  // node_modules/stripe/esm/autoPagination.js
  var StripeIterator = class {
    constructor(firstPagePromise, requestArgs, spec, stripeResource) {
      this.index = 0;
      this.pagePromise = firstPagePromise;
      this.promiseCache = { currentPromise: null };
      this.requestArgs = requestArgs;
      this.spec = spec;
      this.stripeResource = stripeResource;
    }
    async iterate(pageResult) {
      if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
        throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
      }
      const reverseIteration = isReverseIteration(this.requestArgs);
      if (this.index < pageResult.data.length) {
        const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
        const value = pageResult.data[idx];
        this.index += 1;
        return { value, done: false };
      } else if (pageResult.has_more) {
        this.index = 0;
        this.pagePromise = this.getNextPage(pageResult);
        const nextPageResult = await this.pagePromise;
        return this.iterate(nextPageResult);
      }
      return { done: true, value: void 0 };
    }
    /** @abstract */
    getNextPage(_pageResult) {
      throw new Error("Unimplemented");
    }
    async _next() {
      return this.iterate(await this.pagePromise);
    }
    next() {
      if (this.promiseCache.currentPromise) {
        return this.promiseCache.currentPromise;
      }
      const nextPromise = (async () => {
        const ret = await this._next();
        this.promiseCache.currentPromise = null;
        return ret;
      })();
      this.promiseCache.currentPromise = nextPromise;
      return nextPromise;
    }
  };
  var ListIterator = class extends StripeIterator {
    getNextPage(pageResult) {
      const reverseIteration = isReverseIteration(this.requestArgs);
      const lastId = getLastId(pageResult, reverseIteration);
      return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
        [reverseIteration ? "ending_before" : "starting_after"]: lastId
      });
    }
  };
  var SearchIterator = class extends StripeIterator {
    getNextPage(pageResult) {
      if (!pageResult.next_page) {
        throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
      }
      return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
        page: pageResult.next_page
      });
    }
  };
  var makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise) => {
    if (spec.methodType === "search") {
      return makeAutoPaginationMethodsFromIterator(new SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (spec.methodType === "list") {
      return makeAutoPaginationMethodsFromIterator(new ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    return null;
  };
  var makeAutoPaginationMethodsFromIterator = (iterator) => {
    const autoPagingEach = makeAutoPagingEach((...args) => iterator.next(...args));
    const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
    const autoPaginationMethods = {
      autoPagingEach,
      autoPagingToArray,
      // Async iterator functions:
      next: () => iterator.next(),
      return: () => {
        return {};
      },
      [getAsyncIteratorSymbol()]: () => {
        return autoPaginationMethods;
      }
    };
    return autoPaginationMethods;
  };
  function getAsyncIteratorSymbol() {
    if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
      return Symbol.asyncIterator;
    }
    return "@@asyncIterator";
  }
  function getDoneCallback(args) {
    if (args.length < 2) {
      return null;
    }
    const onDone = args[1];
    if (typeof onDone !== "function") {
      throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
    }
    return onDone;
  }
  function getItemCallback(args) {
    if (args.length === 0) {
      return void 0;
    }
    const onItem = args[0];
    if (typeof onItem !== "function") {
      throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
    }
    if (onItem.length === 2) {
      return onItem;
    }
    if (onItem.length > 2) {
      throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
    }
    return function _onItem(item, next) {
      const shouldContinue = onItem(item);
      next(shouldContinue);
    };
  }
  function getLastId(listResult, reverseIteration) {
    const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
    const lastItem = listResult.data[lastIdx];
    const lastId = lastItem && lastItem.id;
    if (!lastId) {
      throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
    }
    return lastId;
  }
  function makeAutoPagingEach(asyncIteratorNext) {
    return function autoPagingEach() {
      const args = [].slice.call(arguments);
      const onItem = getItemCallback(args);
      const onDone = getDoneCallback(args);
      if (args.length > 2) {
        throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
      }
      const autoPagePromise = wrapAsyncIteratorWithCallback(
        asyncIteratorNext,
        // @ts-ignore we might need a null check
        onItem
      );
      return callbackifyPromiseWithTimeout(autoPagePromise, onDone);
    };
  }
  function makeAutoPagingToArray(autoPagingEach) {
    return function autoPagingToArray(opts, onDone) {
      const limit = opts && opts.limit;
      if (!limit) {
        throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
      }
      if (limit > 1e4) {
        throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
      }
      const promise = new Promise((resolve, reject) => {
        const items = [];
        autoPagingEach((item) => {
          items.push(item);
          if (items.length >= limit) {
            return false;
          }
        }).then(() => {
          resolve(items);
        }).catch(reject);
      });
      return callbackifyPromiseWithTimeout(promise, onDone);
    };
  }
  function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
    return new Promise((resolve, reject) => {
      function handleIteration(iterResult) {
        if (iterResult.done) {
          resolve();
          return;
        }
        const item = iterResult.value;
        return new Promise((next) => {
          onItem(item, next);
        }).then((shouldContinue) => {
          if (shouldContinue === false) {
            return handleIteration({ done: true, value: void 0 });
          } else {
            return asyncIteratorNext().then(handleIteration);
          }
        });
      }
      asyncIteratorNext().then(handleIteration).catch(reject);
    });
  }
  function isReverseIteration(requestArgs) {
    const args = [].slice.call(requestArgs);
    const dataFromArgs = getDataFromArgs(args);
    return !!dataFromArgs.ending_before;
  }

  // node_modules/stripe/esm/StripeMethod.js
  function stripeMethod(spec) {
    if (spec.path !== void 0 && spec.fullPath !== void 0) {
      throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
    }
    return function(...args) {
      const callback = typeof args[args.length - 1] == "function" && args.pop();
      spec.urlParams = extractUrlParams(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
      const requestPromise = callbackifyPromiseWithTimeout(this._makeRequest(args, spec, {}), callback);
      Object.assign(requestPromise, makeAutoPaginationMethods(this, args, spec, requestPromise));
      return requestPromise;
    };
  }

  // node_modules/stripe/esm/StripeResource.js
  StripeResource.extend = protoExtend;
  StripeResource.method = stripeMethod;
  StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
  function StripeResource(stripe, deprecatedUrlData) {
    this._stripe = stripe;
    if (deprecatedUrlData) {
      throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
    }
    this.basePath = makeURLInterpolator(
      // @ts-ignore changing type of basePath
      this.basePath || stripe.getApiField("basePath")
    );
    this.resourcePath = this.path;
    this.path = makeURLInterpolator(this.path);
    this.initialize(...arguments);
  }
  StripeResource.prototype = {
    _stripe: null,
    // @ts-ignore the type of path changes in ctor
    path: "",
    resourcePath: "",
    // Methods that don't use the API's default '/v1' path can override it with this setting.
    basePath: null,
    initialize() {
    },
    // Function to override the default data processor. This allows full control
    // over how a StripeResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,
    // Function to add a validation checks before sending the request, errors should
    // be thrown, and they will be passed to the callback/promise.
    validateRequest: null,
    createFullPath(commandPath, urlData) {
      const urlParts = [this.basePath(urlData), this.path(urlData)];
      if (typeof commandPath === "function") {
        const computedCommandPath = commandPath(urlData);
        if (computedCommandPath) {
          urlParts.push(computedCommandPath);
        }
      } else {
        urlParts.push(commandPath);
      }
      return this._joinUrlParts(urlParts);
    },
    // Creates a relative resource path with symbols left in (unlike
    // createFullPath which takes some data to replace them with). For example it
    // might produce: /invoices/{id}
    createResourcePathWithSymbols(pathWithSymbols) {
      if (pathWithSymbols) {
        return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
      } else {
        return `/${this.resourcePath}`;
      }
    },
    _joinUrlParts(parts) {
      return parts.join("/").replace(/\/{2,}/g, "/");
    },
    _getRequestOpts(requestArgs, spec, overrideData) {
      const requestMethod = (spec.method || "GET").toUpperCase();
      const usage = spec.usage || [];
      const urlParams = spec.urlParams || [];
      const encode3 = spec.encode || ((data2) => data2);
      const isUsingFullPath = !!spec.fullPath;
      const commandPath = makeURLInterpolator(isUsingFullPath ? spec.fullPath : spec.path || "");
      const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
      const args = [].slice.call(requestArgs);
      const urlData = urlParams.reduce((urlData2, param) => {
        const arg = args.shift();
        if (typeof arg !== "string") {
          throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
        }
        urlData2[param] = arg;
        return urlData2;
      }, {});
      const dataFromArgs = getDataFromArgs(args);
      const data = encode3(Object.assign({}, dataFromArgs, overrideData));
      const options = getOptionsFromArgs(args);
      const host = options.host || spec.host;
      const streaming = !!spec.streaming;
      if (args.filter((x) => x != null).length) {
        throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
      }
      const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
      const headers = Object.assign(options.headers, spec.headers);
      if (spec.validator) {
        spec.validator(data, { headers });
      }
      const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
      const bodyData = dataInQuery ? {} : data;
      const queryData = dataInQuery ? data : {};
      return {
        requestMethod,
        requestPath,
        bodyData,
        queryData,
        auth: options.auth,
        headers,
        host: host !== null && host !== void 0 ? host : null,
        streaming,
        settings: options.settings,
        usage
      };
    },
    _makeRequest(requestArgs, spec, overrideData) {
      return new Promise((resolve, reject) => {
        var _a;
        let opts;
        try {
          opts = this._getRequestOpts(requestArgs, spec, overrideData);
        } catch (err) {
          reject(err);
          return;
        }
        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
          }
        }
        const emptyQuery = Object.keys(opts.queryData).length === 0;
        const path = [
          opts.requestPath,
          emptyQuery ? "" : "?",
          stringifyRequestData(opts.queryData)
        ].join("");
        const { headers, settings } = opts;
        this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.auth, { headers, settings, streaming: opts.streaming }, opts.usage, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
      });
    }
  };

  // node_modules/stripe/esm/resources/FinancialConnections/Accounts.js
  var stripeMethod2 = StripeResource.method;
  var Accounts = StripeResource.extend({
    retrieve: stripeMethod2({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}"
    }),
    list: stripeMethod2({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts",
      methodType: "list"
    }),
    disconnect: stripeMethod2({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
    }),
    listOwners: stripeMethod2({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}/owners",
      methodType: "list"
    }),
    refresh: stripeMethod2({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/refresh"
    }),
    subscribe: stripeMethod2({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/subscribe"
    }),
    unsubscribe: stripeMethod2({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe"
    })
  });

  // node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js
  var stripeMethod3 = StripeResource.method;
  var ActiveEntitlements = StripeResource.extend({
    retrieve: stripeMethod3({
      method: "GET",
      fullPath: "/v1/entitlements/active_entitlements/{id}"
    }),
    list: stripeMethod3({
      method: "GET",
      fullPath: "/v1/entitlements/active_entitlements",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js
  var stripeMethod4 = StripeResource.method;
  var Authorizations = StripeResource.extend({
    create: stripeMethod4({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations"
    }),
    capture: stripeMethod4({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/capture"
    }),
    expire: stripeMethod4({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/expire"
    }),
    finalizeAmount: stripeMethod4({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"
    }),
    increment: stripeMethod4({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/increment"
    }),
    reverse: stripeMethod4({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/reverse"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Authorizations.js
  var stripeMethod5 = StripeResource.method;
  var Authorizations2 = StripeResource.extend({
    retrieve: stripeMethod5({
      method: "GET",
      fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    update: stripeMethod5({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    list: stripeMethod5({
      method: "GET",
      fullPath: "/v1/issuing/authorizations",
      methodType: "list"
    }),
    approve: stripeMethod5({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/approve"
    }),
    decline: stripeMethod5({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/decline"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Calculations.js
  var stripeMethod6 = StripeResource.method;
  var Calculations = StripeResource.extend({
    create: stripeMethod6({ method: "POST", fullPath: "/v1/tax/calculations" }),
    listLineItems: stripeMethod6({
      method: "GET",
      fullPath: "/v1/tax/calculations/{calculation}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Cardholders.js
  var stripeMethod7 = StripeResource.method;
  var Cardholders = StripeResource.extend({
    create: stripeMethod7({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
    retrieve: stripeMethod7({
      method: "GET",
      fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    update: stripeMethod7({
      method: "POST",
      fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    list: stripeMethod7({
      method: "GET",
      fullPath: "/v1/issuing/cardholders",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js
  var stripeMethod8 = StripeResource.method;
  var Cards = StripeResource.extend({
    deliverCard: stripeMethod8({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
    }),
    failCard: stripeMethod8({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
    }),
    returnCard: stripeMethod8({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
    }),
    shipCard: stripeMethod8({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Cards.js
  var stripeMethod9 = StripeResource.method;
  var Cards2 = StripeResource.extend({
    create: stripeMethod9({ method: "POST", fullPath: "/v1/issuing/cards" }),
    retrieve: stripeMethod9({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
    update: stripeMethod9({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
    list: stripeMethod9({
      method: "GET",
      fullPath: "/v1/issuing/cards",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/BillingPortal/Configurations.js
  var stripeMethod10 = StripeResource.method;
  var Configurations = StripeResource.extend({
    create: stripeMethod10({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations"
    }),
    retrieve: stripeMethod10({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    update: stripeMethod10({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    list: stripeMethod10({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Configurations.js
  var stripeMethod11 = StripeResource.method;
  var Configurations2 = StripeResource.extend({
    create: stripeMethod11({
      method: "POST",
      fullPath: "/v1/terminal/configurations"
    }),
    retrieve: stripeMethod11({
      method: "GET",
      fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    update: stripeMethod11({
      method: "POST",
      fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    list: stripeMethod11({
      method: "GET",
      fullPath: "/v1/terminal/configurations",
      methodType: "list"
    }),
    del: stripeMethod11({
      method: "DELETE",
      fullPath: "/v1/terminal/configurations/{configuration}"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js
  var stripeMethod12 = StripeResource.method;
  var ConfirmationTokens = StripeResource.extend({
    create: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/confirmation_tokens"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js
  var stripeMethod13 = StripeResource.method;
  var ConnectionTokens = StripeResource.extend({
    create: stripeMethod13({
      method: "POST",
      fullPath: "/v1/terminal/connection_tokens"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/CreditReversals.js
  var stripeMethod14 = StripeResource.method;
  var CreditReversals = StripeResource.extend({
    create: stripeMethod14({
      method: "POST",
      fullPath: "/v1/treasury/credit_reversals"
    }),
    retrieve: stripeMethod14({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
    }),
    list: stripeMethod14({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Customers.js
  var stripeMethod15 = StripeResource.method;
  var Customers = StripeResource.extend({
    fundCashBalance: stripeMethod15({
      method: "POST",
      fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/DebitReversals.js
  var stripeMethod16 = StripeResource.method;
  var DebitReversals = StripeResource.extend({
    create: stripeMethod16({
      method: "POST",
      fullPath: "/v1/treasury/debit_reversals"
    }),
    retrieve: stripeMethod16({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
    }),
    list: stripeMethod16({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Disputes.js
  var stripeMethod17 = StripeResource.method;
  var Disputes = StripeResource.extend({
    create: stripeMethod17({ method: "POST", fullPath: "/v1/issuing/disputes" }),
    retrieve: stripeMethod17({
      method: "GET",
      fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    update: stripeMethod17({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    list: stripeMethod17({
      method: "GET",
      fullPath: "/v1/issuing/disputes",
      methodType: "list"
    }),
    submit: stripeMethod17({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}/submit"
    })
  });

  // node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js
  var stripeMethod18 = StripeResource.method;
  var EarlyFraudWarnings = StripeResource.extend({
    retrieve: stripeMethod18({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
    }),
    list: stripeMethod18({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Entitlements/Features.js
  var stripeMethod19 = StripeResource.method;
  var Features = StripeResource.extend({
    create: stripeMethod19({ method: "POST", fullPath: "/v1/entitlements/features" }),
    retrieve: stripeMethod19({
      method: "GET",
      fullPath: "/v1/entitlements/features/{id}"
    }),
    update: stripeMethod19({
      method: "POST",
      fullPath: "/v1/entitlements/features/{id}"
    }),
    list: stripeMethod19({
      method: "GET",
      fullPath: "/v1/entitlements/features",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js
  var stripeMethod20 = StripeResource.method;
  var FinancialAccounts = StripeResource.extend({
    create: stripeMethod20({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts"
    }),
    retrieve: stripeMethod20({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    update: stripeMethod20({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    list: stripeMethod20({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts",
      methodType: "list"
    }),
    retrieveFeatures: stripeMethod20({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    }),
    updateFeatures: stripeMethod20({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js
  var stripeMethod21 = StripeResource.method;
  var InboundTransfers = StripeResource.extend({
    fail: stripeMethod21({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
    }),
    returnInboundTransfer: stripeMethod21({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
    }),
    succeed: stripeMethod21({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/InboundTransfers.js
  var stripeMethod22 = StripeResource.method;
  var InboundTransfers2 = StripeResource.extend({
    create: stripeMethod22({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers"
    }),
    retrieve: stripeMethod22({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers/{id}"
    }),
    list: stripeMethod22({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers",
      methodType: "list"
    }),
    cancel: stripeMethod22({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Locations.js
  var stripeMethod23 = StripeResource.method;
  var Locations = StripeResource.extend({
    create: stripeMethod23({ method: "POST", fullPath: "/v1/terminal/locations" }),
    retrieve: stripeMethod23({
      method: "GET",
      fullPath: "/v1/terminal/locations/{location}"
    }),
    update: stripeMethod23({
      method: "POST",
      fullPath: "/v1/terminal/locations/{location}"
    }),
    list: stripeMethod23({
      method: "GET",
      fullPath: "/v1/terminal/locations",
      methodType: "list"
    }),
    del: stripeMethod23({
      method: "DELETE",
      fullPath: "/v1/terminal/locations/{location}"
    })
  });

  // node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js
  var stripeMethod24 = StripeResource.method;
  var MeterEventAdjustments = StripeResource.extend({
    create: stripeMethod24({
      method: "POST",
      fullPath: "/v1/billing/meter_event_adjustments"
    })
  });

  // node_modules/stripe/esm/resources/Billing/MeterEvents.js
  var stripeMethod25 = StripeResource.method;
  var MeterEvents = StripeResource.extend({
    create: stripeMethod25({ method: "POST", fullPath: "/v1/billing/meter_events" })
  });

  // node_modules/stripe/esm/resources/Billing/Meters.js
  var stripeMethod26 = StripeResource.method;
  var Meters = StripeResource.extend({
    create: stripeMethod26({ method: "POST", fullPath: "/v1/billing/meters" }),
    retrieve: stripeMethod26({ method: "GET", fullPath: "/v1/billing/meters/{id}" }),
    update: stripeMethod26({ method: "POST", fullPath: "/v1/billing/meters/{id}" }),
    list: stripeMethod26({
      method: "GET",
      fullPath: "/v1/billing/meters",
      methodType: "list"
    }),
    deactivate: stripeMethod26({
      method: "POST",
      fullPath: "/v1/billing/meters/{id}/deactivate"
    }),
    listEventSummaries: stripeMethod26({
      method: "GET",
      fullPath: "/v1/billing/meters/{id}/event_summaries",
      methodType: "list"
    }),
    reactivate: stripeMethod26({
      method: "POST",
      fullPath: "/v1/billing/meters/{id}/reactivate"
    })
  });

  // node_modules/stripe/esm/resources/Climate/Orders.js
  var stripeMethod27 = StripeResource.method;
  var Orders = StripeResource.extend({
    create: stripeMethod27({ method: "POST", fullPath: "/v1/climate/orders" }),
    retrieve: stripeMethod27({
      method: "GET",
      fullPath: "/v1/climate/orders/{order}"
    }),
    update: stripeMethod27({
      method: "POST",
      fullPath: "/v1/climate/orders/{order}"
    }),
    list: stripeMethod27({
      method: "GET",
      fullPath: "/v1/climate/orders",
      methodType: "list"
    }),
    cancel: stripeMethod27({
      method: "POST",
      fullPath: "/v1/climate/orders/{order}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js
  var stripeMethod28 = StripeResource.method;
  var OutboundPayments = StripeResource.extend({
    update: stripeMethod28({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}"
    }),
    fail: stripeMethod28({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
    }),
    post: stripeMethod28({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
    }),
    returnOutboundPayment: stripeMethod28({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/OutboundPayments.js
  var stripeMethod29 = StripeResource.method;
  var OutboundPayments2 = StripeResource.extend({
    create: stripeMethod29({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments"
    }),
    retrieve: stripeMethod29({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments/{id}"
    }),
    list: stripeMethod29({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments",
      methodType: "list"
    }),
    cancel: stripeMethod29({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js
  var stripeMethod30 = StripeResource.method;
  var OutboundTransfers = StripeResource.extend({
    update: stripeMethod30({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"
    }),
    fail: stripeMethod30({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
    }),
    post: stripeMethod30({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
    }),
    returnOutboundTransfer: stripeMethod30({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js
  var stripeMethod31 = StripeResource.method;
  var OutboundTransfers2 = StripeResource.extend({
    create: stripeMethod31({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers"
    }),
    retrieve: stripeMethod31({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
    }),
    list: stripeMethod31({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers",
      methodType: "list"
    }),
    cancel: stripeMethod31({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js
  var stripeMethod32 = StripeResource.method;
  var PersonalizationDesigns = StripeResource.extend({
    activate: stripeMethod32({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
    }),
    deactivate: stripeMethod32({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
    }),
    reject: stripeMethod32({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js
  var stripeMethod33 = StripeResource.method;
  var PersonalizationDesigns2 = StripeResource.extend({
    create: stripeMethod33({
      method: "POST",
      fullPath: "/v1/issuing/personalization_designs"
    }),
    retrieve: stripeMethod33({
      method: "GET",
      fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
    }),
    update: stripeMethod33({
      method: "POST",
      fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
    }),
    list: stripeMethod33({
      method: "GET",
      fullPath: "/v1/issuing/personalization_designs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js
  var stripeMethod34 = StripeResource.method;
  var PhysicalBundles = StripeResource.extend({
    retrieve: stripeMethod34({
      method: "GET",
      fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
    }),
    list: stripeMethod34({
      method: "GET",
      fullPath: "/v1/issuing/physical_bundles",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Climate/Products.js
  var stripeMethod35 = StripeResource.method;
  var Products = StripeResource.extend({
    retrieve: stripeMethod35({
      method: "GET",
      fullPath: "/v1/climate/products/{product}"
    }),
    list: stripeMethod35({
      method: "GET",
      fullPath: "/v1/climate/products",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js
  var stripeMethod36 = StripeResource.method;
  var Readers = StripeResource.extend({
    presentPaymentMethod: stripeMethod36({
      method: "POST",
      fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Readers.js
  var stripeMethod37 = StripeResource.method;
  var Readers2 = StripeResource.extend({
    create: stripeMethod37({ method: "POST", fullPath: "/v1/terminal/readers" }),
    retrieve: stripeMethod37({
      method: "GET",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    update: stripeMethod37({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    list: stripeMethod37({
      method: "GET",
      fullPath: "/v1/terminal/readers",
      methodType: "list"
    }),
    del: stripeMethod37({
      method: "DELETE",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    cancelAction: stripeMethod37({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/cancel_action"
    }),
    processPaymentIntent: stripeMethod37({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
    }),
    processSetupIntent: stripeMethod37({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
    }),
    refundPayment: stripeMethod37({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/refund_payment"
    }),
    setReaderDisplay: stripeMethod37({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js
  var stripeMethod38 = StripeResource.method;
  var ReceivedCredits = StripeResource.extend({
    create: stripeMethod38({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_credits"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js
  var stripeMethod39 = StripeResource.method;
  var ReceivedCredits2 = StripeResource.extend({
    retrieve: stripeMethod39({
      method: "GET",
      fullPath: "/v1/treasury/received_credits/{id}"
    }),
    list: stripeMethod39({
      method: "GET",
      fullPath: "/v1/treasury/received_credits",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js
  var stripeMethod40 = StripeResource.method;
  var ReceivedDebits = StripeResource.extend({
    create: stripeMethod40({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_debits"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js
  var stripeMethod41 = StripeResource.method;
  var ReceivedDebits2 = StripeResource.extend({
    retrieve: stripeMethod41({
      method: "GET",
      fullPath: "/v1/treasury/received_debits/{id}"
    }),
    list: stripeMethod41({
      method: "GET",
      fullPath: "/v1/treasury/received_debits",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Refunds.js
  var stripeMethod42 = StripeResource.method;
  var Refunds = StripeResource.extend({
    expire: stripeMethod42({
      method: "POST",
      fullPath: "/v1/test_helpers/refunds/{refund}/expire"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Registrations.js
  var stripeMethod43 = StripeResource.method;
  var Registrations = StripeResource.extend({
    create: stripeMethod43({ method: "POST", fullPath: "/v1/tax/registrations" }),
    retrieve: stripeMethod43({
      method: "GET",
      fullPath: "/v1/tax/registrations/{id}"
    }),
    update: stripeMethod43({
      method: "POST",
      fullPath: "/v1/tax/registrations/{id}"
    }),
    list: stripeMethod43({
      method: "GET",
      fullPath: "/v1/tax/registrations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Reporting/ReportRuns.js
  var stripeMethod44 = StripeResource.method;
  var ReportRuns = StripeResource.extend({
    create: stripeMethod44({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
    retrieve: stripeMethod44({
      method: "GET",
      fullPath: "/v1/reporting/report_runs/{report_run}"
    }),
    list: stripeMethod44({
      method: "GET",
      fullPath: "/v1/reporting/report_runs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Reporting/ReportTypes.js
  var stripeMethod45 = StripeResource.method;
  var ReportTypes = StripeResource.extend({
    retrieve: stripeMethod45({
      method: "GET",
      fullPath: "/v1/reporting/report_types/{report_type}"
    }),
    list: stripeMethod45({
      method: "GET",
      fullPath: "/v1/reporting/report_types",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Forwarding/Requests.js
  var stripeMethod46 = StripeResource.method;
  var Requests = StripeResource.extend({
    create: stripeMethod46({ method: "POST", fullPath: "/v1/forwarding/requests" }),
    retrieve: stripeMethod46({
      method: "GET",
      fullPath: "/v1/forwarding/requests/{id}"
    }),
    list: stripeMethod46({
      method: "GET",
      fullPath: "/v1/forwarding/requests",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js
  var stripeMethod47 = StripeResource.method;
  var ScheduledQueryRuns = StripeResource.extend({
    retrieve: stripeMethod47({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
    }),
    list: stripeMethod47({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Apps/Secrets.js
  var stripeMethod48 = StripeResource.method;
  var Secrets = StripeResource.extend({
    create: stripeMethod48({ method: "POST", fullPath: "/v1/apps/secrets" }),
    list: stripeMethod48({
      method: "GET",
      fullPath: "/v1/apps/secrets",
      methodType: "list"
    }),
    deleteWhere: stripeMethod48({
      method: "POST",
      fullPath: "/v1/apps/secrets/delete"
    }),
    find: stripeMethod48({ method: "GET", fullPath: "/v1/apps/secrets/find" })
  });

  // node_modules/stripe/esm/resources/BillingPortal/Sessions.js
  var stripeMethod49 = StripeResource.method;
  var Sessions = StripeResource.extend({
    create: stripeMethod49({
      method: "POST",
      fullPath: "/v1/billing_portal/sessions"
    })
  });

  // node_modules/stripe/esm/resources/Checkout/Sessions.js
  var stripeMethod50 = StripeResource.method;
  var Sessions2 = StripeResource.extend({
    create: stripeMethod50({ method: "POST", fullPath: "/v1/checkout/sessions" }),
    retrieve: stripeMethod50({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}"
    }),
    list: stripeMethod50({
      method: "GET",
      fullPath: "/v1/checkout/sessions",
      methodType: "list"
    }),
    expire: stripeMethod50({
      method: "POST",
      fullPath: "/v1/checkout/sessions/{session}/expire"
    }),
    listLineItems: stripeMethod50({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FinancialConnections/Sessions.js
  var stripeMethod51 = StripeResource.method;
  var Sessions3 = StripeResource.extend({
    create: stripeMethod51({
      method: "POST",
      fullPath: "/v1/financial_connections/sessions"
    }),
    retrieve: stripeMethod51({
      method: "GET",
      fullPath: "/v1/financial_connections/sessions/{session}"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Settings.js
  var stripeMethod52 = StripeResource.method;
  var Settings = StripeResource.extend({
    retrieve: stripeMethod52({ method: "GET", fullPath: "/v1/tax/settings" }),
    update: stripeMethod52({ method: "POST", fullPath: "/v1/tax/settings" })
  });

  // node_modules/stripe/esm/resources/Climate/Suppliers.js
  var stripeMethod53 = StripeResource.method;
  var Suppliers = StripeResource.extend({
    retrieve: stripeMethod53({
      method: "GET",
      fullPath: "/v1/climate/suppliers/{supplier}"
    }),
    list: stripeMethod53({
      method: "GET",
      fullPath: "/v1/climate/suppliers",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/TestClocks.js
  var stripeMethod54 = StripeResource.method;
  var TestClocks = StripeResource.extend({
    create: stripeMethod54({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks"
    }),
    retrieve: stripeMethod54({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    list: stripeMethod54({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks",
      methodType: "list"
    }),
    del: stripeMethod54({
      method: "DELETE",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    advance: stripeMethod54({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Tokens.js
  var stripeMethod55 = StripeResource.method;
  var Tokens = StripeResource.extend({
    retrieve: stripeMethod55({
      method: "GET",
      fullPath: "/v1/issuing/tokens/{token}"
    }),
    update: stripeMethod55({
      method: "POST",
      fullPath: "/v1/issuing/tokens/{token}"
    }),
    list: stripeMethod55({
      method: "GET",
      fullPath: "/v1/issuing/tokens",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/TransactionEntries.js
  var stripeMethod56 = StripeResource.method;
  var TransactionEntries = StripeResource.extend({
    retrieve: stripeMethod56({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries/{id}"
    }),
    list: stripeMethod56({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js
  var stripeMethod57 = StripeResource.method;
  var Transactions = StripeResource.extend({
    createForceCapture: stripeMethod57({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
    }),
    createUnlinkedRefund: stripeMethod57({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
    }),
    refund: stripeMethod57({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
    })
  });

  // node_modules/stripe/esm/resources/FinancialConnections/Transactions.js
  var stripeMethod58 = StripeResource.method;
  var Transactions2 = StripeResource.extend({
    retrieve: stripeMethod58({
      method: "GET",
      fullPath: "/v1/financial_connections/transactions/{transaction}"
    }),
    list: stripeMethod58({
      method: "GET",
      fullPath: "/v1/financial_connections/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Transactions.js
  var stripeMethod59 = StripeResource.method;
  var Transactions3 = StripeResource.extend({
    retrieve: stripeMethod59({
      method: "GET",
      fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    update: stripeMethod59({
      method: "POST",
      fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    list: stripeMethod59({
      method: "GET",
      fullPath: "/v1/issuing/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Transactions.js
  var stripeMethod60 = StripeResource.method;
  var Transactions4 = StripeResource.extend({
    retrieve: stripeMethod60({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}"
    }),
    createFromCalculation: stripeMethod60({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_from_calculation"
    }),
    createReversal: stripeMethod60({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_reversal"
    }),
    listLineItems: stripeMethod60({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/Transactions.js
  var stripeMethod61 = StripeResource.method;
  var Transactions5 = StripeResource.extend({
    retrieve: stripeMethod61({
      method: "GET",
      fullPath: "/v1/treasury/transactions/{id}"
    }),
    list: stripeMethod61({
      method: "GET",
      fullPath: "/v1/treasury/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Radar/ValueListItems.js
  var stripeMethod62 = StripeResource.method;
  var ValueListItems = StripeResource.extend({
    create: stripeMethod62({
      method: "POST",
      fullPath: "/v1/radar/value_list_items"
    }),
    retrieve: stripeMethod62({
      method: "GET",
      fullPath: "/v1/radar/value_list_items/{item}"
    }),
    list: stripeMethod62({
      method: "GET",
      fullPath: "/v1/radar/value_list_items",
      methodType: "list"
    }),
    del: stripeMethod62({
      method: "DELETE",
      fullPath: "/v1/radar/value_list_items/{item}"
    })
  });

  // node_modules/stripe/esm/resources/Radar/ValueLists.js
  var stripeMethod63 = StripeResource.method;
  var ValueLists = StripeResource.extend({
    create: stripeMethod63({ method: "POST", fullPath: "/v1/radar/value_lists" }),
    retrieve: stripeMethod63({
      method: "GET",
      fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    update: stripeMethod63({
      method: "POST",
      fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    list: stripeMethod63({
      method: "GET",
      fullPath: "/v1/radar/value_lists",
      methodType: "list"
    }),
    del: stripeMethod63({
      method: "DELETE",
      fullPath: "/v1/radar/value_lists/{value_list}"
    })
  });

  // node_modules/stripe/esm/resources/Identity/VerificationReports.js
  var stripeMethod64 = StripeResource.method;
  var VerificationReports = StripeResource.extend({
    retrieve: stripeMethod64({
      method: "GET",
      fullPath: "/v1/identity/verification_reports/{report}"
    }),
    list: stripeMethod64({
      method: "GET",
      fullPath: "/v1/identity/verification_reports",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Identity/VerificationSessions.js
  var stripeMethod65 = StripeResource.method;
  var VerificationSessions = StripeResource.extend({
    create: stripeMethod65({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions"
    }),
    retrieve: stripeMethod65({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    update: stripeMethod65({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    list: stripeMethod65({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions",
      methodType: "list"
    }),
    cancel: stripeMethod65({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/cancel"
    }),
    redact: stripeMethod65({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/redact"
    })
  });

  // node_modules/stripe/esm/resources/Accounts.js
  var stripeMethod66 = StripeResource.method;
  var Accounts2 = StripeResource.extend({
    create: stripeMethod66({ method: "POST", fullPath: "/v1/accounts" }),
    retrieve(id, ...args) {
      if (typeof id === "string") {
        return stripeMethod66({
          method: "GET",
          fullPath: "/v1/accounts/{id}"
        }).apply(this, [id, ...args]);
      } else {
        if (id === null || id === void 0) {
          [].shift.apply([id, ...args]);
        }
        return stripeMethod66({
          method: "GET",
          fullPath: "/v1/account"
        }).apply(this, [id, ...args]);
      }
    },
    update: stripeMethod66({ method: "POST", fullPath: "/v1/accounts/{account}" }),
    list: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts",
      methodType: "list"
    }),
    del: stripeMethod66({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
    createExternalAccount: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts"
    }),
    createLoginLink: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/login_links"
    }),
    createPerson: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons"
    }),
    deleteExternalAccount: stripeMethod66({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    deletePerson: stripeMethod66({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    listCapabilities: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities",
      methodType: "list"
    }),
    listExternalAccounts: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts",
      methodType: "list"
    }),
    listPersons: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons",
      methodType: "list"
    }),
    reject: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/reject"
    }),
    retrieveCurrent: stripeMethod66({ method: "GET", fullPath: "/v1/account" }),
    retrieveCapability: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    retrieveExternalAccount: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    retrievePerson: stripeMethod66({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    updateCapability: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    updateExternalAccount: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    updatePerson: stripeMethod66({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    })
  });

  // node_modules/stripe/esm/resources/AccountLinks.js
  var stripeMethod67 = StripeResource.method;
  var AccountLinks = StripeResource.extend({
    create: stripeMethod67({ method: "POST", fullPath: "/v1/account_links" })
  });

  // node_modules/stripe/esm/resources/AccountSessions.js
  var stripeMethod68 = StripeResource.method;
  var AccountSessions = StripeResource.extend({
    create: stripeMethod68({ method: "POST", fullPath: "/v1/account_sessions" })
  });

  // node_modules/stripe/esm/resources/ApplePayDomains.js
  var stripeMethod69 = StripeResource.method;
  var ApplePayDomains = StripeResource.extend({
    create: stripeMethod69({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
    retrieve: stripeMethod69({
      method: "GET",
      fullPath: "/v1/apple_pay/domains/{domain}"
    }),
    list: stripeMethod69({
      method: "GET",
      fullPath: "/v1/apple_pay/domains",
      methodType: "list"
    }),
    del: stripeMethod69({
      method: "DELETE",
      fullPath: "/v1/apple_pay/domains/{domain}"
    })
  });

  // node_modules/stripe/esm/resources/ApplicationFees.js
  var stripeMethod70 = StripeResource.method;
  var ApplicationFees = StripeResource.extend({
    retrieve: stripeMethod70({
      method: "GET",
      fullPath: "/v1/application_fees/{id}"
    }),
    list: stripeMethod70({
      method: "GET",
      fullPath: "/v1/application_fees",
      methodType: "list"
    }),
    createRefund: stripeMethod70({
      method: "POST",
      fullPath: "/v1/application_fees/{id}/refunds"
    }),
    listRefunds: stripeMethod70({
      method: "GET",
      fullPath: "/v1/application_fees/{id}/refunds",
      methodType: "list"
    }),
    retrieveRefund: stripeMethod70({
      method: "GET",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    }),
    updateRefund: stripeMethod70({
      method: "POST",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    })
  });

  // node_modules/stripe/esm/resources/Balance.js
  var stripeMethod71 = StripeResource.method;
  var Balance = StripeResource.extend({
    retrieve: stripeMethod71({ method: "GET", fullPath: "/v1/balance" })
  });

  // node_modules/stripe/esm/resources/BalanceTransactions.js
  var stripeMethod72 = StripeResource.method;
  var BalanceTransactions = StripeResource.extend({
    retrieve: stripeMethod72({
      method: "GET",
      fullPath: "/v1/balance_transactions/{id}"
    }),
    list: stripeMethod72({
      method: "GET",
      fullPath: "/v1/balance_transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Charges.js
  var stripeMethod73 = StripeResource.method;
  var Charges = StripeResource.extend({
    create: stripeMethod73({ method: "POST", fullPath: "/v1/charges" }),
    retrieve: stripeMethod73({ method: "GET", fullPath: "/v1/charges/{charge}" }),
    update: stripeMethod73({ method: "POST", fullPath: "/v1/charges/{charge}" }),
    list: stripeMethod73({
      method: "GET",
      fullPath: "/v1/charges",
      methodType: "list"
    }),
    capture: stripeMethod73({
      method: "POST",
      fullPath: "/v1/charges/{charge}/capture"
    }),
    search: stripeMethod73({
      method: "GET",
      fullPath: "/v1/charges/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/ConfirmationTokens.js
  var stripeMethod74 = StripeResource.method;
  var ConfirmationTokens2 = StripeResource.extend({
    retrieve: stripeMethod74({
      method: "GET",
      fullPath: "/v1/confirmation_tokens/{confirmation_token}"
    })
  });

  // node_modules/stripe/esm/resources/CountrySpecs.js
  var stripeMethod75 = StripeResource.method;
  var CountrySpecs = StripeResource.extend({
    retrieve: stripeMethod75({
      method: "GET",
      fullPath: "/v1/country_specs/{country}"
    }),
    list: stripeMethod75({
      method: "GET",
      fullPath: "/v1/country_specs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Coupons.js
  var stripeMethod76 = StripeResource.method;
  var Coupons = StripeResource.extend({
    create: stripeMethod76({ method: "POST", fullPath: "/v1/coupons" }),
    retrieve: stripeMethod76({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
    update: stripeMethod76({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
    list: stripeMethod76({
      method: "GET",
      fullPath: "/v1/coupons",
      methodType: "list"
    }),
    del: stripeMethod76({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
  });

  // node_modules/stripe/esm/resources/CreditNotes.js
  var stripeMethod77 = StripeResource.method;
  var CreditNotes = StripeResource.extend({
    create: stripeMethod77({ method: "POST", fullPath: "/v1/credit_notes" }),
    retrieve: stripeMethod77({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
    update: stripeMethod77({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
    list: stripeMethod77({
      method: "GET",
      fullPath: "/v1/credit_notes",
      methodType: "list"
    }),
    listLineItems: stripeMethod77({
      method: "GET",
      fullPath: "/v1/credit_notes/{credit_note}/lines",
      methodType: "list"
    }),
    listPreviewLineItems: stripeMethod77({
      method: "GET",
      fullPath: "/v1/credit_notes/preview/lines",
      methodType: "list"
    }),
    preview: stripeMethod77({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
    voidCreditNote: stripeMethod77({
      method: "POST",
      fullPath: "/v1/credit_notes/{id}/void"
    })
  });

  // node_modules/stripe/esm/resources/CustomerSessions.js
  var stripeMethod78 = StripeResource.method;
  var CustomerSessions = StripeResource.extend({
    create: stripeMethod78({ method: "POST", fullPath: "/v1/customer_sessions" })
  });

  // node_modules/stripe/esm/resources/Customers.js
  var stripeMethod79 = StripeResource.method;
  var Customers2 = StripeResource.extend({
    create: stripeMethod79({ method: "POST", fullPath: "/v1/customers" }),
    retrieve: stripeMethod79({ method: "GET", fullPath: "/v1/customers/{customer}" }),
    update: stripeMethod79({ method: "POST", fullPath: "/v1/customers/{customer}" }),
    list: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers",
      methodType: "list"
    }),
    del: stripeMethod79({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
    createBalanceTransaction: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions"
    }),
    createFundingInstructions: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/funding_instructions"
    }),
    createSource: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources"
    }),
    createTaxId: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/tax_ids"
    }),
    deleteDiscount: stripeMethod79({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/discount"
    }),
    deleteSource: stripeMethod79({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    deleteTaxId: stripeMethod79({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    listBalanceTransactions: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions",
      methodType: "list"
    }),
    listCashBalanceTransactions: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions",
      methodType: "list"
    }),
    listPaymentMethods: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods",
      methodType: "list"
    }),
    listSources: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources",
      methodType: "list"
    }),
    listTaxIds: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids",
      methodType: "list"
    }),
    retrieveBalanceTransaction: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    retrieveCashBalance: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    retrieveCashBalanceTransaction: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
    }),
    retrievePaymentMethod: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
    }),
    retrieveSource: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    retrieveTaxId: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    search: stripeMethod79({
      method: "GET",
      fullPath: "/v1/customers/search",
      methodType: "search"
    }),
    updateBalanceTransaction: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    updateCashBalance: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    updateSource: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    verifySource: stripeMethod79({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}/verify"
    })
  });

  // node_modules/stripe/esm/resources/Disputes.js
  var stripeMethod80 = StripeResource.method;
  var Disputes2 = StripeResource.extend({
    retrieve: stripeMethod80({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
    update: stripeMethod80({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
    list: stripeMethod80({
      method: "GET",
      fullPath: "/v1/disputes",
      methodType: "list"
    }),
    close: stripeMethod80({
      method: "POST",
      fullPath: "/v1/disputes/{dispute}/close"
    })
  });

  // node_modules/stripe/esm/resources/EphemeralKeys.js
  var stripeMethod81 = StripeResource.method;
  var EphemeralKeys = StripeResource.extend({
    create: stripeMethod81({
      method: "POST",
      fullPath: "/v1/ephemeral_keys",
      validator: (data, options) => {
        if (!options.headers || !options.headers["Stripe-Version"]) {
          throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
        }
      }
    }),
    del: stripeMethod81({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
  });

  // node_modules/stripe/esm/resources/Events.js
  var stripeMethod82 = StripeResource.method;
  var Events = StripeResource.extend({
    retrieve: stripeMethod82({ method: "GET", fullPath: "/v1/events/{id}" }),
    list: stripeMethod82({
      method: "GET",
      fullPath: "/v1/events",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/ExchangeRates.js
  var stripeMethod83 = StripeResource.method;
  var ExchangeRates = StripeResource.extend({
    retrieve: stripeMethod83({
      method: "GET",
      fullPath: "/v1/exchange_rates/{rate_id}"
    }),
    list: stripeMethod83({
      method: "GET",
      fullPath: "/v1/exchange_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FileLinks.js
  var stripeMethod84 = StripeResource.method;
  var FileLinks = StripeResource.extend({
    create: stripeMethod84({ method: "POST", fullPath: "/v1/file_links" }),
    retrieve: stripeMethod84({ method: "GET", fullPath: "/v1/file_links/{link}" }),
    update: stripeMethod84({ method: "POST", fullPath: "/v1/file_links/{link}" }),
    list: stripeMethod84({
      method: "GET",
      fullPath: "/v1/file_links",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/multipart.js
  var multipartDataGenerator = (method, data, headers) => {
    const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
    headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
    const textEncoder = new TextEncoder();
    let buffer = new Uint8Array(0);
    const endBuffer = textEncoder.encode("\r\n");
    function push(l) {
      const prevBuffer = buffer;
      const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
      buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
      buffer.set(prevBuffer);
      buffer.set(newBuffer, prevBuffer.length);
      buffer.set(endBuffer, buffer.length - 2);
    }
    function q(s) {
      return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
    }
    const flattenedData = flattenAndStringify(data);
    for (const k in flattenedData) {
      const v = flattenedData[k];
      push(`--${segno}`);
      if (Object.prototype.hasOwnProperty.call(v, "data")) {
        const typedEntry = v;
        push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
        push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
        push("");
        push(typedEntry.data);
      } else {
        push(`Content-Disposition: form-data; name=${q(k)}`);
        push("");
        push(v);
      }
    }
    push(`--${segno}--`);
    return buffer;
  };
  function multipartRequestDataProcessor(method, data, headers, callback) {
    data = data || {};
    if (method !== "POST") {
      return callback(null, stringifyRequestData(data));
    }
    this._stripe._platformFunctions.tryBufferData(data).then((bufferedData) => {
      const buffer = multipartDataGenerator(method, bufferedData, headers);
      return callback(null, buffer);
    }).catch((err) => callback(err, null));
  }

  // node_modules/stripe/esm/resources/Files.js
  var stripeMethod85 = StripeResource.method;
  var Files = StripeResource.extend({
    create: stripeMethod85({
      method: "POST",
      fullPath: "/v1/files",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      host: "files.stripe.com"
    }),
    retrieve: stripeMethod85({ method: "GET", fullPath: "/v1/files/{file}" }),
    list: stripeMethod85({
      method: "GET",
      fullPath: "/v1/files",
      methodType: "list"
    }),
    requestDataProcessor: multipartRequestDataProcessor
  });

  // node_modules/stripe/esm/resources/InvoiceItems.js
  var stripeMethod86 = StripeResource.method;
  var InvoiceItems = StripeResource.extend({
    create: stripeMethod86({ method: "POST", fullPath: "/v1/invoiceitems" }),
    retrieve: stripeMethod86({
      method: "GET",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    update: stripeMethod86({
      method: "POST",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    list: stripeMethod86({
      method: "GET",
      fullPath: "/v1/invoiceitems",
      methodType: "list"
    }),
    del: stripeMethod86({
      method: "DELETE",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    })
  });

  // node_modules/stripe/esm/resources/Invoices.js
  var stripeMethod87 = StripeResource.method;
  var Invoices = StripeResource.extend({
    create: stripeMethod87({ method: "POST", fullPath: "/v1/invoices" }),
    retrieve: stripeMethod87({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
    update: stripeMethod87({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
    list: stripeMethod87({
      method: "GET",
      fullPath: "/v1/invoices",
      methodType: "list"
    }),
    del: stripeMethod87({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
    addLines: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/add_lines"
    }),
    createPreview: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/create_preview"
    }),
    finalizeInvoice: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/finalize"
    }),
    listLineItems: stripeMethod87({
      method: "GET",
      fullPath: "/v1/invoices/{invoice}/lines",
      methodType: "list"
    }),
    listUpcomingLines: stripeMethod87({
      method: "GET",
      fullPath: "/v1/invoices/upcoming/lines",
      methodType: "list"
    }),
    markUncollectible: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
    }),
    pay: stripeMethod87({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
    removeLines: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/remove_lines"
    }),
    retrieveUpcoming: stripeMethod87({
      method: "GET",
      fullPath: "/v1/invoices/upcoming"
    }),
    search: stripeMethod87({
      method: "GET",
      fullPath: "/v1/invoices/search",
      methodType: "search"
    }),
    sendInvoice: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/send"
    }),
    updateLines: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/update_lines"
    }),
    updateLineItem: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/lines/{line_item_id}"
    }),
    voidInvoice: stripeMethod87({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/void"
    })
  });

  // node_modules/stripe/esm/resources/Mandates.js
  var stripeMethod88 = StripeResource.method;
  var Mandates = StripeResource.extend({
    retrieve: stripeMethod88({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
  });

  // node_modules/stripe/esm/resources/OAuth.js
  var stripeMethod89 = StripeResource.method;
  var oAuthHost = "connect.stripe.com";
  var OAuth = StripeResource.extend({
    basePath: "/",
    authorizeUrl(params, options) {
      params = params || {};
      options = options || {};
      let path = "oauth/authorize";
      if (options.express) {
        path = `express/${path}`;
      }
      if (!params.response_type) {
        params.response_type = "code";
      }
      if (!params.client_id) {
        params.client_id = this._stripe.getClientId();
      }
      if (!params.scope) {
        params.scope = "read_write";
      }
      return `https://${oAuthHost}/${path}?${stringifyRequestData(params)}`;
    },
    token: stripeMethod89({
      method: "POST",
      path: "oauth/token",
      host: oAuthHost
    }),
    deauthorize(spec, ...args) {
      if (!spec.client_id) {
        spec.client_id = this._stripe.getClientId();
      }
      return stripeMethod89({
        method: "POST",
        path: "oauth/deauthorize",
        host: oAuthHost
      }).apply(this, [spec, ...args]);
    }
  });

  // node_modules/stripe/esm/resources/PaymentIntents.js
  var stripeMethod90 = StripeResource.method;
  var PaymentIntents = StripeResource.extend({
    create: stripeMethod90({ method: "POST", fullPath: "/v1/payment_intents" }),
    retrieve: stripeMethod90({
      method: "GET",
      fullPath: "/v1/payment_intents/{intent}"
    }),
    update: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}"
    }),
    list: stripeMethod90({
      method: "GET",
      fullPath: "/v1/payment_intents",
      methodType: "list"
    }),
    applyCustomerBalance: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
    }),
    cancel: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/cancel"
    }),
    capture: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/capture"
    }),
    confirm: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/confirm"
    }),
    incrementAuthorization: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/increment_authorization"
    }),
    search: stripeMethod90({
      method: "GET",
      fullPath: "/v1/payment_intents/search",
      methodType: "search"
    }),
    verifyMicrodeposits: stripeMethod90({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
    })
  });

  // node_modules/stripe/esm/resources/PaymentLinks.js
  var stripeMethod91 = StripeResource.method;
  var PaymentLinks = StripeResource.extend({
    create: stripeMethod91({ method: "POST", fullPath: "/v1/payment_links" }),
    retrieve: stripeMethod91({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}"
    }),
    update: stripeMethod91({
      method: "POST",
      fullPath: "/v1/payment_links/{payment_link}"
    }),
    list: stripeMethod91({
      method: "GET",
      fullPath: "/v1/payment_links",
      methodType: "list"
    }),
    listLineItems: stripeMethod91({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethodConfigurations.js
  var stripeMethod92 = StripeResource.method;
  var PaymentMethodConfigurations = StripeResource.extend({
    create: stripeMethod92({
      method: "POST",
      fullPath: "/v1/payment_method_configurations"
    }),
    retrieve: stripeMethod92({
      method: "GET",
      fullPath: "/v1/payment_method_configurations/{configuration}"
    }),
    update: stripeMethod92({
      method: "POST",
      fullPath: "/v1/payment_method_configurations/{configuration}"
    }),
    list: stripeMethod92({
      method: "GET",
      fullPath: "/v1/payment_method_configurations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethodDomains.js
  var stripeMethod93 = StripeResource.method;
  var PaymentMethodDomains = StripeResource.extend({
    create: stripeMethod93({
      method: "POST",
      fullPath: "/v1/payment_method_domains"
    }),
    retrieve: stripeMethod93({
      method: "GET",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}"
    }),
    update: stripeMethod93({
      method: "POST",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}"
    }),
    list: stripeMethod93({
      method: "GET",
      fullPath: "/v1/payment_method_domains",
      methodType: "list"
    }),
    validate: stripeMethod93({
      method: "POST",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethods.js
  var stripeMethod94 = StripeResource.method;
  var PaymentMethods = StripeResource.extend({
    create: stripeMethod94({ method: "POST", fullPath: "/v1/payment_methods" }),
    retrieve: stripeMethod94({
      method: "GET",
      fullPath: "/v1/payment_methods/{payment_method}"
    }),
    update: stripeMethod94({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}"
    }),
    list: stripeMethod94({
      method: "GET",
      fullPath: "/v1/payment_methods",
      methodType: "list"
    }),
    attach: stripeMethod94({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/attach"
    }),
    detach: stripeMethod94({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/detach"
    })
  });

  // node_modules/stripe/esm/resources/Payouts.js
  var stripeMethod95 = StripeResource.method;
  var Payouts = StripeResource.extend({
    create: stripeMethod95({ method: "POST", fullPath: "/v1/payouts" }),
    retrieve: stripeMethod95({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
    update: stripeMethod95({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
    list: stripeMethod95({
      method: "GET",
      fullPath: "/v1/payouts",
      methodType: "list"
    }),
    cancel: stripeMethod95({
      method: "POST",
      fullPath: "/v1/payouts/{payout}/cancel"
    }),
    reverse: stripeMethod95({
      method: "POST",
      fullPath: "/v1/payouts/{payout}/reverse"
    })
  });

  // node_modules/stripe/esm/resources/Plans.js
  var stripeMethod96 = StripeResource.method;
  var Plans = StripeResource.extend({
    create: stripeMethod96({ method: "POST", fullPath: "/v1/plans" }),
    retrieve: stripeMethod96({ method: "GET", fullPath: "/v1/plans/{plan}" }),
    update: stripeMethod96({ method: "POST", fullPath: "/v1/plans/{plan}" }),
    list: stripeMethod96({
      method: "GET",
      fullPath: "/v1/plans",
      methodType: "list"
    }),
    del: stripeMethod96({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
  });

  // node_modules/stripe/esm/resources/Prices.js
  var stripeMethod97 = StripeResource.method;
  var Prices = StripeResource.extend({
    create: stripeMethod97({ method: "POST", fullPath: "/v1/prices" }),
    retrieve: stripeMethod97({ method: "GET", fullPath: "/v1/prices/{price}" }),
    update: stripeMethod97({ method: "POST", fullPath: "/v1/prices/{price}" }),
    list: stripeMethod97({
      method: "GET",
      fullPath: "/v1/prices",
      methodType: "list"
    }),
    search: stripeMethod97({
      method: "GET",
      fullPath: "/v1/prices/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/Products.js
  var stripeMethod98 = StripeResource.method;
  var Products2 = StripeResource.extend({
    create: stripeMethod98({ method: "POST", fullPath: "/v1/products" }),
    retrieve: stripeMethod98({ method: "GET", fullPath: "/v1/products/{id}" }),
    update: stripeMethod98({ method: "POST", fullPath: "/v1/products/{id}" }),
    list: stripeMethod98({
      method: "GET",
      fullPath: "/v1/products",
      methodType: "list"
    }),
    del: stripeMethod98({ method: "DELETE", fullPath: "/v1/products/{id}" }),
    createFeature: stripeMethod98({
      method: "POST",
      fullPath: "/v1/products/{product}/features"
    }),
    deleteFeature: stripeMethod98({
      method: "DELETE",
      fullPath: "/v1/products/{product}/features/{id}"
    }),
    listFeatures: stripeMethod98({
      method: "GET",
      fullPath: "/v1/products/{product}/features",
      methodType: "list"
    }),
    retrieveFeature: stripeMethod98({
      method: "GET",
      fullPath: "/v1/products/{product}/features/{id}"
    }),
    search: stripeMethod98({
      method: "GET",
      fullPath: "/v1/products/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/PromotionCodes.js
  var stripeMethod99 = StripeResource.method;
  var PromotionCodes = StripeResource.extend({
    create: stripeMethod99({ method: "POST", fullPath: "/v1/promotion_codes" }),
    retrieve: stripeMethod99({
      method: "GET",
      fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    update: stripeMethod99({
      method: "POST",
      fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    list: stripeMethod99({
      method: "GET",
      fullPath: "/v1/promotion_codes",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Quotes.js
  var stripeMethod100 = StripeResource.method;
  var Quotes = StripeResource.extend({
    create: stripeMethod100({ method: "POST", fullPath: "/v1/quotes" }),
    retrieve: stripeMethod100({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
    update: stripeMethod100({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
    list: stripeMethod100({
      method: "GET",
      fullPath: "/v1/quotes",
      methodType: "list"
    }),
    accept: stripeMethod100({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
    cancel: stripeMethod100({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
    finalizeQuote: stripeMethod100({
      method: "POST",
      fullPath: "/v1/quotes/{quote}/finalize"
    }),
    listComputedUpfrontLineItems: stripeMethod100({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
      methodType: "list"
    }),
    listLineItems: stripeMethod100({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/line_items",
      methodType: "list"
    }),
    pdf: stripeMethod100({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/pdf",
      host: "files.stripe.com",
      streaming: true
    })
  });

  // node_modules/stripe/esm/resources/Refunds.js
  var stripeMethod101 = StripeResource.method;
  var Refunds2 = StripeResource.extend({
    create: stripeMethod101({ method: "POST", fullPath: "/v1/refunds" }),
    retrieve: stripeMethod101({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
    update: stripeMethod101({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
    list: stripeMethod101({
      method: "GET",
      fullPath: "/v1/refunds",
      methodType: "list"
    }),
    cancel: stripeMethod101({
      method: "POST",
      fullPath: "/v1/refunds/{refund}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Reviews.js
  var stripeMethod102 = StripeResource.method;
  var Reviews = StripeResource.extend({
    retrieve: stripeMethod102({ method: "GET", fullPath: "/v1/reviews/{review}" }),
    list: stripeMethod102({
      method: "GET",
      fullPath: "/v1/reviews",
      methodType: "list"
    }),
    approve: stripeMethod102({
      method: "POST",
      fullPath: "/v1/reviews/{review}/approve"
    })
  });

  // node_modules/stripe/esm/resources/SetupAttempts.js
  var stripeMethod103 = StripeResource.method;
  var SetupAttempts = StripeResource.extend({
    list: stripeMethod103({
      method: "GET",
      fullPath: "/v1/setup_attempts",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/SetupIntents.js
  var stripeMethod104 = StripeResource.method;
  var SetupIntents = StripeResource.extend({
    create: stripeMethod104({ method: "POST", fullPath: "/v1/setup_intents" }),
    retrieve: stripeMethod104({
      method: "GET",
      fullPath: "/v1/setup_intents/{intent}"
    }),
    update: stripeMethod104({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}"
    }),
    list: stripeMethod104({
      method: "GET",
      fullPath: "/v1/setup_intents",
      methodType: "list"
    }),
    cancel: stripeMethod104({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/cancel"
    }),
    confirm: stripeMethod104({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/confirm"
    }),
    verifyMicrodeposits: stripeMethod104({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
    })
  });

  // node_modules/stripe/esm/resources/ShippingRates.js
  var stripeMethod105 = StripeResource.method;
  var ShippingRates = StripeResource.extend({
    create: stripeMethod105({ method: "POST", fullPath: "/v1/shipping_rates" }),
    retrieve: stripeMethod105({
      method: "GET",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    update: stripeMethod105({
      method: "POST",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    list: stripeMethod105({
      method: "GET",
      fullPath: "/v1/shipping_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Sources.js
  var stripeMethod106 = StripeResource.method;
  var Sources = StripeResource.extend({
    create: stripeMethod106({ method: "POST", fullPath: "/v1/sources" }),
    retrieve: stripeMethod106({ method: "GET", fullPath: "/v1/sources/{source}" }),
    update: stripeMethod106({ method: "POST", fullPath: "/v1/sources/{source}" }),
    listSourceTransactions: stripeMethod106({
      method: "GET",
      fullPath: "/v1/sources/{source}/source_transactions",
      methodType: "list"
    }),
    verify: stripeMethod106({
      method: "POST",
      fullPath: "/v1/sources/{source}/verify"
    })
  });

  // node_modules/stripe/esm/resources/SubscriptionItems.js
  var stripeMethod107 = StripeResource.method;
  var SubscriptionItems = StripeResource.extend({
    create: stripeMethod107({ method: "POST", fullPath: "/v1/subscription_items" }),
    retrieve: stripeMethod107({
      method: "GET",
      fullPath: "/v1/subscription_items/{item}"
    }),
    update: stripeMethod107({
      method: "POST",
      fullPath: "/v1/subscription_items/{item}"
    }),
    list: stripeMethod107({
      method: "GET",
      fullPath: "/v1/subscription_items",
      methodType: "list"
    }),
    del: stripeMethod107({
      method: "DELETE",
      fullPath: "/v1/subscription_items/{item}"
    }),
    createUsageRecord: stripeMethod107({
      method: "POST",
      fullPath: "/v1/subscription_items/{subscription_item}/usage_records"
    }),
    listUsageRecordSummaries: stripeMethod107({
      method: "GET",
      fullPath: "/v1/subscription_items/{subscription_item}/usage_record_summaries",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/SubscriptionSchedules.js
  var stripeMethod108 = StripeResource.method;
  var SubscriptionSchedules = StripeResource.extend({
    create: stripeMethod108({
      method: "POST",
      fullPath: "/v1/subscription_schedules"
    }),
    retrieve: stripeMethod108({
      method: "GET",
      fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    update: stripeMethod108({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    list: stripeMethod108({
      method: "GET",
      fullPath: "/v1/subscription_schedules",
      methodType: "list"
    }),
    cancel: stripeMethod108({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/cancel"
    }),
    release: stripeMethod108({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/release"
    })
  });

  // node_modules/stripe/esm/resources/Subscriptions.js
  var stripeMethod109 = StripeResource.method;
  var Subscriptions = StripeResource.extend({
    create: stripeMethod109({ method: "POST", fullPath: "/v1/subscriptions" }),
    retrieve: stripeMethod109({
      method: "GET",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    update: stripeMethod109({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    list: stripeMethod109({
      method: "GET",
      fullPath: "/v1/subscriptions",
      methodType: "list"
    }),
    cancel: stripeMethod109({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    deleteDiscount: stripeMethod109({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
    }),
    resume: stripeMethod109({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription}/resume"
    }),
    search: stripeMethod109({
      method: "GET",
      fullPath: "/v1/subscriptions/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/TaxCodes.js
  var stripeMethod110 = StripeResource.method;
  var TaxCodes = StripeResource.extend({
    retrieve: stripeMethod110({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
    list: stripeMethod110({
      method: "GET",
      fullPath: "/v1/tax_codes",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TaxIds.js
  var stripeMethod111 = StripeResource.method;
  var TaxIds = StripeResource.extend({
    create: stripeMethod111({ method: "POST", fullPath: "/v1/tax_ids" }),
    retrieve: stripeMethod111({ method: "GET", fullPath: "/v1/tax_ids/{id}" }),
    list: stripeMethod111({
      method: "GET",
      fullPath: "/v1/tax_ids",
      methodType: "list"
    }),
    del: stripeMethod111({ method: "DELETE", fullPath: "/v1/tax_ids/{id}" })
  });

  // node_modules/stripe/esm/resources/TaxRates.js
  var stripeMethod112 = StripeResource.method;
  var TaxRates = StripeResource.extend({
    create: stripeMethod112({ method: "POST", fullPath: "/v1/tax_rates" }),
    retrieve: stripeMethod112({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
    update: stripeMethod112({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
    list: stripeMethod112({
      method: "GET",
      fullPath: "/v1/tax_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Tokens.js
  var stripeMethod113 = StripeResource.method;
  var Tokens2 = StripeResource.extend({
    create: stripeMethod113({ method: "POST", fullPath: "/v1/tokens" }),
    retrieve: stripeMethod113({ method: "GET", fullPath: "/v1/tokens/{token}" })
  });

  // node_modules/stripe/esm/resources/Topups.js
  var stripeMethod114 = StripeResource.method;
  var Topups = StripeResource.extend({
    create: stripeMethod114({ method: "POST", fullPath: "/v1/topups" }),
    retrieve: stripeMethod114({ method: "GET", fullPath: "/v1/topups/{topup}" }),
    update: stripeMethod114({ method: "POST", fullPath: "/v1/topups/{topup}" }),
    list: stripeMethod114({
      method: "GET",
      fullPath: "/v1/topups",
      methodType: "list"
    }),
    cancel: stripeMethod114({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
  });

  // node_modules/stripe/esm/resources/Transfers.js
  var stripeMethod115 = StripeResource.method;
  var Transfers = StripeResource.extend({
    create: stripeMethod115({ method: "POST", fullPath: "/v1/transfers" }),
    retrieve: stripeMethod115({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
    update: stripeMethod115({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
    list: stripeMethod115({
      method: "GET",
      fullPath: "/v1/transfers",
      methodType: "list"
    }),
    createReversal: stripeMethod115({
      method: "POST",
      fullPath: "/v1/transfers/{id}/reversals"
    }),
    listReversals: stripeMethod115({
      method: "GET",
      fullPath: "/v1/transfers/{id}/reversals",
      methodType: "list"
    }),
    retrieveReversal: stripeMethod115({
      method: "GET",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    }),
    updateReversal: stripeMethod115({
      method: "POST",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    })
  });

  // node_modules/stripe/esm/resources/WebhookEndpoints.js
  var stripeMethod116 = StripeResource.method;
  var WebhookEndpoints = StripeResource.extend({
    create: stripeMethod116({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
    retrieve: stripeMethod116({
      method: "GET",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    update: stripeMethod116({
      method: "POST",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    list: stripeMethod116({
      method: "GET",
      fullPath: "/v1/webhook_endpoints",
      methodType: "list"
    }),
    del: stripeMethod116({
      method: "DELETE",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    })
  });

  // node_modules/stripe/esm/resources.js
  var Apps = resourceNamespace("apps", { Secrets });
  var Billing = resourceNamespace("billing", {
    MeterEventAdjustments,
    MeterEvents,
    Meters
  });
  var BillingPortal = resourceNamespace("billingPortal", {
    Configurations,
    Sessions
  });
  var Checkout = resourceNamespace("checkout", {
    Sessions: Sessions2
  });
  var Climate = resourceNamespace("climate", {
    Orders,
    Products,
    Suppliers
  });
  var Entitlements = resourceNamespace("entitlements", {
    ActiveEntitlements,
    Features
  });
  var FinancialConnections = resourceNamespace("financialConnections", {
    Accounts,
    Sessions: Sessions3,
    Transactions: Transactions2
  });
  var Forwarding = resourceNamespace("forwarding", {
    Requests
  });
  var Identity = resourceNamespace("identity", {
    VerificationReports,
    VerificationSessions
  });
  var Issuing = resourceNamespace("issuing", {
    Authorizations: Authorizations2,
    Cardholders,
    Cards: Cards2,
    Disputes,
    PersonalizationDesigns: PersonalizationDesigns2,
    PhysicalBundles,
    Tokens,
    Transactions: Transactions3
  });
  var Radar = resourceNamespace("radar", {
    EarlyFraudWarnings,
    ValueListItems,
    ValueLists
  });
  var Reporting = resourceNamespace("reporting", {
    ReportRuns,
    ReportTypes
  });
  var Sigma = resourceNamespace("sigma", {
    ScheduledQueryRuns
  });
  var Tax = resourceNamespace("tax", {
    Calculations,
    Registrations,
    Settings,
    Transactions: Transactions4
  });
  var Terminal = resourceNamespace("terminal", {
    Configurations: Configurations2,
    ConnectionTokens,
    Locations,
    Readers: Readers2
  });
  var TestHelpers = resourceNamespace("testHelpers", {
    ConfirmationTokens,
    Customers,
    Refunds,
    TestClocks,
    Issuing: resourceNamespace("issuing", {
      Authorizations,
      Cards,
      PersonalizationDesigns,
      Transactions
    }),
    Terminal: resourceNamespace("terminal", {
      Readers
    }),
    Treasury: resourceNamespace("treasury", {
      InboundTransfers,
      OutboundPayments,
      OutboundTransfers,
      ReceivedCredits,
      ReceivedDebits
    })
  });
  var Treasury = resourceNamespace("treasury", {
    CreditReversals,
    DebitReversals,
    FinancialAccounts,
    InboundTransfers: InboundTransfers2,
    OutboundPayments: OutboundPayments2,
    OutboundTransfers: OutboundTransfers2,
    ReceivedCredits: ReceivedCredits2,
    ReceivedDebits: ReceivedDebits2,
    TransactionEntries,
    Transactions: Transactions5
  });

  // node_modules/stripe/esm/RequestSender.js
  var MAX_RETRY_AFTER_WAIT = 60;
  var RequestSender = class _RequestSender {
    constructor(stripe, maxBufferedRequestMetric) {
      this._stripe = stripe;
      this._maxBufferedRequestMetric = maxBufferedRequestMetric;
    }
    _addHeadersDirectlyToObject(obj, headers) {
      obj.requestId = headers["request-id"];
      obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
      obj.apiVersion = obj.apiVersion || headers["stripe-version"];
      obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
    }
    _makeResponseEvent(requestEvent, statusCode, headers) {
      const requestEndTime = Date.now();
      const requestDurationMs = requestEndTime - requestEvent.request_start_time;
      return removeNullish({
        api_version: headers["stripe-version"],
        account: headers["stripe-account"],
        idempotency_key: headers["idempotency-key"],
        method: requestEvent.method,
        path: requestEvent.path,
        status: statusCode,
        request_id: this._getRequestId(headers),
        elapsed: requestDurationMs,
        request_start_time: requestEvent.request_start_time,
        request_end_time: requestEndTime
      });
    }
    _getRequestId(headers) {
      return headers["request-id"];
    }
    /**
     * Used by methods with spec.streaming === true. For these methods, we do not
     * buffer successful responses into memory or do parse them into stripe
     * objects, we delegate that all of that to the user and pass back the raw
     * http.Response object to the callback.
     *
     * (Unsuccessful responses shouldn't make it here, they should
     * still be buffered/parsed and handled by _jsonResponseHandler -- see
     * makeRequest)
     */
    _streamingResponseHandler(requestEvent, usage, callback) {
      return (res) => {
        const headers = res.getHeaders();
        const streamCompleteCallback = () => {
          const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
          this._stripe._emitter.emit("response", responseEvent);
          this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed, usage);
        };
        const stream = res.toStream(streamCompleteCallback);
        this._addHeadersDirectlyToObject(stream, headers);
        return callback(null, stream);
      };
    }
    /**
     * Default handler for Stripe responses. Buffers the response into memory,
     * parses the JSON and returns it (i.e. passes it to the callback) if there
     * is no "error" field. Otherwise constructs/passes an appropriate Error.
     */
    _jsonResponseHandler(requestEvent, usage, callback) {
      return (res) => {
        const headers = res.getHeaders();
        const requestId = this._getRequestId(headers);
        const statusCode = res.getStatusCode();
        const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
        this._stripe._emitter.emit("response", responseEvent);
        res.toJSON().then((jsonResponse) => {
          if (jsonResponse.error) {
            let err;
            if (typeof jsonResponse.error === "string") {
              jsonResponse.error = {
                type: jsonResponse.error,
                message: jsonResponse.error_description
              };
            }
            jsonResponse.error.headers = headers;
            jsonResponse.error.statusCode = statusCode;
            jsonResponse.error.requestId = requestId;
            if (statusCode === 401) {
              err = new StripeAuthenticationError(jsonResponse.error);
            } else if (statusCode === 403) {
              err = new StripePermissionError(jsonResponse.error);
            } else if (statusCode === 429) {
              err = new StripeRateLimitError(jsonResponse.error);
            } else {
              err = StripeError.generate(jsonResponse.error);
            }
            throw err;
          }
          return jsonResponse;
        }, (e) => {
          throw new StripeAPIError({
            message: "Invalid JSON received from the Stripe API",
            exception: e,
            requestId: headers["request-id"]
          });
        }).then((jsonResponse) => {
          this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);
          const rawResponse = res.getRawResponse();
          this._addHeadersDirectlyToObject(rawResponse, headers);
          Object.defineProperty(jsonResponse, "lastResponse", {
            enumerable: false,
            writable: false,
            value: rawResponse
          });
          callback(null, jsonResponse);
        }, (e) => callback(e, null));
      };
    }
    static _generateConnectionErrorMessage(requestRetries) {
      return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
    }
    // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
    static _shouldRetry(res, numRetries, maxRetries, error) {
      if (error && numRetries === 0 && HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
        return true;
      }
      if (numRetries >= maxRetries) {
        return false;
      }
      if (!res) {
        return true;
      }
      if (res.getHeaders()["stripe-should-retry"] === "false") {
        return false;
      }
      if (res.getHeaders()["stripe-should-retry"] === "true") {
        return true;
      }
      if (res.getStatusCode() === 409) {
        return true;
      }
      if (res.getStatusCode() >= 500) {
        return true;
      }
      return false;
    }
    _getSleepTimeInMS(numRetries, retryAfter = null) {
      const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
      const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
      let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
      sleepSeconds *= 0.5 * (1 + Math.random());
      sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
      if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
        sleepSeconds = Math.max(sleepSeconds, retryAfter);
      }
      return sleepSeconds * 1e3;
    }
    // Max retries can be set on a per request basis. Favor those over the global setting
    _getMaxNetworkRetries(settings = {}) {
      return settings.maxNetworkRetries !== void 0 && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
    }
    _defaultIdempotencyKey(method, settings) {
      const maxRetries = this._getMaxNetworkRetries(settings);
      if (method === "POST" && maxRetries > 0) {
        return `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
      }
      return null;
    }
    _makeHeaders(auth, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings) {
      const defaultHeaders = {
        // Use specified auth token or use default from this stripe instance:
        Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField("auth"),
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": this._getUserAgentString(),
        "X-Stripe-Client-User-Agent": clientUserAgent,
        "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
        "Stripe-Version": apiVersion,
        "Stripe-Account": this._stripe.getApiField("stripeAccount"),
        "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings)
      };
      const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
      if (methodHasPayload || contentLength) {
        if (!methodHasPayload) {
          emitWarning(`${method} method had non-zero contentLength but no payload is expected for this verb`);
        }
        defaultHeaders["Content-Length"] = contentLength;
      }
      return Object.assign(
        removeNullish(defaultHeaders),
        // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
        normalizeHeaders(userSuppliedHeaders)
      );
    }
    _getUserAgentString() {
      const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
      const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
      return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
    }
    _getTelemetryHeader() {
      if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
        const metrics = this._stripe._prevRequestMetrics.shift();
        return JSON.stringify({
          last_request_metrics: metrics
        });
      }
    }
    _recordRequestMetrics(requestId, requestDurationMs, usage) {
      if (this._stripe.getTelemetryEnabled() && requestId) {
        if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
          emitWarning("Request metrics buffer is full, dropping telemetry message.");
        } else {
          const m = {
            request_id: requestId,
            request_duration_ms: requestDurationMs
          };
          if (usage && usage.length > 0) {
            m.usage = usage;
          }
          this._stripe._prevRequestMetrics.push(m);
        }
      }
    }
    _request(method, host, path, data, auth, options = {}, usage = [], callback, requestDataProcessor = null) {
      let requestData;
      const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter) => {
        return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
      };
      const makeRequest = (apiVersion, headers, numRetries) => {
        const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
        const req = this._stripe.getApiField("httpClient").makeRequest(host || this._stripe.getApiField("host"), this._stripe.getApiField("port"), path, method, headers, requestData, this._stripe.getApiField("protocol"), timeout);
        const requestStartTime = Date.now();
        const requestEvent = removeNullish({
          api_version: apiVersion,
          account: headers["Stripe-Account"],
          idempotency_key: headers["Idempotency-Key"],
          method,
          path,
          request_start_time: requestStartTime
        });
        const requestRetries = numRetries || 0;
        const maxRetries = this._getMaxNetworkRetries(options.settings || {});
        this._stripe._emitter.emit("request", requestEvent);
        req.then((res) => {
          if (_RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
            return retryRequest(
              makeRequest,
              apiVersion,
              headers,
              requestRetries,
              // @ts-ignore
              res.getHeaders()["retry-after"]
            );
          } else if (options.streaming && res.getStatusCode() < 400) {
            return this._streamingResponseHandler(requestEvent, usage, callback)(res);
          } else {
            return this._jsonResponseHandler(requestEvent, usage, callback)(res);
          }
        }).catch((error) => {
          if (_RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
            return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
          } else {
            const isTimeoutError = error.code && error.code === HttpClient.TIMEOUT_ERROR_CODE;
            return callback(new StripeConnectionError({
              message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : _RequestSender._generateConnectionErrorMessage(requestRetries),
              // @ts-ignore
              detail: error
            }));
          }
        });
      };
      const prepareAndMakeRequest = (error, data2) => {
        if (error) {
          return callback(error);
        }
        requestData = data2;
        this._stripe.getClientUserAgent((clientUserAgent) => {
          var _a, _b;
          const apiVersion = this._stripe.getApiField("version");
          const headers = this._makeHeaders(auth, requestData.length, apiVersion, clientUserAgent, method, (_a = options.headers) !== null && _a !== void 0 ? _a : null, (_b = options.settings) !== null && _b !== void 0 ? _b : {});
          makeRequest(apiVersion, headers, 0);
        });
      };
      if (requestDataProcessor) {
        requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
      } else {
        prepareAndMakeRequest(null, stringifyRequestData(data || {}));
      }
    }
  };

  // node_modules/stripe/esm/Webhooks.js
  function createWebhooks(platformFunctions) {
    const Webhook = {
      DEFAULT_TOLERANCE: 300,
      // @ts-ignore
      signature: null,
      constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        try {
          this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
        } catch (e) {
          if (e instanceof CryptoProviderOnlySupportsAsyncError) {
            e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`";
          }
          throw e;
        }
        const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
        return jsonPayload;
      },
      async constructEventAsync(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
        const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
        return jsonPayload;
      },
      /**
       * Generates a header to be used for webhook mocking
       *
       * @typedef {object} opts
       * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
       * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
       * @property {string} secret - Stripe webhook secret 'whsec_...'
       * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
       * @property {string} signature - Computed webhook signature
       * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
       */
      generateTestHeaderString: function(opts) {
        if (!opts) {
          throw new StripeError({
            message: "Options are required"
          });
        }
        opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
        opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;
        opts.cryptoProvider = opts.cryptoProvider || getCryptoProvider();
        opts.signature = opts.signature || opts.cryptoProvider.computeHMACSignature(opts.timestamp + "." + opts.payload, opts.secret);
        const generatedHeader = [
          "t=" + opts.timestamp,
          opts.scheme + "=" + opts.signature
        ].join(",");
        return generatedHeader;
      }
    };
    const signature = {
      EXPECTED_SCHEME: "v1",
      verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
        const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        const secretContainsWhitespace = /\s/.test(secret);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
        validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        return true;
      },
      async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
        const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        const secretContainsWhitespace = /\s/.test(secret);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
        return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
      }
    };
    function makeHMACContent(payload, details) {
      return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
      if (!encodedPayload) {
        throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
          message: "No webhook payload was provided."
        });
      }
      const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
      const textDecoder = new TextDecoder("utf8");
      const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
      if (Array.isArray(encodedHeader)) {
        throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
      }
      if (encodedHeader == null || encodedHeader == "") {
        throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
          message: "No stripe-signature header value was provided."
        });
      }
      const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
      const details = parseHeader(decodedHeader, expectedScheme);
      if (!details || details.timestamp === -1) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "Unable to extract timestamp and signatures from header"
        });
      }
      if (!details.signatures.length) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "No signatures found with expected scheme"
        });
      }
      return {
        decodedPayload,
        decodedHeader,
        details,
        suspectPayloadType
      };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
      const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
      const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing";
      const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
      if (!signatureFound) {
        if (suspectPayloadType) {
          throw new StripeSignatureVerificationError(header, payload, {
            message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
          });
        }
        throw new StripeSignatureVerificationError(header, payload, {
          message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n" + docsLocation + "\n" + whitespaceMessage
        });
      }
      const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1e3) - details.timestamp;
      if (tolerance > 0 && timestampAge > tolerance) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "Timestamp outside the tolerance zone"
        });
      }
      return true;
    }
    function parseHeader(header, scheme) {
      if (typeof header !== "string") {
        return null;
      }
      return header.split(",").reduce((accum, item) => {
        const kv = item.split("=");
        if (kv[0] === "t") {
          accum.timestamp = parseInt(kv[1], 10);
        }
        if (kv[0] === scheme) {
          accum.signatures.push(kv[1]);
        }
        return accum;
      }, {
        timestamp: -1,
        signatures: []
      });
    }
    let webhooksCryptoProviderInstance = null;
    function getCryptoProvider() {
      if (!webhooksCryptoProviderInstance) {
        webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
      }
      return webhooksCryptoProviderInstance;
    }
    Webhook.signature = signature;
    return Webhook;
  }

  // node_modules/stripe/esm/stripe.core.js
  var DEFAULT_HOST = "api.stripe.com";
  var DEFAULT_PORT = "443";
  var DEFAULT_BASE_PATH = "/v1/";
  var DEFAULT_API_VERSION = ApiVersion;
  var DEFAULT_TIMEOUT = 8e4;
  var MAX_NETWORK_RETRY_DELAY_SEC = 2;
  var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
  var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
  var ALLOWED_CONFIG_PROPERTIES = [
    "apiVersion",
    "typescript",
    "maxNetworkRetries",
    "httpAgent",
    "httpClient",
    "timeout",
    "host",
    "port",
    "protocol",
    "telemetry",
    "appInfo",
    "stripeAccount"
  ];
  var defaultRequestSenderFactory = (stripe) => new RequestSender(stripe, StripeResource.MAX_BUFFERED_REQUEST_METRICS);
  function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe2.PACKAGE_VERSION = "16.2.0";
    Stripe2.USER_AGENT = Object.assign({ bindings_version: Stripe2.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: false }, determineProcessUserAgentProperties());
    Stripe2.StripeResource = StripeResource;
    Stripe2.resources = resources_exports;
    Stripe2.HttpClient = HttpClient;
    Stripe2.HttpClientResponse = HttpClientResponse;
    Stripe2.CryptoProvider = CryptoProvider;
    function createWebhooksDefault(fns = platformFunctions) {
      return createWebhooks(fns);
    }
    Stripe2.webhooks = Object.assign(createWebhooksDefault, createWebhooks(platformFunctions));
    function Stripe2(key, config = {}) {
      if (!(this instanceof Stripe2)) {
        return new Stripe2(key, config);
      }
      const props = this._getPropsFromConfig(config);
      this._platformFunctions = platformFunctions;
      Object.defineProperty(this, "_emitter", {
        value: this._platformFunctions.createEmitter(),
        enumerable: false,
        configurable: false,
        writable: false
      });
      this.VERSION = Stripe2.PACKAGE_VERSION;
      this.on = this._emitter.on.bind(this._emitter);
      this.once = this._emitter.once.bind(this._emitter);
      this.off = this._emitter.removeListener.bind(this._emitter);
      const agent = props.httpAgent || null;
      this._api = {
        auth: null,
        host: props.host || DEFAULT_HOST,
        port: props.port || DEFAULT_PORT,
        protocol: props.protocol || "https",
        basePath: DEFAULT_BASE_PATH,
        version: props.apiVersion || DEFAULT_API_VERSION,
        timeout: validateInteger("timeout", props.timeout, DEFAULT_TIMEOUT),
        maxNetworkRetries: validateInteger("maxNetworkRetries", props.maxNetworkRetries, 1),
        agent,
        httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
        dev: false,
        stripeAccount: props.stripeAccount || null
      };
      const typescript = props.typescript || false;
      if (typescript !== Stripe2.USER_AGENT.typescript) {
        Stripe2.USER_AGENT.typescript = typescript;
      }
      if (props.appInfo) {
        this._setAppInfo(props.appInfo);
      }
      this._prepResources();
      this._setApiKey(key);
      this.errors = Error_exports;
      this.webhooks = createWebhooksDefault();
      this._prevRequestMetrics = [];
      this._enableTelemetry = props.telemetry !== false;
      this._requestSender = requestSender(this);
      this.StripeResource = Stripe2.StripeResource;
    }
    Stripe2.errors = Error_exports;
    Stripe2.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    Stripe2.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    Stripe2.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    Stripe2.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
    Stripe2.prototype = {
      // Properties are set in the constructor above
      _appInfo: void 0,
      on: null,
      off: null,
      once: null,
      VERSION: null,
      StripeResource: null,
      webhooks: null,
      errors: null,
      _api: null,
      _prevRequestMetrics: null,
      _emitter: null,
      _enableTelemetry: null,
      _requestSender: null,
      _platformFunctions: null,
      /**
       * @private
       */
      _setApiKey(key) {
        if (key) {
          this._setApiField("auth", `Bearer ${key}`);
        }
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setAppInfo(info) {
        if (info && typeof info !== "object") {
          throw new Error("AppInfo must be an object.");
        }
        if (info && !info.name) {
          throw new Error("AppInfo.name is required");
        }
        info = info || {};
        this._appInfo = APP_INFO_PROPERTIES.reduce(
          (accum, prop) => {
            if (typeof info[prop] == "string") {
              accum = accum || {};
              accum[prop] = info[prop];
            }
            return accum;
          },
          // @ts-ignore
          void 0
        );
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setApiField(key, value) {
        this._api[key] = value;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getApiField(key) {
        return this._api[key];
      },
      setClientId(clientId) {
        this._clientId = clientId;
      },
      getClientId() {
        return this._clientId;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getConstant: (c) => {
        switch (c) {
          case "DEFAULT_HOST":
            return DEFAULT_HOST;
          case "DEFAULT_PORT":
            return DEFAULT_PORT;
          case "DEFAULT_BASE_PATH":
            return DEFAULT_BASE_PATH;
          case "DEFAULT_API_VERSION":
            return DEFAULT_API_VERSION;
          case "DEFAULT_TIMEOUT":
            return DEFAULT_TIMEOUT;
          case "MAX_NETWORK_RETRY_DELAY_SEC":
            return MAX_NETWORK_RETRY_DELAY_SEC;
          case "INITIAL_NETWORK_RETRY_DELAY_SEC":
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        }
        return Stripe2[c];
      },
      getMaxNetworkRetries() {
        return this.getApiField("maxNetworkRetries");
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setApiNumberField(prop, n, defaultVal) {
        const val = validateInteger(prop, n, defaultVal);
        this._setApiField(prop, val);
      },
      getMaxNetworkRetryDelay() {
        return MAX_NETWORK_RETRY_DELAY_SEC;
      },
      getInitialNetworkRetryDelay() {
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       *
       * Gets a JSON version of a User-Agent and uses a cached version for a slight
       * speed advantage.
       */
      getClientUserAgent(cb) {
        return this.getClientUserAgentSeeded(Stripe2.USER_AGENT, cb);
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       *
       * Gets a JSON version of a User-Agent by encoding a seeded object and
       * fetching a uname from the system.
       */
      getClientUserAgentSeeded(seed, cb) {
        this._platformFunctions.getUname().then((uname) => {
          var _a;
          const userAgent = {};
          for (const field in seed) {
            userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : "null");
          }
          userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
          const client = this.getApiField("httpClient");
          if (client) {
            userAgent.httplib = encodeURIComponent(client.getClientName());
          }
          if (this._appInfo) {
            userAgent.application = this._appInfo;
          }
          cb(JSON.stringify(userAgent));
        });
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getAppInfoAsString() {
        if (!this._appInfo) {
          return "";
        }
        let formatted = this._appInfo.name;
        if (this._appInfo.version) {
          formatted += `/${this._appInfo.version}`;
        }
        if (this._appInfo.url) {
          formatted += ` (${this._appInfo.url})`;
        }
        return formatted;
      },
      getTelemetryEnabled() {
        return this._enableTelemetry;
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _prepResources() {
        for (const name in resources_exports) {
          this[pascalToCamelCase(name)] = new resources_exports[name](this);
        }
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _getPropsFromConfig(config) {
        if (!config) {
          return {};
        }
        const isString2 = typeof config === "string";
        const isObject3 = config === Object(config) && !Array.isArray(config);
        if (!isObject3 && !isString2) {
          throw new Error("Config must either be an object or a string");
        }
        if (isString2) {
          return {
            apiVersion: config
          };
        }
        const values = Object.keys(config).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
        if (values.length > 0) {
          throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
        }
        return config;
      }
    };
    return Stripe2;
  }

  // node_modules/stripe/esm/stripe.esm.worker.js
  var Stripe = createStripe(new WebPlatformFunctions());
  var stripe_esm_worker_default = Stripe;

  // public/js/stripe.js
  var bookTour = async (tourId) => {
    try {
      const stripe = stripe_esm_worker_default("pk_test_51PZsFkEl53NOCu6gW7bj0UnbdW9OTmODYEYz18j4th8M4qXMa7BKKSVvHimPWTq0kKk4yzghBg8JYyVJSKkWfJhD00gzWN5Khr");
      const session = await axios_default(
        `/api/v1/bookings/checkout-session/${tourId}`
      );
      console.log(session);
      window.location.replace(session.data.session.url);
    } catch (err) {
      console.log(err);
      showAlert("error", err);
    }
  };

  // public/js/index.js
  var filetag = document.querySelector("#photo");
  var preview = document.querySelector(".form__user-photo");
  var userPasswordForm = document.querySelector(".form-user-password");
  var leaflet = document.getElementById("map");
  var loginForm = document.querySelector(".form--login");
  var logOutBtn = document.querySelector(".nav__el--logout");
  var bookBtn = document.getElementById("book-tour");
  var signupForm = document.querySelector(".form--signup");
  var userDataForm = document.querySelector(".form-user-data");
  if (leaflet) {
    const locations = JSON.parse(leaflet.dataset.locations);
    displayMap(locations);
  }
  if (loginForm)
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      login(email, password);
    });
  if (logOutBtn) logOutBtn.addEventListener("click", logout);
  if (userDataForm)
    userDataForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append("name", document.getElementById("name").value);
      form.append("email", document.getElementById("email").value);
      form.append("photo", document.getElementById("photo").files[0]);
      updateSettings(form, "data");
    });
  if (userPasswordForm)
    userPasswordForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      document.querySelector(".btn--save-password").textContent = "Updating...";
      const passwordCurrent = document.getElementById("password-current").value;
      const password = document.getElementById("password").value;
      const passwordConfirm = document.getElementById("password-confirm").value;
      await updateSettings(
        { passwordCurrent, password, passwordConfirm },
        "password"
      );
      document.querySelector(".btn--save-password").textContent = "Save password";
      document.getElementById("password-current").value = "";
      document.getElementById("password").value = "";
      document.getElementById("password-confirm").value = "";
    });
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("password-confirm").value;
      signup(name, email, password, confirmPassword);
    });
  }
  var readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  if (filetag && preview) {
    filetag.addEventListener("change", function() {
      readURL(this);
    });
  }
  if (bookBtn)
    bookBtn.addEventListener("click", (e) => {
      e.target.textContent = "Processing...";
      const { tourId } = e.target.dataset;
      bookTour(tourId);
    });
})();
