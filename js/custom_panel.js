$(document).ready(function () {
  $("#tabContainer").tabs({
    show: "fadeIn",
    hide: "fadeOut",
  });
  var hash = location.hash;
  if (hash) {
    $("#tabContainer").tabs("load", hash);
  }
});
