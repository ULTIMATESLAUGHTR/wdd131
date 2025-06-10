//Product List for Review Form
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
// This sets up the Array of products to be used in the review form.
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("products");
    if (productSelect && Array.isArray(products)) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
});

// Increment review counter on review.html load
document.addEventListener("DOMContentLoaded", () => {
    // Check if user is currently on review.html
    if (window.location.pathname.endsWith("review.html")) {
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount += 1;
        localStorage.setItem("reviewCount", reviewCount);

        // Display the counter of reviews received on the pag
        const counterDisplay = document.getElementById("reviewCounter");
        if (counterDisplay) {
            counterDisplay.textContent = `Thank you for submitting your review! We now have ${reviewCount} review(s).`;
        }
    }
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