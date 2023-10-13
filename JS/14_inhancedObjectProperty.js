// ES6
// Enhanced Object Property
// Property shorthand: don't have to write property and key if they are the same
// Method property: getName
// Computed property key

function person2(name, age) {
  const salary = 'salary'
  return {
    name,
    age,
    getName() {
      return this.name + ' ' + this.age;
    },
    [`${salary}OfDavid`]: 2000
  };
}

console.log(person2('David', 22))

//  ES5

function person(name, age) {
  return {
    name: name,
    age: age,
    getName: function() { 
      return this.name + ' ' + this.age;
    }
  };
}

console.log(person('Quang Anh', 24))
