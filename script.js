document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("welcomeBtn");
    const welcome = document.getElementById("welcomeText");

    if (button && welcome) {
        button.addEventListener("click", function() {
            welcome.innerHTML = "Hi! I'm Noel G. Perante. Thanks for visiting my page.";
        });
    }
});
