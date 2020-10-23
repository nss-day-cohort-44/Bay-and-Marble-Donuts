/*
    This module turns donut objects into HTML representations of said donut objects
*/
export const DonutHTML = (singleDonutObject) => {
    return `
        <section class="donut__card">
            <h4 class="donut__name">${singleDonutObject.name}</h4>
            <p class="donut__glaze">Glaze: ${singleDonutObject.glaze}</p>
            <p class="donut__type">Type: ${singleDonutObject.type}</p>
            <p class="donut__flavor">Flavor: ${singleDonutObject.flavor}</p>
            <p class="donut__topping">Topping: ${singleDonutObject.topping}</p>
        </section>
    `
}