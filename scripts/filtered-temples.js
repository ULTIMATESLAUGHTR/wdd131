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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, March, 13",
    area: 10000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/396dd44dcb8c55b10150bae7f3916389465acc0d/full/1920%2C/0/default.jpg"
    },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2022, December, 20",
    area: 10000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/3eee67fcff0e11ed95c2eeeeac1ec709d59302b7/full/1920%2C/0/default.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/04d0f7f577ff089808b71b864e1f58b2e877a124/full/640%2C/0/default.jpg"
  }
];

// Helper to get year from dedicated string
function getYear(dedicated) {
    return parseInt(dedicated.split(",")[0], 10);
}

// Function to render the Temple Cards
function renderTemples(templeList) {
    const grid = document.getElementById("templeAlbumGrid");
    grid.innerHTML = ""; // Clear any existing content

    templeList.forEach(temple => {
        const card = document.createElement("section");
        card.className = "temple-card";

        // Image with lazy loading
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        img.className = "temple-image";

        // Name of the TEmple
        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        // Location of the Temple
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        // Dedication Date
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        // Area in Square Feet
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        // Add all elements to the Temple Card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        // How to Add the Temple Card to the HTML Grid
        grid.appendChild(card);
    });
}

// Initial render (All temples View)
document.addEventListener("DOMContentLoaded", () => {
    renderTemples(temples);

    // Nav link event listeners
    document.querySelector('.nav-list').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const text = e.target.textContent.trim();

            if (text === "Home") {
                renderTemples(temples);
            } else if (text === "Old") {
                renderTemples(temples.filter(t => getYear(t.dedicated) < 1900));
            } else if (text === "New") {
                renderTemples(temples.filter(t => getYear(t.dedicated) > 2000));
            } else if (text === "Large") {
                renderTemples(temples.filter(t => t.area >= 100000));
            } else if (text === "Medium") {
                renderTemples(temples.filter(t => t.area >= 10000 && t.area < 100000));
            } else if (text === "Small") {
                renderTemples(temples.filter(t => t.area < 10000));
            }
        }
    });
});

// Call the functions
currentyear();
lastmodified();