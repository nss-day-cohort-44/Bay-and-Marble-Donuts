/*
    This module is for keeping track of the state of the donut data.
*/

// Keep track of the state of the donuts here!
let donuts = []

// We need to export a copy of our data
export const useDonuts = () => {
    // this function copies our array of data
    return donuts.slice()
}

// We need to GET the data before we can use it:
export const getDonuts = () => {
    // fetching the data...
    return fetch("http://localhost:8080/donuts")
        // THEN turn the data (response) into a format that javascript understands (.json())
        .then(response => response.json())
        // THEN we can use our newly parsed donut data...
        .then(parsedDonuts => {
            // and set the state of the donuts (the array on line 5) to the donuts from the API (parsedDonuts)
            donuts = parsedDonuts
        })
}