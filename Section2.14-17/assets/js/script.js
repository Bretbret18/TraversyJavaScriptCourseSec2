// ** OBJECT LITERALS ** //
// Note 'this'
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 36,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports',],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function() {
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person;
// // Get Specific Value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23},
//     {name: 'Nancy', age: 21},
//     {name: 'Jeff', age: 43},
// ];

// for (let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// };

// ** OBJECT LITERAL END ** //
///////////////////////////////////////////////////////////

// ** DATES AND TIME ** //
// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.toString();
// 0 based!
// val = today.getMonth();
// val = today.getDate()
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);
// console.log(val);

// ** DATES AND TIME END ** //
//////////////////////////////////////////////////////////

// ** IF STATEMENTS AND COMPARISON OPERATORS ** //

// if (something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO 
// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// };

// // NOT EQUAL TO
// if (id != 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// };

// // EQUAL TO VALUE AND TYPE
// // When in doubt, use ===
// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// };

// test if undefined
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// GREATER OR LESS THAN
// if (id >= 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// };

// IF ELSE

// const color = 'yellow';

// if (color === 'red') {
//     console.log('Color is red');
// } else if (color === 'blue') {
//     console.log('Color is blue');
// } else if (color === 'orange') {
//     console.log('Color is orange');
// } else {
//     console.log('Color is not red, blue, or orange');
// }

// const name = 'Steve';
// const age = 14;

// // AND &&
// if (age > 0 && age < 12) {
//     console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`);
// };

// // TERANARY OPERATOR
// // if true === CORRECT , else INCORRECT
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if(id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// };

// ** IF STATEMENTS AND COMPARISON OPERATORS END ** //
///////////////////////////////////////////////////////////

// ** SWITCHES ** //

// const color = 'yellow';

// switch (color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// };

// let day;

// switch(new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         break;
//         case 1:
//         day = 'Monday';
//         break;
//         case 2:
//         day = 'Tuesday';
//         break;
//         case 3:
//         day = 'Wednesday';
//         break;
//         case 4:
//         day = 'Thursday';
//         break;
//         case 5:
//         day = 'Friday';
//         break;
//         case 6:
//         day = 'Saturday';
//         break;
// };

// console.log(`Today is ${day}`);

// ** SWITCHES END ** //
//////////////////////////////////////////////////////////






















