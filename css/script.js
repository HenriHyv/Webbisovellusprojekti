// script.js
document.addEventListener("DOMContentLoaded", function() {
    var aboutHeader = document.getElementById("about");
    var aboutParagraph = document.getElementById("about-p");

    aboutHeader.addEventListener("click", function() {
        if (aboutParagraph.style.display === "none" || aboutParagraph.style.display === "") {
            aboutParagraph.style.display = "block";
        } else {
            aboutParagraph.style.display = "none";
        }
    });
});
