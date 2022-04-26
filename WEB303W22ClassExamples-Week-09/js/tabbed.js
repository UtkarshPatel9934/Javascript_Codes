$(function () {

    // $('.tab-list .tab-control').on('click', function (e) {
    //     e.preventDefault();
    //     var id = $(this)[0].hash;
    //     console.log("this is actually: ", $(this));
    //     console.log("new id is: ", id);
    //     $('.tab-list .tab-control').parent('.active').removeClass("active");
    //     $(this).parent().addClass("active");

    //     $('.tab-panel.active').removeClass("active");
    //     $(id).addClass("active");
    // });


  $(".tab-list").each(function () {
    // Find lists of tabs
    var $this = $(this); // Store this list
    var $tab = $this.find("li.active"); // Get the active li
    var $link = $tab.find("a"); // Get its link
    var $panel = $($link.attr("href")); // Get active panel
    $this.on("click", ".tab-control", function (e) {
      // Click tab
      e.preventDefault(); // Prevent link
      var $link = $(this); // Store current link
      var id = this.hash; // Get clicked tab
      if (id && !$link.parent().is(".active")) {
        // If not active
        $panel.removeClass("active"); // Make panel and
        $tab.removeClass("active"); // tab inactive
        $panel = $(id).addClass("active"); // Make new panel and
        $tab = $link.parent().addClass("active"); // tab active
      }
    });
  });
});
