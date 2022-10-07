const {people, ages} = require('./people');

console.log(people, ages);

people.forEach((person)=>{
    console.log(person);
})

ages.forEach((age)=>{
    console.log(age);
})


const os = require('os');

console.log(os.platform());
console.log(os.homedir());


