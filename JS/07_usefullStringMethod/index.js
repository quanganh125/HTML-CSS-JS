// Usefull string properties and methods

let userName = '   Quang Anh  ';
let phoneNumber = '123-456-7890';

console.log(userName.length);
console.log(userName.charAt(8))
console.log(userName.indexOf('n'));
console.log(userName.lastIndexOf('n'));

userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll('-', '.');

console.log(userName)
console.log(phoneNumber)
