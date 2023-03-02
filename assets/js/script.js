
// alert("Hello World");

//Date Type
//String
"this is a string"
'hello world'

// numbers
// 1    
// 4500

// console.log("I am learning javascript");
console.log(200+300); 

//Variables
var name = "jason";
let firstName = "jason" //Camel Casing 

var num1 = 200;
var num2 = 300;

num1 = 1000;
var sum = num1 + num2;
console.log(sum);

const tel = 012454534;  //cannot reassign const (constant)

let tel1 = 2374535890;
tel1 = 2;

console.log(tel1);

//Boolean
// true
// false
const isNight = true;
const isCold = false;
console.log(isNight);

const temp = 27;

//Arrays (List)
const fruit1 = 'apple';
const fruit2 = 'orange';
const fruit3 = 'kiwi'

const fruits = ['apple', 'orange', 'kiwi'];
const fruits1 = [fruit1, fruit2, fruit3];
console.log(fruits)
console.log(fruits1);

//DOM interaction
console.log(window);

console.log(window.document);
const h1 = document.getElementById("heading");
console.log(h1);

//Adding attribut to an element by its id
// document.getElementById("heading").style.color='red';
// document.getElementById("heading").style.backgroundColor='rgb(100,200,50)';
// document.getElementById("heading").style.border='2px solid black'

// const heading = document.getElementById("heading")
// heading.style.color= 'red';


//Querry Selector
const heading = document.querySelector("#heading").style.color='#f66';
document.querySelector(".text").style.backgroundColor = 'yellow';
document.querySelector('img').style.border = "3px solid black ";
document.querySelector('h1').style.fontSize = '5rem';
document.querySelector('img').setAttribute('alt', 'my awesome photo');
document.querySelector('.text').setAttribute('id','txt');
document.querySelector('.heading').removeAttribute('class')

//adding class attribute to html > body
document.body.classList.add('homepage');
// document.body.className = 'homepage';

//Create element with content to html > body
const h2 = document.createElement('h2')
h2.textContent="hello world again";
document.body.append(h2); //Adding h2 to body





