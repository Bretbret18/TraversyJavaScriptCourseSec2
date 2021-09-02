// ** NUMBERS AND THE MATH OBJECT ** //
// Set num variables
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.random();
// val = Math.random() * 20 + 1;
// val = Math.floor(Math.random() * 20)


// // Math is an OBJECT, meaning it has properties and methods
// // a PROPERTY is basically an attribute
// // a METHOD is a function inside of an object

// console.log(val);

// ** NUMBERS AND THE MATH OBJECT END ** //
///////////////////////////////////////////////////////////

// ** STRING METHODS AND CONCATENATION ** //
// Concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'web design, development, security';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length; // property, not method 
// // parenthesis are for methods

// // concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt()
// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ')
// val = tags.split(',');

// // replace
// val = str.replace('Brad', 'Jack');

// // includes()
// val = str.includes('Hello');

// console.log(val);

// ** STRING METHODS AND CONCATATION END ** //
//////////////////////////////////////////////////////////

// ** TEMPLATE LITERALS ** //

// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template literals (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + 
//  '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';   

// html = '<ul>' + 
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>'

//     function hello() {
//         return 'hello there';
//     };

// // With Template Literals (es6)
// // NOTE *** line 142 is a turnary operator if statement
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city} </li>
//         <li> ${2 + 2} </li>
//         <li> ${hello()}</li>
//         <li> ${age > 30 ? 'Over 30' : 'Under 30'} </li>
//     </ul>
// `;

//  const demo = document.querySelector('#demo').innerHTML = html;

// ** END TEMPLATE LITERALS ** //
///////////////////////////////////////////////////////////

// ** ARRAYS AND ARRAY METHODS ** //
// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22,'Hello', true, undefined, null, {a: 1, b: 1}, new Date()];

// console.log(mixed);

// let val;

// // Get array length
// val = numbers.length;
// // check to see if is array
// val = Array.isArray(numbers);
// // Get single value from array
// // REMEMBER arrays are 0 based (starts index from 0)
// val = numbers[3];
// val = numbers[0];
// // insert into array
// numbers[2] = 100; 
// // Find index of value
// val = numbers.indexOf(36);


// MUTATING ARRAYS
// push() adds on to the end of array
// numbers.push(250);
// // unshift() adds on to the front of array
// numbers.unshift(120);
// // Pop() Take off from end of array
// numbers.pop()
// // shift() Take off from front
// numbers.shift();
// // Splice() values
// numbers.splice(1, 3);
// // Reverse() array
// numbers.reverse()

// // CONCATENATE() ARRAYS
// val = numbers.concat(numbers2);

// sort() arrays
// val = fruit.sort();
// val = numbers.sort();

// Use the "compare function"
// val = numbers2.sort(function(x, y) {
//     return x - y;
// });

// // reverse() sort
// val = numbers.sort(function(x, y) {
//     return y - x;
// });

// find()
// function under50(num) {
//     return num < 50;
// } ;

// val = numbers.find(under50)


// console.log(numbers);
// console.log(val);











