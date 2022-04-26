$(function () {
    $('.accordion .accordion-control').on('click', function (e) {
        e.preventDefault();

        $(this)
            .next('.accordion-panel')
            .not(':animated')
            // .stop()
            .slideToggle();
    });
});
