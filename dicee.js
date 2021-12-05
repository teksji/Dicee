function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
var dice1=getRandomInt(1,7);
var dice2=getRandomInt(1,7);
console.log("player1 " + dice1);
console.log("player2 " + dice2);

switch(dice1){
  case 1:
      document.getElementById("img1").src = "images/dice1.png";
     break;
  case 2:
      document.getElementById("img1").src = "images/dice2.png";
     break;
  case 3:
      document.getElementById("img1").src = "images/dice3.png";
     break;
  case 4:
      document.getElementById("img1").src = "images/dice4.png";
     break;
  case 5:
      document.getElementById("img1").src = "images/dice5.png";
     break;
  case 6:
      document.getElementById("img1").src = "images/dice6.png";
     break;
default: console.log(dice1);
}

switch(dice2){
  case 1:
      document.getElementById("img2").src= "images/dice1.png";
     break;
  case 2:
      document.getElementById("img2").src= "images/dice2.png";
     break;
  case 3:
      document.getElementById("img2").src= "images/dice3.png";
     break;
  case 4:
      document.getElementById("img2").src= "images/dice4.png";
     break;
  case 5:
      document.getElementById("img2").src= "images/dice5.png";
     break;
  case 6:
      document.getElementById("img2").src= "images/dice6.png";
     break;
default: console.log(dice2);
}
const header = document.getElementById("heading");
if (dice1>dice2){
  header.textContent = "WINNER: PLAYER 1";
}else if(dice2>dice1){
  header.textContent = "WINNER: PLAYER 2";
}else{
  header.textContent = "TIE!";
}
