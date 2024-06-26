var navButtons = document.querySelectorAll("nav ul li");
var image = document.getElementById("me-pic");
var state = 0;

// HOME SECTION
var nameholder = document.querySelector('.nameholder-container');
var bioholder = document.querySelector('.bioholder-container');
var biotext = document.querySelector('.bioholder');
var homeSection = document.getElementById("home");

// PROJECT SECTION
var projectSection = document.getElementById("projects");
var projectCards = document.querySelectorAll(".card-container");
console.log(projectCards);
// HANDLE SECTION CHANGE
navButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // HANDLE NAVBAR STYLE CHANGE
        let currButton = document.getElementsByClassName("text-selected")[0];
        currButton.classList.remove("text-selected");
        button.classList.add("text-selected");
        // HANDLE STATE CHANGE
        let prevState = state;
        switch(button.id) {
            case "home-button":
                state = 0;
                break;
            case "about-button":
                state = 1;
                break;
        }
        // HOME TO ABOUT
        if (prevState == 0 && state == 1) {
            nameholder.classList.add('compress-nameholder');
            bioholder.classList.add('expand-bioholder');
            biotext.classList.add('expand-biotext');

            nameholder.classList.remove('expand-nameholder');
            bioholder.classList.remove('compress-bioholder');
            biotext.classList.remove('compress-biotext');
            nameholder.style.width = '0';
        } 
        // ABOUT TO HOME
        else if (prevState == 1 && state == 0) {
            nameholder.classList.add('expand-nameholder');
            bioholder.classList.add('compress-bioholder');
            biotext.classList.add('compress-biotext');
            
            nameholder.classList.remove('compress-nameholder');
            bioholder.classList.remove('expand-bioholder');
            biotext.classList.remove('expand-biotext');
        }
    });
});

// HANDLE CARD FLIP
projectCards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.children[0].classList.toggle('card-flip');
        card.children[1].classList.toggle('card-flipback');
    });
});