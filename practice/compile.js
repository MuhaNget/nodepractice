const Alien = require('./alians');

const aliens = new Alien('Muha', 22);

console.log(aliens.details());

// Displays the directory for the fill
console.log(__dirname);

// Displays the directory including the filename
console.log(__filename);