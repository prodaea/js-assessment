if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(fn, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;
        }
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments).slice(1);
        return fn.apply(fn, args);
    },

    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments).slice(1);
        return function() {
            var newArgs = Array.prototype.slice.call(arguments);
            var curryArgs = args.concat(newArgs);
            return fn.apply(fn, curryArgs);
        }
    },

    makeClosures : function(arr, fn) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(new Closure(arr[i]));
        }

        function Closure(value) {
            var val = value;
            return function() {
                return fn.call(fn, val);
            };
        }

        return newArr;
    }
  };
});
