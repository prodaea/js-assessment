if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        //TODO: not compatible
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }

        return total;
    },

    remove : function(arr, item) {
        var splice = this.indexOf(arr, item);
        if (splice > -1) {
            arr.splice(splice, 1);
            //check for other elements
            this.remove(arr, item);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var start = arr.length;
        //copy the array so that it doesn't change the original...
        var safe = arr.slice();
        var newArr = this.remove(safe, item);
        return start - newArr.length;
    },

    duplicates : function(arr) {
        var set = [];
        // don't map -- http://jsperf.com/map-vs-native-for-loop
        for (var i = 0; i < arr.length; i++) {
            if (this.count(arr, arr[i]) > 1 && this.indexOf(set, arr[i]) === -1) {
                set.push(arr[i]);
            }
        }
        return set;
    },

    square : function(arr) {
        var set = [];
        for (var i = 0; i < arr.length; i++) {
            set.push(Math.pow(arr[i], 2));
        }
        return set;
    },

    findAllOccurrences : function(arr, target) {
        var startIndex = 0; 
        var index;
        var indices = [];

        while ((index = arr.indexOf(target, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + 1;
        }
        
        return indices;
    },
  };
});
