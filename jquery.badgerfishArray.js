(function ($){
    
    $.fn.badgerfishArray = function (json, path) {
        var first, count,
            type = $.type(path);

        if (type === 'string') {
            path = path.split('.');
        } else if (type === 'array') {
        } else {
            return;
        }

        if ($.type(json) !== 'object') {
            return;
        }

        count = path.length;

        if (count === 0 || (count === 1 && path[0] === '')) {
            return;
        }

        function bfRecurse (json, path) {
            var first = path.shift();
            if (path.length === 0) {
                if (json[first] === undefined || json[first] === '') {
                    json[first] = [];
                } else if ($.type(json[first]) === 'string' || $.type(json[first]) === 'object') {
                    json[first] = [json[first]];
                }
            } else {
                if ($.type(json[first]) === 'object') {
                    bfRecurse (json[first], path);
                }
            }
        }

        bfRecurse(json, path);

    }
})(jQuery);