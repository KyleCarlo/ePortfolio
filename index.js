var navButtons = document.querySelectorAll("nav ul li");
var image = document.getElementById("me-pic");
var state = 0;
var nameholder = document.querySelector('.nameholder-container');
var bioholder = document.querySelector('.bioholder');

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
            case "projects-button":
                state = 2;
                break;
            case "career-button":
                state = 3;
                break;
        }
        // HOME TO ABOUT
        if (prevState == 0 && state == 1) {
            nameholder.classList.add('compress-nameholder');
            bioholder.classList.add('expand-bioholder');
            // setTimeout(() => {
                nameholder.classList.remove('expand-nameholder');
                bioholder.classList.remove('compress-bioholder');
            // }, 1000);
        } 
        // ABOUT TO HOME
        else if (prevState == 1 && state == 0) {
            nameholder.classList.add('expand-nameholder');
            bioholder.classList.add('compress-bioholder');
            // setTimeout(() => {
                nameholder.classList.remove('compress-nameholder');
                bioholder.classList.remove('expand-bioholder');
            // }, 1000);
        }
        // else if ()
    });
});