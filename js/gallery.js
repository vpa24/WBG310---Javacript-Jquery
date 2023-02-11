$(document).ready(function () {
  var places_name = [
    "Halong Bay – Bay of Descending Dragons",
    "Son Tra Peninsula",
    "Phu Quoc Island",
    "Tram Ton Pass",
    "Mekong Delta",
    "Phong Nha-Ke Bang National Park",
    "Ghenh Da Dia",
  ];
  var oldIndex, index;
  $("#gallery img").click(function () {
    index = $(this).index();
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    var imgPath = $(this).attr("src");
    var largeImgPath = imgPath.replace("small", "large");
    var newElement = `<div class="slideshow_${index}">
		<h2>${places_name[index]}</h2><img src="${largeImgPath}" />
	</div>`;
    $(newElement).hide();
    $("#photo").prepend(newElement);
    $("#photo .slideshow_" + index).fadeIn(1000);
    if (oldIndex != undefined && oldIndex != index) {
      $(".slideshow_" + oldIndex).fadeOut(1000, function () {
        $(this).remove();
      });
    }
    oldIndex = index;
  });
  $("#gallery img:first").click();
}); // end ready
