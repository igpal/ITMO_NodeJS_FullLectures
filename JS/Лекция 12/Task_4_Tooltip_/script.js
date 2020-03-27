$(function() {
    $('.example')
        .mouseover(function(e) {
            $("#tooltip_container")
                .html($(this).attr("data-tip-source"))
                .css({ "display": "block", "opacity": 0 })
                .animate({ "opacity": 1 }, 250);
        })
        .mousemove(function(e) {
            $("#tooltip_container")
                .css("left", (e.pageX) + "px")
                .css("top", (e.pageY) + "px")
        })
        .mouseout(function(e) {
            $("#tooltip_container")
                .animate({ "opacity": 0 }, 250, function() {
                    $(this).css("display", "none").html("");
                });
        });
});