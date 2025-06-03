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

// Call the functions
currentyear();
lastmodified();