var navButtons = document.querySelectorAll("nav ul li");
var image = document.getElementById("me-pic");
var state = 0;

// HANDLE SECTION CHANGE
navButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // HANDLE NAVBAR STYLE CHANGE
        let currButton = document.getElementsByClassName("text-selected")[0];
        currButton.classList.remove("text-selected");
        button.classList.add("text-selected");
        console.log(currButton);
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
        // image.classList.toggle("move-left");
        document.getElementById('')
    });
});