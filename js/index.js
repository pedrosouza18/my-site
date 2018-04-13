$(function() {
    $('.nav-toggle, .nav-close').click(function(event) {
        event.preventDefault();
        $('.header .nav').toggleClass('active');
    });
});