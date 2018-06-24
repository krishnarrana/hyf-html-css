"use strict";
function Player(name,age,cards,winner){
	this.name=name,
	this.age=age,
	this.cards=cards,
	this.winner= winner
}

Player.prototype.findFrequency= function(){
	let k = 0, q = 0, j = 0, a = 0; 
    for(let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].value==="king"){
        k++;
      } else if (this.cards[i].value==="queen") {
        q++;
      } else if (this.cards[i].value==="jack") {
        j++;
      } else {
        a++;
      }
    }
    if(k>=q && k>=j && k>=a){
      return "king";
    }else if(q>=k && q>=j && q>=a){
      return "queen";
    }else if(j>=k && j>=q && j>=a ){
      return "jack";
    }else{
      return "ace"
    }
}

Player.prototype.checkForWin = function(){
	let k = 0, q = 0, j = 0, a = 0; 
	for(let i = 0; i < this.cards.length; i++) {
		if (this.cards[i].value==="king"){
			k++;
		} else if (this.cards[i].value==="queen") {
			q++;
		} else if (this.cards[i].value==="jack") {
			j++;
		} else {
			a++;
		}
	}
	if (k === 4 || q === 4 || j === 4 || a === 4) {
		this.winner = true;
	}
	return this.winner;
}