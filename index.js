// Taking all the things with button tag in a buttonClick variable
var buttonClick = document.querySelectorAll("button");

// Traverse over all buttons and adding, addEventListener func to them as whenever it got click played a desired sound
// accessing its innerHTML using "this" keyword

for(var i=0;i<buttonClick.length;i++) {
    buttonClick[i].addEventListener("click", function () {
        var but=this.innerHTML;
        makeSound(but);  //Adding sound when button is clicked
        buttonAnimation(but);
    });
}

// Adding sound using keyboard... by feayure keypress
// Taking attribute as event/e (anything), will get element which trigger the addEventListener func. 
document.addEventListener("keypress", function(event) {
    makeSound(event.key); //event.key gives only the key which pressed
    buttonAnimation(event.key);
});



// Sound selection is done by using switch statement 
// Audio var is created as (new Audio("file name")) and var.play() to play sound.
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}


// Adding Animation in button 
function buttonAnimation(key) {
    var currButton=document.querySelector("."+key);
    
    // Added pressed class in currButton (pressed class is defined and styled in CSS)
    currButton.classList.add("pressed");

    // Removing pressed class using setTimeout which help to remove after some time, here 100milisecond
    setTimeout( function() {
        currButton.classList.remove("pressed");
    }, 100);
}
