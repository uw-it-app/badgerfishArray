/*global jQuery*/
(function ($) {
    'use strict';
    $.badgerfishArray = function (json, path, options) {
        var first, count,
            settings = $.extend({create: true}, options),
            type = $.type(path);

        if (type === 'string') {
            path = path.split('.');
        } else if (type !== 'array') {
            // anything but a string or array can't be used
            return;
        }
        if ($.type(json) !== 'object') {
            // this must be an object
            return;
        }
        count = path.length;
        if (count === 0 || (count === 1 && path[0] === '')) {
            return;
        }

        function bfRecurse(json, path) {
            var first = path.shift();
            if (path.length === 0) {
                if (json[first] === undefined || json[first] === '') {
                    json[first] = [];
                } else if ($.type(json[first]) === 'string' || $.type(json[first]) === 'object') {
                    json[first] = [json[first]];
                }
            } else {
                if ($.type(json[first]) === 'object') {
                    bfRecurse(json[first], path);
                } else if (json[first] === undefined && settings.create === true) {
                    json[first] = {};
                    bfRecurse(json[first], path);
                }
            }
        }
        bfRecurse(json, path);
    };
})(jQuery);