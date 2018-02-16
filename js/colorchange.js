$(document).ready(function() {
      var colors = ["#FFFF00", "#00FF00", "#FF00FF", "#FF0000","#FD5F00"];
      var rand = Math.floor(Math.random() * colors.length);
      $('body').css("background-color", colors[rand]);
      $('boutonprint').css("color", colors[rand]);
});
