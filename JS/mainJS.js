$(document).ready(function() {

    var $menu = $("nav"),
        $height = $('#header').css('height');
    $(window).scroll(function() {

        if ($(this).scrollTop() >= $height.slice(0, -2)) {

            $menu.addClass("navbar-fixed-top");

        } else if ($(this).scrollTop() <= $height.slice(0, -2) && $menu.hasClass("navbar-fixed-top")) {

            $menu.removeClass("navbar-fixed-top");

        }

    });
//console.log($height.slice(0, -2));

});
