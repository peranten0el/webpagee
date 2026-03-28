document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("welcomeBtn");
    const text = document.getElementById("welcomeText");

    if (button && text) {
        button.addEventListener("click", function() {
            text.innerHTML = "Hi! I'm Noel G. Perante. Thanks for visiting my page.";
        });
    }
});
