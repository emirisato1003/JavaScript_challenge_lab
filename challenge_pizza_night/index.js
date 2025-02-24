/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    // initialize some new variable to:
        // keep track of the current highest vote number
        let highVotes = 0;
        // keep track of the current winning item
        let winner = ""
        for(const item in obj){
            if(obj[item] > highVotes){
                highVotes = obj[item]
                winner = item;
            }
        }
        return `The winner is ${winner} with ${highVotes} votes!`
}

console.log(findTheWinner(gameNightFood));