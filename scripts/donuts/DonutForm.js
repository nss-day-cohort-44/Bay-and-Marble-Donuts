/*
    This module is responsible for rendering the form to create new donuts
    (rendering === putting the form on the DOM)
*/

const contentTarget = document.querySelector(".formContainer")

// Function whose sole purpose is to render the form for adding donuts.
// We export THIS function so nobody can access the real render()
export const makeDonutForm = () => {
    console.log("Will my donut form show?")
    // invoke the function that adds the form to the DOM
    render()
}

// Function that puts the HTML for the donut form on the DOM
const render = () => {
    console.log("Yes! here is the donut form!")
    contentTarget.innerHTML = `
    <h3>Create a new Donut! 😊</h3>
            <form action="" class="donutForm">
                <fieldset>
                    <label for="name">Name:</label>
                    <input type="text" id="donutName" placeholder="Name your donut!">
                </fieldset>
                <fieldset>
                    <label for="glaze">Glaze:</label>
                    <input type="text" id="donutGlaze" placeholder="Glaze?">
                </fieldset>
                <fieldset>
                    <label for="type">Type:</label>
                    <input type="text" id="donutType" placeholder="Dough Type?">
                </fieldset>
                <fieldset>
                    <label for="flavor">Flavor:</label>
                    <input type="text" id="donutFlavor" placeholder="Flavor of the dough?">
                </fieldset>
                <fieldset>
                    <label for="topping">Topping:</label>
                    <input type="text" id="donutTopping" placeholder="Topping!">
                </fieldset>
            </form>
            <div class="btnContainer">
                <button>Create Donut!</button>
            </div>
    `
}