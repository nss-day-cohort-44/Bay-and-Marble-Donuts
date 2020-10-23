/*
    This module turns the donut data into HTML (from Donut.js) puts all of the donuts in the selected element on the DOM
*/
import { getDonuts, useDonuts } from "./DonutDataProvider.js"
import { DonutHTML } from "./Donut.js"

const eventHub = document.querySelector(".container")

// needs to listen to the eventHub because it's waiting for fresh donuts in the donut state
eventHub.addEventListener("donutStateChanged", () => {
    // DO THE THING
    // re-render all the donuts! (put the fresh new donuts from the donut state on the DOM)
    populateDonutList()
})

// a function that gets exported so any module can execute it
export const populateDonutList = () => {
    // we have to GET our data and THEN we can use it on line 12
    getDonuts().then(() => {
        // store what useDonuts returns into a variable (the array of copied donut data)
        const donutsFromStateInProvider = useDonuts()
        // pass the donut data to the function that puts donuts on the DOM
        render(donutsFromStateInProvider)
    })
}

// the function that renders HTML to the DOM (puts HTML on the DOM)
const render = (arrayOfDonuts) => {
    // we need to know what html element to reference to put donuts in
    const donutContainer = document.querySelector(".donutContainer")
    // remove all traces of old HTML
    donutContainer.innerHTML = ""
    // starting the string to add all of the HTML to
    let buildDonutList = ""
    // loop through the array of donuts, 
    for (const singleDonut of arrayOfDonuts) {
        // and turn each donut object into an html representation of a donut AND adding the HTML to our buildDonutList string
        buildDonutList += DonutHTML(singleDonut)
    }

    // we need to put the list of donuts in the donutContainer
    donutContainer.innerHTML += `<div class="donut__list">${buildDonutList}</div>`
    console.log("GOOD JOB! 👍")
}