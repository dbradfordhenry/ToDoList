// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA ['Bob', 'Sue', 'Jim'];
// var groupB ['Bill'];

var nameA = ['Derrick', 30];
var nameB = ['Beata', 29];

function makeGreeting(name, age){
  return ('Hello, ' + name + '. You are ' + age + ' years old.');
}

// console.log(makeGreeting(...nameA));
// console.log(makeGreeting(...nameB));

var names = ['Thor', 'Jim', 'Herman'];
var final = ['Derrick'];

final = [...final, ...names];

final.forEach(function(element) {
 console.log(element);
});
