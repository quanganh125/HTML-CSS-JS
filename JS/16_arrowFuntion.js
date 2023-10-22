// ES6

var person = {
  name: 'David',
  age: 22,
  getDecription: function() {
    console.log('Toi ten la ' + this.name);

    const getAge = () => {
      console.log('Nam nay toi ' + this.age);
    };

    getAge()
  },
};

person.getDecription()

// ES5

// var person = {
//   name: 'David',
//   age: 22,
//   getDecription: function() {
//     console.log('Toi ten la ' + this.name);
//     var that = this;

//     function getAge () {
//       console.log('Nam nay toi ' + that.age);
//     };

//     getAge()
//   },
// };

// person.getDecription()
