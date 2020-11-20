const button = document.querySelector('#btn');
const image = document.querySelector('#img');
var toggle = -1;

button.addEventListener('click', (event) => { // 'click' is an event; () => can also be function()
    console.log('Hello from button click!');
    //console.log(image);

    if (toggle == -1) image.src = 'img/2.png';
    else image.src = 'img/1.jpg'
    event.preventDefault();

    toggle *= -1;
    console.log(toggle);
});

console.log('Hello, World!');

//template literals
const name = 'John';
const age = 25;
const job = 'Web Developer';
const city = 'London';

console.log(typeof(name));
console.log(typeof(age));


//let html = '<ul><li>Name: ' + name + '</li></ul>';
let html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
<ul>
`;

//document.body.innerHTML = html;

//arrays and arrays methods ----
let fruit = ['apples', 'orange', 'bananas'];
console.log(fruit);

//add an element to the array
fruit.push(true);

//a way of deleting elements starting from index 0 from the array
//fruit.shift();

//another way of adding to the array
fruit.unshift('tomato');


let orangeIndex = fruit.indexOf('orange');
console.log('indexx of orange', orangeIndex);

fruit.splice(orangeIndex, 1);

showArray(fruit);


//Date and Time
let today = new Date();
console.log(today);
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
console.log(day, month, year);

let options = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

let birthday = new Date('March 13 2003');
let fullBirthday = birthday.toLocaleDateString("en-US", options);
console.log(birthday);


//function declaration ----
function hello() {
    return 'hello';
}

function showArray(fruit) {
    fruit.forEach(element => {
        console.log('Hello from fruit', element, typeof(element));
    });
}





