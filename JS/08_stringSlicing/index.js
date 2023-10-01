/*
  slice() extract a section of a string
          and return it as a new string
          without modifying the original tring
*/

let fullName = 'Nguyen Quang Anh';
let firstName;
let lastName;

// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(13);

firstName = fullName.slice(0, fullName.indexOf(' '));
lastName = fullName.slice(fullName.lastIndexOf(' ') + 1);

console.log(firstName)
console.log(lastName)
