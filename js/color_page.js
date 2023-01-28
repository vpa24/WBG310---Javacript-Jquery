$(function () {
  var chosedColor = "";
  $(".color_description .d-flex").hide();
  $(".color-list li").each(function () {
    $(this).click(function () {
      var color = this.className;
      $(`.color_description .select_${color} h2`).css("color", `black`);
      // animate when choose color
      if (chosedColor != "") {
        $(`.${chosedColor}`).animate(
          {
            top: "0px",
          },
          300,
          "easeInQuart"
        );
      }
      chosedColor = color;
      $(`.${color}`)
        .animate(
          {
            top: "-30px",
          },
          400,
          "easeInSine"
        )
        .effect("bounce", { times: 5 }, "slow");
      // slide up & slide down
      $(".color_description .d-flex").slideUp(1000);
      $(`.color_description .select_${color}`).slideDown(1000);
      // change title color
      setTimeout(() => {
        $(`.color_description .select_${color} h2`)
          .css("color", `${color}`)
          .fadeIn("slow");
      }, 1000);
    });
  });
});
