$(document).ready(function() {

    $(".row-event").mouseover(function() {
        $(".date-block").css("visibility", "hidden");
        $(".row-event").css("background", "rgba(33, 47, 61, .8)");
        $(".voir-plus").css("visibility", "visible");
    });

    $(".row-event").mouseout(function() {
        $(".date-block").css("visibility", "visible");
        $(".row-event").css("background", "rgba(33, 47, 61, .6)");
        $(".voir-plus").css("visibility", "hidden");
    });

    $(".row-event-2").mouseover(function() {
        $(".date-block-2").css("visibility", "hidden");
        $(".row-event-2").css("background", "rgba(33, 47, 61, .8)");
        $(".voir-plus-2").css("visibility", "visible");
    });

    $(".row-event-2").mouseout(function() {
        $(".date-block-2").css("visibility", "visible");
        $(".row-event-2").css("background", "rgba(33, 47, 61, .6)");
        $(".voir-plus-2").css("visibility", "hidden");
    });

    $(".row-event-3").mouseover(function() {
        $(".date-block-3").css("visibility", "hidden");
        $(".row-event-3").css("background", "rgba(33, 47, 61, .8)");
        $(".voir-plus-3").css("visibility", "visible");
    });

    $(".row-event-3").mouseout(function() {
        $(".date-block-3").css("visibility", "visible");
        $(".row-event-3").css("background", "rgba(33, 47, 61, .6)");
        $(".voir-plus-3").css("visibility", "hidden");
    });

    $(".row-event-4").mouseover(function() {
        $(".date-block-4").css("visibility", "hidden");
        $(".row-event-4").css("background", "rgba(33, 47, 61, .8)");
        $(".voir-plus-4").css("visibility", "visible");
    });

    $(".row-event-4").mouseout(function() {
        $(".date-block-4").css("visibility", "visible");
        $(".row-event-4").css("background", "rgba(33, 47, 61, .6)");
        $(".voir-plus-4").css("visibility", "hidden");
    });

    $(".row-event-5").mouseover(function() {
        $(".date-block-5").css("visibility", "hidden");
        $(".row-event-5").css("background", "rgba(33, 47, 61, .8)");
        $(".voir-plus-5").css("visibility", "visible");
    });

    $(".row-event-5").mouseout(function() {
        $(".date-block-5").css("visibility", "visible");
        $(".row-event-5").css("background", "rgba(33, 47, 61, .6)");
        $(".voir-plus-5").css("visibility", "hidden");
    });

    $(".row-event-6").mouseover(function() {
        $(".date-block-6").css("visibility", "hidden");
        $(".row-event-6").css("background", "rgba(33, 47, 61, .8)");
        $(".voir-plus-6").css("visibility", "visible");
    });

    $(".row-event-6").mouseout(function() {
        $(".date-block-6").css("visibility", "visible");
        $(".row-event-6").css("background", "rgba(33, 47, 61, .6)");
        $(".voir-plus-6").css("visibility", "hidden");
    });

    $(".arrow-down").click(function() {
        $(".arrow-down").css("display", "none");
        $(".arrow-up").css("display", "block");
        $(".arrow-up").css("margin-bottom", "1.5%");
        $(".container-des-events-second-block-cache").slideDown(1000);
        $(".container-des-events-second-block-cache").css("display", "block");
    });

    $(".arrow-up").click(function() {
        $(".arrow-up").css("display", "none");
        $(".arrow-down").css("display", "block");
        $(".arrow-down").css("margin-bottom", "0%");
        $(".container-des-events-second-block-cache").slideUp(1000, function() {
            $(".container-des-events-second-block-cache").css("display", "none");
        });
    });

    //ANIMATION OF VIEWS EVENTS EXPLAINATION
    $(".button-view").click(function() {
        $(".great-opacity-container").css("display", "block");
        $(".views").css("display", "block");
        $(".views").css("top", "50%");
    });

    //ANIMATION OF VIEWS EVENTS EXPLAINATION
    $(".great-opacity-container").click(function() {
        $(".great-opacity-container").css("display", "none");
        $(".views").css("display", "none");
        $(".views").css("top", "0%");
    });

    //ANIMATION OF LAST EVENTS VIEWS
    $(".video-button-recent").click(function() {
        $(".great-opacity-container").css("display", "block");
        $(".views-last-event").css("display", "block");
    });

    //ANIMATION OF LAST EVENTS VIEWS
    $(".great-opacity-container").click(function() {
        $(".great-opacity-container").css("display", "none");
        $(".views-last-event").css("display", "none");
    });


});