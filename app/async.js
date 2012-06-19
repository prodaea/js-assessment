define([
    'jquery'
], function($) {

    return {
        async : function() {
            var d = $.Deferred();
            d.resolve(true);
            return d;
        },

        manipulateRemoteData : function(url) {
            var d = $.Deferred();

            function onAjaxDone(data) {
                var people = data.people;
                var names = [];
                for (var i = 0; i < people.length; i++) {
                    names.push(people[i].name);
                }

                names.sort();
                d.resolve(names);
            }

            $.ajax(url).done(onAjaxDone)
            return d;
        }
    };
});
