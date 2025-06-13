//Hamburger Menu Button
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const nav = document.getElementById("main-nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});
// Function to display the current year
function currentyear() {
    const currentYear = new Date().getFullYear(); // Get the current year
    document.getElementById('currentyear').textContent = `${currentYear}`;
    return currentYear; // Return the current year if needed elsewhere
}

// Function to display the last modified date of index.html
function lastmodified() {
    const lastModified = new Date(document.lastModified); // Get the last modified date
    document.getElementById('lastModified').textContent = `${lastModified}`;
    return lastModified; // Return the last modified date if needed elsewhere
}

//Function for the Source Toggle Button
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-sources");
    const sourceList = document.querySelector(".hyperlink-list");

    toggleButton.addEventListener("click", function() {
        if (sourceList.style.display === "none" || sourceList.style.display === "") {
            sourceList.style.display = "block";
            toggleButton.textContent = "Hide Sources";
        } else {
            sourceList.style.display = "none";
            toggleButton.textContent = "Show Sources";
        }
    });
});

// Call the functions
currentyear();
lastmodified();