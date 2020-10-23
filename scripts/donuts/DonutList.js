/*
    This module turns the donut data into HTML (from Donut.js) puts all of the donuts in the selected element on the DOM
*/
import { useDonuts } from "./DonutDataProvider.js"
import { DonutHTML } from "./Donut.js"

// a function that gets exported so main.js can execute it
export const populateDonutList = () => {
    // we need to know what html element to reference to put donuts in
    const donutContainer = document.querySelector(".donutContainer")
    // store what useDonuts returns into a variable (the array of copied donuts)
    const arrayOfDonuts = useDonuts()

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


