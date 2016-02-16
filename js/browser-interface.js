var Simon = require('./../js/simon.js').Simon;

var simonFunction = function(color) {
  $("#" + color).css("background-color", "rgba(0, 0, 0, 0)");
  setTimeout(function(){ $("#" + color).css("background-color", color); }, 1000);
}

$(function() {
  var simon = new Simon();
  // each time the sequence gets longer, it becomes slightly faster
  $("#start").click(function() {
      simon.addColor();
      $("#" + simon.simonSays[0]).css("background-color", "rgba(0, 0, 0, 0)");
      setTimeout(function(){ $("#" + simon.simonSays[0]).css("background-color", simon.simonSays[0]); }, 300);
      $("#start").unbind("click");
  });

    var userGuess = 0;
    var isGameOver = true;
    for (var i in simon.canSay) {
      $("#" + simon.canSay[i]).click(function(event) {
        if (simon.simonSays[userGuess] === event.target.id) {
          if (simon.simonSays.length - 1 === userGuess) {
            simon.addColor();
            for (var i in simon.simonSays) {
              // debugger;
              setTimeout(function(){simonFunction(simon.simonSays[i]); }, 500 * (i));
              userGuess = 0;
            }
          } else {
            userGuess += 1;
          }
        } else {
          console.log("I didn't say 'Simon Says!!'")
        }
      });
    }
//     $("#red").click(function() {
//       if (simon.simonSays[userGuess] === "red") {
//         userGuess += 1;
//       } else {
//         isGameOver = false;
//       }
//     });
//     $("#blue").click(function() {
//       if (simon.simonSays[userGuess] === "blue") {
//         userGuess += 1;
//       } else {
//         isGameOver = false;
//       }
//     });
//     $("#green").click(function() {
//       if (simon.simonSays[userGuess] === "green") {
//         userGuess += 1;
//       } else {
//         isGameOver = false;
//       }
//     });
//   if (userGuess === simon.simonSays.length) {
//     simon.addColor();
//     for (var i in simon.simonSays) {
//       $("#" + simon.simonSays[i]).css("background-color", "rgba(0, 0, 0, 0)");
//       setInterval(function(){ $("#" + simon.simonSays[i]).css("background-color", simon.simonSays[i]); }, 300);
//       userGuess = 0;
//     }
//   }
//
// } while (!isGameOver);


});

// It will start with one color in the array and add on a new color each time the user gets the sequence right.



// It will compare the color the user clicks with an element in simon's array
