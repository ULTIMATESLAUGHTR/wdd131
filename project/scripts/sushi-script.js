// Selections Array localStorage Saving and Loading
const selections = ["News", "I Have a Question"];

// Save selections to localStorage
localStorage.setItem('selections', JSON.stringify(selections));

// Load selections from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const storedSelections = localStorage.getItem('selections');
    if (storedSelections) {
        const loadedSelections = JSON.parse(storedSelections);
        console.log('Loaded selections:', loadedSelections);
        // This will populate the form or use the loaded selections as needed
    }
});

//Selections List for Newsletter/Question Form on modern-sushi.html
const selectionOptions = [
  {
    id: "News",
    name: "Sign up for the Newsletter",
  },
  {
    id: "I Have a Question",
    name: "I Have a Question"
  }

];
// This sets up the Array of options to be used in the form.
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("selections");
    if (productSelect && Array.isArray(selectionOptions)) {
        selectionOptions.forEach(selection => {
            const option = document.createElement("option");
            option.value = selection.name;
            option.textContent = selection.name;
            productSelect.appendChild(option);
        });
    }
});

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

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".sushi-carousel .carousel-slide");
    const prevBtn = document.querySelector(".sushi-carousel .carousel-btn.prev");
    const nextBtn = document.querySelector(".sushi-carousel .carousel-btn.next");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    prevBtn.addEventListener("click", function() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    nextBtn.addEventListener("click", function() {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    showSlide(current); // Show the first slide on load
});
// Call the functions
currentyear();
lastmodified();