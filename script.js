
$("h1").css("color", "purple");

$("button").click(function() {
  $("h1").slideToggle();
});

$("input").keydown(function(event) {
  $("h1").text(event.key);
});
