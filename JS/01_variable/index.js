/*
  Two Steps:
    1. Declaration: var, let, const
    2. Assignment: = assignment operator
*/

let firstName = 'Bro'
let age = 21;
let student = false;

age = age + 1

console.log('Hello', firstName);
console.log('You are', age, 'years old');
console.log('Enrolled:', student);

document.getElementById('name').innerHTML = 'Hello' + firstName;
document.getElementById('age').innerHTML = 'You are' + age + 'years old';
document.getElementById('enroll').innerHTML = 'Enrolled:' + student;
