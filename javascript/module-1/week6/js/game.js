"use strict";
function Game(players, cards){
	this.players=players,
	this.cards= cards,
	this.win=false;
	this.winner={};
	this.activePlayer=0;
}

Game.prototype.distributeCard = function(){
	let newCards= this.cards.slice(); //copy new cards
	for(let i=0; i<this.players.length; i++){
		this.players[i].cards=[];
		this.players[i].winner=false;
	}
	this.activePlayer=0;
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
Game.prototype.askCardToEachOne= function(askingPlayer){
	let cardToAsk=this.players[askingPlayer].findFrequency();
	let oldLength=this.players[askingPlayer].cards.length;
	let nextPlayer=askingPlayer+1;
	for(let i=0; i<this.players.length;i++){
		if(nextPlayer>3){
			nextPlayer=0;
		}
		console.log(nextPlayer);
		if(this.players[nextPlayer]!= this.players[askingPlayer]){
			this.findCard(cardToAsk,this.players[askingPlayer],this.players[nextPlayer]);
		}
		
		if(oldLength!=this.players[askingPlayer].cards.length){
			return true;
			break;
		}
		nextPlayer++;
	}
	return false;
}
Game.prototype.play=function(){
	if(this.players[0].cards.length===0 && this.players[1].cards.length===0 && this.players[2].cards.length===0 && this.players[3].cards.length===0 ){
		alert("Please distribute card first");
		return false;
	}
	this.win=false;
	let step=1;
	while( step !=0 && !this.win){
		if(this.activePlayer >3){
			this.activePlayer=0;
		}
		step -=1;
		this.askCardToEachOne(this.activePlayer);
		this.win=this.players[this.activePlayer].checkForWin();
		if(this.win=== true){			
			this.winner=players[this.activePlayer];
			document.getElementById("winner-info").innerHTML= `
					<p class="title">Winner is ${this.players[this.activePlayer].name}</p>
					<p>Age ${this.players[this.activePlayer].age}</p>
					<p class="winningCard">Winning Cards: ${ showWiningCards(this.players[this.activePlayer])}</p>

				`;
			break;
		}
		this.activePlayer ++;
			// this.players.push(this.players[0]);
			// this.players.shift();
	}
	function showWiningCards(winningPlayer){
		var winningCard= winningPlayer.findFrequency();
		let winningCardCombination=``;
		for(let i=0; i<winningPlayer.cards.length; i++){
			if(winningPlayer.cards[i].value== winningCard){
				winningCardCombination +=`<p>${winningPlayer.cards[i].value } ${winningPlayer.cards[i].suit } </p>`;
			}
		}
		return winningCardCombination;
	}
}

Game.prototype.reset=function(){
	for(let i=0; i<this.players.length; i++){
		this.players[i].cards=[];
		this.players[i].winner=false;

	}
	this.win=false;
	this.activePlayer=0;
}