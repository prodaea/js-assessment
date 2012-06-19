if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        var name = str1;
        var greeting = str2;

        function sayIt() {
            return name + ', ' + greeting
        }

        return {
            name: name,
            greeting: greeting,
            sayIt: sayIt
        }
    }
  };
});

