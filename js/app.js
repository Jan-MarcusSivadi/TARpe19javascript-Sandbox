console.log('Hello, World!');

//template literals
const name = 'John';
const age = 25;
const job = 'Web Developer';
const city = 'London';

console.log(typeof(name));
console.log(typeof(age));

//function declaration
function hello() {
    return 'hello';
}

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

document.body.innerHTML = html;