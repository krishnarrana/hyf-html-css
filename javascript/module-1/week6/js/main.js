"use strict";

// players Info
let player1= new Player("Krishna", 23, [], false);
let player2= new Player("Shyam", 23, [], false);
let player3= new Player("Vignesh", 23, [], false);
let player4= new Player("Joey", 23, [], false);
let players= [player1,player2,player3,player4];

// card Info
const cards= [
    new Card("king","hearts" ),
    new Card("king","clubs" ),
    new Card("king","diamonds" ),
    new Card("king","stars" ),

    new Card("queen","hearts" ),
    new Card("queen","clubs" ),
    new Card("queen","diamonds" ),
    new Card("queen","stars" ),

    new Card("jack","hearts" ),
    new Card("jack","clubs" ),
    new Card("jack","diamonds" ),
    new Card("jack","stars" ),

    new Card("ace","hearts" ),
    new Card("ace","clubs" ),
    new Card("ace","diamonds" ),
    new Card("ace","stars" )

 ];


var game= new Game(players,cards);
// game.distributeCard();

// game.players[0].findFrequency();

var distributeBtn= document.getElementById("distripute-card");
distributeBtn.addEventListener("click",function(){
    game.distributeCard();
    for(let i=0; i<game.players.length; i++){
    document.getElementById("player-"+(i+1)).innerHTML= displayPlayersCards(game.players[i]);
  }
});

var playBtn= document.getElementById("play-card");
playBtn.addEventListener("click",function(){
    game.play();
    for(let i=0; i<game.players.length; i++){
    document.getElementById("player-"+(i+1)).innerHTML= displayPlayersCards(game.players[i]);
  }
});


var playBtn= document.getElementById("reset");
reset.addEventListener("click",function(){
    game.reset();
    for(let i=0; i<game.players.length; i++){
    document.getElementById("player-"+(i+1)).innerHTML= displayPlayersCards(game.players[i]);
  }
});

// var player1= document.getElementById("player-1");
// var player2= document.getElementById("player-2");
// var player3= document.getElementById("player-3");
// var player4= document.getElementById("player-4");



function displayPlayersCards(player){
    let output=`<h2>${player.name}</h2>`;
    for(let i=0; i<player.cards.length; i++){
      output += `
                ${player.cards[i].value} ${player.cards[i].suit} <br>`
    }
    return output;
}





