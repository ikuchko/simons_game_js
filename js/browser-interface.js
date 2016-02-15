var pingPong = require('./../js/ping-pong.js').pingPong;

$(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var goal = $("#goal").val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
