(function ($) {
    $(document).ready(function () {
        console.log('ready');
        const queryString = window.location.search;
        if (!queryString.replace('?', '')) {
            $(document).load("main.html", function (resp, status, xhr) {
                if (status == "success" && xhr.status == 200) {
                    $("load").prepend(resp);
                }
            });
        }
    });
})(window.jQuery);