$(document).ready(function () {
  var places = [
    {
      name: "Halong Bay – Bay of Descending Dragons",
      link: "https://en.wikipedia.org/wiki/H%E1%BA%A1_Long_Bay",
    },
    {
      name: "Son Tra Peninsula",
      link: "https://en.wikipedia.org/wiki/S%C6%A1n_Tr%C3%A0_Mountain",
    },
    {
      name: "Phu Quoc Island",
      link: "https://en.wikipedia.org/wiki/Ph%C3%BA_Qu%E1%BB%91c",
    },
    {
      name: "Mekong Delta",
      link: "https://en.wikipedia.org/wiki/Mekong_Delta",
    },
    {
      name: "Tram Ton Pass",
      link: "https://localvietnam.com/blog/tram-ton-pass/",
    },
  ];
  var oldIndex, index;
  $("#gallery img").click(function () {
    index = $(this).index();
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    var imgPath = $(this).attr("src");
    var largeImgPath = imgPath.replace("small", "large");
    var newElement = `<div class="slideshow_${index}">
		<h2><a href=${places[index]["link"]}>${places[index]["name"]}</a></h2><img src="${largeImgPath}" />
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
