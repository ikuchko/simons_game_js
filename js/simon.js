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
