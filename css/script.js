document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle visibility based on ID
    function toggleSectionVisibility(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    }
  
    // Add click event listeners for each section
    document.getElementById("about").addEventListener("click", function() {
        toggleSectionVisibility("about-p");
    });

    document.getElementById("portfolio").addEventListener("click", function() {
        toggleSectionVisibility("portfolio-p");
    });
    document.getElementById("Contact").addEventListener("click", function() {
        toggleSectionVisibility("contact-container");
    });
   
    });


