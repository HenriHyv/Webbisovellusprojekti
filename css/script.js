document.addEventListener("DOMContentLoaded", function() {
    
    function showPopup() {
        alert("This website is part of my Web application course. This is not professional work!");
    }
        setTimeout(showPopup, 1000);
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
function openPopup() {
    document.getElementById('contact-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
}



