/*
    This module is for keeping track of the state of the donut data.
*/

// Keep track of the state of the donuts here!
let donuts = []

const eventHub = document.querySelector(".container")

// I need a function that creates a new custom event and dispatches it to the eventHub
const updateDonutStateInApp = () => {
    // make a custom event to be dispatched
    // give that event a name (donutStateChanged)
    const donutStateChangedEvent = new CustomEvent("donutStateChanged", {
        detail: {
            content: null
        }
    })
    // SEND THAT MESSAGE OUT
    eventHub.dispatchEvent(donutStateChangedEvent)
}

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

// Function that POSTs new donuts to the donut API
export const createDonut = (donutObj) => {
    return fetch('http://localhost:8080/donuts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(donutObj)
    })
    .then(() => {
        getDonuts()
        console.log("yo im in the .then getting some donuts!!!")
    })
    .then(updateDonutStateInApp)
}