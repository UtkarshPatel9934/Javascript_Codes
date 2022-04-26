$.fn.accordion = function (speed) {
    this.addClass("accordion-from-javascript");
    this.on('click', ".accordion-control", function (e) {
        e.preventDefault();

        $(this)
            .next('.accordion-panel')
            .not(':animated')
            // .stop()
            .slideToggle(speed);
        
        // var normalJavascriptArray = $(this).toArray();

    });

    return this;
};
