/*
    This module turns donut objects into HTML representations of said donut objects
*/
export const DonutHTML = (singleDonutObject) => {
    return `
        <section class="donut__card">
            <p>Name: ${singleDonutObject.name}</p>
            <p>Glaze: ${singleDonutObject.glaze}</p>
            <p>Type: ${singleDonutObject.type}</p>
            <p>Flavor: ${singleDonutObject.flavor}</p>
            <p>Topping: ${singleDonutObject.topping}</p>
        </section>
    `
}