describe('Simon', function() {
  it("shows a list of colors that simon can play", function() {
    var testSimon = new Simon();
    expect(testSimon.canSay[0]).to.eql("yellow");
    expect(testSimon.simonSays).to.eql([]);
  });

  it("creates a new array of what simon plays, from the colors that he can play, in random order", function() {
    var testSimon = new Simon();
    testSimon.addColor();
    expect(testSimon.simonSays.length).to.equal(1);
  });

});
