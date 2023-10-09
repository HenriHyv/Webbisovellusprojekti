document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loadButton").addEventListener("click", function () {
        console.log("Button clicked!");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/info.php", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    var contentDiv = document.getElementById("content");
                    contentDiv.innerHTML = "<h2>" + data.name + "</h2><p>" + data.description + "</p>";
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    console.log("Response Text:", xhr.responseText);
                    console.log("Data:", data);
                    console.log("Content Div:", contentDiv);
                }
            }
        };
        xhr.send(); // You were missing this line to actually send the request
    });

});
