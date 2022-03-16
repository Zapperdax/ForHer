var noOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0 ; i< noOfDrums ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/i-love-you_1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/extreme_-_more_than_words_mp3cut.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/truly-deeply-love-you.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/youre-cute_lZHCRWW.mp3");
            tom4.play();
            break;
    }
}