var SideScroller = SideScroller || {};

SideScroller.MainMenu = function(){};

SideScroller.MainMenu.prototype = {
  create: function() {
  	//show the space tile, repeated
    //this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
    
    //give it speed in x
    //this.background.autoScroll(-20, 0);

	//title text
    var text = "WORLD RUN";
    var style = { font: "40px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/4, text, style);
    t.anchor.set(0.5);
	
	
    //start game text
    var text2 = "Tap to begin";
    var style2 = { font: "30px Arial", fill: "#000", align: "center" };
    var t2 = this.game.add.text(this.game.width/2, this.game.height/1.333333, text2, style2);
    t2.anchor.set(0.5);

    //highest score
    //text = "Highest score: "+this.highestScore;
    //style = { font: "15px Arial", fill: "#fff", align: "center" };
  
    //var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    //h.anchor.set(0.5);
  },
  update: function() {
    if(this.input.activePointer.justPressed()) {
      this.state.start('Game');
    }
  }
};
