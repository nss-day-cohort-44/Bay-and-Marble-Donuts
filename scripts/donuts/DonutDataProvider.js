/*
    This module is for storing our array of donut data and supplying a copy of our data to the rest of the app
*/

const donuts = [
    {
        name: "Chocoholic",
        glaze: "Chocolate",
        type: "Cronut",
        flavor: "Chocolate",
        topping: "Chocolate Sprinkles"
    },
    {
        name: "Strawberry",
        glaze: "Strawberry",
        type: "Cronut",
        flavor: "Strawberry",
        topping: "Rainbow Sprinkles"
    },
    {
        name: "Red Velvet Cake",
        glaze: "Plain",
        type: "Cake",
        flavor: "Read Velvet",
        topping: "Red Velvet cake crumbs"
    }
]

// We need to export a copy of our data
export const useDonuts = () => {
    // this function copies our array of data
    return donuts.slice()
}