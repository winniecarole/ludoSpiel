var btn=document.querySelector('button');


//addEventListener für button
btn.addEventListener('click',function(e){
    e.preventDefault();
    
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumber3 = Math.floor(Math.random() * 6) + 1;



var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "image/" + randomDiceImage; //images/dice1.png - images/dice6.png
var randomImageSource2 = "image/dice" + randomNumber2 + ".png";
var randomImageSource3="image/dice"+randomNumber3+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
document.querySelectorAll("img")[2].setAttribute("src",randomImageSource3);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Message für der Spieler der Gewinn
if (randomNumber1 > randomNumber2 && randomNumber1 >randomNumber3) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 3 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
});