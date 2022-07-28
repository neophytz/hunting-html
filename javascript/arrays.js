// why array?
// const marks_of_s1 = 2;
// const marks_of_s2 = 2;
// const marks_of_s3 = 2;
// const marks_of_s4 = 2;
// const marks_of_s5 = 2;
// const marks_of_s6 = 2;
// const marks_of_s7 = 2;
// const marks_of_s8 = 2; 

// there can bbe 1000 students!!  
// in that case will you make 1000 variables?

// we use something called arrays

// syntax | initialization
const marks_of_students = [0, 5, 6, 8, 9, 5];
const course_students = ['tanu', 'roy', 'vansh', 'omi', 'kanchan'];

// course_students = 'sachin';
// course_students = [];

// console.log('marks of students');
// console.log(marks_of_students);

// access the elements?
// 0 based index which means 1st element  is at index 0 and nth element in at n-1 index.
// we use index to access the value in the array
// console.log(course_students[0]);
// console.log(course_students[4]);
// in c++ or java - it gives index out of bound exception.
// console.log(course_students[6]); // undefined

// update the value
// course_students[0] = 'shobhan'; 
// console.log(course_students);

// what if you update 10 value?? and there are only 5 elements in the array?
// course_students[7] = 'rachit';
// ! ans - solution: element gets added at ith position and cavity if filled with undefined.
// console.log(course_students);
// for(const el of course_students) {
//     console.log(el);
// }


/*--------array methods-------*/

// methods
marks_of_students.push(10);
// adds the element in the end;
// console.log(marks_of_students);

// add the element in the start??
// console.log(marks_of_students);
marks_of_students.unshift(10);
// console.log(marks_of_students);

// removes the element
marks_of_students.pop();
// console.log(marks_of_students);

// remove an element form an ith position
// first argument index, second argument - count that you want to remove.
const retVal = course_students.splice(2, 2);
// retVal contains the deleted elements.
// console.log(retVal);

// add an element at ith position
course_students.splice(2, 0, 'manav');
// console.log(course_students);

//! interview question : 
// * how can you update an element in array without using [] operator
// ans -> use splice(index, 1, 'updated_value')

// arrays and iteration methods
const students = [  
    {
        name: 'sachin',
        age: 10,
    },
    {
        name: 'roy',
        age: 52
    },
    {
        name: 'tanu',
        age: 16
    },
    {
        name: 'yadav',
        age: 21
    },
]

// console.log(arr_of_students);
// console.log(arr_of_students[3])

// const callBack = val => {
//     console.log('printed from call back function');
//     console.log(val);
// }

// const square = val => val ** 2;

// function as argument is callback function
// value, index, arr_itself
// it does not return anything!! 
// and is used to iterate over all the elements
const retValForEach = students.forEach((val, index, arr) => {
    // console.log(val, index, arr);
    if(val.age < 10){
        val.age += 2;
    } else {
        val.age += 1;
    }
});
// console.log(students);

// map 
// ! will be used a lot in react;
const nums = [2,4,5,6,7,8];
const square = nums.map(el => {
    // do something with val;
    return el * el;
});
// console.log(square);
// console.log(nums);

// filter
// it filters the values from the array based on some condition;
// returns values that matched thhheh condition in a new array;
// if no values matched in that case, return an empty array;
const evenNums2 = [1,2,3,5,6,7,8,9,99];
const v = evenNums2.filter(el => el >= 100);
// console.log(v);

//! reduce
// you want to calculate sum of all values in the array??
const valForSum = [1,2,3,4];
// traditional method!!
let sum = 0;
for(let i =0; i < valForSum.length; i++){
    sum += valForSum[i];
}
// console.log(sum);

let _sum = 0;
valForSum.forEach(el => _sum += el);
// console.log(sum);

let __sum = valForSum.reduce(function(acc, curr){
    acc += curr
    return acc;
}, 0);

console.log(__sum);


// every
// if all element in the array satisfied a given condition, return true else false;
const table_of_3 = [3,6,9,12];
const isValidTableOf3 = table_of_3.every(el => el % 3 === 0);
// console.log(isValidTableOf3);

// some
// if even one element satisfies a given condition, return true else false;
const table_of_2 = [2,4,6,8,10];
const isInValid = table_of_2.some(el => el % 2 !== 0);
// console.log(isInValid);

//! fill
const newArr = Array(10);
// Changes all array elements from start to end index to a static value and returns the modified array
// with a defined value
// default start = 0
// default end = arr.length

newArr.fill(10);
// console.log(newArr);

const evenNums = [2,4,5,6,8];
//! find 
// use case - if you have an array of objects and want to find the complete objects using the partial information available.
// finds a value and return it!!
// if value does not exist, it return undefined.
// if multiple values exist, it returns first occurance.
const ret = evenNums.find(el => el % 2 === 0);
const sachin = students.find(student => student.age === 10);
// console.log(ret, sachin);

//! findIndex - find the index of something in array
// if value that we are looking for does not exist in the array, it returns -1;
// if multiple values exist, it return the first occurance;
const index = evenNums.findIndex(el => el % 2 === 0);
// console.log(index, 'value is - ' , evenNums[index]);
