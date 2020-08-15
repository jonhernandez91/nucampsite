$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
        if ($("#carouselPause").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselPause").children("i").removeClass("fa-pause");
            $("#carouselPause").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselPause").children("i").removeClass("fa-play");
            $("#carouselPause").children("i").addClass("fa-pause");
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal();
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal();
    })
});