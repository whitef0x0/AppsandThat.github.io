// Init Skrollr and set defaults
var s = skrollr.init({
	box: '500p'
    mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
    }
});


$(function () {
    $.scrollIt();
});

var headroom = new Headroom(header, {
    "tolerance": 5,
    "offset": 5,
    "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
    }
});
headroom.init();

 // to destroy
headroom.destroy();
$(document).ready(function () {
    $('.menu-link').bigSlide();
});

$('.billboard h2').addClass('complete').delay(800);