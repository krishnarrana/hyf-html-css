"use strict";
function Game(players, cards){
	this.players=players,
	this.cards= cards,
	this.win=false;
	this.winner={};
}

Game.prototype.distributeCard = function(){
	let newCards= this.cards.slice(); //copy new cards
	for(let i=0; i<this.players.length; i++){
		this.players[i].cards=[];
		this.players[i].winner=false;
	}
	for(let i=0; i<this.players.length; i++){
		for(let j=0;j<4;j++){
			let randomNumber=Math.floor(Math.random()*newCards.length) ; // creats random cards
			this.players[i].cards.push(newCards[randomNumber]); // add random cards 
			newCards.splice(randomNumber,1); // remove random card form newCards
		}
	}
}

Game.prototype.findCard=function(card, lookingPlayer,givingPlayer ){
	for(let i=0; i<givingPlayer.cards.length; i++){
		if(card=== givingPlayer.cards[i].value){
			let newCard= givingPlayer.cards[i];
			lookingPlayer.cards.push(newCard);
			givingPlayer.cards.splice(i,1);
			return true;
			break;
		}

	}
	return false;		

}
Game.prototype.askCardToEachOne= function(){
	let cardToAsk=this.players[0].findFrequency();
	let oldLength=this.players[0].cards.length;
	for(let i=0; i<this.players.length-1;i++){
		this.findCard(cardToAsk,this.players[0],this.players[i+1]);
		if(oldLength!=this.players[0].cards.length){
			console.log("hello")
			return true;
			break;
		}
	}
	return false;
}
Game.prototype.play=function(){
	if(this.players[0].cards.length===0 && this.players[1].cards.length===0 && this.players[2].cards.length===0 && this.players[3].cards.length===0 ){
		return false;
	}
	this.win=false;
	let step=1;
	while(step!=0 && !this.win){
		step -=1;
			this.askCardToEachOne();
			this.win=this.players[0].checkForWin();
			if(this.win=== true){
				console.log("Winner is ", this.players[0].name);
				console.log("game",this)
				this.winner=this.players[0];
				break;
			}
			this.players.push(this.players[0]);
			this.players.shift();
	}
}

Game.prototype.reset=function(){
	for(let i=0; i<this.players.length; i++){
		this.players[i].cards=[];
		this.players[i].winner=false;
	}
	this.win=false;
}