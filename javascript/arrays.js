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
console.log(course_students[0]);
console.log(course_students[4]);
// in c++ or java - it gives index out of bound exception.
console.log(course_students[6]); // undefined

// update the value
course_students[0] = 'shobhan'; 
console.log(course_students);

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
marks_of_students.unshift(-1);

// removes the element
marks_of_students.pop();
// console.log(marks_of_students);

// remove an element form an ith position
// first argument index, second argument - count that you want to remove.
const retVal = course_students.splice(2, 1);
// retVal contains the deleted elements.
console.log(course_students);

// add an element at ith position
course_students.splice(2, 0, 'manav');
console.log(course_students);

//! interview question : 
// * how can you update an element in array without using [] operator
// ans -> use splice(index, 1, 'updated_value')

