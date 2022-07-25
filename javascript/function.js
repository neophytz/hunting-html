/**
 *  definition of function
 * -> a block of code, that  is designed to execute a specific task.
*/

//! DRY - Do not repeat yourself.

// decision making or computation will be needed in future.

// using function that will do the computation and we can call that function.

//! syntax
/**
 * 1. ES 5
 * 2. ES 6
 * 3. short form.
*/

// syntax 1 - we are defining a function here. and not using it. 
// function name_of_function(){
//     // write your custom logic here.
//     console.log('hello shobhan');
// }

// how to use / call a function
// name_of_function()


// example
// parameter - values or data a function needs to perform its computations
function calculateSquare(num){
    return num**2;
}

// const result = calculateSquare();
// console.log(result);
// console.log(calculateSquare(4));
// console.log(calculateSquare(6));
// console.log(calculateSquare(5));

// is prime 

// function printSomething(name){
//     console.log('dance');
//     console.log(name, ' is a smart person');
//     console.log(name, ' is also ____ sometimes');
//     return;
//     console.log(name, ' has good heart');
// }

// printSomething('Naam');
// console.log('something here');

function isPrime(num) {
    let isPrime = true;
    if (num === 1) {
        console.log("1 is neither prime nor composite num.");
    }
    // check if num is greater than 1
    else if (num > 1) {
        // looping through 2 to num-1
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is a not prime number`);
        }
    }
    else {
        console.log("The num is not a prime num.");
    }
}

// isPrime(3);
// isPrime(5);
// isPrime(8);



// const name = window.prompt("please enter your name");
// const _age = window.prompt('Age please?');
// if(name !== exception && _age >= LEGAL_DRINKING_AGE) {
//     console.log("you are allowed to drink in morocco");
// } else if(name === exception) {
//     console.log('you are VVVIP');
// } else {
//     console.log('chale jaaa ____')
// }




// syntax to be used. or modern syntax

// arrow function.

const name_of_function = (name) => {
    console.log('here comes the second one');
    return `hello ${name} from console log`;
}

console.log('hello',name, 'from console log', a, age, salary);
console.log(`hello ${name} from console log ${a} ${age} ${salary}`)

const DEFAULT_NAME = (name = 'sachin') => {
    console.log("I'm getting executed first")
    return name;
}

console.log(name_of_function(DEFAULT_NAME('roy')));


const check = (name) => {
    console.log(name);
    // if no return; default return  value is undefined.
}

const retVal = check('sachin');
console.log(retVal);