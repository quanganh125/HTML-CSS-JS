/*
  While loops = repeat some code while some consition is true,
                potentially infinite
*/

// let userName = '';
// while (userName == '') {
//   userName = window.prompt('Enter user name');
// }
// console.log('Hello', userName);

/*
  Do while loops =  Do something and then check the condition,
                    Repeat if condition is true
*/

// let userName;
// do {
//   userName = window.prompt('Enter user name');
// } while (userName == '');
// console.log('Hello', userName);

/*
  For loop = Repeat somecode a certain amount of time
*/

for (let counter = 1; counter <= 20; counter++) {
  // if (counter == 13) break;
  if (counter == 13) continue;
  console.log(counter);
}

// break = breaks out of a loops entirely
// continue = skip an iteration of a loop
// nested loop = a loop inside anoter loop;
