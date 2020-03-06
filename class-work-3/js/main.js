// Метод includes

// const str = 'Hello world';
//  console.log(str.includes('Hello'));// находит подстроку в строке


// const str = 'Hello world, welcome to universe';
// console.log(str.indexOf('welcome'));// indexof - передает индекс слова

//********************************************/

// МЕтод split - разделитель

// const str = 'How are you doing today?';
// console.log(str.split(' ', 3));

// Метод substr       *схоже с splice and slice!

// const str = 'Heello world';
// console.log(str.substr(1, 4));

// // Метод substring

// console.log(str.substring(1, 4));

//**********************************/

//Шаблоны строк

// const name = 'John';
// const age = 20;
// const sex = 'male';

// //es-5 старая версия
// //const personeDescription = 'Name: '+ name +' Age: ' + age + ' Sex: ' + sex;

// // es-6
// const personeDescription = `Name: ${name} Age: ${age * 2} Sex: ${sex}`;
// console.log(personeDescription);


// const message = 'Hello \n I\'m John \ and I love this emotion \\ (-_-) /'; // "\" экранизирующий знак
// console.log(message);


// REgExp - регулярные выражения

// const regexp1 = /l/gi;
// const regexp2 = new RegExp('l', 'g');
// const regexp3 = new RegExp(/l/, 'g');
// const regexp4 = RegExp(/l/, 'g');

// let str = "HeLLo world";

// //Метод replace

// const result = str.replace(regexp1, '#');
// console.log(result);

//const str = 'Please open the book on page №7';
// console.log(str.match(/\d/gi)); // use - \d
//console.log(str.replace(/\w/gi, '#'));  //use -\w
//console.log(str.replace(/\s/gi, '-')); // use \s
//console.log(str.replace(/\D/gi, '#'));  //use -\D
//console.log(str.replace(/\W/gi, '#'));  //use -\W
//console.log(str.replace(/\S/gi, '#'));  //use -\S


//const str = 'Please open the book on page №7';

//console.log(str.replace(/[A-Za-z]/g, '*'));  // use [A-Za-z]
//console.log(str.replace(/[a-j]/g, '*'));  // use [a-j]
//console.log(str.replace(/[^a-j]/g, '*')); //use ^
//console.log(str.replace(/[^\w|\s]/gi, '')); //use ^
//console.log(str.replace(/[a|b]/gi, '*')); //use ^


//********************************************************* */

// const str = 'Unix time 01.01.1970';
// const result = str.match(/\d{2}\.\d{2}\.\d{4}/gi);
// console.log(result);

// const phone1 = '+3809511122233';
// const phone2 = '38 (098) 111 22 33';
// const simplePhoneRegExp = /^\+?(\d+\s?((\(\d+\))|(\d{3}))\s?\d{3}\s?\d{2}\s?\d{2})$/;

// console.log(simplePhoneRegExp.test(phone1));
// console.log(simplePhoneRegExp.test(phone2));