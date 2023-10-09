document.addEventListener('DOMContentLoaded', function() {
    let isOldDataDisplayed = true; // Flag to track the current state

    // vanha teksti takaisin
    const oldText = `
        Hello, my name is Henri, I'm currently a second-year computer science student from Oulu. <br> 
        I'm orienting myself currently into software development, and I wish to specialize myself into web/back-end development.
    `;

    function fetchData() {
        fetch('text/data.txt')
            .then(response => response.text())
            .then(data => {
                if (isOldDataDisplayed) {
                    // Display fetched data
                    const lines = data.split('\n');
                    const formattedData = {};

                    // Parse the lines into key-value pairs
                    lines.forEach(line => {
                        const [key, value] = line.split(': ');
                        if (key && value) {
                            formattedData[key] = value;
                        }
                    });

                    // Update the content of the 'about-p' paragraph with fetched data
                    const aboutParagraph = document.getElementById('about-p');
                    aboutParagraph.innerHTML = `<p>${formattedData['Name']}<br>${formattedData['Description']}</p>`;
                } else {
                    // Revert to old text
                    const aboutParagraph = document.getElementById('about-p');
                    aboutParagraph.innerHTML = oldText;
                }

                // Toggle the flag to switch between old text and fetched data
                isOldDataDisplayed = !isOldDataDisplayed;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Add an event listener to the button to trigger fetching data when clicked
    document.getElementById('loadButton').addEventListener('click', fetchData);
});

