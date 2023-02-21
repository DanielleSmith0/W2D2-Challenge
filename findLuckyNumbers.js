// Write your code below this line.
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// Make a for loop, since the number of runs depends on the input, n.

// Use math.random

function luckyNumbers(n) {
    let answer = []

    while (answer.length < n){
        let randNum = Math.floor(Math.random() * 10 + 1);
        // console.log(answer) You will see this is inefficient, becuase it has to loop so many times before getting the right number.
        
        if (!answer.includes(randNum)) {
            answer.push(randNum);
        } 
    }
    return answer
}

let myArr = luckyNumbers(10);

console.log(myArr);