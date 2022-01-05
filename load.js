(function ($) {
    $(document).ready(function () {
        console.log('ready');
        const queryString = window.location.search;
        if (!queryString.replace('?', '')) {
            $.get("head.html", function (data) {
                $("head").append(data);
            });
            $.get("body.html", function (data) {
                $("body").append(data);
            });
        }
    });
})(window.jQuery);