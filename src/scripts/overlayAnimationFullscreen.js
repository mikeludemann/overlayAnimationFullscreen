var overlayAnimationFullscreen = (function () {

    $("body").append('<div id="fullscreenOverlay" class="overlay"><div class="overlay-header"><p id="close">&times;</p></div><div class="overlay-title"><h2>Test</h2></div><div class="overlay-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</div></div>');

    function left(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "height": "100%", "top": "0", "left": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css("width", "100%");

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css("width", "0");

            });

        });

    }

    function top(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "width": "100%", "top": "0", "left": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css("height", "100%");

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css("height", "0");

            });

        });

    }

    function right(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "height": "100%", "top": "0", "right": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css("width", "100%");

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css("width", "0");

            });

        });

    }

    function bottom(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "width": "100%", "bottom": "0", "left": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css("height", "100%");

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css("height", "0");

            });

        });

    }

    function topLeft(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "top": "0", "left": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css({ "width": "100%", "height": "100%" });

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css({ "width": "0", "height": "0" });

            });

        });

    }

    function topRight(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "top": "0", "right": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css({ "width": "100%", "height": "100%" });

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css({ "width": "0", "height": "0" });

            });

        });

    }

    function bottomLeft(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "bottom": "0", "left": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css({ "width": "100%", "height": "100%" });

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css({ "width": "0", "height": "0" });

            });

        });

    }

    function bottomRight(clickElement) {

        $(document).ready(function () {

            $("#fullscreenOverlay").css({ "bottom": "0", "right": "0" });

            $(clickElement).click(function () {

                $("#fullscreenOverlay").css({ "width": "100%", "height": "100%" });

            });

            $("#close").click(function () {

                $("#fullscreenOverlay").css({ "width": "0", "height": "0" });

            });

        });

    }

    return {

        left: left,
        top: top,
        right: right,
        bottom: bottom,
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight

    }

})();