// ES6
// Extended parameter handling
//    1. Default parameter
//    2. Rest parameter

function getNameES6(name = 'Sam', age = 30, ...rest) {
  console.log(name + ' ' + age);
  console.log('rest', rest);
}

getNameES6('David', 23, 'IT', 2000);

//    3. Spread Operator
const todoList = ['Di hoc', 'Da bong', 'Nau com'];
const todoListMore = ['Lam bai tap', 'Di sieu thi', ...todoList];
console.log('todoListMore', todoListMore);

const person = {name: 'David', age: 23};

const worker = {
  job: 'Worker',
  ...person
}

console.log(worker)

// ES5
// function getName(name, age){
//   console.log(name + ' ' + age);
// }

// getName();
