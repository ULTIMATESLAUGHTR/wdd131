// This is for getting the last modified date of the current file
const lastModified = new Date(document.lastModified);

// Format the date as "Day, Month Date, Year"
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString(undefined, options);

// Display the formatted date
console.log(`This file was last modified on: ${formattedDate}`);