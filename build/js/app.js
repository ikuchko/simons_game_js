(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
// shows a list of colors that simon can play
  this.canSay = ["yellow", "red", "green", "blue"];
  this.simonSays = [];
};

// creates a new array of what simon plays, from the colors that he can play, in random order.
Simon.prototype.addColor = function() {
  this.simonSays.push(this.canSay[Math.floor(Math.random() * 4)]);
}

exports.Simon = Simon;

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
