$(document).ready(function() {
    $(".dropdown-trigger").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({

        indicators: true,
    });
    setInterval(function() {
        $('.carousel').carousel('next');
    }, 10000); // every 10 seconds

    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    });
    $(".top").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
    $('.fixed-action-btn').floatingActionButton();


});