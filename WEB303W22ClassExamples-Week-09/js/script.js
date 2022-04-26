$(function () {

    $(".special-accordion").accordion(2000).show();
    //call the tabbed, or the accordion, or the modal
    (function (someParameter) {
        console.log(someParameter);
        // Remove modal content from page and store in $content
        var $content = $('#share-options').detach();
        var modal = new Modal();
        // Click handler calls open() method of modal object
        $('#share').on('click', function () {
            modal.open({
                content: $content,
                width: 340,
                height: 300
            });
        });
    })("ValuePassedIn");
    
});