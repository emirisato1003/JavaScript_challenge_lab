import { products } from './data.js';

/*
It's the day after Halloween 🎃 and all the candy is on sale!

To buy up all the candy, use map() and filter() to put all the
candy into a `shoppingCart` array. 

The new array should contain only the item and the price, like
this: 

Expected output: 
[
    {item: "🍭", price: 2.99},
    {item: "🍫", price: 1.99}, 
    {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data, type) {
    return data.filter(item => item.type === type)
        .map(({ item, price }) => {
            return { item, price };
        });
};
const shoppingCart = getSaleItems(products, "sweet");
console.log(shoppingCart);