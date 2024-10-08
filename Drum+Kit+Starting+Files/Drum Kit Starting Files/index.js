for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML; 
        makeSound(buttonInnerHTML);
        this.classList.add("pressed");
        setTimeout(function(){document.activeElement.classList.remove("pressed"); }, 200);
    })
}

document.addEventListener("keydown", function(event){
    var keyPressed = event.key.toLowerCase();
    makeSound(keyPressed);
    var drumElement = document.querySelector("." + keyPressed);
    drumElement.classList.add("pressed");
    setTimeout(function(){ drumElement.classList.remove("pressed"); }, 200);
})



function makeSound (key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}
