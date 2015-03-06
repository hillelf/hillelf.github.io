(function () {
  var $chatIcon = $("#chat_launcher"),
      $overlay = $("#overlay"),
      $chatModal = $("#chat_modal"),
      $profilePic = $("#profile_pic"),
      $navDropDown = $("#drop_down_wrapper");

  //disabling all links
  $("a").not(".settings,.home").on("click", function (e) {
    e.preventDefault();
  });

  $chatIcon.on("click", function (e) {
    $overlay.fadeIn();
    $chatModal.fadeIn();
  });

  $overlay.on("click", function () {
    $overlay.fadeOut();
    $chatModal.fadeOut();
  });

  $profilePic.on("mouseenter", function (e) {
    $navDropDown.show();
  });

  $profilePic.on("mouseleave", function (e) {
    $navDropDown.hide();
  });

  $navDropDown.on("mouseenter", function (e) {
    $navDropDown.show();
  });

  $navDropDown.on("mouseleave", function (e) {
    $navDropDown.hide();
  });

}());
