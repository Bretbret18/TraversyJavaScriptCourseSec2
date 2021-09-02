// ** FUNCTION DECLARATIONS AND EXPRESSIONS ** //
// FUMNCTION DECLARATIONS

// function greet(firstName, lastName) {
//     return 'Hello ' + firstName + ' ' + lastName;
// };

// console.log(greet('Mark', 'Apple'));

// function greet(firstName = 'Jeff', lastName = 'Jones') {
//     // if(typeof firstName === 'undefined'){firstName = 'John'}
//     // if(typeof lastName === 'undefined'){lastName = 'Doe'}
//     // console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet());
// console.log(greet('Steve', 'Smith'));

// FUNCTION EXPRESSIONS
// *** notice that not parameter passed when calling function
// uses 3 by default.
// *** if arguement is passed in function call, than that
// integer is used instead.
// const square = function(x = 3) {
//     return x * x;
// };

// console.log(square());
// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function() {
//     console.log('IIFE Ran...');
// })();

// (function(name) {
//     console.log('Hello ' + name);
// })('Bret');

// PROPERTY METHODS
// When a function is put inside of a object, it's called 
// a Method

// const todo = {
//     add: function(){
//         console.log('Add todo...');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// };

// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add()
// todo.edit(22)
// todo.delete()

// ** FUNCTION DECLARATIONS AND EXPRESSIONS END ** //
///////////////////////////////////////////////////////////

// ** GENERAL LOOPS ** //
// FOR LOOPS, WHILE LOOPS, DO WHILE LOOPS <- 3 most commonly
// used loops in JS

// FOR LOOP

// NOTE *** This loop would is a good way to handle coding
// quiz challenge array!
// for(let i = 0; i <= 10; i++) {
//     if (i === 2) {
//         console.log('2 is my favourite number');
//         continue;
//     }
//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }

//     console.log(`Number ` + i);
// };

// GENERAL RULE //
// Use for loop when you know iteration amount
// Use while when iteration amount is unclear
// This rule is not always black and white

// WHILE LOOP

// let i  = 0;

// while(i < 10) {
//     console.log(`Number ` + i);
//     i++;
// };

// DO WHILE LOOP

// let i = 1;
// // i = 100;

// // do runs no matter what, even if while condition isn't met
// do {
//     console.log(`Number ` + i);
//     i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
//  cars = [
//     'Ford',
//     'Chevy',
//     'Honda',
//     'Toyota'
// ];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// };

// forEach()
// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// })

// map()
// take array of objects and create array of ids for users
// also worth consider using map for codingQuizProject
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sarah'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'},
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);

// FOR ... IN LOOP

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// };

// for(let x in user) {
//     // console.log(x);
//     console.log(`${x} : ${user[x]}`);
// };

// ** GENERAL LOOPS END ** //
///////////////////////////////////////////////////////////

// ** A LOOK AT THE WINDOW OBJECT ** //
// Window is global object in client side JS

// WINDOW METHODS / OBJECTS / PROPERTIES
// window.console.log(123);

// Alert
// alert('Alert!');

// Prompt . takes in input
// const input = prompt();
//     alert(input)

// Confirm
// if(confirm('Are you sure?')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// };

// Height / Width of window
// let val;

// // Outter height and width of window
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner Height and Width of window
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll Points
// val = window.scrollX;
// val = window.scrollY;

// // Location Object
// val = window.location;
// // domain name
// val = window.location.hostname;
// // port number
// val = window.location.port;

// val = window.location.href;
// val = window.location.search;

// can use location object to redirect or reload page

// Redirect
// example redirects to google
// window.location.href = 'http://google.com';

// reload page
// window.location.reload();

// History Object

// window.history.go(-1)
// val = window.history.length

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;


// console.log(val);

// ** A LOOK AT THE WINDOW OBJECT END ** //
////////////////////////////////////////////////////////

// ** BLOCK SCOPE WITH let AND const ** //
// Global Scope

// var has a function scope
// let and const have a global scope

// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// };

// test();

// if (true) {
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);
// };

// for(var a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);


















