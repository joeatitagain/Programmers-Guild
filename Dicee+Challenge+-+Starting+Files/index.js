var randomNumber1 = Math.floor(Math.random()*6+1);
var src = "./images/dice" + randomNumber1 + ".png";
document.getElementById("img1").setAttribute("src", src);

var randomNumber2 = Math.floor(Math.random()*6+1);
var src = "./images/dice" + randomNumber2 + ".png";
document.getElementById("img2").setAttribute("src", src);


if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player1 wins 🎉"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player2 wins 🎉"
}