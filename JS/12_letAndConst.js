//=================== ES 6 ==============================
// block scope

for (let i = 0; i < 10; i++ ) {
  console.log(i)
}

const todoList = ['Di hoc', 'Lam bai tap ve nha'];

todoList = 3; // Not work here

// Always define as const, only change to let if we change that value later

//=================== ES 5 ==============================

// scope
// global scope
var firstName = "David";

// functional scope
function getName() {
  var lastName = 'Nguyen';

  return firstName + ' ' + lastName;
}

console.log(getName());
