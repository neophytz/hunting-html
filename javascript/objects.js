// everything in js is an object?

// primitive data
// -> foundational or basic

// Object

// let 

const user = {
    name: 'sachin',
    age: 2,
    gender: 'Male',
    address: {
        line1: 'DTU',
        line2: 'Rohini',
        state: 'Delhi',
        pincode: 110042,
        geolocation: {
            lat: 1281902381,
            long: 1238790238
        }
    },
    height: 173,
    getName: function() {
        return this.name + ' ' + this.gender;
    }
}

// using . operator
// console.log(user.name);
// console.log(user.getName());

// important
// console.log(user['height']);
// console.log(user['address']['pincode']);

// dynamic method
const attribute_name = 'height';
// console.log(user[attribute_name]);

// loop

// print table of 2
// console.log(2*1); 
// console.log(2*2); 
// console.log(2*3); 
// console.log(2*4); 
// console.log(2*5); 
// console.log(2*6); 
// console.log(2*7); 
// console.log(2*8); 
// console.log(2*9); 
// console.log(2*10);


/**---- loops ----**/
// for
// do while
// while

// for(let i = 6; i <= 5; i++){
//     console.log(i);
// }


// let j = 6;
// do {
//     console.log(j);
//     j++;
// } while(j <= 5);


// let k = 1; // initialisation
// while (k <= 10) { // condition
//     console.log(k);
//     k+=2; // updation
// }



//** using for loop for objects */

const beautiful_girl = "oumaima nakrimi";
// const arr = ['sachhin', 'shivansh', 'vasnh', 'tanu', 'kanchan', 'omi', 'roy'];
// for(let i = 0; i< beautiful_girl.length; i++){
//     console.log(i, beautiful_girl[i]);
// }


// ! what is the difference between the 'of' and 'in' keyword?
// in keyword
// i represent the index at each iteration.
// for(const i in beautiful_girl){
//     console.log(i, beautiful_girl[i])
// }

// of keyword
// i represents the value at each iteration.
// for(const i of beautiful_girl){
//     console.log(i);
// }

// for(const attribute in user) {
//     console.log(attribute);
// }

// for(const _a of user) {
//     // of cannot be used to iterate on objects
//     console.log(_a);
// }

// !  why in keyword works on objects and not of keyword.
// ! senior level question.

/**
 //! how can you print the values of the 
 //! object using 'in' keyword?
*/

//! print the values of object without using '.' operator

//! print the values of object without using '.' keyword and 
//! do not use in keyword.

// for(const attribute in user){
//     console.log(user[attribute])
// }

// Object.keys(user).forEach(attribute => console.log(user[attribute]));