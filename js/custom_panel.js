$(document).ready(function () {
  $("#tabContainer").tabs({
    show: "fadeIn",
    hide: "fadeOut",
    activate: function (event, ui) {
      console.log(ui);
      const awesome_boder = $(".awesome-border");
      console.log();
      // if that card has no colours, add some
      // if (!awesome_boder.css(`--color`)) {
      awesome_boder.css(`--color1`, `hsl(${Math.random() * 360}, 100%, 50%)`);
      awesome_boder.css(`--color2`, `hsl(${Math.random() * 360}, 100%, 50%)`);

      // card.style.setProperty(
      //   `--color2`,
      //   `hsl(${Math.random() * 360}, 100%, 50%)`
      // );
      // }
    },
  });
  var hash = location.hash;
  if (hash) {
    $("#tabContainer").tabs("load", hash);
  }
});
