
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    
    if (scroll >280) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});


