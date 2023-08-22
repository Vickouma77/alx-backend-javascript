#!/usr/bin/node
const readline = require('readline');

//create an interface to read from stdin
const rl = readline.createInterface({
    input: process.stdin,
});

//print a message
console.log('Welcome to Holberton School, what is your name?');

//listen to the line event
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close();
});

//listen to the close event
rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0);
});
