
// JavaScript

for (var i=0; i<5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click" function() {
    document.querySelector("h1").style.css = "purple";
  });
}


// jQuery.

$("button").click(function() {
  $("h1").css("color", "purple");
});


$(document).keypress(function(event) {
  $("h1").text(event.key);
});


$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

$("h1").on("click", function() {
   $("h1").hide();
});


$("button").on("click", function() {
   $("h1").toggle();
});

$("button").on("click", function() {
   $("h1").fadeOut();
});

$("button").on("click", function() {
   $("h1").fadeToggle();
});

$("button").on("click", function() {
   $("h1").slideUp();
});

$("button").on("click", function() {
   $("h1").slideToggle();
});

$("button").on("click", function() {
   $("h1").animate({opacity: 0.5});
});

$("button").on("click", function() {
   $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
