// variable or statements
// let -> keyword | reserved words that a user cannot use.
// nature of variables in js?

//! drawback!!
// loosely typed programming language!! - no bound on datatype
// let variable_name = "sachin"; // string
// console.log(variable_name);
// variable_name = 5/2;
// console.log(variable_name);

// data types supported in js
let a = 112, b = 22, c = "somebody", d = 'c', e = 23.444, f = null, g = false;
// console.log(f);

// char are not present
let age = "10";
// if(age === 10) {
//     console.log('condition passes');
// } else {
//     console.log('condition failed');
// }

// if(age !== 10) {
//     console.log('condition passes');
// } else {
//     console.log('condition failed');
// }

// if(age < 10) {
//     console.log('condition 1 passes');
// } else if(age < 20) {
//     console.log('condition 2 passes');
// } else {
//     console.log('condition failed');
// }


const exception = "omi", LEGAL_DRINKING_AGE = 18;
// const name = window.prompt("please enter your name");
// const _age = window.prompt('Age please?');
// if(name !== exception && _age >= LEGAL_DRINKING_AGE) {
//     console.log("you are allowed to drink in morocco");
// } else if(name === exception) {
//     console.log('you are VVVIP');
// } else {
//     console.log('chale jaaa ____')
// }

// const sachin = 'teaching', SACHIN = "another value";
// console.log(sachin, SACHIN);


// || operator
const wearingSchoolUniform = false;
const carryingIdCard = false, admissionLetter = false, admitCard = false;

// if(carryingIdCard || wearingSchoolUniform || admissionLetter || admitCard){
//     console.log('you are allowed to enter the school');
// } else {
//     console.log('chale jaaa ____')   
// }

// comparison operators

/**
  == : only compares the value of two variables
  === : checks the values and type of two variables
  != : only checks for value
  !== : check for type and value;
  >
  <
  >=
  <=

  // ! chaining operator
  && -> and operator
  ||
*/

// let, var, const
// int, char, bool, float, double, long -> data types in c or c++;



// arthimetic operators 

/**
 * + : zheid | jogi   |  
 * - : nakis | biyog  |  gtaa
 * * : drrd (pain) | gunn   |  gunna
 * ** :  exponential
 * / : piismo | division | 
 * % : modulo | remainder
 * ++ : increase by one;
 * -- : decrease value by one;
*/

// console.log(2**3);
// let _number = 10;

// console.log(_number--);
// console.log(_number);

/**
 * ASSIGNMENT OPERATORS
 * =
 * +=
 * -=
 * /=
 * %=
 * *=
 * **=
 * 
 * <<=
 * >>=
 * &=
 * ^=
 * 
 * |= 
 * 
 * ! important
 * ||= : will be used quite a lot, (if you are smart developer)
 */


let i = 10;

i *= 2; // short form of i = i * 2;
// 20
i += 10; // short form of i = i + 10;
// 30
i /= 2; // short form of i = i / 10
// 15
i -= 10; // i = i - 10;
// 5


let z = 10;
z %= 2; // z = z % 2;


// imagine an api response that does not return anything!!
let user_name ;
// console.log('user has given an input - ', user_name);
user_name ||= 'some default value'; // default case;

// it is same as that of
// if(user_name === null || user_name === undefined || user_name == false) {
//     user_name = 'some default value';
// }

// console.log(user_name);


// negation operator
let condition = "";
// console.log(!undefined, !null, !0, !"", !false);
// output - true

/**
 * undefined  = false
 * null = false
 * false = false
 * 0 = false
 * "" = false
 */

// use case - to check weather a value is defined or not we use
const defined = "value";
// console.log(!!defined);

// let foo = "sachin";
// console.log(typeof foo);
// foo = 10;
// console.log(typeof foo);
// foo = 1.22;
// console.log(typeof foo);
// foo = {name: "sachin"};
// console.log(typeof foo);
//! foo = foo.duhan; ! developer was expecting a attribute
// console.log(typeof foo);


// ** OBJECTS
// WHY Everything IN JS IS OBJECT?

const user = {
    name: 'sachin',
    user_name: 'sachin_duhan',
    age: 10,
    address: {
        line1: 'DTU',
        state: 'delhi',
        pincode: 110042
    }
}

// console.log(user.address.line1)